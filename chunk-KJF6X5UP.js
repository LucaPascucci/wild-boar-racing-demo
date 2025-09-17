import {
  RacePositionService
} from "./chunk-JLOFOMRS.js";
import {
  FirestoreService,
  LapService,
  RaceService,
  TeamService
} from "./chunk-PQBZRJZN.js";
import {
  Timestamp,
  collection,
  collectionData,
  takeUntilDestroyed,
  toObservable
} from "./chunk-2V5B626X.js";
import {
  Injectable,
  combineLatest,
  inject,
  map,
  setClassMetadata,
  signal,
  takeUntil,
  ɵɵdefineInjectable
} from "./chunk-AM7K5Y7Q.js";

// src/app/gap/service/gap.service.ts
var GapService = class _GapService {
  teamService = inject(TeamService);
  lapService = inject(LapService);
  racePositionService = inject(RacePositionService);
  worker;
  gapAheadMilliseconds = signal(void 0);
  gapBehindMilliseconds = signal(void 0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-2ABMGWDI.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.gapAheadMilliseconds.set(data.gapAheadMilliseconds);
        this.gapBehindMilliseconds.set(data.gapBehindMilliseconds);
      };
    }
    combineLatest({
      cumulatedTimeByRaceNumber: toObservable(this.lapService.cumulatedTimeByRaceNumber),
      lastLapNumberByRaceNumber: toObservable(this.lapService.lastLapNumberByRaceNumber),
      racePositionByRaceNumber: toObservable(this.racePositionService.racePositionByRaceNumber),
      activeTeam: toObservable(this.teamService.activeTeam)
    }).pipe(takeUntilDestroyed()).subscribe(({ cumulatedTimeByRaceNumber, lastLapNumberByRaceNumber, racePositionByRaceNumber, activeTeam }) => {
      if (this.worker) {
        this.worker.postMessage({
          cumulatedTimeByRaceNumber,
          lastLapNumberByRaceNumber,
          racePositionByRaceNumber,
          activeTeam
        });
      }
    });
  }
  static \u0275fac = function GapService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GapService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GapService, factory: _GapService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GapService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/steering-wheel/service/steering-wheel-message-update.service.ts
var SteeringWheelMessageUpdateService = class _SteeringWheelMessageUpdateService extends FirestoreService {
  collectionPath = "/steering-wheel-message-updates";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceService = inject(RaceService);
  steeringWheelMessageUpdate = signal(void 0);
  constructor() {
    super();
    combineLatest({
      steeringWheelMessageUpdate: this.getSteeringWheelMessageUpdate()
    }).pipe(takeUntilDestroyed()).subscribe(({ steeringWheelMessageUpdate }) => {
      if (steeringWheelMessageUpdate) {
        const actual = this.steeringWheelMessageUpdate();
        if (!actual || actual.updatedAt < steeringWheelMessageUpdate.updatedAt) {
          this.steeringWheelMessageUpdate.set(steeringWheelMessageUpdate);
        }
      }
    });
  }
  updateMessageType(steeringWheelMessage) {
    let steeringWheelMessageUpdate = this.steeringWheelMessageUpdate();
    const activeRace = this.raceService.activeRace();
    if (activeRace === void 0) {
      this.notificationService.info("No active race");
      return;
    }
    if (!steeringWheelMessageUpdate) {
      steeringWheelMessageUpdate = {
        id: activeRace.id,
        deleted: false,
        raceId: activeRace.id,
        type: steeringWheelMessage.type,
        updatedAt: Timestamp.now()
      };
    }
    if (steeringWheelMessageUpdate) {
      steeringWheelMessageUpdate.type = steeringWheelMessage.type;
      steeringWheelMessageUpdate.updatedAt = Timestamp.now();
      steeringWheelMessageUpdate.deleted = false;
      this.updateDataWithMessage(steeringWheelMessageUpdate.id, steeringWheelMessageUpdate, "message type");
    }
  }
  getSteeringWheelMessageUpdate() {
    return combineLatest({
      steeringWheelMessageUpdates: collectionData(this.collectionRef),
      activeRace: toObservable(this.raceService.activeRace)
    }).pipe(takeUntil(this.destroyed), map(({ steeringWheelMessageUpdates, activeRace }) => {
      const result = steeringWheelMessageUpdates;
      if (activeRace && result.length > 0) {
        return result.filter((steeringWheelMessageUpdate) => !steeringWheelMessageUpdate.deleted && steeringWheelMessageUpdate.raceId === activeRace.id).at(0);
      }
      return void 0;
    }));
  }
  static \u0275fac = function SteeringWheelMessageUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SteeringWheelMessageUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SteeringWheelMessageUpdateService, factory: _SteeringWheelMessageUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SteeringWheelMessageUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/steering-wheel/model/steering-wheel-message.ts
function getContent(message) {
  switch (message.type) {
    case "box":
      return "BOX";
    case "safety-car":
      return "SAFETY CAR";
    case "fast-driver-behind":
      return "FAST DRIVER BEHIND";
  }
}
function getBackgroundColor(message) {
  switch (message.type) {
    case "box":
      return "bg-orange-500";
    case "safety-car":
      return "bg-yellow-500";
    case "fast-driver-behind":
      return "bg-blue-500";
  }
}
function getTextColor(message) {
  return "text-neutral-900";
}
function getInvertedBackgroundColor(message) {
  return "bg-neutral-900";
}
function getInvertedTextColor(message) {
  switch (message.type) {
    case "box":
      return "text-orange-500";
    case "safety-car":
      return "text-yellow-500";
    case "fast-driver-behind":
      return "text-blue-500";
  }
}
function getButtonBackgroundColor(message) {
  switch (message.type) {
    case "box":
      return "bg-orange-500 hover:bg-orange-700 disabled:bg-orange-200";
    case "safety-car":
      return "bg-yellow-500 hover:bg-yellow-700 disabled:bg-yellow-200";
    case "fast-driver-behind":
      return "bg-blue-500 hover:bg-blue-700 disabled:bg-blue-200";
  }
}

export {
  GapService,
  SteeringWheelMessageUpdateService,
  getContent,
  getBackgroundColor,
  getTextColor,
  getInvertedBackgroundColor,
  getInvertedTextColor,
  getButtonBackgroundColor
};
//# sourceMappingURL=chunk-KJF6X5UP.js.map
