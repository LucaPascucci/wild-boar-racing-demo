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

// src/app/driver/service/driver-config.service.ts
var DriverConfigService = class _DriverConfigService extends FirestoreService {
  collectionPath = "/driver-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  driverConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.driverConfig.set(configs.at(0));
      }
    });
  }
  updateMinDriverChange(value) {
    const config = this.driverConfig();
    if (config) {
      config.minDriverChange = value;
      this.updateDataWithMessage(config.id, config, "min driver change");
    }
  }
  updateMinDriverOnTrackMinute(value) {
    const config = this.driverConfig();
    if (config) {
      config.minDriverOnTrackMinute = value;
      this.updateDataWithMessage(config.id, config, "min driver on track minute");
    }
  }
  updateMaxDriverOnTrackMinute(value) {
    const config = this.driverConfig();
    if (config) {
      config.maxDriverOnTrackMinute = value;
      this.updateDataWithMessage(config.id, config, "max driver on track minute");
    }
  }
  updateWarningDriverOnTrackThresholdMinute(value) {
    const config = this.driverConfig();
    if (config) {
      config.warningDriverOnTrackThresholdMinute = value;
      this.updateDataWithMessage(config.id, config, "warning driver on track threshold minute");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function DriverConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DriverConfigService, factory: _DriverConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pit/service/pit-config.service.ts
var PitConfigService = class _PitConfigService extends FirestoreService {
  collectionPath = "/pit-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  pitConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.pitConfig.set(configs.at(0));
      }
    });
  }
  updateMinPitSeconds(value) {
    const config = this.pitConfig();
    if (config) {
      config.minPitSeconds = value;
      this.updateDataWithMessage(config.id, config, "min pit seconds");
    }
  }
  updateMinPitWithTyreChangeSeconds(value) {
    const config = this.pitConfig();
    if (config) {
      config.minPitWithTyreChangeSeconds = value;
      this.updateDataWithMessage(config.id, config, "min pit with tyre change seconds");
    }
  }
  updateMinTotalPitMinute(value) {
    const config = this.pitConfig();
    if (config) {
      config.minTotalPitMinute = value;
      this.updateDataWithMessage(config.id, config, "min total pit minute");
    }
  }
  updateMaxPitSeconds(value) {
    const config = this.pitConfig();
    if (config) {
      config.maxPitSeconds = value;
      this.updateDataWithMessage(config.id, config, "max pit seconds");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function PitConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PitConfigService, factory: _PitConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  DriverConfigService,
  PitConfigService
};
//# sourceMappingURL=chunk-GDICOAUJ.js.map
