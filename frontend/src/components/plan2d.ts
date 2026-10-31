// The flat plan (2D view): the same plan as the 3D view seen from straight above and drawn flat – rooms, walls, openings,
// furniture as top-view symbols, the readings of the rooms and the pins of the devices. It is light (no three.js) and
// the pins are big enough for a thumb, so it is the practical view on a phone.

import { css, html, LitElement, nothing, svg, type PropertyValues } from "lit";
import { centroid, zonesOf, type Building, type Floor } from "../model.ts";
import { confirmEntities, entityName, kindOf, pressCall, TOGGLE_KINDS } from "../devices.ts";
import { translate } from "../i18n.ts";
import { openMoreInfo, toggleEntity } from "../markers.ts";
import { planBox, planFloor, planOpenings, planPins, planView, planWalls, roomReadings, spreadPins, turnPoint, type PlanBox, type PlanPin } from "../plan2d.ts";
import { DEFAULT_PLAN_OPTIONS, type PlanOptions } from "../plan-options.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";
import { furnitureSymbol } from "./furniture2d.ts";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export class Fp3dPlan2d extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    /** The floor to start on (its id or name); the ground floor without one. */
    floor: { type: String },
    options: { attribute: false },
    /** Fill the height of the host (the panel) instead of taking the height the plan needs (the card). */
    fit: { type: Boolean, reflect: true },
    /** The floor buttons (with several floors). */
    floorButtons: { type: Boolean, attribute: "floor-buttons" },
    /** The plan turned by this many degrees (clockwise). */
    rotation: { type: Number },
    /** The piece of the turned plan to show (metres, in the turned plan's coordinates); all of it without one. */
    area: { attribute: false },
    /** Choosing the area: the whole plan shows, the current area is marked and a drag on the plan chooses a new one (event area-select). */
    selecting: { type: Boolean },
    _floorId: { state: true },
    _area: { state: true },
    _pressed: { state: true },
    _drag: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null | undefined;
  declare floor: string | null | undefined;
  declare options: PlanOptions;
  declare fit: boolean;
  declare floorButtons: boolean;
  declare rotation: number;
  declare area: PlanBox | null | undefined;
  declare selecting: boolean;
  /** The rectangle being dragged while an area is chosen (turned plan coordinates). */
  private declare _drag: { x0: number; z0: number; x1: number; z1: number } | null;
  /** The floor chosen with the buttons (null: the one that was asked for). */
  private declare _floorId: string | null;
  /** The room the plan may use, measured. */
  private declare _area: { w: number; h: number };
  private declare _pressed: ReadonlySet<string>;
  private observer?: ResizeObserver;

  constructor() {
    super();
    this.options = DEFAULT_PLAN_OPTIONS;
    this.fit = false;
    this.floorButtons = true;
    this.rotation = 0;
    this.area = null;
    this.selecting = false;
    this._drag = null;
    this._floorId = null;
    this._area = { w: 0, h: 0 };
    this._pressed = new Set();
  }

  protected updated(changed: PropertyValues): void {
    if (changed.size === 0 || this.observer) return;
    const area = this.renderRoot.querySelector(".area");
    if (!area) return;
    this.observer = new ResizeObserver(() => {
      const r = area.getBoundingClientRect();
      if (Math.abs(r.width - this._area.w) > 1 || Math.abs(r.height - this._area.h) > 1) this._area = { w: r.width, h: r.height };
    });
    this.observer.observe(area);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.observer?.disconnect();
    this.observer = undefined;
  }

  protected render() {
    const b = this.building;
    if (!b || !b.floors.some((f) => f.rooms.length)) return nothing;
    const floor = (this._floorId && b.floors.find((f) => f.id === this._floorId)) || planFloor(b, this.floor);
    if (!floor) return nothing;
    const opts = this.options;
    const walls = planWalls(b, floor);
    const full = planBox(floor, walls);
    // the plan turned, and the part of it that shows (the whole plan while an area is being chosen)
    const { center, view } = planView(full, this.rotation, this.selecting ? null : this.area);
    const ratio = view.w / view.h;
    // the plan takes the width, or (filling the host) as much as fits both ways
    const aw = this._area.w;
    const w = aw > 0 ? (this.fit && this._area.h > 0 ? Math.min(aw, this._area.h * ratio) : aw) : 0;
    const style = w > 0 ? `width:${Math.round(w)}px;height:${Math.round(w / ratio)}px;--ps:${Math.max(0.72, Math.min(1.15, w / 560)).toFixed(2)}` : `width:100%;aspect-ratio:${ratio}`;
    // a plan point as a position on the stage: turned, then as a share of what shows
    const turned = (x: number, z: number): [number, number] => turnPoint([x, z], center, this.rotation);
    const share = (x: number, z: number): [number, number] => {
      const [tx, tz] = turned(x, z);
      return [(tx - view.x) / view.w, (tz - view.z) / view.h];
    };
    const inside = ([u, v]: [number, number]) => u > -0.02 && u < 1.02 && v > -0.02 && v < 1.02;
    const pct = (x: number, z: number) => {
      const [u, v] = share(x, z);
      return `left:${(u * 100).toFixed(2)}%;top:${(v * 100).toFixed(2)}%`;
    };
    const zones = zonesOf(floor);
    const pins = (opts.devices && this.hass && !this.selecting ? planPins(this.hass, b, floor) : []).filter((p) => inside(share(p.x, p.z)));
    // pins on top of each other are pushed apart (in pixels); a thin line leads back to where each belongs
    const ps = w > 0 ? Math.max(0.72, Math.min(1.15, w / 560)) : 1;
    const home = pins.map((p): [number, number] => {
      const [u, v] = share(p.x, p.z);
      return [u * w, v * w / ratio];
    });
    const spread = w > 0 ? spreadPins(home, 36 * ps, 70 * ps) : home;
    const at = pins.map((_, i) => `left:${w > 0 ? ((spread[i][0] / w) * 100).toFixed(2) : "0"}%;top:${w > 0 ? ((spread[i][1] / (w / ratio)) * 100).toFixed(2) : "0"}%`);
    const moved = pins.flatMap((_, i) => (Math.hypot(spread[i][0] - home[i][0], spread[i][1] - home[i][1]) > 2 ? [i] : []));
    const turn = this.rotation ? `rotate(${this.rotation} ${center[0]} ${center[1]})` : null;
    return html`
      ${this.floorButtons && b.floors.length > 1
        ? html`<div class="floors" role="group">
            ${[...b.floors].reverse().map((f) => html`<button class="fp3d-chip" aria-pressed=${f.id === floor.id} @click=${() => (this._floorId = f.id)}>${f.name}</button>`)}
          </div>`
        : nothing}
      <div class="area ${this.fit ? "fit" : ""}">
        <div class="stage" style=${style}>
          <svg viewBox="${view.x} ${view.z} ${view.w} ${view.h}" role="img" aria-label=${floor.name}>
            <g transform=${turn ?? nothing}>
              <g>${zones.map((r) => svg`<polygon class=${r.outdoor ? "zone out" : "zone"} points=${r.points.map((p) => p.join(",")).join(" ")} />`)}</g>
              <g class="walls">${walls.map((wl) => svg`<polygon class=${wl.exterior ? "wall ext" : "wall"} points=${wl.footprint.map((p) => p.join(",")).join(" ")} />`)}</g>
              ${this.renderOpenings(floor, walls)}
              ${opts.furniture ? this.renderFurniture(floor) : nothing}
            </g>
            ${this.selecting ? this.renderChosen(view) : nothing}
          </svg>
          <div class="over">
            ${this.selecting ? nothing : zones.map((r) => this.renderLabel(floor, r, pct, share, inside))}
            ${w > 0
              ? html`<svg class="links" viewBox="0 0 ${w} ${w / ratio}" aria-hidden="true">${moved.map((i) => svg`<line x1=${home[i][0]} y1=${home[i][1]} x2=${spread[i][0]} y2=${spread[i][1]} /><circle cx=${home[i][0]} cy=${home[i][1]} r="2.5" />`)}</svg>`
              : nothing}
            ${pins.map((p, i) => this.renderPin(p, at[i]))}
          </div>
          ${this.selecting
            ? html`<div class="pick" @pointerdown=${(e: PointerEvent) => this.pickStart(e, view)} @pointermove=${(e: PointerEvent) => this.pickMove(e, view)} @pointerup=${(e: PointerEvent) => this.pickEnd(e, view)} @pointercancel=${() => (this._drag = null)}></div>`
            : nothing}
        </div>
      </div>
    `;
  }

  private renderOpenings(floor: Floor, walls: ReturnType<typeof planWalls>) {
    const pt = (p: [number, number]) => p.join(",");
    return svg`<g class="openings">${planOpenings(floor, walls).map(
      (o) => svg`<g class=${`open ${o.type}`}>
        <polygon class="gap" points=${o.gap.map(pt).join(" ")} />
        ${o.lines.map(([a, c]) => svg`<line x1=${a[0]} y1=${a[1]} x2=${c[0]} y2=${c[1]} />`)}
        ${o.paths.map((d) => svg`<path d=${d} />`)}
      </g>`,
    )}</g>`;
  }

  private renderFurniture(floor: Floor) {
    return svg`<g class="furniture">${floor.furniture.map(
      (f) => svg`<g transform="translate(${f.x} ${f.z}) rotate(${f.rotation}) scale(${f.mirror ? -1 : 1} 1)">
        <rect class="body" x=${-f.w / 2} y=${-f.d / 2} width=${f.w} height=${f.d} rx="0.02" />
        <g class="sym">${furnitureSymbol(f.type, f.w, f.d)}</g>
        <line class="front" x1=${-f.w / 2} y1=${f.d / 2} x2=${f.w / 2} y2=${f.d / 2} />
      </g>`,
    )}</g>`;
  }

  /** The name of a room and what it reads (its temperature, its humidity), as set in the settings. */
  private renderLabel(floor: Floor, room: ReturnType<typeof zonesOf>[number], pct: (x: number, z: number) => string, share: (x: number, z: number) => [number, number], inside: (p: [number, number]) => boolean) {
    const hass = this.hass;
    const opts = this.options;
    if (room.points.length < 3) return nothing;
    const read = hass && (opts.temperature || opts.humidity) ? roomReadings(hass, floor, room) : null;
    const name = opts.names ? room.name.trim() : "";
    const temp = opts.temperature ? read?.temp : null;
    const hum = opts.humidity ? read?.humidity : null;
    if (!name && !temp && !hum) return nothing;
    const [cx, cz] = centroid(room.points);
    if (!inside(share(cx, cz))) return nothing;
    return html`<div class="label" style=${pct(cx, cz)}>
      ${name ? html`<span class="name">${name}</span>` : nothing}
      ${temp ? html`<span class="temp">${temp}</span>` : nothing}
      ${hum ? html`<span class="hum">${hum}</span>` : nothing}
    </div>`;
  }

  private renderPin(p: PlanPin, position: string) {
    const cls = `pin ${p.tone}${p.active ? " on" : ""}${p.unavailable ? " gone" : ""}${p.press ? " press" : ""}${this._pressed.has(p.key) ? " pressed" : ""}`;
    return html`<button class=${cls} style=${position} title=${p.name} aria-label=${p.name} @click=${() => this.tap(p)}>
      <span class="ico">${unsafeHTML(p.icon)}</span>
      ${p.text ? html`<span class="txt">${p.text}</span>` : nothing}
    </button>`;
  }

  /** The area that is chosen now and the one being dragged, over the whole plan. */
  private renderChosen(view: PlanBox) {
    const d = this._drag;
    const r = d ? { x: Math.min(d.x0, d.x1), z: Math.min(d.z0, d.z1), w: Math.abs(d.x1 - d.x0), h: Math.abs(d.z1 - d.z0) } : this.area;
    if (!r || r.w <= 0 || r.h <= 0) return nothing;
    // everything outside the area is dimmed, the area itself is framed
    const outer = `M${view.x} ${view.z}h${view.w}v${view.h}h${-view.w}z`;
    const inner = `M${r.x} ${r.z}h${r.w}v${r.h}h${-r.w}z`;
    return svg`<path class="dim" fill-rule="evenodd" d="${outer}${inner}" /><rect class="frame" x=${r.x} y=${r.z} width=${r.w} height=${r.h} />`;
  }

  /** A point of the stage under the pointer, in the turned plan's coordinates. */
  private pickAt(e: PointerEvent, view: PlanBox): [number, number] {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    return [view.x + ((e.clientX - r.left) / r.width) * view.w, view.z + ((e.clientY - r.top) / r.height) * view.h];
  }

  private pickStart(e: PointerEvent, view: PlanBox): void {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    const [x, z] = this.pickAt(e, view);
    this._drag = { x0: x, z0: z, x1: x, z1: z };
  }

  private pickMove(e: PointerEvent, view: PlanBox): void {
    if (!this._drag) return;
    const [x, z] = this.pickAt(e, view);
    this._drag = { ...this._drag, x1: x, z1: z };
  }

  private pickEnd(e: PointerEvent, view: PlanBox): void {
    const d = this._drag;
    this._drag = null;
    if (!d) return;
    const [x, z] = this.pickAt(e, view);
    const r = (v: number) => Math.round(v * 100) / 100;
    const area = { x: r(Math.min(d.x0, x)), z: r(Math.min(d.z0, z)), w: r(Math.abs(x - d.x0)), h: r(Math.abs(z - d.z0)) };
    // a tap without a drag, or a sliver, leaves the area as it was
    if (area.w < 0.5 || area.h < 0.5) return;
    this.dispatchEvent(new CustomEvent("area-select", { detail: area, bubbles: true, composed: true }));
  }

  /** A tap: a button, script or scene is pressed, a light, switch or fan is switched, anything else opens its details. */
  private tap(p: PlanPin): void {
    const hass = this.hass;
    if (!hass) return;
    const press = pressCall(p.entity);
    const kind = kindOf(p.entity);
    const toggles = !!kind && TOGGLE_KINDS.has(kind);
    if ((press || toggles) && this.building && confirmEntities(hass, this.building.floors).has(p.entity) && !confirm(translate(hass, "confirm_switch", { name: entityName(hass, p.entity) }))) return;
    if (press) {
      void hass.callService(press[0], press[1], { entity_id: p.entity });
      // a short flash tells that the press went out
      this._pressed = new Set([...this._pressed, p.key]);
      setTimeout(() => {
        const next = new Set(this._pressed);
        next.delete(p.key);
        this._pressed = next;
      }, 700);
    } else if (toggles) void toggleEntity(hass, p.entity);
    else openMoreInfo(this, p.entity);
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-height: 0;
        color: var(--fp3d-text, #e6eefc);
        font-family: var(--fp3d-font, system-ui, sans-serif);
        --plan-floor: #0d1830;
        --plan-wall: #26407a;
        --plan-line: rgba(120, 170, 255, 0.5);
        --ps: 1;
      }
      :host([fit]) {
        height: 100%;
      }
      .floors {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 0 4px;
      }
      .area {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 0;
      }
      .area.fit {
        flex: 1;
        min-height: 0;
      }
      .stage {
        position: relative;
        flex: none;
      }
      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
      .zone {
        fill: var(--plan-floor);
      }
      .zone.out {
        fill: rgba(61, 255, 154, 0.05);
        stroke: rgba(61, 255, 154, 0.25);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        vector-effect: non-scaling-stroke;
      }
      .wall {
        fill: #1b2a4d;
        stroke: var(--plan-wall);
        stroke-width: 0.8;
        vector-effect: non-scaling-stroke;
      }
      .wall.ext {
        fill: #22386a;
        stroke: var(--fp3d-accent, #37e0ff);
        stroke-opacity: 0.7;
      }
      .gap {
        fill: var(--plan-floor);
        stroke: none;
      }
      .open line,
      .open path {
        fill: none;
        stroke: var(--fp3d-accent, #37e0ff);
        stroke-width: 1.3;
        vector-effect: non-scaling-stroke;
      }
      .open.window line {
        stroke: #8fd7ff;
      }
      .furniture .body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
      }
      .furniture .sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
      }
      .furniture .sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .furniture .sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent, #37e0ff);
        stroke-width: 2;
      }
      .furniture .front {
        stroke: rgba(150, 175, 255, 0.35);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
      }
      .over {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .label {
        position: absolute;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
        text-align: center;
        line-height: 1.15;
        text-shadow: 0 1px 3px #000, 0 0 6px #000;
      }
      .label .name {
        font: 600 calc(12px * var(--ps)) var(--fp3d-title-font, system-ui);
        color: var(--fp3d-text, #e6eefc);
      }
      .label .temp {
        font: 700 calc(15px * var(--ps)) var(--fp3d-title-font, system-ui);
        color: var(--fp3d-warm, #ffb547);
        font-variant-numeric: tabular-nums;
      }
      .label .hum {
        font: 600 calc(12px * var(--ps)) var(--fp3d-font, system-ui);
        color: #8fd7ff;
        font-variant-numeric: tabular-nums;
      }
      .pin {
        position: absolute;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 0;
        border: 0;
        background: none;
        color: var(--fp3d-text, #e6eefc);
        font: inherit;
        cursor: pointer;
        pointer-events: auto;
        -webkit-tap-highlight-color: transparent;
      }
      .pin .ico {
        display: grid;
        place-items: center;
        width: calc(30px * var(--ps));
        height: calc(30px * var(--ps));
        border-radius: 50%;
        background: var(--fp3d-chrome-solid, #0f1729);
        border: 1.5px solid rgba(120, 170, 255, 0.45);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        transition: box-shadow 0.2s, border-color 0.2s, background 0.2s;
      }
      .pin .ico svg {
        width: calc(18px * var(--ps));
        height: calc(18px * var(--ps));
      }
      .pin .ico ha-icon {
        --mdc-icon-size: calc(18px * var(--ps));
      }
      .pin .txt {
        padding: 1px 6px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.82);
        font-size: calc(11px * var(--ps));
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .pin.on .ico {
        border-color: var(--fp3d-accent, #37e0ff);
        color: var(--fp3d-accent, #37e0ff);
        box-shadow: 0 0 10px rgba(55, 224, 255, 0.55);
      }
      /* a switched device (a light, a socket, a fan) is yellow while it is on: the colour says it, no text needed */
      .pin.on.toggle .ico {
        border-color: #ffd23f;
        background: #ffd23f;
        color: #1a1300;
        box-shadow: 0 0 12px rgba(255, 210, 63, 0.75);
      }
      .pin.on.energy .ico {
        border-color: #3dff9a;
        background: #3dff9a;
        color: #04180d;
        box-shadow: 0 0 10px rgba(61, 255, 154, 0.6);
      }
      .links {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
      }
      .links line {
        stroke: rgba(150, 175, 255, 0.6);
        stroke-width: 1;
        stroke-dasharray: 3 2;
      }
      .links circle {
        fill: rgba(150, 175, 255, 0.9);
      }
      .dim {
        fill: rgba(4, 8, 16, 0.62);
        pointer-events: none;
      }
      .frame {
        fill: none;
        stroke: var(--fp3d-accent, #37e0ff);
        stroke-width: 2;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .pick {
        position: absolute;
        inset: 0;
        cursor: crosshair;
        touch-action: none;
      }
      .pin.gone {
        opacity: 0.45;
      }
      .pin.press .ico {
        border-style: dashed;
      }
      .pin.pressed .ico {
        background: var(--fp3d-accent, #37e0ff);
        color: var(--fp3d-accent-text, #041018);
        box-shadow: 0 0 16px rgba(55, 224, 255, 0.8);
      }
    `,
  ];
}

if (!customElements.get("fp3d-plan2d")) customElements.define("fp3d-plan2d", Fp3dPlan2d);
