// The moving parts of a 3D printer, after the Bambu Lab A1 mini (a bed slinger): the bed sliding front and back, the arm
// that climbs the tower on the left as the part grows, the print head sliding along the arm, the part itself, and the
// lights. The base and the tower stand in the item's still model (furniture.ts); these parts go into the same moving mesh
// as awnings, gates and flames.

import { Color } from "three";
import type { Furniture } from "../model.ts";
import { printerBedHalf } from "../printer-model.ts";
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

/** Height of the bed's carriage above the item's floor (the base is 6 cm). */
const BED_Y = 0.07;

/** Where the printed part starts: the top of the bed plate. */
export const PRINTER_BED_TOP = BED_Y + 0.012;

/** How much of the part is built: 0 … 1 (the progress; without one a printing printer builds and starts again). */
export function printGrown(s: PrinterState, time: number): number {
  return s.phase === "done" ? 1 : s.progress !== null ? s.progress : s.phase === "printing" ? (time * 0.05) % 1 : 0;
}

/** How far the bed has slid along the item's depth (metres, local z): it rocks while the printer prints. */
export function printerBedShift(s: PrinterState, w: number, d: number, time: number): number {
  return s.phase === "printing" ? Math.sin(time * 0.9) * printerBedHalf(w, d) * 0.6 : 0;
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
  const bed = printerBedHalf(w, d);
  // the bed slides front and back under the head while it prints
  const bedZ = printerBedShift(s, w, d, time);

  // the bed: its carriage and the plate, and the part on it (it grows with the progress, whole when done)
  box(-bed, bed, BED_Y - 0.014, BED_Y, -bed + bedZ, bed + bedZ, DIM, RAIL);
  box(-bed, bed, BED_Y, PRINTER_BED_TOP, -bed + bedZ, bed + bedZ, PLATE, 0x3b4f80);
  const room = h - PRINTER_BED_TOP - 0.15;
  const grown = printGrown(s, time);
  // the real part (drawn by the viewer as a mesh of its own) replaces the stand-in block; the arm rides on its top
  const objH = Math.max(0, model ? model.height * grown : room * 0.82 * grown);
  const objW = bed * 0.5;
  if (!model && objH > 0.004) box(-objW / 2, objW / 2, PRINTER_BED_TOP, PRINTER_BED_TOP + objH, -objW / 2 + bedZ, objW / 2 + bedZ, FILAMENT, FILAMENT_TOP);

  // the arm climbs the tower with the part, the head slides along it
  const headBottom = Math.min(PRINTER_BED_TOP + objH + 0.035, h - 0.115);
  const headX = printing ? Math.sin(time * 2.6) * bed * 0.8 : bed * 0.6;
  const towerX = -w / 2 + 0.07;
  box(-w / 2 - 0.005, towerX + 0.005, headBottom, headBottom + 0.08, -0.07, 0.07, HEAD, 0x1b2740);
  box(towerX, bed + 0.035, headBottom + 0.03, headBottom + 0.055, -0.025, 0.025, RAIL, 0x4a62a0);
  box(headX - 0.035, headX + 0.035, headBottom, headBottom + 0.075, -0.04, 0.04, HEAD, 0x1b2740);
  // the nozzle, orange while it heats
  const hot = printing || s.phase === "paused";
  box(headX - 0.008, headX + 0.008, headBottom - 0.03, headBottom, -0.008, 0.008, hot ? mix(0xff5a14, 0xffc040, pulse(6)) : DIM);
  // a thread of filament from the nozzle to the part while it prints
  if (printing) box(headX - 0.003, headX + 0.003, headBottom - 0.036, headBottom - 0.03, -0.003, 0.003, FILAMENT_TOP);
  // the light under the arm
  if (s.light) box(towerX + 0.02, bed, headBottom + 0.026, headBottom + 0.03, -0.012, 0.012, WARM);

  // the status light on the front of the base
  const strip = s.phase === "printing" ? mix(0x1a8a54, GREEN, pulse(3)) : s.phase === "paused" ? mix(0x8a5a10, AMBER, pulse(2)) : s.phase === "done" ? CYAN : s.phase === "failed" ? mix(0x8a1a1a, RED, pulse(8)) : DIM;
  const x0 = -w / 2 + 0.05;
  const x1 = w * 0.06;
  box(x0, x1, 0.034, 0.046, d / 2, d / 2 + 0.004, strip);
  // the progress bar under it: a dark track and the part that is done
  if (s.progress !== null && s.phase !== "idle" && s.phase !== "offline") {
    box(x0, x1, 0.012, 0.024, d / 2, d / 2 + 0.004, 0x0b111f);
    box(x0, x0 + (x1 - x0) * s.progress, 0.012, 0.024, d / 2 + 0.004, d / 2 + 0.008, s.phase === "failed" ? RED : GREEN);
  }
}
