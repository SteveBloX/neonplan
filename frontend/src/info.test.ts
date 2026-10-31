import assert from "node:assert/strict";
import { test } from "node:test";
import { energyDayFrom, energyDayIds } from "./energy.ts";
import { dayEnergy, findForecast, findTempo, heaterTiles, infoTiles, kwhOf, tempoColor, tempoOf } from "./info.ts";
import { emptyBuilding, newFloor, type Furniture } from "./model.ts";
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

test("a water heater's card shows what its settings tick, from its sensors or the device itself", () => {
  const b = emptyBuilding();
  const floor = { ...newFloor("f", "EG", 0), furniture: [] as Furniture[] };
  b.floors.push(floor);
  const heater = (patch: Partial<Furniture>) => ({ id: "h1", type: "water_heater", name: "Cumulus", ...patch }) as Furniture;
  const hass = hassWith([
    st("water_heater.cumulus", "eco", { current_temperature: 51 }),
    st("sensor.fill", "0.4"),
    st("sensor.fill_pct", "65", { unit_of_measurement: "%" }),
  ]);
  floor.furniture = [heater({ entity: "water_heater.cumulus", water_fill: "sensor.fill_pct" })];
  assert.deepEqual(heaterTiles(hass, b), [], "nothing ticked: no card");
  floor.furniture = [heater({ entity: "water_heater.cumulus", water_fill: "sensor.fill_pct", info_temp: true })];
  assert.deepEqual(heaterTiles(hass, b), [{ id: "h1", name: "Cumulus", temp: 51, unit: "°C", fill: null }]);
  floor.furniture = [heater({ entity: "water_heater.cumulus", water_fill: "sensor.fill_pct", info_temp: true, info_fill: true })];
  assert.equal(heaterTiles(hass, b)[0].fill, 0.65);
  floor.furniture = [heater({ water_fill: "sensor.fill", info_fill: true })];
  assert.equal(heaterTiles(hass, b)[0].fill, 0.4, "a fraction stays a fraction");
  floor.furniture = [heater({ info_temp: true })];
  assert.deepEqual(heaterTiles(hass, b), [], "ticked, but nothing to show");
});

test("today's energy: consumption is what came in less what went out", () => {
  const prefs = {
    energy_sources: [
      { type: "grid", flow_from: [{ stat_energy_from: "sensor.import" }], flow_to: [{ stat_energy_to: "sensor.export" }] },
      { type: "solar", stat_energy_from: "sensor.pv" },
      { type: "battery", stat_energy_from: "sensor.bat_out", stat_energy_to: "sensor.bat_in" },
    ],
  };
  const ids = energyDayIds(prefs);
  const day = energyDayFrom(ids, new Map([["sensor.import", 6], ["sensor.export", 3], ["sensor.pv", 14], ["sensor.bat_out", 2], ["sensor.bat_in", 4]]));
  assert.deepEqual(day, { consumption: 15, solar: 14, grid: 6 });
  // without a solar source or a battery
  const grid = energyDayFrom(energyDayIds({ energy_sources: [{ type: "grid", flow_from: [{ stat_energy_from: "sensor.import" }] }] }), new Map([["sensor.import", 9.5]]));
  assert.deepEqual(grid, { consumption: 9.5, solar: null, grid: 9.5 });
  assert.deepEqual(energyDayFrom(energyDayIds({}), new Map()), { consumption: null, solar: null, grid: null });
});

test("the day card takes the chosen sensors first, the energy dashboard for the rest", () => {
  const hass = hassWith([st("sensor.pv_today", "8200", { unit_of_measurement: "Wh" }), st("sensor.broken", "unavailable", { unit_of_measurement: "kWh" })]);
  const none = { day_consumption: null, day_solar: null, day_grid: null };
  assert.equal(dayEnergy(hass, none, null), null);
  assert.deepEqual(dayEnergy(hass, { ...none, day_solar: "sensor.pv_today" }, { consumption: 15, solar: 14, grid: 6 }), { consumption: 15, solar: 8.2, grid: 6 });
  assert.deepEqual(dayEnergy(hass, { ...none, day_solar: "sensor.broken" }, { consumption: 15, solar: 14, grid: 6 }), { consumption: 15, solar: 14, grid: 6 });
  assert.deepEqual(dayEnergy(hass, { ...none, day_solar: "sensor.pv_today" }, null), { consumption: null, solar: 8.2, grid: null });
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
