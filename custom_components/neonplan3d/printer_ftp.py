"""Fetch the sliced file of the running print from a Bambu Lab printer.

In LAN mode the printer serves its storage over implicit FTPS (port 990, user `bblp`, the access code as password). Its
certificate is self-signed, so there is no authority to check it against: instead the certificate is *pinned*. The first
contact (`probe`) only completes the TLS handshake, sends nothing and reports the certificate's SHA-256 fingerprint; the
user confirms it once, and from then on a connection is dropped before the access code is sent unless the printer
presents exactly that certificate.

The file of a print is `<name>.gcode.3mf` in `/` or `/cache`. Everything here blocks: call it from an executor. Nothing of
Home Assistant is needed.
"""

from __future__ import annotations

import ftplib
import hashlib
import hmac
import re
import socket
import ssl

PORT = 990
USER = "bblp"
TIMEOUT = 20.0
DIRECTORIES = ("/", "/cache")
MAX_FILE = 200 * 1024 * 1024


class PrinterFtpError(Exception):
    """The printer could not be reached, is not the pinned one, or holds no such file."""


def normalize_fingerprint(text: str) -> str:
    """A fingerprint as 64 lower-case hex digits (colons and spaces allowed in the input), or ''."""
    digits = re.sub(r"[^0-9a-fA-F]", "", text or "").lower()
    return digits if len(digits) == 64 else ""


def _fingerprint(sock: ssl.SSLSocket) -> str:
    der = sock.getpeercert(binary_form=True)
    return hashlib.sha256(der).hexdigest() if der else ""


def _context() -> ssl.SSLContext:
    # no authority signed the printer's certificate: it is compared with the pinned fingerprint right after the
    # handshake instead (see `_PinnedFTPTLS.connect`), before anything secret is sent
    ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
    ctx.minimum_version = ssl.TLSVersion.TLSv1_2
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    return ctx


class _PinnedFTPTLS(ftplib.FTP_TLS):
    """FTP over TLS from the first byte (the printer has no AUTH TLS step), for one pinned certificate."""

    def __init__(self, pinned: str) -> None:
        super().__init__(context=_context())
        self.pinned = pinned
        self.seen = ""
        self._tls_sock: ssl.SSLSocket | None = None

    @property
    def sock(self):
        return self._tls_sock

    @sock.setter
    def sock(self, value) -> None:
        if value is not None and not isinstance(value, ssl.SSLSocket):
            value = self.context.wrap_socket(value, server_hostname=self.host)
            self.seen = _fingerprint(value)
            if self.pinned and not hmac.compare_digest(self.seen, self.pinned):
                value.close()
                raise PrinterFtpError("certificate_changed")
        self._tls_sock = value


def probe(host: str) -> str:
    """The SHA-256 fingerprint of the certificate the printer presents. Nothing is sent but the TLS handshake."""
    try:
        with socket.create_connection((host, PORT), timeout=TIMEOUT) as raw:
            with _context().wrap_socket(raw, server_hostname=host) as tls:
                return _fingerprint(tls)
    except (OSError, ssl.SSLError) as err:
        raise PrinterFtpError("unreachable") from err


def _stem(name: str) -> str:
    """A file name without its extensions and in a form that survives the slicer's renaming."""
    base = name.rsplit("/", 1)[-1].lower()
    base = re.sub(r"\.(gcode\.)?3mf$", "", base)
    return re.sub(r"[\s_\-.]+", "", base)


def pick(names: list[str], job: str | None) -> str | None:
    """The file of a job among the names: an exact match of the job name, else a file that contains it."""
    files = [n for n in names if n.lower().endswith(".3mf")]
    want = _stem(job) if job else ""
    if not files or not want:
        return None
    for name in files:
        if _stem(name) == want:
            return name
    for name in files:
        stem = _stem(name)
        if want in stem or stem in want:
            return name
    return None


def _listing(ftp: ftplib.FTP, directory: str) -> list[str]:
    try:
        return [n if n.startswith("/") else f"{directory.rstrip('/')}/{n}" for n in ftp.nlst(directory)]
    except ftplib.error_perm:
        return []


def _newest(ftp: ftplib.FTP, names: list[str]) -> str | None:
    """The most recently changed file of the list, when the printer says when files changed."""
    best: tuple[str, str] | None = None
    for name in names:
        if not name.lower().endswith(".3mf"):
            continue
        try:
            stamp = ftp.voidcmd(f"MDTM {name}")[4:].strip()
        except ftplib.all_errors:
            continue
        if best is None or stamp > best[0]:
            best = (stamp, name)
    return best[1] if best else None


def fetch_3mf(host: str, code: str, fingerprint: str, job: str | None) -> tuple[str, bytes]:
    """The name and bytes of the file of `job` (the newest file when the job is unknown) from the pinned printer."""
    pinned = normalize_fingerprint(fingerprint)
    if not pinned:
        raise PrinterFtpError("not_trusted")
    ftp = _PinnedFTPTLS(pinned)
    try:
        ftp.connect(host, PORT, timeout=TIMEOUT)
        ftp.login(USER, code)
        ftp.prot_p()
        names: list[str] = []
        for directory in DIRECTORIES:
            names.extend(_listing(ftp, directory))
        name = pick(names, job) if job else _newest(ftp, names)
        if name is None:
            raise PrinterFtpError("no_file")
        try:
            if (ftp.size(name) or 0) > MAX_FILE:
                raise PrinterFtpError("too_big")
        except ftplib.all_errors:
            pass
        chunks: list[bytes] = []
        total = 0

        def take(block: bytes) -> None:
            nonlocal total
            total += len(block)
            if total > MAX_FILE:
                raise PrinterFtpError("too_big")
            chunks.append(block)

        ftp.retrbinary(f"RETR {name}", take)
        return name, b"".join(chunks)
    except PrinterFtpError:
        raise
    except ftplib.error_perm as err:
        raise PrinterFtpError("login" if str(err).startswith("530") else "ftp") from err
    except (OSError, EOFError, ftplib.Error) as err:
        raise PrinterFtpError("unreachable") from err
    finally:
        try:
            ftp.close()
        except OSError:
            pass
