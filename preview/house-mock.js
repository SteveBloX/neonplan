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
  const ids = [...new Set([...JSON.stringify(building).matchAll(ENTITY_ID)].map((m) => m[1]))].sort();
  const states = {};
  const entities = {};
  ids.forEach((id, i) => {
    states[id] = invent(id, i);
    entities[id] = { entity_id: id, area_id: null };
  });
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
      return state("disarmed");
    case "sun":
      return state("above_horizon", { elevation: 32, azimuth: 205 });
    default:
      return state("off");
  }
}
