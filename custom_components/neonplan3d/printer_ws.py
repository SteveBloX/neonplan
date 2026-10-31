"""The real part of a 3D print: fetched from the printer, shown inside the printer's model.

The access to a printer (its address, the LAN-mode access code, the pinned certificate) is kept here, per furniture item,
and is never sent to a browser: the card only learns whether a code is set. Anyone who can open the card may ask for the
part of the running print; only admins change the access.
"""

from __future__ import annotations

import asyncio
import ipaddress
import logging
import re
import time
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.storage import Store
import voluptuous as vol

from .const import DOMAIN
from .printer3mf import ModelError, read_model
from .printer_ftp import PrinterFtpError, fetch_3mf, normalize_fingerprint, probe

_LOGGER = logging.getLogger(__name__)

STORAGE_KEY_PRINTERS = f"{DOMAIN}.printers"
DATA_PRINTERS = f"{DOMAIN}_printers"
FAILURE_PAUSE = 60.0  # seconds before a failed fetch is tried again
_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))
_HOST_RE = re.compile(r"^[A-Za-z0-9]([A-Za-z0-9.\-]{0,251}[A-Za-z0-9])?$")


def _host(value: Any) -> str:
    """A printer's address: a host name, or an IP address of the local network (a public one is no printer of the house)."""
    if not isinstance(value, str) or not _HOST_RE.match(value.strip()):
        raise vol.Invalid("not a host name or address")
    host = value.strip()
    try:
        address = ipaddress.ip_address(host)
    except ValueError:
        return host
    if not (address.is_private or address.is_link_local or address.is_loopback):
        raise vol.Invalid("not an address of the local network")
    return host


class _Printers:
    """The access data and the last part fetched of each printer."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.store: Store[dict[str, Any]] = Store(hass, 1, STORAGE_KEY_PRINTERS)
        self.access: dict[str, dict[str, str]] = {}
        self.loaded = False
        self.models: dict[str, dict[str, Any]] = {}
        self.failed: dict[str, tuple[str, float, str]] = {}
        self.locks: dict[str, asyncio.Lock] = {}

    async def async_load(self) -> None:
        if not self.loaded:
            data = await self.store.async_load()
            self.access = dict((data or {}).get("printers", {}))
            self.loaded = True

    def save(self) -> None:
        self.store.async_delay_save(lambda: {"printers": self.access}, 1.0)


async def _printers(hass: HomeAssistant) -> _Printers:
    printers: _Printers | None = hass.data.get(DATA_PRINTERS)
    if printers is None:
        printers = hass.data[DATA_PRINTERS] = _Printers(hass)
    await printers.async_load()
    return printers


@callback
def async_printer_commands() -> tuple:
    return (ws_access_get, ws_access_set, ws_probe, ws_model)


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/printer/access/get"})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_access_get(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Per furniture id: the address, whether a code is set and the pinned certificate (never the code)."""
    printers = await _printers(hass)
    connection.send_result(
        msg["id"],
        {
            "printers": {
                fid: {"host": a.get("host", ""), "has_code": bool(a.get("code")), "fingerprint": a.get("fingerprint", "")}
                for fid, a in printers.access.items()
            }
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/printer/access/set",
        vol.Required("furniture_id"): _ID,
        vol.Required("host"): vol.Any("", _host),
        # missing: keep the code; empty: remove it
        vol.Optional("code"): vol.All(str, vol.Length(max=64)),
        vol.Optional("fingerprint"): vol.All(str, vol.Length(max=128)),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_access_set(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Store a printer's address, code and pinned certificate."""
    printers = await _printers(hass)
    fid = msg["furniture_id"]
    entry = dict(printers.access.get(fid, {}))
    old_host = entry.get("host", "")
    entry["host"] = msg["host"]
    if "code" in msg:
        entry["code"] = msg["code"].strip()
    if "fingerprint" in msg:
        entry["fingerprint"] = normalize_fingerprint(msg["fingerprint"])
    # another address is another printer: the pinned certificate does not carry over
    if "fingerprint" not in msg and old_host and old_host != msg["host"]:
        entry["fingerprint"] = ""
    if not entry.get("host") and not entry.get("code"):
        printers.access.pop(fid, None)
    else:
        printers.access[fid] = {k: v for k, v in entry.items() if v}
    printers.models.pop(fid, None)
    printers.failed.pop(fid, None)
    printers.save()
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/printer/probe", vol.Required("host"): _host})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_probe(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The certificate fingerprint a printer presents (only the TLS handshake happens, no code is sent)."""
    try:
        fingerprint = await hass.async_add_executor_job(probe, msg["host"])
    except PrinterFtpError as err:
        connection.send_error(msg["id"], "printer_error", str(err))
        return
    connection.send_result(msg["id"], {"fingerprint": fingerprint})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/printer/model",
        vol.Required("furniture_id"): _ID,
        vol.Optional("job"): vol.All(str, vol.Length(max=255)),
    }
)
@websocket_api.async_response
async def ws_model(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The part of the running print: its mesh in the compact form of `printer3mf.pack`."""
    printers = await _printers(hass)
    fid = msg["furniture_id"]
    job = (msg.get("job") or "").strip()
    access = printers.access.get(fid)
    if not access or not access.get("host") or not access.get("code"):
        connection.send_error(msg["id"], "printer_error", "not_set")
        return
    cached = printers.models.get(fid)
    if cached is not None and cached["job"] == job:
        connection.send_result(msg["id"], cached["model"])
        return
    failure = printers.failed.get(fid)
    if failure is not None and failure[0] == job and time.monotonic() - failure[1] < FAILURE_PAUSE:
        connection.send_error(msg["id"], "printer_error", failure[2])
        return
    lock = printers.locks.setdefault(fid, asyncio.Lock())
    async with lock:
        cached = printers.models.get(fid)
        if cached is not None and cached["job"] == job:
            connection.send_result(msg["id"], cached["model"])
            return
        try:
            name, data = await hass.async_add_executor_job(
                fetch_3mf, access["host"], access["code"], access.get("fingerprint", ""), job or None
            )
            model = await hass.async_add_executor_job(read_model, data)
        except PrinterFtpError as err:
            printers.failed[fid] = (job, time.monotonic(), str(err))
            connection.send_error(msg["id"], "printer_error", str(err))
            return
        except ModelError as err:
            reason = f"model: {err}"
            printers.failed[fid] = (job, time.monotonic(), reason)
            _LOGGER.warning("The file %s of the print of %s has no usable part: %s", name, fid, err)
            connection.send_error(msg["id"], "printer_error", reason)
            return
        except Exception:  # noqa: BLE001 - a file from the printer must never take the card down
            _LOGGER.warning("Reading the file of the print of %s failed", fid, exc_info=True)
            printers.failed[fid] = (job, time.monotonic(), "model")
            connection.send_error(msg["id"], "printer_error", "model")
            return
        model = {**model, "name": name}
        printers.models[fid] = {"job": job, "model": model}
        printers.failed.pop(fid, None)
    connection.send_result(msg["id"], model)
