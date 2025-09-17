import {
  DriverConfigService
} from "./chunk-GDICOAUJ.js";
import {
  FirestoreService,
  LapService,
  RaceService
} from "./chunk-PQBZRJZN.js";
import {
  NotificationService,
  collection,
  collectionData,
  takeUntilDestroyed,
  toObservable
} from "./chunk-2V5B626X.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgClass,
  combineLatest,
  environment,
  inject,
  input,
  interval,
  map,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AM7K5Y7Q.js";

// src/app/board/service/board-config.service.ts
var BoardConfigService = class _BoardConfigService extends FirestoreService {
  collectionPath = "/board-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  boardConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((boardConfigs) => {
      if (boardConfigs.length > 0) {
        this.boardConfig.set(boardConfigs.at(0));
      }
    });
  }
  updateDriverVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.driverVisible = value;
      this.updateDataWithMessage(config.id, config, "driver visibility");
    }
  }
  updateDriverChangeVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.driverChangeVisible = value;
      this.updateDataWithMessage(config.id, config, "driver change visibility");
    }
  }
  updateInterphoneVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.interphoneVisible = value;
      this.updateDataWithMessage(config.id, config, "interphone visibility");
    }
  }
  updateFuelVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.fuelVisible = value;
      this.updateDataWithMessage(config.id, config, "fuel visibility");
    }
  }
  updateKartVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.kartVisible = value;
      this.updateDataWithMessage(config.id, config, "kart visibility");
    }
  }
  updateLapMissingVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.lapMissingVisible = value;
      this.updateDataWithMessage(config.id, config, "lap missing visibility");
    }
  }
  updatePitLaneVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.pitLaneVisible = value;
      this.updateDataWithMessage(config.id, config, "pit lane visibility");
    }
  }
  updateActiveStintVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.activeStintVisible = value;
      this.updateDataWithMessage(config.id, config, "active stint visibility");
    }
  }
  updateStintOptimizerVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.stintOptimizerVisible = value;
      this.updateDataWithMessage(config.id, config, "stint optimizer visibility");
    }
  }
  updateDeltaStintVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.deltaStintVisible = value;
      this.updateDataWithMessage(config.id, config, "delta stint visibility");
    }
  }
  updateKartChangeVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.kartChangeVisible = value;
      this.updateDataWithMessage(config.id, config, "kart change visibility");
    }
  }
  updateTyreChangeVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.tyreChangeVisible = value;
      this.updateDataWithMessage(config.id, config, "tyre change visibility");
    }
  }
  updateDriverPerformanceVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.driverPerformanceVisible = value;
      this.updateDataWithMessage(config.id, config, "driver performance visibility");
    }
  }
  updateStintVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.stintVisible = value;
      this.updateDataWithMessage(config.id, config, "stint visibility");
    }
  }
  updatePitVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.pitVisible = value;
      this.updateDataWithMessage(config.id, config, "pit visibility");
    }
  }
  updateLiveTimingVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.liveTimingVisible = value;
      this.updateDataWithMessage(config.id, config, "live timing visibility");
    }
  }
  updateSteeringWheelMessageButtonVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.steeringWheelMessageButtonVisible = value;
      this.updateDataWithMessage(config.id, config, "steering wheel message button visibility");
    }
  }
  updateTyrePressureVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.tyrePressureVisible = value;
      this.updateDataWithMessage(config.id, config, "tyre pressure visibility");
    }
  }
  updateTimelineVisibility(value) {
    const config = this.boardConfig();
    if (config) {
      config.timelineVisible = value;
      this.updateDataWithMessage(config.id, config, "timeline visibility");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function BoardConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BoardConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BoardConfigService, factory: _BoardConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoardConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/live-timing/service/live-timing-config.service.ts
var LiveTimingConfigService = class _LiveTimingConfigService extends FirestoreService {
  collectionPath = "/live-timing-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  liveTimingConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.liveTimingConfig.set(configs.at(0));
      }
    });
  }
  updateUrl(value) {
    const config = this.liveTimingConfig();
    if (config) {
      config.url = value;
      this.updateDataWithMessage(config.id, config, "live timing url");
    }
  }
  updateSource(value) {
    const config = this.liveTimingConfig();
    if (config) {
      config.source = value;
      this.updateDataWithMessage(config.id, config, "live timing source");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function LiveTimingConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveTimingConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LiveTimingConfigService, factory: _LiveTimingConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveTimingConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/component/chip/chip.component.ts
var ChipComponent = class _ChipComponent {
  // Input signals
  text = input.required();
  backgroundColor = input("bg-blue-500");
  // Default blue
  textColor = input("text-neutral-100");
  // Default white
  bounceCondition = input(false);
  large = input(false);
  constructor() {
  }
  getClasses() {
    return {
      "text-xl p-2": this.large(),
      "px-2 py-1": !this.large(),
      "animate-bounce": this.bounceCondition(),
      [this.backgroundColor()]: true,
      [this.textColor()]: true
    };
  }
  static \u0275fac = function ChipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChipComponent, selectors: [["app-chip"]], inputs: { text: [1, "text"], backgroundColor: [1, "backgroundColor"], textColor: [1, "textColor"], bounceCondition: [1, "bounceCondition"], large: [1, "large"] }, decls: 2, vars: 2, consts: [[1, "rounded-lg", "text-center", 3, "ngClass"]], template: function ChipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getClasses());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.text(), "\n");
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipComponent, [{
    type: Component,
    args: [{ selector: "app-chip", standalone: true, imports: [CommonModule], template: '<!-- aggiungi le classi tailwind dinamiche prese dagli input backgroundColor e textColor  -->\n<div\n  class="rounded-lg text-center"\n  [ngClass]="getClasses()"\n>\n  {{ text() }}\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChipComponent, { className: "ChipComponent", filePath: "src/app/shared/component/chip/chip.component.ts", lineNumber: 11 });
})();

// src/app/stint/model/stint.ts
function deserializeStintDTO(data) {
  return {
    id: data.id,
    raceId: data.raceId,
    driverId: data.driverId,
    startedAt: new Date(data.startedAt),
    endedAt: data.endedAt != null ? new Date(data.endedAt) : void 0,
    optimizedMilliseconds: data.optimizedMilliseconds,
    frontLeftTyrePressurePsi: data.frontLeftTyrePressurePsi,
    frontRightTyrePressurePsi: data.frontRightTyrePressurePsi,
    rearLeftTyrePressurePsi: data.rearLeftTyrePressurePsi,
    rearRightTyrePressurePsi: data.rearRightTyrePressurePsi
  };
}
function deserializeStintDTOs(data) {
  return data.map((item) => deserializeStintDTO(item));
}

// src/app/stint/service/stint-update.service.ts
var StintUpdateService = class _StintUpdateService extends FirestoreService {
  collectionPath = "stint-updates";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceService = inject(RaceService);
  stintUpdate = signal(void 0);
  constructor() {
    super();
    this.getStintUpdate().pipe(takeUntilDestroyed()).subscribe((stintUpdate) => {
      if (stintUpdate) {
        const actualStintUpdate = this.stintUpdate();
        if (!actualStintUpdate || actualStintUpdate.updatedAt < stintUpdate.updatedAt) {
          this.stintUpdate.set(stintUpdate);
        }
      }
    });
  }
  getStintUpdate() {
    return combineLatest({
      stintUpdates: collectionData(this.collectionRef),
      activeRace: toObservable(this.raceService.activeRace)
    }).pipe(takeUntil(this.destroyed), map(({ stintUpdates, activeRace }) => {
      const result = stintUpdates;
      if (activeRace && result.length > 0) {
        return result.filter((stintUpdate) => !stintUpdate.deleted && stintUpdate.raceId === activeRace.id).at(0);
      }
      return void 0;
    }));
  }
  static \u0275fac = function StintUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StintUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StintUpdateService, factory: _StintUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StintUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/stint/service/stint-data.service.ts
var StintDataService = class _StintDataService {
  path = "/stint-management";
  httpClient = inject(HttpClient);
  stintUpdateService = inject(StintUpdateService);
  raceService = inject(RaceService);
  notificationService = inject(NotificationService);
  stints = signal([]);
  constructor() {
    toObservable(this.raceService.activeRace).pipe(switchMap((race) => race ? this.getStints(race.id, []) : []), takeUntilDestroyed()).subscribe((stints) => {
      this.stints.set(this.merge(this.stints(), stints));
    });
    toObservable(this.stintUpdateService.stintUpdate).pipe(switchMap((stintUpdate) => stintUpdate ? this.getStints(stintUpdate.raceId, stintUpdate.updatedIds) : []), takeUntilDestroyed()).subscribe((updatedStints) => {
      this.stints.set(this.merge(this.stints(), updatedStints));
    });
  }
  refreshStints() {
    const activeRace = this.raceService.activeRace();
    if (activeRace === void 0) {
      this.notificationService.error("No active race");
      return;
    }
    this.getStints(activeRace.id, []).subscribe((stints) => {
      this.stints.set(stints);
      this.notificationService.success("Stints refreshed");
    });
  }
  merge(currentStints, newStints) {
    const currentStintsMap = new Map(currentStints.map((stint) => [stint.id, stint]));
    newStints.forEach((newStint) => {
      currentStintsMap.set(newStint.id, newStint);
    });
    return Array.from(currentStintsMap.values()).sort((a, b) => b.id - a.id);
  }
  getStints(raceId, ids) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/stints`, {
      raceId,
      ids
    }).pipe(map((result) => deserializeStintDTOs(result)));
  }
  static \u0275fac = function StintDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StintDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StintDataService, factory: _StintDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StintDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/driver/model/driver.ts
function deserializeDriverDTO(data) {
  return {
    id: data.id,
    name: data.name,
    surname: data.surname,
    raceName: data.raceName
  };
}
function deserializeDriversDTO(data) {
  return data.map((item) => deserializeDriverDTO(item));
}

// src/app/driver/service/driver.service.ts
var DriverService = class _DriverService {
  path = "/driver-management";
  httpClient = inject(HttpClient);
  stintDataService = inject(StintDataService);
  driverConfigService = inject(DriverConfigService);
  lapService = inject(LapService);
  notificationService = inject(NotificationService);
  worker;
  drivers = signal([]);
  driversTimeOnTrackMap = signal(/* @__PURE__ */ new Map());
  driversTimeOnTrackWarningMap = signal(/* @__PURE__ */ new Map());
  driversStintCountMap = signal(/* @__PURE__ */ new Map());
  driverWithMoreTimeFromLastStint = signal(void 0);
  driversTimeFromLastStintMap = signal(/* @__PURE__ */ new Map());
  raceNameById = signal(/* @__PURE__ */ new Map());
  driverPaceById = signal(/* @__PURE__ */ new Map());
  driverBestLapById = signal(/* @__PURE__ */ new Map());
  driverIdBestPace = signal(void 0);
  driverBestPaceMillisecond = signal(void 0);
  driverLastStintIdByDriverId = signal(/* @__PURE__ */ new Map());
  driversTimeOnTrackWarningCount = signal(0);
  constructor() {
    this.getAll().pipe(takeUntilDestroyed()).subscribe((drivers) => {
      this.drivers.set(drivers);
    });
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-XL2XJUMD.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.driversTimeOnTrackMap.set(data.driversTimeOnTrackMap);
        this.driversTimeOnTrackWarningMap.set(data.driversTimeOnTrackWarningMap);
        this.driversStintCountMap.set(data.driversStintCountMap);
        this.driverWithMoreTimeFromLastStint.set(data.driversStintCountMap);
        this.driversTimeFromLastStintMap.set(data.driversTimeFromLastStintMap);
        this.raceNameById.set(data.raceNameById);
        this.driverPaceById.set(data.driverPaceById);
        this.driverBestLapById.set(data.driverBestLapById);
        this.driverIdBestPace.set(data.driverIdBestPace);
        this.driverBestPaceMillisecond.set(data.driverBestPaceMillisecond);
        this.driversTimeOnTrackWarningCount.set(data.driversTimeOnTrackWarningCount);
        this.driverLastStintIdByDriverId.set(data.driverLastStintIdByDriverId);
      };
    }
    combineLatest({
      drivers: toObservable(this.drivers),
      stints: toObservable(this.stintDataService.stints),
      driverConfig: toObservable(this.driverConfigService.driverConfig),
      validTeamPaceLaps: toObservable(this.lapService.validTeamPaceLaps),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ drivers, stints, driverConfig, validTeamPaceLaps }) => {
      if (this.worker && driverConfig) {
        this.worker.postMessage({
          drivers,
          stints,
          driverConfig,
          validTeamPaceLaps
        });
      }
    });
  }
  refreshDrivers() {
    this.getAll().subscribe((drivers) => {
      this.drivers.set(drivers);
      this.notificationService.success("Drivers refreshed");
    });
  }
  getAll() {
    return this.httpClient.get(`${environment.baseUrl}${this.path}/drivers`).pipe(map((drivers) => deserializeDriversDTO(drivers)));
  }
  static \u0275fac = function DriverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DriverService, factory: _DriverService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/kart/service/kart-config.service.ts
var KartConfigService = class _KartConfigService extends FirestoreService {
  collectionPath = "/kart-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  kartConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.kartConfig.set(configs.at(0));
      }
    });
  }
  updateMaxKartMinute(value) {
    const config = this.kartConfig();
    if (config) {
      config.maxKartMinute = value;
      this.updateDataWithMessage(config.id, config, "max kart minute");
    }
  }
  updateMinKartChange(value) {
    const config = this.kartConfig();
    if (config) {
      config.minKartChange = value;
      this.updateDataWithMessage(config.id, config, "min kart change");
    }
  }
  updateMaxKartChange(value) {
    const config = this.kartConfig();
    if (config) {
      config.maxKartChange = value;
      this.updateDataWithMessage(config.id, config, "max kart change");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function KartConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KartConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KartConfigService, factory: _KartConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KartConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pit-lane/service/pit-lane-config.service.ts
var PitLaneConfigService = class _PitLaneConfigService extends FirestoreService {
  collectionPath = "/pit-lane-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  pitLaneConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.pitLaneConfig.set(configs.at(0));
      }
    });
  }
  updateDriverId(driverId) {
    const config = this.pitLaneConfig();
    if (config) {
      config.driverId = driverId;
      this.updateDataWithMessage(config.id, config, "next pit driver id");
    }
  }
  updateRefuel(refuel) {
    const config = this.pitLaneConfig();
    if (config) {
      config.refuel = refuel;
      this.updateDataWithMessage(config.id, config, "next pit refuel");
    }
  }
  updateTyreChange(tyreChange) {
    const config = this.pitLaneConfig();
    if (config) {
      config.tyreChange = tyreChange;
      this.updateDataWithMessage(config.id, config, "next pit tyre change");
    }
  }
  updateInterphoneChange(interphoneChange) {
    const config = this.pitLaneConfig();
    if (config) {
      config.interphoneChange = interphoneChange;
      this.updateDataWithMessage(config.id, config, "next pit interphone change");
    }
  }
  updateKartChange(value) {
    const config = this.pitLaneConfig();
    if (config) {
      config.kartChange = value;
      this.updateDataWithMessage(config.id, config, "next pit kart change");
    }
  }
  updateCloseBeforeEndRaceMinute(value) {
    const config = this.pitLaneConfig();
    if (config) {
      config.closeBeforeEndRaceMinute = value;
      this.updateDataWithMessage(config.id, config, "close before end race minute");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function PitLaneConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitLaneConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PitLaneConfigService, factory: _PitLaneConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitLaneConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/tyre/service/tyre-config.service.ts
var TyreConfigService = class _TyreConfigService extends FirestoreService {
  collectionPath = "/tyre-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  tyreConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.tyreConfig.set(configs.at(0));
      }
    });
  }
  updateStartTyreChangeWindowHour(value) {
    const config = this.tyreConfig();
    if (config) {
      config.startTyreChangeWindowHour = value;
      this.updateDataWithMessage(config.id, config, "start tyre change window hour");
    }
  }
  updateEndTyreChangeWindowHour(value) {
    const config = this.tyreConfig();
    if (config) {
      config.endTyreChangeWindowHour = value;
      this.updateDataWithMessage(config.id, config, "end tyre change window hour");
    }
  }
  updateMinTyreChange(value) {
    const config = this.tyreConfig();
    if (config) {
      config.minTyreChange = value;
      this.updateDataWithMessage(config.id, config, "min tyre change");
    }
  }
  updateMinTyrePressurePsi(value) {
    const config = this.tyreConfig();
    if (config) {
      config.minTyrePressurePsi = value;
      this.updateDataWithMessage(config.id, config, "min tyre pressure psi");
    }
  }
  updateMaxTyrePressurePsi(value) {
    const config = this.tyreConfig();
    if (config) {
      config.maxTyrePressurePsi = value;
      this.updateDataWithMessage(config.id, config, "max tyre pressure psi");
    }
  }
  updateFrontLeftTyrePressurePsi(value) {
    const config = this.tyreConfig();
    if (config) {
      config.frontLeftTyrePressurePsi = value;
      this.updateDataWithMessage(config.id, config, "front left tyre pressure psi");
    }
  }
  updateFrontRightTyrePressurePsi(value) {
    const config = this.tyreConfig();
    if (config) {
      config.frontRightTyrePressurePsi = value;
      this.updateDataWithMessage(config.id, config, "front right tyre pressure psi");
    }
  }
  updateRearLeftTyrePressurePsi(value) {
    const config = this.tyreConfig();
    if (config) {
      config.rearLeftTyrePressurePsi = value;
      this.updateDataWithMessage(config.id, config, "rear left tyre pressure psi");
    }
  }
  updateRearRightTyrePressurePsi(value) {
    const config = this.tyreConfig();
    if (config) {
      config.rearRightTyrePressurePsi = value;
      this.updateDataWithMessage(config.id, config, "rear right tyre pressure psi");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function TyreConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TyreConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TyreConfigService, factory: _TyreConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TyreConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pit/model/pit.ts
function deserializePitDTO(data) {
  return {
    id: data.id,
    raceId: data.raceId,
    entryAt: new Date(data.entryAt),
    exitAt: data.exitAt != null ? new Date(data.exitAt) : void 0,
    entryDriverId: data.entryDriverId,
    exitDriverId: data.exitDriverId,
    refuel: data.refuel,
    tyreChange: data.tyreChange,
    interphoneChange: data.interphoneChange,
    kartChange: data.kartChange
  };
}
function deserializePitDTOs(data) {
  return data.map((item) => deserializePitDTO(item));
}

// src/app/pit/service/pit-update.service.ts
var PitUpdateService = class _PitUpdateService extends FirestoreService {
  collectionPath = "/pit-updates";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceService = inject(RaceService);
  pitUpdate = signal(void 0);
  constructor() {
    super();
    this.getPitUpdate().pipe(takeUntilDestroyed()).subscribe((pitUpdate) => {
      if (pitUpdate) {
        const actualPitUpdate = this.pitUpdate();
        if (!actualPitUpdate || actualPitUpdate.updatedAt < pitUpdate.updatedAt) {
          this.pitUpdate.set(pitUpdate);
        }
      }
    });
  }
  getPitUpdate() {
    return combineLatest({
      pitUpdates: collectionData(this.collectionRef),
      activeRace: toObservable(this.raceService.activeRace)
    }).pipe(takeUntil(this.destroyed), map(({ pitUpdates, activeRace }) => {
      const result = pitUpdates;
      if (activeRace && result.length > 0) {
        return result.filter((pit) => !pit.deleted && pit.raceId === activeRace.id).at(0);
      }
      return void 0;
    }));
  }
  static \u0275fac = function PitUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PitUpdateService, factory: _PitUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pit/service/pit-data.service.ts
var PitDataService = class _PitDataService {
  path = "/pit-management";
  httpClient = inject(HttpClient);
  pitUpdateService = inject(PitUpdateService);
  raceService = inject(RaceService);
  notificationService = inject(NotificationService);
  pits = signal([]);
  constructor() {
    toObservable(this.raceService.activeRace).pipe(switchMap((race) => race ? this.getPits(race.id, []) : []), takeUntilDestroyed()).subscribe((pits) => {
      this.pits.set(this.merge(this.pits(), pits));
    });
    toObservable(this.pitUpdateService.pitUpdate).pipe(switchMap((pitUpdate) => pitUpdate ? this.getPits(pitUpdate.raceId, pitUpdate.updatedIds) : []), takeUntilDestroyed()).subscribe((updatedPits) => {
      this.pits.set(this.merge(this.pits(), updatedPits));
    });
  }
  refreshPits() {
    const activeRace = this.raceService.activeRace();
    if (activeRace === void 0) {
      this.notificationService.info("No active race");
      return;
    }
    this.getPits(activeRace.id, []).subscribe((pits) => {
      this.pits.set(pits);
      this.notificationService.success("Pits refreshed");
    });
  }
  merge(currentPits, newPits) {
    const currentPitsMap = new Map(currentPits.map((pit) => [pit.id, pit]));
    newPits.forEach((newPit) => {
      currentPitsMap.set(newPit.id, newPit);
    });
    return Array.from(currentPitsMap.values()).sort((a, b) => b.id - a.id);
  }
  getPits(raceId, ids) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/pits`, {
      raceId,
      ids
    }).pipe(map((result) => deserializePitDTOs(result)));
  }
  static \u0275fac = function PitDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PitDataService, factory: _PitDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap-missing/model/lap-missing.ts
function deserializeLapMissingDTO(data) {
  return {
    id: data.id,
    raceId: data.raceId,
    raceNumber: data.raceNumber,
    lapNumber: data.lapNumber
  };
}
function deserializeLapMissingDTOs(data) {
  return data.map((item) => deserializeLapMissingDTO(item));
}

// src/app/lap-missing/service/lap-missing-update.service.ts
var LapMissingUpdateService = class _LapMissingUpdateService extends FirestoreService {
  collectionPath = "/lap-missing-updates";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceService = inject(RaceService);
  lapMissingUpdate = signal(void 0);
  constructor() {
    super();
    combineLatest({
      missingLapUpdate: this.getMissingLapUpdate()
    }).pipe(takeUntilDestroyed()).subscribe(({ missingLapUpdate }) => {
      if (missingLapUpdate) {
        const actualMissingLapUpdate = this.lapMissingUpdate();
        if (!actualMissingLapUpdate || actualMissingLapUpdate.updatedAt < missingLapUpdate.updatedAt) {
          this.lapMissingUpdate.set(missingLapUpdate);
        }
      }
    });
  }
  getMissingLapUpdate() {
    return combineLatest({
      updates: collectionData(this.collectionRef),
      activeRace: toObservable(this.raceService.activeRace)
    }).pipe(takeUntil(this.destroyed), map(({ updates, activeRace }) => {
      const result = updates;
      if (activeRace && result.length > 0) {
        return result.filter((update) => !update.deleted && update.raceId === activeRace.id).at(0);
      }
      return void 0;
    }));
  }
  static \u0275fac = function LapMissingUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapMissingUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapMissingUpdateService, factory: _LapMissingUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapMissingUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap-missing/service/lap-missing-data.service.ts
var LapMissingDataService = class _LapMissingDataService {
  path = "/lap-missing-management";
  httpClient = inject(HttpClient);
  lapMissingUpdateService = inject(LapMissingUpdateService);
  raceService = inject(RaceService);
  notificationService = inject(NotificationService);
  lapMissing = signal([]);
  constructor() {
    combineLatest({
      activeRace: toObservable(this.raceService.activeRace)
    }).pipe(takeUntilDestroyed(), switchMap(({ activeRace }) => {
      if (activeRace) {
        return this.getLapMissing(activeRace.id, []);
      }
      return [];
    })).subscribe((fetchedLapMissing) => {
      this.lapMissing.set(this.mergeLapMissing(this.lapMissing(), fetchedLapMissing));
    });
    toObservable(this.lapMissingUpdateService.lapMissingUpdate).pipe(takeUntilDestroyed(), switchMap((lapMissingUpdate) => {
      if (!lapMissingUpdate) {
        return [];
      }
      if (lapMissingUpdate.updatedIds.length > 0) {
        return this.getLapMissing(lapMissingUpdate.raceId, lapMissingUpdate.updatedIds).pipe(map((fetchedLapMissing) => ({
          fetchedLapMissing,
          deletedIds: lapMissingUpdate.deletedIds
        })));
      }
      return [{
        fetchedLapMissing: [],
        deletedIds: lapMissingUpdate.deletedIds
      }];
    })).subscribe((result) => {
      let currentLapMissing = this.lapMissing();
      if (result.deletedIds.length > 0) {
        currentLapMissing = currentLapMissing.filter((lapMissing) => !result.deletedIds.includes(lapMissing.id));
      }
      const updatedLapMissing = this.mergeLapMissing(currentLapMissing, result.fetchedLapMissing);
      this.lapMissing.set(updatedLapMissing);
    });
  }
  refreshLapMissing() {
    const activeRace = this.raceService.activeRace();
    if (activeRace === void 0) {
      this.notificationService.info("No active race");
      return;
    }
    this.getLapMissing(activeRace.id, []).subscribe((fetchedLapMissing) => {
      this.lapMissing.set(fetchedLapMissing);
      this.notificationService.success("Lap missing refreshed");
    });
  }
  testCloudTaskQueue() {
    this.httpClient.get(`${environment.baseUrl}${this.path}/test-cloud-task-queue`).subscribe((result) => {
      this.notificationService.success("Cloud task queue test successful");
    });
  }
  forceCheckLapMissing() {
    this.sendForceCheckLapMissing().subscribe(() => {
      this.notificationService.success("Check lap missing forced");
    });
  }
  mergeLapMissing(currentLapMissing, newLapMissing) {
    const currentLapMissingMap = new Map(currentLapMissing.map((lapMissing) => [lapMissing.id, lapMissing]));
    newLapMissing.forEach((newLapMissing2) => {
      currentLapMissingMap.set(newLapMissing2.id, newLapMissing2);
    });
    return Array.from(currentLapMissingMap.values()).sort((a, b) => a.id - b.id);
  }
  getLapMissing(raceId, lapMissingIds) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/lap-missing`, {
      raceId,
      ids: lapMissingIds
    }).pipe(map((result) => deserializeLapMissingDTOs(result)));
  }
  sendForceCheckLapMissing() {
    return this.httpClient.get(`${environment.baseUrl}${this.path}/force-check-lap-missing`).pipe(map((result) => deserializeLapMissingDTOs(result)));
  }
  static \u0275fac = function LapMissingDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapMissingDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapMissingDataService, factory: _LapMissingDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapMissingDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap-missing/service/lap-missing.service.ts
var LapMissingService = class _LapMissingService {
  lapMissingDataService = inject(LapMissingDataService);
  worker;
  lapMissingByRaceNumber = signal(/* @__PURE__ */ new Map());
  lapMissingCount = signal(0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-T2UDNJP7.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.lapMissingByRaceNumber.set(data.lapMissingByRaceNumber);
        this.lapMissingCount.set(data.lapMissingCount);
      };
    }
    combineLatest({
      lapMissing: toObservable(this.lapMissingDataService.lapMissing)
    }).pipe(takeUntilDestroyed()).subscribe(({ lapMissing }) => {
      if (this.worker) {
        this.worker.postMessage({
          lapMissing
        });
      }
    });
  }
  static \u0275fac = function LapMissingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapMissingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapMissingService, factory: _LapMissingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapMissingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/timeline/service/timeline-config.service.ts
var TimelineConfigService = class _TimelineConfigService extends FirestoreService {
  collectionPath = "/timeline-config";
  collectionRef = collection(this.firestore, this.collectionPath);
  timelineConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.timelineConfig.set(configs.at(0));
      }
    });
  }
  updateVisibleAfterMinWidthPixel(value) {
    const config = this.timelineConfig();
    if (config) {
      config.visibleAfterMinWidthPixel = value;
      this.updateDataWithMessage(config.id, config, "visible with min width pixel");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function TimelineConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TimelineConfigService, factory: _TimelineConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LiveTimingConfigService,
  BoardConfigService,
  ChipComponent,
  StintDataService,
  DriverService,
  KartConfigService,
  PitLaneConfigService,
  TyreConfigService,
  PitDataService,
  LapMissingDataService,
  LapMissingService,
  TimelineConfigService
};
//# sourceMappingURL=chunk-3KS63GZX.js.map
