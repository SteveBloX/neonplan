// A pool used as a spa (free): what its entities say now, the water's colour by temperature and where the pump unit
// stands beside it. Plain logic without three.js: the editor, the host view and the viewer share it.

import type { Building, EntityRef, Floor, OutdoorArea, SpaSettings, Vec2 } from "./model.ts";
import { outdoorGround, poolFloorY, poolRimY, poolWaterY, signedArea } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

/** Standard colour steps: cold blue, fresh cyan, pleasant turquoise, warm amber, hot orange (°C). */
export const DEFAULT_SPA_COLORS: readonly { t: number; color: string }[] = [
  { t: 10, color: "#2f6bff" },
  { t: 26, color: "#27b8ff" },
  { t: 33, color: "#35e0c0" },
  { t: 37, color: "#ffd34d" },
  { t: 40, color: "#ff6a3a" },
];

/** A "#rrggbb" colour as three numbers from 0 to 1 (a bad value gives a mid blue). */
export function hexRgb(hex: string): [number, number, number] {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return [0.2, 0.55, 1];
  const n = parseInt(m[1], 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/** The steps of a spa, from cold to hot (its own, else the standard ones). */
export function spaSteps(spa: Pick<SpaSettings, "colors">): { t: number; color: string }[] {
  const own = (spa.colors ?? []).filter((s) => Number.isFinite(s.t) && /^#[0-9a-f]{6}$/i.test(s.color));
  return [...(own.length ? own : DEFAULT_SPA_COLORS)].sort((a, b) => a.t - b.t);
}

/** The water colour at a temperature: the highest step it has reached, blended with the next one unless `blend` is off. */
export function spaColor(spa: Pick<SpaSettings, "colors" | "blend">, temp: number): [number, number, number] {
  const steps = spaSteps(spa);
  let i = -1;
  steps.forEach((s, k) => {
    if (temp >= s.t) i = k;
  });
  // below the first step: the first colour
  if (i < 0) return hexRgb(steps[0].color);
  const here = hexRgb(steps[i].color);
  const next = steps[i + 1];
  if (!next || spa.blend === false) return here;
  const k = (temp - steps[i].t) / Math.max(0.001, next.t - steps[i].t);
  const to = hexRgb(next.color);
  return [here[0] + (to[0] - here[0]) * k, here[1] + (to[1] - here[1]) * k, here[2] + (to[2] - here[2]) * k];
}

export interface SpaState {
  /** Water temperature (°C) and the target, when the climate entity reports them. */
  temp: number | null;
  target: number | null;
  /** The heating mode is on (the climate is not off). */
  heatMode: boolean;
  /** It heats right now: the climate says so, or – without that – the water is colder than the target. */
  heating: boolean;
  bubbles: boolean;
  jets: boolean;
  filter: boolean;
  sanitizer: boolean;
}

const ref = (v: EntityRef | undefined): string | null => (typeof v === "string" && v !== "none" && v !== "" ? v : null);
const on = (st: HassEntity | undefined): boolean => !!st && st.state === "on";

/** What the spa's entities say now. */
export function spaState(hass: HomeAssistant, spa: SpaSettings): SpaState {
  const climateId = ref(spa.climate);
  const cl = climateId ? hass.states[climateId] : undefined;
  const live = !!cl && cl.state !== "unavailable" && cl.state !== "unknown";
  const num = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : typeof v === "string" && v.trim() !== "" && Number.isFinite(Number(v)) ? Number(v) : null);
  const temp = live ? num(cl!.attributes.current_temperature) : null;
  const target = live ? num(cl!.attributes.temperature) : null;
  const heatMode = live && cl!.state !== "off";
  const action = live ? cl!.attributes.hvac_action : undefined;
  const heating = heatMode && (action === "heating" || (action === undefined && temp !== null && target !== null && temp < target - 0.1));
  const sw = (id: EntityRef | undefined) => {
    const key = ref(id);
    return key ? on(hass.states[key]) : false;
  };
  return { temp, target, heatMode, heating, bubbles: sw(spa.bubbles), jets: sw(spa.jets), filter: sw(spa.filter), sanitizer: sw(spa.sanitizer) };
}

/** Size of the pump unit (m): across, deep, tall. */
export const SPA_UNIT_SIZE: [number, number, number] = [0.62, 0.42, 0.78];

export interface SpaUnit {
  x: number;
  z: number;
  /** Turn in degrees: its front faces away from the spa (local front = +z). */
  rotation: number;
  /** The ground it stands on (floor coordinates). */
  y: number;
  /** The two pipes' ends on the spa's rim (plan). */
  rims: [Vec2, Vec2];
}

/** The closest point of a polygon's outline to a point. */
export function nearestOnOutline(poly: readonly Vec2[], p: Vec2): Vec2 {
  let best: Vec2 = poly[0];
  let bestD = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l2 = dx * dx + dz * dz || 1;
    const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2));
    const q: Vec2 = [a[0] + dx * t, a[1] + dz * t];
    const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
    if (d < bestD) {
      bestD = d;
      best = q;
    }
  }
  return best;
}

/** The turn that makes a unit at (x, z) face away from the middle of the outline. */
function facingAway(poly: readonly Vec2[], x: number, z: number): number {
  const cx = poly.reduce((s, p) => s + p[0], 0) / poly.length;
  const cz = poly.reduce((s, p) => s + p[1], 0) / poly.length;
  // the front is (-sin r, cos r): pointing from the centre to the unit
  return (Math.atan2(-(x - cx), z - cz) * 180) / Math.PI;
}

/** Where the pump unit of a spa stands: beside it on a side (east by default) or exactly where it was put. */
export function spaUnit(floor: Floor, a: OutdoorArea, spa: SpaSettings): SpaUnit {
  const xs = a.points.map((p) => p[0]);
  const zs = a.points.map((p) => p[1]);
  const [x0, x1, z0, z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
  const gap = 0.35 + SPA_UNIT_SIZE[1] / 2 + 0.1;
  // the front looks away from the spa: local +z turned to the outside
  const auto: Record<string, [number, number, number]> = {
    e: [x1 + gap, (z0 + z1) / 2, -90],
    w: [x0 - gap, (z0 + z1) / 2, 90],
    n: [(x0 + x1) / 2, z0 - gap, 180],
    s: [(x0 + x1) / 2, z1 + gap, 0],
  };
  const [ax, az, ar] = auto[spa.unit_side ?? "e"] ?? auto.e;
  const x = spa.unit_x ?? ax;
  const z = spa.unit_z ?? az;
  const rotation = spa.unit_rotation ?? (spa.unit_x != null || spa.unit_z != null ? facingAway(a.points, x, z) : ar);
  const r = (rotation * Math.PI) / 180;
  // the back of the unit (local -z) carries the two pipe ports, a hand's width either side of the middle
  const port = (lx: number): Vec2 => [x + lx * Math.cos(r) + 0.2 * Math.sin(r), z + lx * Math.sin(r) - 0.2 * Math.cos(r)];
  return { x, z, rotation, y: outdoorGround(floor, x, z), rims: [nearestOnOutline(a.points, port(-0.14)), nearestOnOutline(a.points, port(0.14))] };
}

/** One spa as the viewer draws it. */
export interface SpaPiece {
  id: string;
  floorId: string;
  points: Vec2[];
  /** Water surface, basin floor and rim (floor coordinates). */
  y: number;
  floorY: number;
  rimY: number;
  /** The water's colour (null without a temperature: the pool keeps its own blue). */
  color: [number, number, number] | null;
  state: SpaState;
  unit: SpaUnit;
  /** Something moves on it (a filter, a disinfection, heating): the viewer keeps animating. */
  animated: boolean;
  /** The outline's area in m², to scale the bubbles. */
  area: number;
}

/** Every spa of a building, in the order of its floors and areas. */
export function spaPieces(hass: HomeAssistant, b: Building): SpaPiece[] {
  const out: SpaPiece[] = [];
  for (const floor of b.floors)
    for (const a of floor.outdoor ?? []) {
      if (a.type !== "pool" || !a.spa || a.points.length < 3) continue;
      const state = spaState(hass, a.spa);
      out.push({
        id: a.id,
        floorId: floor.id,
        points: a.points,
        y: poolWaterY(floor, a),
        floorY: poolFloorY(floor, a),
        rimY: poolRimY(floor, a),
        color: state.temp === null ? null : spaColor(a.spa, state.temp),
        state,
        unit: spaUnit(floor, a, a.spa),
        animated: state.filter || state.sanitizer || state.heating,
        area: Math.abs(signedArea(a.points)),
      });
    }
  return out;
}

/** A signature of everything a spa piece looks like, to redraw only when it changed. */
export function spaSignature(p: SpaPiece): string {
  const s = p.state;
  const c = p.color ? p.color.map((v) => Math.round(v * 255)).join(",") : "-";
  return [p.id, p.floorId, p.points.length, p.points[0]?.join(","), p.y.toFixed(3), p.floorY.toFixed(3), c, +s.heatMode, +s.heating, +s.bubbles, +s.jets, +s.filter, +s.sanitizer, p.unit.x.toFixed(2), p.unit.z.toFixed(2), p.unit.rotation.toFixed(0)].join(":");
}
