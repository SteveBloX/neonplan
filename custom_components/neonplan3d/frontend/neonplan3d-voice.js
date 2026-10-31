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

// src/voice/commands.ts
function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss").replace(/[^a-z0-9一-鿿]+/g, " ").trim();
}
var HOUSE = /\b(ganze[sn]? haus|haus|uebersicht|ubersicht|alles|house|whole house|home|overview|everything)\b/;
function says(text, name) {
  if (!name) return false;
  return ` ${text} `.includes(` ${name} `);
}
function findPlace(sentence, building, alias) {
  const text = normalize(sentence);
  if (!text) return null;
  let best = null;
  let len = 0;
  let rank = -1;
  for (const floor of building.floors) {
    for (const room of zonesOf(floor)) {
      const indoor = room.outdoor ? 0 : 1;
      const further = [].concat(alias?.(room) ?? [], room.aliases ?? []);
      for (const [name, own] of [[room.name, true], ...further.map((n4) => [n4, false])]) {
        const n4 = name ? normalize(name) : "";
        const r4 = (own ? 2 : 0) + indoor;
        if ((n4.length > len || n4.length === len && r4 > rank) && says(text, n4)) {
          best = { kind: "room", floorId: floor.id, roomId: room.id, name: room.name };
          len = n4.length;
          rank = r4;
        }
      }
    }
  }
  if (best) return best;
  for (const floor of building.floors) {
    const n4 = normalize(floor.name);
    if (n4.length > len && says(text, n4)) {
      best = { kind: "floor", floorId: floor.id, name: floor.name };
      len = n4.length;
    }
  }
  if (best) return best;
  return HOUSE.test(text) ? { kind: "house", name: "" } : null;
}
var SHOW = /\b(zeig|zeige|zeigt|geh|gehe|wechsel|wechsle|oeffne|offne|spring|springe|navigier|show|go|open|switch|jump|view|toon|ga|open|montre|affiche|va|aller|mostra|vai|apri|muestra|ve|vaya|abre|visa|vis|ga till|naytta|nayta|pokaz|ukaz|prejdi|arata|mergi|pokazi|mutasd|menj|显示|去)\b/;
var FILLER = new Set("das den dem die der ins in im zum zur ins nach bitte mal mir mich the to please me my het de naar le la les au a la il lo al el ett en till".split(" "));
function showCommand(sentence, building, alias) {
  const place = findPlace(sentence, building, alias);
  if (!place) return null;
  const text = normalize(sentence);
  if (SHOW.test(text)) return place;
  const theRoom = place.kind === "room" ? zonesOf(building.floors.find((f3) => f3.id === place.floorId)).find((r4) => r4.id === place.roomId) : void 0;
  const names = place.kind === "house" ? [] : [place.name, ...theRoom ? [...[].concat(alias?.(theRoom) ?? []), ...theRoom.aliases ?? []] : []];
  let rest = ` ${text} `;
  for (const n4 of names) if (n4) rest = rest.replace(` ${normalize(n4)} `, " ");
  if (place.kind === "house") rest = rest.replace(HOUSE, " ");
  return rest.split(" ").every((w2) => !w2 || FILLER.has(w2)) ? place : null;
}

// src/load-voice.ts
function voicePipeline() {
  try {
    return localStorage.getItem("neonplan3d.voicePipeline");
  } catch {
    return null;
  }
}

// src/voice/listen.ts
var RATE = 16e3;
var LONGEST = 7e3;
function toPcm16(input, from) {
  const ratio = from / RATE;
  const n4 = Math.floor(input.length / ratio);
  const out = new Int16Array(n4);
  for (let i5 = 0; i5 < n4; i5++) {
    const a3 = Math.floor(i5 * ratio);
    const b3 = Math.max(a3 + 1, Math.floor((i5 + 1) * ratio));
    let sum = 0;
    for (let k2 = a3; k2 < b3 && k2 < input.length; k2++) sum += input[k2];
    const v2 = Math.max(-1, Math.min(1, sum / (b3 - a3)));
    out[i5] = v2 < 0 ? v2 * 32768 : v2 * 32767;
  }
  return out;
}
function listPipelines(hass) {
  return hass.callWS({ type: "assist_pipeline/pipeline/list" });
}
async function findPipeline(hass, chosen) {
  const res = await listPipelines(hass);
  const own = chosen ? res.pipelines.find((p3) => p3.id === chosen && p3.stt_engine) : void 0;
  if (own) return own;
  const preferred = res.pipelines.find((p3) => p3.id === res.preferred_pipeline) ?? res.pipelines[0];
  return (preferred?.stt_engine ? preferred : res.pipelines.find((p3) => p3.stt_engine)) ?? null;
}
function audioContext() {
  const Ctx = window.AudioContext ?? window.webkitAudioContext;
  return new Ctx();
}
function openMicrophone() {
  return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
}
async function transcribe(hass, ctx, source, pipeline) {
  const socket = hass.connection.socket;
  if (!socket) throw new Error("no connection");
  if (ctx.state === "suspended") await ctx.resume();
  let handler = null;
  const early = [];
  let done = false;
  const send = (pcm) => {
    if (handler === null) return;
    const bytes = pcm ? new Uint8Array(pcm.buffer, pcm.byteOffset, pcm.byteLength) : new Uint8Array(0);
    const msg = new Uint8Array(1 + bytes.length);
    msg[0] = handler;
    msg.set(bytes, 1);
    socket.send(msg);
  };
  const proc = ctx.createScriptProcessor(4096, 1, 1);
  let peak = 0;
  proc.onaudioprocess = (e4) => {
    if (done) return;
    const input = e4.inputBuffer.getChannelData(0);
    for (let i5 = 0; i5 < input.length; i5 += 16) peak = Math.max(peak, Math.abs(input[i5]));
    const pcm = toPcm16(input, ctx.sampleRate);
    if (handler === null) early.push(pcm);
    else send(pcm);
  };
  source.connect(proc);
  proc.connect(ctx.destination);
  return new Promise((resolve, reject) => {
    let unsub = null;
    let text = "";
    const limit = setTimeout(() => send(null), LONGEST);
    const stall = setTimeout(() => finish(new Error("timeout")), LONGEST + 15e3);
    const finish = (err) => {
      if (done) return;
      done = true;
      clearTimeout(limit);
      clearTimeout(stall);
      source.disconnect(proc);
      proc.disconnect();
      void unsub?.();
      if ((err || !text) && peak < 5e-4) reject(new Error("silent"));
      else if (err) reject(err);
      else resolve(text);
    };
    hass.connection.subscribeMessage(
      (ev) => {
        if (ev.type === "run-start") {
          handler = ev.data?.runner_data?.stt_binary_handler_id ?? null;
          for (const pcm of early.splice(0)) send(pcm);
        } else if (ev.type === "stt-end") {
          text = ev.data?.stt_output?.text?.trim() ?? "";
          finish();
        } else if (ev.type === "error") {
          finish(new Error(`${ev.data?.code ?? ""} ${ev.data?.message ?? ""}`.trim()));
        } else if (ev.type === "run-end") {
          finish();
        }
      },
      // without a pipeline id Home Assistant takes its preferred one
      { type: "assist_pipeline/run", start_stage: "stt", end_stage: "stt", input: { sample_rate: RATE }, ...pipeline ? { pipeline } : {} }
    ).then((u3) => {
      unsub = u3;
      if (done) void u3();
    }).catch((err) => finish(err instanceof Error ? err : new Error(String(err))));
  });
}
var pipelineOf = null;
async function listenOnce(hass, onListening, chosen = null, started) {
  if (!pipelineOf || pipelineOf.connection !== hass.connection || pipelineOf.chosen !== chosen) {
    pipelineOf = { connection: hass.connection, chosen, id: findPipeline(hass, chosen).then((p3) => p3?.id ?? null, () => void 0) };
  }
  const found = await pipelineOf.id;
  if (found === null) {
    pipelineOf = null;
    void started?.close();
    throw new Error("no_pipeline");
  }
  if (found === void 0) pipelineOf = null;
  const pipeline = found ?? chosen;
  const ctx = started ?? audioContext();
  let stream;
  try {
    stream = await openMicrophone();
  } catch (err) {
    void ctx.close();
    throw err;
  }
  try {
    const source = ctx.createMediaStreamSource(stream);
    onListening?.();
    return await transcribe(hass, ctx, source, pipeline);
  } finally {
    stream.getTracks().forEach((t3) => t3.stop());
    void ctx.close();
  }
}
async function speak(hass, text, chosen = null) {
  const pipeline = await findSpeaking(hass, chosen);
  if (!pipeline) return false;
  const url = await new Promise((resolve) => {
    let unsub = null;
    const stop = setTimeout(() => resolve(null), 15e3);
    const finish = (u3) => {
      clearTimeout(stop);
      void unsub?.();
      resolve(u3);
    };
    hass.connection.subscribeMessage(
      (ev) => {
        if (ev.type === "tts-end") finish(ev.data?.tts_output?.url ?? null);
        else if (ev.type === "error" || ev.type === "run-end") finish(null);
      },
      { type: "assist_pipeline/run", start_stage: "tts", end_stage: "tts", input: { text }, pipeline }
    ).then((u3) => unsub = u3).catch(() => finish(null));
  });
  if (!url) return false;
  try {
    const audio = new Audio(url.startsWith("http") ? url : new URL(url, location.origin).href);
    await audio.play();
    await new Promise((done) => {
      const stop = setTimeout(done, 2e4);
      const end = () => {
        clearTimeout(stop);
        done();
      };
      audio.addEventListener("ended", end, { once: true });
      audio.addEventListener("error", end, { once: true });
    });
    return true;
  } catch {
    return false;
  }
}
async function findSpeaking(hass, chosen) {
  try {
    const res = await hass.callWS({ type: "assist_pipeline/pipeline/list" });
    const own = chosen ? res.pipelines.find((p3) => p3.id === chosen && p3.tts_engine) : void 0;
    if (own) return own.id;
    const preferred = res.pipelines.find((p3) => p3.id === res.preferred_pipeline);
    return (preferred?.tts_engine ? preferred : res.pipelines.find((p3) => p3.tts_engine))?.id ?? null;
  } catch {
    return null;
  }
}
async function converse(hass, text) {
  const res = await hass.callWS({ type: "conversation/process", text, language: hass.language });
  return res.response?.speech?.plain?.speech ?? "";
}

// src/voice/mic-probe.ts
var TEXT = {
  de: {
    title: "Mikrofon-Probe",
    intro: "Pr\xFCft, ob du auf diesem Ger\xE4t mit NeonPlan sprechen kannst. Es wird nichts geschaltet.",
    secure_ok: "Sichere Verbindung (https)",
    secure_no: "Keine sichere Verbindung: \xDCber http:// gibt der Browser das Mikrofon nicht frei. \xD6ffne Home Assistant \xFCber https (Nabu Casa, eigenes Zertifikat, Reverse Proxy).",
    api_ok: "Der Browser kann ein Mikrofon ansprechen",
    api_no: "Dieser Browser bietet keinen Mikrofonzugriff an (WebView zu alt oder Seite nicht sicher).",
    start: "Mikrofon freigeben",
    mic_ok: "Mikrofon freigegeben",
    mic_denied: "Mikrofon verweigert. Fully Kiosk: Einstellungen \u2192 Web Content Settings \u2192 Mikrofonzugriff einschalten (Plus-Lizenz) und in Android Fully das Mikrofon erlauben.",
    mic_none: "Kein Mikrofon gefunden.",
    mic_other: "Mikrofon nicht nutzbar",
    level: "Pegel \u2013 sprich etwas, der Balken muss sich bewegen",
    pipe_ok: "Assist-Pipeline",
    pipe_no: "Keine Assist-Pipeline mit Spracherkennung gefunden. Einstellungen \u2192 Sprachassistenten: eine Spracherkennung w\xE4hlen (z. B. Home Assistant Cloud, Whisper oder Speech-to-Phrase).",
    talk: "Sprechen (z. B. \u201EZeig das Wohnzimmer\u201C)",
    listening: "Ich h\xF6re zu \u2026",
    heard: "Erkannt",
    nothing: "Nichts erkannt",
    took: "Dauer",
    would: "NeonPlan w\xFCrde zeigen",
    would_none: "Kein Raum, keine Etage im Satz gefunden",
    house: "das ganze Haus",
    close: "Schlie\xDFen",
    silent: "Das Mikrofon liefert nur Stille. Meist h\xE4lt eine andere App es fest \u2013 in Fully Kiosk die Bewegungserkennung per Ger\xE4usch (Motion Detection \u2192 Acoustic Detection) ausschalten und neu laden."
  },
  en: {
    title: "Microphone probe",
    intro: "Checks whether you can talk to NeonPlan on this device. Nothing is switched.",
    secure_ok: "Secure connection (https)",
    secure_no: "No secure connection: over http:// the browser does not give out the microphone. Open Home Assistant over https (Nabu Casa, own certificate, reverse proxy).",
    api_ok: "The browser can use a microphone",
    api_no: "This browser offers no microphone access (WebView too old, or the page is not secure).",
    start: "Allow the microphone",
    mic_ok: "Microphone allowed",
    mic_denied: "Microphone denied. Fully Kiosk: Settings \u2192 Web Content Settings \u2192 enable microphone access (Plus licence), and allow Fully the microphone in Android.",
    mic_none: "No microphone found.",
    mic_other: "Microphone not usable",
    level: "Level \u2013 say something, the bar must move",
    pipe_ok: "Assist pipeline",
    pipe_no: "No Assist pipeline with speech to text found. Settings \u2192 Voice assistants: choose a speech-to-text engine (e.g. Home Assistant Cloud, Whisper or Speech-to-Phrase).",
    talk: "Talk (e.g. \u201CShow the living room\u201D)",
    listening: "Listening \u2026",
    heard: "Heard",
    nothing: "Nothing heard",
    took: "Took",
    would: "NeonPlan would show",
    would_none: "No room or floor found in the sentence",
    house: "the whole house",
    close: "Close",
    silent: "The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload."
  }
};
var MicProbe = class extends i4 {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    _steps: { state: true },
    _level: { state: true },
    _busy: { state: true },
    _result: { state: true }
  };
  stream = null;
  ctx = null;
  source = null;
  meterTimer;
  pipeline = null;
  looked = false;
  constructor() {
    super();
    this.building = null;
    this._steps = [];
    this._level = 0;
    this._busy = false;
    this._result = [];
  }
  get t() {
    return (this.hass?.language ?? navigator.language).toLowerCase().startsWith("de") ? TEXT.de : TEXT.en;
  }
  connectedCallback() {
    super.connectedCallback();
    const t3 = this.t;
    const api = !!navigator.mediaDevices?.getUserMedia;
    this._steps = [
      { ok: window.isSecureContext, text: window.isSecureContext ? t3.secure_ok : t3.secure_no },
      { ok: api, text: api ? t3.api_ok : t3.api_no }
    ];
    this.looked = false;
  }
  /** The pipeline is looked up once Home Assistant is there (it arrives after the element is connected). */
  updated() {
    if (!this.looked && this.hass) {
      this.looked = true;
      void this.findPipeline();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.meterTimer);
    this.stream?.getTracks().forEach((tr) => tr.stop());
    void this.ctx?.close();
    this.stream = null;
    this.ctx = null;
  }
  async findPipeline() {
    const t3 = this.t;
    try {
      const p3 = await findPipeline(this.hass, voicePipeline());
      this.pipeline = p3;
      this.add(p3 ? { ok: true, text: `${t3.pipe_ok}: ${p3.name} (${p3.language}, ${p3.stt_engine})` } : { ok: false, text: t3.pipe_no });
    } catch (err) {
      this.add({ ok: false, text: `${t3.pipe_no} (${String(err?.message ?? err)})` });
    }
  }
  add(step) {
    this._steps = [...this._steps, step];
  }
  async allow() {
    const t3 = this.t;
    const ctx = audioContext();
    ctx.resume().catch(() => void 0);
    try {
      this.stream = await openMicrophone();
    } catch (err) {
      void ctx.close();
      const name = err?.name ?? "";
      this.add({ ok: false, text: name === "NotAllowedError" || name === "SecurityError" ? t3.mic_denied : name === "NotFoundError" ? t3.mic_none : `${t3.mic_other}: ${name || String(err)}` });
      return;
    }
    this.ctx = ctx;
    this.source = this.ctx.createMediaStreamSource(this.stream);
    const analyser = this.ctx.createAnalyser();
    analyser.fftSize = 512;
    this.source.connect(analyser);
    const buf = new Float32Array(analyser.fftSize);
    this.meterTimer = setInterval(() => {
      analyser.getFloatTimeDomainData(buf);
      let peak = 0;
      for (const v2 of buf) peak = Math.max(peak, Math.abs(v2));
      this._level = Math.min(1, peak * 2.5);
    }, 100);
    this.add({ ok: true, text: `${t3.mic_ok} (${this.stream.getAudioTracks()[0]?.label || "?"}, ${this.ctx.sampleRate} Hz)` });
  }
  /** Record one sentence and let Assist write it down (the pipeline stops after speech to text). */
  async talk() {
    const hass = this.hass;
    if (!hass || !this.ctx || !this.source || !this.pipeline) return;
    const t3 = this.t;
    this._busy = true;
    this._result = [{ ok: null, text: t3.listening }];
    const began = performance.now();
    try {
      const text = await transcribe(hass, this.ctx, this.source, this.pipeline.id);
      const took = `${t3.took}: ${((performance.now() - began) / 1e3).toFixed(1)} s`;
      const place = text && this.building ? findPlace(text, this.building) : null;
      const where = place ? place.kind === "house" ? t3.house : place.name : null;
      this._result = [
        { ok: !!text, text: text ? `${t3.heard}: \u201E${text}\u201C \xB7 ${took}` : `${t3.nothing} \xB7 ${took}` },
        ...text ? [{ ok: !!where, text: where ? `${t3.would}: ${where}` : t3.would_none }] : []
      ];
    } catch (err) {
      const msg = String(err?.message ?? err);
      this._result = [{ ok: false, text: msg === "silent" ? t3.silent : `Assist: ${msg}` }];
    }
    this._busy = false;
  }
  close() {
    this.dispatchEvent(new CustomEvent("close", { bubbles: true, composed: true }));
  }
  render() {
    const t3 = this.t;
    const mark = (s4) => b2`<li class=${s4.ok === null ? "wait" : s4.ok ? "ok" : "no"}><span>${s4.ok === null ? "\u2026" : s4.ok ? "\u2714" : "\u2716"}</span> ${s4.text}</li>`;
    const ready = this._steps[0]?.ok && this._steps[1]?.ok;
    return b2`<div class="box" role="dialog">
      <h3>🎙️ ${t3.title}</h3>
      <p>${t3.intro}</p>
      <ul>
        ${this._steps.map(mark)}
      </ul>
      ${this.stream ? b2`<div class="meter" title=${t3.level}><i style="width:${Math.round(this._level * 100)}%"></i></div>
            <small>${t3.level}</small>` : A}
      <ul>
        ${this._result.map(mark)}
      </ul>
      <div class="row">
        ${!this.stream ? b2`<button ?disabled=${!ready} @click=${() => void this.allow()}>${t3.start}</button>` : A}
        ${this.stream ? b2`<button ?disabled=${this._busy || !this.pipeline} @click=${() => void this.talk()}>${t3.talk}</button>` : A}
        <button @click=${() => this.close()}>${t3.close}</button>
      </div>
    </div>`;
  }
  static styles = i`
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(4, 8, 16, 0.6);
    }
    .box {
      width: min(520px, calc(100% - 32px));
      max-height: calc(100% - 32px);
      overflow: auto;
      padding: 16px 18px;
      border-radius: 14px;
      background: rgba(12, 20, 34, 0.96);
      border: 1px solid rgba(0, 229, 255, 0.45);
      color: #e6f7ff;
      font: 14px/1.4 system-ui, sans-serif;
    }
    h3 {
      margin: 0 0 6px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 8px 0;
    }
    li {
      display: flex;
      gap: 8px;
      margin: 4px 0;
    }
    li.ok span {
      color: #3dff9a;
    }
    li.no span {
      color: #ff5a6a;
    }
    .meter {
      height: 10px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.12);
      overflow: hidden;
    }
    .meter i {
      display: block;
      height: 100%;
      background: #00e5ff;
      transition: width 0.1s;
    }
    small {
      opacity: 0.7;
    }
    .row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    button {
      padding: 8px 12px;
      border-radius: 18px;
      border: 1px solid rgba(0, 229, 255, 0.6);
      background: rgba(0, 229, 255, 0.12);
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.4;
    }
  `;
};
if (!customElements.get("fp3d-mic-probe")) customElements.define("fp3d-mic-probe", MicProbe);

// src/voice/targets.ts
var SHOW2 = /\b(zeig|zeige|zeigt|geh|gehe|wechsel|wechsle|oeffne|offne|spring|springe|navigier|wo|where|show|go|open|switch|jump|find|toon|waar|ga|montre|affiche|ou|va|mostra|dove|vai|apri|muestra|donde|ve|abre|mostre|visa|vis|hvor|nayta|missa|pokaz|gdzie|ukaz|kde|pokazi|arata|unde|mutasd|hol)\b/;
var CAMERA = /\b(kamera|kameras|camera|cameras|cam|cams|camera's|telecamera|telecamere|camara|camaras|kamerat|kameraer|kamery|kamere|camerele|kamerak)\b/;
var CAMERAS = /\b(kameras|cameras|cams|camera's|telecamere|camaras|kamerat|kameraer|kamery|kamere|camerele|kamerak|alle kamera|all camera)\b/;
var GENERIC = new Set(
  "leistung verbrauch strom energie sensor status zustand schalter steckdose stecker stromz\xE4hler z\xE4hler temperatur power consumption energy state switch plug socket outlet meter sensor temperature current puissance consommation prise potenza consumo presa potencia enchufe".split(" ")
);
var SYNONYMS = {
  washer: ["waschmaschine", "waschi", "W\xE4sche", "washer", "washing machine", "laundry"],
  dryer: ["trockner", "W\xE4schetrockner", "dryer", "tumble dryer"],
  dishwasher: ["Sp\xFClmaschine", "Sp\xFCler", "Geschirrsp\xFCler", "dishwasher"],
  fridge: ["K\xFChlschrank", "fridge", "refrigerator"],
  fridge_smart: ["K\xFChlschrank", "fridge", "refrigerator"],
  stove: ["herd", "kochfeld", "ofen", "stove", "cooktop", "oven", "hob"],
  oven: ["backofen", "ofen", "four", "oven"],
  tv_board: ["fernseher", "tv", "glotze", "fernsehen", "television", "telly"],
  tv_wall: ["fernseher", "tv", "glotze", "fernsehen", "television", "telly"],
  desk: ["schreibtisch", "computer", "pc", "rechner", "desk"],
  robot_vacuum: ["staubsauger", "saugroboter", "sauger", "roboter", "robot", "vacuum", "hoover"],
  pool_pump: ["poolpumpe", "pumpe", "pool pump", "pump"],
  pool_filter: ["filter", "sandfilter", "pool filter"],
  pool_heat_pump: ["Pool W\xE4rmepumpe", "W\xE4rmepumpe", "heat pump"],
  inverter: ["wechselrichter", "solar", "pv", "photovoltaik", "inverter", "solar inverter"],
  home_battery: ["speicher", "akku", "batterie", "stromspeicher", "battery", "home battery"],
  wallbox: ["wallbox", "ladestation", "auto laden", "charger", "car charger"],
  meter: ["Stromz\xE4hler", "Z\xE4hler", "Z\xE4hlerschrank", "meter", "electricity meter"],
  water_heater: ["warmwasser", "boiler", "warmwasserspeicher", "water heater", "hot water"],
  wifi_ap: ["wlan", "access point", "router", "wifi", "wi fi"],
  lamp_fan: ["ventilator", "deckenventilator", "fan", "ceiling fan"],
  radiator: ["heizung", "Heizk\xF6rper", "radiator", "heating"],
  ac_unit: ["klimaanlage", "klima", "Klimager\xE4t", "air conditioner", "ac", "aircon"],
  sofa: ["couch", "sofa"],
  sofa_l: ["couch", "sofa", "ecksofa"],
  sofa_u: ["couch", "sofa"],
  bed: ["bett", "bed"],
  waste_bin: ["M\xFClltonne", "tonne", "M\xFCll", "bin", "waste bin", "trash"],
  mailbox: ["briefkasten", "post", "mailbox", "letterbox"],
  awning: ["markise", "awning"],
  gate: ["tor", "hoftor", "gartentor", "portail", "portillon", "gate"],
  printer_3d: ["3d drucker", "drucker", "imprimante 3d", "imprimante", "3d printer", "printer"],
  fireplace: ["kamin", "ofen", "chemin\xE9e", "cheminee", "po\xEAle", "fireplace", "fire"],
  parking: ["auto", "wagen", "stellplatz", "car", "parking"],
  bbq: ["grill", "barbecue", "bbq", "plancha"],
  nest_hub: ["nest hub", "google hub", "smart display", "bildschirm", "\xE9cran"],
  led_strip: ["led", "led streifen", "lichtleiste", "led strip"],
  wall_socket: ["steckdose", "socket", "outlet"],
  wall_switch: ["lichtschalter", "schalter", "light switch", "switch"]
};
var COMPOUND_TAILS = ["kamera", "cam", "licht", "lampe", "leuchte", "tuer", "tur", "tor", "fenster", "steckdose", "schalter", "sensor", "heizung", "pumpe", "melder", "light", "lamp", "camera", "door", "window", "sensor"];
var split = (w2) => {
  for (const tail of COMPOUND_TAILS) {
    if (w2.length > tail.length + 2 && w2.endsWith(tail)) return [w2.slice(0, -tail.length), tail];
  }
  return [w2];
};
var words = (s4) => normalize(s4).split(" ").filter((w2) => w2.length > 1).flatMap(split);
function telling(name) {
  const all = words(name);
  const own = all.filter((w2) => !GENERIC.has(w2));
  return own.length ? own : all;
}
function showTarget(sentence, building, devices, alias) {
  const text = normalize(sentence);
  if (!text) return null;
  const asks = SHOW2.test(text);
  const said = new Set(words(text));
  const camWord = CAMERA.test(text) || [...said].some((w2) => CAMERA.test(w2));
  if (asks && CAMERAS.test(text) && devices.some((d3) => d3.camera)) return { kind: "cameras", name: "" };
  const place = findPlace(sentence, building, alias);
  let best = null;
  let bestScore = 0;
  let bestFull = false;
  let bestWords = [];
  for (const d3 of devices) {
    const inRoom = !!d3.room && ` ${text} `.includes(` ${normalize(d3.room)} `);
    for (const n4 of d3.names?.length ? d3.names : [d3.name]) {
      const own = telling(n4);
      if (!own.length) continue;
      const hit = own.filter((w2) => said.has(w2)).length;
      const full = hit === own.length;
      const camera = camWord && d3.camera && (hit > 0 || inRoom || devices.filter((x2) => x2.camera).length === 1);
      if (!full && !camera) continue;
      const score = hit + (inRoom ? 0.5 : 0) + (camera ? 1 : 0) + (full ? own.length : 0);
      if (score > bestScore) {
        best = d3;
        bestScore = score;
        bestFull = full;
        bestWords = own;
      }
    }
  }
  if (best && asks) {
    const roomWords = place && place.kind !== "house" ? new Set(words(place.name)) : null;
    const roomBetter = !!roomWords && !best.camera && (!bestFull || bestWords.every((w2) => roomWords.has(w2)));
    if (!roomBetter) return { kind: "device", id: best.id, entity: best.entity, name: best.name, camera: best.camera };
  }
  return showCommand(sentence, building, alias);
}
export {
  MicProbe,
  SYNONYMS,
  converse,
  listenOnce,
  showCommand,
  showTarget,
  speak
};
