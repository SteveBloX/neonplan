// The info tiles (Tempo colours, power of the house, solar forecast) as markup: the panel draws them under its room
// bar, the dashboard card under the 3D view. What they show comes from info.ts.

import { css, html, nothing } from "lit";
import { formatNumber, translate, type I18nKey } from "./i18n.ts";
import { infoTiles, type TempoColor } from "./info.ts";
import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

/**
 * The tiles, or nothing: shown when Tempo or a forecast is there (chosen in the energy tool, or found by name), or when
 * `force` is true; `force === false` switches them off.
 */
export function renderInfoTiles(hass: HomeAssistant | undefined, b: Building | null | undefined, force?: boolean) {
  if (!hass || !b || force === false) return nothing;
  const tiles = infoTiles(hass, b);
  if (!tiles.tempo && !tiles.forecast && force !== true) return nothing;
  const t = (k: I18nKey) => translate(hass, k);
  const power = (w: number) => (Math.abs(w) >= 1000 ? `${formatNumber(hass, w / 1000, 1)} kW` : `${Math.round(w)} W`);
  const day = (label: string, color: TempoColor | null) => html`<span class="fp3d-info-day fp3d-info-${color ?? "none"}"><i></i>${label}<b>${color ? t(`info_${color}` as I18nKey) : "–"}</b></span>`;
  const stat = (label: string, value: string) => html`<span class="fp3d-info-stat"><small>${label}</small><b>${value}</b></span>`;
  const p = tiles.power;
  return html`<div class="fp3d-info" role="group" aria-label=${t("info_label")}>
    ${tiles.tempo ? html`<div class="fp3d-info-tile"><span class="fp3d-info-name">${t("info_tempo")}</span>${day(t("info_today"), tiles.tempo.today)}${day(t("info_tomorrow"), tiles.tempo.tomorrow)}</div>` : nothing}
    ${p
      ? html`<div class="fp3d-info-tile">
          ${p.house !== null ? stat(t("info_house"), power(p.house)) : nothing} ${p.solar !== null ? stat(t("info_solar"), power(p.solar)) : nothing}
          ${p.grid !== null ? stat(t(p.grid < 0 ? "energy_grid_export" : "energy_grid_import"), power(Math.abs(p.grid))) : nothing}
          ${p.battery !== null || p.soc !== null ? stat(t("info_battery"), p.soc !== null ? `${Math.round(p.soc)} %` : power(Math.abs(p.battery ?? 0))) : nothing}
        </div>`
      : nothing}
    ${tiles.forecast
      ? html`<div class="fp3d-info-tile">
          <span class="fp3d-info-name">${t("info_forecast")}</span>
          ${tiles.forecast.today !== null ? stat(t("info_today"), `${formatNumber(hass, tiles.forecast.today, 1)} kWh`) : nothing}
          ${tiles.forecast.tomorrow !== null ? stat(t("info_tomorrow"), `${formatNumber(hass, tiles.forecast.tomorrow, 1)} kWh`) : nothing}
        </div>`
      : nothing}
  </div>`;
}

export const infoStyles = css`
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
    font-weight: 600;
    font-size: 13px;
  }
  .fp3d-info-stat {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
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
