// Loads a real plan export (private/house.json, not in git) into the preview and invents a Home Assistant
// state for every entity the plan links, so lights, covers, climates and media players can be switched.

const DOMAINS = [
  "light", "switch", "cover", "climate", "media_player", "binary_sensor", "sensor", "camera", "lock", "fan", "weather", "person",
  "device_tracker", "vacuum", "input_boolean", "input_number", "alarm_control_panel", "scene", "script", "calendar", "sun", "event",
  "water_heater", "humidifier", "valve", "update", "number", "select", "button", "remote", "siren", "plant", "lawn_mower",
];
const ENTITY_ID = new RegExp(`"((?:${DOMAINS.join("|")})\\.[a-z0-9_]+)"`, "g");

/** A plan export ({format: "neonplan3d", building}) or a bare building; null when the file is missing. */
export async function loadHouse(url) {
  let res;
  try {
    res = await fetch(url);
  } catch {
    return null;
  }
  if (!res.ok) return null;
  const file = await res.json();
  const building = file?.format === "neonplan3d" ? file.building : file;
  if (!building?.floors || !building.settings) throw new Error(`${url} is no NeonPlan 3D plan`);
  for (const f of building.floors) f.background = null;
  // ?kitchentest: the first fridge gets a door sensor and an oven stands beside it (to try the openable door and the oven)
  if (new URLSearchParams(location.search).has("kitchentest")) {
    for (const floor of building.floors) {
      const fr = floor.furniture.find((f) => f.type === "fridge");
      if (!fr) continue;
      fr.door_left = "binary_sensor.test_kuehlschrank_tuer";
      const a = (fr.rotation * Math.PI) / 180;
      floor.furniture.push({ id: "oven_test", type: "oven", x: fr.x + Math.cos(a) * 0.65, z: fr.z + Math.sin(a) * 0.65, rotation: fr.rotation, w: 0.6, d: 0.62, h: 0.92, variant: null });
      break;
    }
  }
  // ?ridgetest: the second roof section continues the first one's ridge (pitches as alignRidge sets them); &hiprear gives it a hip at its rear end
  if (new URLSearchParams(location.search).has("ridgetest")) {
    const [, wing] = building.settings.roof.sections ?? [];
    if (wing) {
      Object.assign(wing, { pitch_a: 35.9, pitch_b: 28.7 });
      if (new URLSearchParams(location.search).has("hiprear")) wing.end_u0 = "hip";
      if (new URLSearchParams(location.search).has("bridge")) wing.bridge = Number(new URLSearchParams(location.search).get("bridge")) || 2;
    }
  }
  // ?pergolatest: a glazed pergola (transparent plates) over the first terrace, an alarm panel and a motion sensor placed in the first room
  if (new URLSearchParams(location.search).has("pergolatest")) {
    const floor = building.floors[0];
    const terrace = (floor.outdoor ?? []).find((a) => a.type === "terrace");
    if (terrace) floor.outdoor.push({ ...terrace, id: "outdoor_pergola_test", type: "pergola", glazed: true, height: 2.4, name: null, area_id: null });
    const room = floor.rooms.find((r) => r.name === "Salon") ?? floor.rooms[0];
    const xs = room.points.map((p) => p[0]);
    const zs = room.points.map((p) => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    floor.placements.push({ entity_id: "alarm_control_panel.somfy_test", x: cx - 0.4, z: cz, show_name: true }, { entity_id: "binary_sensor.somfy_mouvement_test", x: cx + 0.4, z: cz, show_name: true });
  }
  const ids = [...new Set([...JSON.stringify(building).matchAll(ENTITY_ID)].map((m) => m[1]))].sort();
  const states = {};
  const entities = {};
  ids.forEach((id, i) => {
    states[id] = invent(id, i);
    entities[id] = { entity_id: id, area_id: null };
  });
  // ?gazebotest[=canvas|plexi|wood|none]: a square gazebo (3 × 3 m) on the lawn behind the house; with ?weather=rainy the rain shows on it
  if (new URLSearchParams(location.search).has("gazebotest")) {
    const floor = building.floors[0];
    const cover = new URLSearchParams(location.search).get("gazebotest") || "canvas";
    floor.outdoor = [...(floor.outdoor ?? []), { id: "outdoor_gazebo_test", type: "gazebo", points: [[7, 0.3], [10, 0.3], [10, 3.3], [7, 3.3]], cover, rise: 1, height: null, outline: true, offset: 0, slope: 0, slope_dir: "x", open: false, bracing: false, cut: false, pool_shape: null, above: false, depth: null, rim: null, pool: null, name: null, area_id: null }];
  }
  // ?mediatest[=screen]: a Google Nest Hub and a TV board in the living room, both playing; the hub with a panel (or on its screen)
  if (new URLSearchParams(location.search).has("mediatest")) {
    const floor = building.floors[0];
    const room = floor.rooms.find((r) => r.name === "Salon") ?? floor.rooms[0];
    const xs = room.points.map((p) => p[0]);
    const zs = room.points.map((p) => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    const onScreen = new URLSearchParams(location.search).get("mediatest") === "screen";
    floor.furniture.push(
      { id: "media_test_hub", type: "nest_hub", x: cx, z: cz, rotation: 0, w: 0.18, d: 0.1, h: 0.12, variant: null, entity: "media_player.test_nest_hub", media_card: true, ...(onScreen ? { media_on_screen: true } : {}) },
      { id: "media_test_table", type: "table", x: cx, z: cz, rotation: 0, w: 1.0, d: 0.7, h: 0.75, variant: null },
      { id: "media_test_tv", type: "tv_board", x: cx + 1.6, z: cz, rotation: 0, w: 1.4, d: 0.42, h: 0.5, variant: null, entity: "media_player.test_tv", media_card: true, ...(onScreen ? { media_on_screen: true } : {}) },
    );
    const art = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" fill="#7a2cff"/><circle cx="150" cy="150" r="90" fill="#ffb347"/><text x="150" y="170" font-size="60" text-anchor="middle" fill="#220">♪</text></svg>');
    for (const [id, title] of [["media_player.test_nest_hub", "Test Song"], ["media_player.test_tv", "Film de test"]]) {
      states[id] = { entity_id: id, state: "playing", attributes: { friendly_name: id.split(".")[1].replace(/_/g, " "), media_title: title, media_artist: "Artist", entity_picture: art, volume_level: 0.4, supported_features: 152463 } };
      entities[id] = { entity_id: id, area_id: null };
    }
  }
  // ?printertest[=<percent>]: a 3D printer on a table in the living room, printing; its real part is a made-up vase (see the printer/model call)
  if (new URLSearchParams(location.search).has("printertest")) {
    const floor = building.floors[0];
    const room = floor.rooms.find((r) => r.name === "Salon") ?? floor.rooms[0];
    const xs = room.points.map((p) => p[0]);
    const zs = room.points.map((p) => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    const percent = new URLSearchParams(location.search).get("printertest") || "60";
    floor.furniture.push({ id: "printer_test", type: "printer_3d", x: cx, z: cz, rotation: 0, w: 0.42, d: 0.42, h: 0.46, variant: null, entity: "sensor.test_p1s_print_status", printer_model: true });
    const add = (id, state, attributes = {}) => {
      states[id] = { entity_id: id, state, attributes: { friendly_name: title(id), ...attributes } };
      entities[id] = { entity_id: id, area_id: null };
    };
    add("sensor.test_p1s_print_status", percent === "100" ? "finish" : "running");
    add("sensor.test_p1s_print_progress", percent === "100" ? "100" : percent, { unit_of_measurement: "%" });
    add("sensor.test_p1s_task_name", "Vase");
  }
  // ?outdoortest: one of each piece of outdoor furniture on the lawn behind the house
  if (new URLSearchParams(location.search).has("outdoortest")) {
    const floor = building.floors[0];
    const sizes = { bar_l: [2.4, 2.0, 1.05], garden_chair: [0.6, 0.62, 0.85], garden_sofa: [1.9, 0.85, 0.8], lounger: [0.7, 1.95, 0.4], coffee_table_round: [0.7, 0.7, 0.4], parasol: [2.4, 2.4, 2.4], bbq: [0.9, 0.55, 1.0], bar_stool: [0.42, 0.42, 0.75] };
    const at = [["bar_l", 4.5, 0.6, 0], ["bar_stool", 6.0, 1.9, 0], ["bar_stool", 6.7, 1.9, 0], ["garden_sofa", 9.5, 0.7, 0], ["coffee_table_round", 9.5, 2.0, 0], ["garden_chair", 8.4, 2.3, 200], ["garden_chair", 10.7, 2.3, 160], ["lounger", 12.2, 1.6, 0], ["parasol", 12.6, 4.2, 0], ["bbq", 15.4, 1.0, 0]];
    at.forEach(([type, x, z, rotation], i) => floor.furniture.push({ id: `out_test_${i}`, type, x, z, rotation, w: sizes[type][0], d: sizes[type][1], h: sizes[type][2], variant: null }));
  }
  // ?infotest: Tempo colours and a solar forecast, to try the info tiles under the card (otherwise the tiles stay away)
  if (new URLSearchParams(location.search).has("infotest")) {
    const add = (id, state, attributes = {}) => {
      states[id] = { entity_id: id, state, attributes: { friendly_name: id.split(".")[1].replace(/_/g, " "), ...attributes } };
      entities[id] = { entity_id: id, area_id: null };
    };
    add("sensor.rte_tempo_couleur_aujourd_hui", "bleu");
    add("sensor.rte_tempo_couleur_demain", "rouge");
    add("sensor.energy_production_today", "14.2", { unit_of_measurement: "kWh", device_class: "energy" });
    add("sensor.energy_production_tomorrow", "9.8", { unit_of_measurement: "kWh", device_class: "energy" });
    building.energy = { ...building.energy, consumption: "sensor.test_maison_puissance" };
    add("sensor.test_maison_puissance", "1340", { unit_of_measurement: "W", device_class: "power" });
  }
  // sun.sun is needed for the sun and the day/night look even when the plan does not link it
  states["sun.sun"] ??= invent("sun.sun", 0);
  entities["sun.sun"] ??= { entity_id: "sun.sun", area_id: null };
  return { building, states, entities };
}

const has = (id, ...words) => words.some((w) => id.includes(w));
const title = (id) => id.split(".")[1].replace(/_/g, " ");

/** A plausible state for an entity, guessed from its domain and name (French, German and English names). */
function invent(id, index) {
  const [domain, object] = id.split(".");
  const state = (value, attributes = {}) => ({ entity_id: id, state: value, attributes: { friendly_name: title(id), ...attributes } });
  const on = index % 2 === 0;
  switch (domain) {
    case "light":
      return state(on ? "on" : "off", { supported_color_modes: ["color_temp", "hs"], color_mode: "color_temp", min_color_temp_kelvin: 2200, max_color_temp_kelvin: 6500, ...(on ? { brightness: 180, color_temp_kelvin: 2700 } : {}) });
    case "switch":
    case "input_boolean":
      return state(on ? "on" : "off");
    case "fan":
      return state(on ? "on" : "off", { percentage: 50, percentage_step: 25 });
    case "cover":
      return state("open", { current_position: 100, supported_features: 15, ...(has(object, "garage") ? { device_class: "garage" } : {}) });
    case "climate":
      return state("heat", { current_temperature: 21.2, temperature: 21.5, hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", min_temp: 7, max_temp: 30, target_temp_step: 0.5 });
    case "media_player":
      return state(on ? "playing" : "idle", { device_class: has(object, "tv", "oled") ? "tv" : "speaker", media_title: "Titre de test", volume_level: 0.3, ...(on ? { app_name: "Test" } : {}) });
    case "binary_sensor": {
      const device_class = has(object, "fenetre", "fenster", "window") ? "window" : has(object, "porte", "tuer", "door") ? "door" : has(object, "mouvement", "motion", "bewegung") ? "motion" : has(object, "presence", "praesenz", "occupan") ? "occupancy" : has(object, "fumee", "rauch", "smoke") ? "smoke" : undefined;
      return state("off", device_class ? { device_class } : {});
    }
    case "sensor":
      if (has(object, "temp")) return state("21.4", { device_class: "temperature", unit_of_measurement: "°C" });
      if (has(object, "humid", "feucht")) return state("48", { device_class: "humidity", unit_of_measurement: "%" });
      if (has(object, "soc", "batterie_niveau", "battery_level", "ladestand", "_cap")) return state("64", { device_class: "battery", unit_of_measurement: "%" });
      if (has(object, "puissance", "power", "leistung", "watt", "conso")) return state(String(80 + ((index * 137) % 900)), { device_class: "power", unit_of_measurement: "W" });
      if (has(object, "energie", "energy", "kwh")) return state("1234.5", { device_class: "energy", unit_of_measurement: "kWh", state_class: "total_increasing" });
      return state("1");
    case "camera":
      return state("idle");
    case "lock":
      return state("locked");
    case "weather":
      return state("sunny");
    case "person":
      return state("home");
    case "device_tracker":
      return state("home");
    case "vacuum":
      return state("docked", { battery_level: 80 });
    case "alarm_control_panel":
      return state(has(object, "test") ? "armed_away" : "disarmed");
    case "sun":
      return state("above_horizon", { elevation: 32, azimuth: 205 });
    default:
      return state("off");
  }
}
