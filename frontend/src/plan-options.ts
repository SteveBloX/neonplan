// What the flat plan (2D) shows. Kept apart from the plan's drawing code so the card editor can share it cheaply.

/** What the flat plan shows; the panel remembers it on the device, the card takes it from its settings. */
export interface PlanOptions {
  /** The furniture drawn flat. */
  furniture: boolean;
  /** The names of the rooms. */
  names: boolean;
  /** The temperature and the humidity of the rooms. */
  temperature: boolean;
  humidity: boolean;
  /** The pins of the devices (lights, switches, push buttons, sensors …). */
  devices: boolean;
}

export const DEFAULT_PLAN_OPTIONS: PlanOptions = { furniture: true, names: true, temperature: true, humidity: false, devices: true };

/** A saved or configured choice on top of the defaults (anything that is not a boolean is ignored). */
export function planOptions(saved: Partial<Record<keyof PlanOptions, unknown>> | null | undefined): PlanOptions {
  const out = { ...DEFAULT_PLAN_OPTIONS };
  for (const k of Object.keys(out) as (keyof PlanOptions)[]) if (typeof saved?.[k] === "boolean") out[k] = saved[k] as boolean;
  return out;
}
