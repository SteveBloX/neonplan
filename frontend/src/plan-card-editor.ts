// Visual editor of the flat plan card (neonplan3d-plan-card): which parts of the plan it shows, the floor and the height.

import { css, html, LitElement, nothing } from "lit";
import { fetchBuilding } from "./api.ts";
import type { PlanCardConfig } from "./card-config.ts";
import { languageReady, loadLanguage, translate, type I18nKey } from "./i18n.ts";
import type { Building } from "./model.ts";
import { DEFAULT_PLAN_OPTIONS, planOptions } from "./plan-options.ts";
import type { HomeAssistant } from "./types.ts";

type Toggle = "furniture" | "room_names" | "temperature" | "humidity" | "devices" | "floor_buttons";

/** What each switch is when the config says nothing. */
const DEFAULT_ON: Record<Toggle, boolean> = {
  furniture: DEFAULT_PLAN_OPTIONS.furniture,
  room_names: DEFAULT_PLAN_OPTIONS.names,
  temperature: DEFAULT_PLAN_OPTIONS.temperature,
  humidity: DEFAULT_PLAN_OPTIONS.humidity,
  devices: DEFAULT_PLAN_OPTIONS.devices,
  floor_buttons: true,
};

export class Floorplan3dPlanCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _building: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  private declare _config: PlanCardConfig;
  /** The plan, for the floor choice and the preview where the area is chosen. */
  private declare _building: Building | null;
  private loading = false;

  constructor() {
    super();
    this._config = { type: "custom:neonplan3d-plan-card" };
    this._building = null;
  }

  private get _floors(): { id: string; name: string }[] {
    return this._building?.floors.map((f) => ({ id: f.id, name: f.name })) ?? [];
  }

  setConfig(config: PlanCardConfig): void {
    this._config = config;
  }

  protected willUpdate(): void {
    if (this.hass && !languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
    // the floors of the plan, for the floor choice
    if (this.hass && !this.loading && !this._building) {
      this.loading = true;
      fetchBuilding(this.hass).then(
        (res) => (this._building = res.building),
        () => undefined,
      );
    }
  }

  private t(key: I18nKey): string {
    return translate(this.hass, key);
  }

  /** Change one option; options back at their default disappear from the YAML. */
  private set<K extends keyof PlanCardConfig>(key: K, value: PlanCardConfig[K] | undefined, def?: PlanCardConfig[K]): void {
    const next: PlanCardConfig = { ...this._config };
    if (value === undefined || value === "" || value === def) delete next[key];
    else next[key] = value;
    this._config = next;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
  }

  /** Turn the view: the area chosen before no longer fits the turned plan, so it goes. */
  private turn(deg: number): void {
    const next: PlanCardConfig = { ...this._config };
    if (deg) next.rotation = deg;
    else delete next.rotation;
    delete next.area;
    this._config = next;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
  }

  private toggle(key: Toggle, label: I18nKey) {
    const on = this._config[key] ?? DEFAULT_ON[key];
    return html`<label class="toggle">
      <input type="checkbox" .checked=${on} @change=${(e: Event) => this.set(key, (e.target as HTMLInputElement).checked, DEFAULT_ON[key])} />
      <span>${this.t(label)}</span>
    </label>`;
  }

  protected render() {
    if (this.hass && !languageReady(this.hass.language)) return nothing;
    const v = this._config;
    return html`
      <div class="grid">
        <label class="field wide"
          >${this.t("card_floor")}
          <select @change=${(e: Event) => this.set("floor", (e.target as HTMLSelectElement).value || undefined)}>
            <option value="" ?selected=${!v.floor}>${this.t("plan_floor_ground")}</option>
            ${this._floors.map((f) => html`<option value=${f.id} ?selected=${f.id === v.floor}>${f.name}</option>`)}
            ${v.floor && !this._floors.some((f) => f.id === v.floor) ? html`<option value=${v.floor} selected>${v.floor}</option>` : nothing}
          </select>
        </label>
        <label class="field wide"
          >${this.t("plan_card_height")}
          <input
            type="number"
            min="150"
            max="2000"
            step="10"
            placeholder=${this.t("plan_card_height_auto")}
            .value=${v.height ? String(v.height) : ""}
            @change=${(e: Event) => {
              const h = Math.round(Number((e.target as HTMLInputElement).value));
              this.set("height", h > 100 ? h : undefined);
            }}
          />
        </label>
        <label class="field wide"
          >${this.t("plan_card_rotation")}: <b>${v.rotation ?? 0}°</b>
          <input type="range" min="0" max="359" step="1" .value=${String(v.rotation ?? 0)} @input=${(e: Event) => this.turn(Number((e.target as HTMLInputElement).value) || 0)} />
        </label>
      </div>
      ${this._building
        ? html`<div class="pick">
            <p class="hint">${this.t("plan_card_area_hint")}</p>
            <fp3d-plan2d
              selecting
              .hass=${this.hass}
              .building=${this._building}
              .floor=${v.floor ?? null}
              .rotation=${v.rotation ?? 0}
              .area=${v.area ?? null}
              .options=${planOptions({ furniture: v.furniture })}
              @area-select=${(e: CustomEvent<{ x: number; z: number; w: number; h: number }>) => this.set("area", e.detail)}
            ></fp3d-plan2d>
            <button class="btn" ?disabled=${!v.area} @click=${() => this.set("area", undefined)}>${this.t("plan_card_area_reset")}</button>
          </div>`
        : nothing}
      ${this.toggle("furniture", "plan_furniture")} ${this.toggle("room_names", "plan_names")} ${this.toggle("temperature", "plan_temperature")} ${this.toggle("humidity", "plan_humidity")}
      ${this.toggle("devices", "plan_devices")} ${this.toggle("floor_buttons", "plan_floor_buttons")}
    `;
  }

  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color);
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px 12px;
      margin-bottom: 8px;
    }
    .field {
      display: grid;
      gap: 4px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    select,
    input[type="number"] {
      box-sizing: border-box;
      width: 100%;
      min-height: 40px;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 14px;
    }
    .pick {
      display: grid;
      gap: 8px;
      margin-bottom: 8px;
    }
    .hint {
      margin: 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .btn {
      justify-self: start;
      padding: 8px 14px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }
    .btn:disabled {
      opacity: 0.4;
      cursor: default;
    }
    .toggle {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      font-size: 14px;
      cursor: pointer;
    }
    .toggle input {
      flex: none;
      width: 18px;
      height: 18px;
      margin: 1px 0 0;
      accent-color: var(--primary-color);
    }
  `;
}

if (!customElements.get("neonplan3d-plan-card-editor")) customElements.define("neonplan3d-plan-card-editor", Floorplan3dPlanCardEditor);
