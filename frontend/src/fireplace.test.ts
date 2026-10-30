import assert from "node:assert/strict";
import { test } from "node:test";
import { fireStates, type FurnitureLinks } from "./devices.ts";
import type { Floor, Furniture } from "./model.ts";
import { fireOpening, newFloor } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import { pushFlames } from "./viewer/fireplace.ts";
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
const fireplace = (extra: Partial<Furniture> = {}): Furniture => ({ id: "k", type: "fireplace", x: 0, z: 0, rotation: 0, w: 1.8, d: 0.4, h: 2.5, variant: null, ...extra }) as Furniture;
const floorWith = (f: Furniture): Floor => ({ ...newFloor("eg", "EG", 0), furniture: [f] });
const links = (entity: string | null) => new Map<string, FurnitureLinks>(entity ? [["k", { entity, power: null }]] : []);

test("fireplace: the fire burns while the fan entity is on", () => {
  const floors = [floorWith(fireplace())];
  assert.equal(fireStates(hassWith([st("fan.kamin", "on")]), floors, links("fan.kamin")).get("k"), true);
  assert.equal(fireStates(hassWith([st("fan.kamin", "off")]), floors, links("fan.kamin")).get("k"), false);
  assert.equal(fireStates(hassWith([st("switch.kamin", "unavailable")]), floors, links("switch.kamin")).get("k"), false);
  // no entity: the fire stays out
  assert.equal(fireStates(hassWith([]), floors, links(null)).get("k"), false);
});

test("fireplace: the opening stays inside the wall piece and follows its set height", () => {
  const o = fireOpening(fireplace());
  assert.ok(o.x0 > -0.9 && o.x1 < 0.9 && o.y1 > o.y0);
  assert.ok(Math.abs(o.y1 - o.y0 - 0.7) < 1e-9, "default opening is 0.7 m high");
  const tall = fireOpening(fireplace({ fire_height: 1.1, fire_y: 0.2 }));
  assert.ok(Math.abs(tall.y1 - tall.y0 - 1.1) < 1e-9 && tall.y0 === 0.2);
  // never taller than the wall allows
  const huge = fireOpening(fireplace({ fire_height: 9, fire_y: 9 }));
  assert.ok(huge.y1 <= 2.5 - 0.1 && huge.y0 >= 0);
});

test("fireplace: flames stay inside the opening and flicker", () => {
  const f = fireplace();
  const o = fireOpening(f);
  const draw = (time: number) => {
    const buf = new GeoBuffer();
    pushFlames(buf, f, 0, time);
    return buf;
  };
  const a = draw(0);
  assert.ok(a.count > 6);
  for (let i = 0; i < a.p.length; i += 3) {
    assert.ok(a.p[i] >= o.x0 - 0.15 && a.p[i] <= o.x1 + 0.15, "across");
    assert.ok(a.p[i + 1] >= o.y0 - 0.01 && a.p[i + 1] <= o.y1, "up");
  }
  assert.notDeepEqual(a.p, draw(0.37).p);
});
