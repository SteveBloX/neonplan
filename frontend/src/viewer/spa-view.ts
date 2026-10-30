// A spa in 3D (free): its water takes a colour by temperature, bubbles rise from the floor, jets shoot in from the walls,
// heating warms the water and lifts glowing motes, and the pump unit beside it shows heating, filter and disinfection with
// pipes to the spa. The water, the bubbles and the jets are a group of their own per floor; the unit and its pipes are
// drawn into the same moving mesh as awnings and gates (see pushSpaUnit).

import { AdditiveBlending, BufferGeometry, Color, DoubleSide, Float32BufferAttribute, Group, Mesh, MeshBasicMaterial, Points, ShaderMaterial, type Material } from "three";
import type { Vec2 } from "../model.ts";
import { pointInPolygon, signedArea } from "../model.ts";
import { SPA_UNIT_SIZE, type SpaPiece } from "../spa.ts";
import { DEG, type GeoBuffer, triangulate } from "./geo.ts";

type V3 = [number, number, number];

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h;
}

/** A small seeded random generator: the same spa always gets the same bubbles. */
function random(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Handle {
  /** Floor opacity (0..1): the group fades with its floor. */
  fade: (o: number) => void;
}

/** Points rising from `y0` to `y1` (bubbles in the water, motes above it): soft round sprites, additive. */
function particles(poly: Vec2[], count: number, rand: () => number, y0: number, y1: number, color: Color, size: [number, number], speed: [number, number], drift: number, time: { value: number }): { points: Points; handle: Handle } {
  const bounds = poly.reduce((b, p) => [Math.min(b[0], p[0]), Math.max(b[1], p[0]), Math.min(b[2], p[1]), Math.max(b[3], p[1])], [Infinity, -Infinity, Infinity, -Infinity]);
  const pos: number[] = [];
  const seed: number[] = [];
  let guard = 0;
  while (pos.length < count * 3 && guard++ < count * 30) {
    const x = bounds[0] + rand() * (bounds[1] - bounds[0]);
    const z = bounds[2] + rand() * (bounds[3] - bounds[2]);
    if (!pointInPolygon([x, z], poly)) continue;
    pos.push(x, y0, z);
    seed.push(rand(), speed[0] + rand() * (speed[1] - speed[0]), size[0] + rand() * (size[1] - size[0]));
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("aSeed", new Float32BufferAttribute(seed, 3));
  const m = new ShaderMaterial({
    uniforms: { uTime: time, uColor: { value: color }, uY0: { value: y0 }, uY1: { value: y1 }, uDrift: { value: drift }, uOpacity: { value: 1 } },
    vertexShader: `
      uniform float uTime; uniform float uY0; uniform float uY1; uniform float uDrift;
      attribute vec3 aSeed;
      varying float vAlpha;
      void main() {
        float t = fract(uTime * aSeed.y + aSeed.x);
        vec3 p = position;
        p.y = mix(uY0, uY1, t);
        p.x += sin(uTime * 2.0 + aSeed.x * 40.0) * uDrift * t;
        p.z += cos(uTime * 1.7 + aSeed.x * 30.0) * uDrift * t;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = min(36.0, aSeed.z * 110.0 / max(0.5, -mv.z)) * (0.55 + 0.45 * t);
        vAlpha = smoothstep(0.0, 0.1, t) * (1.0 - smoothstep(0.88, 1.0, t));
      }`,
    fragmentShader: `
      uniform vec3 uColor; uniform float uOpacity;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float body = smoothstep(0.5, 0.2, d);
        float rim = smoothstep(0.12, 0.42, d) * 0.6;
        gl_FragColor = vec4(uColor, body * (0.3 + rim) * vAlpha * uOpacity);
      }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const points = new Points(g, m);
  // the points move in the shader: the box of their start positions is no bound
  points.frustumCulled = false;
  points.renderOrder = 7;
  return { points, handle: { fade: (o) => (m.uniforms.uOpacity.value = o) } };
}

/** Jets: ribbons from nozzles in the wall into the water, with dashes of light running out along them. */
function jets(poly: Vec2[], y: number, floorY: number, area: number, time: { value: number }): { mesh: Mesh; handle: Handle } {
  const ccw = signedArea(poly) >= 0 ? poly : [...poly].reverse();
  // the perimeter, to put the nozzles at even distances
  const edges = ccw.map((p, i) => {
    const q = ccw[(i + 1) % ccw.length];
    return { p, q, len: Math.hypot(q[0] - p[0], q[1] - p[1]) };
  });
  const perimeter = edges.reduce((s, e) => s + e.len, 0);
  const count = Math.max(4, Math.min(10, Math.round(perimeter / 0.9)));
  const reach = Math.max(0.4, Math.min(1.1, Math.sqrt(area) * 0.4));
  const yJet = y - Math.min(0.45, (y - floorY) * 0.45);
  const pos: number[] = [];
  const tt: number[] = [];
  for (let k = 0; k < count; k++) {
    let at = ((k + 0.5) / count) * perimeter;
    const e = edges.find((x) => {
      if (at <= x.len) return true;
      at -= x.len;
      return false;
    });
    if (!e || e.len < 1e-6) continue;
    const t = at / e.len;
    const bx = e.p[0] + (e.q[0] - e.p[0]) * t;
    const bz = e.p[1] + (e.q[1] - e.p[1]) * t;
    // inward: the left of the edge for a counter-clockwise outline, checked against the outline
    let nx = -(e.q[1] - e.p[1]) / e.len;
    let nz = (e.q[0] - e.p[0]) / e.len;
    if (!pointInPolygon([bx + nx * 0.08, bz + nz * 0.08], ccw)) {
      nx = -nx;
      nz = -nz;
    }
    const px = -nz;
    const pz = nx;
    const v = (x: number, yy: number, z: number, tv: number) => {
      pos.push(x, yy, z);
      tt.push(tv);
    };
    const a: V3 = [bx - px * 0.02, yJet, bz - pz * 0.02];
    const b: V3 = [bx + px * 0.02, yJet, bz + pz * 0.02];
    const c: V3 = [bx + nx * reach + px * 0.07, yJet + 0.1, bz + nz * reach + pz * 0.07];
    const d: V3 = [bx + nx * reach - px * 0.07, yJet + 0.1, bz + nz * reach - pz * 0.07];
    v(...a, 0);
    v(...b, 0);
    v(...c, 1);
    v(...a, 0);
    v(...c, 1);
    v(...d, 1);
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("aT", new Float32BufferAttribute(tt, 1));
  const m = new ShaderMaterial({
    uniforms: { uTime: time, uColor: { value: new Color(0.75, 0.95, 1) }, uOpacity: { value: 1 } },
    vertexShader: `attribute float aT; varying float vT; void main() { vT = aT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      uniform float uTime; uniform vec3 uColor; uniform float uOpacity;
      varying float vT;
      void main() {
        float flow = fract(vT * 3.0 - uTime * 2.2);
        float dash = smoothstep(0.0, 0.25, flow) * (1.0 - smoothstep(0.55, 0.8, flow));
        gl_FragColor = vec4(uColor, (0.22 + 0.78 * dash) * (1.0 - vT * 0.85) * uOpacity);
      }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    side: DoubleSide,
  });
  const mesh = new Mesh(g, m);
  mesh.frustumCulled = false;
  mesh.renderOrder = 7;
  return { mesh, handle: { fade: (o) => (m.uniforms.uOpacity.value = o) } };
}

/** The water of a spa: its outline tinted with the temperature's colour, pulsing warm while it heats. */
function waterOverlay(p: SpaPiece, time: { value: number }): { mesh: Mesh; handle: Handle } | null {
  if (!p.color) return null;
  const poly = signedArea(p.points) >= 0 ? p.points : [...p.points].reverse();
  const pos: number[] = [];
  for (const [i, j, k] of triangulate(poly)) {
    const a = poly[i];
    const b = poly[j];
    const c = poly[k];
    pos.push(a[0], p.y + 0.004, a[1], c[0], p.y + 0.004, c[1], b[0], p.y + 0.004, b[1]);
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  const base = 0.72;
  const m = new MeshBasicMaterial({ color: new Color(p.color[0], p.color[1], p.color[2]), transparent: true, opacity: base, depthWrite: false, side: DoubleSide });
  const heat = p.state.heating ? 1 : 0;
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = time;
    shader.uniforms.uHeat = { value: heat };
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform float uTime;\nuniform float uHeat;")
      .replace("#include <color_fragment>", "#include <color_fragment>\ndiffuseColor.rgb = diffuseColor.rgb * (1.0 + uHeat * 0.12 * sin(uTime * 3.0)) + uHeat * vec3(0.12, 0.035, 0.0) * (0.5 + 0.5 * sin(uTime * 3.0));");
  };
  m.customProgramCacheKey = () => "fp3d-spa-water";
  const mesh = new Mesh(g, m);
  mesh.renderOrder = 6;
  return { mesh, handle: { fade: (o) => (m.opacity = base * o) } };
}

/** The water, bubbles, jets and heat motes of the given spas (one floor), as a group. */
export function buildSpas(pieces: readonly SpaPiece[], time: { value: number }): Group {
  const group = new Group();
  const handles: Handle[] = [];
  for (const p of pieces) {
    const rand = random(hash(p.id));
    const poly = p.points;
    const water = waterOverlay(p, time);
    if (water) {
      group.add(water.mesh);
      handles.push(water.handle);
    }
    if (p.state.bubbles) {
      const count = Math.max(30, Math.min(260, Math.round(p.area * 35)));
      const b = particles(poly, count, rand, p.floorY + 0.05, p.y, new Color(0.85, 0.96, 1), [0.5, 1.4], [0.25, 0.6], 0.05, time);
      group.add(b.points);
      handles.push(b.handle);
    }
    if (p.state.jets) {
      const j = jets(poly, p.y, p.floorY, p.area, time);
      group.add(j.mesh);
      handles.push(j.handle);
    }
    if (p.state.heating) {
      // warm motes rising off the water
      const h = particles(poly, Math.max(10, Math.min(40, Math.round(p.area * 8))), rand, p.y, p.y + 0.5, new Color(1, 0.5, 0.18), [0.5, 1], [0.1, 0.25], 0.08, time);
      group.add(h.points);
      handles.push(h.handle);
    }
  }
  group.userData.handles = handles;
  return group;
}

/** The group follows its floor's opacity. */
export function fadeSpas(group: Group, o: number): void {
  for (const h of (group.userData.handles ?? []) as Handle[]) h.fade(o);
}

export function disposeSpas(group: Group): void {
  group.traverse((o) => {
    const mesh = o as Mesh;
    mesh.geometry?.dispose();
    const m = mesh.material as Material | undefined;
    m?.dispose();
  });
}

const BODY = 0x172238;
const TOP = 0x26375e;
const DARK = 0x0b111f;
const METAL = 0x2a3a60;
const DIM = 0x2a3350;
const HEAT = 0xff7a1a;
const HOT = 0xffd040;
const FILTER = 0x2fc4ff;
const SANITIZER = 0x57ffa0;
const JET = 0xcfefff;

/**
 * The pump unit beside a spa and its two pipes: five lamps (heating, filter, disinfection, bubbles, jets), a window with
 * the impeller (it turns while the filter runs), a cartridge that glows while the disinfection runs and a heater band that
 * glows while it heats; dashes of light run through the pipes. `time` in seconds drives every movement.
 */
export function pushSpaUnit(buf: GeoBuffer, p: SpaPiece, time: number): void {
  const u = p.unit;
  const s = p.state;
  const a = u.rotation * DEG;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  const P = (lx: number, y: number, lz: number): V3 => [u.x + lx * cos - lz * sin, u.y + y, u.z + lx * sin + lz * cos];
  const tri = (q: V3, r: V3, t: V3, col: Color) => {
    buf.tri(q, r, t, col);
    buf.tri(q, t, r, col);
  };
  const quad = (q: V3, r: V3, t: V3, w: V3, col: Color) => {
    tri(q, r, t, col);
    tri(q, t, w, col);
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

  const [w, d, h] = SPA_UNIT_SIZE;
  const zf = d / 2;
  box(-w / 2, w / 2, 0, h, -d / 2, d / 2, BODY, TOP);
  // the front panel and the five lamps: heating, filter, disinfection, bubbles, jets
  box(-w / 2 + 0.04, w / 2 - 0.04, 0.1, h - 0.06, zf, zf + 0.006, DARK);
  const lamps: [boolean, number][] = [
    [s.heatMode, s.heating ? mix(HEAT, HOT, pulse(5)) : HEAT],
    [s.filter, FILTER],
    [s.sanitizer, SANITIZER],
    [s.bubbles, JET],
    [s.jets, JET],
  ];
  lamps.forEach(([lit, col], i) => {
    const x = (i - 2) * 0.095;
    box(x - 0.026, x + 0.026, h - 0.15, h - 0.098, zf + 0.006, zf + 0.016, lit ? col : DIM);
  });
  // the window with the impeller: three blades that turn while the filter runs
  const cy = 0.4;
  const r = 0.12;
  const disc = new Color(DARK);
  const hub = P(0, cy, zf + 0.012);
  for (let i = 0; i < 14; i++) {
    const a0 = (i / 14) * Math.PI * 2;
    const a1 = ((i + 1) / 14) * Math.PI * 2;
    tri(hub, P(Math.cos(a0) * r, cy + Math.sin(a0) * r, zf + 0.012), P(Math.cos(a1) * r, cy + Math.sin(a1) * r, zf + 0.012), disc);
  }
  const spin = s.filter ? time * 6 : 0.5;
  const blade = new Color(s.filter ? FILTER : DIM);
  const front = zf + 0.018;
  for (let k = 0; k < 3; k++) {
    const t0 = spin + (k * Math.PI * 2) / 3;
    const tip = P(Math.cos(t0) * (r - 0.012), cy + Math.sin(t0) * (r - 0.012), front);
    const l = P(Math.cos(t0 + 0.55) * 0.03, cy + Math.sin(t0 + 0.55) * 0.03, front);
    const rr = P(Math.cos(t0 - 0.55) * 0.03, cy + Math.sin(t0 - 0.55) * 0.03, front);
    tri(tip, l, rr, blade);
  }
  // the disinfection cartridge and the heater band
  box(-w / 2 + 0.07, -w / 2 + 0.14, 0.12, 0.3, zf + 0.006, zf + 0.034, s.sanitizer ? mix(0x2a8a58, SANITIZER, pulse(3)) : DIM);
  box(-w / 2 + 0.2, w / 2 - 0.06, 0.12, 0.17, zf + 0.006, zf + 0.02, s.heating ? mix(HEAT, HOT, pulse(5)) : s.heatMode ? 0x7a3a12 : DIM);

  // the pipes: from the back of the unit to the spa's rim, with dashes of light running through while water moves
  const flow = s.filter || s.sanitizer;
  [-0.14, 0.14].forEach((lx, i) => {
    const from = P(lx, 0.14, -zf);
    const to: V3 = [u.rims[i][0], u.y + 0.14, u.rims[i][1]];
    const dx = to[0] - from[0];
    const dy = to[1] - from[1];
    const dz = to[2] - from[2];
    const len = Math.hypot(dx, dy, dz);
    if (len < 0.05) return;
    // a square tube: two crossed flat strips are enough at this size
    const ux = dx / len;
    const uz = dz / len;
    const sx = -uz * 0.022;
    const sz = ux * 0.022;
    const pipe = new Color(METAL);
    quad([from[0] - sx, from[1], from[2] - sz], [from[0] + sx, from[1], from[2] + sz], [to[0] + sx, to[1], to[2] + sz], [to[0] - sx, to[1], to[2] - sz], pipe);
    quad([from[0], from[1] - 0.022, from[2]], [from[0], from[1] + 0.022, from[2]], [to[0], to[1] + 0.022, to[2]], [to[0], to[1] - 0.022, to[2]], pipe);
    if (!flow) return;
    const n = Math.max(2, Math.min(7, Math.round(len / 0.5)));
    for (let k = 0; k < n; k++) {
      // one pipe carries the water to the spa, the other back to the unit
      const f = (((time * 0.5 + k / n) % 1) + 1) % 1;
      const t = i === 0 ? f : 1 - f;
      const cx = from[0] + dx * t;
      const cy2 = from[1] + dy * t + 0.034;
      const cz = from[2] + dz * t;
      const col = new Color(s.sanitizer && (!s.filter || k % 2 === 0) ? SANITIZER : FILTER);
      const q = 0.026;
      quad([cx - q, cy2, cz - q], [cx + q, cy2, cz - q], [cx + q, cy2, cz + q], [cx - q, cy2, cz + q], col);
      quad([cx - q, cy2 - q, cz], [cx + q, cy2 - q, cz], [cx + q, cy2 + q, cz], [cx - q, cy2 + q, cz], col);
    }
  });
}
