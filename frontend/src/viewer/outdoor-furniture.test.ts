import assert from "node:assert/strict";
import { test } from "node:test";
import { FURNITURE_GROUPS, FURNITURE_SIZE, newFloor, type Floor, type Furniture } from "../model.ts";
import { mountBase } from "../packs.ts";
import { furnitureSymbol } from "../components/furniture2d.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";
import { pushFurniture, roundFootprint } from "./furniture.ts";

const NEW = ["bar_l", "garden_chair", "garden_sofa", "lounger", "coffee_table_round", "parasol", "bbq", "garden_shed", "hammock", "egg_chair", "planter", "privacy_screen"] as const;
const item = (type: string): Furniture => {
  const [w, d, h] = FURNITURE_SIZE[type as keyof typeof FURNITURE_SIZE];
  return { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture;
};

test("the outdoor furniture is in the library's outdoor section, drawn in 3D and as a plan symbol", () => {
  for (const type of NEW) {
    assert.ok(FURNITURE_GROUPS.outdoor.includes(type), `${type} in the outdoor section`);
    const solid = new GeoBuffer();
    const lines = new LineBuffer();
    pushFurniture(solid, lines, new GeoBuffer(), item(type));
    assert.ok(solid.count > 4, `${type} has a body`);
    assert.ok(lines.p.length > 0, `${type} has its lines`);
    const [w, d] = FURNITURE_SIZE[type];
    assert.notEqual(furnitureSymbol(type, w, d), undefined, `${type} has a symbol`);
  }
});

test("the bar is an L: its parts reach the far end of the long arm and of the short one, the inner corner stays open", () => {
  const solid = new GeoBuffer();
  pushFurniture(solid, new LineBuffer(), new GeoBuffer(), item("bar_l"));
  const [w, d, h] = FURNITURE_SIZE.bar_l;
  // the counter top is the highest: look for vertices at the bar's height in the open corner (front right) – there are none
  let inCorner = 0;
  let farBack = false;
  let farLeft = false;
  for (let i = 0; i < solid.p.length; i += 3) {
    const [x, y, z] = [solid.p[i], solid.p[i + 1], solid.p[i + 2]];
    if (Math.abs(y - h) < 1e-6 && x > 0.1 && z > 0.1) inCorner++;
    if (Math.abs(x - w / 2) < 1e-6 && Math.abs(z + d / 2) < 1e-6) farBack = true;
    if (Math.abs(x + w / 2) < 1e-6 && Math.abs(z - d / 2) < 1e-6) farLeft = true;
  }
  assert.equal(inCorner, 0);
  assert.ok(farBack && farLeft);
});

test("the kitchen and bathroom pieces are drawn too: a hood and a mirror hang, a microwave stands on a worktop", () => {
  for (const type of ["range_hood", "microwave", "coffee_machine", "towel_radiator", "wall_mirror"] as const) {
    const solid = new GeoBuffer();
    pushFurniture(solid, new LineBuffer(), new GeoBuffer(), item(type));
    assert.ok(solid.count > 4, `${type} has a body`);
    assert.ok(FURNITURE_GROUPS.kitchen.includes(type) || FURNITURE_GROUPS.bath.includes(type), `${type} in a group`);
  }
  const floor = { ...newFloor("eg", "EG", 0), rooms: [{ id: "r", name: "r", area_id: null, points: [[0, 0], [4, 0], [4, 4], [0, 4]], floor_material: "wood" }] } as Floor;
  floor.furniture = [{ ...item("worktop"), x: 1, z: 1, w: 1.2, d: 0.62, h: 0.91 }];
  assert.ok(Math.abs(mountBase(floor, { ...item("microwave"), x: 1, z: 1 }) - 0.91) < 1e-6, "on the worktop");
  assert.equal(mountBase(floor, { ...item("microwave"), x: 3, z: 3 }), 0, "on the floor elsewhere");
  assert.equal(mountBase(floor, item("range_hood")), 1.5);
});

test("round things cast a round shadow", () => {
  assert.equal(roundFootprint({ type: "coffee_table_round" }), true);
  assert.equal(roundFootprint({ type: "parasol" }), true);
  assert.equal(roundFootprint({ type: "bar_l" }), false);
});
