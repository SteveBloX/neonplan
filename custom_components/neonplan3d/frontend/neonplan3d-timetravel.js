// src/model.ts
var DEFAULT_ROOF = { type: "none", pitch: 35, overhang: 0.4 };
var DEFAULT_SETTINGS = { wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05, north: 0, roof: { ...DEFAULT_ROOF } };
var LAMP_TYPES = /* @__PURE__ */ new Set([
  "lamp_ceiling",
  "lamp_fan",
  "lamp_downlight",
  "lamp_spot",
  "lamp_panel",
  "lamp_pendant",
  "lamp_floor",
  "lamp_uplight",
  "lamp_table",
  "lamp_wall",
  "led_strip",
  "lamp_bollard",
  "lamp_garden"
]);
var ELECTRIC_FURNITURE = /* @__PURE__ */ new Set([
  ...LAMP_TYPES,
  "radiator",
  "towel_radiator",
  "range_hood",
  "microwave",
  "coffee_machine",
  "nest_hub",
  "ac_unit",
  "awning",
  "gate",
  "fireplace",
  "printer_3d",
  "robot_vacuum",
  "inverter",
  "home_battery",
  "wallbox",
  "meter",
  "pool_pump",
  "pool_heat_pump",
  "pool_dosing",
  "tv_board",
  "tv_wall",
  "desk",
  "fridge",
  "fridge_smart",
  "stove",
  "oven",
  "kitchen_tall",
  "dishwasher",
  "washer",
  "dryer",
  "kitchen",
  "island",
  "sink"
]);
function pointInPolygon(p3, points) {
  let inside2 = false;
  for (let i5 = 0, j = points.length - 1; i5 < points.length; j = i5++) {
    const [xi, zi] = points[i5];
    const [xj, zj] = points[j];
    if (zi > p3[1] !== zj > p3[1] && p3[0] < (xj - xi) * (p3[1] - zi) / (zj - zi) + xi) inside2 = !inside2;
  }
  return inside2;
}

// src/roof-sections.ts
var DEG = Math.PI / 180;
var MANSARD_UPPER = Math.tan(30 * DEG);

// src/solar.ts
var DEG2 = Math.PI / 180;

// src/devices.ts
function deviceAreaId(hass, deviceId) {
  const seen = /* @__PURE__ */ new Set();
  let id = deviceId;
  while (id && !seen.has(id)) {
    seen.add(id);
    const device = hass.devices?.[id];
    if (!device) return null;
    if (device.area_id) return device.area_id;
    id = device.parent_device_id;
  }
  return null;
}
function entityAreaId(hass, entityId) {
  const entry = hass.entities?.[entityId];
  if (!entry) return null;
  if (entry.area_id) return entry.area_id;
  return deviceAreaId(hass, entry.device_id);
}

// src/energy.ts
var ref = (v2) => v2 && v2 !== "none" ? v2 : null;
function deviceSensors(building, power = (f3) => ref(f3.power)) {
  const out = { grid: null, gridExport: null, solar: [], battery: [], charge: [], batteries: [], soc: [] };
  for (const floor of building.floors) {
    for (const f3 of floor.furniture) {
      const p3 = power(f3);
      if (f3.type === "meter") {
        out.grid ??= p3;
        out.gridExport ??= ref(f3.export);
      } else if (f3.type === "inverter" && p3 && !out.solar.includes(p3)) out.solar.push(p3);
      else if (f3.type === "home_battery") {
        if (p3 && !out.battery.includes(p3)) out.battery.push(p3);
        const charge = ref(f3.charge);
        if (charge && !out.charge.includes(charge)) out.charge.push(charge);
        if (p3 || charge) out.batteries.push({ power: p3, charge });
        const soc = ref(f3.soc);
        if (soc && !out.soc.includes(soc)) out.soc.push(soc);
      }
    }
  }
  return out;
}
function readPower(st, invert = false) {
  if (!st) return null;
  const v2 = Number(st.state);
  if (!Number.isFinite(v2)) return null;
  const unit = String(st.attributes.unit_of_measurement ?? "W");
  const w2 = unit === "kW" ? v2 * 1e3 : unit === "MW" ? v2 * 1e6 : v2;
  return invert ? -w2 : w2;
}
function energySummary(hass, building, consumers, devices = deviceSensors(building)) {
  const e4 = building.energy;
  const gridId = e4.grid ?? devices.grid;
  let grid = gridId ? readPower(hass.states[gridId], e4.grid_invert) : null;
  if (!e4.grid && devices.gridExport) {
    const exp = Math.max(0, readPower(hass.states[devices.gridExport]) ?? 0);
    grid = Math.max(0, grid ?? 0) - exp;
  }
  let solar = e4.solar ? readPower(hass.states[e4.solar]) : null;
  if (!e4.solar && devices.solar.length) {
    const values = devices.solar.map((id) => readPower(hass.states[id])).filter((v2) => v2 !== null);
    solar = values.length ? values.reduce((a3, b3) => a3 + b3, 0) : null;
  }
  let battery = e4.battery ? readPower(hass.states[e4.battery], e4.battery_invert) : null;
  if (!e4.battery && devices.batteries.length) {
    const values = devices.batteries.map((bat) => {
      if (bat.charge) {
        const out = bat.power ? Math.max(0, readPower(hass.states[bat.power]) ?? 0) : 0;
        const inp = Math.max(0, readPower(hass.states[bat.charge]) ?? 0);
        return out - inp;
      }
      return bat.power ? readPower(hass.states[bat.power], e4.battery_invert) : null;
    }).filter((v2) => v2 !== null);
    battery = values.length ? values.reduce((a3, b3) => a3 + b3, 0) : null;
  }
  const socIds = e4.battery_soc ? [e4.battery_soc] : devices.soc;
  const socs = socIds.map((id) => Number(hass.states[id]?.state)).filter((v2) => Number.isFinite(v2));
  const socState = socs.length ? socs.reduce((a3, b3) => a3 + b3, 0) / socs.length : NaN;
  const tariffState = e4.tariff ? hass.states[e4.tariff] : void 0;
  const tariffValue = Number(tariffState?.state);
  let consumption = e4.consumption ? readPower(hass.states[e4.consumption]) : null;
  if (consumption !== null) consumption = Math.max(0, consumption);
  else if (grid !== null || solar !== null || battery !== null) consumption = Math.max(0, (grid ?? 0) + Math.max(0, solar ?? 0) + (battery ?? 0));
  else if (consumers.length) consumption = consumers.reduce((s4, c4) => s4 + c4.power, 0);
  return {
    grid,
    solar: solar === null ? null : Math.max(0, solar),
    battery,
    soc: Number.isFinite(socState) ? socState : null,
    tariff: tariffState && Number.isFinite(tariffValue) ? { value: tariffValue, unit: String(tariffState.attributes.unit_of_measurement ?? "") } : null,
    consumption
  };
}

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = /* @__PURE__ */ Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t3, e4, o5) {
    if (this._$cssResult$ = true, o5 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e4;
  }
  get styleSheet() {
    let t3 = this.o;
    const s4 = this.t;
    if (e && void 0 === t3) {
      const e4 = void 0 !== s4 && 1 === s4.length;
      e4 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
var i = (t3, ...e4) => {
  const o5 = 1 === t3.length ? t3[0] : e4.reduce((e5, s4, o6) => e5 + ((t4) => {
    if (true === t4._$cssResult$) return t4.cssText;
    if ("number" == typeof t4) return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t3[o6 + 1], t3[0]);
  return new n(o5, t3, s);
};
var S = (s4, o5) => {
  if (e) s4.adoptedStyleSheets = o5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
  else for (const e4 of o5) {
    const o6 = document.createElement("style"), n4 = t.litNonce;
    void 0 !== n4 && o6.setAttribute("nonce", n4), o6.textContent = e4.cssText, s4.appendChild(o6);
  }
};
var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e4 = "";
  for (const s4 of t4.cssRules) e4 += s4.cssText;
  return r(e4);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t3, s4) => t3;
var u = { toAttribute(t3, s4) {
  switch (s4) {
    case Boolean:
      t3 = t3 ? l : null;
      break;
    case Object:
    case Array:
      t3 = null == t3 ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, s4) {
  let i5 = t3;
  switch (s4) {
    case Boolean:
      i5 = null !== t3;
      break;
    case Number:
      i5 = null === t3 ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t3);
      } catch (t4) {
        i5 = null;
      }
  }
  return i5;
} };
var f = (t3, s4) => !i2(t3, s4);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y = class extends HTMLElement {
  static addInitializer(t3) {
    this._$Ei(), (this.l ??= []).push(t3);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t3, s4 = b) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
      const i5 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
      void 0 !== h3 && e2(this.prototype, t3, h3);
    }
  }
  static getPropertyDescriptor(t3, s4, i5) {
    const { get: e4, set: r4 } = h(this.prototype, t3) ?? { get() {
      return this[s4];
    }, set(t4) {
      this[s4] = t4;
    } };
    return { get: e4, set(s5) {
      const h3 = e4?.call(this);
      r4?.call(this, s5), this.requestUpdate(t3, h3, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t3 = n2(this);
    t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
      for (const i5 of s4) this.createProperty(i5, t4[i5]);
    }
    const t3 = this[Symbol.metadata];
    if (null !== t3) {
      const s4 = litPropertyMetadata.get(t3);
      if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t4, s4] of this.elementProperties) {
      const i5 = this._$Eu(t4, s4);
      void 0 !== i5 && this._$Eh.set(i5, t4);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s4) {
    const i5 = [];
    if (Array.isArray(s4)) {
      const e4 = new Set(s4.flat(1 / 0).reverse());
      for (const s5 of e4) i5.unshift(c(s5));
    } else void 0 !== s4 && i5.push(c(s4));
    return i5;
  }
  static _$Eu(t3, s4) {
    const i5 = s4.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
  }
  addController(t3) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
  }
  removeController(t3) {
    this._$EO?.delete(t3);
  }
  _$E_() {
    const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
    t3.size > 0 && (this._$Ep = t3);
  }
  createRenderRoot() {
    const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t3, this.constructor.elementStyles), t3;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t3) => t3.hostDisconnected?.());
  }
  attributeChangedCallback(t3, s4, i5) {
    this._$AK(t3, i5);
  }
  _$ET(t3, s4) {
    const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
    if (void 0 !== e4 && true === i5.reflect) {
      const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
      this._$Em = t3, null == h3 ? this.removeAttribute(e4) : this.setAttribute(e4, h3), this._$Em = null;
    }
  }
  _$AK(t3, s4) {
    const i5 = this.constructor, e4 = i5._$Eh.get(t3);
    if (void 0 !== e4 && this._$Em !== e4) {
      const t4 = i5.getPropertyOptions(e4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
      this._$Em = e4;
      const r4 = h3.fromAttribute(s4, t4.type);
      this[e4] = r4 ?? this._$Ej?.get(e4) ?? r4, this._$Em = null;
    }
  }
  requestUpdate(t3, s4, i5, e4 = false, h3) {
    if (void 0 !== t3) {
      const r4 = this.constructor;
      if (false === e4 && (h3 = this[t3]), i5 ??= r4.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(r4._$Eu(t3, i5)))) return;
      this.C(t3, s4, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t3, s4, { useDefault: i5, reflect: e4, wrapped: h3 }, r4) {
    i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r4 ?? s4 ?? this[t3]), true !== h3 || void 0 !== r4) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e4 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return null != t3 && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t5, s5] of this._$Ep) this[t5] = s5;
        this._$Ep = void 0;
      }
      const t4 = this.constructor.elementProperties;
      if (t4.size > 0) for (const [s5, i5] of t4) {
        const { wrapped: t5 } = i5, e4 = this[s5];
        true !== t5 || this._$AL.has(s5) || void 0 === e4 || this.C(s5, void 0, i5, e4);
      }
    }
    let t3 = false;
    const s4 = this._$AL;
    try {
      t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
    } catch (s5) {
      throw t3 = false, this._$EM(), s5;
    }
    t3 && this._$AE(s4);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = (t3) => t3;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
var u2 = Array.isArray;
var d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = /* @__PURE__ */ Symbol.for("lit-noChange");
var A = /* @__PURE__ */ Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
var N = (t3, i5) => {
  const s4 = t3.length - 1, e4 = [];
  let n4, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
  for (let i6 = 0; i6 < s4; i6++) {
    const s5 = t3[i6];
    let a3, u3, d3 = -1, f3 = 0;
    for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n4 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n4 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n4 = void 0);
    const x2 = c4 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e4.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i6 : x2);
  }
  return [V(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e4];
};
var S2 = class _S {
  constructor({ strings: t3, _$litType$: i5 }, e4) {
    let r4;
    this.parts = [];
    let l3 = 0, a3 = 0;
    const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = N(t3, i5);
    if (this.el = _S.createElement(f3, e4), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t4 = this.el.content.firstChild;
      t4.replaceWith(...t4.childNodes);
    }
    for (; null !== (r4 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r4.nodeType) {
        if (r4.hasAttributes()) for (const t4 of r4.getAttributeNames()) if (t4.endsWith(h2)) {
          const i6 = v2[a3++], s4 = r4.getAttribute(t4).split(o3), e5 = /([.?@])?(.*)/.exec(i6);
          d3.push({ type: 1, index: l3, name: e5[2], strings: s4, ctor: "." === e5[1] ? I : "?" === e5[1] ? L : "@" === e5[1] ? z : H }), r4.removeAttribute(t4);
        } else t4.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r4.removeAttribute(t4));
        if (y2.test(r4.tagName)) {
          const t4 = r4.textContent.split(o3), i6 = t4.length - 1;
          if (i6 > 0) {
            r4.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i6; s4++) r4.append(t4[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
            r4.append(t4[i6], c3());
          }
        }
      } else if (8 === r4.nodeType) if (r4.data === n3) d3.push({ type: 2, index: l3 });
      else {
        let t4 = -1;
        for (; -1 !== (t4 = r4.data.indexOf(o3, t4 + 1)); ) d3.push({ type: 7, index: l3 }), t4 += o3.length - 1;
      }
      l3++;
    }
  }
  static createElement(t3, i5) {
    const s4 = l2.createElement("template");
    return s4.innerHTML = t3, s4;
  }
};
function M(t3, i5, s4 = t3, e4) {
  if (i5 === E) return i5;
  let h3 = void 0 !== e4 ? s4._$Co?.[e4] : s4._$Cl;
  const o5 = a2(i5) ? void 0 : i5._$litDirective$;
  return h3?.constructor !== o5 && (h3?._$AO?.(false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t3), h3._$AT(t3, s4, e4)), void 0 !== e4 ? (s4._$Co ??= [])[e4] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = M(t3, h3._$AS(t3, i5.values), h3, e4)), i5;
}
var R = class {
  constructor(t3, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    const { el: { content: i5 }, parts: s4 } = this._$AD, e4 = (t3?.creationScope ?? l2).importNode(i5, true);
    P.currentNode = e4;
    let h3 = P.nextNode(), o5 = 0, n4 = 0, r4 = s4[0];
    for (; void 0 !== r4; ) {
      if (o5 === r4.index) {
        let i6;
        2 === r4.type ? i6 = new k(h3, h3.nextSibling, this, t3) : 1 === r4.type ? i6 = new r4.ctor(h3, r4.name, r4.strings, this, t3) : 6 === r4.type && (i6 = new Z(h3, this, t3)), this._$AV.push(i6), r4 = s4[++n4];
      }
      o5 !== r4?.index && (h3 = P.nextNode(), o5++);
    }
    return P.currentNode = l2, e4;
  }
  p(t3) {
    let i5 = 0;
    for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t3, i5, s4, e4) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e4, this._$Cv = e4?.isConnected ?? true;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i5 = this) {
    t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
  }
  O(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  T(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
  }
  _(t3) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
  }
  $(t3) {
    const { values: i5, _$litType$: s4 } = t3, e4 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
    if (this._$AH?._$AD === e4) this._$AH.p(i5);
    else {
      const t4 = new R(e4, this), s5 = t4.u(this.options);
      t4.p(i5), this.T(s5), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i5 = C.get(t3.strings);
    return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
  }
  k(t3) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s4, e4 = 0;
    for (const h3 of t3) e4 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e4], s4._$AI(h3), e4++;
    e4 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i5.length = e4);
  }
  _$AR(t3 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t3 !== this._$AB; ) {
      const s5 = i3(t3).nextSibling;
      i3(t3).remove(), t3 = s5;
    }
  }
  setConnected(t3) {
    void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t3, i5, s4, e4, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  _$AI(t3, i5 = this, s4, e4) {
    const h3 = this.strings;
    let o5 = false;
    if (void 0 === h3) t3 = M(this, t3, i5, 0), o5 = !a2(t3) || t3 !== this._$AH && t3 !== E, o5 && (this._$AH = t3);
    else {
      const e5 = t3;
      let n4, r4;
      for (t3 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r4 = M(this, e5[s4 + n4], i5, n4), r4 === E && (r4 = this._$AH[n4]), o5 ||= !a2(r4) || r4 !== this._$AH[n4], r4 === A ? t3 = A : t3 !== A && (t3 += (r4 ?? "") + h3[n4 + 1]), this._$AH[n4] = r4;
    }
    o5 && !e4 && this.j(t3);
  }
  j(t3) {
    t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t3) {
    this.element[this.name] = t3 === A ? void 0 : t3;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t3) {
    this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
  }
};
var z = class extends H {
  constructor(t3, i5, s4, e4, h3) {
    super(t3, i5, s4, e4, h3), this.type = 5;
  }
  _$AI(t3, i5 = this) {
    if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
    const s4 = this._$AH, e4 = t3 === A && s4 !== A || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== A && (s4 === A || e4);
    e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var Z = class {
  constructor(t3, i5, s4) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    M(this, t3);
  }
};
var B = t2.litHtmlPolyfillSupport;
B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
var D = (t3, i5, s4) => {
  const e4 = s4?.renderBefore ?? i5;
  let h3 = e4._$litPart$;
  if (void 0 === h3) {
    const t4 = s4?.renderBefore ?? null;
    e4._$litPart$ = h3 = new k(i5.insertBefore(c3(), t4), t4, void 0, s4 ?? {});
  }
  return h3._$AI(t3), h3;
};

// node_modules/lit-element/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t3 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t3.firstChild, t3;
  }
  update(t3) {
    const r4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
var o4 = s3.litElementPolyfillSupport;
o4?.({ LitElement: i4 });
(s3.litElementVersions ??= []).push("4.2.2");

// src/beta.ts
var BETA_FEATURES = ["pool"];
function isBeta(feature) {
  return BETA_FEATURES.includes(feature);
}
var DISCORD_URL = "https://discord.gg/SSdVVFsev7";

// src/outage.ts
var OUTAGE_STATES = /* @__PURE__ */ new Set(["ob", "on_battery", "onbattery", "on battery", "battery", "outage", "power_outage", "power outage", "offline", "off_grid", "off grid", "off-grid", "no_grid", "no grid"]);
var POWER_PRESENT_CLASSES = /* @__PURE__ */ new Set(["power", "plug", "connectivity", "running"]);
function isOutage(st) {
  if (!st || st.state === "unavailable" || st.state === "unknown") return false;
  const domain = st.entity_id.split(".")[0];
  if (domain === "binary_sensor") return POWER_PRESENT_CLASSES.has(String(st.attributes.device_class)) ? st.state === "off" : st.state === "on";
  if (domain === "input_boolean" || domain === "switch") return st.state === "on";
  const value = Number(st.state);
  if (st.state !== "" && Number.isFinite(value)) return st.attributes.unit_of_measurement === "V" && value < 100;
  const text = String(st.state).toLowerCase().trim();
  return OUTAGE_STATES.has(text) || text.startsWith("ob ");
}

// src/timetravel/numeric.ts
var HOLD_MS = 15 * 6e4;
function seriesValue(s4, t3, holdMs = HOLD_MS) {
  const n4 = s4.mean.length;
  if (!n4 || t3 < s4.start) return NaN;
  const pos = (t3 - s4.start) / s4.step - 0.5;
  const i5 = Math.floor(pos);
  if (i5 < 0) return s4.mean[0];
  if (i5 >= n4 - 1) {
    const last = lastFinite(s4, n4 - 1);
    return last >= 0 && t3 - (s4.start + (last + 0.5) * s4.step) <= holdMs ? s4.mean[last] : NaN;
  }
  const a3 = s4.mean[i5];
  const b3 = s4.mean[i5 + 1];
  const f3 = pos - i5;
  if (!Number.isNaN(a3) && !Number.isNaN(b3)) return a3 + (b3 - a3) * f3;
  const k2 = lastFinite(s4, i5);
  if (k2 >= 0 && t3 - (s4.start + (k2 + 0.5) * s4.step) <= holdMs) return s4.mean[k2];
  return NaN;
}
function lastFinite(s4, from) {
  for (let i5 = from; i5 >= 0; i5--) if (!Number.isNaN(s4.mean[i5])) return i5;
  return -1;
}
function quantStep(unit, precision, sample = 0) {
  if (typeof precision === "number" && precision >= 0 && precision <= 6) return 10 ** -precision;
  switch (typeof unit === "string" ? unit : "") {
    case "\xB0C":
    case "\xB0F":
    case "K":
    case "A":
    case "bar":
    case "km/h":
    case "m/s":
      return 0.1;
    case "%":
    case "V":
    case "hPa":
    case "mbar":
    case "dB":
    case "dBm":
      return 1;
    case "W":
    case "VA":
    case "var":
    case "ppm":
    case "lx":
    case "\xB5g/m\xB3":
      return Math.abs(sample) >= 1e3 ? 10 : 1;
    case "kW":
    case "kWh":
    case "kVA":
      return 0.01;
    default:
      return Math.abs(sample) >= 100 ? 1 : Math.abs(sample) >= 10 ? 0.1 : 0.01;
  }
}
function quantise(value, step) {
  if (!Number.isFinite(value)) return "unknown";
  const decimals = step >= 1 ? 0 : Math.min(6, Math.max(0, Math.round(-Math.log10(step))));
  const v2 = Math.round(value / step) * step;
  const s4 = v2.toFixed(decimals);
  return /^-0(\.0*)?$/.test(s4) ? s4.slice(1) : s4;
}

// src/timetravel/timeline.ts
var valueOf = (w2) => typeof w2 === "string" ? { s: w2, a: null } : { s: String(w2[0]), a: w2[1] && typeof w2[1] === "object" ? w2[1] : null };
var keyOf = (v2) => `${v2.s}\0${v2.a ? JSON.stringify(v2.a) : ""}`;
function buildTimeline(days) {
  const sorted = [...days].sort((a3, b3) => a3.day_start - b3.day_start);
  const rows = /* @__PURE__ */ new Map();
  const stats = /* @__PURE__ */ new Map();
  const missing = /* @__PURE__ */ new Set();
  let start = Infinity;
  let end = -Infinity;
  let oldest = null;
  let anyBefore = false;
  let keepDays = null;
  for (const d3 of sorted) {
    start = Math.min(start, d3.day_start * 1e3);
    end = Math.max(end, d3.end * 1e3);
    if (d3.oldest === null) anyBefore = true;
    else oldest = oldest === null ? d3.oldest * 1e3 : Math.min(oldest, d3.oldest * 1e3);
    keepDays ??= d3.keep_days;
    for (const [id, e4] of Object.entries(d3.entities ?? {})) {
      const list = rows.get(id) ?? [];
      const base = d3.day_start * 1e3;
      const n4 = Math.min(e4.t.length, e4.v.length);
      for (let i5 = 0; i5 < n4; i5++) {
        const w2 = e4.tab[e4.v[i5]];
        if (w2 === void 0) continue;
        const v2 = valueOf(w2);
        const k2 = keyOf(v2);
        const prev = list[list.length - 1];
        const t3 = base + e4.t[i5] * 1e3;
        if (prev && (t3 < prev.t || prev.k === k2)) continue;
        list.push({ t: t3, v: v2, k: k2 });
      }
      rows.set(id, list);
    }
    for (const [id, s4] of Object.entries(d3.stats ?? {})) {
      const list = stats.get(id) ?? [];
      list.push({ start: s4.start * 1e3, step: s4.step * 1e3, mean: s4.mean });
      stats.set(id, list);
    }
    for (const id of d3.missing ?? []) missing.add(id);
  }
  const tracks = /* @__PURE__ */ new Map();
  for (const [id, list] of rows) {
    if (!list.length) continue;
    const values = [];
    const index = /* @__PURE__ */ new Map();
    const times = new Float64Array(list.length);
    const vals = new Uint32Array(list.length);
    const since = new Float64Array(list.length);
    for (let i5 = 0; i5 < list.length; i5++) {
      let k2 = index.get(list[i5].k);
      if (k2 === void 0) {
        k2 = values.length;
        values.push(list[i5].v);
        index.set(list[i5].k, k2);
      }
      times[i5] = list[i5].t;
      vals[i5] = k2;
      since[i5] = i5 > 0 && list[i5 - 1].v.s === list[i5].v.s ? since[i5 - 1] : list[i5].t;
    }
    tracks.set(id, { id, times, vals, values, since });
    missing.delete(id);
  }
  const series = /* @__PURE__ */ new Map();
  for (const [id, parts] of stats) {
    const step = parts[0].step;
    if (!(step > 0)) continue;
    const first = Math.min(...parts.map((p3) => p3.start));
    const last = Math.max(...parts.map((p3) => p3.start + p3.mean.length * p3.step));
    const n4 = Math.max(0, Math.round((last - first) / step));
    if (!n4) continue;
    const mean = new Float32Array(n4).fill(NaN);
    for (const p3 of parts)
      p3.mean.forEach((m2, i5) => {
        const slot = Math.round((p3.start + i5 * p3.step - first) / step);
        if (typeof m2 === "number" && Number.isFinite(m2) && slot >= 0 && slot < n4) mean[slot] = m2;
      });
    if (mean.every((m2) => Number.isNaN(m2))) continue;
    series.set(id, { id, start: first, step, mean });
    missing.delete(id);
  }
  return {
    start: Number.isFinite(start) ? start : 0,
    end: Number.isFinite(end) ? end : 0,
    oldest: anyBefore ? null : oldest,
    keepDays,
    tracks,
    series,
    missing
  };
}
function indexAt(times, t3) {
  let lo = 0;
  let hi = times.length - 1;
  if (hi < 0 || times[0] > t3) return -1;
  while (lo < hi) {
    const mid = lo + hi + 1 >> 1;
    if (times[mid] <= t3) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}
var Cursor = class {
  tracks;
  idx;
  t = -Infinity;
  constructor(timeline) {
    this.tracks = [...timeline.tracks.values()];
    this.idx = new Int32Array(this.tracks.length).fill(-1);
  }
  /** Moves to t; returns the positions (index per track, -1 before the first row). */
  at(t3) {
    const forward = t3 >= this.t;
    for (let i5 = 0; i5 < this.tracks.length; i5++) {
      const times = this.tracks[i5].times;
      let k2 = this.idx[i5];
      if (!forward) k2 = indexAt(times, t3);
      else {
        let steps = 0;
        while (k2 + 1 < times.length && times[k2 + 1] <= t3 && steps < 8) {
          k2++;
          steps++;
        }
        if (k2 + 1 < times.length && times[k2 + 1] <= t3) k2 = indexAt(times, t3);
      }
      this.idx[i5] = k2;
    }
    this.t = t3;
    return this.idx;
  }
  /** The value of a track at the cursor (null before its first row). */
  value(i5) {
    const k2 = this.idx[i5];
    return k2 < 0 ? null : this.tracks[i5].values[this.tracks[i5].vals[k2]];
  }
};
var NO_DATA = /* @__PURE__ */ new Set(["unavailable", "unknown"]);
function findGaps(timeline, stepMs = 5 * 6e4, share = 0.6, minMs = 10 * 6e4, after = -Infinity) {
  const cursor = new Cursor(timeline);
  if (!cursor.tracks.length) return [];
  const from = Math.max(timeline.oldest ?? timeline.start, after);
  const out = [];
  let open = null;
  for (let t3 = from; t3 <= timeline.end; t3 += stepMs) {
    cursor.at(t3);
    let bad = 0;
    for (let i5 = 0; i5 < cursor.tracks.length; i5++) {
      const v2 = cursor.value(i5);
      if (!v2 || NO_DATA.has(v2.s)) bad++;
    }
    const gap = bad / cursor.tracks.length >= share;
    if (gap && open === null) open = t3;
    if (!gap && open !== null) {
      if (t3 - open >= minMs) out.push([open, t3]);
      open = null;
    }
  }
  if (open !== null && timeline.end - open >= minMs) out.push([open, timeline.end]);
  return out;
}
function fillSince(track) {
  for (let i5 = 0; i5 < track.times.length; i5++)
    track.since[i5] = i5 > 0 && track.values[track.vals[i5 - 1]].s === track.values[track.vals[i5]].s ? track.since[i5 - 1] : track.times[i5];
}
function joinTracks(older, newer) {
  const values = [...older.values];
  const index = new Map(values.map((v2, i5) => [keyOf(v2), i5]));
  const remap = newer.values.map((v2) => {
    const k2 = keyOf(v2);
    let i5 = index.get(k2);
    if (i5 === void 0) {
      i5 = values.length;
      values.push(v2);
      index.set(k2, i5);
    }
    return i5;
  });
  const first = newer.times.length ? newer.times[0] : Infinity;
  const times = [];
  const vals = [];
  for (let i5 = 0; i5 < older.times.length && older.times[i5] < first; i5++) {
    times.push(older.times[i5]);
    vals.push(older.vals[i5]);
  }
  for (let i5 = 0; i5 < newer.times.length; i5++) {
    const v2 = remap[newer.vals[i5]];
    if (vals.length && vals[vals.length - 1] === v2) continue;
    times.push(newer.times[i5]);
    vals.push(v2);
  }
  const track = { id: older.id, times: Float64Array.from(times), vals: Uint32Array.from(vals), values, since: new Float64Array(times.length) };
  if (older.dropped || newer.dropped) track.dropped = Float64Array.from([...older.dropped ?? [], ...newer.dropped ?? []]).sort();
  fillSince(track);
  return track;
}
function joinSeries(a3, b3) {
  const step = a3.step;
  const first = Math.min(a3.start, b3.start);
  const last = Math.max(a3.start + a3.mean.length * a3.step, b3.start + b3.mean.length * b3.step);
  const n4 = Math.max(0, Math.round((last - first) / step));
  const mean = new Float32Array(n4).fill(NaN);
  for (const s4 of [a3, b3])
    for (let i5 = 0; i5 < s4.mean.length; i5++) {
      const slot = Math.round((s4.start + i5 * s4.step - first) / step);
      if (!Number.isNaN(s4.mean[i5]) && slot >= 0 && slot < n4) mean[slot] = s4.mean[i5];
    }
  return { id: a3.id, start: first, step, mean };
}
function mergeTimelines(a3, b3) {
  const [older, newer] = a3.start <= b3.start ? [a3, b3] : [b3, a3];
  const tracks = /* @__PURE__ */ new Map();
  for (const id of /* @__PURE__ */ new Set([...older.tracks.keys(), ...newer.tracks.keys()])) {
    const x2 = older.tracks.get(id);
    const y3 = newer.tracks.get(id);
    tracks.set(id, x2 && y3 ? joinTracks(x2, y3) : x2 ?? y3);
  }
  const series = /* @__PURE__ */ new Map();
  for (const id of /* @__PURE__ */ new Set([...older.series.keys(), ...newer.series.keys()])) {
    const x2 = older.series.get(id);
    const y3 = newer.series.get(id);
    series.set(id, x2 && y3 ? joinSeries(x2, y3) : x2 ?? y3);
  }
  const missing = new Set([...older.missing, ...newer.missing].filter((id) => !tracks.has(id) && !series.has(id)));
  const oldest = older.oldest === null ? null : older.oldest < older.end ? older.oldest : newer.oldest ?? newer.start;
  return { start: older.start, end: Math.max(older.end, newer.end), oldest, keepDays: newer.keepDays ?? older.keepDays, tracks, series, missing };
}
function rowCount(timeline) {
  let n4 = 0;
  for (const t3 of timeline.tracks.values()) n4 += t3.times.length;
  return n4;
}
function timelineBytes(timeline) {
  let bytes = 0;
  for (const t3 of timeline.tracks.values()) bytes += t3.times.length * 20 + t3.values.length * 120;
  for (const s4 of timeline.series.values()) bytes += s4.mean.length * 4;
  return bytes;
}
var THIN_ROWS = 3e5;
function thinPulses(timeline, ids, minMs = 6e4, coverMs = 5 * 6e4) {
  let dropped = 0;
  for (const id of ids) {
    const track = timeline.tracks.get(id);
    if (!track || track.times.length < 3) continue;
    const n4 = track.times.length;
    const s4 = (k2) => track.values[track.vals[k2]].s;
    const keep = [];
    const gone = [];
    let covered = null;
    for (let k2 = 0; k2 < n4; k2++) {
      const prev = keep.length ? keep[keep.length - 1] : -1;
      if (prev >= 0 && covered !== null && s4(prev) === "off" && s4(k2) === "on" && k2 + 1 < n4 && s4(k2 + 1) === "off" && track.times[k2 + 1] - track.times[k2] < minMs && track.times[k2] - covered <= coverMs) {
        gone.push(track.times[k2]);
        k2++;
        dropped += 2;
        continue;
      }
      if (prev >= 0 && track.vals[prev] === track.vals[k2]) {
        dropped++;
        continue;
      }
      if (prev >= 0 && s4(prev) === "on" && s4(k2) !== "on") covered = track.times[k2];
      keep.push(k2);
    }
    if (keep.length === n4) continue;
    const times = Float64Array.from(keep, (k2) => track.times[k2]);
    const vals = Uint32Array.from(keep, (k2) => track.vals[k2]);
    track.times = times;
    track.vals = vals;
    track.since = new Float64Array(keep.length);
    if (gone.length) track.dropped = Float64Array.from([...track.dropped ?? [], ...gone]).sort();
    fillSince(track);
  }
  return dropped;
}
var indexes = /* @__PURE__ */ new WeakMap();
function valueIndex(track) {
  let index = indexes.get(track);
  if (!index || index.size !== track.values.length) {
    index = new Map(track.values.map((v2, i5) => [keyOf(v2), i5]));
    indexes.set(track, index);
  }
  return index;
}
function appendRows(track, rows) {
  const index = valueIndex(track);
  const n4 = track.times.length;
  let lastT = n4 ? track.times[n4 - 1] : -Infinity;
  let lastV = n4 ? track.vals[n4 - 1] : -1;
  const times = [];
  const vals = [];
  for (const r4 of rows) {
    if (r4.t < lastT) continue;
    const key = keyOf(r4.v);
    let v3 = index.get(key);
    if (v3 === lastV) continue;
    if (v3 === void 0) {
      v3 = track.values.length;
      track.values.push(r4.v);
      index.set(key, v3);
    }
    times.push(r4.t);
    vals.push(v3);
    lastT = r4.t;
    lastV = v3;
  }
  if (!times.length) return 0;
  const m2 = n4 + times.length;
  const t22 = new Float64Array(m2);
  t22.set(track.times);
  t22.set(times, n4);
  const v2 = new Uint32Array(m2);
  v2.set(track.vals);
  v2.set(vals, n4);
  const since = new Float64Array(m2);
  since.set(track.since);
  for (let i5 = n4; i5 < m2; i5++) since[i5] = i5 > 0 && track.values[v2[i5 - 1]].s === track.values[v2[i5]].s ? since[i5 - 1] : t22[i5];
  track.times = t22;
  track.vals = v2;
  track.since = since;
  return times.length;
}
function appendSeriesValues(series, rows) {
  let last = -1;
  for (const r4 of rows) if (Number.isFinite(r4.value) && r4.t >= series.start) last = Math.max(last, Math.floor((r4.t - series.start) / series.step));
  if (last < 0) return 0;
  if (last >= series.mean.length) {
    const mean = new Float32Array(last + 1).fill(NaN);
    mean.set(series.mean);
    series.mean = mean;
  }
  let added = 0;
  for (const r4 of rows) {
    if (!Number.isFinite(r4.value) || r4.t < series.start) continue;
    const slot = Math.floor((r4.t - series.start) / series.step);
    if (!Number.isNaN(series.mean[slot])) continue;
    series.mean[slot] = r4.value;
    added++;
  }
  return added;
}
function newTrack(id, rows) {
  const track = { id, times: new Float64Array(0), vals: new Uint32Array(0), values: [], since: new Float64Array(0) };
  return appendRows(track, rows) ? track : null;
}
function trimTimeline(timeline, from) {
  if (from <= timeline.start) return timeline;
  const tracks = /* @__PURE__ */ new Map();
  for (const [id, tr] of timeline.tracks) {
    const k2 = Math.max(0, indexAt(tr.times, from));
    if (k2 === 0) {
      tracks.set(id, tr);
      continue;
    }
    const track = { id, times: tr.times.slice(k2), vals: tr.vals.slice(k2), values: tr.values, since: tr.since.slice(k2) };
    if (tr.dropped) track.dropped = tr.dropped.filter((t3) => t3 >= from);
    tracks.set(id, track);
  }
  const series = /* @__PURE__ */ new Map();
  for (const [id, s4] of timeline.series) {
    const skip = Math.max(0, Math.floor((from - s4.start) / s4.step));
    series.set(id, skip ? { id, start: s4.start + skip * s4.step, step: s4.step, mean: s4.mean.slice(skip) } : s4);
  }
  const oldest = timeline.oldest !== null && timeline.oldest > from ? timeline.oldest : null;
  return { ...timeline, start: from, oldest, tracks, series };
}
function statRows(timeline, ids, from, to) {
  const out = {};
  const step = 3e5;
  for (const id of ids) {
    const s4 = timeline.series.get(id);
    const track = timeline.tracks.get(id);
    if (!s4 && !track) continue;
    const list = [];
    for (let t3 = Math.floor(from / step) * step; t3 < to; t3 += step) {
      let m2 = NaN;
      if (s4) {
        const slot = Math.floor((t3 + step / 2 - s4.start) / s4.step);
        m2 = slot >= 0 && slot < s4.mean.length ? s4.mean[slot] : NaN;
      } else if (track) {
        const k2 = indexAt(track.times, t3 + step / 2);
        m2 = k2 < 0 ? NaN : Number(track.values[track.vals[k2]].s);
      }
      if (Number.isFinite(m2)) list.push({ start: t3, mean: m2 });
    }
    if (list.length) out[id] = list;
  }
  return out;
}

// src/timetravel/tz.ts
var HOUR = 36e5;
var current = null;
function zoneOf(hass) {
  const profile = hass?.locale?.time_zone;
  const server = hass?.config?.time_zone;
  if (profile !== "server" || !server) return null;
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: server });
    return server;
  } catch {
    return null;
  }
}
function setZone(zone) {
  current = zone;
}
var formats = /* @__PURE__ */ new Map();
function partsFormat(zone) {
  let f3 = formats.get(zone);
  if (!f3) {
    f3 = new Intl.DateTimeFormat("en-US", { timeZone: zone, hourCycle: "h23", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" });
    formats.set(zone, f3);
  }
  return f3;
}
function wall(t3, zone) {
  const out = [0, 0, 0, 0, 0, 0];
  for (const p3 of partsFormat(zone).formatToParts(t3)) {
    const v2 = Number(p3.value);
    if (p3.type === "year") out[0] = v2;
    else if (p3.type === "month") out[1] = v2 - 1;
    else if (p3.type === "day") out[2] = v2;
    else if (p3.type === "hour") out[3] = v2 % 24;
    else if (p3.type === "minute") out[4] = v2;
    else if (p3.type === "second") out[5] = v2;
  }
  return out;
}
function offset(t3, zone) {
  const [y3, mo, d3, h3, mi, s4] = wall(t3, zone);
  const whole = t3 - (t3 % 1e3 + 1e3) % 1e3;
  return Date.UTC(y3, mo, d3, h3, mi, s4) - whole;
}
function hourOf(t3, zone = current) {
  return zone ? wall(t3, zone)[3] : new Date(t3).getHours();
}
function dayStart(t3, zone = current) {
  if (!zone) return new Date(t3).setHours(0, 0, 0, 0);
  const [y3, mo, d3] = wall(t3, zone);
  let m2 = Date.UTC(y3, mo, d3) - offset(t3, zone);
  m2 = Date.UTC(y3, mo, d3) - offset(m2, zone);
  return m2;
}
function nextDay(t3, zone = current) {
  return dayStart(dayStart(t3, zone) + 27 * HOUR, zone);
}
function hourStart(t3, zone = current) {
  if (!zone) return new Date(t3).setMinutes(0, 0, 0);
  const [, , , , mi, s4] = wall(t3, zone);
  return t3 - (t3 % 1e3 + 1e3) % 1e3 - (mi * 60 + s4) * 1e3;
}
function atClock(t3, hours, minutes, zone = current) {
  if (!zone) {
    const d3 = new Date(t3);
    d3.setHours(hours, minutes, 0, 0);
    return d3.getTime();
  }
  const base = dayStart(t3, zone);
  const guess = base + (hours * 60 + minutes) * 6e4;
  return guess - (offset(guess, zone) - offset(base, zone));
}
function zoneOption(zone = current) {
  return zone ? { timeZone: zone } : {};
}

// src/timetravel/events.ts
var RANK = {
  alarm: 100,
  smoke: 95,
  gas: 95,
  co: 95,
  water: 90,
  outage: 88,
  rain: 70,
  door: 50,
  lock: 45,
  garage: 40,
  camera: 38,
  motion: 35,
  washer: 25,
  robot_done: 20,
  robot_start: 15,
  window: 12,
  battery_full: 10,
  pv_peak: 8
};
var MINOR = /* @__PURE__ */ new Set(["window", "battery_full", "pv_peak"]);
var IMPORTANT = /* @__PURE__ */ new Set(["alarm", "smoke", "gas", "co", "water", "outage"]);
var CATEGORY = {
  alarm: "safety",
  smoke: "safety",
  gas: "safety",
  co: "safety",
  water: "safety",
  outage: "safety",
  motion: "safety",
  camera: "safety",
  door: "openings",
  lock: "openings",
  garage: "openings",
  rain: "openings",
  window: "openings",
  washer: "devices",
  robot_start: "devices",
  robot_done: "devices",
  battery_full: "energy",
  pv_peak: "energy"
};
var RAIN = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning-rainy", "hail", "snowy-rainy"]);
var OPEN = /* @__PURE__ */ new Set(["on", "open", "opening", "tilted"]);
function sleepTime(t3) {
  const h3 = hourOf(t3);
  return h3 >= 23 || h3 < 5;
}
function* changes(track) {
  let prev = null;
  for (let k2 = 0; k2 < track.times.length; k2++) {
    const s4 = track.values[track.vals[k2]].s;
    if (s4 !== prev) yield { t: track.times[k2], from: prev, to: s4 };
    prev = s4;
  }
}
function spans(track, states, end) {
  const out = [];
  let open = null;
  for (const c4 of changes(track)) {
    const on = states.has(c4.to);
    if (on && open === null) open = c4.t;
    if (!on && open !== null) {
      out.push([open, c4.t]);
      open = null;
    }
  }
  if (open !== null) out.push([open, end]);
  return out;
}
function powerPoints(timeline, id) {
  const track = timeline.tracks.get(id);
  if (track) {
    const out2 = [];
    for (let k2 = 0; k2 < track.times.length; k2++) {
      const w2 = Number(track.values[track.vals[k2]].s);
      if (Number.isFinite(w2)) out2.push({ t: track.times[k2], w: w2 });
    }
    return out2;
  }
  const s4 = timeline.series.get(id);
  if (!s4) return [];
  const out = [];
  for (let i5 = 0; i5 < s4.mean.length; i5++) {
    const t3 = s4.start + (i5 + 0.5) * s4.step;
    const w2 = seriesValue(s4, t3);
    if (Number.isFinite(w2)) out.push({ t: t3, w: w2 });
  }
  return out;
}
function machineDone(points, on = 10, off = 5, minRunMs = 20 * 6e4) {
  const out = [];
  let since = null;
  for (const p3 of points) {
    if (since === null && p3.w > on) since = p3.t;
    else if (since !== null && p3.w < off) {
      if (p3.t - since >= minRunMs) out.push(p3.t);
      since = null;
    }
  }
  return out;
}
function sampled(timeline, id, from, to, step = 3e5) {
  const n4 = Math.max(0, Math.ceil((to - from) / step));
  const out = new Float64Array(n4).fill(NaN);
  const s4 = timeline.series.get(id);
  const track = timeline.tracks.get(id);
  for (let i5 = 0; i5 < n4; i5++) {
    const t3 = from + (i5 + 0.5) * step;
    if (s4) out[i5] = seriesValue(s4, t3);
    else if (track) {
      const k2 = indexAt(track.times, t3);
      out[i5] = k2 < 0 ? NaN : Number(track.values[track.vals[k2]].s);
    }
  }
  return out;
}
function energyEvents(timeline, energy) {
  const out = [];
  const step = 3e5;
  const from = Math.floor(timeline.start / step) * step;
  for (const id of energy.soc) {
    const v2 = sampled(timeline, id, from, timeline.end);
    let low = false;
    v2.forEach((x2, i5) => {
      if (Number.isNaN(x2)) return;
      if (x2 < 95) low = true;
      else if (x2 >= 99 && low) {
        low = false;
        out.push({ t: from + (i5 + 0.5) * step, kind: "battery_full", entity: id });
      }
    });
  }
  if (energy.solar.length) {
    const sums = energy.solar.map((id) => sampled(timeline, id, from, timeline.end));
    const n4 = sums[0].length;
    let day = -1;
    let best = { t: 0, w: 0 };
    const flush = () => {
      if (best.w > 100) out.push({ t: best.t, kind: "pv_peak", entity: energy.solar[0] });
      best = { t: 0, w: 0 };
    };
    for (let i5 = 0; i5 < n4; i5++) {
      const t3 = from + (i5 + 0.5) * step;
      const d3 = dayStart(t3);
      if (d3 !== day) {
        if (day >= 0) flush();
        day = d3;
      }
      let w2 = 0;
      for (const s4 of sums) if (!Number.isNaN(s4[i5])) w2 += Math.max(0, s4[i5]);
      if (w2 > best.w) best = { t: t3, w: w2 };
    }
    if (day >= 0 && (timeline.end >= nextDay(day) || !!energy.sunDown?.(timeline.end))) flush();
  }
  return out;
}
function findEvents({ timeline, roles, weather, night = sleepTime, energy = null, outage = null }) {
  const raw = [];
  const add = (t3, kind, entity) => {
    if (t3 >= timeline.start && t3 <= timeline.end) raw.push({ t: t3, kind, entity });
  };
  const rainTrack = weather ? timeline.tracks.get(weather) : void 0;
  const rain = rainTrack ? spans(rainTrack, RAIN, timeline.end) : [];
  for (const [id, role] of roles) {
    if (role === "washer") {
      for (const t3 of machineDone(powerPoints(timeline, id))) add(t3, "washer", id);
      continue;
    }
    const track = timeline.tracks.get(id);
    if (!track) continue;
    if (role === "window" || role === "window_more") {
      for (const [o0, o1] of spans(track, OPEN, timeline.end)) {
        if (role === "window" && o0 > timeline.start && o0 > track.times[0]) add(o0, "window", id);
        for (const [r0, r1] of rain) if (o0 < r1 && r0 < o1) add(Math.max(o0, r0), "rain", id);
      }
      continue;
    }
    for (const c4 of changes(track)) {
      if (c4.from === null) continue;
      switch (role) {
        case "door":
          if (OPEN.has(c4.to) && !OPEN.has(c4.from)) add(c4.t, "door", id);
          break;
        case "garage":
          if ((c4.to === "on" || c4.to === "open" || c4.to === "opening") && (c4.from === "off" || c4.from === "closed" || c4.from === "closing")) add(c4.t, "garage", id);
          break;
        case "lock":
          if ((c4.to === "unlocked" || c4.to === "open") && (c4.from === "locked" || c4.from === "locking")) add(c4.t, "lock", id);
          break;
        case "alarm":
          if (c4.to === "triggered") add(c4.t, "alarm", id);
          break;
        case "smoke":
        case "gas":
        case "co":
        case "water":
          if (c4.to === "on" && c4.from !== "on") add(c4.t, role, id);
          break;
        case "motion":
          if (c4.to === "on" && c4.from === "off" && night(c4.t)) add(c4.t, "motion", id);
          break;
        case "camera":
          if (c4.to === "on" && c4.from !== "on") add(c4.t, "camera", id);
          break;
        case "robot":
          if (c4.to === "cleaning" && c4.from !== "cleaning" && c4.from !== "paused") add(c4.t, "robot_start", id);
          else if (c4.to === "docked" && (c4.from === "cleaning" || c4.from === "returning" || c4.from === "paused")) add(c4.t, "robot_done", id);
          break;
      }
    }
  }
  if (energy) for (const e4 of energyEvents(timeline, energy)) add(e4.t, e4.kind, e4.entity);
  const outageTrack = outage ? timeline.tracks.get(outage.id) : void 0;
  if (outage && outageTrack) {
    const out = (state) => isOutage({ entity_id: outage.id, state, attributes: outage.attributes });
    for (const c4 of changes(outageTrack)) if (c4.from !== null && out(c4.to) && !out(c4.from)) add(c4.t, "outage", outage.id);
  }
  raw.sort((a3, b3) => a3.t - b3.t || RANK[b3.kind] - RANK[a3.kind]);
  const last = /* @__PURE__ */ new Map();
  return raw.filter((e4) => {
    const key = `${e4.kind}:${e4.entity}`;
    const prev = last.get(key);
    const quiet = e4.kind === "motion" ? 30 * 6e4 : 5 * 6e4;
    if (prev !== void 0 && e4.t - prev < quiet) return false;
    last.set(key, e4.t);
    return true;
  });
}
function groupByHour(events, show) {
  const out = [];
  for (let i5 = events.length - 1; i5 >= 0; i5--) {
    const e4 = events[i5];
    if (!show.has(CATEGORY[e4.kind])) continue;
    const hour = hourStart(e4.t);
    const g2 = out[out.length - 1];
    if (g2 && g2.hour === hour) g2.events.unshift(e4);
    else out.push({ hour, events: [e4] });
  }
  return out;
}
function clusterEvents(events, xOf, minPx = 14) {
  const out = [];
  for (const e4 of events) {
    const x2 = xOf(e4.t);
    const c4 = out[out.length - 1];
    if (c4 && x2 - c4.x < minPx) {
      c4.events.push(e4);
      if (RANK[e4.kind] > RANK[c4.top.kind]) {
        c4.top = e4;
        c4.t = e4.t;
      }
    } else out.push({ x: x2, t: e4.t, top: e4, events: [e4] });
  }
  return out;
}

// src/timetravel/playback.ts
var SPEEDS = [60, 360, 900, 3600];
var WEEK_SPEEDS = [60, 360, 900, 3600, 14400];
var DEFAULT_SPEED = 360;
function tickMs(quality, low) {
  if (quality === "low" || low) return 500;
  return quality === "high" ? 167 : 250;
}
var Playback = class {
  /** The range it plays in (an older day loaded later moves the start, the live edge the end). */
  start;
  end;
  t;
  playing = false;
  speed;
  speeds;
  constructor(start, end, t3, speed = DEFAULT_SPEED, speeds = SPEEDS) {
    this.start = start;
    this.end = end;
    this.speeds = speeds;
    this.t = Math.min(end, Math.max(start, t3));
    this.speed = speeds.includes(speed) ? speed : DEFAULT_SPEED;
  }
  /** A new range (and the speeds offered in it); the moment stays within it. */
  setRange(start, end, speeds = this.speeds) {
    this.start = start;
    this.end = end;
    this.speeds = speeds;
    if (!speeds.includes(this.speed)) this.speed = speeds.includes(3600) ? 3600 : speeds[speeds.length - 1];
    this.t = Math.min(end, Math.max(start, this.t));
  }
  /** Play from where it stands; at the end it starts over. */
  play() {
    if (this.t >= this.end) this.t = this.start;
    this.playing = true;
  }
  pause() {
    this.playing = false;
  }
  toggle() {
    if (this.playing) this.pause();
    else this.play();
  }
  /** Jump to t (kept within the range). */
  seek(t3) {
    this.t = Math.min(this.end, Math.max(this.start, t3));
  }
  /** Real time passed (ms): the replayed moment moves on by speed × that; at the end it stops. */
  advance(realMs) {
    if (!this.playing || !(realMs > 0)) return false;
    const next = Math.min(this.end, this.t + realMs * this.speed);
    const moved = next !== this.t;
    this.t = next;
    if (this.t >= this.end) this.playing = false;
    return moved;
  }
  /** The next speed (after the fastest the slowest again). */
  nextSpeed() {
    const i5 = this.speeds.indexOf(this.speed);
    this.speed = this.speeds[(i5 + 1) % this.speeds.length];
    return this.speed;
  }
};
function eventNear(events, t3, dir, marginMs = 3e4) {
  if (dir > 0) return events.find((e4) => e4.t > t3 + marginMs) ?? null;
  for (let i5 = events.length - 1; i5 >= 0; i5--) if (events[i5].t < t3 - marginMs) return events[i5];
  return null;
}
function eventsIn(events, from, to) {
  let lo = 0;
  let hi = events.length;
  while (lo < hi) {
    const mid = lo + hi >> 1;
    if (events[mid].t < from) lo = mid + 1;
    else hi = mid;
  }
  let end = lo;
  while (end < events.length && events[end].t <= to) end++;
  return lo === 0 && end === events.length ? events : events.slice(lo, end);
}
function crossedEvent(events, from, to, pick) {
  if (!(to > from)) return null;
  let lo = 0;
  let hi = events.length;
  while (lo < hi) {
    const mid = lo + hi >> 1;
    if (events[mid].t <= from) lo = mid + 1;
    else hi = mid;
  }
  for (let i5 = lo; i5 < events.length && events[i5].t <= to; i5++) if (pick(events[i5])) return events[i5];
  return null;
}
function parseMoment(text, now) {
  const s4 = (text ?? "").trim();
  const rel = /^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(s4);
  if (rel) return now - Number(rel[1].replace(",", ".")) * (rel[2].toLowerCase() === "h" ? 36e5 : 6e4);
  const clock = /^(\d{1,2}):(\d{2})$/.exec(s4);
  if (!clock || Number(clock[1]) > 23 || Number(clock[2]) > 59) return null;
  const at = atClock(now, Number(clock[1]), Number(clock[2]));
  return at > now ? atClock(at - 864e5, Number(clock[1]), Number(clock[2])) : at;
}

// src/units.ts
function hourCycle(hass) {
  const format = hass?.locale?.time_format;
  if (format === "12") return { hourCycle: "h12" };
  if (format === "24") return { hourCycle: "h23" };
  if (format === "system") {
    try {
      const cycle = new Intl.DateTimeFormat(void 0, { hour: "numeric" }).resolvedOptions().hourCycle;
      return cycle ? { hourCycle: cycle === "h11" || cycle === "h12" ? "h12" : "h23" } : {};
    } catch {
      return {};
    }
  }
  return {};
}

// src/components/time-bar.ts
var ICONS = {
  prev: "M6 6h2v12H6zM20 6v12l-10-6z",
  play: "M8 5v14l11-7z",
  pause: "M7 5h4v14H7zM13 5h4v14h-4z",
  next: "M16 6h2v12h-2zM4 6v12l10-6z",
  list: "M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"
};
var icon = (d3) => w`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${d3} /></svg>`;
var COLOR = {
  alarm: "#ff3b4f",
  smoke: "#ff3b4f",
  outage: "#ffc83a",
  gas: "#ff3b4f",
  co: "#ff3b4f",
  water: "#3aa0ff",
  rain: "#6cc8ff",
  door: "#ffb020",
  lock: "#ffb020",
  garage: "#ffb020",
  window: "#ffd27a",
  motion: "#b48cff",
  camera: "#e07aff",
  washer: "#4dff9a",
  robot_start: "#4dff9a",
  robot_done: "#4dff9a",
  battery_full: "#ffe27a",
  pv_peak: "#ffe27a"
};
var AWAY_COLOR = {
  alarm: "#ff3b4f",
  door: "#ffb020",
  window: "#ffd27a",
  window_open: "#6cc8ff",
  light_on: "#ffe27a",
  motion: "#b48cff",
  appliance: "#4dff9a"
};
var Fp3dTimeBar = class extends i4 {
  static properties = {
    session: { attribute: false },
    _w: { state: true },
    _label: { state: true },
    _toast: { state: true },
    _sheet: { state: true },
    _filters: { state: true },
    _awayFrom: { state: true },
    _compare: { state: true }
  };
  unlisten = null;
  listened = null;
  resize = null;
  sig = "";
  dragging = false;
  scrubAt = 0;
  scrubTimer;
  holdTimer;
  held = false;
  labelTimer;
  toastTimer;
  clusters = [];
  clusterSig = "";
  awayOffer = null;
  awayCache = null;
  constructor() {
    super();
    this.session = null;
    this._w = 0;
    this._label = null;
    this._toast = false;
    this._sheet = null;
    this._filters = /* @__PURE__ */ new Set(["safety", "openings", "devices", "energy"]);
    this._awayFrom = null;
    this._compare = false;
  }
  onBlocked = () => {
    this._toast = true;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this._toast = false, 2600);
  };
  onKey = (e4) => {
    const s4 = this.session;
    const target = e4.composedPath()[0];
    if (!s4?.playback || e4.ctrlKey || e4.metaKey || e4.altKey || target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target?.isContentEditable) return;
    if (e4.key === " ") {
      if (target?.tagName === "BUTTON") return;
      e4.preventDefault();
      s4.toggle();
    } else if (e4.key === "ArrowLeft" || e4.key === "ArrowRight") {
      e4.preventDefault();
      s4.seek(s4.playback.t + (e4.key === "ArrowLeft" ? -1 : 1) * (e4.shiftKey ? 36e5 : 3e5));
    }
  };
  /** Esc closes the sheet first (before the host leaves the time travel). */
  onEscape = (e4) => {
    if (e4.key !== "Escape" || !this._sheet) return;
    e4.stopImmediatePropagation();
    this._sheet = null;
  };
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("fp3d-replay-blocked", this.onBlocked);
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("keydown", this.onEscape, true);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("fp3d-replay-blocked", this.onBlocked);
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("keydown", this.onEscape, true);
    this.unlisten?.();
    this.unlisten = null;
    this.listened = null;
    this.resize?.disconnect();
    this.resize = null;
    for (const t3 of [this.scrubTimer, this.holdTimer, this.labelTimer, this.toastTimer]) clearTimeout(t3);
  }
  updated() {
    if (this.session !== this.listened) {
      this.unlisten?.();
      this.listened = this.session;
      this.unlisten = this.session ? this.session.listen(() => this.onTick()) : null;
    }
    const track = this.renderRoot.querySelector(".track");
    if (track && !this.resize && typeof ResizeObserver === "function") {
      this.resize = new ResizeObserver((entries) => {
        const w2 = Math.round(entries[0]?.contentRect.width ?? 0);
        if (w2 !== this._w) this._w = w2;
      });
      this.resize.observe(track);
    }
    this.onTick();
  }
  /** What needs a real render (not just the clock and the playhead). */
  signature() {
    const s4 = this.session;
    const pb = s4?.playback;
    const day = this._sheet === "day" && pb ? dayStart(pb.t) : 0;
    return `${s4?.state}|${s4?.error}|${Math.round((s4?.progress ?? 0) * 20)}|${pb?.playing}|${pb?.speed}|${s4?.events.length}|${s4?.allEvents.length}|${s4?.range}|${s4?.maxDays}|${s4?.loadingDay}|${s4?.full}|${s4?.version}|${s4?.atNow}|${s4?.follow}|${s4?.stopImportant}|${day}`;
  }
  /** Every change of the session: the clock and the playhead directly; a re-render only when needed. */
  onTick() {
    const sig = this.signature();
    if (sig !== this.sig) {
      this.sig = sig;
      this.requestUpdate();
    }
    const s4 = this.session;
    const pb = s4?.playback;
    if (!s4 || !pb) return;
    const time = this.renderRoot.querySelector(".clock-time");
    const ago = this.renderRoot.querySelector(".clock-ago");
    if (time) time.textContent = this.clockText(pb.t);
    if (ago) ago.textContent = this.agoText(pb.t);
    if (!this.dragging) this.placeHead(this.xOf(pb.t));
  }
  placeHead(x2) {
    const head = this.renderRoot.querySelector(".head");
    if (head) head.style.transform = `translateX(${x2.toFixed(1)}px)`;
  }
  get language() {
    return this.session?.opts.live.language ?? navigator.language;
  }
  xOf(t3) {
    const s4 = this.session;
    if (!s4 || !this._w) return 0;
    return (t3 - s4.start) / (s4.end - s4.start) * this._w;
  }
  tOf(x2) {
    const s4 = this.session;
    return s4.start + Math.min(this._w, Math.max(0, x2)) / Math.max(1, this._w) * (s4.end - s4.start);
  }
  weekday(t3) {
    return new Date(t3).toLocaleDateString(this.language, { weekday: "short", ...zoneOption() }).replace(/\.$/, "");
  }
  /** "Di 07:42": weekday and time in the user's language. */
  clockText(t3) {
    return `${this.weekday(t3)} ${this.time(t3)}`;
  }
  /** "vor 3 h 12 min", "vor 2 T 3 h". */
  agoText(t3) {
    const s4 = this.session;
    const min = Math.round((s4.end - t3) / 6e4);
    if (min < 1) return s4.t("tt_now");
    return s4.t("tt_ago", { d: this.duration(min * 6e4) });
  }
  /** A duration: "45 min", "3 h 12 min", "2 T 3 h". */
  duration(ms) {
    const s4 = this.session;
    const min = Math.round(ms / 6e4);
    const d3 = Math.floor(min / 1440);
    const h3 = Math.floor(min % 1440 / 60);
    const m2 = min % 60;
    if (d3) return `${s4.t("tt_days", { n: d3 })}${h3 ? ` ${h3} h` : ""}`;
    return h3 ? `${h3} h${m2 ? ` ${m2} min` : ""}` : `${m2} min`;
  }
  name(entity) {
    const s4 = this.session;
    return s4.names.get(entity) ?? s4.opts.live.states[entity]?.attributes.friendly_name ?? entity;
  }
  eventText(e4) {
    return this.session.t(`tt_ev_${e4.kind}`, { name: this.name(e4.entity) });
  }
  time(t3) {
    return new Date(t3).toLocaleTimeString(this.language, { hour: "2-digit", minute: "2-digit", ...hourCycle(this.session?.opts.live), ...zoneOption() });
  }
  // ---- scrubbing on the track ----
  onDown(e4) {
    const s4 = this.session;
    if (!s4?.playback || e4.target.closest(".mark")) return;
    e4.currentTarget.setPointerCapture?.(e4.pointerId);
    this.dragging = true;
    this._label = null;
    s4.pause();
    this.scrub(e4, true);
  }
  onMove(e4) {
    if (this.dragging) this.scrub(e4, false);
  }
  onUp(e4) {
    if (!this.dragging) return;
    this.scrub(e4, true);
    this.dragging = false;
  }
  /** The playhead follows the finger at once; the house follows a few times a second (fewer on a tablet). */
  scrub(e4, last) {
    const s4 = this.session;
    const track = this.renderRoot.querySelector(".track");
    const x2 = e4.clientX - track.getBoundingClientRect().left;
    const t3 = Math.max(s4.playback?.start ?? s4.start, this.tOf(x2));
    this.placeHead(this.xOf(t3));
    const time = this.renderRoot.querySelector(".clock-time");
    if (time) time.textContent = this.clockText(t3);
    clearTimeout(this.scrubTimer);
    const gap = s4.opts.spec.low || s4.opts.quality === "low" ? 160 : 70;
    const now = performance.now();
    if (last || now - this.scrubAt >= gap) {
      this.scrubAt = now;
      s4.seek(t3);
    } else
      this.scrubTimer = setTimeout(() => {
        this.scrubAt = performance.now();
        s4.seek(t3);
      }, gap);
  }
  // ---- event markers: a tap jumps there (paused), a long press tells what happened ----
  markDown(c4) {
    this.held = false;
    clearTimeout(this.holdTimer);
    this.holdTimer = setTimeout(() => {
      this.held = true;
      this.showLabel(c4);
    }, 450);
  }
  markUp() {
    clearTimeout(this.holdTimer);
  }
  markClick(c4) {
    if (this.held) {
      this.held = false;
      return;
    }
    this.session?.seek(c4.t, true);
    this.showLabel(c4, 2500);
  }
  showLabel(c4, ms = 4500) {
    this._label = { x: c4.x, lines: c4.events.slice(0, 4).map((e4) => `${this.time(e4.t)} \xB7 ${this.eventText(e4)}`).concat(c4.events.length > 4 ? [`+${c4.events.length - 4}`] : []) };
    clearTimeout(this.labelTimer);
    this.labelTimer = setTimeout(() => this._label = null, ms);
  }
  // ---- rendering ----
  renderTrack() {
    const s4 = this.session;
    const w2 = this._w;
    if (!w2) return A;
    const week = s4.range === "7d";
    const pct = (t3) => `${((t3 - s4.start) / (s4.end - s4.start) * 100).toFixed(3)}%`;
    const band = (a3, b3, cls, label) => b3 > a3 ? b2`<i class=${cls} style="left:${pct(Math.max(a3, s4.start))};width:calc(${pct(Math.min(b3, s4.end))} - ${pct(Math.max(a3, s4.start))})">${label ? b2`<span>${label}</span>` : A}</i>` : A;
    const oldest = s4.timeline?.oldest ?? null;
    const loaded = s4.playback?.start ?? s4.start;
    const recorder = s4.recorderStart;
    let before = A;
    if (loaded > s4.start + 6e4) {
      if (s4.loadingDay !== null) before = band(s4.start, loaded, "loading", s4.t("tt_loading_day", { day: this.weekday(s4.loadingDay + 12 * 36e5) }));
      else if (recorder !== null && recorder > s4.start) before = band(s4.start, loaded, "nodata", s4.t("tt_recorder_days", { n: s4.timeline?.keepDays ?? 0 }));
      else before = band(s4.start, loaded, "nodata", s4.full ? s4.t("tt_memory_full") : "");
    }
    const hours = week ? w2 / (s4.end - s4.start) * 36e5 * 3 >= 12 ? 3 : 6 : 1;
    const every = w2 >= 640 ? 3 : 6;
    const ticks = [];
    let at = hourStart(s4.start);
    if (at < s4.start) at += 36e5;
    for (; at <= s4.end; at += 36e5) {
      const h3 = hourOf(at);
      if (h3 % hours) continue;
      const midnight = h3 === 0;
      const label = midnight ? week ? `${this.weekday(at)} ${new Date(at).toLocaleDateString(this.language, { day: "numeric", ...zoneOption() }).replace(/\.$/, "")}.` : this.weekday(at) : !week && h3 % every === 0 ? this.time(at) : "";
      ticks.push(b2`<b class="tick ${midnight ? "tick-day" : label ? "tick-major" : ""}" style="left:${pct(at)}">${label ? b2`<span>${label}</span>` : A}</b>`);
    }
    const sig = `${w2}|${s4.events.length}|${s4.start}|${s4.end}|${s4.version}|${loaded}`;
    if (sig !== this.clusterSig) {
      this.clusterSig = sig;
      this.clusters = clusterEvents(s4.shownEvents(), (t3) => this.xOf(t3), w2 < 500 ? 18 : 14);
    }
    return b2`${s4.nights.map(([a3, b3]) => band(a3, b3, "night"))} ${before} ${oldest !== null && oldest > loaded ? band(loaded, oldest, "nodata") : A}
      ${s4.gaps.map(([a3, b3]) => band(a3, b3, "gap"))} ${ticks}
      ${this.clusters.map(
      (c4) => b2`<button
          class="mark ${c4.events.length > 1 ? "mark-many" : ""}"
          style="left:${c4.x.toFixed(1)}px;--c:${COLOR[c4.top.kind]}"
          title=${c4.events.map((e4) => `${this.time(e4.t)} ${this.eventText(e4)}`).join("\n")}
          aria-label=${`${this.time(c4.t)} ${this.eventText(c4.top)}`}
          @pointerdown=${() => this.markDown(c4)}
          @pointerup=${() => this.markUp()}
          @pointerleave=${() => this.markUp()}
          @contextmenu=${(e4) => e4.preventDefault()}
          @click=${() => this.markClick(c4)}
        >
          ${c4.events.length > 1 ? b2`<span>${c4.events.length}</span>` : A}
        </button>`
    )}
      <div class="head" style="transform:translateX(${this.xOf(s4.playback?.t ?? s4.end).toFixed(1)}px)"></div>
      ${this._label ? b2`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map((l3) => b2`<span>${l3}</span>`)}</div>` : A}`;
  }
  // ---- the side sheet ----
  toggleSheet(tab = "events") {
    this._sheet = this._sheet === tab || this._sheet && tab === "events" ? null : tab;
  }
  toggleFilter(c4) {
    const next = new Set(this._filters);
    if (next.has(c4)) next.delete(c4);
    else next.add(c4);
    this._filters = next;
  }
  where(entity) {
    return this.session.roomOf.get(entity)?.name ?? "";
  }
  renderEvents() {
    const s4 = this.session;
    const t3 = s4.t;
    const cats = ["safety", "openings", "devices", ...s4.energy ? ["energy"] : []];
    const groups = groupByHour(
      s4.shownEvents(true).filter((e4) => s4.energy || CATEGORY[e4.kind] !== "energy"),
      this._filters
    );
    let shown = 0;
    return b2`<div class="filters">
        ${cats.map((c4) => b2`<button class="fchip" aria-pressed=${this._filters.has(c4)} @click=${() => this.toggleFilter(c4)}>${t3(`tt_f_${c4}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${s4.follow} @change=${(e4) => s4.setFollow(e4.target.checked)} />${t3("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${s4.stopImportant} @change=${(e4) => s4.setStopImportant(e4.target.checked)} />${t3("tt_stop")}</label>
      ${groups.length ? groups.map((g2) => {
      if (shown >= 300) return A;
      shown += g2.events.length;
      return b2`<h4>${this.clockText(g2.hour)}</h4>
              ${g2.events.map((e4) => this.row(COLOR[e4.kind], this.time(e4.t), this.eventText(e4), this.where(e4.entity), () => s4.goTo(e4)))}`;
    }) : b2`<p class="none">${t3("tt_no_events")}</p>`}`;
  }
  row(color, time, text, where, go) {
    return b2`<button class="row" @click=${go}>
      <i style="background:${color}"></i><time>${time}</time><span>${text}${where ? b2`<small>${where}</small>` : A}</span>
    </button>`;
  }
  awayText(r4) {
    const t3 = this.session.t;
    const name = this.name(r4.entity);
    switch (r4.kind) {
      case "alarm":
      case "appliance":
        return this.eventText({ kind: r4.event ?? "alarm", entity: r4.entity });
      case "door":
      case "window":
        return t3("tt_away_door", { name, n: r4.count });
      case "motion":
        return t3("tt_away_motion", { name, n: r4.count });
      case "light_on":
        return t3("tt_away_light", { name, d: this.duration(r4.ms) });
      case "window_open":
        return t3("tt_away_open", { name, d: this.duration(r4.ms) });
    }
  }
  renderAway() {
    const s4 = this.session;
    const t3 = s4.t;
    const pb = s4.playback;
    if (this.awayOffer?.version !== s4.version) this.awayOffer = { version: s4.version, offer: s4.awayOffer() };
    const offer = this.awayOffer.offer;
    const [from, to] = this._awayFrom ?? offer ?? [s4.lastClosed !== null && s4.lastClosed >= pb.start ? s4.lastClosed : Math.max(pb.start, s4.end - 3 * 36e5), s4.end];
    const key = `${s4.version}|${from}|${to}`;
    if (this.awayCache?.key !== key) this.awayCache = { key, rows: s4.away(from, to) };
    const rows = this.awayCache.rows;
    const pick = (span2) => this._awayFrom = span2;
    const span = (a3, b3) => `${this.clockText(a3)} \u2013 ${b3 >= s4.end - 6e4 ? t3("tt_now") : this.clockText(b3)}`;
    const custom = (e4) => {
      const at = parseMoment(e4.target.value, s4.end);
      if (at !== null) pick([Math.max(pb.start, at), s4.end]);
    };
    return b2`<p class="since">${t3("tt_away_since")}:</p>
      <div class="filters">
        ${s4.lastClosed !== null && s4.lastClosed >= pb.start ? b2`<button class="fchip" aria-pressed=${from === s4.lastClosed} @click=${() => pick([s4.lastClosed, s4.end])}>${t3("tt_away_last")}</button>` : A}
        ${offer ? b2`<button class="fchip" aria-pressed=${from === offer[0] && to === offer[1]} @click=${() => pick(offer)}>${t3("tt_away_quiet", { from: this.time(offer[0]), to: this.time(offer[1]) })}</button>` : A}
        <input class="when" type="time" aria-label=${t3("tt_away_since")} @change=${custom} />
      </div>
      <h4>${span(from, to)}</h4>
      ${rows.length ? rows.slice(0, 200).map((r4) => this.row(AWAY_COLOR[r4.kind], this.time(r4.t), this.awayText(r4), this.where(r4.entity), () => s4.goTo(r4))) : b2`<p class="none">${t3("tt_away_none")}</p>`}`;
  }
  renderDay() {
    const s4 = this.session;
    const t3 = s4.t;
    const pb = s4.playback;
    const day = dayStart(pb.t);
    const sum = s4.daySummary(day);
    const prevDay = dayStart(day - 12 * 36e5);
    const prev = this._compare ? s4.daySummary(prevDay) : null;
    if (this._compare && (!prev || prev.from > prevDay + 6e4)) queueMicrotask(() => s4.ensureLoaded(prevDay));
    const partial = (d3, start) => d3 && d3.from > start + 6e4 ? t3("tt_day_partial", { time: this.time(d3.from) }) : "";
    const num = (v2, digits = 1) => v2.toLocaleString(this.language, { maximumFractionDigits: digits, minimumFractionDigits: digits });
    const hrs = (ms) => ms >= 6e4 ? `${num(ms / 36e5)} h` : "\u2013";
    const temp = (r4) => r4 && r4.tMin !== null && r4.tMax !== null ? `${num(r4.tMin)}\u2013${num(r4.tMax)}\xB0` : "\u2013";
    const cells = (r4) => b2`<td>${r4 ? hrs(r4.lightMs) : "\u2013"}</td><td>${r4 ? hrs(r4.windowMs) : "\u2013"}</td><td>${r4 ? hrs(r4.heatMs) : "\u2013"}</td><td>${temp(r4)}</td>`;
    const date = new Date(day).toLocaleDateString(this.language, { weekday: "short", day: "numeric", month: "numeric", ...zoneOption() });
    const energy = (d3) => d3?.energy ?? null;
    const e4 = energy(sum);
    const pe = energy(prev);
    const kwh = (v2) => v2 === void 0 ? "\u2013" : `${num(v2)} kWh`;
    const pctOf = (v2) => v2 === null || v2 === void 0 ? "\u2013" : `${Math.round(v2 * 100)} %`;
    const beforeNote = this._compare ? prev ? partial(prev, prevDay) : s4.loadingDay !== null ? t3("tt_loading") : "" : "";
    return b2`<h4>${t3("tt_day_title", { day: date })}</h4>
      ${partial(sum, day) ? b2`<p class="since">${partial(sum, day)}</p>` : A}
      ${beforeNote ? b2`<p class="since">${t3("tt_day_before")}: ${beforeNote}</p>` : A}
      <div class="filters">
        <button class="fchip" @click=${() => s4.yesterday()}>⟲ ${t3("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${() => this._compare = !this._compare}>${t3("tt_day_compare")}</button>
      </div>
      ${sum && (sum.rooms.length || e4) ? b2`${sum.rooms.length ? b2`<table>
                  <thead>
                    <tr><th></th><th>${t3("tt_day_light")}</th><th>${t3("tt_day_window")}</th><th>${t3("tt_day_heat")}</th><th>${t3("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${sum.rooms.map(
      (r4) => b2`<tr><th>${r4.name}</th>${cells(r4)}</tr>
                        ${prev ? b2`<tr class="before"><th>${t3("tt_day_before")}</th>${cells(prev.rooms.find((p3) => p3.roomId === r4.roomId))}</tr>` : A}`
    )}
                  </tbody>
                </table>` : A}
            ${e4 ? b2`<div class="energy">
                  ${[
      ["tt_day_pv", kwh(e4.pv), kwh(pe?.pv)],
      ["tt_day_use", kwh(e4.use), kwh(pe?.use)],
      ["tt_day_import", kwh(e4.imp), kwh(pe?.imp)],
      ["tt_day_export", kwh(e4.exp), kwh(pe?.exp)],
      ["tt_day_self", pctOf(e4.self), pctOf(pe?.self)]
    ].map(([k2, v2, b3]) => b2`<span>${t3(k2)}</span><b>${v2}</b>${prev ? b2`<em>${b3}</em>` : A}`)}
                </div>` : A}` : b2`<p class="none">${t3("tt_day_none")}</p>`}`;
  }
  renderSheet() {
    const s4 = this.session;
    const t3 = s4.t;
    const tab = this._sheet;
    const tabs = ["events", "away", "day"];
    return b2`<aside class="sheet" role="dialog" aria-label=${t3("tt_sheet")}>
      <header>
        ${tabs.map((k2) => b2`<button class="tab" aria-pressed=${tab === k2} title=${k2 === "away" ? t3("tt_away_title") : A} @click=${() => this._sheet = k2}>${t3(k2 === "events" ? "tt_tab_events" : k2 === "away" ? "tt_tab_away" : "tt_tab_day")}</button>`)}
        <button class="x" title=${t3("tt_close")} aria-label=${t3("tt_close")} @click=${() => this._sheet = null}>×</button>
      </header>
      <div class="body">${tab === "events" ? this.renderEvents() : tab === "away" ? this.renderAway() : this.renderDay()}</div>
    </aside>`;
  }
  render() {
    const s4 = this.session;
    if (!s4) return A;
    const t3 = s4.t;
    const pb = s4.playback;
    const ready = s4.state === "ready" && !!pb;
    const error = s4.state === "error" ? s4.error === "not_unlocked" ? t3("tt_locked") : s4.error === "no_recorder" ? t3("tt_no_recorder") : s4.error === "unknown_command" ? t3("tt_restart") : t3("tt_error", { error: s4.error ?? "?" }) : null;
    const perHour = pb ? 3600 / pb.speed : 10;
    const minutes = Math.round((s4.end - s4.start) / 6e4);
    return b2`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${t3("tt_badge")}${isBeta("time_travel") ? b2` <a class="beta" href=${DISCORD_URL} target="_blank" rel="noopener" title=${t3("beta_bar")}>🧪 BETA</a>` : A}</span>
        ${ready ? (
      // filled by onTick (written directly, many times a second while playing – no binding inside)
      b2`<b class="clock-time"></b><span class="clock-ago"></span>`
    ) : b2`<span class="clock-msg">${error ?? `${t3("tt_loading")} ${Math.round(s4.progress * 100)} %`}</span>`}
      </div>
      ${this._toast ? b2`<div class="toast" role="alert">${t3("tt_readonly")}</div>` : A}
      ${ready && this._sheet ? this.renderSheet() : A}
      <div class="bar">
        <button class="btn prev" ?disabled=${!ready} title=${t3("tt_prev")} aria-label=${t3("tt_prev")} @click=${() => s4.step(-1)}>${icon(ICONS.prev)}</button>
        <button class="btn play" ?disabled=${!ready} title=${t3(pb?.playing ? "tt_pause" : "tt_play")} aria-label=${t3(pb?.playing ? "tt_pause" : "tt_play")} @click=${() => s4.toggle()}>
          ${icon(pb?.playing ? ICONS.pause : ICONS.play)}
        </button>
        <button class="btn next" ?disabled=${!ready} title=${t3("tt_next")} aria-label=${t3("tt_next")} @click=${() => s4.step(1)}>${icon(ICONS.next)}</button>
        <div
          class="track ${ready ? "" : "track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${t3("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${minutes}
          aria-valuenow=${pb ? Math.round((pb.t - s4.start) / 6e4) : minutes}
          @pointerdown=${(e4) => this.onDown(e4)}
          @pointermove=${(e4) => this.onMove(e4)}
          @pointerup=${(e4) => this.onUp(e4)}
          @pointercancel=${(e4) => this.onUp(e4)}
        >
          ${ready ? this.renderTrack() : error ? b2`<em class="msg">${error}</em>` : b2`<i class="progress" style="width:${Math.round(s4.progress * 100)}%"></i>`}
        </div>
        ${error && s4.error !== "not_unlocked" ? b2`<button class="chip" @click=${() => void s4.load()}>${t3("tt_retry")}</button>` : A}
        <button class="chip range" ?disabled=${!ready} title=${t3("tt_range_hint")} aria-label=${t3("tt_range_hint")} @click=${() => s4.setRange(s4.range === "7d" ? "24h" : "7d")}>
          ${s4.range === "7d" ? t3("tt_days", { n: s4.maxDays }) : "24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!ready} aria-pressed=${!!this._sheet} title=${t3("tt_sheet")} aria-label=${t3("tt_sheet")} @click=${() => this.toggleSheet()}>${icon(ICONS.list)}</button>
        <button class="chip speed" ?disabled=${!ready} title=${t3("tt_speed", { s: perHour >= 60 ? "1 min" : perHour >= 1 ? `${Math.round(perHour)} s` : `${perHour.toFixed(2).replace(/0$/, "")} s` })} @click=${() => s4.nextSpeed()}>
          ${pb?.speed ?? 360}×
        </button>
        <button class="chip live ${s4.atNow ? "live-now" : ""}" title=${t3("tt_live_hint")} @click=${() => s4.exit()}>
          <i></i>${s4.atNow ? `${t3("tt_now_reached")} \xB7 ${t3("tt_live")}` : t3("tt_live")}
        </button>
      </div>`;
  }
  static styles = i`
    :host {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
      container-type: size;
      container-name: fp3dtt;
      font-family: var(--fp3d-font, system-ui, sans-serif);
      color: var(--fp3d-text, #e6eefc);
      --tt: #ffb020;
    }
    .frame {
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 3px var(--tt);
      border-radius: inherit;
    }
    .clock {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      justify-items: center;
      gap: 1px;
      padding: 6px 16px 7px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      white-space: nowrap;
      max-width: calc(100% - 260px);
    }
    .badge {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--tt);
    }
    .beta {
      margin-left: 4px;
      color: inherit;
      opacity: 0.8;
      text-decoration: none;
      pointer-events: auto;
    }
    .clock-time {
      font-family: var(--fp3d-title-font, inherit);
      font-size: 24px;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }
    .clock-ago,
    .clock-msg {
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: normal;
      text-align: center;
    }
    .toast,
    .label {
      position: absolute;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      z-index: 3;
      padding: 7px 12px;
      border-radius: 10px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      font-size: 13px;
    }
    .toast {
      left: 50%;
      transform: translateX(-50%);
      color: var(--tt);
      font-weight: 600;
    }
    .label {
      /* above its marker on the track, kept within the track */
      bottom: calc(100% + 12px);
      left: clamp(0px, calc(var(--x) - 120px), calc(100% - 240px));
      width: 240px;
      box-sizing: border-box;
      display: grid;
      gap: 3px;
      pointer-events: none;
    }
    .bar {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 8px;
      height: calc(var(--fp3d-tt-h, 64px) - 16px);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      touch-action: none;
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .btn {
      flex: none;
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 10px;
      background: transparent;
    }
    .btn:hover:not(:disabled),
    .sheet-btn[aria-pressed="true"] {
      background: rgba(255, 255, 255, 0.07);
    }
    .sheet-btn[aria-pressed="true"] {
      color: var(--tt);
    }
    .play {
      background: var(--tt);
      color: #1a1200;
    }
    .play:hover:not(:disabled) {
      background: var(--tt);
      filter: brightness(1.1);
    }
    .chip {
      flex: none;
      height: 32px;
      padding: 0 11px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 13px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .live {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-color: var(--fp3d-accent, #37e0ff);
    }
    .live i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ff3b4f;
    }
    .live-now {
      background: var(--fp3d-accent, #37e0ff);
      color: #04121c;
    }
    .track {
      position: relative;
      flex: 1;
      min-width: 0;
      height: 34px;
      margin: 0 4px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      outline-offset: 2px;
    }
    .track-wait {
      cursor: default;
      overflow: hidden;
    }
    .track i {
      position: absolute;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
    .track i span {
      position: absolute;
      left: 4px;
      bottom: 2px;
      font-size: 10px;
      font-style: normal;
      white-space: nowrap;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .night {
      background: rgba(40, 60, 140, 0.35);
    }
    .nodata {
      background: rgba(140, 150, 170, 0.28);
    }
    .loading {
      background: repeating-linear-gradient(135deg, rgba(255, 176, 32, 0.22) 0 6px, transparent 6px 12px);
    }
    .loading span {
      color: var(--tt) !important;
    }
    .gap {
      background: repeating-linear-gradient(135deg, rgba(160, 170, 190, 0.32) 0 4px, transparent 4px 8px);
    }
    .progress {
      left: 0;
      background: rgba(255, 176, 32, 0.4);
      transition: width 0.2s;
    }
    .msg {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 12px;
      font-style: normal;
      color: var(--fp3d-muted, #8a9bb8);
      overflow: hidden;
    }
    .tick {
      position: absolute;
      top: 0;
      width: 1px;
      height: 5px;
      background: rgba(200, 215, 240, 0.28);
      pointer-events: none;
    }
    .tick-major {
      height: 9px;
      background: rgba(200, 215, 240, 0.5);
    }
    .tick-day {
      height: 100%;
      background: rgba(255, 176, 32, 0.45);
    }
    .tick span {
      position: absolute;
      left: 3px;
      top: 22px;
      font-size: 10px;
      line-height: 11px;
      font-weight: 500;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: nowrap;
    }
    .tick-day span {
      color: var(--tt);
      font-weight: 700;
    }
    .mark {
      position: absolute;
      top: 6px;
      width: 14px;
      height: 14px;
      margin-left: -7px;
      padding: 0;
      border-radius: 50%;
      border: 2px solid var(--fp3d-chrome-solid, #0f1729);
      background: var(--c);
      box-shadow: 0 0 0 1px var(--c);
      z-index: 1;
    }
    .mark-many {
      width: 18px;
      height: 18px;
      margin-left: -9px;
      top: 4px;
    }
    .mark span {
      display: block;
      font-size: 9px;
      font-weight: 800;
      line-height: 14px;
      color: #0a0f1c;
    }
    .head {
      position: absolute;
      left: -1px;
      top: -5px;
      bottom: -5px;
      width: 3px;
      border-radius: 2px;
      background: var(--tt);
      box-shadow: 0 0 6px var(--tt);
      pointer-events: none;
      z-index: 2;
      will-change: transform;
    }
    .head::after {
      content: "";
      position: absolute;
      left: -5px;
      bottom: -6px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: var(--tt);
    }
    .sheet {
      position: absolute;
      top: 78px;
      right: 8px;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      width: min(380px, calc(100% - 16px));
      box-sizing: border-box;
      display: grid;
      grid-template-rows: auto 1fr;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      z-index: 2;
      font-size: 13px;
      overflow: hidden;
    }
    .sheet header {
      display: flex;
      gap: 4px;
      padding: 8px 8px 6px;
      border-bottom: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .tab {
      flex: 1 1 auto;
      min-width: 0;
      padding: 6px 8px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tab[aria-pressed="true"] {
      background: rgba(255, 176, 32, 0.18);
      color: var(--tt);
    }
    .x {
      flex: none;
      width: 30px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 18px;
    }
    .body {
      overflow-y: auto;
      padding: 8px 10px 12px;
      overscroll-behavior: contain;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 6px;
    }
    .fchip {
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 12px;
    }
    .fchip[aria-pressed="true"] {
      border-color: var(--tt);
      background: rgba(255, 176, 32, 0.14);
    }
    .when {
      font: inherit;
      font-size: 12px;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      border-radius: 999px;
      padding: 3px 8px;
      color-scheme: dark;
    }
    .opt {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      margin: 2px 0;
    }
    .since {
      margin: 0 0 4px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .sheet h4 {
      margin: 10px 0 4px;
      font-size: 12px;
      font-weight: 700;
      color: var(--tt);
    }
    .row {
      display: grid;
      grid-template-columns: 10px 44px 1fr;
      align-items: start;
      gap: 6px;
      width: 100%;
      padding: 5px 4px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      text-align: left;
      font-size: 13px;
    }
    .row:hover {
      background: rgba(255, 255, 255, 0.06);
    }
    .row i {
      width: 8px;
      height: 8px;
      margin-top: 5px;
      border-radius: 50%;
    }
    .row time {
      font-variant-numeric: tabular-nums;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .row small {
      display: block;
      font-size: 11px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .none {
      color: var(--fp3d-muted, #8a9bb8);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      font-variant-numeric: tabular-nums;
    }
    th,
    td {
      padding: 4px 3px;
      text-align: right;
      white-space: nowrap;
    }
    th:first-child {
      text-align: left;
      max-width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    thead th {
      font-weight: 600;
      color: var(--fp3d-muted, #8a9bb8);
    }
    tbody tr:not(.before) {
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .before {
      color: var(--fp3d-muted, #8a9bb8);
      font-size: 11px;
    }
    .before th {
      font-weight: 400;
      padding-left: 10px;
    }
    .energy {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 4px 12px;
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      font-variant-numeric: tabular-nums;
    }
    .energy b {
      text-align: right;
    }
    .energy em {
      font-style: normal;
      text-align: right;
      color: var(--fp3d-muted, #8a9bb8);
    }
    /* phones and narrow cards: the track on a row of its own above the buttons */
    @container fp3dtt ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
      .bar {
        flex-wrap: wrap;
        align-content: center;
        row-gap: 6px;
        padding: 6px 8px;
      }
      .track {
        order: -1;
        flex: 1 0 100%;
        margin: 14px 0 0;
      }
      .live {
        margin-left: auto;
      }
      .chip {
        padding: 0 9px;
      }
      .clock {
        top: 8px;
        padding: 4px 12px 5px;
        max-width: calc(100% - 120px);
      }
      .clock-time {
        font-size: 19px;
      }
      .sheet {
        top: 64px;
      }
    }
  `;
};
if (!customElements.get("fp3d-time-bar")) customElements.define("fp3d-time-bar", Fp3dTimeBar);

// src/markers.ts
var chosenSensors = /* @__PURE__ */ new Map();
function cameraMotionSensors(hass, cameraId) {
  return chosenSensors.get(cameraId) ?? cameraOwnSensors(hass, cameraId);
}
function cameraOwnSensors(hass, cameraId) {
  const device = hass.entities?.[cameraId]?.device_id;
  if (!device) return [];
  return Object.values(hass.entities ?? {}).filter((e4) => e4.device_id === device && e4.entity_id.startsWith("binary_sensor.")).map((e4) => e4.entity_id).filter((id) => ["motion", "occupancy", "presence"].includes(String(hass.states[id]?.attributes.device_class)));
}

// src/timetravel/classify.ts
var EXCLUDED = /* @__PURE__ */ new Set(["person", "device_tracker", "zone", "camera", "scene", "script", "button", "input_button", "update", "event", "image", "tts", "stt", "notify", "conversation", "automation", "calendar", "todo"]);
var AREA_DOMAINS = /* @__PURE__ */ new Set(["light", "cover", "switch", "fan", "lock", "climate", "media_player", "binary_sensor", "sensor", "vacuum", "alarm_control_panel", "water_heater", "input_boolean", "humidifier", "valve"]);
var MAX_ENTITIES = 600;
var domainOf = (id) => id.slice(0, id.indexOf("."));
function isStatSensor(hass, id) {
  const st = hass.states[id];
  if (!id.startsWith("sensor.") || !st || st.attributes.state_class !== "measurement") return false;
  return Number.isFinite(Number(st.state)) || st.state === "unavailable" || st.state === "unknown";
}
var LOCATION_CLASSES = /* @__PURE__ */ new Set(["geocoded_location", "location"]);
var LOCATION_NAME = /location|address|geocoded|ssid|bssid|standort|adresse/i;
function locationLike(hass, id) {
  const attrs = hass.states[id]?.attributes ?? {};
  const key = hass.entities?.[id]?.translation_key ?? "";
  if (LOCATION_CLASSES.has(String(attrs.device_class ?? "")) || LOCATION_CLASSES.has(key)) return true;
  if ("latitude" in attrs || "longitude" in attrs) return true;
  return LOCATION_NAME.test(`${id} ${String(attrs.friendly_name ?? "")} ${key}`);
}
function personTrackers(hass) {
  const out = /* @__PURE__ */ new Set();
  for (const st of Object.values(hass.states))
    if (st.entity_id.startsWith("person.") && Array.isArray(st.attributes.device_trackers)) {
      for (const id of st.attributes.device_trackers) if (typeof id === "string") out.add(id);
    }
  return out;
}
function personalDevices(hass, trackers = personTrackers(hass)) {
  const out = /* @__PURE__ */ new Set();
  for (const id of trackers) {
    const dev = hass.entities?.[id]?.device_id;
    if (dev) out.add(dev);
  }
  return out;
}
function historyRequest(hass, building, spec, max = MAX_ENTITIES) {
  const privateIds = new Set(building.presence.flatMap((p3) => [p3.person, p3.sensor]).filter((x2) => !!x2));
  const trackers = personTrackers(hass);
  for (const id of trackers) privateIds.add(id);
  const carried = personalDevices(hass, trackers);
  const cars = new Set((spec.cars ?? []).filter((id) => id.startsWith("device_tracker.") && !privateIds.has(id) && !!hass.states[id]));
  const areas = new Set(building.floors.flatMap((f3) => f3.rooms.map((r4) => r4.area_id)).filter((x2) => !!x2));
  const fromAreas = [];
  for (const [id, entry] of Object.entries(hass.entities ?? {})) {
    if (!entry.area_id && entry.device_id) {
      const area = deviceAreaId(hass, entry.device_id);
      if (!area || !areas.has(area)) continue;
    } else if (!entry.area_id || !areas.has(entry.area_id)) continue;
    if (entry.hidden || entry.entity_category || !AREA_DOMAINS.has(domainOf(id))) continue;
    fromAreas.push(id);
  }
  const weather = Object.keys(hass.states).filter((id) => id.startsWith("weather."));
  const cameraSensors = building.floors.flatMap((f3) => f3.placements.filter((p3) => p3.entity_id.startsWith("camera.")).flatMap((p3) => cameraMotionSensors(hass, p3.entity_id)));
  const wanted = [.../* @__PURE__ */ new Set([...cars, ...spec.entities, ...cameraSensors, "sun.sun", ...building.settings.weather_entity ? [building.settings.weather_entity] : [], ...building.settings.outage_entity ? [building.settings.outage_entity] : [], ...weather.slice(0, 1), ...fromAreas])];
  const hidden = [];
  const all = wanted.filter((id) => {
    if (!id.includes(".") || !cars.has(id) && EXCLUDED.has(domainOf(id)) || privateIds.has(id) || !hass.states[id]) return false;
    if (cars.has(id)) return true;
    const dev = hass.entities?.[id]?.device_id;
    if (dev && carried.has(dev) || locationLike(hass, id)) {
      hidden.push(id);
      return false;
    }
    return true;
  });
  const ids = all.slice(0, max);
  const stats = ids.filter((id) => isStatSensor(hass, id));
  const statSet = new Set(stats);
  return { entities: ids.filter((id) => !statSet.has(id)), stats, overflow: all.slice(max), cars: ids.filter((id) => cars.has(id)), hidden };
}
var SAFETY = { smoke: "smoke", gas: "gas", carbon_monoxide: "co", moisture: "water" };
var FRONT_STYLES = /* @__PURE__ */ new Set(["front", "front_glass", "sidelight", "sidelights"]);
var APPLIANCES = /* @__PURE__ */ new Set(["washer", "dryer", "dishwasher"]);
function inside(p3, poly) {
  let hit = false;
  for (let i5 = 0, j = poly.length - 1; i5 < poly.length; j = i5++) {
    const [xi, zi] = poly[i5];
    const [xj, zj] = poly[j];
    if (zi > p3[1] !== zj > p3[1] && p3[0] < (xj - xi) * (p3[1] - zi) / (zj - zi) + xi) hit = !hit;
  }
  return hit;
}
function exteriorDoor(floor, o5) {
  if (o5.type !== "door" || o5.wall) return false;
  if (o5.style && FRONT_STYLES.has(o5.style)) return true;
  if (o5.style) return false;
  const room = floor.rooms.find((r4) => r4.id === o5.room_id);
  if (!room || room.points.length < 3) return false;
  const a3 = room.points[o5.edge];
  const b3 = room.points[(o5.edge + 1) % room.points.length];
  if (!a3 || !b3) return false;
  const len = Math.hypot(b3[0] - a3[0], b3[1] - a3[1]);
  if (len < 1e-6) return false;
  const ux = (b3[0] - a3[0]) / len;
  const uz = (b3[1] - a3[1]) / len;
  const mid = [a3[0] + ux * o5.offset, a3[1] + uz * o5.offset];
  const probe = (s4) => [mid[0] - uz * s4, mid[1] + ux * s4];
  const out = inside(probe(0.3), room.points) ? probe(-0.4) : probe(0.4);
  return !floor.rooms.some((r4) => r4.id !== room.id && r4.points.length >= 3 && inside(out, r4.points));
}
function appliancePower(hass, building, spec) {
  const out = /* @__PURE__ */ new Map();
  const links = new Map(spec.furniture);
  for (const floor of building.floors)
    for (const f3 of floor.furniture) {
      if (!APPLIANCES.has(f3.type)) continue;
      const linked = links.get(f3.id)?.power;
      const near = floor.placements.find((p3) => hass.states[p3.entity_id]?.attributes.device_class === "power" && Math.hypot(p3.x - f3.x, p3.z - f3.z) <= 1.2)?.entity_id;
      const id = linked ?? near;
      if (id && !out.has(id)) out.set(id, f3);
    }
  return out;
}
function eventRoles(hass, building, spec, fetched) {
  const roles = /* @__PURE__ */ new Map();
  const set = (id, role) => {
    if (id && fetched.has(id) && !roles.has(id)) roles.set(id, role);
  };
  const links = new Map(spec.openings);
  for (const floor of building.floors)
    for (const o5 of floor.openings) {
      const l3 = links.get(o5.id);
      if (!l3) continue;
      if (o5.type === "garage") for (const id of [l3.contact, l3.cover]) set(id, "garage");
      else if (o5.type === "door") {
        if (exteriorDoor(floor, o5)) for (const id of [l3.contact, l3.contact2]) set(id, "door");
      } else {
        const ids = [l3.contact, l3.tilt, l3.contact2, l3.tilt2].filter((id) => !!id && fetched.has(id));
        ids.forEach((id, i5) => set(id, i5 ? "window_more" : "window"));
      }
    }
  for (const id of appliancePower(hass, building, spec).keys()) set(id, "washer");
  for (const floor of building.floors)
    for (const p3 of floor.placements) if (p3.entity_id.startsWith("camera.")) for (const id of cameraMotionSensors(hass, p3.entity_id)) set(id, "camera");
  for (const id of fetched) {
    if (roles.has(id)) continue;
    const domain = domainOf(id);
    const cls = String(hass.states[id]?.attributes.device_class ?? "");
    if (domain === "lock") set(id, "lock");
    else if (domain === "alarm_control_panel") set(id, "alarm");
    else if (domain === "vacuum") set(id, "robot");
    else if (domain === "weather") set(id, "weather");
    else if (domain === "cover" && (cls === "garage" || cls === "gate")) set(id, "garage");
    else if (domain === "binary_sensor") {
      if (SAFETY[cls]) set(id, SAFETY[cls]);
      else if (cls === "garage_door") set(id, "garage");
      else if (cls === "motion") set(id, "motion");
    }
  }
  return roles;
}

// src/timetravel/live.ts
var ATTR_KEEP = {
  light: ["brightness", "color_mode", "rgb_color", "color_temp_kelvin"],
  cover: ["current_position", "current_tilt_position"],
  climate: ["hvac_action", "current_temperature", "temperature"],
  media_player: ["media_title", "media_artist", "app_name", "source", "volume_level"],
  weather: ["cloud_coverage", "wind_speed", "wind_speed_unit"],
  vacuum: ["current_room"],
  fan: [],
  alarm_control_panel: [],
  lock: [],
  water_heater: []
};
function quantiseAttr(key, value) {
  if (key === "rgb_color") return Array.isArray(value) && value.every((c4) => typeof c4 === "number") ? value.map((c4) => Math.round(c4)) : null;
  if (typeof value !== "number" || !Number.isFinite(value)) return value;
  switch (key) {
    case "brightness":
      return Math.max(0, Math.min(255, Math.round(Math.round(value / 255 * 50) * 2 * 255 / 100)));
    case "color_temp_kelvin":
      return Math.round(value / 50) * 50;
    case "current_position":
    case "current_tilt_position":
    case "cloud_coverage":
      return Math.round(value);
    case "volume_level":
      return Math.round(Math.round(value * 20) * 5) / 100;
    case "current_temperature":
    case "temperature":
    case "wind_speed":
      return Math.round(value * 10) / 10;
    default:
      return value;
  }
}
function carState(state) {
  return state === "home" || state === "unavailable" || state === "unknown" ? state : "not_home";
}
function liveValue(st) {
  const domain = st.entity_id.slice(0, st.entity_id.indexOf("."));
  if (domain === "device_tracker") return { s: carState(st.state), a: null };
  const keys = ATTR_KEEP[domain];
  if (!keys?.length) return { s: st.state, a: null };
  const a3 = {};
  for (const k2 of keys) {
    const v2 = st.attributes[k2];
    if (v2 === null || v2 === void 0) continue;
    const q = quantiseAttr(k2, v2);
    if (q !== null && q !== void 0) a3[k2] = q;
  }
  return { s: st.state, a: Object.keys(a3).length ? a3 : null };
}
var SLOT = 3e5;
var MAX_PENDING = 2e4;
var COARSER = [6e4, SLOT, 15 * 6e4, 36e5];
var numeric = (id, st) => id.startsWith("sensor.") && st.state !== "" && Number.isFinite(Number(st.state));
function coarsen(list, ms) {
  const out = [];
  for (const r4 of list) {
    const last = out[out.length - 1];
    if (last && Math.floor(last.t / ms) === Math.floor(r4.t / ms)) out[out.length - 1] = r4;
    else out.push(r4);
    const before = out[out.length - 2];
    if (before && before.k === out[out.length - 1].k) out.pop();
  }
  return out;
}
var LiveLog = class {
  ids;
  seen = /* @__PURE__ */ new Map();
  /** The key of the last value noted per entity (the start state's at first). */
  lastKey = /* @__PURE__ */ new Map();
  startStates;
  startedAt;
  /** Entities given a track of their own already (the recorder had nothing of them). */
  seeded = /* @__PURE__ */ new Set();
  rows = /* @__PURE__ */ new Map();
  count = 0;
  constructor(ids, states, startedAt = Date.now()) {
    this.ids = ids;
    this.startStates = states;
    this.startedAt = startedAt;
    for (const id of ids) {
      this.seen.set(id, states[id]);
      if (states[id]) this.lastKey.set(id, keyOf(liveValue(states[id])));
    }
  }
  get pending() {
    return this.count;
  }
  /** Notes what changed since the last call (`now`: when the state carries no time of its own). */
  record(states, now) {
    for (const id of this.ids) {
      const st = states[id];
      if (st === this.seen.get(id)) continue;
      this.seen.set(id, st);
      if (!st) continue;
      const v2 = liveValue(st);
      const k2 = keyOf(v2);
      if (this.lastKey.get(id) === k2) continue;
      const list = this.rows.get(id);
      const last = list?.[list.length - 1];
      const at = Date.parse(st.last_updated ?? st.last_changed ?? "");
      const t3 = Math.max(Number.isFinite(at) ? Math.min(now, at) : now, last?.t ?? -Infinity);
      if (last && numeric(id, st) && Math.floor(last.t / SLOT) === Math.floor(t3 / SLOT)) {
        list[list.length - 1] = { t: t3, v: v2, k: k2 };
        this.lastKey.set(id, k2);
        continue;
      }
      this.lastKey.set(id, k2);
      if (list) list.push({ t: t3, v: v2, k: k2 });
      else this.rows.set(id, [{ t: t3, v: v2, k: k2 }]);
      this.count++;
    }
    if (this.count > MAX_PENDING) this.compact();
  }
  /** Too many rows (a page left alone for long): merged into coarser steps, the last state of each entity stays. */
  compact() {
    for (const ms of COARSER) {
      let count = 0;
      for (const [id, list] of this.rows) {
        const merged = coarsen(list, ms);
        this.rows.set(id, merged);
        count += merged.length;
      }
      this.count = count;
      if (count <= MAX_PENDING / 2) return;
    }
  }
  /**
   * Adds the noted changes to the timeline and moves its end to `now`. An entity the recorder had nothing of
   * gets a track of its own, from its state when the time travel began. Returns the rows added and the tracks made.
   */
  flush(timeline, now) {
    let added = 0;
    let created = 0;
    for (const id of this.ids) {
      if (this.seeded.has(id) || timeline.tracks.has(id) || timeline.series.has(id)) continue;
      this.seeded.add(id);
      const start = this.startStates[id];
      const rows = [...start ? [{ t: this.startedAt, v: liveValue(start) }] : [], ...this.rows.get(id) ?? []];
      const track = newTrack(id, rows);
      this.rows.delete(id);
      if (!track) continue;
      timeline.tracks.set(id, track);
      timeline.missing.delete(id);
      created++;
      added += track.times.length;
    }
    for (const [id, list] of this.rows) {
      const track = timeline.tracks.get(id);
      if (track) {
        added += appendRows(track, list);
        continue;
      }
      const series = timeline.series.get(id);
      if (series) added += appendSeriesValues(series, list.map((r4) => ({ t: r4.t, value: Number(r4.v.s) })));
    }
    this.rows = /* @__PURE__ */ new Map();
    this.count = 0;
    timeline.end = Math.max(timeline.end, now);
    return { added, created };
  }
};

// src/timetravel/cover.ts
var COVER_RUN_MS = 3 * 6e4;
function coverPosition(t3, row, next) {
  const moving = row.state === "opening" || row.state === "closing";
  if (!moving || row.pos === null || !next || next.pos === null) return row.pos;
  const span = next.t - row.t;
  if (!(span > 0) || span > COVER_RUN_MS || t3 <= row.t) return row.pos;
  if (t3 >= next.t) return next.pos;
  return Math.round(row.pos + (next.pos - row.pos) * (t3 - row.t) / span);
}

// src/timetravel/sun.ts
var RAD = Math.PI / 180;
function sunAt(lat, lon, t3) {
  const jc = (t3 / 864e5 + 24405875e-1 - 2451545) / 36525;
  const l0 = (280.46646 + jc * (36000.76983 + jc * 3032e-7)) % 360;
  const m2 = 357.52911 + jc * (35999.05029 - 1537e-7 * jc);
  const e4 = 0.016708634 - jc * (42037e-9 + 1267e-10 * jc);
  const c4 = Math.sin(m2 * RAD) * (1.914602 - jc * (4817e-6 + 14e-6 * jc)) + Math.sin(2 * m2 * RAD) * (0.019993 - 101e-6 * jc) + Math.sin(3 * m2 * RAD) * 289e-6;
  const omega = 125.04 - 1934.136 * jc;
  const lambda = l0 + c4 - 569e-5 - 478e-5 * Math.sin(omega * RAD);
  const eps0 = 23 + (26 + (21.448 - jc * (46.815 + jc * (59e-5 - jc * 1813e-6))) / 60) / 60;
  const eps = eps0 + 256e-5 * Math.cos(omega * RAD);
  const decl = Math.asin(Math.sin(eps * RAD) * Math.sin(lambda * RAD));
  const y3 = Math.tan(eps / 2 * RAD) ** 2;
  const eqt = 4 / RAD * (y3 * Math.sin(2 * l0 * RAD) - 2 * e4 * Math.sin(m2 * RAD) + 4 * e4 * y3 * Math.sin(m2 * RAD) * Math.cos(2 * l0 * RAD) - 0.5 * y3 * y3 * Math.sin(4 * l0 * RAD) - 1.25 * e4 * e4 * Math.sin(2 * m2 * RAD));
  const minutes = (t3 / 6e4 % 1440 + 1440) % 1440;
  const solar = ((minutes + eqt + 4 * lon) % 1440 + 1440) % 1440;
  const ha = (solar / 4 < 0 ? solar / 4 + 180 : solar / 4 - 180) * RAD;
  const phi = lat * RAD;
  const cosZ = Math.min(1, Math.max(-1, Math.sin(phi) * Math.sin(decl) + Math.cos(phi) * Math.cos(decl) * Math.cos(ha)));
  const zenith = Math.acos(cosZ);
  let elevation = 90 - zenith / RAD;
  elevation += refraction(elevation);
  const den = Math.cos(phi) * Math.sin(zenith);
  let azimuth = 180;
  if (Math.abs(den) > 1e-9) {
    const a3 = Math.acos(Math.min(1, Math.max(-1, (Math.sin(phi) * Math.cos(zenith) - Math.sin(decl)) / den))) / RAD;
    azimuth = ha > 0 ? (a3 + 180) % 360 : (540 - a3) % 360;
  }
  return { elevation, azimuth };
}
function refraction(h3) {
  if (h3 > 85) return 0;
  const te = Math.tan(h3 * RAD);
  const sec = h3 > 5 ? 58.1 / te - 0.07 / te ** 3 + 86e-6 / te ** 5 : h3 > -0.575 ? 1735 + h3 * (-518.2 + h3 * (103.4 + h3 * (-12.79 + h3 * 0.711))) : -20.772 / te;
  return sec / 3600;
}
function isNight(lat, lon, t3) {
  return sunAt(lat, lon, t3).elevation < -0.833;
}
function nightBands(lat, lon, from, to, stepMs = 5 * 6e4) {
  const out = [];
  let open = null;
  for (let t3 = from; t3 <= to; t3 += stepMs) {
    const night = isNight(lat, lon, t3);
    if (night && open === null) open = t3;
    if (!night && open !== null) {
      out.push([open, t3]);
      open = null;
    }
  }
  if (open !== null) out.push([open, to]);
  return out;
}

// src/timetravel/replay-hass.ts
var ReplayReadOnly = class extends Error {
  constructor(what) {
    super(`Time travel is read-only: ${what}`);
    this.name = "ReplayReadOnly";
  }
};
var WS_ALLOWED = /* @__PURE__ */ new Set([
  "neonplan3d/building/get",
  "neonplan3d/image/get",
  "neonplan3d/packs/list",
  "neonplan3d/timetravel/history",
  "history/history_during_period",
  "recorder/statistics_during_period"
]);
var SUBSCRIBE_ALLOWED = /* @__PURE__ */ new Set(["neonplan3d/building/subscribe"]);
var DYNAMIC = {
  light: ["brightness", "color_mode", "rgb_color", "color_temp_kelvin", "color_temp", "hs_color", "xy_color", "rgbw_color", "rgbww_color", "effect"],
  cover: ["current_position", "current_tilt_position"],
  climate: ["hvac_action", "current_temperature", "temperature", "target_temp_high", "target_temp_low", "current_humidity", "preset_mode", "fan_mode"],
  media_player: ["media_title", "media_artist", "media_album_name", "app_name", "app_id", "source", "volume_level", "is_volume_muted", "entity_picture", "media_content_id", "media_duration", "media_position", "media_position_updated_at", "media_series_title", "media_season", "media_episode", "media_channel"],
  weather: ["cloud_coverage", "wind_speed", "wind_speed_unit", "temperature", "humidity", "pressure", "wind_bearing", "visibility", "dew_point", "uv_index", "apparent_temperature", "precipitation"],
  fan: ["percentage", "preset_mode", "oscillating", "direction"],
  vacuum: ["battery_level", "status", "fan_speed"],
  water_heater: ["current_temperature", "temperature", "operation_mode"],
  humidifier: ["humidity", "current_humidity", "mode"],
  alarm_control_panel: ["changed_by"],
  lock: ["changed_by"],
  // a car's tracker: home or away only, never where
  device_tracker: ["latitude", "longitude", "gps_accuracy", "altitude", "course", "speed", "vertical_accuracy", "battery_level", "ip", "host_name", "mac", "zone", "in_zones"],
  sun: ["elevation", "azimuth", "rising", "next_rising", "next_setting", "next_dawn", "next_dusk", "next_noon", "next_midnight"]
};
var HIDDEN = ["person.", "device_tracker."];
var domainOf2 = (id) => id.slice(0, id.indexOf("."));
function withoutKeys(attrs, keys) {
  if (!keys?.some((k2) => k2 in attrs)) return attrs;
  const out = { ...attrs };
  for (const k2 of keys) delete out[k2];
  return out;
}
function refuse(what) {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("fp3d-replay-blocked", { detail: { what } }));
  throw new ReplayReadOnly(what);
}
function readOnlyHass(live, states) {
  const raw = live;
  const out = { ...live, states };
  out.callService = (domain, service) => refuse(`${domain}.${service}`);
  out.callWS = (msg) => WS_ALLOWED.has(String(msg.type)) ? live.callWS(msg) : refuse(String(msg.type));
  out.connection = {
    subscribeMessage: (cb, msg) => SUBSCRIBE_ALLOWED.has(String(msg.type)) ? live.connection.subscribeMessage(cb, msg) : refuse(String(msg.type))
  };
  for (const name of ["callApi", "callApiRaw"]) {
    const fn = raw[name];
    if (typeof fn === "function") out[name] = (method, ...rest) => String(method).toUpperCase() === "GET" ? fn.call(live, method, ...rest) : refuse(`${method} ${String(rest[0])}`);
  }
  for (const name of ["sendWS", "fetchWithAuth"]) if (name in raw) out[name] = () => refuse(name);
  return out;
}
var FLASHY = /* @__PURE__ */ new Set(["light", "switch", "input_boolean", "binary_sensor", "fan"]);
var Replay = class {
  timeline;
  cursor;
  requested;
  trackAt = /* @__PURE__ */ new Map();
  location;
  slots = /* @__PURE__ */ new Map();
  steps = /* @__PURE__ */ new Map();
  live = null;
  /** The states when the time travel began; static attributes (name, unit) come from them. */
  frozen;
  /** Everything that is not replayed, as it was at the start (people left out, cameras without a picture). */
  base = null;
  states = {};
  hass = null;
  /** Entities that went on and back off between the last two moments (a tick at a high speed skips them). */
  pulses = [];
  constructor(timeline, opts) {
    this.timeline = timeline;
    this.cursor = new Cursor(timeline);
    this.cursor.tracks.forEach((tr, i5) => this.trackAt.set(tr.id, i5));
    this.location = opts.location ?? null;
    this.frozen = opts.states ?? null;
    const allowed = new Set([...opts.allowed ?? []].filter((id) => id.startsWith("device_tracker.")));
    this.requested = [.../* @__PURE__ */ new Set([...opts.requested, ...timeline.tracks.keys(), ...timeline.series.keys()])].filter((id) => allowed.has(id) || !HIDDEN.some((p3) => id.startsWith(p3)));
  }
  /**
   * Tracks were added to the timeline (an entity the recorder had nothing of got live rows): the cursor takes
   * them in. The rows of the other tracks stay where they were, so their states stay the same objects.
   */
  refresh() {
    const t3 = this.cursor.t;
    this.cursor = new Cursor(this.timeline);
    this.trackAt.clear();
    this.cursor.tracks.forEach((tr, i5) => this.trackAt.set(tr.id, i5));
    if (Number.isFinite(t3)) this.cursor.at(t3);
  }
  /** Home Assistant at t; the same object as last time when nothing changed. `jump`: no pulses are looked for. */
  hassAt(live, t3, jump = true) {
    const frozen = this.frozen ??= live.states;
    let dirty = false;
    if (!this.base) {
      this.base = {};
      for (const [id, st] of Object.entries(frozen)) {
        if (HIDDEN.some((p3) => id.startsWith(p3))) continue;
        this.base[id] = id.startsWith("camera.") && st.attributes.entity_picture ? { ...st, attributes: withoutKeys(st.attributes, ["entity_picture", "access_token"]) } : st;
      }
      dirty = true;
    }
    if (!this.sameContext(live)) {
      this.live = live;
      dirty = true;
    }
    const prev = !jump && t3 > this.cursor.t && Number.isFinite(this.cursor.t) ? this.cursor.idx.slice() : null;
    this.cursor.at(t3);
    this.pulses = prev ? this.findPulses(prev) : [];
    const changed = [];
    for (const id of this.requested) {
      const before = this.slots.get(id);
      const slot = this.slot(id, t3, frozen[id], before);
      if (slot !== before) {
        this.slots.set(id, slot);
        changed.push(id);
      }
    }
    if (!dirty && !changed.length && this.hass) return this.hass;
    if (dirty) {
      this.states = { ...this.base };
      for (const id of this.requested) {
        const s4 = this.slots.get(id);
        if (s4) this.states[id] = s4.obj;
      }
    } else {
      this.states = { ...this.states };
      for (const id of changed) this.states[id] = this.slots.get(id).obj;
    }
    this.hass = readOnlyHass(this.live, this.states);
    return this.hass;
  }
  /** Tracks that stand as before but changed and changed back in between (a light on for a moment). */
  findPulses(prev) {
    const out = [];
    const idx = this.cursor.idx;
    for (let i5 = 0; i5 < idx.length; i5++) {
      const a3 = prev[i5];
      const b3 = idx[i5];
      if (a3 < 0 || b3 - a3 < 2) continue;
      const tr = this.cursor.tracks[i5];
      if (!FLASHY.has(domainOf2(tr.id))) continue;
      const s4 = tr.values[tr.vals[a3]].s;
      if (tr.values[tr.vals[b3]].s !== s4) continue;
      for (let k2 = a3 + 1; k2 < b3; k2++)
        if (tr.values[tr.vals[k2]].s !== s4) {
          out.push(tr.id);
          break;
        }
    }
    return out;
  }
  /** The live object differs from the one in use only in its states (a state change, not a registry one). */
  sameContext(live) {
    const was = this.live;
    if (!was) return false;
    if (was === live) return true;
    const now = live;
    for (const k2 in now) if (k2 !== "states" && now[k2] !== was[k2]) return false;
    for (const k2 in was) if (!(k2 in now)) return false;
    return true;
  }
  /** The state of one entity at t (`start`: its state when the time travel began): the previous slot when it reads the same. */
  slot(id, t3, start, before) {
    const i5 = this.trackAt.get(id);
    const series = this.timeline.series.get(id);
    let key;
    let make;
    if (id === "sun.sun" && this.location) {
      const at = sunAt(this.location.lat, this.location.lon, t3);
      const el = Math.round(at.elevation * 2) / 2;
      const az = Math.round(at.azimuth * 2) / 2;
      const rising = sunAt(this.location.lat, this.location.lon, t3 + 6e5).elevation > at.elevation;
      key = `${el}|${az}|${rising}`;
      make = () => ({
        entity_id: id,
        state: at.elevation > -0.833 ? "above_horizon" : "below_horizon",
        attributes: { ...withoutKeys(start?.attributes ?? {}, DYNAMIC.sun), elevation: el, azimuth: az, rising }
      });
    } else if (i5 !== void 0 && this.cursor.idx[i5] >= 0) {
      const track = this.cursor.tracks[i5];
      const k2 = this.cursor.idx[i5];
      const v2 = track.values[track.vals[k2]];
      const pos = id.startsWith("cover.") ? this.coverPos(track, k2, t3) : null;
      key = pos === null ? `${k2}` : `${k2}:${pos}`;
      make = () => {
        const attrs = { ...withoutKeys(start?.attributes ?? {}, DYNAMIC[domainOf2(id)]), ...v2.a ?? {} };
        if (pos !== null) attrs.current_position = pos;
        if (id === "sun.sun" && attrs.elevation === void 0) Object.assign(attrs, { elevation: v2.s === "above_horizon" ? 25 : -12, azimuth: 180 });
        const since = track.since[k2];
        return since > this.timeline.start ? { entity_id: id, state: v2.s, attributes: attrs, last_changed: new Date(since).toISOString() } : { entity_id: id, state: v2.s, attributes: attrs };
      };
    } else if (series) {
      const value = seriesValue(series, t3);
      const step = this.stepOf(id, series, start);
      const q = quantise(value, step);
      key = `n${q}`;
      make = () => ({ entity_id: id, state: q, attributes: start?.attributes ?? {}, last_changed: new Date(t3).toISOString() });
    } else {
      key = "none";
      make = () => ({ entity_id: id, state: "unknown", attributes: withoutKeys(start?.attributes ?? {}, DYNAMIC[domainOf2(id)]) });
    }
    if (before && before.key === key && before.attrs === start?.attributes) return before;
    return { key, attrs: start?.attributes, obj: make() };
  }
  coverPos(track, k2, t3) {
    const v2 = track.values[track.vals[k2]];
    if (v2.s !== "opening" && v2.s !== "closing") return null;
    const pos = (x2) => typeof x2.a?.current_position === "number" ? x2.a.current_position : null;
    const next = k2 + 1 < track.times.length ? { t: track.times[k2 + 1], pos: pos(track.values[track.vals[k2 + 1]]) } : null;
    return coverPosition(t3, { t: track.times[k2], state: v2.s, pos: pos(v2) }, next);
  }
  stepOf(id, series, start) {
    let step = this.steps.get(id);
    if (step === void 0) {
      const sample = series.mean.find((m2) => !Number.isNaN(m2)) ?? 0;
      step = quantStep(start?.attributes.unit_of_measurement, this.live?.entities?.[id]?.display_precision, sample);
      this.steps.set(id, step);
    }
    return step;
  }
  /** History rows of some entities between two moments (the state at `from` first), as Home Assistant answers them. */
  rows(ids, from, to) {
    const out = {};
    for (const id of ids) {
      const track = this.timeline.tracks.get(id);
      if (!track) continue;
      const list = [];
      for (let k2 = Math.max(0, indexAt(track.times, from)); k2 < track.times.length && track.times[k2] <= to; k2++) list.push({ s: track.values[track.vals[k2]].s, lu: track.times[k2] / 1e3 });
      if (list.length) out[id] = list;
    }
    return out;
  }
};

// src/timetravel/robot.ts
var RUN = /* @__PURE__ */ new Set(["cleaning", "paused", "returning"]);
var NONE = /* @__PURE__ */ new Set(["", "unknown", "unavailable", "none", "null"]);
function robotRun(vacuum, rooms, t3) {
  if (!vacuum) return [];
  const state = (k3) => vacuum.values[vacuum.vals[k3]].s;
  const at = indexAt(vacuum.times, t3);
  if (at < 0 || !RUN.has(state(at))) return [];
  let k2 = at;
  while (k2 > 0 && RUN.has(state(k2 - 1))) k2--;
  const start = vacuum.times[k2];
  const out = [];
  const add = (name) => {
    const s4 = typeof name === "string" ? name.trim() : "";
    if (!NONE.has(s4.toLowerCase()) && out[out.length - 1] !== s4) out.push(s4);
  };
  if (rooms) {
    let i5 = Math.max(0, indexAt(rooms.times, start));
    if (rooms.times[i5] < start - 6e4) i5++;
    for (; i5 < rooms.times.length && rooms.times[i5] <= t3; i5++) add(rooms.values[rooms.vals[i5]].s);
  } else for (let i5 = k2; i5 <= at; i5++) add(vacuum.values[vacuum.vals[i5]].a?.current_room);
  return out;
}

// src/timetravel/rooms.ts
var domainOf3 = (id) => id.slice(0, id.indexOf("."));
function areaOf(hass, id) {
  return entityAreaId(hass, id);
}
function roomEntities(hass, building, spec) {
  const out = [];
  const byArea = /* @__PURE__ */ new Map();
  for (const id of Object.keys(hass.entities ?? {})) {
    const area = areaOf(hass, id);
    if (area) byArea.set(area, [...byArea.get(area) ?? [], id]);
  }
  const openings = new Map(spec.openings);
  const furniture = new Map(spec.furniture);
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      if (room.points.length < 3) continue;
      const ids = new Set(room.area_id ? byArea.get(room.area_id) ?? [] : []);
      for (const p3 of floor.placements) if (pointInPolygon([p3.x, p3.z], room.points)) ids.add(p3.entity_id);
      for (const f3 of floor.furniture) {
        const l3 = furniture.get(f3.id);
        if (l3?.entity && pointInPolygon([f3.x, f3.z], room.points)) ids.add(l3.entity);
      }
      const windows = [];
      for (const o5 of floor.openings) {
        if (o5.room_id !== room.id) continue;
        const l3 = openings.get(o5.id);
        const sensors = l3 ? [l3.contact, l3.tilt, l3.contact2, l3.tilt2].filter((x2) => !!x2) : [];
        for (const id of sensors) ids.add(id);
        if (sensors.length && o5.type !== "door" && o5.type !== "garage") windows.push(sensors);
      }
      const all = [...ids].filter((id) => !!hass.states[id]);
      const cls = (id) => hass.states[id]?.attributes.device_class;
      out.push({
        floorId: floor.id,
        roomId: room.id,
        name: room.name,
        lights: all.filter((id) => domainOf3(id) === "light"),
        windows,
        climates: all.filter((id) => domainOf3(id) === "climate"),
        temps: all.filter((id) => domainOf3(id) === "sensor" && cls(id) === "temperature"),
        all
      });
    }
  }
  return out;
}
function roomOf(rooms) {
  const out = /* @__PURE__ */ new Map();
  for (const r4 of rooms) for (const id of r4.all) if (!out.has(id)) out.set(id, r4);
  return out;
}

// src/timetravel/summary.ts
var HOUR2 = 36e5;
function union(list, from, to) {
  const clipped = list.map(([a3, b3]) => [Math.max(a3, from), Math.min(b3, to)]).filter(([a3, b3]) => b3 > a3);
  clipped.sort((p3, q) => p3[0] - q[0]);
  const out = [];
  for (const s4 of clipped) {
    const last = out[out.length - 1];
    if (last && s4[0] <= last[1]) last[1] = Math.max(last[1], s4[1]);
    else out.push([s4[0], s4[1]]);
  }
  return out;
}
var total = (list) => list.reduce((s4, [a3, b3]) => s4 + (b3 - a3), 0);
function spansWhere(track, test, end) {
  const out = [];
  let open = null;
  for (let k2 = 0; k2 < track.times.length; k2++) {
    const on = test(track.values[track.vals[k2]]);
    if (on && open === null) open = track.times[k2];
    if (!on && open !== null) {
      out.push([open, track.times[k2]]);
      open = null;
    }
  }
  if (open !== null && end > open) out.push([open, end]);
  return out;
}
function quietStretches(timeline, motion, from, to, minMs = 2 * HOUR2) {
  const busy = union(
    motion.flatMap((id) => {
      const track = timeline.tracks.get(id);
      return track ? spans(track, OPEN, timeline.end) : [];
    }),
    from,
    to
  );
  if (!motion.some((id) => timeline.tracks.has(id))) return [];
  const out = [];
  let at = from;
  for (const [a3, b3] of busy) {
    if (a3 - at >= minMs) out.push([at, a3]);
    at = Math.max(at, b3);
  }
  if (to - at >= minMs) out.push([at, to]);
  return out;
}
function awaySuggestion(stretches) {
  for (let i5 = stretches.length - 1; i5 >= 0; i5--) {
    const [a3, b3] = stretches[i5];
    let day = 0;
    for (let t3 = a3; t3 < b3; t3 += 6e5) {
      const h3 = hourOf(t3);
      if (h3 >= 7 && h3 < 22) day += Math.min(6e5, b3 - t3);
    }
    if (day >= HOUR2) return [a3, b3];
  }
  return null;
}
var ORDER = ["alarm", "door", "window", "window_open", "light_on", "motion", "appliance"];
function awaySummary(input) {
  const { timeline, roles, events, from, to } = input;
  const rows = [];
  const grouped = /* @__PURE__ */ new Map();
  const count = (kind, entity, t3) => {
    const key = `${kind}:${entity}`;
    const r4 = grouped.get(key);
    if (r4) {
      r4.count++;
      r4.t = Math.min(r4.t, t3);
    } else {
      const row = { kind, entity, t: t3, count: 1, ms: 0 };
      grouped.set(key, row);
      rows.push(row);
    }
  };
  for (const e4 of events) {
    if (e4.t < from || e4.t > to) continue;
    if (IMPORTANT.has(e4.kind) || e4.kind === "rain") rows.push({ kind: "alarm", entity: e4.entity, t: e4.t, count: 1, ms: 0, event: e4.kind });
    else if (e4.kind === "door" || e4.kind === "garage" || e4.kind === "lock") count("door", e4.entity, e4.t);
    else if (e4.kind === "window") count("window", e4.entity, e4.t);
    else if (e4.kind === "washer" || e4.kind === "robot_done") rows.push({ kind: "appliance", entity: e4.entity, t: e4.t, count: 1, ms: 0, event: e4.kind });
  }
  for (const id of input.motion) {
    const track = timeline.tracks.get(id);
    if (!track) continue;
    for (const c4 of changes(track)) if (c4.from !== null && c4.t >= from && c4.t <= to && c4.to === "on" && c4.from !== "on") count("motion", id, c4.t);
    if (track.dropped) {
      for (const t3 of track.dropped) if (t3 >= from && t3 <= to) count("motion", id, t3);
    }
  }
  const lasting = (kind, id, list, minMs) => {
    const inside2 = union(list, from, to);
    const ms = total(inside2);
    if (ms >= minMs || inside2.length && inside2[inside2.length - 1][1] >= to && ms >= 6e4) rows.push({ kind, entity: id, t: inside2[0][0], count: inside2.length, ms });
  };
  for (const id of input.lights) {
    const track = timeline.tracks.get(id);
    if (track) lasting("light_on", id, spans(track, ON, timeline.end), 15 * 6e4);
  }
  for (const [id, role] of roles) {
    if (role !== "window" && role !== "window_more") continue;
    const track = timeline.tracks.get(id);
    if (track) lasting("window_open", id, spans(track, OPEN, timeline.end), 30 * 6e4);
  }
  return rows.sort((a3, b3) => ORDER.indexOf(a3.kind) - ORDER.indexOf(b3.kind) || (a3.kind === "light_on" || a3.kind === "window_open" ? b3.ms - a3.ms : a3.t - b3.t));
}
var ON = /* @__PURE__ */ new Set(["on"]);
function minMax(timeline, id, from, to) {
  let lo = Infinity;
  let hi = -Infinity;
  const s4 = timeline.series.get(id);
  if (s4) {
    for (let i5 = 0; i5 < s4.mean.length; i5++) {
      const t3 = s4.start + (i5 + 0.5) * s4.step;
      const v2 = s4.mean[i5];
      if (t3 < from || t3 > to || Number.isNaN(v2)) continue;
      lo = Math.min(lo, v2);
      hi = Math.max(hi, v2);
    }
  } else {
    const track = timeline.tracks.get(id);
    if (track)
      for (let k2 = Math.max(0, indexAt(track.times, from)); k2 < track.times.length && track.times[k2] <= to; k2++) {
        const v2 = Number(track.values[track.vals[k2]].s);
        if (!Number.isFinite(v2)) continue;
        lo = Math.min(lo, v2);
        hi = Math.max(hi, v2);
      }
  }
  return Number.isFinite(lo) ? [lo, hi] : null;
}
function daySummary(timeline, rooms, from, to, energy = null) {
  const end = Math.min(to, timeline.end);
  const out = [];
  const spansOf = (ids, test) => ids.flatMap((id) => {
    const track = timeline.tracks.get(id);
    return track ? spansWhere(track, test, timeline.end) : [];
  });
  for (const r4 of rooms) {
    const lightMs = total(union(spansOf(r4.lights, (v2) => v2.s === "on"), from, end));
    const windowMs = total(union(spansOf(r4.windows.flat(), (v2) => OPEN.has(v2.s)), from, end));
    const heatMs = total(union(spansOf(r4.climates, (v2) => v2.a?.hvac_action === "heating"), from, end));
    let tMin = null;
    let tMax = null;
    for (const id of r4.temps) {
      const mm = minMax(timeline, id, from, end);
      if (!mm) continue;
      tMin = tMin === null ? mm[0] : Math.min(tMin, mm[0]);
      tMax = tMax === null ? mm[1] : Math.max(tMax, mm[1]);
    }
    if (lightMs || windowMs || heatMs || tMin !== null) out.push({ roomId: r4.roomId, name: r4.name, lightMs, windowMs, heatMs, tMin, tMax });
  }
  return { from, to, rooms: out, energy };
}
function stateAt(timeline, id, t3) {
  const s4 = timeline.series.get(id);
  if (s4) {
    const v2 = seriesValue(s4, t3);
    return Number.isFinite(v2) ? String(v2) : null;
  }
  const track = timeline.tracks.get(id);
  if (!track) return null;
  const k2 = indexAt(track.times, t3);
  return k2 < 0 ? null : track.values[track.vals[k2]].s;
}
function energyAt(timeline, live, building, devices, ids, t3) {
  const states = {};
  for (const id of ids) {
    const s4 = stateAt(timeline, id, t3);
    if (s4 !== null) states[id] = { entity_id: id, state: s4, attributes: live[id]?.attributes ?? {} };
  }
  return energySummary({ states }, building, [], devices);
}
function energyIds(building, devices) {
  const e4 = building.energy;
  return [...new Set([e4.grid, e4.solar, e4.battery, e4.battery_soc, e4.consumption, devices.grid, devices.gridExport, ...devices.solar, ...devices.battery, ...devices.charge, ...devices.soc].filter((x2) => !!x2))];
}
function dayEnergy(at, from, to, step = 3e5) {
  let pv = 0;
  let imp = 0;
  let exp = 0;
  let use = 0;
  let any = false;
  const h3 = step / HOUR2 / 1e3;
  for (let t3 = from + step / 2; t3 < to; t3 += step) {
    const e4 = at(t3);
    if (e4.solar === null && e4.grid === null && e4.consumption === null) continue;
    any = true;
    pv += Math.max(0, e4.solar ?? 0) * h3;
    imp += Math.max(0, e4.grid ?? 0) * h3;
    exp += Math.max(0, -(e4.grid ?? 0)) * h3;
    use += Math.max(0, e4.consumption ?? 0) * h3;
  }
  if (!any) return null;
  return { pv, imp, exp, use, self: use > 0 ? Math.min(1, Math.max(0, 1 - imp / use)) : null };
}

// src/timetravel/texts.ts
var TT_DE = {
  tt_range_hint: "Zeitraum: 24 Stunden oder mehrere Tage",
  tt_days: "{n} T",
  tt_loading_day: "lade {day} \u2026",
  tt_recorder_days: "Recorder: {n} Tage",
  tt_memory_full: "Speichergrenze erreicht",
  tt_now_reached: "Gegenwart erreicht",
  tt_sheet: "Ereignisse, Zusammenfassungen",
  tt_tab_events: "Ereignisse",
  tt_tab_away: "Weg",
  tt_tab_day: "Tag",
  tt_close: "Schlie\xDFen",
  tt_f_safety: "Sicherheit",
  tt_f_openings: "T\xFCren & Fenster",
  tt_f_devices: "Ger\xE4te",
  tt_f_energy: "Energie",
  tt_follow: "Kamera folgt Ereignissen",
  tt_stop: "Bei wichtigen Ereignissen anhalten",
  tt_no_events: "Keine Ereignisse",
  tt_ev_window: "{name} ge\xF6ffnet",
  tt_ev_battery_full: "Speicher voll: {name}",
  tt_ev_pv_peak: "H\xF6chste PV-Leistung des Tages",
  tt_away_title: "W\xE4hrend du weg warst",
  tt_away_since: "Seit",
  tt_away_last: "seit der letzten Zeitreise",
  tt_away_quiet: "ruhig {from}\u2013{to}",
  tt_away_none: "Nichts passiert \u2013 alles ruhig.",
  tt_away_door: "{name}: {n}\xD7 ge\xF6ffnet",
  tt_away_motion: "Bewegung {name}: {n}\xD7",
  tt_away_light: "{name} brannte {d}",
  tt_away_open: "{name} stand {d} offen",
  tt_day_title: "Tages\xFCbersicht {day}",
  tt_day_light: "Licht",
  tt_day_window: "Fenster",
  tt_day_heat: "Heizen",
  tt_day_temp: "Temp.",
  tt_day_pv: "PV",
  tt_day_import: "Netzbezug",
  tt_day_export: "Einspeisung",
  tt_day_use: "Verbrauch",
  tt_day_self: "Autarkie",
  tt_day_compare: "Mit dem Vortag vergleichen",
  tt_day_before: "Vortag",
  tt_day_none: "F\xFCr diesen Tag gibt es noch keine Werte.",
  tt_day_partial: "unvollst\xE4ndig (ab {time})",
  tt_yesterday: "Gestern um diese Zeit"
};
var TT_EN = {
  tt_range_hint: "Range: 24 hours or several days",
  tt_days: "{n} d",
  tt_loading_day: "loading {day} \u2026",
  tt_recorder_days: "Recorder: {n} days",
  tt_memory_full: "Memory limit reached",
  tt_now_reached: "Present reached",
  tt_sheet: "Events, summaries",
  tt_tab_events: "Events",
  tt_tab_away: "Away",
  tt_tab_day: "Day",
  tt_close: "Close",
  tt_f_safety: "Safety",
  tt_f_openings: "Doors & windows",
  tt_f_devices: "Devices",
  tt_f_energy: "Energy",
  tt_follow: "Camera follows events",
  tt_stop: "Stop at important events",
  tt_no_events: "No events",
  tt_ev_window: "{name} opened",
  tt_ev_battery_full: "Battery full: {name}",
  tt_ev_pv_peak: "Highest solar power of the day",
  tt_away_title: "While you were away",
  tt_away_since: "Since",
  tt_away_last: "since the last time travel",
  tt_away_quiet: "quiet {from}\u2013{to}",
  tt_away_none: "Nothing happened \u2013 all quiet.",
  tt_away_door: "{name}: opened {n}\xD7",
  tt_away_motion: "Motion {name}: {n}\xD7",
  tt_away_light: "{name} was on for {d}",
  tt_away_open: "{name} stood open for {d}",
  tt_day_title: "Day summary {day}",
  tt_day_light: "Light",
  tt_day_window: "Window",
  tt_day_heat: "Heating",
  tt_day_temp: "Temp.",
  tt_day_pv: "Solar",
  tt_day_import: "Grid import",
  tt_day_export: "Export",
  tt_day_use: "Consumption",
  tt_day_self: "Self-sufficiency",
  tt_day_compare: "Compare with the day before",
  tt_day_before: "Day before",
  tt_day_none: "There are no values for this day yet.",
  tt_day_partial: "incomplete (from {time})",
  tt_yesterday: "Yesterday at this time"
};
function withTexts(t3, language) {
  return (key, vars = {}) => {
    const s4 = t3(key, vars);
    if (s4 !== key) return s4;
    const table = (language() ?? "").startsWith("de") ? TT_DE : TT_EN;
    let out = table[key] ?? TT_EN[key] ?? key;
    for (const [k2, v2] of Object.entries(vars)) out = out.replace(`{${k2}}`, String(v2));
    return out;
  };
}

// src/timetravel/entry.ts
var DAY = 24 * 36e5;
var BATCH = 150;
var STAT_BATCH = 250;
var MAX_BYTES = 10 * 1024 * 1024;
var EDGE_MS = 6e4;
var FLUSH_MS = 6e4;
var DERIVE_MS = 1e4;
function pref(key, value) {
  try {
    if (value !== void 0) localStorage.setItem(`fp3d-tt-${key}`, value);
    return localStorage.getItem(`fp3d-tt-${key}`);
  } catch {
    return null;
  }
}
var Session = class {
  hass = null;
  replay;
  state = "loading";
  /** Error code of the failed load ("not_unlocked", "no_recorder", "unknown_command" …). */
  error = null;
  progress = 0;
  playback = null;
  timeline = null;
  /** The bar's events (and the previous / next buttons'). */
  events = [];
  /** Every event, also the ones only the events sheet lists. */
  allEvents = [];
  /** Names for events whose entity says little (a power sensor stands for its washing machine). */
  names = /* @__PURE__ */ new Map();
  gaps = [];
  nights = [];
  rooms = [];
  roomOf = /* @__PURE__ */ new Map();
  opts;
  /** The end of the replay: when the time travel began, moved on by the live edge. */
  end;
  range;
  /** The day being fetched in the background (its start), null when none is. */
  loadingDay = null;
  /** No more older days: the memory limit was reached. */
  full = false;
  /** Bumped whenever the timeline grows (the summaries are worked out again). */
  version = 0;
  /** The camera follows the events; a fast replay stops at important ones. */
  follow = pref("follow") === "1";
  stopImportant = pref("stop") !== "0";
  /** When the time travel was last closed in this browser (for "while you were away"). */
  lastClosed;
  t;
  live;
  /** The states when the time travel began: nothing live after that shows in the past. */
  startStates;
  replayer = null;
  roles = /* @__PURE__ */ new Map();
  weather = null;
  devices = null;
  energyIds = [];
  requested = [];
  cars = [];
  liveLog = null;
  quality;
  low;
  timer;
  last = 0;
  followAt = 0;
  eventsAt = 0;
  /** When the live changes last joined the timeline. */
  flushedAt = 0;
  /** New live rows whose events, gaps and summaries are still to be worked out. */
  derivePending = false;
  /** Up to where the gaps were looked for. */
  gapsTo = 0;
  /** A jump that waits for an older day ("yesterday at this time" from the first day). */
  wanted = null;
  /** A day the comparison needs although the shown range does not reach it (its start). */
  needFrom = null;
  olderRunning = false;
  disposed = false;
  daySummaries = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  onVisible = () => {
    if (document.hidden || !this.playback?.playing) return;
    this.last = performance.now();
    this.schedule();
  };
  constructor(opts) {
    this.opts = opts;
    this.live = opts.live;
    this.startStates = opts.live.states;
    this.quality = opts.quality;
    this.low = opts.spec.low;
    this.t = withTexts(opts.t, () => this.live.language);
    setZone(zoneOf(opts.live));
    this.end = Date.now();
    this.range = opts.range === "7d" ? "7d" : "24h";
    const closed = Number(pref("closed"));
    this.lastClosed = Number.isFinite(closed) && closed > 0 && closed < this.end ? closed : null;
    const session = this;
    this.replay = {
      t: this.end,
      seek: 0,
      pulses: [],
      focus: null,
      focusSeq: 0,
      rows: (ids, from, to) => session.replayer?.rows(ids, from, to) ?? {},
      listen: (fn) => session.listen(fn),
      stats: (ids, from, to) => session.timeline ? statRows(session.timeline, ids, from, to) : {},
      robotRooms: (vacuum, sensor) => session.timeline ? robotRun(session.timeline.tracks.get(vacuum), sensor ? session.timeline.tracks.get(sensor) : void 0, session.replay.t) : [],
      setQuality: (quality, low) => session.setQuality(quality, low)
    };
    document.addEventListener("visibilitychange", this.onVisible);
    void this.load();
  }
  /** The time bar listens for redraws (clock, playhead, state). */
  listen(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  notify() {
    for (const fn of this.listeners) fn();
  }
  get playing() {
    return !!this.playback?.playing;
  }
  /** Days the week view may hold: a wall tablet two, unless the card asks for the week (time_travel_range: 7d). */
  get maxDays() {
    return (this.quality === "low" || this.low) && this.opts.range !== "7d" ? 2 : 7;
  }
  /** The start of the shown range: a day, or the days of the week view (loaded or not yet). */
  get start() {
    return this.end - (this.range === "7d" ? this.maxDays : 1) * DAY;
  }
  /** Where the recorder's data ends at the back (its purge_keep_days), null when unknown. */
  get recorderStart() {
    const keep = this.timeline?.keepDays;
    return typeof keep === "number" && keep > 0 ? this.end - keep * DAY : null;
  }
  /** The playhead stands at the present (the replay has caught up with live). */
  get atNow() {
    const pb = this.playback;
    return !!pb && !pb.playing && pb.t >= pb.end - 1e3 && Date.now() - pb.end < 12e4;
  }
  get location() {
    const c4 = this.live.config;
    return typeof c4?.latitude === "number" && typeof c4?.longitude === "number" ? { lat: c4.latitude, lon: c4.longitude } : null;
  }
  /** Energie Pro's sensors are part of the summaries and events. */
  get energy() {
    return !!this.opts.spec.energy && this.energyIds.length > 0;
  }
  /** One window of the history in a few requests, one after another (null: the session ended meanwhile). */
  async fetchWindow(from, to, onPart) {
    const req = historyRequest(this.live, this.opts.building, this.opts.spec);
    const parts = Math.max(1, Math.ceil(req.entities.length / BATCH), Math.ceil(req.stats.length / STAT_BATCH));
    const days = [];
    for (let i5 = 0; i5 < parts; i5++) {
      const entityIds = req.entities.slice(i5 * BATCH, (i5 + 1) * BATCH);
      const statIds = req.stats.slice(i5 * STAT_BATCH, (i5 + 1) * STAT_BATCH);
      const msg = { type: "neonplan3d/timetravel/history", start_time: from / 1e3, end_time: to / 1e3, entity_ids: entityIds, statistic_ids: statIds };
      const cars = req.cars.filter((id) => entityIds.includes(id));
      if (cars.length) msg.car_trackers = cars;
      days.push(await this.live.callWS(msg));
      if (this.disposed) return null;
      onPart?.((i5 + 1) / parts);
    }
    return buildTimeline(days);
  }
  /** Fetches the last day in a few requests, then replays from the start moment (paused); older days follow. */
  async load() {
    this.state = "loading";
    this.error = null;
    this.progress = 0;
    this.notify();
    const { building, spec } = this.opts;
    const live = this.live;
    const req = historyRequest(live, building, spec);
    let timeline;
    try {
      timeline = await this.fetchWindow(this.end - DAY, this.end, (share) => {
        this.progress = share;
        this.notify();
      });
    } catch (err) {
      if (this.disposed) return;
      const e4 = err;
      this.state = "error";
      this.error = e4?.code ?? e4?.message ?? String(err);
      this.notify();
      return;
    }
    if (!timeline) return;
    const privateIds = building.presence.flatMap((p3) => [p3.sensor]).filter((x2) => !!x2);
    this.requested = [...req.entities, ...req.stats, ...req.overflow, ...req.hidden, ...privateIds];
    this.cars = req.cars;
    const links = new Map(spec.furniture);
    this.devices = spec.energy ? deviceSensors(building, (f3) => links.get(f3.id)?.power ?? null) : null;
    this.energyIds = this.devices ? energyIds(building, this.devices) : [];
    this.rooms = roomEntities(live, building, spec);
    this.roomOf = roomOf(this.rooms);
    for (const [id, f3] of appliancePower(live, building, spec)) this.names.set(id, f3.name || this.t(`furn_${f3.type}`));
    this.setTimeline(timeline);
    const at = typeof this.opts.at === "number" ? this.opts.at : parseMoment(this.opts.at ?? null, this.end);
    this.playback = new Playback(timeline.start, this.end, at ?? this.end - 36e5, this.opts.speed ?? void 0, this.range === "7d" ? WEEK_SPEEDS : SPEEDS);
    this.liveLog = new LiveLog([...req.entities, ...req.stats, ...req.overflow], this.startStates, this.end);
    this.liveLog.record(this.live.states, Date.now());
    this.flushedAt = Date.now();
    this.state = "ready";
    this.apply(true);
    if (this.range === "7d") void this.loadOlder();
  }
  /** A new timeline (the first day, or an older day joined): replay, events, gaps and nights follow. */
  setTimeline(timeline) {
    const { building, spec } = this.opts;
    const live = this.live;
    const fetched = /* @__PURE__ */ new Set([...timeline.tracks.keys(), ...timeline.series.keys()]);
    this.roles = eventRoles(live, building, spec, fetched);
    if (rowCount(timeline) > THIN_ROWS) thinPulses(timeline, this.motion());
    this.timeline = timeline;
    this.version++;
    this.daySummaries.clear();
    this.replayer = new Replay(timeline, { requested: this.requested, location: this.location, states: this.startStates, allowed: this.cars });
    this.weather ??= [building.settings.weather_entity, ...Object.keys(live.states).filter((id) => id.startsWith("weather."))].find((id) => !!id && fetched.has(id)) ?? null;
    this.findEvents();
    this.gaps = findGaps(timeline);
    this.gapsTo = timeline.end;
    this.updateNights();
  }
  findEvents() {
    const timeline = this.timeline;
    if (!timeline) return;
    const { building, spec } = this.opts;
    const d3 = this.devices;
    const energy = d3 && spec.energy ? { solar: building.energy.solar ? [building.energy.solar] : d3.solar, soc: building.energy.battery_soc ? [building.energy.battery_soc] : d3.soc, sunDown: (t3) => this.sunDown(t3) } : null;
    const outageId = building.settings.outage_entity;
    const outage = outageId && this.live.states[outageId] ? { id: outageId, attributes: this.live.states[outageId].attributes } : null;
    this.allEvents = findEvents({ timeline, roles: this.roles, weather: this.weather, energy, outage });
    this.events = this.allEvents.filter((e4) => !MINOR.has(e4.kind));
  }
  /** The sun below the horizon at t (Home Assistant's location, else the replayed sun.sun; unknown: no). */
  sunDown(t3) {
    const loc = this.location;
    if (loc) return isNight(loc.lat, loc.lon, t3);
    const sun = this.timeline?.tracks.get("sun.sun");
    const k2 = sun ? indexAt(sun.times, t3) : -1;
    return !!sun && k2 >= 0 && sun.values[sun.vals[k2]].s === "below_horizon";
  }
  /** The events within the range the playhead can reach (older days of a week stay loaded in the 24-hour view). */
  shownEvents(all = false) {
    const pb = this.playback;
    const list = all ? this.allEvents : this.events;
    return pb ? eventsIn(list, Math.max(pb.start, this.start), this.end) : list;
  }
  motion() {
    return [...this.roles].filter(([, r4]) => r4 === "motion" || r4 === "camera").map(([id]) => id);
  }
  updateNights() {
    const loc = this.location;
    this.nights = loc ? nightBands(loc.lat, loc.lon, this.start, this.end) : this.sunNights();
  }
  /** Older days, newest first, one request at a time; stops on exit, at the recorder's limit and at the memory limit. */
  async loadOlder() {
    if (this.olderRunning) return;
    this.olderRunning = true;
    try {
      while (!this.disposed && this.timeline && !this.full) {
        const to = this.timeline.start;
        const target = Math.min(this.range === "7d" ? this.start : Infinity, this.needFrom ?? Infinity);
        if (to <= target + 6e4) break;
        const limit = this.recorderStart;
        if (limit !== null && to <= limit || this.timeline.oldest !== null && this.timeline.oldest > this.timeline.start) break;
        this.loadingDay = to - DAY;
        this.notify();
        let older;
        try {
          older = await this.fetchWindow(to - DAY, to);
        } catch (err) {
          console.warn("NeonPlan 3D: time travel could not load an older day", err);
          break;
        }
        if (!older || this.disposed || !this.timeline) return;
        const merged = mergeTimelines(older, this.timeline);
        this.setTimeline(merged);
        if (timelineBytes(merged) > MAX_BYTES) this.full = true;
        const pb = this.playback;
        if (!pb) continue;
        pb.setRange(Math.max(merged.start, this.start), this.end);
        let jumped = false;
        if (this.wanted !== null && this.wanted >= pb.start) {
          pb.seek(this.wanted);
          this.wanted = null;
          jumped = true;
        }
        this.apply(true, jumped);
      }
    } finally {
      this.olderRunning = false;
      if (!this.disposed) {
        this.loadingDay = null;
        this.notify();
      }
    }
  }
  /** 24 hours or the week; the days already fetched stay. */
  setRange(range) {
    const pb = this.playback;
    if (range === this.range || !pb || !this.timeline) return;
    this.range = range;
    const t3 = pb.t;
    pb.setRange(Math.max(this.timeline.start, this.start), this.end, range === "7d" ? WEEK_SPEEDS : SPEEDS);
    this.updateNights();
    if (pb.t !== t3) this.apply(true);
    else this.notify();
    if (range === "7d") void this.loadOlder();
  }
  /** Without a location: the nights where sun.sun was below the horizon. */
  sunNights() {
    const sun = this.timeline?.tracks.get("sun.sun");
    if (!sun) return [];
    const out = [];
    let open = null;
    for (let k2 = 0; k2 < sun.times.length; k2++) {
      const below = sun.values[sun.vals[k2]].s === "below_horizon";
      if (below && open === null) open = sun.times[k2];
      if (!below && open !== null) {
        out.push([open, sun.times[k2]]);
        open = null;
      }
    }
    if (open !== null) out.push([open, this.end]);
    return out;
  }
  /**
   * Builds Home Assistant at the playback's moment; the host renders again only when a state changed.
   * The listeners (time bar, 3D view) hear of every tick. `jump`: no pulses are looked for; `seek`: doors
   * and blinds stand at once.
   */
  apply(jump, seek = jump) {
    const pb = this.playback;
    if (!pb || !this.replayer || this.disposed) return;
    this.replay.t = pb.t;
    if (seek) this.replay.seek++;
    const next = this.replayer.hassAt(this.live, pb.t, jump);
    this.replay.pulses = this.replayer.pulses;
    if (next !== this.hass || jump) {
      this.hass = next;
      this.opts.onChange();
    }
    this.notify();
  }
  setLive(hass) {
    this.live = hass;
    setZone(zoneOf(hass));
    const now = Date.now();
    this.liveLog?.record(hass.states, now);
    const pb = this.playback;
    let moved = false;
    if (this.state === "ready" && pb && this.liveLog && (this.liveLog.pending && now - this.flushedAt >= FLUSH_MS || this.derivePending && now - this.eventsAt > DERIVE_MS)) {
      const atEnd = !pb.playing && pb.t >= pb.end - 1e3;
      this.edge(now);
      if (atEnd) pb.seek(pb.end);
      this.replay.t = pb.t;
      moved = true;
    }
    if (this.replayer && pb) this.hass = this.replayer.hassAt(hass, pb.t);
    if (moved) this.notify();
  }
  /** The view's quality changed: the replay ticks as often as it allows from the next tick on. */
  setQuality(quality, low) {
    const days = this.maxDays;
    this.quality = quality;
    this.low = low;
    const pb = this.playback;
    if (days === this.maxDays || !pb || !this.timeline) return;
    const keep = this.end - this.maxDays * DAY;
    const trim = this.timeline.start < keep - 6e4;
    if (trim) {
      this.setTimeline(trimTimeline(this.timeline, keep));
      this.full = false;
      if (this.needFrom !== null && this.needFrom < keep) this.needFrom = null;
      if (this.wanted !== null && this.wanted < keep) this.wanted = null;
    } else if (this.range !== "7d") return;
    const t3 = pb.t;
    pb.setRange(Math.max(this.timeline.start, this.start), this.end);
    this.updateNights();
    if (trim || pb.t !== t3) this.apply(true, pb.t !== t3);
    else this.notify();
    void this.loadOlder();
  }
  play() {
    const pb = this.playback;
    if (!pb) return;
    const restart = pb.t >= pb.end;
    pb.play();
    if (restart) this.apply(true);
    this.last = performance.now();
    this.schedule();
    this.notify();
  }
  pause() {
    this.playback?.pause();
    clearTimeout(this.timer);
    this.timer = void 0;
    if (this.derivePending) this.derive(Date.now());
    this.notify();
  }
  toggle() {
    if (this.playback?.playing) this.pause();
    else this.play();
  }
  /** Jump to a moment (scrubbing, an event); doors and blinds stand there at once. */
  seek(t3, pause = false) {
    if (!this.playback) return;
    if (pause) this.pause();
    this.wanted = null;
    this.playback.seek(t3);
    this.last = performance.now();
    this.apply(true);
  }
  /** The previous or next event (pauses there). */
  step(dir) {
    const pb = this.playback;
    if (!pb) return;
    const e4 = eventNear(this.shownEvents(), pb.t, dir);
    this.seek(e4 ? e4.t : dir > 0 ? pb.end : pb.start, true);
  }
  /** An event or a summary row: jump there (paused) and show where it happened. */
  goTo(e4) {
    this.seek(e4.t, true);
    this.focusOn(e4.entity);
  }
  /** The 3D view shows the entity (its floor, flying there). */
  focusOn(entity) {
    this.replay.focus = entity;
    this.replay.focusSeq++;
    this.notify();
  }
  /** The same moment a day earlier ("yesterday at this time"); the week is fetched when needed. */
  yesterday() {
    const pb = this.playback;
    if (!pb) return;
    const t3 = pb.t - DAY;
    if (t3 < pb.start && this.range === "24h") this.setRange("7d");
    this.seek(Math.max(t3, pb.start), true);
    if (t3 < pb.start && this.olderRunning) this.wanted = t3;
  }
  setFollow(on) {
    this.follow = on;
    pref("follow", on ? "1" : "0");
    this.notify();
  }
  setStopImportant(on) {
    this.stopImportant = on;
    pref("stop", on ? "1" : "0");
    this.notify();
  }
  nextSpeed() {
    this.playback?.nextSpeed();
    this.notify();
  }
  /** A quiet stretch (no motion in the house for two hours or more, mostly by day) worth offering as "while you were away". */
  awayOffer() {
    const timeline = this.timeline;
    return timeline ? awaySuggestion(quietStretches(timeline, this.motion(), timeline.start, this.end)) : null;
  }
  /** What happened between two moments (doors, windows, motion, lights left on …). */
  away(from, to) {
    const timeline = this.timeline;
    if (!timeline) return [];
    return awaySummary({ timeline, roles: this.roles, events: this.allEvents, lights: [...timeline.tracks.keys()].filter((id) => id.startsWith("light.")), motion: this.motion(), from, to });
  }
  /**
   * The comparison needs the day that begins at `day`: fetched in the background when the range does not
   * reach it (as far as the days the view may hold allow). Asked once per day.
   */
  ensureLoaded(day) {
    const timeline = this.timeline;
    if (!timeline || timeline.start <= day + 6e4 || this.needFrom !== null && this.needFrom <= day) return;
    if (day < this.end - this.maxDays * DAY - DAY) return;
    this.needFrom = day;
    void this.loadOlder();
  }
  /** The summary of the local day that begins at `day` (kept until the timeline grows). */
  daySummary(day) {
    const timeline = this.timeline;
    if (!timeline || day + DAY <= timeline.start || day > timeline.end) return null;
    const key = `${day}|${this.version}`;
    let s4 = this.daySummaries.get(key);
    if (!s4) {
      const next = nextDay(day);
      const from = Math.max(day, timeline.start);
      const to = Math.min(next, timeline.end);
      const d3 = this.devices;
      const energy = this.energy && d3 ? dayEnergy((t3) => energyAt(timeline, this.live.states, this.opts.building, d3, this.energyIds, t3), from, to) : null;
      s4 = daySummary(timeline, this.rooms, from, to, energy);
      this.daySummaries.set(key, s4);
    }
    return s4;
  }
  schedule() {
    clearTimeout(this.timer);
    this.timer = void 0;
    const pb = this.playback;
    if (!pb?.playing || this.disposed || document.hidden) return;
    this.timer = setTimeout(() => {
      this.timer = void 0;
      const now = performance.now();
      const dt = Math.min(2e3, now - this.last);
      this.last = now;
      const from = pb.t;
      if (pb.end - pb.t <= EDGE_MS + dt * pb.speed) this.edge();
      if (pb.advance(dt)) {
        const stop = this.stopImportant && pb.speed >= 900 ? crossedEvent(this.allEvents, from, pb.t, (e4) => IMPORTANT.has(e4.kind)) : null;
        if (stop) {
          pb.seek(stop.t);
          pb.pause();
          this.apply(true);
          this.focusOn(stop.entity);
          return;
        }
        this.apply(false);
        if (this.follow && now - this.followAt > 2500) {
          const e4 = crossedEvent(this.events, from, pb.t, () => true);
          if (e4) {
            this.followAt = now;
            this.focusOn(e4.entity);
          }
        }
      }
      if (pb.playing) this.schedule();
      else {
        if (this.derivePending) this.derive(Date.now());
        this.notify();
      }
    }, tickMs(this.quality, this.low));
  }
  /** Adds the live changes since the time travel began and moves the end (and the shown range) to now. */
  edge(now = Date.now()) {
    const pb = this.playback;
    const timeline = this.timeline;
    if (!pb || !timeline || !this.liveLog) return;
    if (now - this.end < 1e3 && !this.liveLog.pending && !this.derivePending) return;
    const { added, created } = this.liveLog.flush(timeline, now);
    this.flushedAt = now;
    this.end = now;
    pb.setRange(Math.max(timeline.start, this.start), now);
    if (created) this.replayer?.refresh();
    if (added || created) this.derivePending = true;
    if (this.derivePending && (!pb.playing || now - this.eventsAt > DERIVE_MS)) this.derive(now);
  }
  /** Events, gaps, nights and the summaries of the grown timeline. */
  derive(now) {
    const timeline = this.timeline;
    if (!timeline) return;
    this.derivePending = false;
    this.eventsAt = now;
    this.findEvents();
    const after = Math.max(timeline.start, this.gapsTo - 30 * 6e4);
    const kept = this.gaps.filter(([a3]) => a3 < after).map(([a3, b3]) => [a3, Math.min(b3, after)]);
    const fresh = findGaps(timeline, void 0, void 0, void 0, after);
    const seam = kept[kept.length - 1];
    if (seam && fresh.length && seam[1] >= after && fresh[0][0] <= after) seam[1] = fresh.shift()[1];
    this.gaps = [...kept, ...fresh];
    this.gapsTo = timeline.end;
    this.updateNights();
    this.version++;
    this.daySummaries.clear();
  }
  exit() {
    this.opts.onExit();
  }
  dispose() {
    if (!this.disposed && this.state === "ready") pref("closed", String(Date.now()));
    this.disposed = true;
    clearTimeout(this.timer);
    this.timer = void 0;
    this.listeners.clear();
    this.liveLog = null;
    document.removeEventListener("visibilitychange", this.onVisible);
  }
};
function startTimeTravel(opts) {
  return new Session(opts);
}
export {
  MAX_BYTES,
  Session,
  startTimeTravel
};
