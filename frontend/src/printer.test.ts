import assert from "node:assert/strict";
import { test } from "node:test";
import type { Floor, Furniture } from "./model.ts";
import { newFloor } from "./model.ts";
import { printerLinks, printerSignature, printerState, printerStates, printPhase } from "./printer.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import { GeoBuffer } from "./viewer/geo.ts";
import { pushPrinter } from "./viewer/printer-view.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });
const hassWith = (states: HassEntity[]): HomeAssistant => ({
  language: "de",
  connection: {} as HomeAssistant["connection"],
  callWS: async () => undefined as never,
  callService: async () => undefined,
  entities: {},
  states: Object.fromEntries(states.map((s) => [s.entity_id, s])),
});
const printer = (extra: Partial<Furniture> = {}): Furniture => ({ id: "p", type: "printer_3d", x: 0, z: 0, rotation: 0, w: 0.42, d: 0.44, h: 0.5, variant: null, entity: "sensor.p1s_print_status", ...extra }) as Furniture;
const floorWith = (f: Furniture): Floor => ({ ...newFloor("eg", "EG", 0), furniture: [f] });

const bambu = [
  st("sensor.p1s_print_status", "running"),
  st("sensor.p1s_print_progress", "42", { unit_of_measurement: "%" }),
  st("sensor.p1s_remaining_time", "75", { unit_of_measurement: "min" }),
  st("sensor.p1s_nozzle_temperature", "219.5"),
  st("sensor.p1s_bed_temperature", "60"),
  st("light.p1s_chamber_light", "on"),
];

test("print phases from the words of Bambu Lab and of other integrations", () => {
  const phase = (s: string) => printPhase(st("sensor.x", s));
  assert.deepEqual(["running", "prepare", "slicing", "printing"].map(phase), ["printing", "printing", "printing", "printing"]);
  assert.deepEqual(["pause", "paused"].map(phase), ["paused", "paused"]);
  assert.deepEqual(["finish", "complete"].map(phase), ["done", "done"]);
  assert.deepEqual(["failed", "error"].map(phase), ["failed", "failed"]);
  assert.deepEqual(["idle", "unknown"].map(phase), ["idle", "idle"]);
  assert.deepEqual([phase("offline"), phase("unavailable"), printPhase(undefined)], ["offline", "offline", "offline"]);
});

test("a printer's other entities are found by the name of its status sensor, or chosen by hand", () => {
  const hass = hassWith(bambu);
  const found = printerLinks(hass, printer(), "sensor.p1s_print_status");
  assert.deepEqual([found.progress, found.remaining, found.nozzle, found.bed, found.light], ["sensor.p1s_print_progress", "sensor.p1s_remaining_time", "sensor.p1s_nozzle_temperature", "sensor.p1s_bed_temperature", "light.p1s_chamber_light"]);
  // by hand wins; "none" switches one off; an entity that does not exist is not guessed
  const own = printerLinks(hass, printer({ printer_progress: "sensor.other", printer_light: "none" }), "sensor.p1s_print_status");
  assert.deepEqual([own.progress, own.light], ["sensor.other", null]);
  assert.equal(printerLinks(hassWith([st("sensor.q_print_status", "idle")]), printer(), "sensor.q_print_status").progress, null);
  // a status sensor with another name leads nowhere by itself
  assert.equal(printerLinks(hass, printer(), "sensor.drucker").progress, null);
});

test("printer state: progress, time left, temperatures and light; a finished print is whole", () => {
  const s = printerState(hassWith(bambu), printer(), "sensor.p1s_print_status");
  assert.deepEqual([s.phase, s.progress, s.remaining, s.nozzle, s.bed, s.light], ["printing", 0.42, 75, 219.5, 60, true]);
  const done = printerState(hassWith([st("sensor.p1s_print_status", "finish"), st("sensor.p1s_print_progress", "100")]), printer(), "sensor.p1s_print_status");
  assert.deepEqual([done.phase, done.progress, done.remaining], ["done", 1, null]);
  assert.equal(printerStates(hassWith(bambu), [floorWith(printer())], new Map([["p", { entity: "sensor.p1s_print_status" }]])).get("p")?.phase, "printing");
  // the signature changes with the phase and the percent, not with the time left
  assert.notEqual(printerSignature(s), printerSignature(done));
});

test("printing printer: the head moves and the part grows; a paused one stands still", () => {
  const f = printer();
  const draw = (phase: "printing" | "paused" | "idle", progress: number | null, time: number) => {
    const buf = new GeoBuffer();
    pushPrinter(buf, f, 0, { phase, progress, remaining: null, nozzle: null, bed: null, light: null }, time);
    return buf;
  };
  assert.notDeepEqual(draw("printing", 0.5, 0).p, draw("printing", 0.5, 0.4).p);
  assert.deepEqual(draw("paused", 0.5, 0).p, draw("paused", 0.5, 7).p);
  assert.ok(draw("printing", 0.9, 0).count > draw("printing", 0, 0).count - 1);
  // taller with more progress
  const top = (b: GeoBuffer) => Math.max(...b.p.filter((_, i) => i % 3 === 1));
  assert.ok(top(draw("paused", 0.9, 0)) > top(draw("paused", 0.1, 0)) - 1e-9);
});