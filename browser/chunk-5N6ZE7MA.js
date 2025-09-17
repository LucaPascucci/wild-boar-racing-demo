import {
  FirestoreService
} from "./chunk-PQBZRJZN.js";
import {
  collection,
  collectionData,
  takeUntilDestroyed
} from "./chunk-2V5B626X.js";
import {
  Injectable,
  map,
  setClassMetadata,
  signal,
  takeUntil,
  ɵɵdefineInjectable
} from "./chunk-AM7K5Y7Q.js";

// src/app/lap-simulator/service/lap-simulator-config.service.ts
var LapSimulatorConfigService = class _LapSimulatorConfigService extends FirestoreService {
  collectionPath = "/lap-simulator-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  lapSimulatorConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.lapSimulatorConfig.set(configs.at(0));
      }
    });
  }
  updateSimulatedLaps(value) {
    const config = this.lapSimulatorConfig();
    if (config) {
      config.simulatedLaps = value;
      this.updateDataWithMessage(config.id, config, "simulated laps");
    }
  }
  updateToOvertakeLostTime(value) {
    const config = this.lapSimulatorConfig();
    if (config) {
      config.toOvertakeLostTimeMilliseconds = value;
      this.updateDataWithMessage(config.id, config, "to overtake lost time");
    }
  }
  updateBeOvertakenLostTime(value) {
    const config = this.lapSimulatorConfig();
    if (config) {
      config.beOvertakenLostTimeMilliseconds = value;
      this.updateDataWithMessage(config.id, config, "be overtaken lost time");
    }
  }
  updateOvertakeTimeThreshold(value) {
    const config = this.lapSimulatorConfig();
    if (config) {
      config.overtakeThresholdMilliseconds = value;
      this.updateDataWithMessage(config.id, config, "overtake time threshold");
    }
  }
  updateReferenceRaceNumber(value) {
    const config = this.lapSimulatorConfig();
    if (config) {
      config.referenceRaceNumber = value;
      this.updateDataWithMessage(config.id, config, "reference race number");
    }
  }
  updateNextPitMilliseconds(value) {
    const config = this.lapSimulatorConfig();
    if (config) {
      config.nextPitMilliseconds = value;
      this.updateDataWithMessage(config.id, config, "next pit milliseconds");
    }
  }
  updateTimeLostThroughPitMilliseconds(value) {
    const config = this.lapSimulatorConfig();
    if (config) {
      config.timeLostThroughPitMilliseconds = value;
      this.updateDataWithMessage(config.id, config, "time lost through pit milliseconds");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function LapSimulatorConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapSimulatorConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapSimulatorConfigService, factory: _LapSimulatorConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapSimulatorConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LapSimulatorConfigService
};
//# sourceMappingURL=chunk-5N6ZE7MA.js.map
