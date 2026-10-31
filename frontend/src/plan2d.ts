// The flat plan (2D view): what it draws from the same plan as the 3D view – the walls, the openings, the pins of the
// devices and the readings of the rooms. Pure functions (no Lit): components/plan2d.ts draws what they return.

import { entityName, furnitureEntities, fromCelsius, isActive, isUnavailable, kindOf, pressCall, roomClimateValue, tempUnit, TOGGLE_KINDS, type DeviceKind } from "./devices.ts";
import { readPower } from "./energy.ts";
import { generateWalls, locateOpening, openingHost, pointOnRoomEdge, type Wall } from "./geometry/walls.ts";
import { formatNumber } from "./i18n.ts";
import { iconSvg, mdiIcon, pathIcon } from "./icons.ts";
import { buildMarkers, stateText } from "./markers.ts";
import { ENERGY_DEVICES, furnitureFootprint, gangEntities, GANG_TYPES, signedArea, zonesOf, type Building, type Floor, type Furniture, type Room, type Vec2 } from "./model.ts";
import { groundFloor } from "./solar.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

/** The floor the plan starts on: the one asked for (its id or name), else the ground floor. */
export function planFloor(b: Building, ref: string | null | undefined): Floor | null {
  const wanted = ref?.trim().toLowerCase();
  return (wanted ? b.floors.find((f) => f.id === ref || f.name.trim().toLowerCase() === wanted) : null) ?? groundFloor(b);
}

export interface PlanBox {
  x: number;
  z: number;
  w: number;
  h: number;
}

/** The part of the plan that holds something: rooms, walls, outdoor areas and furniture, with a margin. */
export function planBox(floor: Floor, walls: readonly Wall[]): PlanBox {
  const pts: Vec2[] = [...walls.flatMap((w) => w.footprint), ...zonesOf(floor).flatMap((r) => r.points), ...floor.furniture.flatMap((f) => furnitureFootprint(f))];
  if (!pts.length) return { x: 0, z: 0, w: 10, h: 8 };
  const x0 = Math.min(...pts.map((p) => p[0]));
  const x1 = Math.max(...pts.map((p) => p[0]));
  const z0 = Math.min(...pts.map((p) => p[1]));
  const z1 = Math.max(...pts.map((p) => p[1]));
  const pad = 0.5;
  return { x: x0 - pad, z: z0 - pad, w: Math.max(1, x1 - x0 + 2 * pad), h: Math.max(1, z1 - z0 + 2 * pad) };
}

export function planWalls(b: Building, floor: Floor): Wall[] {
  return generateWalls(floor.rooms, { exterior: b.settings.wall_exterior, interior: b.settings.wall_interior }, floor.walls ?? []).walls;
}

/** An opening as the flat plan draws it: the gap in the wall, and a door's leaf with its swing, a window's two panes. */
export interface PlanOpening {
  id: string;
  type: "door" | "window" | "garage";
  /** The gap across the whole wall, as a polygon. */
  gap: Vec2[];
  /** Lines to draw (panes, a garage door) and paths (the leaves of a door with their swing arcs), in plan metres. */
  lines: [Vec2, Vec2][];
  paths: string[];
}

/** Where the openings of a floor cut the walls and what is drawn in the cut. */
export function planOpenings(floor: Floor, walls: readonly Wall[]): PlanOpening[] {
  const out: PlanOpening[] = [];
  for (const o of floor.openings) {
    const host = openingHost(o, floor.rooms, floor.walls ?? []);
    if (!host) continue;
    const { room, edge } = host;
    const hit = locateOpening(walls, o, host);
    const p0 = pointOnRoomEdge(room, edge, o.offset - o.width / 2);
    const p1 = pointOnRoomEdge(room, edge, o.offset + o.width / 2);
    const len = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) || 1;
    const ux = (p1[0] - p0[0]) / len;
    const uz = (p1[1] - p0[1]) / len;
    // normal into the room (room outlines may run either way round)
    const sgn = signedArea(room.points) >= 0 ? 1 : -1;
    const n: Vec2 = [-uz * sgn, ux * sgn];
    let across: [number, number] = [0.06, 0.06];
    if (hit) across = hit.wall.free || hit.wall.roomLeft === room.id ? [hit.wall.left, hit.wall.right] : [hit.wall.right, hit.wall.left];
    const q = (p: Vec2, k: number): Vec2 => [p[0] + n[0] * k, p[1] + n[1] * k];
    const gap = [q(p0, across[0] + 0.01), q(p1, across[0] + 0.01), q(p1, -across[1] - 0.01), q(p0, -across[1] - 0.01)];
    const mid = (across[0] - across[1]) / 2;
    const lines: [Vec2, Vec2][] = [];
    const paths: string[] = [];
    const pt = (p: Vec2) => `${round(p[0])} ${round(p[1])}`;
    if (o.type === "garage") lines.push([q(p0, across[0] - 0.04), q(p1, across[0] - 0.04)]);
    else if (o.type === "door") {
      const out_ = o.swing === "out";
      const face = out_ ? -across[1] : across[0];
      const hingeAtP0 = (o.hinge === "left") === sgn > 0;
      const two = o.leaves === 2;
      const leafW = (two ? 0.5 : 1) * len;
      if (o.style === "sliding") lines.push([q(p0, face), q(p1, face)]);
      else if (o.style === "passage") lines.push([q(p0, mid), q(p1, mid)]);
      else {
        const arc = (hinge: Vec2, free: Vec2) => {
          const h = q(hinge, face);
          const f = q(free, face);
          const leaf = q(hinge, face + (out_ ? -leafW : leafW));
          const sweep = (leaf[0] - h[0]) * (f[1] - h[1]) - (leaf[1] - h[1]) * (f[0] - h[0]) > 0 ? 1 : 0;
          return `M${pt(h)}L${pt(leaf)}A${round(leafW)} ${round(leafW)} 0 0 ${sweep} ${pt(f)}`;
        };
        const m: Vec2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        if (two) paths.push(arc(p0, m), arc(p1, m));
        else paths.push(hingeAtP0 ? arc(p0, p1) : arc(p1, p0));
      }
    } else {
      lines.push([q(p0, mid + 0.035), q(p1, mid + 0.035)], [q(p0, mid - 0.035), q(p1, mid - 0.035)]);
      if (o.leaves === 2) {
        const m: Vec2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        lines.push([q(m, across[0]), q(m, -across[1])]);
      }
    }
    out.push({ id: o.id, type: o.type, gap, lines, paths });
  }
  return out;
}

const round = (v: number) => Math.round(v * 1000) / 1000;

/** A device on the flat plan: where it stands, its symbol, what it says and what a tap does (see tapPin). */
export interface PlanPin {
  key: string;
  /** The entity a tap acts on. */
  entity: string;
  x: number;
  z: number;
  /** Markup of the symbol (an inline icon or a Home Assistant icon). */
  icon: string;
  name: string;
  text: string;
  active: boolean;
  unavailable: boolean;
  /** Pressed rather than switched. */
  press: boolean;
  /** How it lights up: a switched device turns yellow, an energy device green, the rest the accent colour. */
  tone: "toggle" | "energy" | "plain";
}

const refOf = (v: string | null | undefined): string | null => (v && v !== "none" ? v : null);

/** A power as text: watts, or kilowatts from 1000 W. */
export function powerText(hass: HomeAssistant, w: number): string {
  return Math.abs(w) >= 1000 ? `${formatNumber(hass, w / 1000, 1)} kW` : `${Math.round(w)} W`;
}

/**
 * What a pin says under its symbol, or nothing: a switched device shows its state by its colour, a sensor that
 * detects nothing, or a device that is off, has nothing to say.
 */
export function pinText(hass: HomeAssistant, st: HassEntity | undefined, kind: DeviceKind | null): string {
  if (!st || (kind && TOGGLE_KINDS.has(kind))) return "";
  if (isUnavailable(st)) return "";
  if (kind === "binary") return st.state === "on" ? stateText(hass, st) : "";
  if (kind === "media" || kind === "camera") return ["off", "standby", "idle", "unknown"].includes(st.state) ? "" : stateText(hass, st);
  return stateText(hass, st);
}

// The symbols of the plan are drawn from paths of our own (24 × 24, line style), so they show without any icon font.
const CEILING = "M12 3v3M9 3h6M4 14a8 8 0 0 1 16 0zM8 18v2M12 18v3M16 18v2";
const FLOOR = "M8 3h8l2 7H6zM12 10v10M8 20h8";
const TABLE = "M8 4h8l2 7H6zM12 11v5M9 20c0-2 1-4 3-4s3 2 3 4z";
const SCONCE = "M4 4v16M4 12h5M9 7h7l2 9H7z";
const SPOT = "M7 3h10l-2 5H9zM12 8v2M8 13l-2 3M12 13v4M16 13l2 3";
const STRIP = "M3 8h18v8H3zM6.5 12h.01M10 12h.01M14 12h.01M17.5 12h.01";
const POST = "M9 3h6v6H9zM12 9v11M8 20h8";

/** The symbol of a lamp by its kind (a floor lamp, a ceiling light, a wall light …). */
const LAMP_PATHS: Record<string, string> = {
  lamp_ceiling: CEILING,
  lamp_panel: CEILING,
  lamp_fan: CEILING,
  lamp_downlight: SPOT,
  lamp_spot: SPOT,
  lamp_pendant: "M12 3v6M8 9h8l3 7H5zM10 19h4",
  lamp_floor: FLOOR,
  lamp_uplight: FLOOR,
  lamp_table: TABLE,
  lamp_wall: SCONCE,
  led_strip: STRIP,
  lamp_bollard: POST,
  lamp_garden: POST,
};

/** Symbols of the energy devices, the push button and the water heater. */
const ENERGY_PATHS: Record<string, string> = {
  meter: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM13 7l-3 5h4l-3 5",
  inverter: "M5 7h14l2 10H3zM9 7l-1 10M15 7l1 10M4 12h16",
  home_battery: "M3 8h15v8H3zM18 11h3v2h-3M7 11v2M10 11v2",
  wallbox: "M9 3v5M15 3v5M7 8h10v4a5 5 0 0 1-10 0zM12 17v4",
  grid_point: "M12 3l-5 18h10zM9 10h6M8 16h8",
};
const PUSH_PATH = "M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z";
const HEATER_PATH = "M7 3h10v18H7zM7 7h10M10 12c0 1.5 2 1.5 2 3s-2 1.5-2 0";

/** The power sensor an energy device reads: its own, else the one set for the house in the energy tool. */
function energyPower(b: Building, f: Furniture, own: string | null): string | null {
  const e = b.energy;
  return own ?? refOf(f.power) ?? (f.type === "meter" ? e.grid : f.type === "inverter" ? e.solar : f.type === "home_battery" ? e.battery : null);
}

/** The pin of an energy device: its power (and a battery's charge) as text. */
function energyPin(hass: HomeAssistant, b: Building, f: Furniture, links: { entity: string | null; power: string | null } | undefined): PlanPin | null {
  const powerId = energyPower(b, f, links?.power ?? null);
  const soc = f.type === "home_battery" ? refOf(f.soc) : null;
  const entity = refOf(f.entity) ?? links?.entity ?? powerId ?? soc;
  if (!entity) return null;
  const e = b.energy;
  // the meter's and the battery's sensors can point the other way round (a separate sensor makes the first one unsigned)
  const invert = f.type === "meter" ? e.grid_invert && !f.export : f.type === "home_battery" ? e.battery_invert && !f.charge : false;
  const w = powerId ? readPower(hass.states[powerId], invert) : null;
  const charge = soc && hass.states[soc] && !isUnavailable(hass.states[soc]) ? `${Math.round(Number(hass.states[soc].state))} %` : null;
  // a meter shows which way the power flows: from the grid, or into it
  const arrow = f.type === "meter" && w !== null && Math.abs(w) >= 5 ? (w < 0 ? "↑ " : "↓ ") : "";
  const watts = w !== null ? `${arrow}${powerText(hass, f.type === "meter" ? Math.abs(w) : Math.max(0, w))}` : null;
  const text = [watts, charge].filter(Boolean).join(" · ");
  const st = hass.states[entity];
  return {
    key: `f:${f.id}`,
    entity,
    x: f.x,
    z: f.z,
    icon: f.icon ? mdiIcon(f.icon) : pathIcon(ENERGY_PATHS[f.type] ?? ENERGY_PATHS.meter),
    name: f.name || (powerId ? entityName(hass, powerId) : entityName(hass, entity)),
    text,
    active: (w !== null && Math.abs(w) >= 5) || false,
    unavailable: !!st && isUnavailable(st) && w === null,
    press: false,
    tone: "energy",
  };
}

/** The pin of a piece of furniture that is linked to an entity (a lamp, a push button, a socket, a TV …). */
function furniturePin(hass: HomeAssistant, b: Building, f: Furniture, links: { entity: string | null; power: string | null } | undefined): PlanPin | null {
  if ((ENERGY_DEVICES as readonly string[]).includes(f.type)) return energyPin(hass, b, f, links);
  const gang = GANG_TYPES.has(f.type);
  const ids = gang ? gangEntities(f) : [];
  // an item with only a power sensor (a washer behind a plug) still gets its pin, with the watts
  const ownPower = refOf(f.power) ?? null;
  const entity = gang ? (ids[0] ?? null) : (refOf(f.entity) ?? links?.entity ?? ownPower);
  if (!entity) return null;
  const st = hass.states[entity];
  const press = !!pressCall(entity);
  const kind = kindOf(entity);
  const lamp = LAMP_PATHS[f.type];
  const icon = f.icon
    ? mdiIcon(f.icon)
    : f.type === "push_button"
      ? pathIcon(PUSH_PATH)
      : f.type === "water_heater"
        ? pathIcon(HEATER_PATH)
        : lamp && kind !== "media"
          ? pathIcon(lamp)
          : iconSvg(kind ?? "switch");
  // several gangs: how many of them are on
  const on = gang && ids.length > 1 ? ids.filter((id) => isActive(hass.states[id])).length : 0;
  // an appliance that draws power says how much while it runs
  const powerId = links?.power ?? ownPower;
  const w = powerId && !gang ? readPower(hass.states[powerId]) : null;
  const running = w !== null && w > (typeof f.run_w === "number" && f.run_w > 0 ? f.run_w : 10);
  const toggles = !!kind && TOGGLE_KINDS.has(kind);
  return {
    key: `f:${f.id}`,
    entity,
    x: f.x,
    z: f.z,
    icon,
    name: f.name || entityName(hass, entity),
    text: gang && ids.length > 1 ? `${on}/${ids.length}` : running ? powerText(hass, w!) : press ? "" : pinText(hass, st, kind),
    active: !press && (gang && ids.length > 1 ? on > 0 : running || (!!st && isActive(st))),
    unavailable: !!st && isUnavailable(st),
    press,
    tone: toggles || (gang && !press) ? "toggle" : "plain",
  };
}

/** The pins of a floor: the devices placed in the plan, and the furniture linked to an entity. */
export function planPins(hass: HomeAssistant, b: Building, floor: Floor): PlanPin[] {
  const out: PlanPin[] = [];
  const seen = new Set<string>();
  for (const m of buildMarkers(hass, b)) {
    if (m.floorId !== floor.id || seen.has(m.id)) continue;
    seen.add(m.id);
    const kind = kindOf(m.id);
    out.push({
      key: `d:${m.id}`,
      entity: m.id,
      x: m.x,
      z: m.z,
      icon: m.icon,
      name: m.name,
      text: pinText(hass, hass.states[m.id], kind),
      active: m.active,
      unavailable: m.unavailable,
      press: false,
      tone: kind && TOGGLE_KINDS.has(kind) ? "toggle" : "plain",
    });
  }
  const links = furnitureEntities(hass, [floor]);
  for (const f of floor.furniture) {
    const pin = furniturePin(hass, b, f, links.get(f.id));
    if (!pin || (seen.has(pin.entity) && !GANG_TYPES.has(f.type) && pin.tone !== "energy")) continue;
    seen.add(pin.entity);
    out.push(pin);
  }
  return out;
}

/** Where a point lands once the plan is turned by `deg` degrees (clockwise) about `c`. */
export function turnPoint(p: Vec2, c: Vec2, deg: number): Vec2 {
  if (!deg) return [p[0], p[1]];
  const a = (deg * Math.PI) / 180;
  const dx = p[0] - c[0];
  const dz = p[1] - c[1];
  return [c[0] + dx * Math.cos(a) - dz * Math.sin(a), c[1] + dx * Math.sin(a) + dz * Math.cos(a)];
}

/** The piece of the plan shown after the turn: the chosen area (in the turned plan's coordinates), else all of it. */
export function planView(box: PlanBox, deg: number, area: PlanBox | null | undefined): { center: Vec2; view: PlanBox } {
  const center: Vec2 = [box.x + box.w / 2, box.z + box.h / 2];
  if (area && area.w > 0.2 && area.h > 0.2) return { center, view: area };
  const corners = ([[box.x, box.z], [box.x + box.w, box.z], [box.x + box.w, box.z + box.h], [box.x, box.z + box.h]] as Vec2[]).map((p) => turnPoint(p, center, deg));
  const x0 = Math.min(...corners.map((p) => p[0]));
  const z0 = Math.min(...corners.map((p) => p[1]));
  return { center, view: { x: x0, z: z0, w: Math.max(...corners.map((p) => p[0])) - x0, h: Math.max(...corners.map((p) => p[1])) - z0 } };
}

/**
 * Pins that stand on top of each other are pushed apart (screen pixels, so what is drawn never overlaps): every pair
 * closer than `min` moves away from each other, a little at a time, and no pin strays further than `reach` from where
 * it belongs. The order of the pins is kept.
 */
export function spreadPins(points: readonly [number, number][], min: number, reach: number): [number, number][] {
  const out = points.map((p): [number, number] => [p[0], p[1]]);
  for (let round = 0; round < 40; round++) {
    let moved = false;
    for (let i = 0; i < out.length; i++) {
      for (let j = i + 1; j < out.length; j++) {
        let dx = out[j][0] - out[i][0];
        let dy = out[j][1] - out[i][1];
        let d = Math.hypot(dx, dy);
        if (d >= min) continue;
        // exactly on top of each other: apart along a direction of their own
        if (d < 0.01) {
          const a = (i * 2.399 + j) % (2 * Math.PI);
          dx = Math.cos(a);
          dy = Math.sin(a);
          d = 1;
        }
        const push = (min - d) / 2 + 0.5;
        const ux = dx / d;
        const uy = dy / d;
        out[i][0] -= ux * push;
        out[i][1] -= uy * push;
        out[j][0] += ux * push;
        out[j][1] += uy * push;
        moved = true;
      }
    }
    // not further from home than the reach
    out.forEach((p, k) => {
      const hx = p[0] - points[k][0];
      const hy = p[1] - points[k][1];
      const h = Math.hypot(hx, hy);
      if (h > reach) {
        p[0] = points[k][0] + (hx / h) * reach;
        p[1] = points[k][1] + (hy / h) * reach;
      }
    });
    if (!moved) break;
  }
  return out;
}

/** What a room reads: its temperature and humidity, as text (null where no sensor reports one). */
export function roomReadings(hass: HomeAssistant, floor: Floor, room: Room): { temp: string | null; humidity: string | null } {
  const t = roomClimateValue(hass, floor, room, "temperature");
  const h = roomClimateValue(hass, floor, room, "humidity");
  return { temp: t === null ? null : `${formatNumber(hass, fromCelsius(hass, t), 1)} ${tempUnit(hass)}`, humidity: h === null ? null : `${formatNumber(hass, h, 0)} %` };
}
