// Lovelace card with the flat plan (2D): the same plan as the 3D card, drawn from above – rooms, furniture, the readings
// of the rooms and the devices – light and easy to use on a phone.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { BuildingController } from "./building-controller.ts";
import type { PlanCardConfig } from "./card-config.ts";
import "./components/plan2d.ts";
import { languageReady, loadLanguage, translate } from "./i18n.ts";
import { loadCardEditor } from "./load-card-editor.ts";
import { planOptions } from "./plan-options.ts";
import { tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";

export class Floorplan3dPlanCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  declare hass: HomeAssistant;
  private declare _config: PlanCardConfig;
  private readonly data = new BuildingController(this);

  /** Visual editor in the dashboard (the card editor's bundle defines it). */
  static async getConfigElement(): Promise<HTMLElement> {
    await loadCardEditor();
    return document.createElement("neonplan3d-plan-card-editor");
  }

  static getStubConfig(): PlanCardConfig {
    return { type: "custom:neonplan3d-plan-card" };
  }

  setConfig(config: PlanCardConfig): void {
    if (config.height !== undefined && !(config.height > 100)) throw new Error("height must be a number of pixels above 100");
    this._config = config;
  }

  getCardSize(): number {
    return Math.ceil((this._config?.height ?? 360) / 50);
  }

  getGridOptions() {
    return { columns: "full", rows: Math.ceil((this._config?.height ?? 360) / 56), min_rows: 3 };
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass) {
      this.data.setHass(this.hass);
      // a language beyond German and English: its texts are fetched first, then everything renders
      if (!languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
    }
  }

  protected render() {
    if (this.hass && !languageReady(this.hass.language)) return nothing;
    const c = this._config;
    const b = this.data.building;
    const accent = /^#[0-9a-f]{6}$/i.test(c?.accent ?? "") ? c!.accent : null;
    const fixed = c?.height !== undefined;
    return html`<ha-card style=${accent ? `--fp3d-accent:${accent}` : ""}>
      <div class="body" style=${fixed ? `height:${c.height}px` : ""}>
        ${b && b.floors.some((f) => f.rooms.length)
          ? html`<fp3d-plan2d
              ?fit=${fixed}
              .hass=${this.hass}
              .building=${b}
              .floor=${c?.floor ?? null}
              .floorButtons=${c?.floor_buttons !== false}
              .rotation=${c?.rotation ?? 0}
              .area=${c?.area ?? null}
              .options=${planOptions({ furniture: c?.furniture, names: c?.room_names, temperature: c?.temperature, humidity: c?.humidity, devices: c?.devices })}
            ></fp3d-plan2d>`
          : html`<p class="msg">${this.data.error ?? (b ? translate(this.hass, "no_building") : translate(this.hass, "loading"))}</p>`}
      </div>
    </ha-card>`;
  }

  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      .body {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 10px;
        height: 100%;
      }
      fp3d-plan2d {
        flex: 1;
        min-height: 0;
      }
      .msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
    `,
  ];
}

if (!customElements.get("neonplan3d-plan-card")) {
  customElements.define("neonplan3d-plan-card", Floorplan3dPlanCard);
  const w = window as Window & { customCards?: unknown[] };
  w.customCards = w.customCards ?? [];
  w.customCards.push({
    type: "neonplan3d-plan-card",
    name: translate(undefined, "plan_card_name"),
    description: translate(undefined, "plan_card_description"),
    preview: false,
  });
}
