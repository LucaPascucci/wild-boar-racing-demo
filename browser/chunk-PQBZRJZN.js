import {
  Firestore,
  NotificationService,
  Timestamp,
  collection,
  collectionData,
  doc,
  setDoc,
  takeUntilDestroyed,
  toObservable
} from "./chunk-2V5B626X.js";
import {
  DestroyRef,
  HttpClient,
  Injectable,
  Observable,
  Subject,
  combineLatest,
  environment,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  take,
  takeUntil,
  ɵɵdefineInjectable
} from "./chunk-AM7K5Y7Q.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/team/model/team.ts
function deserializeTeamDTO(data) {
  return {
    id: data.id,
    name: data.name,
    raceNumber: data.raceNumber,
    category: data.category,
    yourTeam: data.yourTeam,
    gapChartVisible: data.gapChartVisible,
    shadowChartVisible: data.shadowChartVisible,
    pitNowChartVisible: data.pitNowChartVisible
  };
}
function deserializeTeamDTOs(data) {
  return data.map((item) => deserializeTeamDTO(item));
}

// src/app/shared/service/firestore.service.ts
var FirestoreService = class _FirestoreService {
  destroyRef = inject(DestroyRef);
  firestore = inject(Firestore);
  destroyed = new Subject();
  notificationService = inject(NotificationService);
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.destroyed.next();
      this.destroyed.complete();
    });
  }
  updateData(id, data) {
    return setDoc(doc(this.collectionRef, id.toString()), data, { merge: false });
  }
  updateDataWithMessage(id, data, message) {
    return __async(this, null, function* () {
      try {
        yield setDoc(doc(this.collectionRef, id.toString()), data, { merge: false });
        this.notificationService.success("Updated: " + message);
      } catch (error) {
        this.notificationService.error("Error updating: " + message);
        throw error;
      }
    });
  }
  static \u0275fac = function FirestoreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FirestoreService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FirestoreService, factory: _FirestoreService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FirestoreService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/team/service/team-update.service.ts
var TeamUpdateService = class _TeamUpdateService extends FirestoreService {
  collectionPath = "/team-updates";
  collectionRef = collection(this.firestore, this.collectionPath);
  teamUpdate = signal(void 0);
  constructor() {
    super();
    this.getTeamUpdate().pipe(takeUntilDestroyed()).subscribe((teamUpdate) => {
      if (teamUpdate) {
        const actualTeamUpdate = this.teamUpdate();
        if (!actualTeamUpdate || actualTeamUpdate.updatedAt < teamUpdate.updatedAt) {
          this.teamUpdate.set(teamUpdate);
        }
      }
    });
  }
  getTeamUpdate() {
    return combineLatest({
      teamUpdates: collectionData(this.collectionRef)
    }).pipe(takeUntil(this.destroyed), map(({ teamUpdates }) => {
      const result = teamUpdates;
      if (result.length > 0) {
        return result.filter((team) => !team.deleted).at(0);
      }
      return void 0;
    }));
  }
  static \u0275fac = function TeamUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamUpdateService, factory: _TeamUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/team/service/team-data.service.ts
var TeamDataService = class _TeamDataService {
  path = "/team-management";
  httpClient = inject(HttpClient);
  teamUpdateService = inject(TeamUpdateService);
  notificationService = inject(NotificationService);
  teams = signal([]);
  constructor() {
    this.getTeams([]).pipe(takeUntilDestroyed()).subscribe((teams) => {
      this.teams.set(this.merge(this.teams(), teams));
    });
    toObservable(this.teamUpdateService.teamUpdate).pipe(switchMap((teamUpdate) => teamUpdate ? this.getTeams(teamUpdate.updatedIds) : []), takeUntilDestroyed()).subscribe((updatedTeams) => {
      this.teams.set(this.merge(this.teams(), updatedTeams));
    });
  }
  merge(currentTeams, newTeams) {
    const currentTeamsMap = new Map(currentTeams.map((team) => [team.id, team]));
    newTeams.forEach((newTeam) => {
      currentTeamsMap.set(newTeam.id, newTeam);
    });
    return Array.from(currentTeamsMap.values()).sort((a, b) => a.raceNumber - b.raceNumber);
  }
  refreshTeams() {
    this.getTeams([]).subscribe((teams) => {
      this.teams.set(this.teams());
      this.notificationService.success("Teams refreshed");
    });
  }
  getTeams(ids) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/teams`, {
      ids
    }).pipe(map((result) => deserializeTeamDTOs(result)));
  }
  updateGapChartVisibility(id, visible) {
    this.httpClient.post(`${environment.baseUrl}${this.path}/teams/${id}/gap-chart-visibility`, { visible }).subscribe(() => this.notificationService.success(`Team ${id} - gap chart visibility updated`));
  }
  updatePitNowChartVisibility(id, visible) {
    this.httpClient.post(`${environment.baseUrl}${this.path}/teams/${id}/pit-now-chart-visibility`, { visible }).subscribe(() => this.notificationService.success(`Team ${id} - pit now chart visibility updated`));
  }
  updateShadowChartVisibility(id, visible) {
    this.httpClient.post(`${environment.baseUrl}${this.path}/teams/${id}/shadow-chart-visibility`, { visible }).subscribe(() => this.notificationService.success(`Team ${id} - shadow chart visibility updated`));
  }
  resetChartVisibility() {
    this.httpClient.get(`${environment.baseUrl}${this.path}/teams/reset-chart-visibility`).subscribe(() => this.notificationService.success(`Team chart visibility reset`));
  }
  static \u0275fac = function TeamDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamDataService, factory: _TeamDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/team/service/team.service.ts
var TeamService = class _TeamService {
  teamDataService = inject(TeamDataService);
  worker;
  activeTeam = signal(void 0);
  teamNameByRaceNumber = signal(/* @__PURE__ */ new Map());
  gapChartVisibleByRaceNumber = signal(/* @__PURE__ */ new Map());
  shadowChartVisibleByRaceNumber = signal(/* @__PURE__ */ new Map());
  pitNowChartVisibleByRaceNumber = signal(/* @__PURE__ */ new Map());
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-GOYRML6F.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.activeTeam.set(data.activeTeam);
        this.teamNameByRaceNumber.set(data.teamNameByRaceNumber);
        this.gapChartVisibleByRaceNumber.set(data.gapChartVisibleByRaceNumber);
        this.shadowChartVisibleByRaceNumber.set(data.shadowChartVisibleByRaceNumber);
        this.pitNowChartVisibleByRaceNumber.set(data.pitNowChartVisibleByRaceNumber);
      };
    }
    combineLatest({
      teams: toObservable(this.teamDataService.teams)
    }).pipe(takeUntilDestroyed()).subscribe(({ teams }) => {
      if (this.worker) {
        this.worker.postMessage({
          teams
        });
      }
    });
  }
  static \u0275fac = function TeamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamService, factory: _TeamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap/service/lap-config.service.ts
var LapConfigService = class _LapConfigService extends FirestoreService {
  collectionPath = "/lap-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  lapConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.lapConfig.set(configs.at(0));
      }
    });
  }
  updateReferenceLapTime(value) {
    const config = this.lapConfig();
    if (config) {
      config.referenceLapTimeMillisecond = value;
      this.updateDataWithMessage(config.id, config, "reference lap time");
    }
  }
  updatePaceLapThreshold(value) {
    const config = this.lapConfig();
    if (config) {
      config.paceLapThresholdMilliseconds = value;
      this.updateDataWithMessage(config.id, config, "pace lap threshold");
    }
  }
  updatePaceLapNumber(value) {
    const config = this.lapConfig();
    if (config) {
      config.paceLapNumber = value;
      this.updateDataWithMessage(config.id, config, "pace lap number");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc2) => doc2).filter((config) => !config.deleted)));
  }
  static \u0275fac = function LapConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapConfigService, factory: _LapConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap/model/lap.ts
function deserializeLapDTO(data) {
  return {
    id: data.id,
    raceId: data.raceId,
    driverId: data.driverId,
    stintId: data.stintId,
    raceNumber: data.raceNumber,
    lapNumber: data.lapNumber,
    pitNumber: data.pitNumber,
    pitStop: data.pitStop,
    lapMilliseconds: data.lastLapMilliseconds,
    // Convert from API's lastLapMilliseconds to our lapMilliseconds
    gap: data.gap,
    position: data.position
  };
}
function deserializeLapsDTO(data) {
  return data.map((item) => deserializeLapDTO(item));
}

// src/app/race/model/race.ts
function deserializeRaceDTO(data) {
  if (data === null || data === void 0) {
    return;
  }
  return {
    id: data.id,
    startedAt: new Date(data.startedAt),
    endedAt: data.endedAt != null ? new Date(data.endedAt) : void 0
  };
}

// src/app/race/service/race-config.service.ts
var RaceConfigService = class _RaceConfigService extends FirestoreService {
  collectionPath = "/race-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((raceConfigs) => {
      if (raceConfigs.length > 0) {
        this.raceConfig.set(raceConfigs.at(0));
      }
    });
  }
  updateFuelDurationMinute(value) {
    const raceConfig = this.raceConfig();
    if (raceConfig) {
      raceConfig.fuelDurationMinute = value;
      this.updateDataWithMessage(raceConfig.id, raceConfig, "fuel duration minute");
    }
  }
  updateInterphoneBatteryDurationMinute(value) {
    const raceConfig = this.raceConfig();
    if (raceConfig) {
      raceConfig.interphoneBatteryDurationMinute = value;
      this.updateDataWithMessage(raceConfig.id, raceConfig, "interphone battery duration minute");
    }
  }
  updateStartRaceDriverId(driverId) {
    const raceConfig = this.raceConfig();
    if (raceConfig) {
      raceConfig.startRaceDriverId = driverId;
      this.updateDataWithMessage(raceConfig.id, raceConfig, "start race driver id");
    }
  }
  updateMinStintMinute(value) {
    const raceConfig = this.raceConfig();
    if (raceConfig) {
      raceConfig.minStintMinute = value;
      this.updateDataWithMessage(raceConfig.id, raceConfig, "min stint minute");
    }
  }
  updateEndRaceButtonThresholdSeconds(value) {
    const raceConfig = this.raceConfig();
    if (raceConfig) {
      raceConfig.endRaceButtonThresholdSeconds = value;
      this.updateDataWithMessage(raceConfig.id, raceConfig, "end race button threshold seconds");
    }
  }
  updateDurationHour(value) {
    const raceConfig = this.raceConfig();
    if (raceConfig) {
      raceConfig.durationHour = value;
      this.updateDataWithMessage(raceConfig.id, raceConfig, "duration hour");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc2) => doc2).filter((raceConfig) => !raceConfig.deleted)));
  }
  static \u0275fac = function RaceConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RaceConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RaceConfigService, factory: _RaceConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RaceConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}

// node_modules/date-fns/addHours.js
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour, options);
}

// src/app/race/service/race-update.service.ts
var RaceUpdateService = class _RaceUpdateService extends FirestoreService {
  collectionPath = "/race-updates";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceUpdate = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((raceUpdates) => {
      if (raceUpdates.length > 0) {
        const raceUpdate = raceUpdates.at(0);
        if (raceUpdate) {
          const actualRaceUpdate = this.raceUpdate();
          if (!actualRaceUpdate || actualRaceUpdate.updatedAt < raceUpdate.updatedAt) {
            this.raceUpdate.set(raceUpdate);
          }
        }
      }
    });
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc2) => doc2).filter((data2) => !data2.deleted)));
  }
  static \u0275fac = function RaceUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RaceUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RaceUpdateService, factory: _RaceUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RaceUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/race/service/race.service.ts
var RaceService = class _RaceService {
  path = "/race-management";
  httpClient = inject(HttpClient);
  raceConfigService = inject(RaceConfigService);
  raceUpdateService = inject(RaceUpdateService);
  activeRace = signal(void 0);
  willEndRaceDate = signal(void 0);
  constructor() {
    this.getActiveRace().pipe(takeUntilDestroyed(), take(1)).subscribe((activeRace) => {
      if (activeRace) {
        this.activeRace.set(activeRace);
      }
    });
    combineLatest({
      race: this.getActiveRace(),
      raceFromUpdate: toObservable(this.raceUpdateService.raceUpdate).pipe(switchMap((raceUpdate) => raceUpdate ? this.getRace(raceUpdate.raceId) : of(void 0)))
    }).pipe(takeUntilDestroyed()).subscribe(({ race, raceFromUpdate }) => {
      this.activeRace.set(raceFromUpdate ? raceFromUpdate : race ? race : void 0);
    });
    combineLatest({
      race: this.getActiveRace(),
      raceFromUpdate: toObservable(this.raceUpdateService.raceUpdate).pipe(switchMap((raceUpdate) => raceUpdate ? this.getRace(raceUpdate.raceId) : of(void 0)))
    }).pipe(takeUntilDestroyed()).subscribe(({ race, raceFromUpdate }) => {
      this.activeRace.set(raceFromUpdate ? raceFromUpdate : race ? race : void 0);
    });
    combineLatest({
      activeRace: toObservable(this.activeRace),
      raceConfig: toObservable(this.raceConfigService.raceConfig)
    }).pipe(takeUntilDestroyed(), map(({ activeRace, raceConfig }) => {
      return this.getWillEndRaceDate(activeRace, raceConfig);
    })).subscribe((willEndRaceDate) => {
      this.willEndRaceDate.set(willEndRaceDate);
    });
  }
  getWillEndRaceDate(activeRace, raceConfig) {
    if (activeRace === void 0 || raceConfig === void 0) {
      return void 0;
    }
    if (activeRace.endedAt) {
      return activeRace.endedAt;
    }
    return addHours(activeRace.startedAt, raceConfig.durationHour);
  }
  getActiveRace() {
    return this.httpClient.get(`${environment.baseUrl}${this.path}/active-race`).pipe(map((result) => deserializeRaceDTO(result)));
  }
  getRace(id) {
    return this.httpClient.get(`${environment.baseUrl}${this.path}/races/${id}`).pipe(map((result) => deserializeRaceDTO(result)));
  }
  static \u0275fac = function RaceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RaceService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RaceService, factory: _RaceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RaceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap/service/lap-update.service.ts
var LapUpdateService = class _LapUpdateService extends FirestoreService {
  collectionPath = "/lap-updates";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceService = inject(RaceService);
  lapUpdate = signal(void 0);
  constructor() {
    super();
    combineLatest({
      lapUpdate: this.getLapUpdate()
    }).pipe(takeUntilDestroyed()).subscribe(({ lapUpdate }) => {
      if (lapUpdate) {
        const actualLapUpdate = this.lapUpdate();
        if (!actualLapUpdate || actualLapUpdate.updatedAt < lapUpdate.updatedAt) {
          this.lapUpdate.set(lapUpdate);
        }
      }
    });
  }
  getLapUpdate() {
    return combineLatest({
      lapUpdates: collectionData(this.collectionRef),
      activeRace: toObservable(this.raceService.activeRace)
    }).pipe(takeUntil(this.destroyed), map(({ lapUpdates, activeRace }) => {
      const result = lapUpdates;
      if (activeRace && result.length > 0) {
        return result.filter((lapUpdate) => !lapUpdate.deleted && lapUpdate.raceId === activeRace.id).at(0);
      }
      return void 0;
    }));
  }
  static \u0275fac = function LapUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapUpdateService, factory: _LapUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap/model/lap-page-result.ts
function deserializeLapPageResult(data) {
  return {
    laps: deserializeLapsDTO(data.laps),
    totalPages: data.totalPages,
    totalElements: data.totalElements
  };
}

// src/app/lap/service/lap-loading-config.service.ts
var LapLoadingConfigService = class _LapLoadingConfigService extends FirestoreService {
  collectionPath = "/lap-loading-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  lapLoadingConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.lapLoadingConfig.set(configs.at(0));
      }
    });
  }
  updatePageSize(value) {
    const config = this.lapLoadingConfig();
    if (config) {
      config.pageSize = value;
      this.updateDataWithMessage(config.id, config, "page size");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc2) => doc2).filter((config) => !config.deleted)));
  }
  static \u0275fac = function LapLoadingConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapLoadingConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapLoadingConfigService, factory: _LapLoadingConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapLoadingConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap/service/lap-refresh-update.service.ts
var LapRefreshUpdateService = class _LapRefreshUpdateService extends FirestoreService {
  collectionPath = "/lap-refresh-updates";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceService = inject(RaceService);
  lapRefreshUpdate = signal(void 0);
  constructor() {
    super();
    combineLatest({
      lapRefreshUpdate: this.getLapRefreshUpdate()
    }).pipe(takeUntilDestroyed()).subscribe(({ lapRefreshUpdate }) => {
      if (lapRefreshUpdate) {
        const actual = this.lapRefreshUpdate();
        if (!actual || actual.updatedAt < lapRefreshUpdate.updatedAt) {
          this.lapRefreshUpdate.set(lapRefreshUpdate);
        }
      }
    });
  }
  updateRefresh() {
    let value = this.lapRefreshUpdate();
    const activeRace = this.raceService.activeRace();
    if (!value && activeRace) {
      value = {
        deleted: false,
        id: activeRace.id,
        raceId: activeRace.id,
        updatedAt: Timestamp.now()
      };
    }
    if (value) {
      value.updatedAt = Timestamp.now();
      value.deleted = false;
      this.updateDataWithMessage(value.id, value, "lap refresh");
    }
  }
  getLapRefreshUpdate() {
    return combineLatest({
      lapRefreshUpdates: collectionData(this.collectionRef),
      activeRace: toObservable(this.raceService.activeRace)
    }).pipe(takeUntil(this.destroyed), map(({ lapRefreshUpdates, activeRace }) => {
      const result = lapRefreshUpdates;
      if (activeRace && result.length > 0) {
        return result.filter((lapRefreshUpdate) => !lapRefreshUpdate.deleted && lapRefreshUpdate.raceId === activeRace.id).at(0);
      }
      return void 0;
    }));
  }
  static \u0275fac = function LapRefreshUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapRefreshUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapRefreshUpdateService, factory: _LapRefreshUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapRefreshUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap/service/lap-data.service.ts
var LapDataService = class _LapDataService {
  path = "/lap-management";
  httpClient = inject(HttpClient);
  lapUpdateService = inject(LapUpdateService);
  lapLoadingConfigService = inject(LapLoadingConfigService);
  lapRefreshUpdateService = inject(LapRefreshUpdateService);
  raceService = inject(RaceService);
  notificationService = inject(NotificationService);
  laps = signal([]);
  lapsMapById = signal(/* @__PURE__ */ new Map());
  constructor() {
    combineLatest({
      activeRace: toObservable(this.raceService.activeRace),
      lapLoadingConfig: toObservable(this.lapLoadingConfigService.lapLoadingConfig)
    }).pipe(takeUntilDestroyed(), switchMap(({ activeRace, lapLoadingConfig }) => {
      if (activeRace && lapLoadingConfig) {
        return this.loadAllLapsPaged(activeRace.id, [...this.laps().keys()], lapLoadingConfig.pageSize);
      }
      return [];
    })).subscribe((fetchedLaps) => {
      this.laps.set(this.merge(this.laps(), fetchedLaps));
      this.lapsMapById.set(new Map(this.laps().map((lap) => [lap.id, lap])));
    });
    toObservable(this.lapUpdateService.lapUpdate).pipe(switchMap((lapUpdate) => lapUpdate ? this.getLaps(lapUpdate.raceId, lapUpdate.updatedIds) : []), takeUntilDestroyed()).subscribe((updatedLaps) => {
      this.laps.set(this.merge(this.laps(), updatedLaps));
      this.lapsMapById.set(new Map(this.laps().map((lap) => [lap.id, lap])));
    });
    combineLatest({
      lapRefreshUpdate: toObservable(this.lapRefreshUpdateService.lapRefreshUpdate)
    }).pipe(takeUntilDestroyed()).subscribe((lapRefreshUpdate) => {
      if (lapRefreshUpdate) {
        this.refreshLaps();
      }
    });
  }
  refreshLaps() {
    const activeRace = this.raceService.activeRace();
    const lapLoadingConfig = this.lapLoadingConfigService.lapLoadingConfig();
    if (activeRace === void 0) {
      this.notificationService.info("No active race");
      return;
    }
    if (lapLoadingConfig) {
      let currentLapIds = [...this.lapsMapById().keys()];
      this.loadAllLapsPaged(activeRace.id, currentLapIds, lapLoadingConfig.pageSize).subscribe((fetchedLaps) => {
        this.laps.set(this.merge(this.laps(), fetchedLaps));
        this.lapsMapById.set(new Map(this.laps().map((lap) => [lap.id, lap])));
        this.notificationService.success("Laps refreshed");
      });
    }
  }
  reloadAllLaps() {
    const activeRace = this.raceService.activeRace();
    const lapLoadingConfig = this.lapLoadingConfigService.lapLoadingConfig();
    if (activeRace === void 0) {
      this.notificationService.info("No active race");
      return;
    }
    if (lapLoadingConfig) {
      this.loadAllLapsPaged(activeRace.id, [], lapLoadingConfig.pageSize).subscribe((fetchedLaps) => {
        this.laps.set(this.merge(this.laps(), fetchedLaps));
        this.lapsMapById.set(new Map(this.laps().map((lap) => [lap.id, lap])));
        this.notificationService.success("Laps refreshed");
      });
    }
  }
  merge(currentLaps, newLaps) {
    const currentLapsMap = new Map(currentLaps.map((lap) => [lap.id, lap]));
    newLaps.forEach((newLap) => {
      currentLapsMap.set(newLap.id, newLap);
    });
    return Array.from(currentLapsMap.values()).sort((a, b) => a.id - b.id);
  }
  loadAllLapsPaged(raceId, currentLapIds, pageSize) {
    return new Observable((observer) => {
      const allLaps = [];
      const loadPage = (pageNumber) => {
        this.getLapsPaged(raceId, currentLapIds, pageNumber, pageSize).subscribe({
          next: (result) => {
            allLaps.push(...result.laps);
            if (pageNumber < result.totalPages - 1) {
              loadPage(pageNumber + 1);
            } else {
              observer.next(allLaps);
              observer.complete();
            }
          },
          error: (err) => {
            observer.error(err);
          }
        });
      };
      loadPage(0);
    });
  }
  getLaps(raceId, ids) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/laps`, {
      raceId,
      ids
    }).pipe(map((result) => deserializeLapsDTO(result)));
  }
  getLapsPaged(raceId, currentLapIds, pageNumber, pageSize) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/laps-page`, {
      raceId,
      currentLapIds,
      pageNumber,
      pageSize
    }).pipe(map((result) => deserializeLapPageResult(result)));
  }
  static \u0275fac = function LapDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapDataService, factory: _LapDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/lap/service/lap.service.ts
var LapService = class _LapService {
  lapDataService = inject(LapDataService);
  lapConfigService = inject(LapConfigService);
  teamService = inject(TeamService);
  worker;
  cumulatedTimeByRaceNumber = signal(/* @__PURE__ */ new Map());
  pacesByRaceNumber = signal(/* @__PURE__ */ new Map());
  lastLapNumberByRaceNumber = signal(/* @__PURE__ */ new Map());
  validTeamPaceLaps = signal([]);
  teamBestLap = signal(void 0);
  lastTeamLap = signal(void 0);
  lastTeamLapDeltaMilliseconds = signal(void 0);
  pitLaps = signal([]);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-EX6PAGJD.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.cumulatedTimeByRaceNumber.set(data.cumulatedTimeByRaceNumber);
        this.pacesByRaceNumber.set(data.pacesByRaceNumber);
        this.lastLapNumberByRaceNumber.set(data.lastLapNumberByRaceNumber);
        this.validTeamPaceLaps.set(data.validTeamPaceLaps);
        this.teamBestLap.set(data.teamBestLap);
        this.lastTeamLap.set(data.lastTeamLap);
        this.lastTeamLapDeltaMilliseconds.set(data.lastTeamLapDeltaMilliseconds);
        this.pitLaps.set(data.pitLaps);
      };
    }
    combineLatest({
      laps: toObservable(this.lapDataService.lapsMapById),
      lapConfig: toObservable(this.lapConfigService.lapConfig),
      activeTeam: toObservable(this.teamService.activeTeam)
    }).pipe(takeUntilDestroyed()).subscribe(({ laps, lapConfig, activeTeam }) => {
      if (this.worker && lapConfig) {
        this.worker.postMessage({
          laps,
          lapConfig,
          activeTeam
        });
      }
    });
  }
  static \u0275fac = function LapService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LapService, factory: _LapService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  FirestoreService,
  LapConfigService,
  RaceConfigService,
  millisecondsInWeek,
  millisecondsInDay,
  millisecondsInMinute,
  millisecondsInHour,
  constructFrom,
  toDate,
  addMilliseconds,
  addHours,
  RaceService,
  LapLoadingConfigService,
  LapRefreshUpdateService,
  LapDataService,
  TeamDataService,
  TeamService,
  LapService
};
//# sourceMappingURL=chunk-PQBZRJZN.js.map
