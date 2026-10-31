import assert from "node:assert/strict";
import { test } from "node:test";
import { areaGround, emptyBuilding, newFloor, type Building, type OutdoorArea, type RoofSection, type Room } from "../model.ts";
import { sectionProfile } from "../roof-sections.ts";
import { buildRainRoofs } from "./rain-roofs.ts";

const near = (a: number, b: number, eps = 0.02) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);
const room: Room = { id: "r", name: "r", area_id: null, points: [[0, 0], [10, 0], [10, 6], [0, 6]], floor_material: "wood" };

function house(roof: Building["settings"]["roof"], outdoor: OutdoorArea[] = []): Building {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), rooms: [room], outdoor }];
  b.settings = { ...b.settings, wall_exterior: 0.3, roof };
  return b;
}

test("a gazebo with a cover keeps rain off up to its peak; open, it keeps none", () => {
  const area = { id: "g", type: "gazebo", points: [[20, 0], [23, 0], [23, 3], [20, 3]], height: 2.3, rise: 1 } as OutdoorArea;
  const b = house({ type: "none", pitch: 35, overhang: 0.4 }, [area]);
  const [roof] = buildRainRoofs(b);
  const ground = areaGround(b.floors[0], area);
  near(roof.heightAt(21.5, 1.5)!, ground + 3.3);
  near(roof.heightAt(20.05, 1.5)!, ground + 2.3, 0.1);
  assert.equal(roof.heightAt(25, 1.5), null);
  // the water leaves just outside an eave, below it
  const [x, y, z] = roof.drip();
  assert.ok(x < 19.95 || x > 23.05 || z < -0.05 || z > 3.05, "outside the outline");
  assert.ok(y < ground + 2.3);
  assert.equal(buildRainRoofs(house({ type: "none", pitch: 35, overhang: 0.4 }, [{ ...area, cover: "none" }])).length, 0);
});

test("a pergola keeps rain off only with its plates", () => {
  const area = { id: "p", type: "pergola", points: [[0, 10], [3, 10], [3, 13], [0, 13]], height: 2.2 } as OutdoorArea;
  const none = buildRainRoofs(house({ type: "none", pitch: 35, overhang: 0.4 }, [area]));
  assert.equal(none.length, 0);
  const [roof] = buildRainRoofs(house({ type: "none", pitch: 35, overhang: 0.4 }, [{ ...area, glazed: true }]));
  assert.ok(roof.heightAt(1.5, 11.5)! > areaGround(house({ type: "none", pitch: 35, overhang: 0.4 }).floors[0], area) + 2.2);
  assert.equal(roof.heightAt(5, 11.5), null);
});

test("one gable roof over the house: highest on the ridge, down at the eaves, nothing beside the house", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const [roof] = buildRainRoofs(b);
  assert.equal(roof.roof, "single");
  // ridge along the long side (x), over z = 3: half of 6 + 0.7 m, at 35°
  const rise = (3 + 0.7) * Math.tan((35 * Math.PI) / 180);
  near(roof.heightAt(5, 3)!, rise);
  assert.ok(roof.heightAt(5, -0.5)! < 0.2);
  assert.equal(roof.heightAt(5, 9), null);
});

test("roof sections: each section's own slopes, found by its id", () => {
  const sec: RoofSection = { id: "s1", x0: 0, z0: 0, x1: 10, z1: 6, shape: "gable", axis: "x", eave_a: 2.5, eave_b: 2.5, pitch_a: 35, pitch_b: 35, base: 2.5 };
  const b = house({ type: "custom", pitch: 35, overhang: 0.4, sections: [sec] });
  const roofs = buildRainRoofs(b);
  assert.equal(roofs.length, 1);
  assert.equal(roofs[0].roof, "s1");
  // the roof's heights are in the frame of its floor's walls: the ridge is its height above the floor's level
  near(roofs[0].heightAt(5, 3)!, sectionProfile(sec).rh - b.floors[0].elevation);
  assert.equal(roofs[0].heightAt(5, 12), null);
  const [, y] = roofs[0].drip();
  assert.ok(y < 2.5, "from the eave down");
});
