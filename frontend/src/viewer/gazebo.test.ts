import assert from "node:assert/strict";
import { test } from "node:test";
import { areaGround, GAZEBO_COVERS, newFloor, type OutdoorArea } from "../model.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";
import { pushOutdoor } from "./outdoor.ts";

const square = (extra: Partial<OutdoorArea> = {}): OutdoorArea =>
  ({ id: "g", type: "gazebo", points: [[0, 0], [3, 0], [3, 3], [0, 3]], height: 2.3, outline: true, ...extra }) as OutdoorArea;

/** What a square gazebo draws into the solid, the line and the see-through buffers. */
function draw(area: OutdoorArea) {
  const floor = { ...newFloor("eg", "EG", 0), outdoor: [area] };
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  const water = new GeoBuffer();
  pushOutdoor(solid, lines, floor, water);
  return { solid, lines, water };
}

test("a square gazebo has four posts and a roof up to a peak over its middle, whatever the cover", () => {
  for (const cover of GAZEBO_COVERS) {
    const { solid, lines } = draw(square({ cover, rise: 1 }));
    assert.ok(solid.count > 0, `${cover}: posts and eave beams`);
    // the highest point of the lines is the peak: the ground, the posts' 2.3 and the rise of 1
    const area = square({ cover, rise: 1 });
    const want = areaGround({ ...newFloor("eg", "EG", 0), outdoor: [area] }, area) + 2.3 + 1;
    let top = -Infinity;
    for (let i = 1; i < lines.p.length; i += 3) top = Math.max(top, lines.p[i]);
    assert.ok(Math.abs(top - want) < 0.05, `${cover}: peak at ${top}, wanted ${want}`);
  }
});

test("canvas and wood close the roof in the solid buffer, plates in the see-through one, open leaves it out", () => {
  const solidOf = (cover: OutdoorArea["cover"]) => draw(square({ cover })).solid.count;
  const open = solidOf("none");
  assert.ok(solidOf("canvas") > open);
  assert.ok(solidOf("wood") > open);
  const plexi = draw(square({ cover: "plexi" }));
  assert.ok(plexi.water.count >= 8, "the plates lie in the see-through layer");
  assert.equal(draw(square({ cover: "canvas" })).water.count, 0);
});
