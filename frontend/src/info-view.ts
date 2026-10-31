// The info tiles (Tempo colours, power of the house, solar forecast) as markup: the panel draws them under its room
// bar, the dashboard card under the 3D view. What they show comes from info.ts.

import { css, html, nothing, type ReactiveController, type ReactiveControllerHost } from "lit";
import { fetchEnergyDay, type EnergyDay } from "./energy.ts";
import { formatNumber, translate, type I18nKey } from "./i18n.ts";
import { dayEnergy, infoTiles, type TempoColor } from "./info.ts";
import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

/**
 * The tiles, or nothing: shown when Tempo or a forecast is there (chosen in the energy tool, or found by name), or when
 * `force` is true; `force === false` switches them off. `powerAlone`: the power tile is reason enough (the panel; the card
 * waits for Tempo, a forecast or `info_cards: true`, so existing cards stay as they are).
 */
export function infoWanted(hass: HomeAssistant | undefined, b: Building | null | undefined, force: boolean | undefined, powerAlone: boolean): boolean {
  if (!hass || !b || force === false) return false;
  const tiles = infoTiles(hass, b);
  return !!tiles.tempo || !!tiles.forecast || tiles.heaters.length > 0 || (powerAlone && !!tiles.power) || force === true;
}

/** Today's energy totals for the day card: fetched from the energy dashboard's statistics while the tiles are open, at most every five minutes. */
export class EnergyDayController implements ReactiveController {
  value: EnergyDay | null = null;
  private last = 0;
  private busy = false;

  private readonly host: ReactiveControllerHost;
  private readonly source: () => { hass: HomeAssistant | undefined; active: boolean };

  constructor(host: ReactiveControllerHost, source: () => { hass: HomeAssistant | undefined; active: boolean }) {
    this.host = host;
    this.source = source;
    host.addController(this);
  }

  hostUpdate(): void {
    const { hass, active } = this.source();
    if (!hass || !active || this.busy || Date.now() - this.last < 300000) return;
    this.busy = true;
    this.last = Date.now();
    void fetchEnergyDay(hass).then((day) => {
      this.busy = false;
      this.value = day;
      this.host.requestUpdate();
    });
  }
}

/** The small button that folds and unfolds the tiles: it sits in a row of the host that exists anyway (the host keeps the state, see readInfoHidden). */
export function renderInfoToggle(hass: HomeAssistant | undefined, hidden: boolean, toggle: () => void, extra = "") {
  const t = (k: I18nKey) => translate(hass, k);
  return html`<button class="fp3d-info-toggle ${extra}" aria-expanded=${!hidden} title=${t(hidden ? "info_show" : "info_hide")} @click=${toggle}>
    ${ico(ICON.info)}${t("info_short")}<span aria-hidden="true">${hidden ? "▾" : "▴"}</span>
  </button>`;
}

export function renderInfoTiles(hass: HomeAssistant | undefined, b: Building | null | undefined, force: boolean | undefined, powerAlone: boolean, hidden: boolean, fetched: EnergyDay | null = null) {
  if (hidden || !hass || !b || !infoWanted(hass, b, force, powerAlone)) return nothing;
  const tiles = infoTiles(hass, b);
  const today = dayEnergy(hass, b.energy, fetched);
  const t = (k: I18nKey) => translate(hass, k);
  const power = (w: number) => (Math.abs(w) >= 1000 ? `${formatNumber(hass, w / 1000, 1)} kW` : `${Math.round(w)} W`);
  const day = (label: string, color: TempoColor | null) => html`<span class="fp3d-info-day fp3d-info-${color ?? "none"}"><i></i>${label}<b>${color ? t(`info_${color}` as I18nKey) : "–"}</b></span>`;
  const stat = (icon: string, label: string, value: string, tone = "") => html`<span class="fp3d-info-stat ${tone}">${ico(icon)}<span><small>${label}</small><b>${value}</b></span></span>`;
  const kwh = (v: number) => `${formatNumber(hass, v, v < 100 ? 1 : 0)} kWh`;
  const p = tiles.power;
  return html`<div class="fp3d-info" role="group" aria-label=${t("info_label")}>
    ${tiles.tempo ? html`<div class="fp3d-info-tile"><span class="fp3d-info-name fp3d-info-tempo">${ico(ICON.calendar)}${t("info_tempo")}</span>${day(t("info_today"), tiles.tempo.today)}${day(t("info_tomorrow"), tiles.tempo.tomorrow)}</div>` : nothing}
    ${p
      ? html`<div class="fp3d-info-tile">
          ${p.house !== null ? stat(ICON.house, t("info_house"), power(p.house)) : nothing} ${p.solar !== null ? stat(ICON.sun, t("info_solar"), power(p.solar), "fp3d-info-sun") : nothing}
          ${p.grid !== null ? stat(p.grid < 0 ? ICON.export : ICON.import, t(p.grid < 0 ? "energy_grid_export" : "energy_grid_import"), power(Math.abs(p.grid)), p.grid < 0 ? "fp3d-info-sun" : "") : nothing}
          ${p.battery !== null || p.soc !== null ? stat(ICON.battery, t("info_battery"), p.soc !== null ? `${Math.round(p.soc)} %` : power(Math.abs(p.battery ?? 0)), "fp3d-info-green") : nothing}
        </div>`
      : nothing}
    ${tiles.forecast
      ? html`<div class="fp3d-info-tile">
          <span class="fp3d-info-name fp3d-info-sun">${ico(ICON.forecast)}${t("info_forecast")}</span>
          ${tiles.forecast.today !== null ? stat(ICON.sun, t("info_today"), `${formatNumber(hass, tiles.forecast.today, 1)} kWh`, "fp3d-info-sun") : nothing}
          ${tiles.forecast.tomorrow !== null ? stat(ICON.sunrise, t("info_tomorrow"), `${formatNumber(hass, tiles.forecast.tomorrow, 1)} kWh`, "fp3d-info-sun") : nothing}
        </div>`
      : nothing}
    ${tiles.heaters.map(
      (h) => html`<div class="fp3d-info-tile">
        <span class="fp3d-info-name fp3d-info-heat">${ico(ICON.heater)}${h.name || t("furn_water_heater")}</span>
        ${h.temp !== null ? stat(ICON.thermometer, t("info_heater_temp"), `${formatNumber(hass, h.temp, 0)} ${h.unit}`, "fp3d-info-heat") : nothing}
        ${h.fill !== null ? stat(ICON.tank, t("info_heater_fill"), `${Math.round(h.fill * 100)} %`, "fp3d-info-water") : nothing}
      </div>`,
    )}
    ${today
      ? html`<div class="fp3d-info-tile">
          <span class="fp3d-info-name">${ico(ICON.bolt)}${t("info_energy_day")}</span>
          ${today.consumption !== null ? stat(ICON.house, t("info_day_consumption"), kwh(today.consumption)) : nothing}
          ${today.solar !== null ? stat(ICON.sun, t("info_day_solar"), kwh(today.solar), "fp3d-info-sun") : nothing}
          ${today.grid !== null ? stat(ICON.import, t("info_day_grid"), kwh(today.grid)) : nothing}
        </div>`
      : nothing}
  </div>`;
}

/** Whether the tiles are folded on this device: what was chosen last, else folded on a phone and open elsewhere. */
export function readInfoHidden(): boolean {
  try {
    const v = localStorage.getItem("neonplan3d.info_hidden");
    if (v === "1" || v === "0") return v === "1";
  } catch {
    // no storage: the default below
  }
  return typeof window !== "undefined" && window.innerWidth < 700;
}

export function writeInfoHidden(hidden: boolean): void {
  try {
    localStorage.setItem("neonplan3d.info_hidden", hidden ? "1" : "0");
  } catch {
    // storage unavailable (private mode): the choice just is not remembered
  }
}

/** Line icons (24 × 24, stroke = the text colour). */
const ICON = {
  info: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 11v5M12 8h.01",
  house: "M4 11l8-7 8 7M6 10v10h12V10M10 20v-6h4v6",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5",
  sunrise: "M7 17a5 5 0 0 1 10 0M3 17h18M12 5v4M9 8l3-3 3 3M5 21h14",
  import: "M12 4v12M7 11l5 5 5-5M5 20h14",
  export: "M12 16V4M7 9l5-5 5 5M5 20h14",
  battery: "M3 8h15v8H3zM18 11h3v2h-3M6 10v4M9 10v4",
  calendar: "M5 6h14v14H5zM5 10h14M9 3v4M15 3v4",
  forecast: "M7 19a4 4 0 0 1 0-8 5 5 0 0 1 9.6 1.5A3.3 3.3 0 0 1 16.5 19zM12 3v1.5M5.6 5.6l1 1M18.4 5.6l-1 1",
  heater: "M7 4h10v16H7zM7 8h10M10 12c0 1.5 2 1.5 2 3s-2 1.5-2 0M14 12v3",
  thermometer: "M10 14.5V5a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0zM12 8v8",
  tank: "M7 4h10v16H7zM7 12c3 1.5 7-1.5 10 0",
  bolt: "M13 3L5 13h6l-1 8 8-10h-6z",
};

const ico = (path: string) =>
  html`<svg class="fp3d-info-ico" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${path} /></svg>`;

export const infoStyles = css`
  .fp3d-info-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex: none;
    padding: 4px 10px;
    border: 0;
    border-radius: 999px;
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.14));
    color: var(--primary-text-color, var(--fp3d-text, inherit));
    font: inherit;
    font-size: 12px;
    cursor: pointer;
  }
  /* on the card the button floats over the 3D view, top left */
  .fp3d-info-float {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 3;
    background: rgba(9, 13, 22, 0.78);
    color: #e8edf8;
    backdrop-filter: blur(4px);
  }
  .fp3d-info-toggle span {
    font-size: 10px;
    opacity: 0.7;
  }
  .fp3d-info {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px 12px;
  }
  .fp3d-info-tile {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 14px;
    padding: 6px 12px;
    border-radius: 12px;
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
    color: var(--primary-text-color, var(--fp3d-text, inherit));
  }
  .fp3d-info-name {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    font-size: 13px;
  }
  .fp3d-info-stat {
    display: flex;
    align-items: center;
    gap: 7px;
    line-height: 1.2;
  }
  .fp3d-info-stat > span {
    display: flex;
    flex-direction: column;
  }
  .fp3d-info-ico {
    flex: none;
    opacity: 0.9;
  }
  .fp3d-info-sun .fp3d-info-ico,
  .fp3d-info-sun.fp3d-info-name {
    color: #ffb347;
  }
  .fp3d-info-heat .fp3d-info-ico,
  .fp3d-info-heat.fp3d-info-name {
    color: #ff7a3a;
  }
  .fp3d-info-water .fp3d-info-ico {
    color: #4fb6ff;
  }
  .fp3d-info-green .fp3d-info-ico {
    color: #4cd680;
  }
  .fp3d-info-stat small {
    font-size: 11px;
    opacity: 0.7;
  }
  .fp3d-info-stat b {
    font-size: 15px;
    font-variant-numeric: tabular-nums;
  }
  .fp3d-info-day {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
  }
  .fp3d-info-day i {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #8a8f9a;
    box-shadow: 0 0 0 1px rgba(127, 127, 127, 0.5);
  }
  .fp3d-info-blue i {
    background: #2f6bff;
  }
  .fp3d-info-white i {
    background: #f4f4f4;
  }
  .fp3d-info-red i {
    background: #ff3b3b;
  }
`;
