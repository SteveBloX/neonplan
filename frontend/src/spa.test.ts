import assert from "node:assert/strict";
import { test } from "node:test";
import type { Building, Floor, OutdoorArea } from "./model.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import { DEFAULT_SPA_COLORS, nearestOnOutline, spaColor, spaPieces, spaSignature, spaState, spaSteps, spaUnit } from "./spa.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import { GeoBuffer } from "./viewer/geo.ts";
import { pushSpaUnit } from "./viewer/spa-view.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });
const hassWith = (states: HassEntity[]): HomeAssistant => ({
  language: "de",
  connection: {} as HomeAssistant["connection"],
  callWS: async () => undefined as never,
  callService: async () => undefined,
  entities: {},
  states: Object.fromEntries(states.map((s) => [s.entity_id, s])),
});

const spaArea = (extra: Partial<NonNullable<OutdoorArea["spa"]>> = {}): OutdoorArea => ({
  id: "p1",
  type: "pool",
  points: [[0, 0], [2, 0], [2, 2], [0, 2]],
  spa: { climate: "climate.spa", bubbles: "switch.bulles", jets: "switch.jets", filter: "switch.filtre", sanitizer: "switch.desinfection", ...extra },
});
const buildingWith = (a: OutdoorArea): Building => {
  const b = emptyBuilding();
  const floor: Floor = { ...newFloor("eg", "EG", 0), outdoor: [a] };
  b.floors = [floor];
  return b;
};

test("spa colours: the highest step reached, blended with the next one unless switched off", () => {
  const steps = [{ t: 20, color: "#000000" }, { t: 30, color: "#ffffff" }];
  assert.deepEqual(spaColor({ colors: steps, blend: false }, 25), [0, 0, 0]);
  assert.deepEqual(spaColor({ colors: steps }, 25), [0.5, 0.5, 0.5]);
  assert.deepEqual(spaColor({ colors: steps }, 35), [1, 1, 1]);
  // colder than the first step: the first colour
  assert.deepEqual(spaColor({ colors: steps }, 5), [0, 0, 0]);
  // steps in any order, bad ones left out, none at all = the standard steps
  assert.deepEqual(spaSteps({ colors: [{ t: 30, color: "#ffffff" }, { t: 20, color: "#000000" }, { t: 1, color: "nope" }] }).map((s) => s.t), [20, 30]);
  assert.deepEqual(spaSteps({ colors: null }), [...DEFAULT_SPA_COLORS]);
});

test("spa state: temperature, heating mode, heating now and the four switches", () => {
  const spa = spaArea().spa!;
  const hot = spaState(hassWith([st("climate.spa", "heat", { current_temperature: 31.5, temperature: 38, hvac_action: "heating" }), st("switch.bulles", "on"), st("switch.filtre", "on")]), spa);
  assert.deepEqual([hot.temp, hot.target, hot.heatMode, hot.heating, hot.bubbles, hot.jets, hot.filter, hot.sanitizer], [31.5, 38, true, true, true, false, true, false]);
  // the climate says idle: the mode is on, nothing heats
  assert.equal(spaState(hassWith([st("climate.spa", "heat", { current_temperature: 38, temperature: 38, hvac_action: "idle" })]), spa).heating, false);
  // no hvac_action: colder than the target means heating
  assert.equal(spaState(hassWith([st("climate.spa", "heat", { current_temperature: 30, temperature: 38 })]), spa).heating, true);
  // off or gone: no heating, no temperature
  const off = spaState(hassWith([st("climate.spa", "off", { current_temperature: 30, temperature: 38, hvac_action: "off" })]), spa);
  assert.deepEqual([off.heatMode, off.heating, off.temp], [false, false, 30]);
  assert.equal(spaState(hassWith([st("climate.spa", "unavailable")]), spa).temp, null);
});

test("spa unit: beside the spa on a side, facing away, or exactly where it was put", () => {
  const floor = buildingWith(spaArea()).floors[0];
  const a = floor.outdoor[0];
  const east = spaUnit(floor, a, a.spa!);
  assert.ok(east.x > 2 && Math.abs(east.z - 1) < 1e-9 && east.rotation === -90);
  const west = spaUnit(floor, a, { ...a.spa!, unit_side: "w" });
  assert.ok(west.x < 0 && west.rotation === 90);
  // placed by hand: it turns away from the spa by itself
  const put = spaUnit(floor, a, { ...a.spa!, unit_x: 1, unit_z: 4 });
  assert.ok(Math.abs(put.rotation) < 1e-9);
  // both pipes end on the rim
  for (const r of east.rims) assert.ok(Math.abs(r[0] - 2) < 1e-9 || Math.abs(r[0]) < 1e-9 || Math.abs(r[1]) < 1e-9 || Math.abs(r[1] - 2) < 1e-9);
  assert.deepEqual(nearestOnOutline([[0, 0], [2, 0], [2, 2], [0, 2]], [5, 1]), [2, 1]);
});

test("spa pieces: only pools with a spa, with their colour and a signature that changes with the state", () => {
  const b = buildingWith(spaArea());
  const cold = spaPieces(hassWith([st("climate.spa", "heat", { current_temperature: 20, temperature: 38 })]), b);
  assert.equal(cold.length, 1);
  assert.ok(cold[0].color && cold[0].animated);
  const hot = spaPieces(hassWith([st("climate.spa", "heat", { current_temperature: 39, temperature: 38 }), st("switch.jets", "on")]), b);
  assert.notEqual(spaSignature(cold[0]), spaSignature(hot[0]));
  assert.equal(hot[0].state.heating, false);
  // a plain pool, and a spa without a temperature (it keeps the pool's own blue)
  const plain = buildingWith({ ...spaArea(), spa: null });
  assert.equal(spaPieces(hassWith([]), plain).length, 0);
  assert.equal(spaPieces(hassWith([]), b)[0].color, null);
});

test("spa unit drawing: lamps, impeller and pipes, and more going on while the filter and disinfection run", () => {
  const b = buildingWith(spaArea());
  const draw = (states: HassEntity[], time: number) => {
    const piece = spaPieces(hassWith(states), b)[0];
    const buf = new GeoBuffer();
    pushSpaUnit(buf, piece, time);
    return buf.count;
  };
  const idle = draw([st("climate.spa", "off", { current_temperature: 30 })], 0);
  assert.ok(idle > 20);
  assert.ok(draw([st("climate.spa", "heat", { current_temperature: 30, temperature: 38, hvac_action: "heating" }), st("switch.filtre", "on"), st("switch.desinfection", "on")], 0.3) > idle);
});
