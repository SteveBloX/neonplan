import assert from "node:assert/strict";
import { test } from "node:test";
import { decodePrinterModel, modelScale, trianglesUpTo, type PrinterModelPayload } from "./printer-model.ts";
import { printerJob } from "./printer.ts";
import type { HomeAssistant } from "./types.ts";

const b64 = (a: ArrayBufferView): string => Buffer.from(a.buffer, a.byteOffset, a.byteLength).toString("base64");

/** Two stacked flat triangles: one on the bed, one 10 mm up, in a 20 × 30 × 10 mm box (3MF: z is up). */
function payload(): PrinterModelPayload {
  const q = (x: number, y: number, z: number) => [Math.round(x * 65535), Math.round(y * 65535), Math.round(z * 65535)];
  const verts = new Uint16Array([...q(0, 0, 0), ...q(1, 0, 0), ...q(0, 1, 0), ...q(0, 0, 1), ...q(1, 0, 1), ...q(0, 1, 1)]);
  const idx = new Uint32Array([0, 1, 2, 3, 4, 5]);
  return { triangles: 2, vertices: 6, bbox: [100, 50, 0, 120, 80, 10], verts: b64(verts), idx: b64(idx), name: "/cache/part.gcode.3mf" };
}

test("a payload becomes a mesh that stands on the bed, centred, with 3MF's z up and y toward the back", () => {
  const m = decodePrinterModel(payload())!;
  assert.equal(m.triangles, 2);
  assert.deepEqual(m.size, [20, 10, 30]);
  assert.equal(m.positions.length, 18);
  const xs = [0, 3, 6, 9, 12, 15].map((i) => m.positions[i]);
  assert.ok(Math.min(...xs) < -9.9 && Math.max(...xs) > 9.9, "centred in x");
  const ys = [1, 4, 7, 10, 13, 16].map((i) => m.positions[i]);
  assert.ok(Math.min(...ys) >= -1e-4 && Math.max(...ys) > 9.99, "height above the bed");
  // 3MF's y runs to the back of the printer, which is -z here
  assert.ok(m.positions[8] < m.positions[2], "the vertex at y = 1 is further back than the one at y = 0");
  assert.deepEqual([...m.lows].map((v) => Math.round(v)), [0, 10]);
});

test("a payload that does not add up is refused", () => {
  const p = payload();
  assert.equal(decodePrinterModel({ ...p, triangles: 3 }), null);
  assert.equal(decodePrinterModel({ ...p, vertices: 5 }), null);
});

test("the printed part is the prefix of triangles up to a height", () => {
  const m = decodePrinterModel(payload())!;
  assert.equal(trianglesUpTo(m, -1), 0);
  assert.equal(trianglesUpTo(m, 0), 1);
  assert.equal(trianglesUpTo(m, 5), 1);
  assert.equal(trianglesUpTo(m, 10), 2);
});

test("the part is true to scale on a 256 mm bed and shrinks to fit what is too big", () => {
  const w = 0.42;
  const bed = w / 2 - 0.045;
  const nominal = (bed * 2) / 256;
  assert.ok(Math.abs(modelScale([100, 50, 100], w, w, 0.4) - nominal) < 1e-9);
  assert.ok(modelScale([400, 50, 400], w, w, 0.4) < nominal);
  assert.ok(modelScale([100, 900, 100], w, w, 0.4) < nominal);
});

test("the name of the running print comes from the chosen entity, else from the printer's own sensors", () => {
  const st = (id: string, state: string) => [id, { entity_id: id, state, attributes: {} }] as const;
  const hass = { states: Object.fromEntries([st("sensor.p1s_task_name", "Boat v2"), st("sensor.p1s_gcode_file", "boat.gcode.3mf"), st("sensor.mine", "Mine")]) } as unknown as HomeAssistant;
  assert.equal(printerJob(hass, {}, "sensor.p1s_print_status"), "Boat v2");
  assert.equal(printerJob(hass, { printer_job: "sensor.mine" }, "sensor.p1s_print_status"), "Mine");
  assert.equal(printerJob(hass, {}, "sensor.other_print_status"), "");
  assert.equal(printerJob(hass, {}, null), "");
});
