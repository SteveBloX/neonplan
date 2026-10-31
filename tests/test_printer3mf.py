"""The 3MF reader and the printer's file picker. They need nothing of Home Assistant, so they are loaded from their files."""

from __future__ import annotations

from array import array
import base64
import importlib.util
import io
from pathlib import Path
import sys
import zipfile

_ROOT = Path(__file__).resolve().parents[1] / "custom_components" / "neonplan3d"


def _load(name: str):
    spec = importlib.util.spec_from_file_location(f"_np_{name}", _ROOT / f"{name}.py")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


p3 = _load("printer3mf")
ftp = _load("printer_ftp")

NS = 'xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:p="http://schemas.microsoft.com/3dmanufacturing/production/2015/06"'
CUBE_TRIS = ((0, 1, 3), (0, 3, 2), (4, 6, 7), (4, 7, 5), (0, 4, 5), (0, 5, 1), (2, 3, 7), (2, 7, 6), (0, 2, 6), (0, 6, 4), (1, 5, 7), (1, 7, 3))


def _mesh(size: float = 10) -> str:
    verts = "".join(f'<vertex x="{x * size}" y="{y * size}" z="{z * size}"/>' for x in (0, 1) for y in (0, 1) for z in (0, 1))
    tris = "".join(f'<triangle v1="{a}" v2="{b}" v3="{c}"/>' for a, b, c in CUBE_TRIS)
    return f"<mesh><vertices>{verts}</vertices><triangles>{tris}</triangles></mesh>"


def _zip(files: dict[str, str]) -> bytes:
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as z:
        for name, text in files.items():
            z.writestr(name, text)
    return buf.getvalue()


def _decode(model: dict) -> tuple[array, array]:
    q = array("H")
    q.frombytes(base64.b64decode(model["verts"]))
    idx = array("I")
    idx.frombytes(base64.b64decode(model["idx"]))
    return q, idx


def test_a_plain_mesh_is_read() -> None:
    data = _zip({"3D/3dmodel.model": f'<model {NS}><resources><object id="1">{_mesh()}</object></resources><build><item objectid="1"/></build></model>'})
    model = p3.read_model(data)
    assert model["triangles"] == 12
    assert model["vertices"] == 8
    assert model["bbox"] == [0, 0, 0, 10, 10, 10]
    q, idx = _decode(model)
    assert len(q) == 24 and len(idx) == 36


def test_components_in_other_files_and_transforms_are_followed() -> None:
    main = (
        f'<model {NS}><resources><object id="2"><components><component p:path="/3D/Objects/object_1.model" objectid="1"/></components></object></resources>'
        '<build><item objectid="2" transform="1 0 0 0 1 0 0 0 1 100 50 0"/></build></model>'
    )
    part = f'<model {NS}><resources><object id="1">{_mesh()}</object></resources><build/></model>'
    model = p3.read_model(_zip({"3D/3dmodel.model": main, "3D/Objects/object_1.model": part}))
    assert model["bbox"] == [100, 50, 0, 110, 60, 10]


def test_an_item_that_is_not_printable_is_left_out() -> None:
    items = '<item objectid="1" printable="0"/><item objectid="1" transform="1 0 0 0 1 0 0 0 1 5 0 0"/>'
    data = _zip({"3D/3dmodel.model": f'<model {NS}><resources><object id="1">{_mesh()}</object></resources><build>{items}</build></model>'})
    assert p3.read_model(data)["bbox"][0] == 5


def test_the_triangles_are_sorted_by_their_lowest_point() -> None:
    items = '<item objectid="1"/><item objectid="1" transform="1 0 0 0 1 0 0 0 1 0 0 40"/>'
    data = _zip({"3D/3dmodel.model": f'<model {NS}><resources><object id="1">{_mesh()}</object></resources><build>{items}</build></model>'})
    model = p3.read_model(data)
    q, idx = _decode(model)
    lows = [min(q[idx[t * 3 + k] * 3 + 2] for k in range(3)) for t in range(model["triangles"])]
    assert lows == sorted(lows)
    assert lows[0] == 0 and lows[-1] > 0


def test_a_big_mesh_is_thinned() -> None:
    n = 120
    verts = array("f")
    tris = array("I")
    for x in range(n + 1):
        for y in range(n + 1):
            verts.extend((x, y, 0.0))
    for x in range(n):
        for y in range(n):
            a = x * (n + 1) + y
            tris.extend((a, a + n + 1, a + 1, a + 1, a + n + 1, a + n + 2))
    assert len(tris) // 3 == 28800
    thin_v, thin_t = p3.thin(verts, tris, limit=2000)
    assert 0 < len(thin_t) // 3 <= 2000
    assert len(thin_v) < len(verts)


def test_files_that_are_no_model_are_refused() -> None:
    for bad in (b"not a zip", _zip({"a.txt": "x"}), _zip({"3D/3dmodel.model": f"<model {NS}><resources/><build/></model>"})):
        try:
            p3.read_model(bad)
        except p3.ModelError:
            continue
        raise AssertionError("accepted")


def test_a_file_without_a_part_says_what_it_holds() -> None:
    main = f'<model {NS}><resources><object id="1"><components><component p:path="/3D/Objects/gone.model" objectid="1"/></components></object></resources><build><item objectid="1"/></build></model>'
    data = _zip({"3D/3dmodel.model": main, "Metadata/plate_1.gcode": "G1 X1 Y1 E1\n" * 2000})
    try:
        p3.read_model(data)
    except p3.ModelError as err:
        text = str(err)
        assert "plate_1.gcode" in text and "1 objects, 0 meshes, 1 components, 1 items" in text
    else:
        raise AssertionError("accepted")


def test_the_file_of_a_job_is_found_whatever_the_slicer_made_of_its_name() -> None:
    names = ["/cache/Boat v2.gcode.3mf", "/cache/other_print.gcode.3mf", "/notes.txt"]
    assert ftp.pick(names, "Boat_v2") == "/cache/Boat v2.gcode.3mf"
    assert ftp.pick(names, "boat v2.gcode.3mf") == "/cache/Boat v2.gcode.3mf"
    assert ftp.pick(names, "something else") is None
    assert ftp.pick(names, "") is None


def test_a_fingerprint_is_normalised_and_a_connection_without_one_is_refused() -> None:
    digits = "ab" * 32
    assert ftp.normalize_fingerprint(":".join(digits[i : i + 2].upper() for i in range(0, 64, 2))) == digits
    assert ftp.normalize_fingerprint("abc") == ""
    try:
        ftp.fetch_3mf("192.168.1.2", "12345678", "", "job")
    except ftp.PrinterFtpError as err:
        assert str(err) == "not_trusted"
    else:
        raise AssertionError("connected without a pinned certificate")
