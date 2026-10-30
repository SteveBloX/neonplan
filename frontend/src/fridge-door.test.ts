import assert from "node:assert/strict";
import { test } from "node:test";
import { fridgeDoors } from "./devices.ts";
import type { Floor, Furniture } from "./model.ts";
import { fridgeDoorLinked, newFloor } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import { pushFridgeDoors } from "./viewer/furniture.ts";
import { GeoBuffer } from "./viewer/geo.ts";

const st = (entity_id: string, state: string): HassEntity => ({ entity_id, state, attributes: {} });
const hassWith = (states: HassEntity[]): HomeAssistant => ({
  language: "de",
  connection: {} as HomeAssistant["connection"],
  callWS: async () => undefined as never,
  callService: async () => undefined,
  entities: {},
  states: Object.fromEntries(states.map((s) => [s.entity_id, s])),
});
const fridge = (extra: Partial<Furniture> = {}): Furniture => ({ id: "f", type: "fridge", x: 0, z: 0, rotation: 0, w: 0.6, d: 0.65, h: 1.8, variant: null, ...extra }) as Furniture;
const floorWith = (f: Furniture): Floor => ({ ...newFloor("eg", "EG", 0), furniture: [f] });

test("a plain fridge opens its door with a door sensor; without one it stays a closed block", () => {
  assert.equal(fridgeDoorLinked(fridge()), false);
  assert.equal(fridgeDoorLinked(fridge({ door_left: "none" })), false);
  assert.equal(fridgeDoorLinked(fridge({ door_left: "binary_sensor.door" })), true);
  const floors = [floorWith(fridge({ door_left: "binary_sensor.door" }))];
  assert.deepEqual(fridgeDoors(hassWith([st("binary_sensor.door", "on")]), floors).get("f"), { left: true, right: false });
  assert.deepEqual(fridgeDoors(hassWith([st("binary_sensor.door", "off")]), floors).get("f"), { left: false, right: false });
  assert.equal(fridgeDoors(hassWith([]), [floorWith(fridge())]).has("f"), false);
});

/** The deepest point of the door in front of the fridge (local z of an unrotated item at the origin). */
const reach = (open: number, maxY = Infinity) => {
  const buf = new GeoBuffer();
  pushFridgeDoors(buf, fridge(), 0, open, 0, true, maxY);
  let z = -Infinity;
  let y = -Infinity;
  for (let i = 0; i < buf.p.length; i += 3) {
    z = Math.max(z, buf.p[i + 2]);
    y = Math.max(y, buf.p[i + 1]);
  }
  return { z, y, count: buf.p.length };
};

test("the single door swings out when open and is cut at the cut height", () => {
  const closed = reach(0);
  const open = reach(1);
  // closed it sits flat on the front (the handle a few cm proud), open it swings out about the door's width
  assert.ok(closed.z < 0.65 / 2 + 0.05, `closed reach ${closed.z}`);
  assert.ok(open.z > 0.65 / 2 + 0.4, `open reach ${open.z}`);
  assert.ok(reach(0, 1.1).y <= 1.1 + 1e-6);
  assert.equal(reach(0, 0.02).count, 0);
});
