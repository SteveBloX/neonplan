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

// src/model.ts
function outdoorStanding(type) {
  return type === "hedge" || type === "fence" || type === "pergola" || type === "gazebo";
}
function outdoorZones(floor) {
  return (floor.outdoor ?? []).filter((a3) => a3.area_id && a3.points.length >= 3 && !outdoorStanding(a3.type)).map((a3) => ({ id: a3.id, name: (a3.name ?? "").trim(), area_id: a3.area_id ?? null, points: a3.points, floor_material: "wood", outdoor: true, panel: a3.panel, hidden: a3.hidden, no_state: a3.no_state }));
}
function zonesOf(floor) {
  return [...floor.rooms, ...outdoorZones(floor)];
}
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
function signedArea(points) {
  let a3 = 0;
  for (let i5 = 0; i5 < points.length; i5++) {
    const [x0, z0] = points[i5];
    const [x1, z1] = points[(i5 + 1) % points.length];
    a3 += x0 * z1 - x1 * z0;
  }
  return a3 / 2;
}
function pointInPolygon(p3, points) {
  let inside = false;
  for (let i5 = 0, j = points.length - 1; i5 < points.length; j = i5++) {
    const [xi, zi] = points[i5];
    const [xj, zj] = points[j];
    if (zi > p3[1] !== zj > p3[1] && p3[0] < (xj - xi) * (p3[1] - zi) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

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

// src/geometry/walls.ts
var sub = (p3, q) => [p3[0] - q[0], p3[1] - q[1]];
var add = (p3, q) => [p3[0] + q[0], p3[1] + q[1]];
var mul = (p3, k2) => [p3[0] * k2, p3[1] * k2];
var dot = (p3, q) => p3[0] * q[0] + p3[1] * q[1];
var cross = (p3, q) => p3[0] * q[1] - p3[1] * q[0];
var len = (p3) => Math.hypot(p3[0], p3[1]);
var unit = (p3) => {
  const l3 = len(p3) || 1;
  return [p3[0] / l3, p3[1] / l3];
};
var leftNormal = (d3) => [-d3[1], d3[0]];
var rightNormal = (d3) => [d3[1], -d3[0]];
function generateWalls(rooms, options, free = []) {
  const eps = options.eps ?? 5e-3;
  const warnings = [];
  const freeWalls = free.filter((w2) => Math.hypot(w2.b[0] - w2.a[0], w2.b[1] - w2.a[1]) > 0.05);
  const verts = [];
  const vertexId = (p3) => {
    for (let i5 = 0; i5 < verts.length; i5++) {
      if (Math.abs(verts[i5][0] - p3[0]) <= eps && Math.abs(verts[i5][1] - p3[1]) <= eps) return i5;
    }
    verts.push([p3[0], p3[1]]);
    return verts.length - 1;
  };
  const edges = [];
  for (const room of rooms) {
    const pts = room.points;
    if (pts.length < 3 || Math.abs(signedArea(pts)) < 1e-6) continue;
    const ccw = signedArea(pts) > 0;
    const ids = pts.map(vertexId);
    for (let i5 = 0; i5 < pts.length; i5++) {
      const s4 = ids[i5];
      const e4 = ids[(i5 + 1) % pts.length];
      if (s4 === e4) continue;
      edges.push(ccw ? { u: s4, v: e4, room: room.id, edge: i5, forward: true } : { u: e4, v: s4, room: room.id, edge: i5, forward: false });
    }
  }
  const freeIds = freeWalls.map((w2) => [vertexId(w2.a), vertexId(w2.b)]);
  const splitNodes = /* @__PURE__ */ new Set();
  for (const room of rooms) {
    const pts = room.points;
    if (pts.length < 3) continue;
    (room.wall_splits ?? []).forEach((list, i5) => {
      if (!list || i5 >= pts.length) return;
      const a3 = pts[i5];
      const d3 = sub(pts[(i5 + 1) % pts.length], a3);
      const l3 = len(d3);
      for (const t3 of list) if (t3 > eps && t3 < l3 - eps) splitNodes.add(vertexId(add(a3, mul(d3, t3 / l3))));
    });
  }
  const segments = [];
  for (const e4 of edges) {
    const p3 = verts[e4.u];
    const q = verts[e4.v];
    const d3 = sub(q, p3);
    const l3 = len(d3);
    const dir2 = mul(d3, 1 / l3);
    const cuts = [];
    for (let i5 = 0; i5 < verts.length; i5++) {
      if (i5 === e4.u || i5 === e4.v) continue;
      const w2 = sub(verts[i5], p3);
      const t3 = dot(w2, dir2);
      if (t3 <= eps || t3 >= l3 - eps) continue;
      if (Math.abs(cross(dir2, w2)) <= eps) cuts.push({ t: t3, id: i5 });
    }
    cuts.sort((x2, y3) => x2.t - y3.t);
    const stops = [{ t: 0, id: e4.u }, ...cuts, { t: l3, id: e4.v }];
    for (let k2 = 0; k2 + 1 < stops.length; k2++) {
      const s4 = stops[k2];
      const n4 = stops[k2 + 1];
      const t0 = e4.forward ? s4.t : l3 - n4.t;
      const t1 = e4.forward ? n4.t : l3 - s4.t;
      segments.push({ u: s4.id, v: n4.id, room: e4.room, edge: e4.edge, t0, t1 });
    }
  }
  const groups = /* @__PURE__ */ new Map();
  for (const s4 of segments) {
    const key = s4.u < s4.v ? `${s4.u}-${s4.v}` : `${s4.v}-${s4.u}`;
    let g2 = groups.get(key);
    if (!g2) groups.set(key, g2 = []);
    g2.push(s4);
  }
  const src = (s4) => ({ room_id: s4.room, edge: s4.edge, t0: s4.t0, t1: s4.t1 });
  const partsOf = /* @__PURE__ */ new Map();
  for (const s4 of segments) {
    const key = `${s4.room}:${s4.edge}`;
    partsOf.set(key, [...partsOf.get(key) ?? [], s4.t0].sort((a3, b3) => a3 - b3));
  }
  const heightSet = (s4) => {
    const h3 = rooms.find((r4) => r4.id === s4.room)?.wall_heights?.[s4.edge];
    if (!Array.isArray(h3)) return h3;
    const parts = partsOf.get(`${s4.room}:${s4.edge}`) ?? [];
    return h3[parts.indexOf(s4.t0)] ?? null;
  };
  const heightOf = (list) => {
    const hs = list.map(heightSet).filter((h3) => typeof h3 === "number" && h3 > 0);
    if (hs.length) return Math.min(...hs);
    const cs = list.map((s4) => rooms.find((r4) => r4.id === s4.room)?.ceiling_height);
    return cs.every((c4) => typeof c4 === "number" && c4 > 0) ? Math.max(...cs) : void 0;
  };
  const thickOf = (list) => {
    const ts = list.map((s4) => rooms.find((r4) => r4.id === s4.room)?.wall_thickness?.[s4.edge]).filter((t3) => typeof t3 === "number" && t3 > 0);
    return ts.length ? Math.max(...ts) : void 0;
  };
  const slopeOf = (list) => {
    for (const s4 of list) {
      const room = rooms.find((r4) => r4.id === s4.room);
      const sl = room?.wall_slopes?.[s4.edge];
      if (!room || !sl) continue;
      const p3 = room.points[s4.edge];
      const q = room.points[(s4.edge + 1) % room.points.length];
      return { p: [p3[0], p3[1]], q: [q[0], q[1]], h0: Math.max(0.05, sl[0]), h1: Math.max(0.05, sl[1]) };
    }
    return void 0;
  };
  const noWall = (list) => list.some((s4) => heightSet(s4) === 0);
  const withSlope = (list) => {
    const slope = slopeOf(list);
    return slope ? { height: Math.max(slope.h0, slope.h1), slope } : { height: heightOf(list) };
  };
  const open = [];
  let drafts = [];
  for (const g2 of groups.values()) {
    const first = g2[0];
    const partner = g2.find((s4) => s4 !== first && s4.u === first.v && s4.v === first.u && s4.room !== first.room);
    for (const s4 of g2) {
      if (s4 !== first && s4 !== partner && s4.room !== first.room) warnings.push(`overlap:${first.room}:${s4.room}`);
    }
    if (noWall(partner ? [first, partner] : [first])) {
      if (partner) open.push([first.room, partner.room]);
      continue;
    }
    if (partner) {
      const t3 = thickOf([first, partner]) ?? options.interior;
      drafts.push({
        a: first.u,
        b: first.v,
        left: t3 / 2,
        right: t3 / 2,
        exterior: false,
        roomLeft: first.room,
        roomRight: partner.room,
        sources: [src(first), src(partner)],
        ...withSlope([first, partner])
      });
    } else {
      drafts.push({
        a: first.u,
        b: first.v,
        left: 0,
        right: thickOf([first]) ?? options.exterior,
        exterior: true,
        roomLeft: first.room,
        roomRight: null,
        sources: [src(first)],
        ...withSlope([first])
      });
    }
  }
  const dir = (d3) => unit(sub(verts[d3.b], verts[d3.a]));
  for (const d3 of drafts) {
    if (d3.exterior || d3.free) continue;
    const sides = /* @__PURE__ */ new Set();
    for (const node of [d3.a, d3.b]) {
      for (const e4 of drafts) {
        if (!e4.exterior || e4.free || e4.a !== node && e4.b !== node) continue;
        if (Math.abs(cross(dir(d3), dir(e4))) > 1e-6) continue;
        if (e4.roomLeft === d3.roomLeft) sides.add("left");
        else if (e4.roomLeft === d3.roomRight) sides.add("right");
      }
    }
    if (sides.size !== 1) continue;
    const t3 = d3.left + d3.right;
    if (sides.has("left")) {
      d3.left = 0;
      d3.right = t3;
    } else {
      d3.left = t3;
      d3.right = 0;
    }
  }
  freeWalls.forEach((w2, i5) => {
    const [ia, ib] = freeIds[i5];
    if (ia === ib) return;
    const mid = [(w2.a[0] + w2.b[0]) / 2, (w2.a[1] + w2.b[1]) / 2];
    const room = rooms.find((r4) => r4.points.length >= 3 && pointInPolygon(mid, r4.points))?.id ?? null;
    const half = (w2.thickness ?? options.interior) / 2;
    const height = typeof w2.height === "number" && w2.height > 0 ? w2.height : void 0;
    drafts.push({ free: w2.id, a: ia, b: ib, left: half, right: half, exterior: false, roomLeft: room, roomRight: room, sources: [], height });
  });
  drafts = mergeCollinear(drafts, verts, splitNodes);
  const corners = computeCorners(drafts, verts);
  const walls = drafts.map((w2, i5) => {
    const a3 = verts[w2.a];
    const b3 = verts[w2.b];
    const ca = corners.get(`${i5}:a`);
    const cb = corners.get(`${i5}:b`);
    const footprint = cleanPolygon([ca.right, cb.left, b3, cb.right, ca.left, a3], 1e-6);
    return {
      id: wallId(a3, b3),
      a: [a3[0], a3[1]],
      b: [b3[0], b3[1]],
      left: w2.left,
      right: w2.right,
      exterior: w2.exterior,
      roomLeft: w2.roomLeft,
      roomRight: w2.roomRight,
      sources: w2.sources,
      footprint,
      ...w2.free ? { free: w2.free } : {},
      ...w2.height !== void 0 ? { height: w2.height } : {},
      ...w2.slope ? { slope: w2.slope } : {}
    };
  });
  return { walls, warnings: [...new Set(warnings)], open };
}
function wallId(a3, b3) {
  const r4 = (x2) => Math.round(x2 * 100);
  const [p3, q] = a3[0] < b3[0] || a3[0] === b3[0] && a3[1] <= b3[1] ? [a3, b3] : [b3, a3];
  return `w_${r4(p3[0])}_${r4(p3[1])}_${r4(q[0])}_${r4(q[1])}`;
}
function flip(w2) {
  return { ...w2, a: w2.b, b: w2.a, left: w2.right, right: w2.left, roomLeft: w2.roomRight, roomRight: w2.roomLeft };
}
function mergeCollinear(drafts, verts, fixed = /* @__PURE__ */ new Set()) {
  const list = drafts.slice();
  let merged = true;
  while (merged) {
    merged = false;
    const incident = /* @__PURE__ */ new Map();
    list.forEach((w2, i5) => {
      for (const n4 of [w2.a, w2.b]) {
        let l3 = incident.get(n4);
        if (!l3) incident.set(n4, l3 = []);
        l3.push(i5);
      }
    });
    for (const [node, ids] of incident) {
      if (ids.length !== 2 || fixed.has(node)) continue;
      let w1 = list[ids[0]];
      let w2 = list[ids[1]];
      if (w1.b !== node) w1 = flip(w1);
      if (w2.a !== node) w2 = flip(w2);
      if (w1.a === w2.b) continue;
      const d1 = unit(sub(verts[w1.b], verts[w1.a]));
      const d22 = unit(sub(verts[w2.b], verts[w2.a]));
      if (Math.abs(cross(d1, d22)) > 1e-6 || dot(d1, d22) <= 0) continue;
      if (w1.free || w2.free || w1.height !== w2.height || !!w1.slope || !!w2.slope || w1.exterior !== w2.exterior || w1.roomLeft !== w2.roomLeft || w1.roomRight !== w2.roomRight || Math.abs(w1.left - w2.left) > 1e-9 || Math.abs(w1.right - w2.right) > 1e-9) {
        continue;
      }
      const joined = { ...w1, b: w2.b, sources: joinSources(w1.sources, w2.sources) };
      const keep = list.filter((_2, i5) => i5 !== ids[0] && i5 !== ids[1]);
      keep.push(joined);
      list.length = 0;
      list.push(...keep);
      merged = true;
      break;
    }
  }
  return list;
}
function joinSources(a3, b3) {
  const out = a3.map((s4) => ({ ...s4 }));
  for (const s4 of b3) {
    const same = out.find((o5) => o5.room_id === s4.room_id && o5.edge === s4.edge && (Math.abs(o5.t1 - s4.t0) < 1e-6 || Math.abs(s4.t1 - o5.t0) < 1e-6));
    if (same) {
      same.t0 = Math.min(same.t0, s4.t0);
      same.t1 = Math.max(same.t1, s4.t1);
    } else {
      out.push({ ...s4 });
    }
  }
  return out;
}
function computeCorners(drafts, verts) {
  const byNode = /* @__PURE__ */ new Map();
  drafts.forEach((w2, i5) => {
    const d3 = unit(sub(verts[w2.b], verts[w2.a]));
    const outs = [
      [w2.a, { key: `${i5}:a`, d: d3, left: w2.left, right: w2.right, angle: Math.atan2(d3[1], d3[0]) }],
      [w2.b, { key: `${i5}:b`, d: mul(d3, -1), left: w2.right, right: w2.left, angle: Math.atan2(-d3[1], -d3[0]) }]
    ];
    for (const [node, o5] of outs) {
      let l3 = byNode.get(node);
      if (!l3) byNode.set(node, l3 = []);
      l3.push(o5);
    }
  });
  const result = /* @__PURE__ */ new Map();
  for (const [node, outs] of byNode) {
    const p3 = verts[node];
    outs.sort((x2, y3) => x2.angle - y3.angle);
    const square = (o5) => ({
      left: add(p3, mul(leftNormal(o5.d), o5.left)),
      right: add(p3, mul(rightNormal(o5.d), o5.right))
    });
    for (const o5 of outs) result.set(o5.key, square(o5));
    if (outs.length < 2) continue;
    const limit = 4 * Math.max(...outs.map((o5) => Math.max(o5.left, o5.right))) + 1e-9;
    for (let k2 = 0; k2 < outs.length; k2++) {
      const o5 = outs[k2];
      const n4 = outs[(k2 + 1) % outs.length];
      const po = add(p3, mul(leftNormal(o5.d), o5.left));
      const pn = add(p3, mul(rightNormal(n4.d), n4.right));
      const c4 = cross(o5.d, n4.d);
      if (Math.abs(c4) < 1e-4) continue;
      const t3 = cross(sub(pn, po), n4.d) / c4;
      const corner = add(po, mul(o5.d, t3));
      if (len(sub(corner, p3)) > limit) continue;
      result.get(o5.key).left = corner;
      result.get(n4.key).right = corner;
    }
  }
  return result;
}
function cleanPolygon(points, eps) {
  let pts = points.filter((p3, i5) => len(sub(p3, points[(i5 + 1) % points.length])) > eps);
  let changed = true;
  while (changed && pts.length > 3) {
    changed = false;
    for (let i5 = 0; i5 < pts.length; i5++) {
      const prev = pts[(i5 + pts.length - 1) % pts.length];
      const cur = pts[i5];
      const next = pts[(i5 + 1) % pts.length];
      const d1 = sub(cur, prev);
      const d22 = sub(next, cur);
      if (Math.abs(cross(unit(d1), unit(d22))) < 1e-7 && dot(d1, d22) > 0) {
        pts = pts.filter((_2, j) => j !== i5);
        changed = true;
        break;
      }
    }
  }
  return pts;
}
function pointOnRoomEdge(room, edge, offset) {
  const p3 = room.points[edge];
  const q = room.points[(edge + 1) % room.points.length];
  const d3 = unit(sub(q, p3));
  return add(p3, mul(d3, offset));
}
function openingHost(o5, rooms, free) {
  if (o5.wall) {
    const w2 = free.find((x2) => x2.id === o5.wall);
    if (!w2 || Math.hypot(w2.b[0] - w2.a[0], w2.b[1] - w2.a[1]) < 0.05) return null;
    const d3 = unit(sub(w2.b, w2.a));
    const room2 = { id: o5.room_id, name: "", area_id: null, points: [w2.a, w2.b, add(w2.a, [-d3[1], d3[0]])] };
    return { room: room2, edge: 0 };
  }
  const room = rooms.find((r4) => r4.id === o5.room_id);
  return room && o5.edge < room.points.length ? { room, edge: o5.edge } : null;
}
function locateOpening(walls, o5, host) {
  if (!o5.wall) return locateOnWalls(walls, host.room, host.edge, o5.offset);
  const wall = walls.find((w2) => w2.free === o5.wall);
  if (!wall) return null;
  const p3 = pointOnRoomEdge(host.room, 0, o5.offset);
  return { wall, s: dot(sub(p3, wall.a), unit(sub(wall.b, wall.a))) };
}
function locateOnWalls(walls, room, edge, offset) {
  for (const wall of walls) {
    const hit = wall.sources.find((s4) => s4.room_id === room.id && s4.edge === edge && offset >= s4.t0 - 1e-6 && offset <= s4.t1 + 1e-6);
    if (!hit) continue;
    const p3 = pointOnRoomEdge(room, edge, offset);
    return { wall, s: dot(sub(p3, wall.a), unit(sub(wall.b, wall.a))) };
  }
  return null;
}

// src/locate/graph.ts
function locateRooms(b3) {
  return b3.floors.flatMap((f3) => zonesOf(f3).map((r4) => ({ id: r4.id, name: r4.name, floor: f3.name, area_id: r4.area_id ?? null })));
}
function doorPairs(b3) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  for (const floor of b3.floors) {
    const walls = generateWalls(floor.rooms, { exterior: b3.settings.wall_exterior, interior: b3.settings.wall_interior }, floor.walls ?? []).walls;
    for (const o5 of floor.openings) {
      if (o5.type === "window" && !(o5.sill < 0.1)) continue;
      const host = openingHost(o5, floor.rooms, floor.walls ?? []);
      const at = host && locateOpening(walls, o5, host);
      let a3 = at?.wall.roomLeft;
      let c4 = at?.wall.roomRight;
      if (at && (!a3 || !c4)) {
        const w2 = at.wall;
        const len2 = Math.hypot(w2.b[0] - w2.a[0], w2.b[1] - w2.a[1]) || 1;
        const u3 = [(w2.b[0] - w2.a[0]) / len2, (w2.b[1] - w2.a[1]) / len2];
        const side = a3 ? -1 : 1;
        const out2 = (side > 0 ? w2.left : w2.right) + 0.5;
        const s4 = at.s;
        const p3 = [w2.a[0] + u3[0] * s4 - u3[1] * side * out2, w2.a[1] + u3[1] * s4 + u3[0] * side * out2];
        const zone = zonesOf(floor).find((r4) => r4.outdoor && pointInPolygon(p3, r4.points))?.id;
        if (a3) c4 = zone;
        else a3 = zone;
      }
      if (!a3 || !c4 || a3 === c4) continue;
      const key = [a3, c4].sort().join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      out.push([a3, c4]);
    }
  }
  return out;
}
function roomAt(b3, floorId, x2, z2) {
  const floor = b3.floors.find((f3) => f3.id === floorId);
  return floor ? zonesOf(floor).find((r4) => pointInPolygon([x2, z2], r4.points))?.id ?? null : null;
}

// src/locate/setup.ts
var DE = {
  title: "Ortung einrichten",
  lab: "Labor",
  close: "Schlie\xDFen",
  s_scanners: "1 \xB7 Empf\xE4nger",
  s_devices: "2 \xB7 Ger\xE4te",
  s_walk: "3 \xB7 Einlernen",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistant hat kein Bluetooth eingerichtet. Shelly (Gen2/3: Bluetooth-Scan passiv), ESPHome-Bluetooth-Proxys oder ein USB-Stick gen\xFCgen.",
  scanners_intro: "Das sind alle Bluetooth-Empf\xE4nger, die Home Assistant kennt. Sag bei jedem, in welchem Raum er steht.",
  not_placed: "\u2013 Raum w\xE4hlen \u2013",
  hint_room: "Signal sagt: {room} \u2013 \xFCbernehmen",
  coverage: "R\xE4ume ohne eigenen Empf\xE4nger \u2013 das Einlernen macht sie trotzdem erkennbar:",
  devices_intro: "Welche Ger\xE4te sollen geortet werden? Am besten das, was du immer dabei hast \u2013 die Uhr am Handgelenk ist ideal.",
  known_keys: "iPhone und Apple Watch mit Schl\xFCssel (aus \u201EPrivate BLE Device\u201C in Home Assistant):",
  add: "Hinzuf\xFCgen",
  added: "\u2713 dabei",
  remove: "Entfernen",
  person: "Person",
  none: "keine",
  irk_help: "iPhone oder Apple Watch fehlt? Sie brauchen ihren Schl\xFCssel (IRK) als \u201EPrivate BLE Device\u201C in Home Assistant \u2013 die Anleitung zeigt die einfachsten Wege.",
  manual: "Anleitung",
  voice_hint: "Frag auch per Sprache: \u201EWo ist mein iPhone?\u201C, \u201EWo ist Torsten?\u201C, \u201EWer ist zu Hause?\u201C, \u201ELass mein iPhone klingeln\u201C.",
  look_hint: "In 3D erscheinen Personen als Figur; im \u2699-Men\xFC der Ansicht: Personen \u2192 Figur, Pin oder aus.",
  ring: "Klingeln",
  ring_hint: "Die Home-Assistant-App auf diesem Handy \u2013 dann klappt \u201ELass mein iPhone klingeln\u201C.",
  near_title: "Ger\xE4t in der N\xE4he suchen",
  key_title: "Schl\xFCssel einf\xFCgen",
  key_name: "Name (z. B. Torstens iPhone)",
  key_value: "Schl\xFCssel (IRK, 32 Zeichen)",
  key_bad: "Das ist kein g\xFCltiger Schl\xFCssel (32 Hex-Zeichen oder Base64).",
  helper_title: "\u{1F511} Schl\xFCssel-Helfer",
  helper_build: "Schl\xFCssel-Helfer einrichten",
  helper_found: "Schl\xFCssel-Helfer gefunden: {name}",
  helper_watch: "F\xFCr Apple Watch",
  helper_phone: "F\xFCr iPhone",
  helper_watch_steps: "Auf der Uhr: Einstellungen \u2192 Bluetooth \u2192 unter \u201EGesundheitsger\xE4te\u201C auf \u201ENeonPlan Key\u201C tippen und koppeln.",
  helper_phone_steps: "Am Handy: Einstellungen \u2192 Bluetooth \u2192 \u201ENeonPlan Key\u201C (erscheint als Tastatur) koppeln.",
  helper_key: "Gelesener Schl\xFCssel:",
  helper_wait: "Warte auf das Koppeln \u2026",
  helper_after: "Danach das Ger\xE4t \u201ENeonPlan Key\u201C in den Bluetooth-Einstellungen wieder entfernen.",
  helper_next: "\u{1F504} N\xE4chstes Ger\xE4t",
  helper_next_hint: "Vor jedem weiteren Ger\xE4t antippen: Der Helfer bekommt eine neue Bluetooth-Kennung, ein schon gekoppeltes Ger\xE4t verbindet sich dann nicht mehr dazwischen.",
  helper_name: "Name f\xFCr dieses Ger\xE4t",
  helper_irk: "Gelesener Schl\xFCssel (IRK) des Ger\xE4ts, das sich gerade gekoppelt hat:",
  helper_belongs: "Geh\xF6rt zu: {name}",
  helper_add_as: "Als \u201E{name}\u201C hinzuf\xFCgen",
  helper_added: "\u2713 \u201E{name}\u201C ist jetzt in der Liste oben.",
  pbd_rename: "Tipp: in Home Assistant umbenennen (Ger\xE4te & Dienste \u2192 Private BLE Device), dann steht hier der Name.",
  carry: "Ich habe gerade dabei:",
  offline: "gerade nicht erreichbar",
  pbd_summary: "Von Bermuda umsteigen? Schl\xFCssel aus Home Assistant \xFCbernehmen",
  worn: "am K\xF6rper",
  worn_hint: "Am K\xF6rper getragen (Uhr, Band): zeigt, wo die Person ist \u2013 ein Handy kann irgendwo liegen.",
  look_title: "Personen in 3D",
  look_figure: "Figur",
  look_pin: "Pin",
  look_off: "aus",
  near_summary: "Android-Handy oder Schl\xFCsselanh\xE4nger hinzuf\xFCgen",
  android_label: "Android-Handy (HA-App)",
  paste_summary: "Eigenen Schl\xFCssel einf\xFCgen",
  helper_install: "Auf ESP32 installieren",
  helper_pitch: "F\xFCr iPhone und Apple Watch: Ein ESP32 f\xFCr ca. 5 \u20AC wird in drei Minuten zum Schl\xFCssel-Helfer \u2013 direkt im Browser installiert, ganz ohne Mac. Danach hier koppeln.",
  near_intro: "Halte das Ger\xE4t direkt an einen Empf\xE4nger. Android: in der Home-Assistant-App \u201EBLE-Sender\u201C einschalten. Schl\xFCsselanh\xE4nger: kurz dr\xFCcken.",
  near_empty: "Noch nichts Starkes in der N\xE4he \u2026",
  walk_intro: "Geh in jeden Raum, tippe ihn an und lauf 90 Sekunden langsam herum \u2013 auch in die Ecken. Nimm alle Ger\xE4te mit.",
  learning: "Lerne {room} \u2026 noch {left} s",
  stop: "Abbrechen",
  samples: "{n} Proben",
  quality: "Trefferquote pr\xFCfen",
  quality_result: "Trefferquote: {p}",
  relearn_all: "Alles neu einlernen",
  live_intro: "So sieht NeonPlan dich gerade. Lauf herum und schau, ob es stimmt.",
  enabled: "Ortung eingeschaltet",
  admins_only: "Personen nur f\xFCr Admins zeigen",
  not_heard: "nicht geh\xF6rt",
  next: "Weiter",
  need_device: "Erst ein Ger\xE4t hinzuf\xFCgen.",
  app_title: "Android mit der Home-Assistant-App",
  app_none: "Android-Handy? In der Home-Assistant-App: Einstellungen \u2192 Companion-App \u2192 Sensoren verwalten \u2192 \u201EBLE-Sender\u201C einschalten. Dann erscheint es hier von selbst.",
  app_off: "Sender ist aus \u2013 in der App einschalten",
  app_power: "Sendeleistung zu niedrig \u2013 in der App auf \u201EHoch\u201C (High) stellen",
  app_mode: "Sendemodus in der App auf \u201ENiedrige Latenz\u201C (Low latency) stellen",
  helper_android: "Android-Handys und -Tablets hier nicht koppeln: Sie senden diesen Schl\xFCssel im Hintergrund nicht. F\xFCr Android den BLE-Sender der Home-Assistant-App nehmen (unten).",
  unheard: "\u26A0 nicht geh\xF6rt",
  unheard_hint: "Gerade h\xF6rt kein Empf\xE4nger dieses Ger\xE4t. Ist es an und sendet es? Android: BLE-Sender der Home-Assistant-App.",
  fly: "Bei \u201EWo ist \u2026?\u201C und \u201EWer ist zu Hause?\u201C in die R\xE4ume fliegen",
  fly_hint: "Die offenen NeonPlan-Ansichten fliegen in den Raum der Antwort, bei \u201EWer ist zu Hause?\u201C nacheinander in alle R\xE4ume. Antippen stoppt. Personen nicht, wenn sie nur Admins gezeigt werden."
};
var EN = {
  title: "Set up locating",
  lab: "Lab",
  close: "Close",
  s_scanners: "1 \xB7 Scanners",
  s_devices: "2 \xB7 Devices",
  s_walk: "3 \xB7 Learn",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistant has no Bluetooth set up. Shelly (Gen2/3: Bluetooth scanning passive), ESPHome Bluetooth proxies or a USB adapter will do.",
  scanners_intro: "These are all Bluetooth scanners Home Assistant knows. Tell NeonPlan which room each one is in.",
  not_placed: "\u2013 pick a room \u2013",
  hint_room: "Signals say: {room} \u2013 use it",
  coverage: "Rooms without a scanner of their own \u2013 learning makes them recognisable anyway:",
  devices_intro: "Which devices should be located? Best what you always carry \u2013 a watch on the wrist is ideal.",
  known_keys: 'iPhone and Apple Watch with a key (from "Private BLE Device" in Home Assistant):',
  add: "Add",
  added: "\u2713 added",
  remove: "Remove",
  person: "Person",
  none: "none",
  irk_help: 'iPhone or Apple Watch missing? They need their key (IRK) as a "Private BLE Device" in Home Assistant \u2013 the manual shows the easiest ways.',
  manual: "Manual",
  voice_hint: 'Ask by voice too: "Where is my iPhone?", "Where is Torsten?", "Who is home?", "Ring my iPhone".',
  look_hint: "In 3D people stand as a figure; in the view's \u2699 menu: People \u2192 figure, pin or off.",
  ring: "Ring",
  ring_hint: 'The Home Assistant app on this phone \u2013 then "ring my iPhone" works.',
  near_title: "Find a device nearby",
  key_title: "Paste a key",
  key_name: "Name (e.g. Torsten's iPhone)",
  key_value: "Key (IRK, 32 characters)",
  key_bad: "That is not a valid key (32 hex characters or Base64).",
  helper_title: "\u{1F511} Key helper",
  helper_build: "Set up the key helper",
  helper_found: "Key helper found: {name}",
  helper_watch: "For an Apple Watch",
  helper_phone: "For an iPhone",
  helper_watch_steps: 'On the watch: Settings \u2192 Bluetooth \u2192 under "Health devices" tap "NeonPlan Key" and pair.',
  helper_phone_steps: 'On the phone: Settings \u2192 Bluetooth \u2192 pair "NeonPlan Key" (it shows as a keyboard).',
  helper_key: "Key read:",
  helper_wait: "Waiting for the pairing \u2026",
  helper_after: 'Afterwards remove the device "NeonPlan Key" from the Bluetooth settings again.',
  helper_next: "\u{1F504} Next device",
  helper_next_hint: "Tap before every further device: the helper gets a new Bluetooth identity, so a device paired before no longer connects in between.",
  helper_name: "Name for this device",
  helper_irk: "Key (IRK) read from the device that just paired:",
  helper_belongs: "Belongs to: {name}",
  helper_add_as: "Add as \u201C{name}\u201D",
  helper_added: "\u2713 \u201C{name}\u201D is now in the list above.",
  pbd_rename: "Tip: rename it in Home Assistant (Devices & services \u2192 Private BLE Device) to see its name here.",
  carry: "I am carrying:",
  offline: "not reachable right now",
  pbd_summary: "Moving from Bermuda? Take over keys from Home Assistant",
  worn: "worn",
  worn_hint: "Worn on the body (watch, band): tells where the person is \u2013 a phone may lie somewhere.",
  look_title: "People in 3D",
  look_figure: "Figure",
  look_pin: "Pin",
  look_off: "Off",
  near_summary: "Add an Android phone or a key tag",
  android_label: "Android phone (HA app)",
  paste_summary: "Paste a key you already have",
  helper_install: "Install on an ESP32",
  helper_pitch: "For iPhone and Apple Watch: an ESP32 for about 5 \u20AC becomes the key helper in three minutes \u2013 installed right from the browser, no Mac needed. Then pair it here.",
  near_intro: 'Hold the device right next to a scanner. Android: switch on "BLE Transmitter" in the Home Assistant app. Key tags: press once.',
  near_empty: "Nothing strong nearby yet \u2026",
  walk_intro: "Go into every room, tap it and walk around slowly for 90 seconds \u2013 into the corners too. Carry all devices.",
  learning: "Learning {room} \u2026 {left} s left",
  stop: "Cancel",
  samples: "{n} samples",
  quality: "Check accuracy",
  quality_result: "Accuracy: {p}",
  relearn_all: "Learn everything anew",
  live_intro: "This is where NeonPlan sees you now. Walk around and check.",
  enabled: "Locating on",
  admins_only: "Show people to admins only",
  not_heard: "not heard",
  next: "Next",
  need_device: "Add a device first.",
  app_title: "Android with the Home Assistant app",
  app_none: "Android phone? In the Home Assistant app: Settings \u2192 Companion app \u2192 Manage sensors \u2192 turn on \u201CBLE Transmitter\u201D. It then shows up here by itself.",
  app_off: "Transmitter is off \u2013 turn it on in the app",
  app_power: "Transmit power too low \u2013 set it to \u201CHigh\u201D in the app",
  app_mode: "Set the advertise mode to \u201CLow latency\u201D in the app",
  helper_android: "Don't pair Android phones or tablets here: they don't send this key in the background. For Android use the Home Assistant app's BLE Transmitter (below).",
  unheard: "\u26A0 not heard",
  unheard_hint: "No receiver hears this device right now. Is it on and sending? Android: the Home Assistant app's BLE Transmitter.",
  fly: "Fly into the rooms on \u201CWhere is \u2026?\u201D and \u201CWho is home?\u201D",
  fly_hint: "The open NeonPlan views fly into the room of the answer, on \u201CWho is home?\u201D into every room in turn. A tap stops it. Not for people while they are shown to admins only."
};
var CS = {
  title: "Nastavit lokalizaci",
  lab: "Laborato\u0159",
  close: "Zav\u0159\xEDt",
  s_scanners: "1 \xB7 P\u0159ij\xEDma\u010De",
  s_devices: "2 \xB7 Za\u0159\xEDzen\xED",
  s_walk: "3 \xB7 U\u010Den\xED",
  s_live: "4 \xB7 \u017Div\u011B",
  no_bt: "Home Assistant nem\xE1 nastaven\xFD Bluetooth. Sta\u010D\xED Shelly (Gen2/3: pasivn\xED Bluetooth skenov\xE1n\xED), ESPHome Bluetooth proxy nebo USB adapt\xE9r.",
  scanners_intro: "Toto jsou v\u0161echny Bluetooth p\u0159ij\xEDma\u010De, kter\xE9 Home Assistant zn\xE1. U ka\u017Ed\xE9ho \u0159ekni, ve kter\xE9 m\xEDstnosti stoj\xED.",
  not_placed: "\u2013 vyber m\xEDstnost \u2013",
  hint_room: "Sign\xE1l \u0159\xEDk\xE1: {room} \u2013 p\u0159evz\xEDt",
  coverage: "M\xEDstnosti bez vlastn\xEDho p\u0159ij\xEDma\u010De \u2013 u\u010Den\xED je p\u0159esto umo\u017En\xED rozpoznat:",
  devices_intro: "Kter\xE1 za\u0159\xEDzen\xED se maj\xED lokalizovat? Nejl\xE9pe to, co m\xE1\u0161 v\u017Edy u sebe \u2013 hodinky na z\xE1p\u011Bst\xED jsou ide\xE1ln\xED.",
  known_keys: "iPhone a Apple Watch s kl\xED\u010Dem (z \u201EPrivate BLE Device\u201C v Home Assistant):",
  add: "P\u0159idat",
  added: "\u2713 p\u0159id\xE1no",
  remove: "Odebrat",
  person: "Osoba",
  none: "\u017E\xE1dn\xE1",
  irk_help: "Chyb\xED iPhone nebo Apple Watch? Pot\u0159ebuj\xED sv\u016Fj kl\xED\u010D (IRK) jako \u201EPrivate BLE Device\u201C v Home Assistant \u2013 n\xE1vod ukazuje nejjednodu\u0161\u0161\xED cesty.",
  manual: "N\xE1vod",
  voice_hint: "Ptej se i hlasem: \u201EKde je m\u016Fj iPhone?\u201C, \u201EKde je Torsten?\u201C, \u201EKdo je doma?\u201C, \u201EProzvo\u0148 m\u016Fj iPhone\u201C.",
  look_hint: "Ve 3D se osoby zobrazuj\xED jako postava; v menu \u2699 zobrazen\xED: Osoby \u2192 postava, \u0161pendl\xEDk nebo vypnuto.",
  ring: "Prozvonit",
  ring_hint: "Aplikace Home Assistant na tomto telefonu \u2013 pak funguje \u201EProzvo\u0148 m\u016Fj iPhone\u201C.",
  near_title: "Hledat za\u0159\xEDzen\xED pobl\xED\u017E",
  key_title: "Vlo\u017Eit kl\xED\u010D",
  key_name: "N\xE1zev (nap\u0159. Torsten\u016Fv iPhone)",
  key_value: "Kl\xED\u010D (IRK, 32 znak\u016F)",
  key_bad: "Toto nen\xED platn\xFD kl\xED\u010D (32 hex znak\u016F nebo Base64).",
  helper_title: "\u{1F511} Pomocn\xEDk pro kl\xED\u010D",
  helper_build: "Nastavit pomocn\xEDka pro kl\xED\u010D",
  helper_found: "Pomocn\xEDk pro kl\xED\u010D nalezen: {name}",
  helper_watch: "Pro Apple Watch",
  helper_phone: "Pro iPhone",
  helper_watch_steps: "Na hodink\xE1ch: Nastaven\xED \u2192 Bluetooth \u2192 v \u010D\xE1sti \u201EZdravotn\xED za\u0159\xEDzen\xED\u201C klepn\u011Bte na \u201ENeonPlan Key\u201C a sp\xE1rujte.",
  helper_phone_steps: "V telefonu: Nastaven\xED \u2192 Bluetooth \u2192 sp\xE1rujte \u201ENeonPlan Key\u201C (zobraz\xED se jako kl\xE1vesnice).",
  helper_key: "P\u0159e\u010Dten\xFD kl\xED\u010D:",
  helper_wait: "\u010Cek\xE1m na sp\xE1rov\xE1n\xED \u2026",
  helper_after: "Pot\xE9 za\u0159\xEDzen\xED \u201ENeonPlan Key\u201C v nastaven\xED Bluetooth op\u011Bt odeberte.",
  helper_next: "\u{1F504} Dal\u0161\xED za\u0159\xEDzen\xED",
  helper_next_hint: "Klepn\u011Bte p\u0159ed ka\u017Ed\xFDm dal\u0161\xEDm za\u0159\xEDzen\xEDm: pomocn\xEDk dostane novou Bluetooth identitu, tak\u017Ee se d\u0159\xEDve sp\xE1rovan\xE9 za\u0159\xEDzen\xED u\u017E nep\u0159ipoj\xED.",
  helper_name: "N\xE1zev tohoto za\u0159\xEDzen\xED",
  helper_irk: "Kl\xED\u010D (IRK) na\u010Dten\xFD ze za\u0159\xEDzen\xED, kter\xE9 se pr\xE1v\u011B sp\xE1rovalo:",
  helper_belongs: "Pat\u0159\xED k: {name}",
  helper_add_as: "P\u0159idat jako \u201E{name}\u201C",
  helper_added: "\u2713 \u201E{name}\u201C je te\u010F v seznamu naho\u0159e.",
  pbd_rename: "Tip: p\u0159ejmenujte ho v Home Assistantu (Za\u0159\xEDzen\xED a slu\u017Eby \u2192 Private BLE Device), pak se zde zobraz\xED n\xE1zev.",
  carry: "Pr\xE1v\u011B m\xE1m u sebe:",
  offline: "moment\xE1ln\u011B nedostupn\xFD",
  pbd_summary: "P\u0159ech\xE1z\xEDte z Bermudy? P\u0159evz\xEDt kl\xED\u010De z Home Assistantu",
  worn: "no\u0161en\xE9",
  worn_hint: "No\u0161en\xE9 na t\u011Ble (hodinky, n\xE1ramek): ukazuje, kde osoba je \u2013 telefon m\u016F\u017Ee n\u011Bkde le\u017Eet.",
  look_title: "Osoby ve 3D",
  look_figure: "Postava",
  look_pin: "\u0160pendl\xEDk",
  look_off: "Vyp.",
  near_summary: "P\u0159idat telefon s Androidem nebo p\u0159\xEDv\u011Bsek",
  android_label: "Telefon s Androidem (aplikace HA)",
  paste_summary: "Vlo\u017Eit kl\xED\u010D, kter\xFD u\u017E m\xE1te",
  helper_install: "Nainstalovat na ESP32",
  helper_pitch: "Pro iPhone a Apple Watch: ESP32 za cca 5 \u20AC se za t\u0159i minuty stane pomocn\xEDkem pro kl\xED\u010De \u2013 instalace p\u0159\xEDmo z prohl\xED\u017Ee\u010De, bez Macu. Pak sp\xE1rujte zde.",
  near_intro: "Podr\u017E za\u0159\xEDzen\xED p\u0159\xEDmo u p\u0159ij\xEDma\u010De. Android: v aplikaci Home Assistant zapni \u201EBLE Transmitter\u201C. P\u0159\xEDv\u011Bsky na kl\xED\u010De: kr\xE1tce stiskni.",
  near_empty: "Zat\xEDm nic siln\xE9ho pobl\xED\u017E \u2026",
  walk_intro: "Projdi ka\u017Edou m\xEDstnost, klepni na ni a 90 sekund pomalu cho\u010F kolem \u2013 i do roh\u016F. Vezmi s sebou v\u0161echna za\u0159\xEDzen\xED.",
  learning: "U\u010D\xEDm se {room} \u2026 je\u0161t\u011B {left} s",
  stop: "Zru\u0161it",
  samples: "{n} vzork\u016F",
  quality: "Ov\u011B\u0159it p\u0159esnost",
  quality_result: "P\u0159esnost: {p}",
  relearn_all: "V\u0161e nau\u010Dit znovu",
  live_intro: "Takhle t\u011B NeonPlan pr\xE1v\u011B vid\xED. Projdi se a zkontroluj, jestli to sed\xED.",
  enabled: "Lokalizace zapnuta",
  admins_only: "Osoby zobrazit jen spr\xE1vc\u016Fm",
  not_heard: "nesly\u0161eno",
  next: "Dal\u0161\xED",
  need_device: "Nejd\u0159\xEDv p\u0159idej za\u0159\xEDzen\xED.",
  app_title: "Android s aplikac\xED Home Assistant",
  app_none: "Telefon s Androidem? V aplikaci Home Assistant: Nastaven\xED \u2192 Companion app \u2192 Spravovat senzory \u2192 zapnout \u201EBLE Transmitter\u201C. Pak se tu objev\xED s\xE1m.",
  app_off: "Vys\xEDla\u010D je vypnut\xFD \u2013 zapn\u011Bte ho v aplikaci",
  app_power: "Vys\xEDlac\xED v\xFDkon je p\u0159\xEDli\u0161 n\xEDzk\xFD \u2013 v aplikaci nastavte \u201EHigh\u201C",
  app_mode: "V aplikaci nastavte re\u017Eim vys\xEDl\xE1n\xED \u201ELow latency\u201C",
  helper_android: "Telefony a tablety s Androidem zde nep\xE1rujte: tento kl\xED\u010D na pozad\xED nevys\xEDlaj\xED. Pro Android pou\u017Eijte BLE Transmitter aplikace Home Assistant (n\xED\u017Ee).",
  unheard: "\u26A0 nesly\u0161eno",
  unheard_hint: "\u017D\xE1dn\xFD p\u0159ij\xEDma\u010D toto za\u0159\xEDzen\xED pr\xE1v\u011B nesly\u0161\xED. Je zapnut\xE9 a vys\xEDl\xE1? Android: BLE Transmitter aplikace Home Assistant.",
  fly: "P\u0159i \u201EKde je \u2026?\u201C a \u201EKdo je doma?\u201C p\u0159elet\u011Bt do m\xEDstnost\xED",
  fly_hint: "Otev\u0159en\xE1 zobrazen\xED NeonPlan p\u0159elet\xED do m\xEDstnosti z odpov\u011Bdi, u \u201EKdo je doma?\u201C postupn\u011B do v\u0161ech. Klepnut\xED to zastav\xED. U osob ne, pokud se zobrazuj\xED jen spr\xE1vc\u016Fm."
};
var DA = {
  title: "Ops\xE6t lokalisering",
  lab: "Lab",
  close: "Luk",
  s_scanners: "1 \xB7 Modtagere",
  s_devices: "2 \xB7 Enheder",
  s_walk: "3 \xB7 Indl\xE6ring",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistant har ingen Bluetooth sat op. Shelly (Gen2/3: passiv Bluetooth-scanning), ESPHome Bluetooth-proxyer eller en USB-adapter er nok.",
  scanners_intro: "Det er alle Bluetooth-modtagere, Home Assistant kender. Angiv for hver, hvilket rum den st\xE5r i.",
  not_placed: "\u2013 v\xE6lg rum \u2013",
  hint_room: "Signalet siger: {room} \u2013 brug det",
  coverage: "Rum uden egen modtager \u2013 indl\xE6ringen g\xF8r dem genkendelige alligevel:",
  devices_intro: "Hvilke enheder skal lokaliseres? Helst det, du altid har p\xE5 dig \u2013 uret p\xE5 h\xE5ndleddet er ideelt.",
  known_keys: "iPhone og Apple Watch med n\xF8gle (fra \xBBPrivate BLE Device\xAB i Home Assistant):",
  add: "Tilf\xF8j",
  added: "\u2713 med",
  remove: "Fjern",
  person: "Person",
  none: "ingen",
  irk_help: "Mangler iPhone eller Apple Watch? De skal have deres n\xF8gle (IRK) som \xBBPrivate BLE Device\xAB i Home Assistant \u2013 vejledningen viser de nemmeste veje.",
  manual: "Vejledning",
  voice_hint: "Sp\xF8rg ogs\xE5 med stemmen: \xBBHvor er min iPhone?\xAB, \xBBHvor er Torsten?\xAB, \xBBHvem er hjemme?\xAB, \xBBRing til min iPhone\xAB.",
  look_hint: "I 3D vises personer som figur; i visningens \u2699-menu: Personer \u2192 figur, n\xE5l eller fra.",
  ring: "Ring",
  ring_hint: "Home Assistant-appen p\xE5 denne telefon \u2013 s\xE5 virker \xBBRing til min iPhone\xAB.",
  near_title: "Find enhed i n\xE6rheden",
  key_title: "Inds\xE6t n\xF8gle",
  key_name: "Navn (f.eks. Torstens iPhone)",
  key_value: "N\xF8gle (IRK, 32 tegn)",
  key_bad: "Det er ikke en gyldig n\xF8gle (32 hex-tegn eller Base64).",
  helper_title: "\u{1F511} N\xF8glehj\xE6lper",
  helper_build: "Konfigurer n\xF8glehj\xE6lperen",
  helper_found: "N\xF8glehj\xE6lper fundet: {name}",
  helper_watch: "Til Apple Watch",
  helper_phone: "Til iPhone",
  helper_watch_steps: "P\xE5 uret: Indstillinger \u2192 Bluetooth \u2192 under \xBBSundhedsenheder\xAB tryk p\xE5 \xBBNeonPlan Key\xAB, og par.",
  helper_phone_steps: "P\xE5 telefonen: Indstillinger \u2192 Bluetooth \u2192 par \xBBNeonPlan Key\xAB (vises som tastatur).",
  helper_key: "Afl\xE6st n\xF8gle:",
  helper_wait: "Venter p\xE5 parring \u2026",
  helper_after: "Fjern derefter enheden \xBBNeonPlan Key\xAB fra Bluetooth-indstillingerne igen.",
  helper_next: "\u{1F504} N\xE6ste enhed",
  helper_next_hint: "Tryk f\xF8r hver ny enhed: hj\xE6lperen f\xE5r en ny Bluetooth-identitet, s\xE5 en tidligere parret enhed ikke l\xE6ngere forbinder imellem.",
  helper_name: "Navn p\xE5 denne enhed",
  helper_irk: "N\xF8gle (IRK) l\xE6st fra enheden, der lige blev parret:",
  helper_belongs: "Tilh\xF8rer: {name}",
  helper_add_as: "Tilf\xF8j som \xBB{name}\xAB",
  helper_added: "\u2713 \xBB{name}\xAB st\xE5r nu i listen ovenfor.",
  pbd_rename: "Tip: omd\xF8b den i Home Assistant (Enheder og tjenester \u2192 Private BLE Device), s\xE5 st\xE5r navnet her.",
  carry: "Jeg har med lige nu:",
  offline: "ikke tilg\xE6ngelig lige nu",
  pbd_summary: "Skifter du fra Bermuda? Overtag n\xF8gler fra Home Assistant",
  worn: "b\xE5ret",
  worn_hint: "B\xE5ret p\xE5 kroppen (ur, armb\xE5nd): viser, hvor personen er \u2013 en telefon kan ligge et sted.",
  look_title: "Personer i 3D",
  look_figure: "Figur",
  look_pin: "N\xE5l",
  look_off: "Fra",
  near_summary: "Tilf\xF8j Android-telefon eller n\xF8glevedh\xE6ng",
  android_label: "Android-telefon (HA-app)",
  paste_summary: "Inds\xE6t en n\xF8gle, du allerede har",
  helper_install: "Installer p\xE5 en ESP32",
  helper_pitch: "Til iPhone og Apple Watch: En ESP32 til ca. 5 \u20AC bliver n\xF8glehj\xE6lper p\xE5 tre minutter \u2013 installeret direkte fra browseren, uden Mac. Par den derefter her.",
  near_intro: "Hold enheden helt t\xE6t p\xE5 en modtager. Android: sl\xE5 \xBBBLE Transmitter\xAB til i Home Assistant-appen. N\xF8glevedh\xE6ng: tryk kort.",
  near_empty: "Endnu intet st\xE6rkt i n\xE6rheden \u2026",
  walk_intro: "G\xE5 ind i hvert rum, tryk p\xE5 det og g\xE5 langsomt rundt i 90 sekunder \u2013 ogs\xE5 ud i hj\xF8rnerne. Tag alle enheder med.",
  learning: "L\xE6rer {room} \u2026 {left} s tilbage",
  stop: "Annuller",
  samples: "{n} pr\xF8ver",
  quality: "Tjek tr\xE6fsikkerhed",
  quality_result: "Tr\xE6fsikkerhed: {p}",
  relearn_all: "Indl\xE6r alt igen",
  live_intro: "S\xE5dan ser NeonPlan dig lige nu. G\xE5 rundt og se, om det passer.",
  enabled: "Lokalisering sl\xE5et til",
  admins_only: "Vis kun personer for administratorer",
  not_heard: "ikke h\xF8rt",
  next: "N\xE6ste",
  need_device: "Tilf\xF8j f\xF8rst en enhed.",
  app_title: "Android med Home Assistant-appen",
  app_none: "Android-telefon? I Home Assistant-appen: Indstillinger \u2192 Companion app \u2192 Administrer sensorer \u2192 sl\xE5 \u201EBLE Transmitter\u201C til. S\xE5 dukker den op her af sig selv.",
  app_off: "Senderen er sl\xE5et fra \u2013 sl\xE5 den til i appen",
  app_power: "Sendestyrken er for lav \u2013 s\xE6t den til \u201EHigh\u201C i appen",
  app_mode: "S\xE6t sendetilstanden til \u201ELow latency\u201C i appen",
  helper_android: "Par ikke Android-telefoner eller -tablets her: de sender ikke denne n\xF8gle i baggrunden. Brug Home Assistant-appens BLE Transmitter til Android (nedenfor).",
  unheard: "\u26A0 ikke h\xF8rt",
  unheard_hint: "Ingen modtager h\xF8rer enheden lige nu. Er den t\xE6ndt og sender? Android: Home Assistant-appens BLE Transmitter.",
  fly: "Flyv ind i rummene ved \u201EHvor er \u2026?\u201C og \u201EHvem er hjemme?\u201C",
  fly_hint: "De \xE5bne NeonPlan-visninger flyver ind i svarets rum, ved \u201EHvem er hjemme?\u201C ind i alle rum efter tur. Et tryk stopper det. Ikke for personer, n\xE5r de kun vises for administratorer."
};
var ES = {
  title: "Configurar localizaci\xF3n",
  lab: "Lab",
  close: "Cerrar",
  s_scanners: "1 \xB7 Receptores",
  s_devices: "2 \xB7 Dispositivos",
  s_walk: "3 \xB7 Aprendizaje",
  s_live: "4 \xB7 En vivo",
  no_bt: "Home Assistant no tiene Bluetooth configurado. Basta con Shelly (Gen2/3: escaneo Bluetooth pasivo), proxies Bluetooth de ESPHome o un adaptador USB.",
  scanners_intro: "Estos son todos los receptores Bluetooth que conoce Home Assistant. Indica en qu\xE9 habitaci\xF3n est\xE1 cada uno.",
  not_placed: "\u2013 elige habitaci\xF3n \u2013",
  hint_room: "La se\xF1al dice: {room} \u2013 usar",
  coverage: "Habitaciones sin receptor propio \u2013 el aprendizaje las hace reconocibles igualmente:",
  devices_intro: "\xBFQu\xE9 dispositivos quieres localizar? Mejor lo que siempre llevas encima \u2013 el reloj en la mu\xF1eca es ideal.",
  known_keys: "iPhone y Apple Watch con clave (de \u201CPrivate BLE Device\u201D en Home Assistant):",
  add: "A\xF1adir",
  added: "\u2713 a\xF1adido",
  remove: "Quitar",
  person: "Persona",
  none: "ninguna",
  irk_help: "\xBFFalta el iPhone o el Apple Watch? Necesitan su clave (IRK) como \u201CPrivate BLE Device\u201D en Home Assistant \u2013 el manual muestra las formas m\xE1s sencillas.",
  manual: "Manual",
  voice_hint: "Pregunta tambi\xE9n por voz: \u201C\xBFD\xF3nde est\xE1 mi iPhone?\u201D, \u201C\xBFD\xF3nde est\xE1 Torsten?\u201D, \u201C\xBFQui\xE9n est\xE1 en casa?\u201D, \u201CHaz sonar mi iPhone\u201D.",
  look_hint: "En 3D las personas aparecen como figura; en el men\xFA \u2699 de la vista: Personas \u2192 figura, chincheta o desactivado.",
  ring: "Hacer sonar",
  ring_hint: "La app de Home Assistant en este m\xF3vil \u2013 as\xED funciona \u201CHaz sonar mi iPhone\u201D.",
  near_title: "Buscar dispositivo cercano",
  key_title: "Pegar clave",
  key_name: "Nombre (p. ej. iPhone de Torsten)",
  key_value: "Clave (IRK, 32 caracteres)",
  key_bad: "No es una clave v\xE1lida (32 caracteres hex o Base64).",
  helper_title: "\u{1F511} Asistente de clave",
  helper_build: "Configurar el asistente de clave",
  helper_found: "Asistente de clave encontrado: {name}",
  helper_watch: "Para un Apple Watch",
  helper_phone: "Para un iPhone",
  helper_watch_steps: "En el reloj: Ajustes \u2192 Bluetooth \u2192 en \xABDispositivos de salud\xBB toca \xABNeonPlan Key\xBB y enl\xE1zalo.",
  helper_phone_steps: "En el m\xF3vil: Ajustes \u2192 Bluetooth \u2192 enlaza \xABNeonPlan Key\xBB (aparece como teclado).",
  helper_key: "Clave le\xEDda:",
  helper_wait: "Esperando el enlace \u2026",
  helper_after: "Despu\xE9s, elimina el dispositivo \xABNeonPlan Key\xBB de los ajustes de Bluetooth.",
  helper_next: "\u{1F504} Siguiente dispositivo",
  helper_next_hint: "Toca antes de cada dispositivo nuevo: el asistente recibe una nueva identidad Bluetooth y un dispositivo ya emparejado deja de conectarse.",
  helper_name: "Nombre de este dispositivo",
  helper_irk: "Clave (IRK) le\xEDda del dispositivo que acaba de emparejarse:",
  helper_belongs: "Pertenece a: {name}",
  helper_add_as: "A\xF1adir como \xAB{name}\xBB",
  helper_added: "\u2713 \xAB{name}\xBB ya est\xE1 en la lista de arriba.",
  pbd_rename: "Consejo: c\xE1mbiale el nombre en Home Assistant (Dispositivos y servicios \u2192 Private BLE Device) y aparecer\xE1 aqu\xED.",
  carry: "Llevo conmigo:",
  offline: "no disponible ahora",
  pbd_summary: "\xBFVienes de Bermuda? Usar claves de Home Assistant",
  worn: "llevado",
  worn_hint: "Llevado encima (reloj, pulsera): indica d\xF3nde est\xE1 la persona; un m\xF3vil puede estar en cualquier sitio.",
  look_title: "Personas en 3D",
  look_figure: "Figura",
  look_pin: "Pin",
  look_off: "No",
  near_summary: "A\xF1adir un m\xF3vil Android o un llavero",
  android_label: "M\xF3vil Android (app de HA)",
  paste_summary: "Pegar una clave que ya tienes",
  helper_install: "Instalar en un ESP32",
  helper_pitch: "Para iPhone y Apple Watch: un ESP32 de unos 5 \u20AC se convierte en el asistente de claves en tres minutos, instalado desde el navegador, sin Mac. Luego empareja aqu\xED.",
  near_intro: "Acerca el dispositivo a un receptor. Android: activa \u201CBLE Transmitter\u201D en la app de Home Assistant. Llaveros: pulsa una vez.",
  near_empty: "A\xFAn nada fuerte cerca \u2026",
  walk_intro: "Entra en cada habitaci\xF3n, t\xF3cala y camina despacio durante 90 segundos \u2013 tambi\xE9n por las esquinas. Lleva todos los dispositivos.",
  learning: "Aprendiendo {room} \u2026 quedan {left} s",
  stop: "Cancelar",
  samples: "{n} muestras",
  quality: "Comprobar precisi\xF3n",
  quality_result: "Precisi\xF3n: {p}",
  relearn_all: "Volver a aprender todo",
  live_intro: "As\xED te ve NeonPlan ahora mismo. Camina un poco y comprueba si acierta.",
  enabled: "Localizaci\xF3n activada",
  admins_only: "Mostrar personas solo a administradores",
  not_heard: "sin se\xF1al",
  next: "Siguiente",
  need_device: "Primero a\xF1ade un dispositivo.",
  app_title: "Android con la app de Home Assistant",
  app_none: "\xBFM\xF3vil Android? En la app de Home Assistant: Ajustes \u2192 Companion app \u2192 Gestionar sensores \u2192 activa \xABBLE Transmitter\xBB. Luego aparece aqu\xED solo.",
  app_off: "El transmisor est\xE1 apagado: act\xEDvalo en la app",
  app_power: "Potencia de emisi\xF3n demasiado baja: ponla en \xABHigh\xBB en la app",
  app_mode: "Pon el modo de emisi\xF3n en \xABLow latency\xBB en la app",
  helper_android: "No emparejes aqu\xED m\xF3viles ni tabletas Android: no env\xEDan esta clave en segundo plano. Para Android usa el BLE Transmitter de la app de Home Assistant (abajo).",
  unheard: "\u26A0 sin se\xF1al",
  unheard_hint: "Ahora mismo ning\xFAn receptor oye este dispositivo. \xBFEst\xE1 encendido y emitiendo? Android: el BLE Transmitter de la app de Home Assistant.",
  fly: "Volar a las habitaciones con \xAB\xBFD\xF3nde est\xE1 \u2026?\xBB y \xAB\xBFQui\xE9n est\xE1 en casa?\xBB",
  fly_hint: "Las vistas abiertas de NeonPlan vuelan a la habitaci\xF3n de la respuesta y, con \xAB\xBFQui\xE9n est\xE1 en casa?\xBB, a todas por turno. Un toque lo detiene. No para personas mientras solo se muestren a administradores."
};
var FI = {
  title: "Paikannuksen m\xE4\xE4ritys",
  lab: "Labra",
  close: "Sulje",
  s_scanners: "1 \xB7 Vastaanottimet",
  s_devices: "2 \xB7 Laitteet",
  s_walk: "3 \xB7 Opetus",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistantissa ei ole Bluetoothia m\xE4\xE4ritetty. Shelly (Gen2/3: passiivinen Bluetooth-skannaus), ESPHome Bluetooth -v\xE4lityspalvelimet tai USB-sovitin riitt\xE4\xE4.",
  scanners_intro: "T\xE4ss\xE4 ovat kaikki Bluetooth-vastaanottimet, jotka Home Assistant tuntee. Kerro kustakin, miss\xE4 huoneessa se on.",
  not_placed: "\u2013 valitse huone \u2013",
  hint_room: "Signaalin mukaan: {room} \u2013 k\xE4yt\xE4",
  coverage: "Huoneet ilman omaa vastaanotinta \u2013 opetus tekee niist\xE4 silti tunnistettavia:",
  devices_intro: "Mitk\xE4 laitteet paikannetaan? Parasta on se, mik\xE4 on aina mukanasi \u2013 kello ranteessa on ihanteellinen.",
  known_keys: "iPhone ja Apple Watch avaimella (Home Assistantin \u201DPrivate BLE Device\u201D):",
  add: "Lis\xE4\xE4",
  added: "\u2713 mukana",
  remove: "Poista",
  person: "Henkil\xF6",
  none: "ei mit\xE4\xE4n",
  irk_help: "Puuttuuko iPhone tai Apple Watch? Ne tarvitsevat avaimensa (IRK) \u201DPrivate BLE Device\u201D -laitteena Home Assistantissa \u2013 ohje n\xE4ytt\xE4\xE4 helpoimmat tavat.",
  manual: "Ohje",
  voice_hint: "Kysy my\xF6s \xE4\xE4nell\xE4: \u201DMiss\xE4 iPhoneni on?\u201D, \u201DMiss\xE4 Torsten on?\u201D, \u201DKuka on kotona?\u201D, \u201DSoita iPhoneani\u201D.",
  look_hint: "3D:ss\xE4 henkil\xF6t n\xE4kyv\xE4t hahmona; n\xE4kym\xE4n \u2699-valikossa: Henkil\xF6t \u2192 hahmo, nasta tai pois.",
  ring: "Soita",
  ring_hint: "Home Assistant -sovellus t\xE4ss\xE4 puhelimessa \u2013 silloin \u201DSoita iPhoneani\u201D toimii.",
  near_title: "Etsi laite l\xE4helt\xE4",
  key_title: "Liit\xE4 avain",
  key_name: "Nimi (esim. Torstenin iPhone)",
  key_value: "Avain (IRK, 32 merkki\xE4)",
  key_bad: "T\xE4m\xE4 ei ole kelvollinen avain (32 heksamerkki\xE4 tai Base64).",
  helper_title: "\u{1F511} Avainapuri",
  helper_build: "Ota avainapuri k\xE4ytt\xF6\xF6n",
  helper_found: "Avainapuri l\xF6ytyi: {name}",
  helper_watch: "Apple Watch -kellolle",
  helper_phone: "iPhonelle",
  helper_watch_steps: "Kellossa: Asetukset \u2192 Bluetooth \u2192 valitse kohdassa \u201DTerveyslaitteet\u201D \u201DNeonPlan Key\u201D ja muodosta pari.",
  helper_phone_steps: "Puhelimessa: Asetukset \u2192 Bluetooth \u2192 muodosta pari laitteen \u201DNeonPlan Key\u201D kanssa (n\xE4kyy n\xE4pp\xE4imist\xF6n\xE4).",
  helper_key: "Luettu avain:",
  helper_wait: "Odotetaan pariliitosta \u2026",
  helper_after: "Poista sen j\xE4lkeen laite \u201DNeonPlan Key\u201D Bluetooth-asetuksista.",
  helper_next: "\u{1F504} Seuraava laite",
  helper_next_hint: "Napauta ennen jokaista uutta laitetta: apuri saa uuden Bluetooth-tunnisteen, eik\xE4 aiemmin yhdistetty laite en\xE4\xE4 yhdisty v\xE4liin.",
  helper_name: "T\xE4m\xE4n laitteen nimi",
  helper_irk: "Juuri paritetusta laitteesta luettu avain (IRK):",
  helper_belongs: "Kuuluu: {name}",
  helper_add_as: "Lis\xE4\xE4 nimell\xE4 \u201D{name}\u201D",
  helper_added: "\u2713 \u201D{name}\u201D on nyt yll\xE4 olevassa luettelossa.",
  pbd_rename: "Vinkki: nime\xE4 se uudelleen Home Assistantissa (Laitteet ja palvelut \u2192 Private BLE Device), niin nimi n\xE4kyy t\xE4ss\xE4.",
  carry: "Minulla on mukana:",
  offline: "ei juuri nyt tavoitettavissa",
  pbd_summary: "Siirrytk\xF6 Bermudasta? Ota avaimet Home Assistantista",
  worn: "p\xE4\xE4ll\xE4",
  worn_hint: "Kehossa (kello, ranneke): kertoo, miss\xE4 henkil\xF6 on \u2013 puhelin voi olla miss\xE4 vain.",
  look_title: "Henkil\xF6t 3D:ss\xE4",
  look_figure: "Hahmo",
  look_pin: "Merkki",
  look_off: "Pois",
  near_summary: "Lis\xE4\xE4 Android-puhelin tai avaimenper\xE4",
  android_label: "Android-puhelin (HA-sovellus)",
  paste_summary: "Liit\xE4 avain, joka sinulla jo on",
  helper_install: "Asenna ESP32:lle",
  helper_pitch: "iPhonelle ja Apple Watchille: noin 5 \u20AC:n ESP32:sta tulee avainapuri kolmessa minuutissa \u2013 asennus suoraan selaimesta, ilman Macia. Paritus sitten t\xE4\xE4ll\xE4.",
  near_intro: "Pid\xE4 laitetta aivan vastaanottimen vieress\xE4. Android: kytke Home Assistant -sovelluksessa \u201DBLE Transmitter\u201D p\xE4\xE4lle. Avaimenper\xE4t: paina kerran.",
  near_empty: "Ei viel\xE4 mit\xE4\xE4n vahvaa l\xE4hell\xE4 \u2026",
  walk_intro: "Mene jokaiseen huoneeseen, napauta sit\xE4 ja k\xE4vele hitaasti ymp\xE4riins\xE4 90 sekuntia \u2013 my\xF6s nurkkiin. Ota kaikki laitteet mukaan.",
  learning: "Opetellaan {room} \u2026 {left} s j\xE4ljell\xE4",
  stop: "Peruuta",
  samples: "{n} n\xE4ytett\xE4",
  quality: "Tarkista osumatarkkuus",
  quality_result: "Osumatarkkuus: {p}",
  relearn_all: "Opeta kaikki uudelleen",
  live_intro: "N\xE4in NeonPlan n\xE4kee sinut juuri nyt. K\xE4vele ymp\xE4riins\xE4 ja katso, pit\xE4\xE4k\xF6 se paikkansa.",
  enabled: "Paikannus p\xE4\xE4ll\xE4",
  admins_only: "N\xE4yt\xE4 henkil\xF6t vain yll\xE4pit\xE4jille",
  not_heard: "ei kuultu",
  next: "Seuraava",
  need_device: "Lis\xE4\xE4 ensin laite.",
  app_title: "Android ja Home Assistant -sovellus",
  app_none: "Android-puhelin? Home Assistant -sovelluksessa: Asetukset \u2192 Companion app \u2192 Hallitse antureita \u2192 kytke \u201DBLE Transmitter\u201D p\xE4\xE4lle. Sitten se n\xE4kyy t\xE4\xE4ll\xE4 itsest\xE4\xE4n.",
  app_off: "L\xE4hetin on pois p\xE4\xE4lt\xE4 \u2013 kytke se p\xE4\xE4lle sovelluksessa",
  app_power: "L\xE4hetysteho liian pieni \u2013 aseta sovelluksessa \u201DHigh\u201D",
  app_mode: "Aseta sovelluksessa l\xE4hetystilaksi \u201DLow latency\u201D",
  helper_android: "\xC4l\xE4 yhdist\xE4 Android-puhelimia tai -tabletteja t\xE4ss\xE4: ne eiv\xE4t l\xE4het\xE4 t\xE4t\xE4 avainta taustalla. K\xE4yt\xE4 Androidille Home Assistant -sovelluksen BLE Transmitteria (alla).",
  unheard: "\u26A0 ei kuultu",
  unheard_hint: "Mik\xE4\xE4n vastaanotin ei kuule laitetta juuri nyt. Onko se p\xE4\xE4ll\xE4 ja l\xE4hett\xE4\xE4k\xF6 se? Android: Home Assistant -sovelluksen BLE Transmitter.",
  fly: "Lenn\xE4 huoneisiin kysymyksill\xE4 \u201DMiss\xE4 on \u2026?\u201D ja \u201DKuka on kotona?\u201D",
  fly_hint: "Avoimet NeonPlan-n\xE4kym\xE4t lent\xE4v\xE4t vastauksen huoneeseen, kysymyksell\xE4 \u201DKuka on kotona?\u201D vuorotellen kaikkiin. Napautus pys\xE4ytt\xE4\xE4. Ei henkil\xF6ille, jos ne n\xE4ytet\xE4\xE4n vain yll\xE4pit\xE4jille."
};
var FR = {
  title: "Configurer la localisation",
  lab: "Labo",
  close: "Fermer",
  s_scanners: "1 \xB7 R\xE9cepteurs",
  s_devices: "2 \xB7 Appareils",
  s_walk: "3 \xB7 Apprentissage",
  s_live: "4 \xB7 En direct",
  no_bt: "Home Assistant n\u2019a pas de Bluetooth configur\xE9. Un Shelly (Gen2/3 : scan Bluetooth passif), des proxys Bluetooth ESPHome ou un adaptateur USB suffisent.",
  scanners_intro: "Voici tous les r\xE9cepteurs Bluetooth connus de Home Assistant. Indiquez pour chacun la pi\xE8ce o\xF9 il se trouve.",
  not_placed: "\u2013 choisir une pi\xE8ce \u2013",
  hint_room: "Le signal indique : {room} \u2013 appliquer",
  coverage: "Pi\xE8ces sans r\xE9cepteur propre \u2013 l\u2019apprentissage les rend quand m\xEAme reconnaissables :",
  devices_intro: "Quels appareils localiser ? Id\xE9alement ce que vous avez toujours sur vous \u2013 la montre au poignet est parfaite.",
  known_keys: "iPhone et Apple Watch avec cl\xE9 (depuis \xAB Private BLE Device \xBB dans Home Assistant) :",
  add: "Ajouter",
  added: "\u2713 ajout\xE9",
  remove: "Retirer",
  person: "Personne",
  none: "aucune",
  irk_help: "iPhone ou Apple Watch absent ? Ils ont besoin de leur cl\xE9 (IRK) comme \xAB Private BLE Device \xBB dans Home Assistant \u2013 le guide montre les m\xE9thodes les plus simples.",
  manual: "Guide",
  voice_hint: "Demandez aussi \xE0 la voix : \xAB O\xF9 est mon iPhone ? \xBB, \xAB O\xF9 est Torsten ? \xBB, \xAB Qui est \xE0 la maison ? \xBB, \xAB Fais sonner mon iPhone \xBB.",
  look_hint: "En 3D, les personnes apparaissent sous forme de figurine ; dans le menu \u2699 de la vue : Personnes \u2192 figurine, \xE9pingle ou masqu\xE9.",
  ring: "Faire sonner",
  ring_hint: "L\u2019app Home Assistant sur ce t\xE9l\xE9phone \u2013 alors \xAB Fais sonner mon iPhone \xBB fonctionne.",
  near_title: "Trouver un appareil \xE0 proximit\xE9",
  key_title: "Coller une cl\xE9",
  key_name: "Nom (p. ex. iPhone de Torsten)",
  key_value: "Cl\xE9 (IRK, 32 caract\xE8res)",
  key_bad: "Ce n'est pas une cl\xE9 valide (32 caract\xE8res hex ou Base64).",
  helper_title: "\u{1F511} Assistant de cl\xE9",
  helper_build: "Configurer l\u2019assistant de cl\xE9",
  helper_found: "Assistant de cl\xE9 trouv\xE9\xA0: {name}",
  helper_watch: "Pour une Apple Watch",
  helper_phone: "Pour un iPhone",
  helper_watch_steps: "Sur la montre\xA0: R\xE9glages \u2192 Bluetooth \u2192 sous \xAB\xA0Appareils de sant\xE9\xA0\xBB, touchez \xAB\xA0NeonPlan Key\xA0\xBB et jumelez.",
  helper_phone_steps: "Sur le t\xE9l\xE9phone\xA0: R\xE9glages \u2192 Bluetooth \u2192 jumelez \xAB\xA0NeonPlan Key\xA0\xBB (il appara\xEEt comme clavier).",
  helper_key: "Cl\xE9 lue\xA0:",
  helper_wait: "En attente du jumelage \u2026",
  helper_after: "Ensuite, supprimez l\u2019appareil \xAB\xA0NeonPlan Key\xA0\xBB des r\xE9glages Bluetooth.",
  helper_next: "\u{1F504} Appareil suivant",
  helper_next_hint: "Touchez avant chaque nouvel appareil : l'assistant re\xE7oit une nouvelle identit\xE9 Bluetooth, un appareil d\xE9j\xE0 jumel\xE9 ne se reconnecte plus.",
  helper_name: "Nom de cet appareil",
  helper_irk: "Cl\xE9 (IRK) lue sur l\u2019appareil qui vient de se jumeler :",
  helper_belongs: "Appartient \xE0 : {name}",
  helper_add_as: "Ajouter comme \xAB {name} \xBB",
  helper_added: "\u2713 \xAB {name} \xBB est maintenant dans la liste ci-dessus.",
  pbd_rename: "Astuce : renommez-le dans Home Assistant (Appareils et services \u2192 Private BLE Device) pour voir son nom ici.",
  carry: "J\u2019ai sur moi :",
  offline: "injoignable pour le moment",
  pbd_summary: "Vous venez de Bermuda ? Reprendre les cl\xE9s de Home Assistant",
  worn: "port\xE9",
  worn_hint: "Port\xE9 sur soi (montre, bracelet) : indique o\xF9 se trouve la personne \u2013 un t\xE9l\xE9phone peut tra\xEEner ailleurs.",
  look_title: "Personnes en 3D",
  look_figure: "Silhouette",
  look_pin: "Rep\xE8re",
  look_off: "Non",
  near_summary: "Ajouter un t\xE9l\xE9phone Android ou un porte-cl\xE9s",
  android_label: "T\xE9l\xE9phone Android (app HA)",
  paste_summary: "Coller une cl\xE9 que vous avez d\xE9j\xE0",
  helper_install: "Installer sur un ESP32",
  helper_pitch: "Pour iPhone et Apple Watch : un ESP32 \xE0 environ 5 \u20AC devient l\u2019assistant de cl\xE9 en trois minutes \u2013 install\xE9 depuis le navigateur, sans Mac. Jumelez-le ensuite ici.",
  near_intro: "Tenez l\u2019appareil tout pr\xE8s d\u2019un r\xE9cepteur. Android : activez \xAB BLE Transmitter \xBB dans l\u2019app Home Assistant. Porte-cl\xE9s : appuyez une fois.",
  near_empty: "Rien de fort \xE0 proximit\xE9 pour l\u2019instant \u2026",
  walk_intro: "Allez dans chaque pi\xE8ce, touchez-la et marchez lentement pendant 90 secondes \u2013 jusque dans les coins. Emportez tous les appareils.",
  learning: "Apprentissage de {room} \u2026 encore {left} s",
  stop: "Annuler",
  samples: "{n} \xE9chantillons",
  quality: "V\xE9rifier la pr\xE9cision",
  quality_result: "Pr\xE9cision : {p}",
  relearn_all: "Tout r\xE9apprendre",
  live_intro: "Voici comment NeonPlan vous voit en ce moment. D\xE9placez-vous et v\xE9rifiez.",
  enabled: "Localisation activ\xE9e",
  admins_only: "Afficher les personnes aux admins uniquement",
  not_heard: "non capt\xE9",
  next: "Suivant",
  need_device: "Ajoutez d\u2019abord un appareil.",
  app_title: "Android avec l'app Home Assistant",
  app_none: "T\xE9l\xE9phone Android ? Dans l'app Home Assistant : Param\xE8tres \u2192 Companion app \u2192 G\xE9rer les capteurs \u2192 activer \xAB BLE Transmitter \xBB. Il appara\xEEt alors ici tout seul.",
  app_off: "L'\xE9metteur est \xE9teint \u2013 activez-le dans l'app",
  app_power: "Puissance d'\xE9mission trop faible \u2013 r\xE9glez-la sur \xAB High \xBB dans l'app",
  app_mode: "R\xE9glez le mode d'\xE9mission sur \xAB Low latency \xBB dans l'app",
  helper_android: "N'associez pas ici de t\xE9l\xE9phones ou tablettes Android : ils n'envoient pas cette cl\xE9 en arri\xE8re-plan. Pour Android, utilisez le BLE Transmitter de l'app Home Assistant (ci-dessous).",
  unheard: "\u26A0 non capt\xE9",
  unheard_hint: "Aucun r\xE9cepteur n'entend cet appareil en ce moment. Est-il allum\xE9 et \xE9met-il ? Android : le BLE Transmitter de l'app Home Assistant.",
  fly: "Voler dans les pi\xE8ces avec \xAB O\xF9 est \u2026 ? \xBB et \xAB Qui est \xE0 la maison ? \xBB",
  fly_hint: "Les vues NeonPlan ouvertes volent dans la pi\xE8ce de la r\xE9ponse et, avec \xAB Qui est \xE0 la maison ? \xBB, dans chaque pi\xE8ce tour \xE0 tour. Un toucher arr\xEAte. Pas pour les personnes tant qu'elles ne sont montr\xE9es qu'aux admins."
};
var HU = {
  title: "Helymeghat\xE1roz\xE1s be\xE1ll\xEDt\xE1sa",
  lab: "Labor",
  close: "Bez\xE1r\xE1s",
  s_scanners: "1 \xB7 Vev\u0151k",
  s_devices: "2 \xB7 Eszk\xF6z\xF6k",
  s_walk: "3 \xB7 Betan\xEDt\xE1s",
  s_live: "4 \xB7 \xC9l\u0151",
  no_bt: "A Home Assistantban nincs Bluetooth be\xE1ll\xEDtva. El\xE9g egy Shelly (Gen2/3: passz\xEDv Bluetooth-keres\xE9s), ESPHome Bluetooth-proxy vagy egy USB-adapter.",
  scanners_intro: "Ezek a Home Assistant \xE1ltal ismert Bluetooth-vev\u0151k. Add meg mindegyikn\xE9l, melyik helyis\xE9gben van.",
  not_placed: "\u2013 v\xE1lassz helyis\xE9get \u2013",
  hint_room: "A jel szerint: {room} \u2013 \xE1tv\xE9tel",
  coverage: "Helyis\xE9gek saj\xE1t vev\u0151 n\xE9lk\xFCl \u2013 a betan\xEDt\xE1s \xEDgy is felismerhet\u0151v\xE9 teszi \u0151ket:",
  devices_intro: "Mely eszk\xF6z\xF6ket keress\xFCk? Legjobb az, ami mindig n\xE1lad van \u2013 a csukl\xF3n l\xE9v\u0151 \xF3ra ide\xE1lis.",
  known_keys: "iPhone \xE9s Apple Watch kulccsal (a Home Assistant \u201EPrivate BLE Device\u201D eszk\xF6zeib\u0151l):",
  add: "Hozz\xE1ad\xE1s",
  added: "\u2713 hozz\xE1adva",
  remove: "Elt\xE1vol\xEDt\xE1s",
  person: "Szem\xE9ly",
  none: "nincs",
  irk_help: "Hi\xE1nyzik az iPhone vagy az Apple Watch? Sz\xFCks\xE9g\xFCk van a kulcsukra (IRK) \u201EPrivate BLE Device\u201D-k\xE9nt a Home Assistantban \u2013 az \xFAtmutat\xF3 megmutatja a legegyszer\u0171bb m\xF3dokat.",
  manual: "\xDAtmutat\xF3",
  voice_hint: "K\xE9rdezz hanggal is: \u201EHol van az iPhone-om?\u201D, \u201EHol van Torsten?\u201D, \u201EKi van otthon?\u201D, \u201ECs\xF6rgesd meg az iPhone-omat\u201D.",
  look_hint: "3D-ben a szem\xE9lyek figurak\xE9nt jelennek meg; a n\xE9zet \u2699 men\xFCj\xE9ben: Szem\xE9lyek \u2192 figura, t\u0171 vagy ki.",
  ring: "Cs\xF6rget\xE9s",
  ring_hint: "A Home Assistant alkalmaz\xE1s ezen a telefonon \u2013 \xEDgy m\u0171k\xF6dik a \u201ECs\xF6rgesd meg az iPhone-omat\u201D.",
  near_title: "K\xF6zeli eszk\xF6z keres\xE9se",
  key_title: "Kulcs beilleszt\xE9se",
  key_name: "N\xE9v (pl. Torsten iPhone-ja)",
  key_value: "Kulcs (IRK, 32 karakter)",
  key_bad: "Ez nem \xE9rv\xE9nyes kulcs (32 hex karakter vagy Base64).",
  helper_title: "\u{1F511} Kulcsseg\xE9d",
  helper_build: "Kulcsseg\xE9d be\xE1ll\xEDt\xE1sa",
  helper_found: "Kulcsseg\xE9d megtal\xE1lva: {name}",
  helper_watch: "Apple Watch eset\xE9n",
  helper_phone: "iPhone eset\xE9n",
  helper_watch_steps: "Az \xF3r\xE1n: Be\xE1ll\xEDt\xE1sok \u2192 Bluetooth \u2192 az \u201EEg\xE9szs\xE9g\xFCgyi eszk\xF6z\xF6k\u201D alatt koppintson a \u201ENeonPlan Key\u201D elemre, \xE9s p\xE1ros\xEDtsa.",
  helper_phone_steps: "A telefonon: Be\xE1ll\xEDt\xE1sok \u2192 Bluetooth \u2192 p\xE1ros\xEDtsa a \u201ENeonPlan Key\u201D eszk\xF6zt (billenty\u0171zetk\xE9nt jelenik meg).",
  helper_key: "Kiolvasott kulcs:",
  helper_wait: "V\xE1rakoz\xE1s a p\xE1ros\xEDt\xE1sra \u2026",
  helper_after: "Ezut\xE1n t\xE1vol\xEDtsa el a \u201ENeonPlan Key\u201D eszk\xF6zt a Bluetooth-be\xE1ll\xEDt\xE1sokb\xF3l.",
  helper_next: "\u{1F504} K\xF6vetkez\u0151 eszk\xF6z",
  helper_next_hint: "Minden tov\xE1bbi eszk\xF6z el\u0151tt koppintson: a seg\xE9d \xFAj Bluetooth-azonos\xEDt\xF3t kap, \xEDgy a kor\xE1bban p\xE1ros\xEDtott eszk\xF6z nem kapcsol\xF3dik k\xF6zbe.",
  helper_name: "Az eszk\xF6z neve",
  helper_irk: "Az im\xE9nt p\xE1ros\xEDtott eszk\xF6zr\u0151l olvasott kulcs (IRK):",
  helper_belongs: "Ehhez tartozik: {name}",
  helper_add_as: "Hozz\xE1ad\xE1s \xEDgy: \u201E{name}\u201D",
  helper_added: "\u2713 \u201E{name}\u201D most m\xE1r a fenti list\xE1ban van.",
  pbd_rename: "Tipp: nevezze \xE1t a Home Assistantban (Eszk\xF6z\xF6k \xE9s szolg\xE1ltat\xE1sok \u2192 Private BLE Device), \xE9s itt a n\xE9v jelenik meg.",
  carry: "Most n\xE1lam van:",
  offline: "jelenleg nem \xE9rhet\u0151 el",
  pbd_summary: "Bermud\xE1r\xF3l v\xE1lt? Kulcsok \xE1tv\xE9tele a Home Assistantb\xF3l",
  worn: "viselt",
  worn_hint: "Testen viselt (\xF3ra, karp\xE1nt): megmutatja, hol van a szem\xE9ly \u2013 a telefon b\xE1rhol heverhet.",
  look_title: "Szem\xE9lyek 3D-ben",
  look_figure: "Alak",
  look_pin: "Jel\xF6l\u0151",
  look_off: "Ki",
  near_summary: "Androidos telefon vagy kulcstart\xF3 hozz\xE1ad\xE1sa",
  android_label: "Androidos telefon (HA-alkalmaz\xE1s)",
  paste_summary: "Megl\xE9v\u0151 kulcs beilleszt\xE9se",
  helper_install: "Telep\xEDt\xE9s ESP32-re",
  helper_pitch: "iPhone-hoz \xE9s Apple Watch-hoz: egy kb. 5 eur\xF3s ESP32 h\xE1rom perc alatt kulcsseg\xE9dd\xE9 v\xE1lik \u2013 k\xF6zvetlen\xFCl a b\xF6ng\xE9sz\u0151b\u0151l telep\xEDtve, Mac n\xE9lk\xFCl. Ut\xE1na itt p\xE1ros\xEDtsa.",
  near_intro: "Tartsd az eszk\xF6zt k\xF6zvetlen\xFCl egy vev\u0151 mell\xE9. Android: kapcsold be a \u201EBLE Transmitter\u201D opci\xF3t a Home Assistant alkalmaz\xE1sban. Kulcstart\xF3k: nyomd meg egyszer.",
  near_empty: "M\xE9g semmi er\u0151s a k\xF6zelben \u2026",
  walk_intro: "Menj be minden helyis\xE9gbe, koppints r\xE1, \xE9s s\xE9t\xE1lj lassan 90 m\xE1sodpercig \u2013 a sarkokba is. Vidd magaddal az \xF6sszes eszk\xF6zt.",
  learning: "{room} betan\xEDt\xE1sa \u2026 m\xE9g {left} s",
  stop: "M\xE9gse",
  samples: "{n} minta",
  quality: "Pontoss\xE1g ellen\u0151rz\xE9se",
  quality_result: "Pontoss\xE1g: {p}",
  relearn_all: "Minden \xFAjratan\xEDt\xE1sa",
  live_intro: "\xCDgy l\xE1t most t\xE9ged a NeonPlan. S\xE9t\xE1lj egy kicsit, \xE9s n\xE9zd meg, stimmel-e.",
  enabled: "Helymeghat\xE1roz\xE1s bekapcsolva",
  admins_only: "Szem\xE9lyek csak adminoknak",
  not_heard: "nem hallhat\xF3",
  next: "Tov\xE1bb",
  need_device: "El\u0151bb adj hozz\xE1 egy eszk\xF6zt.",
  app_title: "Android a Home Assistant alkalmaz\xE1ssal",
  app_none: "Androidos telefon? A Home Assistant alkalmaz\xE1sban: Be\xE1ll\xEDt\xE1sok \u2192 Companion app \u2192 \xC9rz\xE9kel\u0151k kezel\xE9se \u2192 kapcsold be a \u201EBLE Transmitter\u201D-t. Ut\xE1na mag\xE1t\xF3l megjelenik itt.",
  app_off: "Az ad\xF3 ki van kapcsolva \u2013 kapcsold be az alkalmaz\xE1sban",
  app_power: "T\xFAl kicsi az ad\xF3teljes\xEDtm\xE9ny \u2013 \xE1ll\xEDtsd \u201EHigh\u201D-ra az alkalmaz\xE1sban",
  app_mode: "\xC1ll\xEDtsd az ad\xE1si m\xF3dot \u201ELow latency\u201D-re az alkalmaz\xE1sban",
  helper_android: "Androidos telefont vagy t\xE1blag\xE9pet ne itt p\xE1ros\xEDts: a h\xE1tt\xE9rben nem k\xFCldik ezt a kulcsot. Androidhoz a Home Assistant alkalmaz\xE1s BLE Transmitter\xE9t haszn\xE1ld (lent).",
  unheard: "\u26A0 nem hallhat\xF3",
  unheard_hint: "Most egyik vev\u0151 sem hallja ezt az eszk\xF6zt. Be van kapcsolva \xE9s sug\xE1roz? Android: a Home Assistant alkalmaz\xE1s BLE Transmittere.",
  fly: "Rep\xFCl\xE9s a szob\xE1kba a \u201EHol van \u2026?\u201D \xE9s \u201EKi van otthon?\u201D k\xE9rd\xE9sekre",
  fly_hint: "A nyitott NeonPlan-n\xE9zetek a v\xE1lasz szob\xE1j\xE1ba rep\xFClnek, \u201EKi van otthon?\u201D eset\xE9n sorban minden szob\xE1ba. Koppint\xE1s le\xE1ll\xEDtja. Szem\xE9lyekn\xE9l nem, ha csak adminoknak l\xE1tszanak."
};
var IT = {
  title: "Configura localizzazione",
  lab: "Lab",
  close: "Chiudi",
  s_scanners: "1 \xB7 Ricevitori",
  s_devices: "2 \xB7 Dispositivi",
  s_walk: "3 \xB7 Apprendimento",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistant non ha il Bluetooth configurato. Bastano Shelly (Gen2/3: scansione Bluetooth passiva), proxy Bluetooth ESPHome o un adattatore USB.",
  scanners_intro: "Questi sono tutti i ricevitori Bluetooth noti a Home Assistant. Indica per ognuno in quale stanza si trova.",
  not_placed: "\u2013 scegli stanza \u2013",
  hint_room: "Il segnale dice: {room} \u2013 usa",
  coverage: "Stanze senza ricevitore proprio \u2013 l\u2019apprendimento le rende comunque riconoscibili:",
  devices_intro: "Quali dispositivi localizzare? Meglio ci\xF2 che porti sempre con te \u2013 l\u2019orologio al polso \xE8 ideale.",
  known_keys: "iPhone e Apple Watch con chiave (da \u201CPrivate BLE Device\u201D in Home Assistant):",
  add: "Aggiungi",
  added: "\u2713 aggiunto",
  remove: "Rimuovi",
  person: "Persona",
  none: "nessuna",
  irk_help: "Manca l\u2019iPhone o l\u2019Apple Watch? Serve la loro chiave (IRK) come \u201CPrivate BLE Device\u201D in Home Assistant \u2013 la guida mostra i modi pi\xF9 semplici.",
  manual: "Guida",
  voice_hint: "Chiedi anche a voce: \u201CDov\u2019\xE8 il mio iPhone?\u201D, \u201CDov\u2019\xE8 Torsten?\u201D, \u201CChi \xE8 a casa?\u201D, \u201CFai squillare il mio iPhone\u201D.",
  look_hint: "In 3D le persone appaiono come figura; nel menu \u2699 della vista: Persone \u2192 figura, puntina o spento.",
  ring: "Fai squillare",
  ring_hint: "L\u2019app Home Assistant su questo telefono \u2013 cos\xEC funziona \u201CFai squillare il mio iPhone\u201D.",
  near_title: "Cerca dispositivo vicino",
  key_title: "Incolla chiave",
  key_name: "Nome (es. iPhone di Torsten)",
  key_value: "Chiave (IRK, 32 caratteri)",
  key_bad: "Non \xE8 una chiave valida (32 caratteri hex o Base64).",
  helper_title: "\u{1F511} Assistente chiave",
  helper_build: "Configura l\u2019assistente chiave",
  helper_found: "Assistente chiave trovato: {name}",
  helper_watch: "Per Apple Watch",
  helper_phone: "Per iPhone",
  helper_watch_steps: "Sull\u2019orologio: Impostazioni \u2192 Bluetooth \u2192 in \xABDispositivi per la salute\xBB tocca \xABNeonPlan Key\xBB e abbina.",
  helper_phone_steps: "Sul telefono: Impostazioni \u2192 Bluetooth \u2192 abbina \xABNeonPlan Key\xBB (appare come tastiera).",
  helper_key: "Chiave letta:",
  helper_wait: "In attesa dell\u2019abbinamento \u2026",
  helper_after: "Poi rimuovi il dispositivo \xABNeonPlan Key\xBB dalle impostazioni Bluetooth.",
  helper_next: "\u{1F504} Dispositivo successivo",
  helper_next_hint: "Tocca prima di ogni nuovo dispositivo: l'aiutante riceve una nuova identit\xE0 Bluetooth, cos\xEC un dispositivo gi\xE0 associato non si ricollega.",
  helper_name: "Nome di questo dispositivo",
  helper_irk: "Chiave (IRK) letta dal dispositivo appena associato:",
  helper_belongs: "Appartiene a: {name}",
  helper_add_as: "Aggiungi come \xAB{name}\xBB",
  helper_added: "\u2713 \xAB{name}\xBB ora \xE8 nell\u2019elenco qui sopra.",
  pbd_rename: "Suggerimento: rinominalo in Home Assistant (Dispositivi e servizi \u2192 Private BLE Device) per vedere qui il nome.",
  carry: "Ho con me:",
  offline: "non raggiungibile ora",
  pbd_summary: "Arrivi da Bermuda? Prendi le chiavi da Home Assistant",
  worn: "indossato",
  worn_hint: "Indossato (orologio, braccialetto): indica dove si trova la persona \u2013 un telefono pu\xF2 restare ovunque.",
  look_title: "Persone in 3D",
  look_figure: "Figura",
  look_pin: "Segnaposto",
  look_off: "No",
  near_summary: "Aggiungi un telefono Android o un portachiavi",
  android_label: "Telefono Android (app HA)",
  paste_summary: "Incolla una chiave che hai gi\xE0",
  helper_install: "Installa su un ESP32",
  helper_pitch: "Per iPhone e Apple Watch: un ESP32 da circa 5 \u20AC diventa l\u2019aiutante delle chiavi in tre minuti, installato dal browser, senza Mac. Poi associalo qui.",
  near_intro: "Tieni il dispositivo vicinissimo a un ricevitore. Android: attiva \u201CBLE Transmitter\u201D nell\u2019app Home Assistant. Portachiavi: premi una volta.",
  near_empty: "Ancora niente di forte nelle vicinanze \u2026",
  walk_intro: "Entra in ogni stanza, toccala e cammina lentamente per 90 secondi \u2013 anche negli angoli. Porta con te tutti i dispositivi.",
  learning: "Apprendo {room} \u2026 ancora {left} s",
  stop: "Annulla",
  samples: "{n} campioni",
  quality: "Verifica precisione",
  quality_result: "Precisione: {p}",
  relearn_all: "Riapprendi tutto",
  live_intro: "Ecco come ti vede NeonPlan adesso. Cammina un po\u2019 e controlla se \xE8 giusto.",
  enabled: "Localizzazione attiva",
  admins_only: "Mostra persone solo agli admin",
  not_heard: "non rilevato",
  next: "Avanti",
  need_device: "Prima aggiungi un dispositivo.",
  app_title: "Android con l'app Home Assistant",
  app_none: "Telefono Android? Nell'app Home Assistant: Impostazioni \u2192 Companion app \u2192 Gestisci sensori \u2192 attiva \xABBLE Transmitter\xBB. Poi compare qui da solo.",
  app_off: "Il trasmettitore \xE8 spento \u2013 attivalo nell'app",
  app_power: "Potenza di trasmissione troppo bassa \u2013 impostala su \xABHigh\xBB nell'app",
  app_mode: "Imposta la modalit\xE0 di trasmissione su \xABLow latency\xBB nell'app",
  helper_android: "Non associare qui telefoni o tablet Android: non inviano questa chiave in background. Per Android usa il BLE Transmitter dell'app Home Assistant (sotto).",
  unheard: "\u26A0 non rilevato",
  unheard_hint: "Nessun ricevitore sente questo dispositivo in questo momento. \xC8 acceso e trasmette? Android: il BLE Transmitter dell'app Home Assistant.",
  fly: "Volare nelle stanze con \xABDov'\xE8 \u2026?\xBB e \xABChi \xE8 a casa?\xBB",
  fly_hint: "Le viste NeonPlan aperte volano nella stanza della risposta e, con \xABChi \xE8 a casa?\xBB, in tutte a turno. Un tocco ferma. Non per le persone finch\xE9 sono mostrate solo agli admin."
};
var NB = {
  title: "Sett opp lokalisering",
  lab: "Lab",
  close: "Lukk",
  s_scanners: "1 \xB7 Mottakere",
  s_devices: "2 \xB7 Enheter",
  s_walk: "3 \xB7 Innl\xE6ring",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistant har ikke Bluetooth satt opp. Shelly (Gen2/3: passiv Bluetooth-skanning), ESPHome Bluetooth-proxyer eller en USB-adapter holder.",
  scanners_intro: "Dette er alle Bluetooth-mottakere Home Assistant kjenner. Si for hver av dem hvilket rom den st\xE5r i.",
  not_placed: "\u2013 velg rom \u2013",
  hint_room: "Signalet sier: {room} \u2013 bruk",
  coverage: "Rom uten egen mottaker \u2013 innl\xE6ringen gj\xF8r dem gjenkjennelige likevel:",
  devices_intro: "Hvilke enheter skal lokaliseres? Helst det du alltid har med deg \u2013 klokka p\xE5 h\xE5ndleddet er ideell.",
  known_keys: "iPhone og Apple Watch med n\xF8kkel (fra \xABPrivate BLE Device\xBB i Home Assistant):",
  add: "Legg til",
  added: "\u2713 med",
  remove: "Fjern",
  person: "Person",
  none: "ingen",
  irk_help: "Mangler iPhone eller Apple Watch? De trenger n\xF8kkelen sin (IRK) som \xABPrivate BLE Device\xBB i Home Assistant \u2013 veiledningen viser de enkleste m\xE5tene.",
  manual: "Veiledning",
  voice_hint: "Sp\xF8r ogs\xE5 med stemmen: \xABHvor er iPhonen min?\xBB, \xABHvor er Torsten?\xBB, \xABHvem er hjemme?\xBB, \xABRing iPhonen min\xBB.",
  look_hint: "I 3D vises personer som figur; i visningens \u2699-meny: Personer \u2192 figur, n\xE5l eller av.",
  ring: "Ring",
  ring_hint: "Home Assistant-appen p\xE5 denne telefonen \u2013 da virker \xABRing iPhonen min\xBB.",
  near_title: "Finn enhet i n\xE6rheten",
  key_title: "Lim inn n\xF8kkel",
  key_name: "Navn (f.eks. Torstens iPhone)",
  key_value: "N\xF8kkel (IRK, 32 tegn)",
  key_bad: "Dette er ikke en gyldig n\xF8kkel (32 hex-tegn eller Base64).",
  helper_title: "\u{1F511} N\xF8kkelhjelper",
  helper_build: "Konfigurer n\xF8kkelhjelperen",
  helper_found: "N\xF8kkelhjelper funnet: {name}",
  helper_watch: "For Apple Watch",
  helper_phone: "For iPhone",
  helper_watch_steps: "P\xE5 klokken: Innstillinger \u2192 Bluetooth \u2192 under \xABHelseenheter\xBB trykker du p\xE5 \xABNeonPlan Key\xBB og parer.",
  helper_phone_steps: "P\xE5 telefonen: Innstillinger \u2192 Bluetooth \u2192 par \xABNeonPlan Key\xBB (vises som tastatur).",
  helper_key: "Lest n\xF8kkel:",
  helper_wait: "Venter p\xE5 paring \u2026",
  helper_after: "Fjern deretter enheten \xABNeonPlan Key\xBB fra Bluetooth-innstillingene igjen.",
  helper_next: "\u{1F504} Neste enhet",
  helper_next_hint: "Trykk f\xF8r hver ny enhet: hjelperen f\xE5r en ny Bluetooth-identitet, s\xE5 en enhet som var paret f\xF8r, ikke kobler seg til imellom.",
  helper_name: "Navn p\xE5 denne enheten",
  helper_irk: "N\xF8kkel (IRK) lest fra enheten som nettopp ble paret:",
  helper_belongs: "H\xF8rer til: {name}",
  helper_add_as: "Legg til som \xAB{name}\xBB",
  helper_added: "\u2713 \xAB{name}\xBB st\xE5r n\xE5 i listen over.",
  pbd_rename: "Tips: gi den nytt navn i Home Assistant (Enheter og tjenester \u2192 Private BLE Device), s\xE5 st\xE5r navnet her.",
  carry: "Jeg har med meg:",
  offline: "ikke tilgjengelig n\xE5",
  pbd_summary: "Bytter du fra Bermuda? Hent n\xF8kler fra Home Assistant",
  worn: "b\xE5ret",
  worn_hint: "B\xE5ret p\xE5 kroppen (klokke, b\xE5nd): viser hvor personen er \u2013 en telefon kan ligge hvor som helst.",
  look_title: "Personer i 3D",
  look_figure: "Figur",
  look_pin: "N\xE5l",
  look_off: "Av",
  near_summary: "Legg til Android-telefon eller n\xF8kkelbrikke",
  android_label: "Android-telefon (HA-appen)",
  paste_summary: "Lim inn en n\xF8kkel du allerede har",
  helper_install: "Installer p\xE5 en ESP32",
  helper_pitch: "For iPhone og Apple Watch: En ESP32 til ca. 5 \u20AC blir n\xF8kkelhjelper p\xE5 tre minutter \u2013 installert rett fra nettleseren, uten Mac. Par den deretter her.",
  near_intro: "Hold enheten helt inntil en mottaker. Android: sl\xE5 p\xE5 \xABBLE Transmitter\xBB i Home Assistant-appen. N\xF8kkelbrikker: trykk \xE9n gang.",
  near_empty: "Ingenting sterkt i n\xE6rheten enn\xE5 \u2026",
  walk_intro: "G\xE5 inn i hvert rom, trykk p\xE5 det og g\xE5 sakte rundt i 90 sekunder \u2013 ogs\xE5 inn i hj\xF8rnene. Ta med alle enhetene.",
  learning: "L\xE6rer {room} \u2026 {left} s igjen",
  stop: "Avbryt",
  samples: "{n} pr\xF8ver",
  quality: "Sjekk treffsikkerhet",
  quality_result: "Treffsikkerhet: {p}",
  relearn_all: "L\xE6r inn alt p\xE5 nytt",
  live_intro: "Slik ser NeonPlan deg akkurat n\xE5. G\xE5 rundt og se om det stemmer.",
  enabled: "Lokalisering p\xE5",
  admins_only: "Vis personer bare for administratorer",
  not_heard: "ikke h\xF8rt",
  next: "Neste",
  need_device: "Legg til en enhet f\xF8rst.",
  app_title: "Android med Home Assistant-appen",
  app_none: "Android-telefon? I Home Assistant-appen: Innstillinger \u2192 Companion app \u2192 Administrer sensorer \u2192 sl\xE5 p\xE5 \xABBLE Transmitter\xBB. Da dukker den opp her av seg selv.",
  app_off: "Senderen er av \u2013 sl\xE5 den p\xE5 i appen",
  app_power: "Sendestyrken er for lav \u2013 sett den til \xABHigh\xBB i appen",
  app_mode: "Sett sendemodus til \xABLow latency\xBB i appen",
  helper_android: "Ikke par Android-telefoner eller -nettbrett her: de sender ikke denne n\xF8kkelen i bakgrunnen. Bruk Home Assistant-appens BLE Transmitter for Android (nedenfor).",
  unheard: "\u26A0 ikke h\xF8rt",
  unheard_hint: "Ingen mottaker h\xF8rer enheten akkurat n\xE5. Er den p\xE5 og sender? Android: Home Assistant-appens BLE Transmitter.",
  fly: "Fly inn i rommene ved \xABHvor er \u2026?\xBB og \xABHvem er hjemme?\xBB",
  fly_hint: "De \xE5pne NeonPlan-visningene flyr inn i rommet i svaret, ved \xABHvem er hjemme?\xBB inn i alle rom etter tur. Et trykk stopper. Ikke for personer n\xE5r de bare vises for administratorer."
};
var NL = {
  title: "Locatiebepaling instellen",
  lab: "Lab",
  close: "Sluiten",
  s_scanners: "1 \xB7 Ontvangers",
  s_devices: "2 \xB7 Apparaten",
  s_walk: "3 \xB7 Inleren",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistant heeft geen Bluetooth ingesteld. Shelly (Gen2/3: Bluetooth-scan passief), ESPHome Bluetooth-proxy\u2019s of een USB-adapter volstaan.",
  scanners_intro: "Dit zijn alle Bluetooth-ontvangers die Home Assistant kent. Geef bij elk aan in welke ruimte hij staat.",
  not_placed: "\u2013 kies ruimte \u2013",
  hint_room: "Signaal zegt: {room} \u2013 overnemen",
  coverage: "Ruimtes zonder eigen ontvanger \u2013 door het inleren worden ze toch herkenbaar:",
  devices_intro: "Welke apparaten moeten gelokaliseerd worden? Het liefst wat je altijd bij je hebt \u2013 het horloge om je pols is ideaal.",
  known_keys: "iPhone en Apple Watch met sleutel (uit \u201CPrivate BLE Device\u201D in Home Assistant):",
  add: "Toevoegen",
  added: "\u2713 toegevoegd",
  remove: "Verwijderen",
  person: "Persoon",
  none: "geen",
  irk_help: "Mist er een iPhone of Apple Watch? Die hebben hun sleutel (IRK) nodig als \u201CPrivate BLE Device\u201D in Home Assistant \u2013 de handleiding toont de eenvoudigste manieren.",
  manual: "Handleiding",
  voice_hint: "Vraag het ook met je stem: \u201CWaar is mijn iPhone?\u201D, \u201CWaar is Torsten?\u201D, \u201CWie is er thuis?\u201D, \u201CLaat mijn iPhone overgaan\u201D.",
  look_hint: "In 3D verschijnen personen als figuur; in het \u2699-menu van de weergave: Personen \u2192 figuur, speld of uit.",
  ring: "Laten overgaan",
  ring_hint: "De Home Assistant-app op deze telefoon \u2013 dan werkt \u201CLaat mijn iPhone overgaan\u201D.",
  near_title: "Apparaat in de buurt zoeken",
  key_title: "Sleutel plakken",
  key_name: "Naam (bijv. iPhone van Torsten)",
  key_value: "Sleutel (IRK, 32 tekens)",
  key_bad: "Dat is geen geldige sleutel (32 hex-tekens of Base64).",
  helper_title: "\u{1F511} Sleutelhulp",
  helper_build: "Sleutelhulp instellen",
  helper_found: "Sleutelhulp gevonden: {name}",
  helper_watch: "Voor een Apple Watch",
  helper_phone: "Voor een iPhone",
  helper_watch_steps: "Op de watch: Instellingen \u2192 Bluetooth \u2192 onder \u2018Gezondheidsapparaten\u2019 op \u2018NeonPlan Key\u2019 tikken en koppelen.",
  helper_phone_steps: "Op de telefoon: Instellingen \u2192 Bluetooth \u2192 \u2018NeonPlan Key\u2019 koppelen (verschijnt als toetsenbord).",
  helper_key: "Uitgelezen sleutel:",
  helper_wait: "Wachten op koppelen \u2026",
  helper_after: "Verwijder daarna het apparaat \u2018NeonPlan Key\u2019 weer uit de Bluetooth-instellingen.",
  helper_next: "\u{1F504} Volgend apparaat",
  helper_next_hint: "Tik v\xF3\xF3r elk volgend apparaat: de helper krijgt een nieuwe Bluetooth-identiteit, zodat een eerder gekoppeld apparaat niet meer tussendoor verbindt.",
  helper_name: "Naam voor dit apparaat",
  helper_irk: "Sleutel (IRK) van het apparaat dat net is gekoppeld:",
  helper_belongs: "Hoort bij: {name}",
  helper_add_as: "Toevoegen als \u2018{name}\u2019",
  helper_added: "\u2713 \u2018{name}\u2019 staat nu in de lijst hierboven.",
  pbd_rename: "Tip: geef het een naam in Home Assistant (Apparaten en diensten \u2192 Private BLE Device), dan staat die hier.",
  carry: "Ik heb nu bij me:",
  offline: "nu niet bereikbaar",
  pbd_summary: "Kom je van Bermuda? Sleutels uit Home Assistant overnemen",
  worn: "gedragen",
  worn_hint: "Op het lichaam gedragen (horloge, band): bepaalt waar de persoon is \u2013 een telefoon kan ergens liggen.",
  look_title: "Personen in 3D",
  look_figure: "Figuur",
  look_pin: "Speld",
  look_off: "Uit",
  near_summary: "Android-telefoon of sleutelhanger toevoegen",
  android_label: "Android-telefoon (HA-app)",
  paste_summary: "Een sleutel plakken die je al hebt",
  helper_install: "Op een ESP32 installeren",
  helper_pitch: "Voor iPhone en Apple Watch: een ESP32 van ca. 5 \u20AC wordt in drie minuten de sleutelhelper \u2013 direct vanuit de browser ge\xEFnstalleerd, zonder Mac. Daarna hier koppelen.",
  near_intro: "Houd het apparaat vlak bij een ontvanger. Android: zet \u201CBLE Transmitter\u201D aan in de Home Assistant-app. Sleutelhangers: kort indrukken.",
  near_empty: "Nog niets sterks in de buurt \u2026",
  walk_intro: "Ga elke ruimte in, tik erop en loop 90 seconden langzaam rond \u2013 ook in de hoeken. Neem alle apparaten mee.",
  learning: "{room} inleren \u2026 nog {left} s",
  stop: "Annuleren",
  samples: "{n} metingen",
  quality: "Trefzekerheid controleren",
  quality_result: "Trefzekerheid: {p}",
  relearn_all: "Alles opnieuw inleren",
  live_intro: "Zo ziet NeonPlan je nu. Loop rond en kijk of het klopt.",
  enabled: "Locatiebepaling aan",
  admins_only: "Personen alleen aan admins tonen",
  not_heard: "niet gehoord",
  next: "Volgende",
  need_device: "Voeg eerst een apparaat toe.",
  app_title: "Android met de Home Assistant-app",
  app_none: "Android-telefoon? In de Home Assistant-app: Instellingen \u2192 Companion app \u2192 Sensoren beheren \u2192 zet \u201EBLE Transmitter\u201D aan. Dan verschijnt hij hier vanzelf.",
  app_off: "Zender staat uit \u2013 zet hem aan in de app",
  app_power: "Zendvermogen te laag \u2013 zet het in de app op \u201EHigh\u201D",
  app_mode: "Zet de zendmodus in de app op \u201ELow latency\u201D",
  helper_android: "Koppel hier geen Android-telefoons of -tablets: ze sturen deze sleutel niet op de achtergrond. Gebruik voor Android de BLE Transmitter van de Home Assistant-app (hieronder).",
  unheard: "\u26A0 niet gehoord",
  unheard_hint: "Geen ontvanger hoort dit apparaat nu. Staat het aan en zendt het? Android: de BLE Transmitter van de Home Assistant-app.",
  fly: "Bij \u201EWaar is \u2026?\u201D en \u201EWie is er thuis?\u201D de kamers in vliegen",
  fly_hint: "De open NeonPlan-weergaven vliegen naar de kamer uit het antwoord, bij \u201EWie is er thuis?\u201D om de beurt naar alle kamers. Tikken stopt het. Niet voor personen zolang ze alleen aan admins worden getoond."
};
var NN = {
  title: "Set opp lokalisering",
  lab: "Lab",
  close: "Lukk",
  s_scanners: "1 \xB7 Mottakarar",
  s_devices: "2 \xB7 Einingar",
  s_walk: "3 \xB7 Innl\xE6ring",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistant har ikkje sett opp Bluetooth. Shelly (Gen2/3: passiv Bluetooth-skanning), ESPHome Bluetooth-proxyar eller ein USB-adapter held.",
  scanners_intro: "Dette er alle Bluetooth-mottakarar Home Assistant kjenner. Sei for kvar av dei kva rom han st\xE5r i.",
  not_placed: "\u2013 vel rom \u2013",
  hint_room: "Signalet seier: {room} \u2013 bruk",
  coverage: "Rom utan eigen mottakar \u2013 innl\xE6ringa gjer dei kjennelege likevel:",
  devices_intro: "Kva einingar skal lokaliserast? Helst det du alltid har med deg \u2013 klokka p\xE5 handleddet er ideell.",
  known_keys: "iPhone og Apple Watch med n\xF8kkel (fr\xE5 \xABPrivate BLE Device\xBB i Home Assistant):",
  add: "Legg til",
  added: "\u2713 med",
  remove: "Fjern",
  person: "Person",
  none: "ingen",
  irk_help: "Manglar iPhone eller Apple Watch? Dei treng n\xF8kkelen sin (IRK) som \xABPrivate BLE Device\xBB i Home Assistant \u2013 rettleiinga viser dei enklaste m\xE5tane.",
  manual: "Rettleiing",
  voice_hint: "Sp\xF8r \xF2g med stemma: \xABKvar er iPhonen min?\xBB, \xABKvar er Torsten?\xBB, \xABKven er heime?\xBB, \xABRing iPhonen min\xBB.",
  look_hint: "I 3D blir personar viste som figur; i \u2699-menyen til visinga: Personar \u2192 figur, n\xE5l eller av.",
  ring: "Ring",
  ring_hint: "Home Assistant-appen p\xE5 denne telefonen \u2013 d\xE5 verkar \xABRing iPhonen min\xBB.",
  near_title: "Finn eining i n\xE6rleiken",
  key_title: "Lim inn n\xF8kkel",
  key_name: "Namn (t.d. iPhonen til Torsten)",
  key_value: "N\xF8kkel (IRK, 32 teikn)",
  key_bad: "Dette er ikkje ein gyldig n\xF8kkel (32 hex-teikn eller Base64).",
  helper_title: "\u{1F511} N\xF8kkelhjelpar",
  helper_build: "Set opp n\xF8kkelhjelparen",
  helper_found: "N\xF8kkelhjelpar funnen: {name}",
  helper_watch: "For Apple Watch",
  helper_phone: "For iPhone",
  helper_watch_steps: "P\xE5 klokka: Innstillingar \u2192 Bluetooth \u2192 under \xABHelseeiningar\xBB trykkjer du p\xE5 \xABNeonPlan Key\xBB og parar.",
  helper_phone_steps: "P\xE5 telefonen: Innstillingar \u2192 Bluetooth \u2192 par \xABNeonPlan Key\xBB (blir vist som tastatur).",
  helper_key: "Lesen n\xF8kkel:",
  helper_wait: "Ventar p\xE5 paring \u2026",
  helper_after: "Fjern deretter eininga \xABNeonPlan Key\xBB fr\xE5 Bluetooth-innstillingane igjen.",
  helper_next: "\u{1F504} Neste eining",
  helper_next_hint: "Trykk f\xF8r kvar ny eining: hjelparen f\xE5r ein ny Bluetooth-identitet, s\xE5 ei eining som var para f\xF8r, ikkje koplar seg til i mellomtida.",
  helper_name: "Namn p\xE5 denne eininga",
  helper_irk: "N\xF8kkel (IRK) lesen fr\xE5 eininga som nett vart para:",
  helper_belongs: "H\xF8yrer til: {name}",
  helper_add_as: "Legg til som \xAB{name}\xBB",
  helper_added: "\u2713 \xAB{name}\xBB st\xE5r no i lista over.",
  pbd_rename: "Tips: gje henne nytt namn i Home Assistant (Einingar og tenester \u2192 Private BLE Device), s\xE5 st\xE5r namnet her.",
  carry: "Eg har med meg:",
  offline: "ikkje tilgjengeleg no",
  pbd_summary: "Byter du fr\xE5 Bermuda? Hent n\xF8klar fr\xE5 Home Assistant",
  worn: "bore",
  worn_hint: "Bore p\xE5 kroppen (klokke, band): viser kvar personen er \u2013 ein telefon kan liggje kvar som helst.",
  look_title: "Personar i 3D",
  look_figure: "Figur",
  look_pin: "N\xE5l",
  look_off: "Av",
  near_summary: "Legg til Android-telefon eller n\xF8kkelbrikke",
  android_label: "Android-telefon (HA-appen)",
  paste_summary: "Lim inn ein n\xF8kkel du alt har",
  helper_install: "Installer p\xE5 ein ESP32",
  helper_pitch: "For iPhone og Apple Watch: Ein ESP32 til ca. 5 \u20AC blir n\xF8kkelhjelpar p\xE5 tre minutt \u2013 installert rett fr\xE5 nettlesaren, utan Mac. Par han s\xE5 her.",
  near_intro: "Hald eininga heilt inntil ein mottakar. Android: sl\xE5 p\xE5 \xABBLE Transmitter\xBB i Home Assistant-appen. N\xF8kkelbrikker: trykk \xE9in gong.",
  near_empty: "Ikkje noko sterkt i n\xE6rleiken enno \u2026",
  walk_intro: "G\xE5 inn i kvart rom, trykk p\xE5 det og g\xE5 sakte rundt i 90 sekund \u2013 \xF2g inn i hj\xF8rna. Ta med alle einingane.",
  learning: "L\xE6rer {room} \u2026 {left} s att",
  stop: "Avbryt",
  samples: "{n} pr\xF8ver",
  quality: "Sjekk treffsikkerheit",
  quality_result: "Treffsikkerheit: {p}",
  relearn_all: "L\xE6r inn alt p\xE5 nytt",
  live_intro: "Slik ser NeonPlan deg akkurat no. G\xE5 rundt og sj\xE5 om det stemmer.",
  enabled: "Lokalisering p\xE5",
  admins_only: "Vis personar berre for administratorar",
  not_heard: "ikkje h\xF8yrt",
  next: "Neste",
  need_device: "Legg til ei eining f\xF8rst.",
  app_title: "Android med Home Assistant-appen",
  app_none: "Android-telefon? I Home Assistant-appen: Innstillingar \u2192 Companion app \u2192 Administrer sensorar \u2192 sl\xE5 p\xE5 \xABBLE Transmitter\xBB. D\xE5 dukkar han opp her av seg sj\xF8lv.",
  app_off: "Sendaren er av \u2013 sl\xE5 han p\xE5 i appen",
  app_power: "Sendestyrken er for l\xE5g \u2013 set han til \xABHigh\xBB i appen",
  app_mode: "Set sendemodus til \xABLow latency\xBB i appen",
  helper_android: "Ikkje par Android-telefonar eller -nettbrett her: dei sender ikkje denne n\xF8kkelen i bakgrunnen. Bruk BLE Transmitter i Home Assistant-appen for Android (nedanfor).",
  unheard: "\u26A0 ikkje h\xF8yrt",
  unheard_hint: "Ingen mottakar h\xF8yrer eininga akkurat no. Er ho p\xE5 og sender? Android: BLE Transmitter i Home Assistant-appen.",
  fly: "Fly inn i romma ved \xABKvar er \u2026?\xBB og \xABKven er heime?\xBB",
  fly_hint: "Dei opne NeonPlan-visingane flyg inn i rommet i svaret, ved \xABKven er heime?\xBB inn i alle rom etter tur. Eit trykk stoppar. Ikkje for personar n\xE5r dei berre blir viste for administratorar."
};
var PL = {
  title: "Konfiguracja lokalizacji",
  lab: "Lab",
  close: "Zamknij",
  s_scanners: "1 \xB7 Odbiorniki",
  s_devices: "2 \xB7 Urz\u0105dzenia",
  s_walk: "3 \xB7 Nauka",
  s_live: "4 \xB7 Na \u017Cywo",
  no_bt: "Home Assistant nie ma skonfigurowanego Bluetooth. Wystarczy Shelly (Gen2/3: pasywne skanowanie Bluetooth), proxy Bluetooth ESPHome lub adapter USB.",
  scanners_intro: "To wszystkie odbiorniki Bluetooth znane Home Assistant. Przy ka\u017Cdym wska\u017C, w kt\xF3rym pomieszczeniu stoi.",
  not_placed: "\u2013 wybierz pomieszczenie \u2013",
  hint_room: "Sygna\u0142 wskazuje: {room} \u2013 przyjmij",
  coverage: "Pomieszczenia bez w\u0142asnego odbiornika \u2013 nauka i tak pozwoli je rozpozna\u0107:",
  devices_intro: "Kt\xF3re urz\u0105dzenia lokalizowa\u0107? Najlepiej to, co zawsze masz przy sobie \u2013 zegarek na nadgarstku jest idealny.",
  known_keys: "iPhone i Apple Watch z kluczem (z \u201EPrivate BLE Device\u201D w Home Assistant):",
  add: "Dodaj",
  added: "\u2713 dodano",
  remove: "Usu\u0144",
  person: "Osoba",
  none: "brak",
  irk_help: "Brakuje iPhone\u2019a lub Apple Watch? Potrzebuj\u0105 swojego klucza (IRK) jako \u201EPrivate BLE Device\u201D w Home Assistant \u2013 instrukcja pokazuje najprostsze sposoby.",
  manual: "Instrukcja",
  voice_hint: "Pytaj te\u017C g\u0142osem: \u201EGdzie jest m\xF3j iPhone?\u201D, \u201EGdzie jest Torsten?\u201D, \u201EKto jest w domu?\u201D, \u201EZadzwo\u0144 na m\xF3j iPhone\u201D.",
  look_hint: "W 3D osoby wida\u0107 jako posta\u0107; w menu \u2699 widoku: Osoby \u2192 posta\u0107, pinezka lub wy\u0142\u0105czone.",
  ring: "Zadzwo\u0144",
  ring_hint: "Aplikacja Home Assistant na tym telefonie \u2013 wtedy dzia\u0142a \u201EZadzwo\u0144 na m\xF3j iPhone\u201D.",
  near_title: "Szukaj urz\u0105dzenia w pobli\u017Cu",
  key_title: "Wklej klucz",
  key_name: "Nazwa (np. iPhone Torstena)",
  key_value: "Klucz (IRK, 32 znaki)",
  key_bad: "To nie jest prawid\u0142owy klucz (32 znaki hex lub Base64).",
  helper_title: "\u{1F511} Pomocnik klucza",
  helper_build: "Skonfiguruj pomocnika klucza",
  helper_found: "Znaleziono pomocnika klucza: {name}",
  helper_watch: "Dla Apple Watch",
  helper_phone: "Dla telefonu iPhone",
  helper_watch_steps: "Na zegarku: Ustawienia \u2192 Bluetooth \u2192 w sekcji \u201EUrz\u0105dzenia zdrowotne\u201D stuknij \u201ENeonPlan Key\u201D i sparuj.",
  helper_phone_steps: "Na telefonie: Ustawienia \u2192 Bluetooth \u2192 sparuj \u201ENeonPlan Key\u201D (pojawia si\u0119 jako klawiatura).",
  helper_key: "Odczytany klucz:",
  helper_wait: "Czekam na parowanie \u2026",
  helper_after: "Nast\u0119pnie usu\u0144 urz\u0105dzenie \u201ENeonPlan Key\u201D z ustawie\u0144 Bluetooth.",
  helper_next: "\u{1F504} Nast\u0119pne urz\u0105dzenie",
  helper_next_hint: "Dotknij przed ka\u017Cdym kolejnym urz\u0105dzeniem: pomocnik dostaje now\u0105 to\u017Csamo\u015B\u0107 Bluetooth, wi\u0119c wcze\u015Bniej sparowane urz\u0105dzenie ju\u017C si\u0119 nie wtr\u0105ca.",
  helper_name: "Nazwa tego urz\u0105dzenia",
  helper_irk: "Klucz (IRK) odczytany z urz\u0105dzenia, kt\xF3re w\u0142a\u015Bnie si\u0119 sparowa\u0142o:",
  helper_belongs: "Nale\u017Cy do: {name}",
  helper_add_as: "Dodaj jako \u201E{name}\u201D",
  helper_added: "\u2713 \u201E{name}\u201D jest teraz na li\u015Bcie powy\u017Cej.",
  pbd_rename: "Wskaz\xF3wka: zmie\u0144 nazw\u0119 w Home Assistant (Urz\u0105dzenia i us\u0142ugi \u2192 Private BLE Device), a tu pojawi si\u0119 nazwa.",
  carry: "Mam teraz przy sobie:",
  offline: "chwilowo niedost\u0119pny",
  pbd_summary: "Przechodzisz z Bermudy? Przejmij klucze z Home Assistant",
  worn: "noszone",
  worn_hint: "Noszone na ciele (zegarek, opaska): pokazuje, gdzie jest osoba \u2013 telefon mo\u017Ce gdzie\u015B le\u017Ce\u0107.",
  look_title: "Osoby w 3D",
  look_figure: "Posta\u0107",
  look_pin: "Pinezka",
  look_off: "Wy\u0142.",
  near_summary: "Dodaj telefon z Androidem lub brelok",
  android_label: "Telefon z Androidem (aplikacja HA)",
  paste_summary: "Wklej klucz, kt\xF3ry ju\u017C masz",
  helper_install: "Zainstaluj na ESP32",
  helper_pitch: "Dla iPhone\u2019a i Apple Watch: ESP32 za ok. 5 \u20AC w trzy minuty staje si\u0119 pomocnikiem kluczy \u2013 instalacja prosto z przegl\u0105darki, bez Maca. Potem sparuj tutaj.",
  near_intro: "Przy\u0142\xF3\u017C urz\u0105dzenie tu\u017C do odbiornika. Android: w\u0142\u0105cz \u201EBLE Transmitter\u201D w aplikacji Home Assistant. Breloki: naci\u015Bnij raz.",
  near_empty: "Jeszcze nic silnego w pobli\u017Cu \u2026",
  walk_intro: "Wejd\u017A do ka\u017Cdego pomieszczenia, dotknij go i chod\u017A powoli przez 90 sekund \u2013 tak\u017Ce po k\u0105tach. We\u017A ze sob\u0105 wszystkie urz\u0105dzenia.",
  learning: "Ucz\u0119 si\u0119: {room} \u2026 jeszcze {left} s",
  stop: "Anuluj",
  samples: "Pr\xF3bki: {n}",
  quality: "Sprawd\u017A trafno\u015B\u0107",
  quality_result: "Trafno\u015B\u0107: {p}",
  relearn_all: "Naucz wszystko od nowa",
  live_intro: "Tak NeonPlan widzi ci\u0119 teraz. Przejd\u017A si\u0119 i sprawd\u017A, czy si\u0119 zgadza.",
  enabled: "Lokalizacja w\u0142\u0105czona",
  admins_only: "Pokazuj osoby tylko adminom",
  not_heard: "brak sygna\u0142u",
  next: "Dalej",
  need_device: "Najpierw dodaj urz\u0105dzenie.",
  app_title: "Android z aplikacj\u0105 Home Assistant",
  app_none: "Telefon z Androidem? W aplikacji Home Assistant: Ustawienia \u2192 Companion app \u2192 Zarz\u0105dzaj czujnikami \u2192 w\u0142\u0105cz \u201EBLE Transmitter\u201D. Wtedy pojawi si\u0119 tu sam.",
  app_off: "Nadajnik jest wy\u0142\u0105czony \u2013 w\u0142\u0105cz go w aplikacji",
  app_power: "Za ma\u0142a moc nadawania \u2013 ustaw w aplikacji \u201EHigh\u201D",
  app_mode: "Ustaw w aplikacji tryb nadawania \u201ELow latency\u201D",
  helper_android: "Nie paruj tu telefon\xF3w ani tablet\xF3w z Androidem: nie wysy\u0142aj\u0105 tego klucza w tle. Dla Androida u\u017Cyj BLE Transmitter aplikacji Home Assistant (poni\u017Cej).",
  unheard: "\u26A0 brak sygna\u0142u",
  unheard_hint: "\u017Baden odbiornik nie s\u0142yszy teraz tego urz\u0105dzenia. Czy jest w\u0142\u0105czone i nadaje? Android: BLE Transmitter aplikacji Home Assistant.",
  fly: "Wlatuj do pomieszcze\u0144 przy \u201EGdzie jest \u2026?\u201D i \u201EKto jest w domu?\u201D",
  fly_hint: "Otwarte widoki NeonPlan wlatuj\u0105 do pomieszczenia z odpowiedzi, a przy \u201EKto jest w domu?\u201D po kolei do wszystkich. Dotkni\u0119cie zatrzymuje. Nie dla os\xF3b, gdy s\u0105 pokazywane tylko adminom."
};
var PT = {
  title: "Configurar localiza\xE7\xE3o",
  lab: "Lab",
  close: "Fechar",
  s_scanners: "1 \xB7 Recetores",
  s_devices: "2 \xB7 Dispositivos",
  s_walk: "3 \xB7 Aprendizagem",
  s_live: "4 \xB7 Ao vivo",
  no_bt: "O Home Assistant n\xE3o tem Bluetooth configurado. Basta um Shelly (Gen2/3: pesquisa Bluetooth passiva), proxies Bluetooth ESPHome ou um adaptador USB.",
  scanners_intro: "Estes s\xE3o todos os recetores Bluetooth que o Home Assistant conhece. Indique em que divis\xE3o est\xE1 cada um.",
  not_placed: "\u2013 escolher divis\xE3o \u2013",
  hint_room: "O sinal diz: {room} \u2013 usar",
  coverage: "Divis\xF5es sem recetor pr\xF3prio \u2013 a aprendizagem torna-as reconhec\xEDveis na mesma:",
  devices_intro: "Que dispositivos devem ser localizados? De prefer\xEAncia o que traz sempre consigo \u2013 o rel\xF3gio no pulso \xE9 ideal.",
  known_keys: "iPhone e Apple Watch com chave (de \u201CPrivate BLE Device\u201D no Home Assistant):",
  add: "Adicionar",
  added: "\u2713 adicionado",
  remove: "Remover",
  person: "Pessoa",
  none: "nenhuma",
  irk_help: "Falta o iPhone ou o Apple Watch? Precisam da sua chave (IRK) como \u201CPrivate BLE Device\u201D no Home Assistant \u2013 o manual mostra as formas mais simples.",
  manual: "Manual",
  voice_hint: "Pergunte tamb\xE9m por voz: \u201COnde est\xE1 o meu iPhone?\u201D, \u201COnde est\xE1 o Torsten?\u201D, \u201CQuem est\xE1 em casa?\u201D, \u201CFaz tocar o meu iPhone\u201D.",
  look_hint: "Em 3D as pessoas aparecem como figura; no menu \u2699 da vista: Pessoas \u2192 figura, pino ou desligado.",
  ring: "Fazer tocar",
  ring_hint: "A app Home Assistant neste telem\xF3vel \u2013 assim funciona \u201CFaz tocar o meu iPhone\u201D.",
  near_title: "Procurar dispositivo pr\xF3ximo",
  key_title: "Colar chave",
  key_name: "Nome (ex.: iPhone do Torsten)",
  key_value: "Chave (IRK, 32 caracteres)",
  key_bad: "Esta n\xE3o \xE9 uma chave v\xE1lida (32 caracteres hex ou Base64).",
  helper_title: "\u{1F511} Assistente de chave",
  helper_build: "Configurar o assistente de chave",
  helper_found: "Assistente de chave encontrado: {name}",
  helper_watch: "Para um Apple Watch",
  helper_phone: "Para um iPhone",
  helper_watch_steps: "No rel\xF3gio: Defini\xE7\xF5es \u2192 Bluetooth \u2192 em \xABDispositivos de sa\xFAde\xBB, toque em \xABNeonPlan Key\xBB e emparelhe.",
  helper_phone_steps: "No telem\xF3vel: Defini\xE7\xF5es \u2192 Bluetooth \u2192 emparelhe \xABNeonPlan Key\xBB (aparece como teclado).",
  helper_key: "Chave lida:",
  helper_wait: "A aguardar o emparelhamento \u2026",
  helper_after: "Depois, remova o dispositivo \xABNeonPlan Key\xBB das defini\xE7\xF5es de Bluetooth.",
  helper_next: "\u{1F504} Dispositivo seguinte",
  helper_next_hint: "Toque antes de cada novo dispositivo: o assistente recebe uma nova identidade Bluetooth e um dispositivo j\xE1 emparelhado deixa de se ligar.",
  helper_name: "Nome deste dispositivo",
  helper_irk: "Chave (IRK) lida do dispositivo que acabou de emparelhar:",
  helper_belongs: "Pertence a: {name}",
  helper_add_as: "Adicionar como \xAB{name}\xBB",
  helper_added: "\u2713 \xAB{name}\xBB est\xE1 agora na lista acima.",
  pbd_rename: "Dica: mude-lhe o nome no Home Assistant (Dispositivos e servi\xE7os \u2192 Private BLE Device) para o ver aqui.",
  carry: "Tenho comigo:",
  offline: "indispon\xEDvel de momento",
  pbd_summary: "Vem do Bermuda? Usar as chaves do Home Assistant",
  worn: "usado",
  worn_hint: "Usado no corpo (rel\xF3gio, pulseira): indica onde est\xE1 a pessoa \u2013 um telem\xF3vel pode estar pousado noutro s\xEDtio.",
  look_title: "Pessoas em 3D",
  look_figure: "Figura",
  look_pin: "Marcador",
  look_off: "N\xE3o",
  near_summary: "Adicionar um telem\xF3vel Android ou um porta-chaves",
  android_label: "Telem\xF3vel Android (app HA)",
  paste_summary: "Colar uma chave que j\xE1 tem",
  helper_install: "Instalar num ESP32",
  helper_pitch: "Para iPhone e Apple Watch: um ESP32 de cerca de 5 \u20AC torna-se o assistente de chaves em tr\xEAs minutos \u2013 instalado a partir do navegador, sem Mac. Depois emparelhe aqui.",
  near_intro: "Segure o dispositivo mesmo junto a um recetor. Android: ative \u201CBLE Transmitter\u201D na app Home Assistant. Porta-chaves: prima uma vez.",
  near_empty: "Ainda nada forte por perto \u2026",
  walk_intro: "Entre em cada divis\xE3o, toque nela e ande devagar durante 90 segundos \u2013 tamb\xE9m pelos cantos. Leve todos os dispositivos.",
  learning: "A aprender {room} \u2026 faltam {left} s",
  stop: "Cancelar",
  samples: "{n} amostras",
  quality: "Verificar precis\xE3o",
  quality_result: "Precis\xE3o: {p}",
  relearn_all: "Aprender tudo de novo",
  live_intro: "\xC9 assim que o NeonPlan o v\xEA agora. Ande um pouco e confirme se est\xE1 certo.",
  enabled: "Localiza\xE7\xE3o ligada",
  admins_only: "Mostrar pessoas s\xF3 a administradores",
  not_heard: "n\xE3o detetado",
  next: "Seguinte",
  need_device: "Adicione primeiro um dispositivo.",
  app_title: "Android com a app Home Assistant",
  app_none: "Telem\xF3vel Android? Na app Home Assistant: Defini\xE7\xF5es \u2192 Companion app \u2192 Gerir sensores \u2192 ativa \xABBLE Transmitter\xBB. Depois aparece aqui sozinho.",
  app_off: "O transmissor est\xE1 desligado \u2013 liga-o na app",
  app_power: "Pot\xEAncia de emiss\xE3o demasiado baixa \u2013 define \xABHigh\xBB na app",
  app_mode: "Define o modo de emiss\xE3o como \xABLow latency\xBB na app",
  helper_android: "N\xE3o emparelhes aqui telem\xF3veis ou tablets Android: n\xE3o enviam esta chave em segundo plano. Para Android usa o BLE Transmitter da app Home Assistant (abaixo).",
  unheard: "\u26A0 n\xE3o detetado",
  unheard_hint: "Nenhum recetor ouve este dispositivo agora. Est\xE1 ligado e a emitir? Android: o BLE Transmitter da app Home Assistant.",
  fly: "Voar para as divis\xF5es com \xABOnde est\xE1 \u2026?\xBB e \xABQuem est\xE1 em casa?\xBB",
  fly_hint: "As vistas NeonPlan abertas voam para a divis\xE3o da resposta e, com \xABQuem est\xE1 em casa?\xBB, para todas \xE0 vez. Um toque para. N\xE3o para pessoas enquanto s\xF3 s\xE3o mostradas a administradores."
};
var RO = {
  title: "Configureaz\u0103 localizarea",
  lab: "Lab",
  close: "\xCEnchide",
  s_scanners: "1 \xB7 Receptoare",
  s_devices: "2 \xB7 Dispozitive",
  s_walk: "3 \xB7 \xCEnv\u0103\u021Bare",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistant nu are Bluetooth configurat. Ajung Shelly (Gen2/3: scanare Bluetooth pasiv\u0103), proxy-uri Bluetooth ESPHome sau un adaptor USB.",
  scanners_intro: "Acestea sunt toate receptoarele Bluetooth cunoscute de Home Assistant. Spune pentru fiecare \xEEn ce camer\u0103 se afl\u0103.",
  not_placed: "\u2013 alege camera \u2013",
  hint_room: "Semnalul spune: {room} \u2013 preia",
  coverage: "Camere f\u0103r\u0103 receptor propriu \u2013 \xEEnv\u0103\u021Barea le face totu\u0219i recunoscibile:",
  devices_intro: "Ce dispozitive s\u0103 fie localizate? Ideal ce ai mereu la tine \u2013 ceasul de la \xEEncheietur\u0103 e perfect.",
  known_keys: "iPhone \u0219i Apple Watch cu cheie (din \u201EPrivate BLE Device\u201D \xEEn Home Assistant):",
  add: "Adaug\u0103",
  added: "\u2713 ad\u0103ugat",
  remove: "Elimin\u0103",
  person: "Persoan\u0103",
  none: "niciuna",
  irk_help: "Lipse\u0219te iPhone-ul sau Apple Watch-ul? Au nevoie de cheia lor (IRK) ca \u201EPrivate BLE Device\u201D \xEEn Home Assistant \u2013 ghidul arat\u0103 cele mai simple c\u0103i.",
  manual: "Ghid",
  voice_hint: "\xCEntreab\u0103 \u0219i vocal: \u201EUnde e iPhone-ul meu?\u201D, \u201EUnde e Torsten?\u201D, \u201ECine e acas\u0103?\u201D, \u201ESun\u0103-mi iPhone-ul\u201D.",
  look_hint: "\xCEn 3D persoanele apar ca figurin\u0103; \xEEn meniul \u2699 al vizualiz\u0103rii: Persoane \u2192 figurin\u0103, pin sau oprit.",
  ring: "Sun\u0103",
  ring_hint: "Aplica\u021Bia Home Assistant pe acest telefon \u2013 atunci merge \u201ESun\u0103-mi iPhone-ul\u201D.",
  near_title: "Caut\u0103 dispozitiv \xEEn apropiere",
  key_title: "Lipe\u0219te cheia",
  key_name: "Nume (de ex. iPhone-ul lui Torsten)",
  key_value: "Cheie (IRK, 32 de caractere)",
  key_bad: "Aceasta nu este o cheie valid\u0103 (32 de caractere hex sau Base64).",
  helper_title: "\u{1F511} Asistent pentru cheie",
  helper_build: "Configureaz\u0103 asistentul pentru cheie",
  helper_found: "Asistent pentru cheie g\u0103sit: {name}",
  helper_watch: "Pentru Apple Watch",
  helper_phone: "Pentru iPhone",
  helper_watch_steps: "Pe ceas: Configur\u0103ri \u2192 Bluetooth \u2192 la \u201EDispozitive de s\u0103n\u0103tate\u201D atinge \u201ENeonPlan Key\u201D \u0219i asociaz\u0103.",
  helper_phone_steps: "Pe telefon: Configur\u0103ri \u2192 Bluetooth \u2192 asociaz\u0103 \u201ENeonPlan Key\u201D (apare ca tastatur\u0103).",
  helper_key: "Cheie citit\u0103:",
  helper_wait: "Se a\u0219teapt\u0103 asocierea \u2026",
  helper_after: "Apoi elimin\u0103 dispozitivul \u201ENeonPlan Key\u201D din configur\u0103rile Bluetooth.",
  helper_next: "\u{1F504} Dispozitivul urm\u0103tor",
  helper_next_hint: "Atinge \xEEnainte de fiecare dispozitiv nou: ajutorul prime\u0219te o nou\u0103 identitate Bluetooth, iar un dispozitiv asociat \xEEnainte nu se mai conecteaz\u0103.",
  helper_name: "Numele acestui dispozitiv",
  helper_irk: "Cheia (IRK) citit\u0103 de la dispozitivul care tocmai s-a asociat:",
  helper_belongs: "Apar\u021Bine de: {name}",
  helper_add_as: "Adaug\u0103 ca \u201E{name}\u201D",
  helper_added: "\u2713 \u201E{name}\u201D este acum \xEEn lista de mai sus.",
  pbd_rename: "Sfat: redenume\u0219te-l \xEEn Home Assistant (Dispozitive \u0219i servicii \u2192 Private BLE Device) ca s\u0103-i vezi numele aici.",
  carry: "Am la mine acum:",
  offline: "indisponibil momentan",
  pbd_summary: "Treci de la Bermuda? Preia cheile din Home Assistant",
  worn: "purtat",
  worn_hint: "Purtat pe corp (ceas, br\u0103\u021Bar\u0103): arat\u0103 unde este persoana \u2013 un telefon poate sta oriunde.",
  look_title: "Persoane \xEEn 3D",
  look_figure: "Siluet\u0103",
  look_pin: "Reper",
  look_off: "Oprit",
  near_summary: "Adaug\u0103 un telefon Android sau un breloc",
  android_label: "Telefon Android (aplica\u021Bia HA)",
  paste_summary: "Lipe\u0219te o cheie pe care o ai deja",
  helper_install: "Instaleaz\u0103 pe un ESP32",
  helper_pitch: "Pentru iPhone \u0219i Apple Watch: un ESP32 de circa 5 \u20AC devine \xEEn trei minute ajutorul pentru chei \u2013 instalat direct din browser, f\u0103r\u0103 Mac. Apoi asociaz\u0103-l aici.",
  near_intro: "\u021Aine dispozitivul chiar l\xE2ng\u0103 un receptor. Android: activeaz\u0103 \u201EBLE Transmitter\u201D \xEEn aplica\u021Bia Home Assistant. Brelocuri: apas\u0103 o dat\u0103.",
  near_empty: "\xCEnc\u0103 nimic puternic \xEEn apropiere \u2026",
  walk_intro: "Intr\u0103 \xEEn fiecare camer\u0103, atinge-o \u0219i plimb\u0103-te \xEEncet 90 de secunde \u2013 \u0219i prin col\u021Buri. Ia toate dispozitivele cu tine.",
  learning: "\xCEnv\u0103\u021B {room} \u2026 \xEEnc\u0103 {left} s",
  stop: "Anuleaz\u0103",
  samples: "{n} probe",
  quality: "Verific\u0103 precizia",
  quality_result: "Precizie: {p}",
  relearn_all: "Re\xEEnva\u021B\u0103 tot",
  live_intro: "A\u0219a te vede NeonPlan acum. Plimb\u0103-te \u0219i verific\u0103 dac\u0103 e corect.",
  enabled: "Localizare pornit\u0103",
  admins_only: "Arat\u0103 persoanele doar adminilor",
  not_heard: "neauzit",
  next: "\xCEnainte",
  need_device: "Adaug\u0103 mai \xEEnt\xE2i un dispozitiv.",
  app_title: "Android cu aplica\u021Bia Home Assistant",
  app_none: "Telefon Android? \xCEn aplica\u021Bia Home Assistant: Set\u0103ri \u2192 Companion app \u2192 Gestioneaz\u0103 senzorii \u2192 porne\u0219te \u201EBLE Transmitter\u201D. Apoi apare aici singur.",
  app_off: "Emi\u021B\u0103torul este oprit \u2013 porne\u0219te-l \xEEn aplica\u021Bie",
  app_power: "Puterea de emisie e prea mic\u0103 \u2013 seteaz\u0103 \u201EHigh\u201D \xEEn aplica\u021Bie",
  app_mode: "Seteaz\u0103 modul de emisie la \u201ELow latency\u201D \xEEn aplica\u021Bie",
  helper_android: "Nu \xEEmperechea aici telefoane sau tablete Android: nu trimit aceast\u0103 cheie \xEEn fundal. Pentru Android folose\u0219te BLE Transmitter din aplica\u021Bia Home Assistant (mai jos).",
  unheard: "\u26A0 neauzit",
  unheard_hint: "Niciun receptor nu aude acum acest dispozitiv. Este pornit \u0219i emite? Android: BLE Transmitter din aplica\u021Bia Home Assistant.",
  fly: "Zbor \xEEn camere la \u201EUnde este \u2026?\u201D \u0219i \u201ECine e acas\u0103?\u201D",
  fly_hint: "Vederile NeonPlan deschise zboar\u0103 \xEEn camera din r\u0103spuns, iar la \u201ECine e acas\u0103?\u201D pe r\xE2nd \xEEn toate. O atingere opre\u0219te. Nu pentru persoane c\xE2t timp sunt ar\u0103tate doar administratorilor."
};
var SL = {
  title: "Nastavi lociranje",
  lab: "Lab",
  close: "Zapri",
  s_scanners: "1 \xB7 Sprejemniki",
  s_devices: "2 \xB7 Naprave",
  s_walk: "3 \xB7 U\u010Denje",
  s_live: "4 \xB7 V \u017Eivo",
  no_bt: "Home Assistant nima nastavljenega Bluetootha. Zadostujejo Shelly (Gen2/3: pasivno Bluetooth skeniranje), ESPHome Bluetooth proxyji ali USB-adapter.",
  scanners_intro: "To so vsi Bluetooth sprejemniki, ki jih Home Assistant pozna. Za vsakega povej, v kateri sobi stoji.",
  not_placed: "\u2013 izberi sobo \u2013",
  hint_room: "Signal pravi: {room} \u2013 prevzemi",
  coverage: "Sobe brez lastnega sprejemnika \u2013 u\u010Denje jih vseeno naredi prepoznavne:",
  devices_intro: "Katere naprave naj se locirajo? Najbolje to, kar ima\u0161 vedno pri sebi \u2013 ura na zapestju je idealna.",
  known_keys: "iPhone in Apple Watch s klju\u010Dem (iz \u201EPrivate BLE Device\u201C v Home Assistant):",
  add: "Dodaj",
  added: "\u2713 dodano",
  remove: "Odstrani",
  person: "Oseba",
  none: "nobena",
  irk_help: "Manjka iPhone ali Apple Watch? Potrebujeta svoj klju\u010D (IRK) kot \u201EPrivate BLE Device\u201C v Home Assistant \u2013 navodila poka\u017Eejo najpreprostej\u0161e poti.",
  manual: "Navodila",
  voice_hint: "Vpra\u0161aj tudi z glasom: \u201EKje je moj iPhone?\u201C, \u201EKje je Torsten?\u201C, \u201EKdo je doma?\u201C, \u201EPozvoni moj iPhone\u201C.",
  look_hint: "V 3D so osebe prikazane kot figura; v meniju \u2699 pogleda: Osebe \u2192 figura, \u017Eeblji\u010Dek ali izklopljeno.",
  ring: "Pozvoni",
  ring_hint: "Aplikacija Home Assistant na tem telefonu \u2013 potem deluje \u201EPozvoni moj iPhone\u201C.",
  near_title: "Poi\u0161\u010Di napravo v bli\u017Eini",
  key_title: "Prilepi klju\u010D",
  key_name: "Ime (npr. Torstenov iPhone)",
  key_value: "Klju\u010D (IRK, 32 znakov)",
  key_bad: "To ni veljaven klju\u010D (32 \u0161estnajsti\u0161kih znakov ali Base64).",
  helper_title: "\u{1F511} Pomo\u010Dnik za klju\u010D",
  helper_build: "Nastavi pomo\u010Dnika za klju\u010D",
  helper_found: "Najden pomo\u010Dnik za klju\u010D: {name}",
  helper_watch: "Za Apple Watch",
  helper_phone: "Za iPhone",
  helper_watch_steps: "Na uri: Nastavitve \u2192 Bluetooth \u2192 pod \xBBZdravstvene naprave\xAB tapnite \xBBNeonPlan Key\xAB in seznanite.",
  helper_phone_steps: "Na telefonu: Nastavitve \u2192 Bluetooth \u2192 seznanite \xBBNeonPlan Key\xAB (prika\u017Ee se kot tipkovnica).",
  helper_key: "Prebrani klju\u010D:",
  helper_wait: "\u010Cakam na seznanitev \u2026",
  helper_after: "Nato napravo \xBBNeonPlan Key\xAB znova odstranite iz nastavitev Bluetooth.",
  helper_next: "\u{1F504} Naslednja naprava",
  helper_next_hint: "Tapnite pred vsako novo napravo: pomo\u010Dnik dobi novo Bluetooth identiteto, zato se prej seznanjena naprava ne pove\u017Ee ve\u010D vmes.",
  helper_name: "Ime te naprave",
  helper_irk: "Klju\u010D (IRK), prebran z naprave, ki se je pravkar seznanila:",
  helper_belongs: "Pripada: {name}",
  helper_add_as: "Dodaj kot \xBB{name}\xAB",
  helper_added: "\u2713 \xBB{name}\xAB je zdaj na seznamu zgoraj.",
  pbd_rename: "Nasvet: preimenujte ga v Home Assistantu (Naprave in storitve \u2192 Private BLE Device), nato bo tukaj ime.",
  carry: "Trenutno imam pri sebi:",
  offline: "trenutno nedosegljiv",
  pbd_summary: "Prehajate z Bermude? Prevzemite klju\u010De iz Home Assistanta",
  worn: "no\u0161eno",
  worn_hint: "No\u0161eno na telesu (ura, zapestnica): pove, kje je oseba \u2013 telefon lahko le\u017Ei kjerkoli.",
  look_title: "Osebe v 3D",
  look_figure: "Figura",
  look_pin: "\u017Deblji\u010Dek",
  look_off: "Izklop",
  near_summary: "Dodaj telefon Android ali obesek za klju\u010De",
  android_label: "Telefon Android (aplikacija HA)",
  paste_summary: "Prilepi klju\u010D, ki ga \u017Ee ima\u0161",
  helper_install: "Namesti na ESP32",
  helper_pitch: "Za iPhone in Apple Watch: ESP32 za pribli\u017Eno 5 \u20AC v treh minutah postane pomo\u010Dnik za klju\u010De \u2013 name\u0161\u010Den kar iz brskalnika, brez Maca. Nato ga seznanite tukaj.",
  near_intro: "Dr\u017Ei napravo tik ob sprejemniku. Android: v aplikaciji Home Assistant vklopi \u201EBLE Transmitter\u201C. Obeski za klju\u010De: pritisni enkrat.",
  near_empty: "V bli\u017Eini \u0161e ni\u010D mo\u010Dnega \u2026",
  walk_intro: "Pojdi v vsako sobo, tapni jo in 90 sekund po\u010Dasi hodi naokrog \u2013 tudi v kote. Vzemi s sabo vse naprave.",
  learning: "U\u010Dim se {room} \u2026 \u0161e {left} s",
  stop: "Prekli\u010Di",
  samples: "Vzorcev: {n}",
  quality: "Preveri natan\u010Dnost",
  quality_result: "Natan\u010Dnost: {p}",
  relearn_all: "Znova nau\u010Di vse",
  live_intro: "Tako te NeonPlan vidi zdaj. Sprehodi se in preveri, ali dr\u017Ei.",
  enabled: "Lociranje vklopljeno",
  admins_only: "Osebe prika\u017Ei samo skrbnikom",
  not_heard: "ni sli\u0161ano",
  next: "Naprej",
  need_device: "Najprej dodaj napravo.",
  app_title: "Android z aplikacijo Home Assistant",
  app_none: "Telefon Android? V aplikaciji Home Assistant: Nastavitve \u2192 Companion app \u2192 Upravljanje senzorjev \u2192 vklopi \xBBBLE Transmitter\xAB. Potem se tu pojavi sam.",
  app_off: "Oddajnik je izklopljen \u2013 vklopi ga v aplikaciji",
  app_power: "Oddajna mo\u010D je prenizka \u2013 v aplikaciji nastavi \xBBHigh\xAB",
  app_mode: "V aplikaciji nastavi na\u010Din oddajanja na \xBBLow latency\xAB",
  helper_android: "Telefonov in tablic z Androidom tu ne seznanjaj: tega klju\u010Da v ozadju ne po\u0161iljajo. Za Android uporabi BLE Transmitter aplikacije Home Assistant (spodaj).",
  unheard: "\u26A0 ni sli\u0161ano",
  unheard_hint: "Trenutno te naprave ne sli\u0161i noben sprejemnik. Je vklopljena in oddaja? Android: BLE Transmitter aplikacije Home Assistant.",
  fly: "Pri \xBBKje je \u2026?\xAB in \xBBKdo je doma?\xAB poleti v prostore",
  fly_hint: "Odprti pogledi NeonPlan poletijo v prostor iz odgovora, pri \xBBKdo je doma?\xAB po vrsti v vse. Dotik ustavi. Ne za osebe, dokler so prikazane samo skrbnikom."
};
var SV = {
  title: "St\xE4ll in positionering",
  lab: "Labb",
  close: "St\xE4ng",
  s_scanners: "1 \xB7 Mottagare",
  s_devices: "2 \xB7 Enheter",
  s_walk: "3 \xB7 Inl\xE4rning",
  s_live: "4 \xB7 Live",
  no_bt: "Home Assistant har ingen Bluetooth konfigurerad. Shelly (Gen2/3: passiv Bluetooth-skanning), ESPHome Bluetooth-proxyer eller en USB-adapter r\xE4cker.",
  scanners_intro: "Det h\xE4r \xE4r alla Bluetooth-mottagare som Home Assistant k\xE4nner till. Ange f\xF6r varje vilket rum den st\xE5r i.",
  not_placed: "\u2013 v\xE4lj rum \u2013",
  hint_room: "Signalen s\xE4ger: {room} \u2013 anv\xE4nd",
  coverage: "Rum utan egen mottagare \u2013 inl\xE4rningen g\xF6r dem igenk\xE4nnbara \xE4nd\xE5:",
  devices_intro: "Vilka enheter ska positioneras? Helst det du alltid har med dig \u2013 klockan p\xE5 handleden \xE4r perfekt.",
  known_keys: "iPhone och Apple Watch med nyckel (fr\xE5n \u201DPrivate BLE Device\u201D i Home Assistant):",
  add: "L\xE4gg till",
  added: "\u2713 tillagd",
  remove: "Ta bort",
  person: "Person",
  none: "ingen",
  irk_help: "Saknas iPhone eller Apple Watch? De beh\xF6ver sin nyckel (IRK) som \u201DPrivate BLE Device\u201D i Home Assistant \u2013 guiden visar de enklaste s\xE4tten.",
  manual: "Guide",
  voice_hint: "Fr\xE5ga ocks\xE5 med r\xF6sten: \u201DVar \xE4r min iPhone?\u201D, \u201DVar \xE4r Torsten?\u201D, \u201DVem \xE4r hemma?\u201D, \u201DRing min iPhone\u201D.",
  look_hint: "I 3D visas personer som figur; i vyns \u2699-meny: Personer \u2192 figur, n\xE5l eller av.",
  ring: "Ring",
  ring_hint: "Home Assistant-appen p\xE5 den h\xE4r telefonen \u2013 d\xE5 fungerar \u201DRing min iPhone\u201D.",
  near_title: "Hitta enhet i n\xE4rheten",
  key_title: "Klistra in nyckel",
  key_name: "Namn (t.ex. Torstens iPhone)",
  key_value: "Nyckel (IRK, 32 tecken)",
  key_bad: "Det \xE4r ingen giltig nyckel (32 hex-tecken eller Base64).",
  helper_title: "\u{1F511} Nyckelhj\xE4lpare",
  helper_build: "Konfigurera nyckelhj\xE4lparen",
  helper_found: "Nyckelhj\xE4lpare hittad: {name}",
  helper_watch: "F\xF6r Apple Watch",
  helper_phone: "F\xF6r iPhone",
  helper_watch_steps: "P\xE5 klockan: Inst\xE4llningar \u2192 Bluetooth \u2192 under \u201DH\xE4lsoenheter\u201D trycker du p\xE5 \u201DNeonPlan Key\u201D och parkopplar.",
  helper_phone_steps: "P\xE5 telefonen: Inst\xE4llningar \u2192 Bluetooth \u2192 parkoppla \u201DNeonPlan Key\u201D (visas som tangentbord).",
  helper_key: "Avl\xE4st nyckel:",
  helper_wait: "V\xE4ntar p\xE5 parkoppling \u2026",
  helper_after: "Ta sedan bort enheten \u201DNeonPlan Key\u201D fr\xE5n Bluetooth-inst\xE4llningarna igen.",
  helper_next: "\u{1F504} N\xE4sta enhet",
  helper_next_hint: "Tryck f\xF6re varje ny enhet: hj\xE4lparen f\xE5r en ny Bluetooth-identitet, s\xE5 att en tidigare parkopplad enhet inte ansluter emellan.",
  helper_name: "Namn p\xE5 den h\xE4r enheten",
  helper_irk: "Nyckel (IRK) l\xE4st fr\xE5n enheten som just parkopplades:",
  helper_belongs: "H\xF6r till: {name}",
  helper_add_as: "L\xE4gg till som \u201D{name}\u201D",
  helper_added: "\u2713 \u201D{name}\u201D finns nu i listan ovan.",
  pbd_rename: "Tips: byt namn i Home Assistant (Enheter och tj\xE4nster \u2192 Private BLE Device) s\xE5 syns namnet h\xE4r.",
  carry: "Jag har med mig:",
  offline: "inte n\xE5bar just nu",
  pbd_summary: "Byter du fr\xE5n Bermuda? H\xE4mta nycklar fr\xE5n Home Assistant",
  worn: "buret",
  worn_hint: "B\xE4rs p\xE5 kroppen (klocka, band): visar var personen \xE4r \u2013 en telefon kan ligga var som helst.",
  look_title: "Personer i 3D",
  look_figure: "Figur",
  look_pin: "N\xE5l",
  look_off: "Av",
  near_summary: "L\xE4gg till Android-telefon eller nyckelbricka",
  android_label: "Android-telefon (HA-appen)",
  paste_summary: "Klistra in en nyckel du redan har",
  helper_install: "Installera p\xE5 en ESP32",
  helper_pitch: "F\xF6r iPhone och Apple Watch: En ESP32 f\xF6r cirka 5 \u20AC blir nyckelhj\xE4lpare p\xE5 tre minuter \u2013 installerad direkt fr\xE5n webbl\xE4saren, utan Mac. Parkoppla den sedan h\xE4r.",
  near_intro: "H\xE5ll enheten alldeles intill en mottagare. Android: sl\xE5 p\xE5 \u201DBLE Transmitter\u201D i Home Assistant-appen. Nyckelbrickor: tryck en g\xE5ng.",
  near_empty: "Inget starkt i n\xE4rheten \xE4n \u2026",
  walk_intro: "G\xE5 in i varje rum, tryck p\xE5 det och g\xE5 l\xE5ngsamt runt i 90 sekunder \u2013 \xE4ven ut i h\xF6rnen. Ta med alla enheter.",
  learning: "L\xE4r in {room} \u2026 {left} s kvar",
  stop: "Avbryt",
  samples: "{n} prover",
  quality: "Kontrollera tr\xE4ffs\xE4kerhet",
  quality_result: "Tr\xE4ffs\xE4kerhet: {p}",
  relearn_all: "L\xE4r in allt p\xE5 nytt",
  live_intro: "S\xE5 h\xE4r ser NeonPlan dig just nu. G\xE5 runt och kolla om det st\xE4mmer.",
  enabled: "Positionering p\xE5",
  admins_only: "Visa personer bara f\xF6r administrat\xF6rer",
  not_heard: "inte h\xF6rd",
  next: "N\xE4sta",
  need_device: "L\xE4gg till en enhet f\xF6rst.",
  app_title: "Android med Home Assistant-appen",
  app_none: "Android-telefon? I Home Assistant-appen: Inst\xE4llningar \u2192 Companion app \u2192 Hantera sensorer \u2192 sl\xE5 p\xE5 \u201DBLE Transmitter\u201D. D\xE5 dyker den upp h\xE4r av sig sj\xE4lv.",
  app_off: "S\xE4ndaren \xE4r av \u2013 sl\xE5 p\xE5 den i appen",
  app_power: "S\xE4ndeffekten \xE4r f\xF6r l\xE5g \u2013 st\xE4ll in \u201DHigh\u201D i appen",
  app_mode: "St\xE4ll in s\xE4ndl\xE4get \u201DLow latency\u201D i appen",
  helper_android: "Para inte Android-telefoner eller -surfplattor h\xE4r: de skickar inte den h\xE4r nyckeln i bakgrunden. Anv\xE4nd Home Assistant-appens BLE Transmitter f\xF6r Android (nedan).",
  unheard: "\u26A0 inte h\xF6rd",
  unheard_hint: "Ingen mottagare h\xF6r enheten just nu. \xC4r den p\xE5 och s\xE4nder? Android: Home Assistant-appens BLE Transmitter.",
  fly: "Flyg in i rummen vid \u201DVar \xE4r \u2026?\u201D och \u201DVem \xE4r hemma?\u201D",
  fly_hint: "De \xF6ppna NeonPlan-vyerna flyger in i rummet i svaret, vid \u201DVem \xE4r hemma?\u201D in i alla rum i tur och ordning. Ett tryck stoppar. Inte f\xF6r personer medan de bara visas f\xF6r administrat\xF6rer."
};
var ZH = {
  title: "\u8BBE\u7F6E\u5B9A\u4F4D",
  lab: "\u5B9E\u9A8C",
  close: "\u5173\u95ED",
  s_scanners: "1 \xB7 \u63A5\u6536\u5668",
  s_devices: "2 \xB7 \u8BBE\u5907",
  s_walk: "3 \xB7 \u5B66\u4E60",
  s_live: "4 \xB7 \u5B9E\u65F6",
  no_bt: "Home Assistant \u5C1A\u672A\u8BBE\u7F6E\u84DD\u7259\u3002Shelly\uFF08Gen2/3\uFF1A\u88AB\u52A8\u84DD\u7259\u626B\u63CF\uFF09\u3001ESPHome \u84DD\u7259\u4EE3\u7406\u6216 USB \u9002\u914D\u5668\u5373\u53EF\u3002",
  scanners_intro: "\u8FD9\u4E9B\u662F Home Assistant \u5DF2\u77E5\u7684\u6240\u6709\u84DD\u7259\u63A5\u6536\u5668\u3002\u8BF7\u4E3A\u6BCF\u4E2A\u63A5\u6536\u5668\u9009\u62E9\u5B83\u6240\u5728\u7684\u623F\u95F4\u3002",
  not_placed: "\u2013 \u9009\u62E9\u623F\u95F4 \u2013",
  hint_room: "\u4FE1\u53F7\u663E\u793A\uFF1A{room} \u2013 \u91C7\u7528",
  coverage: "\u6CA1\u6709\u81EA\u5DF1\u63A5\u6536\u5668\u7684\u623F\u95F4 \u2013 \u901A\u8FC7\u5B66\u4E60\u540C\u6837\u53EF\u4EE5\u8BC6\u522B\uFF1A",
  devices_intro: "\u8981\u5B9A\u4F4D\u54EA\u4E9B\u8BBE\u5907\uFF1F\u6700\u597D\u662F\u4F60\u968F\u8EAB\u643A\u5E26\u7684 \u2013 \u6234\u5728\u624B\u8155\u4E0A\u7684\u624B\u8868\u6700\u7406\u60F3\u3002",
  known_keys: "\u5E26\u5BC6\u94A5\u7684 iPhone \u548C Apple Watch\uFF08\u6765\u81EA Home Assistant \u4E2D\u7684\u201CPrivate BLE Device\u201D\uFF09\uFF1A",
  add: "\u6DFB\u52A0",
  added: "\u2713 \u5DF2\u6DFB\u52A0",
  remove: "\u79FB\u9664",
  person: "\u4EBA\u5458",
  none: "\u65E0",
  irk_help: "\u7F3A\u5C11 iPhone \u6216 Apple Watch\uFF1F\u5B83\u4EEC\u9700\u8981\u5728 Home Assistant \u4E2D\u4EE5\u201CPrivate BLE Device\u201D\u5F62\u5F0F\u63D0\u4F9B\u5BC6\u94A5\uFF08IRK\uFF09\u2013 \u8BF4\u660E\u4E2D\u4ECB\u7ECD\u4E86\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u3002",
  manual: "\u8BF4\u660E",
  voice_hint: "\u4E5F\u53EF\u4EE5\u8BED\u97F3\u63D0\u95EE\uFF1A\u201C\u6211\u7684 iPhone \u5728\u54EA\uFF1F\u201D\u3001\u201CTorsten \u5728\u54EA\uFF1F\u201D\u3001\u201C\u8C01\u5728\u5BB6\uFF1F\u201D\u3001\u201C\u8BA9\u6211\u7684 iPhone \u54CD\u94C3\u201D\u3002",
  look_hint: "\u5728 3D \u4E2D\u4EBA\u5458\u663E\u793A\u4E3A\u4EBA\u7269\u6A21\u578B\uFF1B\u5728\u89C6\u56FE\u7684 \u2699 \u83DC\u5355\u4E2D\uFF1A\u4EBA\u5458 \u2192 \u4EBA\u7269\u3001\u56FE\u9489\u6216\u5173\u95ED\u3002",
  ring: "\u54CD\u94C3",
  ring_hint: "\u6B64\u624B\u673A\u4E0A\u7684 Home Assistant \u5E94\u7528 \u2013 \u8FD9\u6837\u201C\u8BA9\u6211\u7684 iPhone \u54CD\u94C3\u201D\u5C31\u80FD\u7528\u4E86\u3002",
  near_title: "\u67E5\u627E\u9644\u8FD1\u7684\u8BBE\u5907",
  key_title: "\u7C98\u8D34\u5BC6\u94A5",
  key_name: "\u540D\u79F0\uFF08\u4F8B\u5982 Torsten \u7684 iPhone\uFF09",
  key_value: "\u5BC6\u94A5\uFF08IRK\uFF0C32 \u4E2A\u5B57\u7B26\uFF09",
  key_bad: "\u8FD9\u4E0D\u662F\u6709\u6548\u7684\u5BC6\u94A5\uFF0832 \u4E2A\u5341\u516D\u8FDB\u5236\u5B57\u7B26\u6216 Base64\uFF09\u3002",
  helper_title: "\u{1F511} \u5BC6\u94A5\u52A9\u624B",
  helper_build: "\u8BBE\u7F6E\u5BC6\u94A5\u52A9\u624B",
  helper_found: "\u5DF2\u627E\u5230\u5BC6\u94A5\u52A9\u624B\uFF1A{name}",
  helper_watch: "\u7528\u4E8E Apple Watch",
  helper_phone: "\u7528\u4E8E iPhone",
  helper_watch_steps: "\u5728\u624B\u8868\u4E0A\uFF1A\u8BBE\u7F6E \u2192 Bluetooth \u2192 \u5728\u201C\u5065\u5EB7\u8BBE\u5907\u201D\u4E0B\u8F7B\u70B9\u201CNeonPlan Key\u201D\u5E76\u914D\u5BF9\u3002",
  helper_phone_steps: "\u5728\u624B\u673A\u4E0A\uFF1A\u8BBE\u7F6E \u2192 Bluetooth \u2192 \u914D\u5BF9\u201CNeonPlan Key\u201D\uFF08\u663E\u793A\u4E3A\u952E\u76D8\uFF09\u3002",
  helper_key: "\u8BFB\u53D6\u5230\u7684\u5BC6\u94A5\uFF1A",
  helper_wait: "\u6B63\u5728\u7B49\u5F85\u914D\u5BF9 \u2026",
  helper_after: "\u4E4B\u540E\u8BF7\u5728 Bluetooth \u8BBE\u7F6E\u4E2D\u79FB\u9664\u8BBE\u5907\u201CNeonPlan Key\u201D\u3002",
  helper_next: "\u{1F504} \u4E0B\u4E00\u4E2A\u8BBE\u5907",
  helper_next_hint: "\u6BCF\u6DFB\u52A0\u4E00\u53F0\u65B0\u8BBE\u5907\u524D\u70B9\u4E00\u4E0B\uFF1A\u52A9\u624B\u4F1A\u6362\u4E00\u4E2A\u65B0\u7684\u84DD\u7259\u8EAB\u4EFD\uFF0C\u4E4B\u524D\u914D\u5BF9\u8FC7\u7684\u8BBE\u5907\u5C31\u4E0D\u4F1A\u518D\u62A2\u5148\u8FDE\u63A5\u3002",
  helper_name: "\u6B64\u8BBE\u5907\u7684\u540D\u79F0",
  helper_irk: "\u521A\u521A\u914D\u5BF9\u7684\u8BBE\u5907\u7684\u5BC6\u94A5\uFF08IRK\uFF09\uFF1A",
  helper_belongs: "\u5C5E\u4E8E\uFF1A{name}",
  helper_add_as: "\u6DFB\u52A0\u4E3A\u201C{name}\u201D",
  helper_added: "\u2713 \u201C{name}\u201D\u5DF2\u5728\u4E0A\u65B9\u5217\u8868\u4E2D\u3002",
  pbd_rename: "\u63D0\u793A\uFF1A\u5728 Home Assistant \u4E2D\u91CD\u547D\u540D\uFF08\u8BBE\u5907\u4E0E\u670D\u52A1 \u2192 Private BLE Device\uFF09\uFF0C\u8FD9\u91CC\u5C31\u4F1A\u663E\u793A\u540D\u79F0\u3002",
  carry: "\u6211\u73B0\u5728\u968F\u8EAB\u5E26\u7740\uFF1A",
  offline: "\u6682\u65F6\u65E0\u6CD5\u8FDE\u63A5",
  pbd_summary: "\u4ECE Bermuda \u8FC1\u79FB\uFF1F\u4ECE Home Assistant \u5BFC\u5165\u5BC6\u94A5",
  worn: "\u968F\u8EAB\u4F69\u6234",
  worn_hint: "\u968F\u8EAB\u4F69\u6234\uFF08\u624B\u8868\u3001\u624B\u73AF\uFF09\uFF1A\u51B3\u5B9A\u4EBA\u5728\u54EA\u91CC\u2014\u2014\u624B\u673A\u53EF\u80FD\u653E\u5728\u522B\u5904\u3002",
  look_title: "3D \u4E2D\u7684\u4EBA\u5458",
  look_figure: "\u4EBA\u5F62",
  look_pin: "\u56FE\u9489",
  look_off: "\u5173",
  near_summary: "\u6DFB\u52A0\u5B89\u5353\u624B\u673A\u6216\u94A5\u5319\u6263",
  android_label: "\u5B89\u5353\u624B\u673A\uFF08HA \u5E94\u7528\uFF09",
  paste_summary: "\u7C98\u8D34\u5DF2\u6709\u7684\u5BC6\u94A5",
  helper_install: "\u5B89\u88C5\u5230 ESP32",
  helper_pitch: "\u9002\u7528\u4E8E iPhone \u548C Apple Watch\uFF1A\u4E00\u5757\u7EA6 5 \u6B27\u5143\u7684 ESP32 \u4E09\u5206\u949F\u5373\u53EF\u53D8\u6210\u5BC6\u94A5\u52A9\u624B\u2014\u2014\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u5B89\u88C5\uFF0C\u65E0\u9700 Mac\u3002\u7136\u540E\u5728\u8FD9\u91CC\u914D\u5BF9\u3002",
  near_intro: "\u628A\u8BBE\u5907\u7D27\u8D34\u63A5\u6536\u5668\u3002Android\uFF1A\u5728 Home Assistant \u5E94\u7528\u4E2D\u6253\u5F00\u201CBLE Transmitter\u201D\u3002\u94A5\u5319\u6263\uFF1A\u6309\u4E00\u4E0B\u3002",
  near_empty: "\u9644\u8FD1\u6682\u65E0\u5F3A\u4FE1\u53F7 \u2026",
  walk_intro: "\u8FDB\u5165\u6BCF\u4E2A\u623F\u95F4\uFF0C\u70B9\u51FB\u5B83\uFF0C\u7136\u540E\u6162\u6162\u8D70\u52A8 90 \u79D2 \u2013 \u5305\u62EC\u89D2\u843D\u3002\u5E26\u4E0A\u6240\u6709\u8BBE\u5907\u3002",
  learning: "\u6B63\u5728\u5B66\u4E60 {room} \u2026 \u8FD8\u5269 {left} \u79D2",
  stop: "\u53D6\u6D88",
  samples: "{n} \u4E2A\u6837\u672C",
  quality: "\u68C0\u67E5\u51C6\u786E\u7387",
  quality_result: "\u51C6\u786E\u7387\uFF1A{p}",
  relearn_all: "\u5168\u90E8\u91CD\u65B0\u5B66\u4E60",
  live_intro: "\u8FD9\u662F NeonPlan \u6B64\u523B\u770B\u5230\u7684\u4F60\u3002\u8D70\u52A8\u4E00\u4E0B\uFF0C\u770B\u770B\u662F\u5426\u51C6\u786E\u3002",
  enabled: "\u5B9A\u4F4D\u5DF2\u5F00\u542F",
  admins_only: "\u4EC5\u5411\u7BA1\u7406\u5458\u663E\u793A\u4EBA\u5458",
  not_heard: "\u672A\u68C0\u6D4B\u5230",
  next: "\u4E0B\u4E00\u6B65",
  need_device: "\u8BF7\u5148\u6DFB\u52A0\u8BBE\u5907\u3002",
  app_title: "\u4F7F\u7528 Home Assistant \u5E94\u7528\u7684\u5B89\u5353\u8BBE\u5907",
  app_none: "\u5B89\u5353\u624B\u673A\uFF1F\u5728 Home Assistant \u5E94\u7528\u4E2D\uFF1A\u8BBE\u7F6E \u2192 Companion app \u2192 \u7BA1\u7406\u4F20\u611F\u5668 \u2192 \u6253\u5F00\u201CBLE Transmitter\u201D\u3002\u4E4B\u540E\u5B83\u4F1A\u81EA\u52A8\u51FA\u73B0\u5728\u8FD9\u91CC\u3002",
  app_off: "\u53D1\u5C04\u5668\u5DF2\u5173\u95ED\u2014\u2014\u8BF7\u5728\u5E94\u7528\u4E2D\u6253\u5F00",
  app_power: "\u53D1\u5C04\u529F\u7387\u592A\u4F4E\u2014\u2014\u8BF7\u5728\u5E94\u7528\u4E2D\u8BBE\u4E3A\u201CHigh\u201D",
  app_mode: "\u8BF7\u5728\u5E94\u7528\u4E2D\u628A\u5E7F\u64AD\u6A21\u5F0F\u8BBE\u4E3A\u201CLow latency\u201D",
  helper_android: "\u4E0D\u8981\u5728\u8FD9\u91CC\u914D\u5BF9\u5B89\u5353\u624B\u673A\u6216\u5E73\u677F\uFF1A\u5B83\u4EEC\u4E0D\u4F1A\u5728\u540E\u53F0\u53D1\u9001\u8FD9\u4E2A\u5BC6\u94A5\u3002\u5B89\u5353\u8BF7\u4F7F\u7528 Home Assistant \u5E94\u7528\u7684 BLE Transmitter\uFF08\u89C1\u4E0B\u65B9\uFF09\u3002",
  unheard: "\u26A0 \u672A\u68C0\u6D4B\u5230",
  unheard_hint: "\u76EE\u524D\u6CA1\u6709\u63A5\u6536\u5668\u80FD\u542C\u5230\u8FD9\u4E2A\u8BBE\u5907\u3002\u5B83\u662F\u5426\u5F00\u7740\u5E76\u5728\u53D1\u9001\uFF1F\u5B89\u5353\uFF1AHome Assistant \u5E94\u7528\u7684 BLE Transmitter\u3002",
  fly: "\u95EE\u201C\u2026\u5728\u54EA\u91CC\uFF1F\u201D\u548C\u201C\u8C01\u5728\u5BB6\uFF1F\u201D\u65F6\u98DE\u8FDB\u623F\u95F4",
  fly_hint: "\u6253\u5F00\u7684 NeonPlan \u89C6\u56FE\u4F1A\u98DE\u8FDB\u7B54\u6848\u6240\u5728\u7684\u623F\u95F4\uFF1B\u95EE\u201C\u8C01\u5728\u5BB6\uFF1F\u201D\u65F6\u4F9D\u6B21\u98DE\u8FC7\u6240\u6709\u623F\u95F4\u3002\u8F7B\u70B9\u5373\u53EF\u505C\u6B62\u3002\u82E5\u4EBA\u5458\u4EC5\u5BF9\u7BA1\u7406\u5458\u663E\u793A\uFF0C\u5219\u4E0D\u4F1A\u98DE\u5411\u4EBA\u5458\u3002"
};
function irkHex(raw) {
  const text = raw.trim().replace(/^irk:/i, "");
  const hex = text.replace(/[\s:-]/g, "");
  if (/^[0-9a-f]{32}$/i.test(hex)) return hex.toLowerCase();
  try {
    const bytes = atob(text.replace(/\s/g, ""));
    if (bytes.length === 16) return [...bytes].map((c4) => c4.charCodeAt(0).toString(16).padStart(2, "0")).join("");
  } catch {
  }
  return null;
}
var BEACON_ID = /^([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})_(\d{1,5})_(\d{1,5})$/i;
function appTransmitters(hass) {
  const out = [];
  const hex4 = (n4) => n4.toString(16).padStart(4, "0");
  for (const [entity, st] of Object.entries(hass.states)) {
    if (!entity.startsWith("sensor.")) continue;
    const a3 = st.attributes ?? {};
    if (!("Transmitting power" in a3)) continue;
    const m2 = BEACON_ID.exec(String(a3.id ?? ""));
    if (!m2) continue;
    const major = Number(m2[6]);
    const minor = Number(m2[7]);
    if (major > 65535 || minor > 65535) continue;
    const deviceId = hass.entities?.[entity]?.device_id ?? null;
    const device = deviceId ? hass.devices?.[deviceId] : void 0;
    const fallback = String(a3.friendly_name ?? entity).replace(/\s*BLE[\s_-]*Transmitter\s*$/i, "");
    const person = deviceId && Object.entries(hass.states).find(
      ([id, p3]) => id.startsWith("person.") && (p3.attributes?.device_trackers ?? []).some((tr) => hass.entities?.[tr]?.device_id === deviceId)
    )?.[0] || null;
    out.push({
      entity,
      name: device?.name_by_user || device?.name || fallback,
      key: (m2.slice(1, 6).join("") + hex4(major) + hex4(minor)).toLowerCase(),
      state: String(st.state),
      power: String(a3["Transmitting power"] ?? ""),
      mode: String(a3["Advertise mode"] ?? ""),
      person
    });
  }
  return out.sort((x2, y3) => x2.name.localeCompare(y3.name));
}
var TEXTS = { de: DE, en: EN, cs: CS, da: DA, es: ES, fi: FI, fr: FR, hu: HU, it: IT, nb: NB, no: NB, nl: NL, nn: NN, pl: PL, pt: PT, ro: RO, sl: SL, sv: SV, zh: ZH };
var LocateSetup = class extends i4 {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    _step: { state: true },
    _cfg: { state: true },
    _near: { state: true },
    _live: { state: true },
    _quality: { state: true },
    _error: { state: true }
  };
  constructor() {
    super();
    this._step = "scanners";
    this._cfg = null;
    this._near = [];
    this._live = null;
    this._quality = null;
    this._error = "";
  }
  timer = 0;
  /** Where the current Home Assistant state comes from (the panel's live hass): new devices and states show at once. */
  hassSource = null;
  /** Writes how people show in 3D into the plan (the editor's setter; null when opened elsewhere). */
  setLook = null;
  unsub = null;
  get t() {
    return TEXTS[(this.hass?.language ?? "en").split("-")[0].toLowerCase()] ?? EN;
  }
  /** The voice sentences exist in German and English only. */
  get voiceLanguage() {
    return /^(de|en)/.test(this.hass?.language ?? "en");
  }
  tr(text, vars) {
    return text.replace(/\{(\w+)\}/g, (_m, k2) => String(vars[k2] ?? ""));
  }
  get rooms() {
    return locateRooms(this.building).map((r4) => r4.name || !r4.area_id ? r4 : { ...r4, name: this.hass.areas?.[r4.area_id]?.name ?? r4.area_id });
  }
  connectedCallback() {
    super.connectedCallback();
    this.load().catch((e4) => this._error = `load: ${e4?.stack ?? String(e4)}`);
    this.timer = window.setInterval(() => void this.tick(), 1e3);
    void this.hass.connection.subscribeMessage((live) => this._live = live, { type: "neonplan3d/locate/subscribe" }).then((u3) => this.unsub = u3).catch(() => void 0);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearInterval(this.timer);
    this.unsub?.();
  }
  async call(msg) {
    try {
      this._error = "";
      return await this.hass.callWS(msg);
    } catch (e4) {
      this._error = e4.message ?? String(e4);
      return null;
    }
  }
  async load() {
    const cfg = await this.call({ type: "neonplan3d/locate/config" });
    if (!cfg) return;
    const rooms = { ...cfg.scanner_rooms };
    let guessed = false;
    for (const s4 of cfg.scanners) {
      if (rooms[s4.source]) continue;
      const guess = this.guessRoom(s4) ?? cfg.scanner_hints?.[s4.source] ?? null;
      if (guess) {
        rooms[s4.source] = guess;
        guessed = true;
      }
    }
    this._cfg = { ...cfg, scanner_rooms: rooms };
    if (guessed) await this.save({ scanner_rooms: rooms });
  }
  /**
   * The room a scanner most likely stands in: a pin or a piece of furniture of its device in the plan (a Shelly's
   * switch, the washing machine with the plug's power sensor), its Home Assistant area, or a room named in its name
   * ("PC Büro Steckdose", "bluetooth-proxy-kueche"). After the calibration walk the signals tell as well (backend).
   */
  guessRoom(s4) {
    const ofDevice = (entity) => typeof entity === "string" && !!s4.device_id && this.hass.entities?.[entity]?.device_id === s4.device_id;
    if (s4.device_id) {
      for (const f3 of this.building.floors) {
        for (const p3 of f3.placements) {
          const room = ofDevice(p3.entity_id) ? roomAt(this.building, f3.id, p3.x, p3.z) : null;
          if (room) return room;
        }
        for (const m2 of f3.furniture) {
          if (!Object.values(m2).some(ofDevice)) continue;
          const room = roomAt(this.building, f3.id, m2.x, m2.z);
          if (room) return room;
        }
      }
    }
    const deviceId = s4.device_id ?? Object.values(this.hass.devices ?? {}).find((d3) => [d3.name_by_user, d3.name].some((n4) => n4 && n4.toLowerCase() === s4.name.toLowerCase()))?.id ?? null;
    const entityAreas = deviceId ? Object.values(this.hass.entities ?? {}).filter((e4) => e4.device_id === deviceId && e4.area_id).map((e4) => e4.area_id) : [];
    const area = s4.area_id ?? deviceAreaId(this.hass, deviceId) ?? entityAreas[0] ?? null;
    if (area) {
      const room = this.rooms.find((r4) => r4.area_id === area);
      if (room) return room.id;
    }
    const plain = (text) => text.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, " ");
    const name = ` ${plain(s4.name)} `;
    const hits = this.rooms.filter((r4) => plain(r4.name).trim().length >= 3 && name.includes(plain(r4.name).trim()));
    hits.sort((a3, b3) => plain(b3.name).length - plain(a3.name).length);
    if (hits.length && hits.filter((r4) => plain(r4.name) === plain(hits[0].name)).length === 1) return hits[0].id;
    return null;
  }
  /** Every save sends the plan's rooms and doors along, so the service always knows the current plan. */
  async save(changes) {
    let doors = [];
    try {
      doors = doorPairs(this.building);
    } catch (e4) {
      console.warn("NeonPlan locate: no door graph", e4);
    }
    const cfg = await this.call({
      type: "neonplan3d/locate/configure",
      rooms: this.rooms,
      doors,
      ...changes
    });
    if (cfg) this._cfg = { ...cfg, scanner_rooms: { ...cfg.scanner_rooms } };
  }
  async tick() {
    const live = this.hassSource?.();
    if (live && live !== this.hass) this.hass = live;
    if (this._step === "devices" && this.nearOpen) {
      const res = await this.call({ type: "neonplan3d/locate/nearby" });
      if (res) this._near = res.devices;
    }
    if (this._step === "walk") {
      const res = await this.call({ type: "neonplan3d/locate/calibrate", action: "status" });
      if (res && this._cfg) {
        this._cfg = { ...this._cfg, samples: res.samples };
        this._live = { ...this._live ?? { running: true, devices: [] }, calibration: res.calibration };
      }
    }
  }
  render() {
    const t3 = this.t;
    const cfg = this._cfg;
    const steps = [
      ["scanners", t3.s_scanners],
      ["devices", t3.s_devices],
      ["walk", t3.s_walk],
      ["live", t3.s_live]
    ];
    return b2`<div class="box" role="dialog" aria-label=${t3.title}>
      <header>
        <b>📡 ${t3.title}</b>
        <button class="x" @click=${() => this.remove()} aria-label=${t3.close}>✕</button>
      </header>
      <nav>${steps.map(([s4, label]) => b2`<button class=${this._step === s4 ? "on" : ""} @click=${() => this._step = s4}>${label}</button>`)}</nav>
      ${this._error ? b2`<pre class="err">${this._error}</pre>` : A}
      ${!cfg ? b2`<p>…</p>` : !cfg.bluetooth ? b2`<p>${t3.no_bt}</p>` : this.renderStep(cfg)}
    </div>`;
  }
  manualLink() {
    const de = this.hass?.language?.startsWith("de");
    return de ? "https://mastershort.de/neonplan3d/anleitung/3d-ansicht/#511-ortung-neu" : "https://mastershort.de/en/neonplan3d/manual/3d-view/#511-locating-new";
  }
  renderStep(cfg) {
    switch (this._step) {
      case "scanners":
        return this.renderScanners(cfg);
      case "devices":
        return this.renderDevices(cfg);
      case "walk":
        return this.renderWalk(cfg);
      default:
        return this.renderLive(cfg);
    }
  }
  roomSelect(value, onPick) {
    const floors = [...new Set(this.rooms.map((r4) => r4.floor))];
    return b2`<select @change=${(e4) => onPick(e4.target.value || null)}>
      <option value="" ?selected=${!value}>${this.t.not_placed}</option>
      ${floors.map((f3) => b2`<optgroup label=${f3}>${this.rooms.filter((r4) => r4.floor === f3).map((r4) => b2`<option value=${r4.id} ?selected=${r4.id === value}>${r4.name}</option>`)}</optgroup>`)}
    </select>`;
  }
  renderScanners(cfg) {
    const t3 = this.t;
    const covered = new Set(Object.values(cfg.scanner_rooms));
    const bare = this.rooms.filter((r4) => !covered.has(r4.id));
    return b2`<p>${t3.scanners_intro}</p>
      <ul class="list">
        ${cfg.scanners.map(
      (s4) => b2`<li>
            <span><b>${s4.name}</b><small>${s4.offline ? `\u26A0 ${t3.offline}` : s4.kind === "shelly" ? "Shelly" : s4.kind === "esphome" ? "ESPHome" : "Bluetooth"}</small></span>
            ${this.roomSelect(cfg.scanner_rooms[s4.source] ?? null, (room) => {
        const next = { ...cfg.scanner_rooms };
        if (room) next[s4.source] = room;
        else delete next[s4.source];
        void this.save({ scanner_rooms: next });
      })}
            ${cfg.scanner_hints?.[s4.source] && cfg.scanner_hints[s4.source] !== cfg.scanner_rooms[s4.source] ? b2`<button class="ghost" @click=${() => void this.save({ scanner_rooms: { ...cfg.scanner_rooms, [s4.source]: cfg.scanner_hints[s4.source] } })}>
                  ${this.tr(t3.hint_room, { room: this.rooms.find((r4) => r4.id === cfg.scanner_hints[s4.source])?.name ?? "" })}
                </button>` : A}
          </li>`
    )}
      </ul>
      ${bare.length ? b2`<p class="hint">${t3.coverage} ${bare.map((r4) => r4.name).join(", ")}</p>` : A}
      <p class="end"><button class="primary" @click=${() => this._step = "devices"}>${t3.next} →</button></p>`;
  }
  personSelect(value, onPick) {
    const persons = Object.keys(this.hass.states).filter((id) => id.startsWith("person."));
    return b2`<select @change=${(e4) => onPick(e4.target.value || null)}>
      <option value="" ?selected=${!value}>${this.t.person}: ${this.t.none}</option>
      ${persons.map((p3) => b2`<option value=${p3} ?selected=${p3 === value}>${this.hass.states[p3].attributes.friendly_name ?? p3}</option>`)}
    </select>`;
  }
  /**
   * The NeonPlan key helper (an ESP32 with irk-capture, see site/keys): found by its profile select ("Heart Sensor" /
   * "Keyboard"); its IRK sensor shows the key of the device that paired last.
   */
  keyHelpers() {
    const out = [];
    for (const [id, st] of Object.entries(this.hass.states)) {
      const options = st.attributes.options;
      if (!id.startsWith("select.") || !Array.isArray(options) || !options.includes("Heart Sensor") || !options.includes("Keyboard")) continue;
      const device = this.hass.entities?.[id]?.device_id;
      const irkEntity = Object.values(this.hass.entities ?? {}).find((e4) => e4.device_id === device && /_irk$/.test(e4.entity_id))?.entity_id;
      const raw = irkEntity ? this.hass.states[irkEntity]?.state : void 0;
      const entry = device ? this.hass.devices?.[device] : void 0;
      const name = entry?.name_by_user || entry?.name || String(st.attributes.friendly_name ?? id);
      const refresh = Object.values(this.hass.entities ?? {}).find((e4) => e4.device_id === device && /_refresh_ble_identity$/.test(e4.entity_id))?.entity_id ?? null;
      out.push({ name, select: id, option: st.state, irk: raw ? irkHex(raw) : null, ours: entry?.model === "neonplan_key" || /neonplan[ _]key/i.test(id), refresh });
    }
    return out.sort((x2, y3) => Number(y3.ours) - Number(x2.ours));
  }
  /** Devices left out of the next calibration (not carried right now). */
  notCarried = /* @__PURE__ */ new Set();
  /** The "Android phone or key tag" part is open: only then are nearby devices polled. */
  nearOpen = false;
  /** The chosen key helper (several ESP32s with irk-capture can be in Home Assistant). */
  helperId = null;
  /** Name and person for the next key the helper reads (typed before pairing). */
  helperName = "";
  helperPerson = null;
  helperAdded = null;
  renderKeyHelper(cfg) {
    const t3 = this.t;
    const helpers = this.keyHelpers();
    const helper = helpers.find((h3) => h3.select === this.helperId) ?? helpers[0];
    const head = b2`<div class="helper-head">
        <h4>${t3.helper_title}</h4>
        <a class="install" href="https://neonplan3d.mastershort.de/keys/" target="_blank" rel="noopener">⚡ ${t3.helper_install} ↗</a>
      </div>
      <p class="hint">${t3.helper_pitch}</p>
      <p class="hint">${t3.helper_android}</p>`;
    if (!helper) return head;
    const watch = helper.option === "Heart Sensor";
    const pick = (option) => void this.hass.callService("select", "select_option", { entity_id: helper.select, option });
    const flip2 = (hex) => hex.match(/../g).reverse().join("");
    const same = (k2) => !!helper.irk && !!k2 && (k2.toLowerCase() === helper.irk || k2.toLowerCase() === flip2(helper.irk));
    const owner = cfg.devices.find((d3) => same(d3.key))?.name ?? null;
    const privateOwner = cfg.private_ble.find((pb) => same(pb.key))?.title ?? null;
    const name = this.helperName || (watch ? "Apple Watch" : "iPhone");
    const short = (hex) => `${hex.slice(0, 4)}\u2026${hex.slice(-4)}`;
    return b2`${head}
      ${helpers.length > 1 ? b2`<p class="hint">
            <select
              @change=${(e4) => {
      this.helperId = e4.target.value;
      this.requestUpdate();
    }}
            >
              ${helpers.map((h3) => b2`<option value=${h3.select} ?selected=${h3.select === helper.select}>${h3.name}</option>`)}
            </select>
          </p>` : b2`<p class="hint">${this.tr(t3.helper_found, { name: helper.name })}</p>`}
      <div class="row">
        <button class=${watch ? "on" : ""} @click=${() => pick("Heart Sensor")}>⌚ ${t3.helper_watch}</button>
        <button class=${!watch ? "on" : ""} @click=${() => pick("Keyboard")}>📱 ${t3.helper_phone}</button>
      </div>
      <div class="row">
        <input
          placeholder=${t3.helper_name}
          title=${t3.helper_name}
          .value=${this.helperName}
          @input=${(e4) => this.helperName = e4.target.value}
        />
        ${this.personSelect(this.helperPerson, (pp) => {
      this.helperPerson = pp;
      this.requestUpdate();
    })}
      </div>
      <p class="hint">${watch ? t3.helper_watch_steps : t3.helper_phone_steps}</p>
      <ul class="list">
        <li>
          <span>
            <b>${t3.helper_irk}</b>
            <small>${helper.irk ? short(helper.irk) : t3.helper_wait}</small>
            ${owner || privateOwner ? b2`<small>${this.tr(t3.helper_belongs, { name: owner ?? privateOwner ?? "" })}</small>` : A}
          </span>
          ${helper.irk && !owner ? b2`<button
                class="primary"
                @click=${() => {
      this.addDevice(cfg, { name, kind: "irk", key: helper.irk }, this.helperPerson);
      this.helperAdded = name;
      this.helperName = "";
    }}
              >
                ${this.tr(t3.helper_add_as, { name })}
              </button>` : A}
        </li>
      </ul>
      ${this.helperAdded ? b2`<p class="hint">${this.tr(t3.helper_added, { name: this.helperAdded })}</p>` : A}
      <p class="hint">${t3.helper_after}</p>
      ${helper.refresh ? b2`<p class="end">
            <small>${t3.helper_next_hint}</small>
            <button @click=${() => void this.hass.callService("button", "press", { entity_id: helper.refresh })}>${t3.helper_next}</button>
          </p>` : A}`;
  }
  /** The Home Assistant app on a phone, to ring it ("Lass mein iPhone klingeln"). */
  notifySelect(value, onPick) {
    const all = this.hass.services;
    const services = Object.keys(all?.notify ?? {}).filter((s4) => s4.startsWith("mobile_app_"));
    if (!services.length) return A;
    return b2`<select title=${this.t.ring_hint} @change=${(e4) => onPick(e4.target.value || null)}>
      <option value="" ?selected=${!value}>🔔 ${this.t.ring}: ${this.t.none}</option>
      ${services.map((s4) => b2`<option value=${`notify.${s4}`} ?selected=${value === `notify.${s4}`}>🔔 ${s4.replace(/^mobile_app_/, "").replace(/_/g, " ")}</option>`)}
    </select>`;
  }
  /** "not heard" next to a device while locating runs and no receiver hears it (an Android phone added by key, a
   * switched-off transmitter): learning with it would collect nothing. */
  unheardBadge(id) {
    const live = this._live;
    if (!live?.running) return A;
    const d3 = live.devices.find((x2) => x2.id === id);
    if (!d3 || d3.room || d3.last_seen && Date.now() / 1e3 - d3.last_seen < 120) return A;
    return b2`<small class="warn" title=${this.t.unheard_hint}>${this.t.unheard}</small>`;
  }
  addDevice(cfg, device, person = null) {
    const id = `${device.kind}_${device.key.replace(/[^a-z0-9]/gi, "").slice(-10).toLowerCase()}`;
    if (cfg.devices.some((d3) => d3.id === id)) return;
    void this.save({ devices: [...cfg.devices, { ...device, id, person, icon: null }] });
  }
  renderDevices(cfg) {
    const t3 = this.t;
    const has = (key) => cfg.devices.some((d3) => d3.key.toLowerCase() === key.toLowerCase());
    const setDevice = (id, patch) => void this.save({ devices: cfg.devices.map((d3) => d3.id === id ? { ...d3, ...patch } : d3) });
    const apps = appTransmitters(this.hass);
    return b2`<p>${t3.devices_intro}</p>
      ${cfg.devices.length ? b2`<ul class="list">
            ${cfg.devices.map(
      (d3) => b2`<li>
                <input .value=${d3.name} @change=${(e4) => setDevice(d3.id, { name: e4.target.value })} />
                ${this.personSelect(d3.person, (p3) => setDevice(d3.id, { person: p3 }))}
                ${this.notifySelect(d3.notify ?? null, (n4) => setDevice(d3.id, { notify: n4 }))}
                <label class="row" title=${t3.worn_hint}
                  ><input type="checkbox" .checked=${!!d3.wearable} @change=${(e4) => setDevice(d3.id, { wearable: e4.target.checked })} />⌚
                  ${t3.worn}</label
                >
                ${this.unheardBadge(d3.id)}
                <button @click=${() => void this.save({ devices: cfg.devices.filter((x2) => x2.id !== d3.id) })}>${t3.remove}</button>
              </li>`
    )}
          </ul>` : A}
      ${apps.length ? b2`<h4>📱 ${t3.app_title}</h4>
            <ul class="list">
              ${apps.map((a3) => {
      const warnings = [
        a3.state !== "Transmitting" ? t3.app_off : null,
        a3.power === "ultraLow" || a3.power === "low" ? t3.app_power : null,
        a3.mode === "lowPower" ? t3.app_mode : null
      ].filter((w2) => !!w2);
      return b2`<li>
                  <span
                    ><b>${a3.name}</b>${warnings.map((w2) => b2`<small class="warn">⚠ ${w2}</small>`)}</span
                  >
                  ${has(a3.key) ? b2`<small>${t3.added}</small>` : b2`<button @click=${() => this.addDevice(cfg, { name: a3.name, kind: "ibeacon", key: a3.key }, a3.person)}>${t3.add}</button>`}
                </li>`;
    })}
            </ul>` : A}
      ${this.renderKeyHelper(cfg)}
      <details
        class="pbd"
        @toggle=${(e4) => {
      this.nearOpen = e4.target.open;
    }}
      >
        <summary>📱 ${t3.near_summary}</summary>
        <p class="hint">${t3.near_intro}</p>
        ${apps.length ? A : b2`<p class="hint">${t3.app_none}</p>`}
        <ul class="list">
          ${(() => {
      const seen = /* @__PURE__ */ new Set();
      const close = this._near.filter((n4) => n4.ibeacon ? n4.rssi >= -90 : !n4.random && n4.rssi >= -68).sort((x2, y3) => Number(!!y3.ibeacon) - Number(!!x2.ibeacon) || y3.rssi - x2.rssi).filter((n4) => !n4.ibeacon || !seen.has(n4.ibeacon) && !!seen.add(n4.ibeacon)).slice(0, 5);
      return close.length ? close.map(
        (n4) => b2`<li>
                    <span><b>${n4.ibeacon ? `\u{1F4F1} ${t3.android_label}` : n4.name ?? n4.address}</b><small>${n4.rssi} dBm</small></span>
                    ${has(n4.ibeacon ?? n4.address) ? b2`<small>${t3.added}</small>` : b2`<button @click=${() => this.addDevice(cfg, n4.ibeacon ? { name: t3.android_label, kind: "ibeacon", key: n4.ibeacon } : { name: n4.name ?? n4.address, kind: "mac", key: n4.address })}>${t3.add}</button>`}
                  </li>`
      ) : b2`<li><small>${t3.near_empty}</small></li>`;
    })()}
        </ul>
      </details>
      <details class="pbd">
        <summary>🔑 ${t3.paste_summary}</summary>
      <div class="row">
        <input id="keyname" placeholder=${t3.key_name} />
        <input id="keyvalue" placeholder=${t3.key_value} spellcheck="false" autocomplete="off" />
        <button
          @click=${() => {
      const name = this.renderRoot.querySelector("#keyname").value.trim();
      const key = irkHex(this.renderRoot.querySelector("#keyvalue").value);
      if (!key) {
        this._error = t3.key_bad;
        return;
      }
      this._error = "";
      this.addDevice(cfg, { name: name || "iPhone", kind: "irk", key });
    }}
        >
          ${t3.add}
        </button>
      </div>
      </details>
      <p class="hint">${t3.irk_help} <a href=${this.manualLink()} target="_blank" rel="noopener">${t3.manual} ↗</a></p>
      <p class="end"><button class="primary" ?disabled=${!cfg.devices.length} @click=${() => this._step = "walk"}>${t3.next} →</button></p>`;
  }
  renderWalk(cfg) {
    const t3 = this.t;
    const cal = this._live?.calibration ?? null;
    if (!cfg.devices.length) return b2`<p>${t3.need_device}</p>`;
    const count = (room) => Math.max(0, ...cfg.devices.map((d3) => cfg.samples[d3.id]?.[room] ?? 0));
    const floors = [...new Set(this.rooms.map((r4) => r4.floor))];
    const q = this._quality;
    return b2`<p>${t3.walk_intro}</p>
      ${cfg.devices.length > 1 ? b2`<div class="row">
            <b>${t3.carry}</b>
            ${cfg.devices.map(
      (d3) => b2`<label class="row"
                ><input
                  type="checkbox"
                  .checked=${!this.notCarried.has(d3.id)}
                  @change=${(e4) => {
        if (e4.target.checked) this.notCarried.delete(d3.id);
        else this.notCarried.add(d3.id);
        this.requestUpdate();
      }}
                />
                ${d3.name} ${this.unheardBadge(d3.id)}</label
              >`
    )}
          </div>` : A}
      ${cal ? b2`<div class="learning">
            ${this.tr(t3.learning, { room: this.rooms.find((r4) => r4.id === cal.room)?.name ?? "", left: cal.left })}
            <div class="bar"><i style="width:${Math.round((90 - cal.left) / 90 * 100)}%"></i></div>
            <button @click=${() => void this.call({ type: "neonplan3d/locate/calibrate", action: "stop" })}>${t3.stop}</button>
          </div>` : A}
      ${floors.map(
      (f3) => b2`<h4>${f3}</h4>
          <div class="rooms">
            ${this.rooms.filter((r4) => r4.floor === f3).map((r4) => {
        const n4 = count(r4.id);
        const values = q && n4 > 0 ? cfg.devices.map((d3) => q[d3.id]?.rooms[r4.id]).filter((v2) => typeof v2 === "number") : [];
        const acc = values.length ? Math.min(...values) : null;
        return b2`<button
                  class=${cal?.room === r4.id ? "on" : n4 >= 30 ? "done" : ""}
                  ?disabled=${!!cal}
                  @click=${async () => {
          const devices = cfg.devices.filter((d3) => !this.notCarried.has(d3.id)).map((d3) => d3.id);
          const res = await this.call({ type: "neonplan3d/locate/calibrate", action: "start", room: r4.id, seconds: 90, devices });
          if (res) this._live = { ...this._live ?? { running: true, devices: [] }, calibration: res.calibration };
          if (res && !cfg.enabled) await this.save({ enabled: true });
        }}
                >
                  ${n4 >= 30 ? "\u2713 " : ""}${r4.name}<small>${this.tr(t3.samples, { n: n4 })}${acc !== null ? ` \xB7 ${Math.round(acc * 100)} %` : ""}</small>
                </button>`;
      })}
          </div>`
    )}
      <p class="end">
        <button @click=${async () => this._quality = await this.call({ type: "neonplan3d/locate/quality" })}>${t3.quality}</button>
        ${q ? b2`<b>${this.tr(t3.quality_result, {
      p: cfg.devices.map((d3) => `${d3.name} ${q[d3.id]?.overall != null ? Math.round(q[d3.id].overall * 100) : "\u2013"} %`).join(" \xB7 ")
    })}</b>` : A}
        <button class="primary" @click=${() => this._step = "live"}>${t3.next} →</button>
      </p>
      <p class="end"><button class="ghost" @click=${() => void this.call({ type: "neonplan3d/locate/calibrate", action: "clear" }).then(() => this.load())}>${t3.relearn_all}</button></p>`;
  }
  renderLive(cfg) {
    const t3 = this.t;
    const live = this._live;
    const name = (id) => this.rooms.find((r4) => r4.id === id)?.name;
    return b2`<p>${t3.live_intro}</p>
      ${this.voiceLanguage ? b2`<p class="hint">${t3.voice_hint}</p>` : A}
      <label class="row"><input type="checkbox" .checked=${cfg.enabled} @change=${(e4) => void this.save({ enabled: e4.target.checked })} /> ${t3.enabled}</label>
      <label class="row"><input type="checkbox" .checked=${cfg.admins_only} @change=${(e4) => void this.save({ admins_only: e4.target.checked })} /> ${t3.admins_only}</label>
      <label class="row" title=${t3.fly_hint}
        ><input type="checkbox" .checked=${cfg.fly !== false} @change=${(e4) => void this.save({ fly: e4.target.checked })} /> ${t3.fly}</label
      >
      ${this.setLook ? b2`<div class="row">
            <b>${t3.look_title}</b>
            ${["figure", "pin", "off"].map(
      (look) => b2`<button
                class=${(this.building.settings.person_look ?? "figure") === look ? "on" : ""}
                @click=${() => {
        this.setLook?.(look);
        this.building = { ...this.building, settings: { ...this.building.settings, person_look: look === "figure" ? null : look } };
      }}
              >
                ${look === "figure" ? t3.look_figure : look === "pin" ? t3.look_pin : t3.look_off}
              </button>`
    )}
          </div>` : A}
      <ul class="list big">
        ${(live?.devices ?? []).map(
      (d3) => b2`<li>
            <span><b>${d3.name}</b></span>
            <span>${d3.room ? b2`<b class="room">${name(d3.room)}</b> <small>${Math.round((d3.probability ?? 0) * 100)} %</small>` : b2`<small>${t3.not_heard}</small>`}</span>
          </li>`
    )}
      </ul>`;
  }
  static styles = i`
    :host {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: grid;
      place-items: center;
      background: #02060fcc;
      font: 14px/1.4 system-ui, sans-serif;
      color: #e6f7ff;
    }
    .box {
      width: min(640px, calc(100vw - 16px));
      max-height: calc(100vh - 16px);
      overflow: auto;
      background: #0b1120;
      border: 1px solid #37e0ff66;
      border-radius: 14px;
      padding: 14px;
      box-shadow: 0 10px 40px #000a;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header small {
      font-weight: 400;
      color: #ffb86b;
      margin-left: 6px;
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin: 10px 0;
    }
    button,
    select,
    input {
      font: inherit;
      color: #e6f7ff;
      background: #16233d;
      border: 1px solid #37e0ff44;
      border-radius: 8px;
      padding: 7px 10px;
    }
    button {
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
      cursor: default;
    }
    button.on,
    button.primary {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
    }
    button.done {
      border-color: #5dd39e;
    }
    button.ghost {
      background: transparent;
    }
    .x {
      background: transparent;
      border: none;
      font-size: 18px;
    }
    .list {
      list-style: none;
      padding: 0;
      margin: 8px 0;
      display: grid;
      gap: 6px;
    }
    .list li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      background: #101a2e;
      border-radius: 10px;
      padding: 8px 10px;
    }
    .list li span {
      display: flex;
      flex-direction: column;
    }
    .list.big li {
      font-size: 16px;
    }
    small {
      opacity: 0.75;
      font-size: 12px;
    }
    .rooms {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .rooms button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 120px;
    }
    .learning {
      background: #13233f;
      border: 1px solid #37e0ff;
      border-radius: 10px;
      padding: 10px;
      margin: 8px 0;
      font-weight: 700;
    }
    .bar {
      height: 8px;
      background: #0b1120;
      border-radius: 4px;
      margin: 8px 0;
      overflow: hidden;
    }
    .bar i {
      display: block;
      height: 100%;
      background: #37e0ff;
    }
    .hint {
      opacity: 0.8;
      font-size: 13px;
    }
    .warn {
      display: block;
      color: #ffb74d;
      font-size: 12px;
    }
    .end {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
    .row {
      display: flex;
      gap: 8px;
      align-items: center;
      margin: 6px 0;
    }
    .room {
      color: #37e0ff;
    }
    a {
      color: #37e0ff;
    }
    .helper-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 12px;
    }
    .helper-head h4 {
      margin: 0;
    }
    a.install {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
      text-decoration: none;
      border-radius: 10px;
      padding: 8px 14px;
    }
    details.pbd summary {
      cursor: pointer;
      opacity: 0.85;
      margin: 8px 0;
    }
    .err {
      color: #ff8fa3;
      white-space: pre-wrap;
      font-size: 12px;
    }
    h4 {
      margin: 12px 0 4px;
    }
  `;
};
if (!customElements.get("fp3d-locate-setup")) customElements.define("fp3d-locate-setup", LocateSetup);

// src/locate/entry.ts
function openLocateSetup(hass, building, hassSource, setLook) {
  document.querySelector("fp3d-locate-setup")?.remove();
  const el = document.createElement("fp3d-locate-setup");
  el.hass = hass;
  el.hassSource = hassSource ?? null;
  el.setLook = setLook ?? null;
  el.building = building;
  document.body.append(el);
}
export {
  openLocateSetup
};
