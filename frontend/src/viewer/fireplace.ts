// The fire of a built-in fireplace: tongues of flame that flicker above the logs while its fan is on. Drawn into the same
// moving mesh as awnings, gates and fridge doors; the wall, the opening and the logs are the item's still model.

import { Color } from "three";
import type { Furniture } from "../model.ts";
import { fireOpening } from "../model.ts";
import { DEG, type GeoBuffer } from "./geo.ts";

type V3 = [number, number, number];

const OUTER = 0xff6a1a;
const MIDDLE = 0xffa22e;
const INNER = 0xffe27a;
const EMBER = 0x8a2c08;

/** Height above the floor the logs end at, in a fire opening that starts at `y0`. */
export function logsTop(y0: number): number {
  return y0 + 0.1;
}

/**
 * `time` in seconds drives the flicker. `base`: the floor's height under the item.
 */
export function pushFlames(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror" | "fire_height" | "fire_y">, base: number, time: number): void {
  const a = f.rotation * DEG;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const P = (lx: number, y: number, lz: number): V3 => [f.x + mx * lx * cos - lz * sin, base + y, f.z + mx * lx * sin + lz * cos];
  // both sides: a mirrored item turns every face inside out
  const tri = (p: V3, q: V3, r: V3, col: Color) => {
    buf.tri(p, q, r, col);
    buf.tri(p, r, q, col);
  };
  const o = fireOpening(f);
  const width = o.x1 - o.x0;
  const floor = logsTop(o.y0);
  const room = o.y1 - floor;
  // the glow on the back of the opening, behind the flames
  const z0 = o.zBack + 0.012;
  const ember = new Color(EMBER);
  tri(P(o.x0 + 0.03, floor - 0.08, z0), P(o.x1 - 0.03, floor - 0.08, z0), P(o.x1 - 0.03, floor + room * 0.55, z0), ember);
  tri(P(o.x0 + 0.03, floor - 0.08, z0), P(o.x1 - 0.03, floor + room * 0.55, z0), P(o.x0 + 0.03, floor + room * 0.55, z0), ember);
  // the flames: tongues across the opening, each its own height and rhythm, a bright core in the middle
  const n = Math.max(3, Math.round(width / 0.11));
  const zc = (o.zBack + o.zFront) / 2 - 0.02;
  for (let i = 0; i < n; i++) {
    const k = (i + 0.5) / n;
    const x = o.x0 + 0.04 + k * (width - 0.08);
    // taller in the middle, never above the opening
    const peak = Math.sin(Math.PI * k) * 0.55 + 0.35;
    const flick = 0.75 + 0.25 * Math.sin(time * 9 + i * 1.9) * Math.cos(time * 5.3 + i * 0.7);
    const hgt = Math.min(room - 0.04, room * 0.75 * peak * flick);
    const half = (width / n) * 0.62;
    const lean = Math.sin(time * 4 + i * 2.3) * half * 0.5;
    tri(P(x - half, floor, zc), P(x + half, floor, zc), P(x + lean, floor + hgt, zc), new Color(i % 2 ? OUTER : MIDDLE));
    // the inner tongue: smaller, yellow
    tri(P(x - half * 0.5, floor, zc + 0.012), P(x + half * 0.5, floor, zc + 0.012), P(x + lean * 0.8, floor + hgt * 0.62, zc + 0.012), new Color(INNER));
  }
}
