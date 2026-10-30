// The "fill" look of solar modules: every module fills from its lower edge (the eave) with the share of its peak
// power it makes right now – a gauge on each panel. Free for everyone; it has nothing to do with the living overlay.

import { BufferGeometry, DoubleSide, Float32BufferAttribute, MeshBasicMaterial } from "three";
import type { SolarField } from "../model.ts";
import { fieldModules, type RoofFace } from "../solar.ts";

/** The fill quads of all modules of the fields that use the look; `cells` says where each module's vertices start. */
export interface SolarFill {
  geometry: BufferGeometry;
  cells: { key: string; start: number }[];
}

/** Key of a module in the levels map. */
export const fillKey = (fieldId: string, cell: string): string => `${fieldId}|${cell}`;

/**
 * Fill quads of the modules of the fields with the "fill" look (`all`: of every field – the invisible mesh a tap
 * on a module is picked with), a hair above the glass, lowered by `dy` into local coordinates.
 */
export function buildSolarFill(entries: readonly { face: RoofFace; field: SolarField }[], dy: number, all = false): SolarFill | null {
  const p: number[] = [];
  const uv: number[] = [];
  const cells: SolarFill["cells"] = [];
  for (const { face, field } of entries) {
    if (!all && field.look !== "fill") continue;
    for (const m of fieldModules(face, field)) {
      cells.push({ key: fillKey(field.id, m.cell), start: p.length / 3 });
      const [a, c, d, e] = m.corners.map((q) => [q[0] + face.n[0] * 0.008, q[1] + face.n[1] * 0.008 - dy, q[2] + face.n[2] * 0.008]);
      const quad = [
        [a, 0, 0],
        [c, 1, 0],
        [d, 1, 1],
        [e, 0, 1],
      ] as const;
      for (const i of [0, 1, 2, 0, 2, 3]) {
        const [pos, u, v] = quad[i];
        p.push(pos[0], pos[1], pos[2]);
        uv.push(u, v);
      }
    }
  }
  if (!p.length) return null;
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(p, 3));
  g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  g.setAttribute("aFill", new Float32BufferAttribute(new Float32Array(p.length / 3), 1));
  return { geometry: g, cells };
}

/** Which module a triangle of the fill geometry belongs to ("field id|cell"), or null. */
export function fillKeyAt(fill: SolarFill, triangle: number): string | null {
  // six vertices (two triangles) per module, in the order of `cells`
  return fill.cells[Math.floor(triangle / 2)]?.key ?? null;
}

/** Write the modules' fill levels (0..1); returns true when any module has something to show. */
export function writeFillLevels(fill: SolarFill, levels: ReadonlyMap<string, number>): boolean {
  const attr = fill.geometry.getAttribute("aFill") as Float32BufferAttribute;
  const arr = attr.array as Float32Array;
  let any = false;
  for (const { key, start } of fill.cells) {
    const level = Math.min(1, Math.max(0, levels.get(key) ?? 0));
    arr.fill(level, start, start + 6);
    if (level > 0.004) any = true;
  }
  attr.needsUpdate = true;
  return any;
}

/** The fill material: the lit part of the module below its level, with a bright edge on top of it. */
export function solarFillMaterial(): MeshBasicMaterial {
  const m = new MeshBasicMaterial({ transparent: true, depthWrite: false, side: DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute float aFill;\nvarying float vFill;\nvarying vec2 vFillUv;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFill = aFill;\nvFillUv = uv;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying float vFill;\nvarying vec2 vFillUv;")
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        // lit below the level, a thin bright line at the level, nothing above it (and nothing at all at night)
        float fp3dBelow = (1.0 - step(vFill, vFillUv.y)) * step(0.004, vFill);
        float fp3dEdge = (1.0 - smoothstep(0.0, 0.035, abs(vFillUv.y - vFill))) * step(0.004, vFill);
        vec3 fp3dLow = vec3(0.95, 0.5, 0.1);
        vec3 fp3dHigh = vec3(1.0, 0.86, 0.35);
        diffuseColor.rgb = mix(fp3dLow, fp3dHigh, clamp(vFillUv.y / max(vFill, 0.05), 0.0, 1.0)) + vec3(0.35) * fp3dEdge;
        diffuseColor.a *= max(0.78 * fp3dBelow, 0.95 * fp3dEdge);`,
      );
  };
  m.customProgramCacheKey = () => "fp3d-solar-fill";
  return m;
}
