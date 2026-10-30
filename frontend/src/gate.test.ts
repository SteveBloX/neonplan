import assert from "node:assert/strict";
import { test } from "node:test";
import { awningStates } from "./devices.ts";
import type { Floor, Furniture } from "./model.ts";
import { newFloor } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import { GeoBuffer } from "./viewer/geo.ts";
import { gateKind } from "./model.ts";
import { gateSpan, pushGate } from "./viewer/gate.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });
const hassWith = (states: HassEntity[]): HomeAssistant => ({
  language: "de",
  connection: {} as HomeAssistant["connection"],
  callWS: async () => undefined as never,
  callService: async () => undefined,
  entities: {},
  states: Object.fromEntries(states.map((s) => [s.entity_id, s])),
});
const gate = (extra: Partial<Furniture> = {}): Floor => ({
  ...newFloor("eg", "EG", 0),
  furniture: [{ id: "g", type: "gate", x: 0, z: 0, rotation: 0, w: 3.6, d: 0.2, h: 1.5, variant: null, ...extra } as Furniture],
});

test("gate: a cover's position wins, then the contact, then the cover's open / closed; no entity means closed", () => {
  const floors = [gate({ entity: "cover.portail", gate_contact: "binary_sensor.portail" })];
  const open = (hass: HomeAssistant) => awningStates(hass, floors).get("g")!;
  assert.equal(open(hassWith([st("cover.portail", "open", { current_position: 40 }), st("binary_sensor.portail", "off")])).out, 0.4);
  // no position: the contact says it (on = open), the cover's own state is only the last resort
  assert.equal(open(hassWith([st("cover.portail", "closed"), st("binary_sensor.portail", "on")])).out, 1);
  assert.equal(open(hassWith([st("cover.portail", "open"), st("binary_sensor.portail", "off")])).out, 0);
  assert.equal(awningStates(hassWith([st("cover.portail", "open")]), [gate({ entity: "cover.portail" })]).get("g")!.out, 1);
  assert.equal(awningStates(hassWith([]), [gate()]).get("g")!.out, 0);
  // a cover that only says "opening" moves along at the run time
  const moving = open(hassWith([st("cover.portail", "opening")]));
  assert.deepEqual([moving.out, moving.moving], [null, 1]);
});

test("gate: an inverted contact, an inverted cover and the lock", () => {
  const floors = [gate({ gate_contact: "binary_sensor.portail", gate_contact_invert: true, gate_lock: "lock.portail" })];
  const state = awningStates(hassWith([st("binary_sensor.portail", "on"), st("lock.portail", "unlocked")]), floors).get("g")!;
  assert.equal(state.out, 0);
  assert.equal(state.unlocked, true);
  assert.equal(awningStates(hassWith([st("binary_sensor.portail", "off"), st("lock.portail", "locked")]), floors).get("g")!.unlocked, false);
  assert.equal(awningStates(hassWith([st("cover.portail", "open", { current_position: 100 })]), [gate({ entity: "cover.portail", awning_invert: true })]).get("g")!.out, 0);
});

test("gate: kinds, and the leaves swing out of the closed line", () => {
  assert.equal(gateKind(null), "double");
  assert.equal(gateKind("sliding"), "sliding");
  assert.equal(gateKind("nonsense"), "double");
  assert.ok(gateSpan(3.6) < 3.6 && gateSpan(3.6) > 3);
  const f = { x: 0, z: 0, rotation: 0, w: 3.6, d: 0.2, h: 1.5, variant: null, mirror: false } as const;
  const depth = (open: number) => {
    const buf = new GeoBuffer();
    pushGate(buf, f, 0, open);
    const zs = buf.p.filter((_, i) => i % 3 === 2);
    return Math.max(...zs) - Math.min(...zs);
  };
  // closed: only as deep as the posts; open: the leaves stand out to the front
  assert.ok(depth(0) < 0.4);
  assert.ok(depth(1) > 1.2);
  // sliding: it stays as deep as the posts and moves along x instead
  const slide = (open: number) => {
    const buf = new GeoBuffer();
    pushGate(buf, { ...f, variant: "sliding" }, 0, open);
    // the rail is always as long; the leaf moves the middle of everything drawn
    const xs = buf.p.filter((_, i) => i % 3 === 0);
    return xs.reduce((a, b) => a + b, 0) / xs.length;
  };
  assert.ok(slide(1) > slide(0) + 0.3);
});
