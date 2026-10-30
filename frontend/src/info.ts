// The info tiles under the house card: the colour of today's and tomorrow's Tempo day, the power of the house now,
// and the solar forecast. Pure functions (no Lit): the card draws what they return.

import { energySummary, findConsumers } from "./energy.ts";
import type { Building, EnergySettings } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export type TempoColor = "blue" | "white" | "red";

/** A Tempo day's colour from a state ("bleu", "BLUE", "Jour rouge", "blanc" …); null when it is none (unknown, not yet set). */
export function tempoColor(value: string | null | undefined): TempoColor | null {
  const s = String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  const word = (names: string) => new RegExp(`(^|[^a-z])(${names})([^a-z]|$)`).test(s);
  if (word("bleu|blue")) return "blue";
  if (word("blanc|white")) return "white";
  if (word("rouge|red")) return "red";
  return null;
}

/** The colour an entity shows: its state, else an attribute that names it (color, couleur). */
export function tempoOf(st: HassEntity | undefined): TempoColor | null {
  if (!st) return null;
  const a = st.attributes;
  return tempoColor(st.state) ?? tempoColor(String(a.color ?? a.couleur ?? a.tempo ?? ""));
}

const TOMORROW = /(demain|tomorrow|j_?1|next|prochain)/;
const TODAY = /(aujourd|today|actuel|current|couleur|color|j_?0)/;

/** The Tempo entities: the chosen ones, else sensors with "tempo" in their name that show a colour (today, tomorrow). */
export function findTempo(hass: HomeAssistant, e: Pick<EnergySettings, "tempo_today" | "tempo_tomorrow">): { today: string | null; tomorrow: string | null } {
  const ids = Object.keys(hass.states).filter((id) => id.startsWith("sensor.") && /tempo/.test(id) && tempoOf(hass.states[id]) !== null);
  const tomorrow = e.tempo_tomorrow ?? ids.find((id) => TOMORROW.test(id)) ?? null;
  const today = e.tempo_today ?? ids.find((id) => id !== tomorrow && TODAY.test(id)) ?? ids.find((id) => id !== tomorrow && !TOMORROW.test(id)) ?? null;
  return { today, tomorrow };
}

/** An energy sensor's value in kWh (Wh and MWh converted); null when it is no number. */
export function kwhOf(st: HassEntity | undefined): number | null {
  if (!st) return null;
  const v = Number(st.state);
  if (!Number.isFinite(v)) return null;
  const unit = String(st.attributes.unit_of_measurement ?? "");
  return unit === "Wh" ? v / 1000 : unit === "MWh" ? v * 1000 : v;
}

const FORECAST_ID = /(forecast|solcast|energy_production|estimated|prevision)/;
const NOT_TOTAL = /(remaining|restant|peak|power|hour|time|next|current|actuel|pic)/;

/** The solar forecast entities: the chosen ones, else the day totals of Forecast.Solar and Solcast (kWh sensors). */
export function findForecast(hass: HomeAssistant, e: Pick<EnergySettings, "forecast_today" | "forecast_tomorrow">): { today: string | null; tomorrow: string | null } {
  const ids = Object.keys(hass.states).filter((id) => {
    if (!id.startsWith("sensor.") || !FORECAST_ID.test(id) || NOT_TOTAL.test(id)) return false;
    return /^(Wh|kWh|MWh)$/.test(String(hass.states[id].attributes.unit_of_measurement ?? "")) && kwhOf(hass.states[id]) !== null;
  });
  return {
    today: e.forecast_today ?? ids.find((id) => /(today|aujourd)/.test(id)) ?? null,
    tomorrow: e.forecast_tomorrow ?? ids.find((id) => /(tomorrow|demain)/.test(id)) ?? null,
  };
}

export interface InfoTiles {
  tempo: { today: TempoColor | null; tomorrow: TempoColor | null; entity: string } | null;
  /** Watts: the house, the sun, the grid (+ import, - export), the battery (+ discharging) and its charge in %. */
  power: { house: number | null; solar: number | null; grid: number | null; battery: number | null; soc: number | null } | null;
  /** The solar forecast in kWh for today and tomorrow. */
  forecast: { today: number | null; tomorrow: number | null; entity: string } | null;
}

/** What the tiles show right now; every tile is null when there is nothing to show. */
export function infoTiles(hass: HomeAssistant, building: Building): InfoTiles {
  const e = building.energy;
  const t = findTempo(hass, e);
  const tempoToday = t.today ? tempoOf(hass.states[t.today]) : null;
  const tempoTomorrow = t.tomorrow ? tempoOf(hass.states[t.tomorrow]) : null;
  const f = findForecast(hass, e);
  const fToday = f.today ? kwhOf(hass.states[f.today]) : null;
  const fTomorrow = f.tomorrow ? kwhOf(hass.states[f.tomorrow]) : null;
  const sum = energySummary(hass, building, findConsumers(hass, building));
  const hasPower = sum.consumption !== null || sum.solar !== null || sum.grid !== null || sum.battery !== null;
  return {
    tempo: tempoToday || tempoTomorrow ? { today: tempoToday, tomorrow: tempoTomorrow, entity: (t.today ?? t.tomorrow)! } : null,
    power: hasPower ? { house: sum.consumption, solar: sum.solar, grid: sum.grid, battery: sum.battery, soc: sum.soc } : null,
    forecast: fToday !== null || fTomorrow !== null ? { today: fToday, tomorrow: fTomorrow, entity: (f.today ?? f.tomorrow)! } : null,
  };
}
