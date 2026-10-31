// The moving parts of a 3D printer: the print head sliding along its rail, the bed rocking under it, the part growing
// layer by layer while it prints, a status light and the chamber light. The frame stands in the item's still model
// (furniture.ts); these parts go into the same moving mesh as awnings, gates and flames.

import { Color } from "three";
import type { Furniture } from "../model.ts";
import type { PrinterState } from "../printer.ts";
import { DEG, type GeoBuffer } from "./geo.ts";

type V3 = [number, number, number];

const FILAMENT = 0xff8a3a;
const FILAMENT_TOP = 0xffb070;
const HEAD = 0x0b111f;
const RAIL = 0x34487a;
const PLATE = 0x2a3a60;
const DIM = 0x2a3350;
const GREEN = 0x3dff9a;
const AMBER = 0xffb020;
const RED = 0xff4a4a;
const CYAN = 0x4fd8ff;
const WARM = 0xffe9b8;

/** Height of the bed above the item's floor (the frame's base is 8 cm). */
const BED_Y = 0.115;

/** Where the printed part starts: the top of the bed plate. */
export const PRINTER_BED_TOP = BED_Y + 0.012;

/** How much of the part is built: 0 … 1 (the progress; without one a printing printer builds and starts again). */
export function printGrown(s: PrinterState, time: number): number {
  return s.phase === "done" ? 1 : s.progress !== null ? s.progress : s.phase === "printing" ? (time * 0.05) % 1 : 0;
}

/**
 * `time` in seconds drives the movement; `s` is what the printer says. Only a printing printer moves: a paused one stands
 * still with its part, a finished one shows its whole part.
 */
export function pushPrinter(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, s: PrinterState, time: number, model?: { height: number }): void {
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
  const quad = (p: V3, q: V3, r: V3, u: V3, col: Color) => {
    tri(p, q, r, col);
    tri(p, r, u, col);
  };
  const box = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, col: number, top = col) => {
    const c = new Color(col);
    quad(P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1), new Color(top));
    quad(P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1), c);
    quad(P(x0, y0, z0), P(x1, y0, z0), P(x1, y1, z0), P(x0, y1, z0), c);
    quad(P(x0, y0, z0), P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), c);
    quad(P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0), c);
  };
  const pulse = (speed: number) => 0.5 + 0.5 * Math.sin(time * speed);
  const mix = (c0: number, c1: number, k: number) => new Color(c0).lerp(new Color(c1), k).getHex();

  const w = Math.max(0.2, f.w);
  const d = Math.max(0.2, f.d);
  const h = Math.max(0.3, f.h);
  const printing = s.phase === "printing";
  // the bed rocks front and back under the head while it prints
  const bedZ = printing ? Math.sin(time * 0.9) * d * 0.07 : 0;
  const inner = Math.min(w, d) / 2 - 0.045;

  // the bed, and the part on it: it grows with the progress (without one it grows and starts again), whole when done
  box(-inner, inner, BED_Y, BED_Y + 0.012, -inner + bedZ, inner + bedZ, PLATE, 0x3b4f80);
  const room = h - BED_Y - 0.1;
  const grown = printGrown(s, time);
  // the real part (drawn by the viewer as a mesh of its own) replaces the stand-in block; the head rides on its top
  const objH = Math.max(0, model ? model.height * grown : room * 0.82 * grown);
  const objW = inner * 0.5;
  if (!model && objH > 0.004) box(-objW / 2, objW / 2, BED_Y + 0.012, BED_Y + 0.012 + objH, -objW / 2 + bedZ, objW / 2 + bedZ, FILAMENT, FILAMENT_TOP);

  // the head on its rail at the part's top, sliding across while it prints
  const headY = BED_Y + 0.012 + objH + 0.035;
  const headX = printing ? Math.sin(time * 2.6) * inner * 0.55 : inner * 0.55;
  const railZ = -inner + 0.02;
  box(-inner, inner, headY + 0.02, headY + 0.034, railZ - 0.012, railZ + 0.012, RAIL);
  box(headX - 0.032, headX + 0.032, headY - 0.01, headY + 0.07, railZ - 0.03, railZ + 0.05, HEAD, 0x1b2740);
  // the nozzle, orange while it heats
  const hot = printing || s.phase === "paused";
  box(headX - 0.008, headX + 0.008, headY - 0.035, headY - 0.01, railZ + 0.016, railZ + 0.032, hot ? mix(0xff5a14, 0xffc040, pulse(6)) : DIM);
  // a thread of filament from the nozzle to the part while it prints
  if (printing) box(headX - 0.003, headX + 0.003, headY - 0.04, headY - 0.034, railZ + 0.021, railZ + 0.027, FILAMENT_TOP);

  // the status light, a strip on the front under the lid
  const strip = s.phase === "printing" ? mix(0x1a8a54, GREEN, pulse(3)) : s.phase === "paused" ? mix(0x8a5a10, AMBER, pulse(2)) : s.phase === "done" ? CYAN : s.phase === "failed" ? mix(0x8a1a1a, RED, pulse(8)) : DIM;
  box(-w / 2 + 0.05, w / 2 - 0.05, h - 0.085, h - 0.065, d / 2, d / 2 + 0.008, strip);
  // the progress bar on the front: a dark track and the part that is done
  if (s.progress !== null && s.phase !== "idle" && s.phase !== "offline") {
    const bw = w - 0.16;
    box(-bw / 2, bw / 2, 0.02, 0.034, d / 2, d / 2 + 0.006, 0x0b111f);
    box(-bw / 2, -bw / 2 + bw * s.progress, 0.02, 0.034, d / 2 + 0.006, d / 2 + 0.012, s.phase === "failed" ? RED : GREEN);
  }
  // the chamber light: a warm panel under the lid
  if (s.light) box(-inner + 0.02, inner - 0.02, h - 0.056, h - 0.052, -inner + 0.02, inner - 0.02, WARM);
}
