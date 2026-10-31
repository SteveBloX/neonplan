// Where the rain stops: the roofs of the house (single roof or sections, canopies included), a gazebo with a cover and a
// pergola with transparent plates. A drop that falls on one runs off to its eaves and drips from there. Pure: the
// viewer asks each roof for the height of its surface at a point, and for a place where water leaves it.

import type { Building, Floor, OutdoorArea, Vec2 } from "../model.ts";
import { areaGround, GAZEBO_RISE, OUTDOOR_TOP, pointInPolygon } from "../model.ts";
import {
  activeSections,
  sectionFloor,
  sectionFrame,
  sectionGeometry,
  sectionHeightAt,
  sectionOverhang,
  sectionPolygon,
  sectionProfile,
  sectionUV,
} from "../roof-sections.ts";
import { roofFloor } from "./roof.ts";

export interface RainRoof {
  /** The floor it belongs to: its group (or its roof part) gives the height `dy` the viewer adds. */
  floorId: string;
  /** The roof section it is (the part that holds it lifts and fades with the roof); "single" for a roof over the whole house; null for what stands outside. */
  roof: string | null;
  /** Added to every height below: set by the viewer each frame. */
  dy: number;
  /** The highest the roof reaches (before dy): above it nothing is caught. */
  top: number;
  /** The height of the roof's surface at a point, null when the point is not under it. */
  heightAt(x: number, z: number): number | null;
  /** A place just outside an eave where the water leaves: x, y, z. */
  drip(): [number, number, number];
}

/** A point on the edge of a polygon, moved a little outwards (away from the middle). */
function edgeDrip(poly: readonly Vec2[], y: number): [number, number, number] {
  const n = poly.length;
  const cx = poly.reduce((s, p) => s + p[0], 0) / n;
  const cz = poly.reduce((s, p) => s + p[1], 0) / n;
  const i = Math.floor(Math.random() * n);
  const p = poly[i];
  const q = poly[(i + 1) % n];
  const t = Math.random();
  const x = p[0] + (q[0] - p[0]) * t;
  const z = p[1] + (q[1] - p[1]) * t;
  const len = Math.hypot(x - cx, z - cz) || 1;
  return [x + ((x - cx) / len) * 0.12, y, z + ((z - cz) / len) * 0.12];
}

/** A gazebo's pyramid roof: the height at a point follows from how far out towards the edge it lies. */
function gazeboRoof(floor: Floor, a: OutdoorArea): RainRoof {
  const n = a.points.length;
  const cx = a.points.reduce((s, q) => s + q[0], 0) / n;
  const cz = a.points.reduce((s, q) => s + q[1], 0) / n;
  const ground = areaGround(floor, a);
  const eave = ground + (a.height ?? OUTDOOR_TOP.gazebo);
  const rise = a.rise ?? GAZEBO_RISE;
  const edges = a.points.map((q, i) => {
    const r = a.points[(i + 1) % n];
    let nx = r[1] - q[1];
    let nz = q[0] - r[0];
    const len = Math.hypot(nx, nz) || 1;
    nx /= len;
    nz /= len;
    // the normal points away from the middle
    if (nx * (q[0] - cx) + nz * (q[1] - cz) < 0) {
      nx = -nx;
      nz = -nz;
    }
    return { nx, nz, d: Math.max(1e-3, nx * (q[0] - cx) + nz * (q[1] - cz)) };
  });
  return {
    floorId: floor.id,
    roof: null,
    dy: 0,
    top: eave + rise,
    heightAt(x, z) {
      if (!pointInPolygon([x, z], a.points)) return null;
      const out = Math.max(...edges.map((e) => (e.nx * (x - cx) + e.nz * (z - cz)) / e.d));
      return eave + rise * (1 - Math.min(1, Math.max(0, out)));
    },
    drip: () => edgeDrip(a.points, eave - 0.05 - Math.random() * 0.6),
  };
}

/** A pergola covered with transparent plates: a flat roof at the height of its rafters. */
function pergolaRoof(floor: Floor, a: OutdoorArea): RainRoof {
  const y = areaGround(floor, a) + (a.height ?? OUTDOOR_TOP.pergola) + 0.09;
  return {
    floorId: floor.id,
    roof: null,
    dy: 0,
    top: y,
    heightAt: (x, z) => (pointInPolygon([x, z], a.points) ? y : null),
    drip: () => edgeDrip(a.points, y - 0.15 - Math.random() * 0.6),
  };
}

/** The roofs that keep the rain off: out of the plan, in the frame each is built in (floor or roof part, see RainRoof.floorId). */
export function buildRainRoofs(b: Building): RainRoof[] {
  const out: RainRoof[] = [];
  for (const floor of b.floors) {
    for (const a of floor.outdoor ?? []) {
      if (a.points.length < 3) continue;
      if (a.type === "gazebo" && (a.cover ?? "canvas") !== "none") out.push(gazeboRoof(floor, a));
      else if (a.type === "pergola" && a.glazed) out.push(pergolaRoof(floor, a));
    }
  }
  const roof = b.settings.roof;
  if (!roof || roof.type === "none") return out;
  if (roof.type === "custom") {
    const floors = b.floors.filter((f) => f.rooms.length > 0).sort((p, q) => p.elevation - q.elevation);
    if (!floors.length) return out;
    for (const sec of activeSections(b)) {
      if (sec.dormer || Math.abs(sec.x1 - sec.x0) < 0.1 || Math.abs(sec.z1 - sec.z0) < 0.1) continue;
      const floor = sectionFloor(b, sec) ?? floors[0];
      const ov = sectionOverhang(b, sec, sec.overhang ?? roof.overhang);
      const fr = sectionFrame(sec);
      const flat = sec.shape === "flat" || sec.shape === "parapet";
      const base = floor.elevation;
      if (flat) {
        const poly = sectionPolygon(sec, Math.max(0, Math.min(ov.a, ov.b, ov.u0, ov.u1)));
        const y = sec.eave_a - base + 0.25;
        out.push({
          floorId: floor.id,
          roof: sec.id,
          dy: 0,
          top: y,
          heightAt: (x, z) => (pointInPolygon([x, z], poly) ? y : null),
          drip: () => edgeDrip(poly, y - 0.3 - Math.random() * 0.5),
        });
        continue;
      }
      const geom = sectionGeometry(sec, ov);
      const pr = sectionProfile(sec);
      const oa = Math.max(0, ov.a);
      const ob = Math.max(0, ov.b);
      out.push({
        floorId: floor.id,
        roof: sec.id,
        dy: 0,
        top: pr.rh - base,
        heightAt(x, z) {
          const [u, v] = sectionUV(sec, x, z);
          const h = sectionHeightAt(geom, u, v);
          return h === null ? null : h - base;
        },
        drip() {
          // the water runs down the slope to the eave of side a or b
          const side = Math.random() < 0.5 ? 0 : 1;
          const vEdge = side === 0 ? -oa : fr.w + ob;
          const u = fr.u0 - Math.max(0, ov.u0) + Math.random() * (fr.u1 - fr.u0 + Math.max(0, ov.u0) + Math.max(0, ov.u1));
          const [x, z] = fr.at(u, vEdge + (side === 0 ? -0.12 : 0.12));
          return [x, pr.y(vEdge) - base - 0.05 - Math.random() * 0.5, z];
        },
      });
    }
    return out;
  }
  // one roof over the top floor: flat or gable over its rooms, y = 0 at the top of the walls
  const floor = roofFloor(b);
  if (!floor) return out;
  const xs = floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const m = b.settings.wall_exterior + roof.overhang;
  const x0 = Math.min(...xs) - m;
  const x1 = Math.max(...xs) + m;
  const z0 = Math.min(...zs) - m;
  const z1 = Math.max(...zs) + m;
  const box: Vec2[] = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
  if (roof.type === "flat") {
    out.push({
      floorId: floor.id,
      roof: "single",
      dy: 0,
      top: 0.25,
      heightAt: (x, z) => (x >= x0 && x <= x1 && z >= z0 && z <= z1 ? 0.25 : null),
      drip: () => edgeDrip(box, -0.3 - Math.random() * 0.5),
    });
    return out;
  }
  const longX = x1 - x0 >= z1 - z0;
  const alongX = roof.ridge === "short" ? !longX : longX;
  const half = (alongX ? z1 - z0 : x1 - x0) / 2;
  const rise = half * Math.tan((roof.pitch * Math.PI) / 180);
  const mid = alongX ? (z0 + z1) / 2 : (x0 + x1) / 2;
  out.push({
    floorId: floor.id,
    roof: "single",
    dy: 0,
    top: rise,
    heightAt(x, z) {
      if (x < x0 || x > x1 || z < z0 || z > z1) return null;
      const v = Math.abs((alongX ? z : x) - mid);
      return rise * (1 - Math.min(1, v / half));
    },
    drip() {
      const side = Math.random() < 0.5 ? -1 : 1;
      const u = alongX ? x0 + Math.random() * (x1 - x0) : z0 + Math.random() * (z1 - z0);
      const v = mid + side * (half + 0.12);
      return alongX ? [u, -0.05 - Math.random() * 0.5, v] : [v, -0.05 - Math.random() * 0.5, u];
    },
  });
  return out;
}
