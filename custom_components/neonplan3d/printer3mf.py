"""The part of a sliced 3MF file, as a small mesh a browser can draw.

A Bambu Lab `.gcode.3mf` is a zip: `3D/3dmodel.model` lists the objects of the plate (a build item per object, each a
mesh or components that point into `3D/Objects/*.model`), in millimetres and with a 3x4 transform per item. This module
flattens all of that into one triangle list, thins it to a few ten thousand triangles and packs it:

* `verts`: uint16 x, y, z per vertex, scaled into the bounding box,
* `idx`: uint32 vertex numbers, three per triangle, the triangles sorted by their lowest point so that a renderer shows
  "the part up to this height" by drawing the first N of them.

It needs nothing from Home Assistant, so it can be tested alone.
"""

from __future__ import annotations

from array import array
import base64
import io
import sys
from typing import Any
import xml.etree.ElementTree as ET
import zipfile

MAX_ARCHIVE_MEMBER = 400 * 1024 * 1024  # bytes of one model file once unpacked
MAX_INPUT_TRIANGLES = 4_000_000
MAX_TRIANGLES = 50_000  # what is sent
MAX_DEPTH = 4  # components inside components

Matrix = tuple[float, ...]  # 12 numbers: the 3MF transform, row vectors (x' = x*m0 + y*m3 + z*m6 + m9)
IDENTITY: Matrix = (1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0)


class ModelError(Exception):
    """The file holds no part that could be drawn."""


def _local(tag: str) -> str:
    return tag.rsplit("}", 1)[-1]


def _attr(el: ET.Element, name: str) -> str | None:
    """An attribute by its local name (`p:path` and `path` alike)."""
    for key, value in el.attrib.items():
        if key == name or key.endswith("}" + name):
            return value
    return None


def parse_matrix(text: str | None) -> Matrix:
    """The 12 numbers of a transform attribute; the identity when it is missing or odd."""
    if not text:
        return IDENTITY
    try:
        values = tuple(float(v) for v in text.split())
    except ValueError:
        return IDENTITY
    return values if len(values) == 12 else IDENTITY


def multiply(a: Matrix, b: Matrix) -> Matrix:
    """`a` applied first, then `b` (row-vector convention)."""
    out = []
    for r in range(4):
        for c in range(3):
            if r < 3:
                v = a[r * 3] * b[c] + a[r * 3 + 1] * b[3 + c] + a[r * 3 + 2] * b[6 + c]
            else:
                v = a[9] * b[c] + a[10] * b[3 + c] + a[11] * b[6 + c] + b[9 + c]
            out.append(v)
    return tuple(out)


class _Mesh:
    def __init__(self) -> None:
        self.verts = array("f")
        self.tris = array("I")


class _Object:
    def __init__(self) -> None:
        self.mesh: _Mesh | None = None
        self.components: list[tuple[str | None, str, Matrix]] = []  # (file or None for this one, object id, transform)


def _read_objects(xml: bytes) -> tuple[dict[str, _Object], list[tuple[str, Matrix]]]:
    """The objects of one model file and its build items."""
    objects: dict[str, _Object] = {}
    items: list[tuple[str, Matrix]] = []
    current: _Object | None = None
    current_id = ""
    mesh: _Mesh | None = None
    for event, el in ET.iterparse(io.BytesIO(xml), events=("start", "end")):
        tag = _local(el.tag)
        if event == "start":
            if tag == "object":
                current = _Object()
                current_id = el.get("id") or ""
            elif tag == "mesh" and current is not None:
                mesh = _Mesh()
                current.mesh = mesh
            continue
        if tag == "vertex" and mesh is not None:
            mesh.verts.extend((float(el.get("x", 0)), float(el.get("y", 0)), float(el.get("z", 0))))
        elif tag == "triangle" and mesh is not None:
            mesh.tris.extend((int(el.get("v1", 0)), int(el.get("v2", 0)), int(el.get("v3", 0))))
            if len(mesh.tris) > MAX_INPUT_TRIANGLES * 3:
                raise ModelError("the model has too many triangles")
        elif tag == "component" and current is not None:
            current.components.append((_attr(el, "path"), el.get("objectid") or "", parse_matrix(el.get("transform"))))
        elif tag == "object":
            if current is not None and current_id:
                objects[current_id] = current
            current = None
            mesh = None
        elif tag == "item":
            if el.get("printable") != "0" and el.get("objectid"):
                items.append((el.get("objectid", ""), parse_matrix(el.get("transform"))))
        if tag in ("vertex", "triangle", "component", "item"):
            el.clear()
    return objects, items


def _flatten(
    files: dict[str, dict[str, _Object]],
    here: str,
    object_id: str,
    matrix: Matrix,
    out_v: array,
    out_t: array,
    depth: int = 0,
) -> None:
    obj = files.get(here, {}).get(object_id)
    if obj is None or depth > MAX_DEPTH:
        return
    if obj.mesh is not None and obj.mesh.tris:
        base = len(out_v) // 3
        v = obj.mesh.verts
        m = matrix
        for i in range(0, len(v) - 2, 3):
            x, y, z = v[i], v[i + 1], v[i + 2]
            out_v.extend((x * m[0] + y * m[3] + z * m[6] + m[9], x * m[1] + y * m[4] + z * m[7] + m[10], x * m[2] + y * m[5] + z * m[8] + m[11]))
        n = len(v) // 3
        for t in obj.mesh.tris:
            out_t.append(base + t if t < n else base)
    for path, child, child_matrix in obj.components:
        target = path.lstrip("/") if path else here
        _flatten(files, target, child, multiply(child_matrix, matrix), out_v, out_t, depth + 1)


def _cluster(verts: array, tris: array, lo: tuple[float, float, float], size: float, cells: int) -> tuple[array, array]:
    """Vertex clustering: every vertex goes to the cell of a grid, the cell's mean is the new vertex."""
    inv = cells / size
    index: dict[tuple[int, int, int], int] = {}
    sums: list[list[float]] = []
    remap = array("I")
    for i in range(0, len(verts), 3):
        key = (int((verts[i] - lo[0]) * inv), int((verts[i + 1] - lo[1]) * inv), int((verts[i + 2] - lo[2]) * inv))
        n = index.get(key)
        if n is None:
            n = len(sums)
            index[key] = n
            sums.append([0.0, 0.0, 0.0, 0.0])
        s = sums[n]
        s[0] += verts[i]
        s[1] += verts[i + 1]
        s[2] += verts[i + 2]
        s[3] += 1.0
        remap.append(n)
    out_v = array("f")
    for s in sums:
        out_v.extend((s[0] / s[3], s[1] / s[3], s[2] / s[3]))
    out_t = array("I")
    for i in range(0, len(tris), 3):
        a, b, c = remap[tris[i]], remap[tris[i + 1]], remap[tris[i + 2]]
        if a != b and b != c and a != c:
            out_t.extend((a, b, c))
    return out_v, out_t


def thin(verts: array, tris: array, limit: int = MAX_TRIANGLES) -> tuple[array, array]:
    """At most `limit` triangles, by coarsening a grid until the part fits."""
    if len(tris) // 3 <= limit:
        return verts, tris
    lo = tuple(min(verts[i::3]) for i in range(3))
    hi = tuple(max(verts[i::3]) for i in range(3))
    size = max(h - low for h, low in zip(hi, lo, strict=True)) or 1.0
    cells = 600
    while True:
        out_v, out_t = _cluster(verts, tris, lo, size * 1.000001, cells)
        if len(out_t) // 3 <= limit or cells <= 12:
            return out_v, out_t
        cells = max(12, int(cells * 0.8))


def _model_files(archive: zipfile.ZipFile) -> list[str]:
    names = [n for n in archive.namelist() if n.lower().endswith(".model")]
    names.sort(key=lambda n: (n.lower() != "3d/3dmodel.model", n))
    return names


def read_model(data: bytes) -> dict[str, Any]:
    """The packed mesh of a 3MF file's build items."""
    try:
        archive = zipfile.ZipFile(io.BytesIO(data))
    except zipfile.BadZipFile as err:
        raise ModelError("not a 3MF file") from err
    with archive:
        names = _model_files(archive)
        if not names:
            raise ModelError("no model in the file")
        files: dict[str, dict[str, _Object]] = {}
        items: list[tuple[str, Matrix]] = []
        main = names[0]
        for name in names:
            info = archive.getinfo(name)
            if info.file_size > MAX_ARCHIVE_MEMBER:
                raise ModelError("the model is too big")
            objects, build = _read_objects(archive.read(name))
            files[name] = objects
            if name == main:
                items = build
    verts = array("f")
    tris = array("I")
    for object_id, matrix in items:
        _flatten(files, main, object_id, matrix, verts, tris)
    if not tris:
        # a file without build items: take everything that is a mesh
        for name, objects in files.items():
            for object_id, obj in objects.items():
                if obj.mesh is not None:
                    _flatten(files, name, object_id, IDENTITY, verts, tris)
    if not tris:
        raise ModelError(f"no triangles in the file ({_describe(data, files, items)})")
    return pack(*thin(verts, tris))


def _describe(data: bytes, files: dict[str, dict[str, _Object]], items: list[tuple[str, Matrix]]) -> str:
    """What a file without a usable part holds, short enough for a message: its biggest members and what its models list."""
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        members = sorted(archive.infolist(), key=lambda i: -i.file_size)[:6]
        parts = [f"{i.filename} {i.file_size // 1024}K" for i in members]
    for name, objects in files.items():
        meshes = sum(1 for o in objects.values() if o.mesh is not None)
        comps = sum(len(o.components) for o in objects.values())
        parts.append(f"{name}: {len(objects)} objects, {meshes} meshes, {comps} components, {len(items) if name == next(iter(files)) else 0} items")
    return "; ".join(parts)


def pack(verts: array, tris: array) -> dict[str, Any]:
    """The compact form sent to the browser (see the module doc)."""
    count = len(verts) // 3
    lo = [min(verts[i::3]) for i in range(3)]
    hi = [max(verts[i::3]) for i in range(3)]
    span = [(h - low) or 1.0 for h, low in zip(hi, lo, strict=True)]
    q = array("H")
    for i in range(0, len(verts), 3):
        q.extend(round((verts[i + k] - lo[k]) / span[k] * 65535) for k in range(3))
    # triangles sorted by their lowest point (z), so a height is a prefix
    zs = [min(q[t * 3 + 2] for t in (tris[i], tris[i + 1], tris[i + 2])) for i in range(0, len(tris), 3)]
    order = sorted(range(len(zs)), key=zs.__getitem__)
    idx = array("I")
    for n in order:
        idx.extend(tris[n * 3 : n * 3 + 3])
    if sys.byteorder == "big":  # the wire format is little-endian
        q.byteswap()
        idx.byteswap()
    return {
        "triangles": len(order),
        "vertices": count,
        "bbox": [lo[0], lo[1], lo[2], hi[0], hi[1], hi[2]],
        "verts": base64.b64encode(q.tobytes()).decode("ascii"),
        "idx": base64.b64encode(idx.tobytes()).decode("ascii"),
    }


def _build_demo_3mf() -> bytes:  # pragma: no cover - a helper for the tests and the preview
    """A one-cube 3MF, the smallest file `read_model` takes."""
    model = (
        '<?xml version="1.0"?><model unit="millimeter" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">'
        '<resources><object id="1" type="model"><mesh><vertices>'
        + "".join(f'<vertex x="{x}" y="{y}" z="{z}"/>' for x in (0, 10) for y in (0, 10) for z in (0, 10))
        + "</vertices><triangles>"
        + "".join(f'<triangle v1="{a}" v2="{b}" v3="{c}"/>' for a, b, c in ((0, 1, 3), (0, 3, 2), (4, 6, 7), (4, 7, 5), (0, 4, 5), (0, 5, 1), (2, 3, 7), (2, 7, 6), (0, 2, 6), (0, 6, 4), (1, 5, 7), (1, 7, 3)))
        + '</triangles></mesh></object></resources><build><item objectid="1"/></build></model>'
    )
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("3D/3dmodel.model", model)
    return buf.getvalue()
