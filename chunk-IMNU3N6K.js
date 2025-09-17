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

// src/app/steering-wheel/service/steering-wheel-config.service.ts
var SteeringWheelConfigService = class _SteeringWheelConfigService extends FirestoreService {
  collectionPath = "/steering-wheel-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  steeringWheelConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.steeringWheelConfig.set(configs.at(0));
      }
    });
  }
  updateMessageDurationSeconds(value) {
    const config = this.steeringWheelConfig();
    if (config) {
      config.messageDurationSeconds = value;
      this.updateDataWithMessage(config.id, config, "message duration");
    }
  }
  updateMessageInvertColorIntervalMilliseconds(value) {
    const config = this.steeringWheelConfig();
    if (config) {
      config.messageInvertColorIntervalMilliseconds = value;
      this.updateDataWithMessage(config.id, config, "message invert color interval");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function SteeringWheelConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SteeringWheelConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SteeringWheelConfigService, factory: _SteeringWheelConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SteeringWheelConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SteeringWheelConfigService
};
//# sourceMappingURL=chunk-IMNU3N6K.js.map
