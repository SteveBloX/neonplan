// A 3D printer (free): what its few entities say now. Made for the Bambu Lab integration (ha-bambulab) but it takes
// any print status sensor: from the status sensor the others are found by name, or each one is chosen by hand.
//
// What is used from ha-bambulab (it exposes dozens of entities; only these matter for a picture of the printer):
//   sensor.<printer>_print_status      idle, running, pause, finish, failed, prepare, slicing, init, offline
//   sensor.<printer>_print_progress    %
//   sensor.<printer>_remaining_time    minutes
//   sensor.<printer>_nozzle_temperature, sensor.<printer>_bed_temperature
//   light.<printer>_chamber_light

import type { Floor, Furniture } from "./model.ts";
import { isUnavailable } from "./devices.ts";
import { remainingMinutes } from "./household.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export type PrintPhase = "printing" | "paused" | "done" | "failed" | "idle" | "offline";

export interface PrinterState {
  phase: PrintPhase;
  /** 0 … 1, when the printer says. */
  progress: number | null;
  /** Minutes left, when it says. */
  remaining: number | null;
  nozzle: number | null;
  bed: number | null;
  /** The chamber light: on or off, null without one. */
  light: boolean | null;
}

/** The sensors a printer's status leads to: its own choice, else the entity of the same printer found by name. */
export function printerLinks(hass: HomeAssistant, f: Pick<Furniture, "printer_progress" | "printer_remaining" | "printer_nozzle" | "printer_bed" | "printer_light">, status: string | null): Record<"progress" | "remaining" | "nozzle" | "bed" | "light", string | null> {
  const m = status ? /^[a-z_]+\.(.*)print_status$/.exec(status) : null;
  const pick = (own: string | null | undefined, guess: string | null): string | null => {
    if (own === "none") return null;
    if (own) return own;
    return guess && hass.states[guess] ? guess : null;
  };
  const base = m ? m[1] : null;
  return {
    progress: pick(f.printer_progress, base !== null ? `sensor.${base}print_progress` : null),
    remaining: pick(f.printer_remaining, base !== null ? `sensor.${base}remaining_time` : null),
    nozzle: pick(f.printer_nozzle, base !== null ? `sensor.${base}nozzle_temperature` : null),
    bed: pick(f.printer_bed, base !== null ? `sensor.${base}bed_temperature` : null),
    light: pick(f.printer_light, base !== null ? `light.${base}chamber_light` : null),
  };
}

/** The name of the running print: from the entity chosen by hand, else from the printer's task name or file name sensor. */
export function printerJob(hass: HomeAssistant, f: Pick<Furniture, "printer_job">, status: string | null): string {
  const m = status ? /^[a-z_]+\.(.*)print_status$/.exec(status) : null;
  const candidates = f.printer_job ? [f.printer_job] : m ? [`sensor.${m[1]}task_name`, `sensor.${m[1]}gcode_file`] : [];
  for (const id of candidates) {
    const st = hass.states[id];
    if (st && !isUnavailable(st) && st.state.trim() !== "" && st.state !== "unknown") return st.state.trim();
  }
  return "";
}

/** The phase a status word means (Bambu Lab's: running, pause, finish, failed …; others': printing, paused, complete …). */
export function printPhase(st: HassEntity | undefined): PrintPhase {
  if (!st || st.state === "unavailable" || st.state === "offline") return "offline";
  const s = String(st.state).toLowerCase();
  if (/^(running|printing|prepare|preparing|slicing|heating|init|initializing|busy)$/.test(s)) return "printing";
  if (/^(pause|paused)$/.test(s)) return "paused";
  if (/^(finish|finished|complete|completed|done)$/.test(s)) return "done";
  if (/^(failed|error|cancelled|canceled|stopped)$/.test(s)) return "failed";
  return "idle";
}

const num = (st: HassEntity | undefined): number | null => {
  if (!st || isUnavailable(st) || st.state === "") return null;
  const v = Number(st.state);
  return Number.isFinite(v) ? v : null;
};

/** What a printer's entities say now. */
export function printerState(hass: HomeAssistant, f: Furniture, status: string | null): PrinterState {
  const links = printerLinks(hass, f, status);
  const get = (id: string | null) => (id ? hass.states[id] : undefined);
  const p = num(get(links.progress));
  const light = get(links.light);
  const phase = printPhase(status ? get(status) : undefined);
  return {
    phase,
    // a finished print is whole whatever the progress sensor still says
    progress: phase === "done" ? 1 : p === null ? null : Math.min(1, Math.max(0, p > 1 ? p / 100 : p)),
    remaining: phase === "printing" || phase === "paused" ? remainingMinutes(get(links.remaining)) : null,
    nozzle: num(get(links.nozzle)),
    bed: num(get(links.bed)),
    light: light && !isUnavailable(light) ? light.state === "on" : null,
  };
}

/** Every printer of a building by furniture id. */
export function printerStates(hass: HomeAssistant, floors: readonly Floor[], links: ReadonlyMap<string, { entity: string | null }>): Map<string, PrinterState> {
  const out = new Map<string, PrinterState>();
  for (const floor of floors) for (const f of floor.furniture) if (f.type === "printer_3d") out.set(f.id, printerState(hass, f, links.get(f.id)?.entity ?? null));
  return out;
}

/** A signature of what a printer looks like, to redraw only when it changed. */
export function printerSignature(s: PrinterState): string {
  return `${s.phase}:${s.progress === null ? "-" : Math.round(s.progress * 100)}:${s.light === null ? "-" : +s.light}`;
}
