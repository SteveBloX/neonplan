// A gate for a driveway or a garden path: two posts and one or two leaves of bars that swing or slide open with
// the gate's entities (a cover, a contact sensor). Drawn into the same moving mesh as awnings and fridge doors.

import { Color } from "three";
import type { Furniture } from "../model.ts";
import { gateKind } from "../model.ts";
import { DEG, type GeoBuffer } from "./geo.ts";

const POST = 0x172238;
const POST_TOP = 0x26375e;
const BAR = 0x2a3a60;
const RAIL = 0x34487a;
const LOCKED = 0x2b8fb3;
const UNLOCKED = 0xffb020;

/** Width of the posts: slim next to a footpath gate, sturdy next to a driveway gate. */
export function gatePostWidth(w: number): number {
  return Math.max(0.1, Math.min(0.24, w * 0.06));
}

/** Free width between the posts. */
export function gateSpan(w: number): number {
  return Math.max(0.2, w - 2 * gatePostWidth(w));
}

type V3 = [number, number, number];

/**
 * `open`: 0 closed … 1 fully open (swung 90° towards the item's front, or slid out sideways). `base`: the ground's
 * height. `unlocked`: the gate's smart lock (true shows an amber light on the post, false a blue one, null none).
 * `mirror` puts the hinges and the slide on the other side.
 */
export function pushGate(
  buf: GeoBuffer,
  f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "variant" | "mirror">,
  base: number,
  open: number,
  unlocked: boolean | null = null,
): void {
  const a = f.rotation * DEG;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const t = Math.max(0, Math.min(1, open));
  // local x across, z towards the front, y up from the ground
  const P = (lx: number, y: number, lz: number): V3 => [f.x + mx * lx * cos - lz * sin, base + y, f.z + mx * lx * sin + lz * cos];
  const post = new Color(POST);
  const postTop = new Color(POST_TOP);
  const bar = new Color(BAR);
  const rail = new Color(RAIL);

  // both sides are drawn: a mirrored gate turns every face inside out
  const tri = (p: V3, q: V3, r: V3, col: Color) => {
    buf.tri(p, q, r, col);
    buf.tri(p, r, q, col);
  };
  const quad = (p: V3, q: V3, r: V3, u: V3, col: Color) => {
    tri(p, q, r, col);
    tri(p, r, u, col);
  };
  // a box from local corners
  const box = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, col: Color, topCol: Color) => {
    quad(P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1), topCol);
    quad(P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1), col);
    quad(P(x0, y0, z0), P(x1, y0, z0), P(x1, y1, z0), P(x0, y1, z0), col);
    quad(P(x0, y0, z0), P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), col);
    quad(P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0), col);
  };
  // a square beam between two local points (rails and bars), r = half its thickness
  const beam = (a0: V3, a1: V3, r: number, col: Color) => {
    const p = P(a0[0], a0[1], a0[2]);
    const q = P(a1[0], a1[1], a1[2]);
    const d: V3 = [q[0] - p[0], q[1] - p[1], q[2] - p[2]];
    const len = Math.hypot(...d) || 1;
    const u: V3 = [d[0] / len, d[1] / len, d[2] / len];
    // one axis across the beam: horizontal for a bar, vertical for a rail
    const side: V3 = Math.abs(u[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
    const n1 = norm(cross(u, side), r);
    const n2 = norm(cross(u, n1), r);
    const K = [[1, 1], [-1, 1], [-1, -1], [1, -1]];
    const corner = (o: V3, i: number): V3 => [o[0] + n1[0] * K[i][0] + n2[0] * K[i][1], o[1] + n1[1] * K[i][0] + n2[1] * K[i][1], o[2] + n1[2] * K[i][0] + n2[2] * K[i][1]];
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      quad(corner(p, i), corner(q, i), corner(q, j), corner(p, j), col);
    }
  };

  const w = Math.max(0.6, f.w);
  const thick = Math.max(0.05, Math.min(0.5, f.d));
  const h = Math.max(0.6, f.h);
  const pw = gatePostWidth(w);
  const span = gateSpan(w);
  const kind = gateKind(f.variant);
  const hw = w / 2;
  const pd = Math.max(thick, pw) / 2;

  // the posts, a little higher than the leaves, with a cap
  const postH = h + 0.12;
  for (const side of [-1, 1]) {
    const x0 = side < 0 ? -hw : hw - pw;
    box(x0, x0 + pw, 0, postH, -pd, pd, post, postTop);
    box(x0 - 0.02, x0 + pw + 0.02, postH, postH + 0.05, -pd - 0.02, pd + 0.02, postTop, postTop);
  }
  // the smart lock: a small light on the left post, towards the front
  if (unlocked !== null) box(-hw + pw * 0.3, -hw + pw * 0.7, h * 0.62, h * 0.62 + 0.07, pd, pd + 0.025, new Color(unlocked ? UNLOCKED : LOCKED), new Color(unlocked ? UNLOCKED : LOCKED));

  const y0 = 0.14;
  const y1 = h;
  // a leaf of length `len` standing on `origin` (local x, z) and running along direction (dx, dz); bars across it
  const leaf = (ox: number, oz: number, dx: number, dz: number, len: number) => {
    const at = (u: number, y: number): V3 => [ox + dx * u, y, oz + dz * u];
    for (const y of [y0, (y0 + y1) / 2, y1]) beam(at(0, y), at(len, y), 0.022, rail);
    beam(at(0.02, y0), at(0.02, y1), 0.022, rail);
    beam(at(len - 0.02, y0), at(len - 0.02, y1), 0.022, rail);
    const n = Math.max(2, Math.round(len / 0.13));
    for (let i = 1; i < n; i++) beam(at((len * i) / n, y0), at((len * i) / n, y1), 0.011, bar);
  };

  if (kind === "sliding") {
    // one leaf in front of the posts' inner face, sliding out to the right along a rail on the ground
    const z = pd + 0.04;
    const slide = t * span;
    leaf(-hw + pw + slide, z, 1, 0, span);
    beam([-hw + pw, 0.02, z], [hw + span, 0.02, z], 0.015, rail);
    return;
  }
  const swing = t * (Math.PI / 2);
  if (kind === "single") {
    // hinged at the left post
    leaf(-hw + pw, 0, Math.cos(swing), Math.sin(swing), span);
    return;
  }
  // two leaves meeting in the middle, each hinged at its post
  const half = span / 2 - 0.01;
  leaf(-hw + pw, 0, Math.cos(swing), Math.sin(swing), half);
  leaf(hw - pw, 0, -Math.cos(swing), Math.sin(swing), half);
}

function cross(a: V3, b: V3): V3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

function norm(a: V3, len: number): V3 {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [(a[0] / l) * len, (a[1] / l) * len, (a[2] / l) * len];
}
