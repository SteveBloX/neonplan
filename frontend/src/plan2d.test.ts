import assert from "node:assert/strict";
import { test } from "node:test";
import { pressCall } from "./devices.ts";
import { emptyBuilding, newFloor, type Building, type Furniture, type Opening, type Room } from "./model.ts";
import { planBox, planFloor, planOpenings, planPins, planView, planWalls, roomReadings, spreadPins, turnPoint } from "./plan2d.ts";
import { DEFAULT_PLAN_OPTIONS, planOptions } from "./plan-options.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });
const hassWith = (states: HassEntity[]): HomeAssistant => ({
  language: "fr",
  connection: {} as HomeAssistant["connection"],
  callWS: async () => undefined as never,
  callService: async () => undefined,
  entities: {},
  states: Object.fromEntries(states.map((s) => [s.entity_id, s])),
});

const room: Room = { id: "r1", name: "Salon", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" };
const furniture = (patch: Partial<Furniture>) => ({ id: "f1", type: "sofa", x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 1, variant: null, ...patch }) as Furniture;

function house(): { b: Building; floor: ReturnType<typeof newFloor> } {
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.rooms.push(room);
  b.floors.push(floor);
  return { b, floor };
}

test("the plan's choices: defaults, saved booleans, and nothing else", () => {
  assert.deepEqual(planOptions(null), DEFAULT_PLAN_OPTIONS);
  assert.deepEqual(planOptions({ furniture: false, humidity: true, names: "no" }), { ...DEFAULT_PLAN_OPTIONS, furniture: false, humidity: true });
});

test("the plan starts on the floor asked for by id or name, else the ground floor", () => {
  const { b } = house();
  const og = newFloor("og", "Obergeschoss", 2.6);
  og.rooms.push({ ...room, id: "r2" });
  b.floors.push(og);
  assert.equal(planFloor(b, null)?.id, "eg");
  assert.equal(planFloor(b, "og")?.id, "og");
  assert.equal(planFloor(b, "obergeschoss")?.id, "og");
  assert.equal(planFloor(b, "gone")?.id, "eg");
});

test("the plan's box holds the walls and the furniture with a margin", () => {
  const { b, floor } = house();
  floor.furniture.push(furniture({ x: 6, z: 1 }));
  const box = planBox(floor, planWalls(b, floor));
  assert.ok(box.x < -0.1 && box.x + box.w > 6.4, "reaches the furniture outside the room");
  assert.ok(box.z < 0 && box.z + box.h > 3);
});

test("a door and a window cut the wall and are drawn in the cut", () => {
  const { b, floor } = house();
  const base = { room_id: "r1", edge: 0, offset: 2, width: 0.9, sill: 0, height: 2, hinge: "left", leaves: 1, swing: "in", contact2: null, cover: null, contact: null, tilt: null } as const;
  floor.openings.push({ ...base, id: "d1", type: "door" } as Opening, { ...base, id: "w1", type: "window", edge: 2, sill: 0.9, height: 1.2, width: 1.2 } as Opening);
  const out = planOpenings(floor, planWalls(b, floor));
  const door = out.find((o) => o.id === "d1")!;
  const win = out.find((o) => o.id === "w1")!;
  assert.equal(door.gap.length, 4);
  assert.equal(door.paths.length, 1, "one leaf with its swing");
  assert.equal(win.lines.length, 2, "two panes");
});

test("pins: placed devices, linked furniture and a push button that is pressed, not switched", () => {
  const { b, floor } = house();
  floor.placements.push({ entity_id: "light.salon", x: 2, z: 1.5, y: null });
  floor.furniture.push(
    furniture({ id: "pb", type: "push_button", name: "Veille PC", gangs: [{ entity: "button.pc_veille" }] }),
    furniture({ id: "tv", type: "tv_board", entity: "none" }),
  );
  const hass = hassWith([st("light.salon", "on", { brightness: 128 }), st("button.pc_veille", "2026-10-31T09:00:00+00:00")]);
  const pins = planPins(hass, b, floor);
  const light = pins.find((p) => p.entity === "light.salon")!;
  assert.deepEqual([light.active, light.text, light.press], [true, "", false], "a light says it is on by its colour, not in words");
  const button = pins.find((p) => p.entity === "button.pc_veille")!;
  assert.deepEqual([button.name, button.press, button.active, button.text], ["Veille PC", true, false, ""]);
  assert.equal(pins.some((p) => p.key === "f:tv"), false, "no entity, no pin");
});

test("a tap presses buttons, scripts and scenes; lights and switches are switched", () => {
  assert.deepEqual(pressCall("button.pc_veille"), ["button", "press"]);
  assert.deepEqual(pressCall("input_button.x"), ["input_button", "press"]);
  assert.deepEqual(pressCall("script.nacht"), ["script", "turn_on"]);
  assert.deepEqual(pressCall("scene.film"), ["scene", "turn_on"]);
  assert.equal(pressCall("light.salon"), null);
  assert.equal(pressCall("switch.pc"), null);
});

test("a switched device shows its state by its colour; a sensor that senses nothing says nothing", () => {
  const { b, floor } = house();
  floor.placements.push({ entity_id: "light.salon", x: 2, z: 1.5, y: null }, { entity_id: "binary_sensor.tuer", x: 1, z: 1, y: null }, { entity_id: "binary_sensor.bewegung", x: 3, z: 1, y: null }, { entity_id: "sensor.temp", x: 3, z: 2, y: null });
  const hass = hassWith([
    st("light.salon", "on", { brightness: 255 }),
    st("binary_sensor.tuer", "on", { device_class: "door" }),
    st("binary_sensor.bewegung", "off", { device_class: "motion" }),
    st("sensor.temp", "21.2", { unit_of_measurement: "°C", device_class: "temperature" }),
  ]);
  const pins = planPins(hass, b, floor);
  const by = (id: string) => pins.find((p) => p.entity === id)!;
  assert.deepEqual([by("light.salon").tone, by("light.salon").active, by("light.salon").text], ["toggle", true, ""]);
  assert.match(by("binary_sensor.tuer").text, /^(Open|Offen|Ouvert)$/);
  assert.equal(by("binary_sensor.bewegung").text, "");
  assert.match(by("sensor.temp").text, /^21,2\s°C$/);
});

test("energy devices show their power; a lamp gets a lamp symbol", () => {
  const { b, floor } = house();
  b.energy.grid_invert = false;
  floor.furniture.push(
    furniture({ id: "m", type: "meter", power: "sensor.netz" }),
    furniture({ id: "i", type: "inverter", power: "sensor.pv" }),
    furniture({ id: "bat", type: "home_battery", power: "sensor.akku", soc: "sensor.akku_soc" }),
    furniture({ id: "l", type: "lamp_floor", entity: "switch.stehlampe" }),
  );
  const hass = hassWith([
    st("sensor.netz", "-1200", { unit_of_measurement: "W", device_class: "power" }),
    st("sensor.pv", "3.4", { unit_of_measurement: "kW", device_class: "power" }),
    st("sensor.akku", "250", { unit_of_measurement: "W", device_class: "power" }),
    st("sensor.akku_soc", "81", { unit_of_measurement: "%", device_class: "battery" }),
    st("switch.stehlampe", "on"),
  ]);
  const pins = planPins(hass, b, floor);
  const by = (key: string) => pins.find((p) => p.key === key)!;
  assert.equal(by("f:m").text, "↑ 1,2 kW", "feeding the grid");
  assert.equal(by("f:i").text, "3,4 kW");
  assert.equal(by("f:bat").text, "250 W · 81 %");
  assert.deepEqual([by("f:m").tone, by("f:m").active], ["energy", true]);
  assert.match(by("f:l").icon, /^<svg/, "an icon of its own, no icon font needed");
  assert.notEqual(by("f:l").icon, by("f:i").icon);
  assert.equal(by("f:l").tone, "toggle");
});

test("the view: turned about the middle, cropped to a chosen area", () => {
  const box = { x: 0, z: 0, w: 8, h: 4 };
  const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;
  const p = turnPoint([8, 2], [4, 2], 90);
  assert.ok(near(p[0], 4) && near(p[1], 6), "the east end turns to the south");
  const turned = planView(box, 90, null).view;
  assert.ok(near(turned.w, 4) && near(turned.h, 8), "a quarter turn swaps width and height");
  assert.deepEqual(planView(box, 90, { x: 1, z: 1, w: 2, h: 3 }).view, { x: 1, z: 1, w: 2, h: 3 });
  assert.deepEqual(planView(box, 0, null).view, box);
});

test("pins on top of each other are pushed apart, near where they belong", () => {
  const out = spreadPins([[100, 100], [100, 100], [104, 100], [400, 300]], 36, 70);
  for (let i = 0; i < 3; i++) for (let j = i + 1; j < 3; j++) assert.ok(Math.hypot(out[i][0] - out[j][0], out[i][1] - out[j][1]) >= 35, "no two of the three overlap");
  for (let i = 0; i < 3; i++) assert.ok(Math.hypot(out[i][0] - [[100, 100], [100, 100], [104, 100]][i][0], out[i][1] - 100) <= 70.01);
  assert.deepEqual(out[3], [400, 300], "a lone pin stays");
});

test("room readings: temperature in the shown unit, humidity as a percentage, nothing without a sensor", () => {
  const { floor } = house();
  const r = { ...room, climate: { temperature: "sensor.t", humidity: "sensor.h" } } as Room;
  const hass = hassWith([st("sensor.t", "21.4", { unit_of_measurement: "°C", device_class: "temperature" }), st("sensor.h", "48", { unit_of_measurement: "%", device_class: "humidity" })]);
  const read = roomReadings(hass, floor, r);
  assert.match(read.temp ?? "", /^21,4\s°C$/);
  assert.match(read.humidity ?? "", /^48\s%$/);
  assert.deepEqual(roomReadings(hassWith([]), floor, room), { temp: null, humidity: null });
});
