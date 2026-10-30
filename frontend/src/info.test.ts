import assert from "node:assert/strict";
import { test } from "node:test";
import { findForecast, findTempo, infoTiles, kwhOf, tempoColor, tempoOf } from "./info.ts";
import { emptyBuilding } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });
const hassWith = (states: HassEntity[]): HomeAssistant => ({
  language: "fr",
  connection: {} as HomeAssistant["connection"],
  callWS: async () => undefined as never,
  callService: async () => undefined,
  entities: {},
  states: Object.fromEntries(states.map((s) => [s.entity_id, s])),
});

test("Tempo colours are read from French and English states and from an attribute", () => {
  assert.equal(tempoColor("bleu"), "blue");
  assert.equal(tempoColor("BLUE"), "blue");
  assert.equal(tempoColor("Jour_Blanc"), "white");
  assert.equal(tempoColor("rouge"), "red");
  assert.equal(tempoColor("unknown"), null);
  assert.equal(tempoColor("bluetooth"), null);
  assert.equal(tempoOf(st("sensor.x", "unknown", { couleur: "Rouge" })), "red");
});

test("Tempo entities are found by name: today and tomorrow apart", () => {
  const hass = hassWith([st("sensor.rte_tempo_couleur_aujourd_hui", "bleu"), st("sensor.rte_tempo_couleur_demain", "rouge"), st("sensor.autre", "bleu")]);
  assert.deepEqual(findTempo(hass, { tempo_today: null, tempo_tomorrow: null }), { today: "sensor.rte_tempo_couleur_aujourd_hui", tomorrow: "sensor.rte_tempo_couleur_demain" });
  // a chosen entity wins
  assert.equal(findTempo(hass, { tempo_today: "sensor.autre", tempo_tomorrow: null }).today, "sensor.autre");
});

test("the solar forecast: day totals of Forecast.Solar and Solcast, not the remaining part or the peak", () => {
  const kwh = { unit_of_measurement: "kWh" };
  const hass = hassWith([
    st("sensor.energy_production_today", "14.2", kwh),
    st("sensor.energy_production_today_remaining", "6", kwh),
    st("sensor.energy_production_tomorrow", "9800", { unit_of_measurement: "Wh" }),
    st("sensor.power_production_now", "1200", { unit_of_measurement: "W" }),
  ]);
  const f = findForecast(hass, { forecast_today: null, forecast_tomorrow: null });
  assert.equal(f.today, "sensor.energy_production_today");
  assert.equal(f.tomorrow, "sensor.energy_production_tomorrow");
  assert.equal(kwhOf(hass.states[f.tomorrow!]), 9.8);
  const solcast = hassWith([st("sensor.solcast_pv_forecast_forecast_today", "11.5", kwh), st("sensor.solcast_pv_forecast_forecast_tomorrow", "7.1", kwh), st("sensor.solcast_pv_forecast_peak_forecast_today", "3000", { unit_of_measurement: "W" })]);
  assert.deepEqual(findForecast(solcast, { forecast_today: null, forecast_tomorrow: null }), { today: "sensor.solcast_pv_forecast_forecast_today", tomorrow: "sensor.solcast_pv_forecast_forecast_tomorrow" });
});

test("the tiles show what exists, and nothing else", () => {
  const b = emptyBuilding();
  const none = infoTiles(hassWith([]), b);
  assert.equal(none.tempo, null);
  assert.equal(none.forecast, null);
  assert.equal(none.power, null);
  b.energy.consumption = "sensor.maison";
  const hass = hassWith([
    st("sensor.maison", "1200", { unit_of_measurement: "W", device_class: "power" }),
    st("sensor.tempo_aujourd_hui", "blanc"),
    st("sensor.tempo_demain", "rouge"),
    st("sensor.energy_production_today", "12", { unit_of_measurement: "kWh" }),
  ]);
  const tiles = infoTiles(hass, b);
  assert.deepEqual([tiles.tempo?.today, tiles.tempo?.tomorrow], ["white", "red"]);
  assert.equal(tiles.power?.house, 1200);
  assert.deepEqual([tiles.forecast?.today, tiles.forecast?.tomorrow], [12, null]);
});
