// The real part of a 3D print, as the backend sends it (custom_components/neonplan3d/printer3mf.py): vertices as uint16
// inside a bounding box in millimetres, triangles as uint32 vertex numbers sorted by their lowest point – so "the part up
// to this height" is the first N triangles.

export interface PrinterModelPayload {
  name?: string;
  triangles: number;
  vertices: number;
  /** x0, y0, z0, x1, y1, z1 in millimetres (3MF: z is up). */
  bbox: [number, number, number, number, number, number];
  verts: string;
  idx: string;
}

export interface PrinterModel {
  name: string;
  triangles: number;
  /** Three floats per corner, three corners per triangle: flat-shaded colours are baked in `colors`. In millimetres, x/z centred on the part, y up from the bed. */
  positions: Float32Array;
  colors: Float32Array;
  /** The lowest point of each triangle in millimetres above the bed (ascending). */
  lows: Float32Array;
  /** Width (x), height (y), depth (z) in millimetres. */
  size: [number, number, number];
}

const bytes = (b64: string): Uint8Array => {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
};

const FILAMENT: [number, number, number] = [1, 0.54, 0.23];

/** Decode a payload into a non-indexed, flat-shaded mesh that stands on the bed (3MF's y becomes depth, z becomes height). */
export function decodePrinterModel(p: PrinterModelPayload): PrinterModel | null {
  const v = bytes(p.verts);
  const i = bytes(p.idx);
  if (v.length !== p.vertices * 6 || i.length !== p.triangles * 12 || p.triangles < 1) return null;
  const q = new Uint16Array(v.buffer, v.byteOffset, p.vertices * 3);
  const idx = new Uint32Array(i.buffer, i.byteOffset, p.triangles * 3);
  const [x0, y0, z0, x1, y1, z1] = p.bbox;
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  // 3MF is right-handed with z up: (x, y, z) -> (x, z, -y) keeps the handedness; the printer's front looks to +z
  const pos = (n: number, out: number[]): void => {
    out[0] = x0 + (q[n * 3] / 65535) * (x1 - x0) - cx;
    out[1] = z0 + (q[n * 3 + 2] / 65535) * (z1 - z0) - z0;
    out[2] = -(y0 + (q[n * 3 + 1] / 65535) * (y1 - y0) - cy);
  };
  const positions = new Float32Array(p.triangles * 9);
  const colors = new Float32Array(p.triangles * 9);
  const lows = new Float32Array(p.triangles);
  const a: number[] = [0, 0, 0];
  const b: number[] = [0, 0, 0];
  const c: number[] = [0, 0, 0];
  for (let t = 0; t < p.triangles; t++) {
    pos(idx[t * 3], a);
    pos(idx[t * 3 + 1], b);
    pos(idx[t * 3 + 2], c);
    positions.set(a, t * 9);
    positions.set(b, t * 9 + 3);
    positions.set(c, t * 9 + 6);
    lows[t] = Math.min(a[1], b[1], c[1]);
    // the face's normal, for a light from above and the front
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const wx = c[0] - a[0], wy = c[1] - a[1], wz = c[2] - a[2];
    let nx = uy * wz - uz * wy;
    let ny = uz * wx - ux * wz;
    let nz = ux * wy - uy * wx;
    const len = Math.hypot(nx, ny, nz) || 1;
    nx /= len; ny /= len; nz /= len;
    const lit = 0.45 + 0.55 * Math.max(0, ny * 0.8 + nz * 0.4 + nx * 0.25) + 0.1 * Math.abs(ny);
    const k = Math.min(1.1, lit);
    for (let s = 0; s < 3; s++) {
      const base = t * 9 + s * 3;
      colors[base] = FILAMENT[0] * k;
      colors[base + 1] = FILAMENT[1] * k;
      colors[base + 2] = FILAMENT[2] * k;
    }
  }
  // sorted by their lowest point in the file; after the flip a rounding can swap neighbours, so make sure
  for (let t = 1; t < p.triangles; t++) if (lows[t] < lows[t - 1]) lows[t] = lows[t - 1];
  return { name: p.name ?? "", triangles: p.triangles, positions, colors, lows, size: [x1 - x0, z1 - z0, y1 - y0] };
}

/** How many triangles are printed when the part is built up to `height` millimetres. */
export function trianglesUpTo(model: Pick<PrinterModel, "lows" | "triangles">, height: number): number {
  let lo = 0;
  let hi = model.triangles;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (model.lows[mid] <= height) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

/** Half the side of a printer's bed in metres: the printer is drawn after the Bambu Lab A1 mini, whose 180 mm bed is about a half of its width. */
export function printerBedHalf(w: number, d: number): number {
  return Math.min(Math.max(0.2, w), Math.max(0.2, d)) * 0.27;
}

/** The millimetres of a printer's bed side (the A1 mini's). */
export const BED_MM = 180;

/**
 * Metres per millimetre of the part in a printer of `w` × `d` metres and `room` metres of height above the bed: true
 * scale on a 180 mm bed, shrunk when the part would not fit.
 */
export function modelScale(size: [number, number, number], w: number, d: number, room: number): number {
  const bed = printerBedHalf(w, d);
  const nominal = (bed * 2) / BED_MM;
  const fit = Math.min((bed * 2 * 0.98) / (Math.max(size[0], size[2]) || 1), room / (size[1] || 1));
  return Math.min(nominal, fit);
}
