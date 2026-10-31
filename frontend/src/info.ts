// The info tiles under the house card: the colour of today's and tomorrow's Tempo day, the power of the house now,
// and the solar forecast. Pure functions (no Lit): the card draws what they return.

import { entityName } from "./devices.ts";
import { energySummary, findConsumers, type EnergyDay } from "./energy.ts";
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

/** The day card's values: the sensors chosen in the energy tool (today's kWh) win over what the energy dashboard's statistics say. */
export function dayEnergy(hass: HomeAssistant, e: Pick<EnergySettings, "day_consumption" | "day_solar" | "day_grid">, fetched: EnergyDay | null): EnergyDay | null {
  const own = (id: string | null | undefined) => (id && id !== "none" ? kwhOf(hass.states[id]) : null);
  const day = {
    consumption: own(e.day_consumption) ?? fetched?.consumption ?? null,
    solar: own(e.day_solar) ?? fetched?.solar ?? null,
    grid: own(e.day_grid) ?? fetched?.grid ?? null,
  };
  return day.consumption !== null || day.solar !== null || day.grid !== null ? day : null;
}

/** A water heater's card: what its settings ask to show (temperature, filling 0 … 1); null for what has no value. */
export interface HeaterTile {
  id: string;
  name: string | null;
  temp: number | null;
  unit: string;
  fill: number | null;
}

const entityOf = (v: string | null | undefined): string | null => (v && v !== "none" ? v : null);

/** The cards of the water heaters that have temperature or filling ticked in their settings and a value to show. */
export function heaterTiles(hass: HomeAssistant, building: Building): HeaterTile[] {
  const out: HeaterTile[] = [];
  for (const floor of building.floors) {
    for (const f of floor.furniture) {
      if (f.type !== "water_heater" || (!f.info_temp && !f.info_fill)) continue;
      const main = entityOf(typeof f.entity === "string" ? f.entity : null);
      const st = main ? hass.states[main] : undefined;
      let temp: number | null = null;
      let unit = "°C";
      if (f.info_temp) {
        const tempId = entityOf(f.water_temp);
        const ts = tempId ? hass.states[tempId] : undefined;
        if (ts && ts.state !== "" && Number.isFinite(Number(ts.state))) {
          temp = Number(ts.state);
          unit = String(ts.attributes.unit_of_measurement ?? unit);
        } else if (typeof st?.attributes.current_temperature === "number") temp = st.attributes.current_temperature;
      }
      let fill: number | null = null;
      if (f.info_fill) {
        const fillId = entityOf(f.water_fill);
        const fs = fillId ? hass.states[fillId] : undefined;
        const raw = fs && fs.state !== "" ? Number(fs.state) : Number.NaN;
        if (Number.isFinite(raw)) fill = Math.min(1, Math.max(0, fs!.attributes.unit_of_measurement === "%" || raw > 1 ? raw / 100 : raw));
      }
      if (temp === null && fill === null) continue;
      out.push({ id: f.id, name: f.name || (main ? entityName(hass, main) : null), temp, unit, fill });
    }
  }
  return out;
}

export interface InfoTiles {
  /** The water heaters that ask for a card. */
  heaters: HeaterTile[];
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
    heaters: heaterTiles(hass, building),
    tempo: tempoToday || tempoTomorrow ? { today: tempoToday, tomorrow: tempoTomorrow, entity: (t.today ?? t.tomorrow)! } : null,
    power: hasPower ? { house: sum.consumption, solar: sum.solar, grid: sum.grid, battery: sum.battery, soc: sum.soc } : null,
    forecast: fToday !== null || fTomorrow !== null ? { today: fToday, tomorrow: fTomorrow, entity: (f.today ?? f.tomorrow)! } : null,
  };
}
