import {
  LapSimulatorConfigService
} from "./chunk-5N6ZE7MA.js";
import {
  RacePositionService
} from "./chunk-JLOFOMRS.js";
import {
  LapService
} from "./chunk-PQBZRJZN.js";
import {
  takeUntilDestroyed,
  toObservable
} from "./chunk-2V5B626X.js";
import {
  Injectable,
  combineLatest,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-AM7K5Y7Q.js";

// src/app/lap-simulator/service/lap-simulator.service.ts
var LapSimulatorService = class _LapSimulatorService {
  lapService = inject(LapService);
  lapSimulatorConfigService = inject(LapSimulatorConfigService);
  racePositionService = inject(RacePositionService);
  normalizedCumulatedTimeLaps = signal(/* @__PURE__ */ new Map());
  shadowLaps = signal([]);
  futureLaps = signal([]);
  futureLapsWithPitNow = signal([]);
  virtualLastCumulatedTimeByRaceNumber = signal(/* @__PURE__ */ new Map());
  worker;
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-N6O37CAE.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.normalizedCumulatedTimeLaps.set(data.normalizedCumulatedTimeLaps);
        this.shadowLaps.set(data.shadowLaps);
        this.futureLaps.set(data.futureLaps);
        this.futureLapsWithPitNow.set(data.futureLapsWithPitNow);
        this.virtualLastCumulatedTimeByRaceNumber.set(data.virtualLastCumulatedTimeByRaceNumber);
      };
    }
    combineLatest({
      cumulatedTimeByRaceNumber: toObservable(this.lapService.cumulatedTimeByRaceNumber),
      pacesByRaceNumber: toObservable(this.lapService.pacesByRaceNumber),
      lastLapNumberByRaceNumber: toObservable(this.lapService.lastLapNumberByRaceNumber),
      lapSimulatorConfig: toObservable(this.lapSimulatorConfigService.lapSimulatorConfig),
      firstTeamRaceNumber: toObservable(this.racePositionService.firstTeamRaceNumber)
    }).pipe(takeUntilDestroyed()).subscribe(({ cumulatedTimeByRaceNumber, pacesByRaceNumber, lastLapNumberByRaceNumber, lapSimulatorConfig, firstTeamRaceNumber }) => {
      if (this.worker && lapSimulatorConfig) {
        this.worker.postMessage({
          cumulatedTimeByRaceNumber,
          pacesByRaceNumber,
          lastLapNumberByRaceNumber,
          lapSimulatorConfig,
          firstTeamRaceNumber
        });
      }
    });
  }
  static \u0275fac = function LapSimulatorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapSimulatorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapSimulatorService, factory: _LapSimulatorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapSimulatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LapSimulatorService
};
//# sourceMappingURL=chunk-J5ALJMDB.js.map
