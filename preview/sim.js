// Simulator of the preview page (local development only): creates test entities on the fly, with a value range, and
// lets them follow a sun level, so a field's per-module power sensors can get realistic values (0 … the module's peak).
// What is created stays in localStorage, so it survives the page reloading itself on every code change.

const KEY = "neonplan3d.sim";

const KINDS = {
  power: { label: "Capteur de puissance (W)", domain: "sensor", num: true, min: 0, max: 400, attrs: { device_class: "power", unit_of_measurement: "W", state_class: "measurement" } },
  temperature: { label: "Température (°C)", domain: "sensor", num: true, min: 15, max: 28, attrs: { device_class: "temperature", unit_of_measurement: "°C" } },
  climate: { label: "Climat / spa (°C)", domain: "climate", num: true, min: 10, max: 42, attrs: {} },
  switch: { label: "Interrupteur", domain: "switch" },
  fan: { label: "Ventilateur", domain: "fan" },
  percent: { label: "Pourcentage (%)", domain: "sensor", num: true, min: 0, max: 100, attrs: { unit_of_measurement: "%" } },
  status: { label: "Etat texte (imprimante : running / idle)", domain: "sensor" },
  light: { label: "Lumière", domain: "light" },
  binary: { label: "Capteur binaire", domain: "binary_sensor" },
};

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const slug = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

function stateOf(e) {
  const k = KINDS[e.kind];
  const base = { entity_id: e.id, attributes: { friendly_name: e.id.split(".")[1].replace(/_/g, " "), ...(k.attrs ?? {}) } };
  // a climate entity (a spa): its temperature is the slider, it heats while it is below 38 °C
  if (e.kind === "climate") {
    const t = Math.round(e.value * 10) / 10;
    return { ...base, state: "heat", attributes: { ...base.attributes, current_temperature: t, temperature: 38, hvac_action: t < 38 ? "heating" : "idle", hvac_modes: ["off", "heat"], min_temp: 10, max_temp: 40, target_temp_step: 0.5 } };
  }
  // a status word (a 3D printer's print status): "running" while on, "idle" while off
  if (e.kind === "status") return { ...base, state: e.value ? (e.text ?? "running") : "idle" };
  if (k.num) return { ...base, state: String(Math.round(e.value * 10) / 10) };
  if (e.kind === "light") return { ...base, state: e.value ? "on" : "off", attributes: { ...base.attributes, supported_color_modes: ["brightness"], color_mode: "brightness", ...(e.value ? { brightness: 200 } : {}) } };
  return { ...base, state: e.value ? "on" : "off" };
}

/** The cells ("row:column") of a solar field's modules, the ones switched off left out. */
function cellsOf(f) {
  const counts = f.layout?.length ? f.layout : Array.from({ length: Math.max(1, f.rows) }, () => Math.max(1, f.cols));
  const skip = new Set(f.skip ?? []);
  return counts.flatMap((n, r) => Array.from({ length: n }, (_, c) => `${r}:${c}`)).filter((cell) => !skip.has(cell));
}

export function installSim({ getHass, setHass, reset }) {
  let data = { open: false, sun: 0.7, run: true, flicker: true, entities: [] };
  try {
    data = { ...data, ...JSON.parse(localStorage.getItem(KEY) ?? "{}") };
  } catch {
    /* no storage */
  }
  const persist = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch {
      /* no storage */
    }
  };
  const apply = () => {
    const h = getHass();
    const states = { ...h.states };
    const entities = { ...h.entities };
    for (const e of data.entities) {
      states[e.id] = stateOf(e);
      entities[e.id] = { entity_id: e.id, area_id: null };
    }
    setHass({ ...h, states, entities });
    persist();
  };

  // the UI: a small button at the bottom right that opens the panel
  const root = document.createElement("div");
  root.style.cssText = "position:fixed;right:10px;bottom:10px;z-index:50;font:13px/1.35 Figtree,Roboto,sans-serif;color:#cfe9ff";
  document.body.append(root);
  const css = {
    box: "width:330px;max-height:72vh;overflow:auto;padding:12px;border-radius:14px;background:rgba(7,11,20,.95);border:1px solid rgba(0,229,255,.45);box-shadow:0 0 18px rgba(0,229,255,.25)",
    btn: "background:#0b2a3a;color:#cfe9ff;border:1px solid rgba(0,229,255,.45);border-radius:8px;padding:5px 9px;cursor:pointer;font:inherit",
    inp: "background:#07101c;color:#cfe9ff;border:1px solid rgba(0,229,255,.3);border-radius:6px;padding:4px 6px;font:inherit;min-width:0",
  };
  const el = (html) => Object.assign(document.createElement("div"), { innerHTML: html }).firstElementChild;

  const addEntity = (e) => {
    data.entities = [...data.entities.filter((x) => x.id !== e.id), e];
  };

  // sensors for every module of every solar field: 0 … the field's Wp, each module with its own shading
  async function panelSensors(assign) {
    const hass = getHass();
    const { building } = await hass.callWS({ type: "neonplan3d/building/get" });
    const fields = building.settings.roof.solar ?? [];
    let made = 0;
    for (const f of fields) {
      const peak = f.wp ?? 400;
      const mapping = { ...(f.module_entities ?? {}) };
      for (const cell of cellsOf(f)) {
        const [r, c] = cell.split(":").map(Number);
        const id = `sensor.test_${slug(f.name || f.id)}_${r + 1}_${c + 1}`;
        const old = data.entities.find((x) => x.id === id);
        addEntity({ id, kind: "power", min: 0, max: peak, value: old?.value ?? peak * data.sun, auto: true, factor: old?.factor ?? 0.65 + 0.35 * Math.random() });
        mapping[cell] = id;
        made++;
      }
      if (assign) f.module_entities = mapping;
    }
    if (assign && fields.length) await hass.callWS({ type: "neonplan3d/building/save", building });
    tick(true);
    return made;
  }

  // sun level and flicker move the automatic sensors, within their range
  function tick(force) {
    if (!force && !data.run) return;
    let changed = false;
    for (const e of data.entities) {
      if (!e.auto || !KINDS[e.kind].num) continue;
      const jitter = data.flicker ? 0.93 + 0.07 * Math.random() : 1;
      e.value = clamp(e.min + (e.max - e.min) * data.sun * (e.factor ?? 1) * jitter, e.min, e.max);
      changed = true;
    }
    if (changed || force) apply();
  }
  setInterval(() => tick(false), 2500);

  function render() {
    root.replaceChildren();
    if (!data.open) {
      const open = el(`<button style="${css.btn}">🧪 Simulateur</button>`);
      open.onclick = () => ((data.open = true), persist(), render());
      root.append(open);
      return;
    }
    const box = el(`<div style="${css.box}"></div>`);
    const head = el(`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b>🧪 Simulateur</b><button style="${css.btn}">×</button></div>`);
    head.querySelector("button").onclick = () => ((data.open = false), persist(), render());
    box.append(head);

    // the sun: every automatic sensor follows it
    const sun = el(`<div style="margin-bottom:10px">☀ Ensoleillement : <b>${Math.round(data.sun * 100)} %</b>
      <input type="range" min="0" max="100" value="${Math.round(data.sun * 100)}" style="width:100%">
      <label><input type="checkbox" ${data.run ? "checked" : ""}> suit le soleil</label> · <label><input type="checkbox" ${data.flicker ? "checked" : ""} data-f> scintillement</label></div>`);
    const [range] = sun.querySelectorAll("input[type=range]");
    range.oninput = () => {
      data.sun = range.value / 100;
      sun.querySelector("b").textContent = `${range.value} %`;
      tick(true);
    };
    const [run, flick] = sun.querySelectorAll("input[type=checkbox]");
    run.onchange = () => ((data.run = run.checked), persist());
    flick.onchange = () => ((data.flicker = flick.checked), persist());
    box.append(sun);

    // the sensors of the single modules
    const panels = el(`<div style="margin-bottom:10px"><div style="margin-bottom:4px"><b>Panneaux solaires</b></div>
      <div style="opacity:.8;margin-bottom:6px">Un capteur de puissance par panneau, de 0 à la puissance crête du champ.</div>
      <button style="${css.btn}" data-a>Créer et assigner aux panneaux</button> <button style="${css.btn}" data-b>Créer seulement</button> <span data-m style="opacity:.8"></span></div>`);
    const msg = panels.querySelector("[data-m]");
    for (const [attr, assign] of [["data-a", true], ["data-b", false]]) {
      panels.querySelector(`[${attr}]`).onclick = async () => {
        const n = await panelSensors(assign);
        msg.textContent = n ? `${n} capteurs créés` : "aucun champ solaire";
        render();
      };
    }
    box.append(panels);

    // any other entity
    const form = el(`<form style="margin-bottom:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px"><div style="grid-column:1/3"><b>Nouvelle entité</b></div>
      <select style="${css.inp};grid-column:1/3">${Object.entries(KINDS).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join("")}</select>
      <input placeholder="nom (ex. salon_prise)" style="${css.inp};grid-column:1/3" required>
      <input type="number" placeholder="min" style="${css.inp}" value="0"><input type="number" placeholder="max" style="${css.inp}" value="400">
      <button style="${css.btn};grid-column:1/3">Créer</button></form>`);
    const [kind, name, min, max] = form.querySelectorAll("select,input");
    const syncRange = () => {
      const k = KINDS[kind.value];
      min.disabled = max.disabled = !k.num;
      if (k.num) [min.value, max.value] = [k.min, k.max];
    };
    kind.onchange = syncRange;
    syncRange();
    form.onsubmit = (ev) => {
      ev.preventDefault();
      const k = KINDS[kind.value];
      const lo = Number(min.value);
      const hi = Math.max(lo, Number(max.value));
      addEntity({ id: `${k.domain}.test_${slug(name.value)}`, kind: kind.value, min: lo, max: hi, value: k.num ? (lo + hi) / 2 : 1, auto: false, factor: 1 });
      apply();
      render();
    };
    box.append(form);

    // what exists: a slider (or a switch) for each, a click on the name copies the entity id
    const list = el(`<div><div style="margin-bottom:4px"><b>Entités de test (${data.entities.length})</b></div></div>`);
    for (const e of data.entities) {
      const k = KINDS[e.kind];
      const row = el(`<div style="display:grid;grid-template-columns:1fr auto;gap:2px 8px;align-items:center;margin-bottom:5px"><span title="copier l'identifiant" style="cursor:copy;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.id}</span><button style="${css.btn};padding:1px 6px">✕</button></div>`);
      row.firstElementChild.onclick = () => navigator.clipboard?.writeText(e.id);
      row.lastElementChild.onclick = () => ((data.entities = data.entities.filter((x) => x.id !== e.id)), persist(), setHass(withoutEntity(getHass(), e.id)), render());
      const input = k.num
        ? el(`<input type="range" min="${e.min}" max="${e.max}" step="${(e.max - e.min) / 200 || 1}" value="${e.value}" style="grid-column:1/3">`)
        : el(`<label style="grid-column:1/3"><input type="checkbox" ${e.value ? "checked" : ""}> allumé</label>`);
      const field = input.matches("input") ? input : input.querySelector("input");
      field.oninput = () => {
        // a hand-set value leaves the sun
        e.auto = false;
        e.value = k.num ? Number(field.value) : field.checked ? 1 : 0;
        apply();
        if (k.num) row.firstElementChild.textContent = `${e.id} · ${Math.round(e.value)}`;
      };
      if (k.num) row.firstElementChild.textContent = `${e.id} · ${Math.round(e.value)}${e.auto ? " ☀" : ""}`;
      row.append(input);
      list.append(row);
    }
    box.append(list);

    const clear = el(`<div style="margin-top:8px;display:flex;gap:6px"><button style="${css.btn}" data-c>Tout supprimer</button><button style="${css.btn}" data-r title="Efface le simulateur et les modifications du plan faites dans cette page">Réinitialiser la page</button></div>`);
    clear.querySelector("[data-c]").onclick = () => {
      data.entities = [];
      persist();
      location.reload();
    };
    clear.querySelector("[data-r]").onclick = () => reset();
    box.append(clear);
    root.append(box);
  }

  function withoutEntity(h, id) {
    const { [id]: _s, ...states } = h.states;
    const { [id]: _e, ...entities } = h.entities;
    return { ...h, states, entities };
  }

  apply();
  render();
  // for the console: window.fp3dSim.apply() after changing data by hand
  window.fp3dSim = { data, apply, panelSensors };
}
