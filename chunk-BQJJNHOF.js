import {
  DriverConfigService,
  PitConfigService
} from "./chunk-GDICOAUJ.js";
import {
  LapSimulatorService
} from "./chunk-J5ALJMDB.js";
import {
  LapSimulatorConfigService
} from "./chunk-5N6ZE7MA.js";
import {
  TooltipDirective,
  TooltipPosition
} from "./chunk-Q3SJZCYY.js";
import {
  CardComponent
} from "./chunk-ZQCYD6AC.js";
import {
  NavigatorComponent
} from "./chunk-LS565PEX.js";
import {
  Title
} from "./chunk-MCTF3ADD.js";
import {
  RacePositionService,
  millisecondsToHourMinuteSecondMillisecondString,
  millisecondsToMinuteSecondMillisecondsString
} from "./chunk-JLOFOMRS.js";
import {
  LapService,
  TeamDataService,
  TeamService
} from "./chunk-PQBZRJZN.js";
import {
  takeUntilDestroyed,
  toObservable
} from "./chunk-2V5B626X.js";
import {
  Component,
  Injectable,
  NgClass,
  NgForOf,
  combineLatest,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AM7K5Y7Q.js";
import "./chunk-YFKO4TLY.js";

// src/app/pit-simulator/service/pit-simulator.service.ts
var PitSimulatorService = class _PitSimulatorService {
  lapService = inject(LapService);
  pitConfig = inject(PitConfigService);
  driverConfigService = inject(DriverConfigService);
  lapSimulatorConfigService = inject(LapSimulatorConfigService);
  worker;
  pitDoneByRaceNumber = signal(/* @__PURE__ */ new Map());
  remainingPitByRaceNumber = signal(/* @__PURE__ */ new Map());
  remainingPitTimeMillisecondsByRaceNumber = signal(/* @__PURE__ */ new Map());
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-MWI5RENZ.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.pitDoneByRaceNumber.set(data.pitDoneByRaceNumber);
        this.remainingPitByRaceNumber.set(data.remainingPitByRaceNumber);
        this.remainingPitTimeMillisecondsByRaceNumber.set(data.remainingPitTimeMillisecondsByRaceNumber);
      };
    }
    combineLatest({
      pitLaps: toObservable(this.lapService.pitLaps),
      pacesByRaceNumber: toObservable(this.lapService.pacesByRaceNumber),
      pitConfig: toObservable(this.pitConfig.pitConfig),
      driverConfig: toObservable(this.driverConfigService.driverConfig),
      lapSimulatorConfig: toObservable(this.lapSimulatorConfigService.lapSimulatorConfig)
    }).pipe(takeUntilDestroyed()).subscribe(({ pitLaps, pacesByRaceNumber, pitConfig, driverConfig, lapSimulatorConfig }) => {
      if (this.worker && pitConfig && driverConfig && lapSimulatorConfig) {
        this.worker.postMessage({
          pitLaps,
          pacesByRaceNumber,
          pitConfig,
          driverConfig,
          lapSimulatorConfig
        });
      }
    });
  }
  static \u0275fac = function PitSimulatorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitSimulatorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PitSimulatorService, factory: _PitSimulatorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitSimulatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/race-simulator/service/race-simulator.service.ts
var RaceSimulatorService = class _RaceSimulatorService {
  lapSimulatorService = inject(LapSimulatorService);
  pitSimulatorService = inject(PitSimulatorService);
  worker;
  virtualRacePositionByRaceNumber = signal(/* @__PURE__ */ new Map());
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-3UVECWI6.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.virtualRacePositionByRaceNumber.set(data.virtualRacePositionByRaceNumber);
      };
    }
    combineLatest({
      virtualLastCumulatedTimeByRaceNumber: toObservable(this.lapSimulatorService.virtualLastCumulatedTimeByRaceNumber),
      remainingPitTimeMillisecondsByRaceNumber: toObservable(this.pitSimulatorService.remainingPitTimeMillisecondsByRaceNumber)
    }).pipe(takeUntilDestroyed()).subscribe(({ virtualLastCumulatedTimeByRaceNumber, remainingPitTimeMillisecondsByRaceNumber }) => {
      if (this.worker) {
        this.worker.postMessage({
          virtualLastCumulatedTimeByRaceNumber,
          remainingPitTimeMillisecondsByRaceNumber
        });
      }
    });
  }
  static \u0275fac = function RaceSimulatorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RaceSimulatorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RaceSimulatorService, factory: _RaceSimulatorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RaceSimulatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/gap-simulator/service/gap-simulator.service.ts
var GapSimulatorService = class _GapSimulatorService {
  lapSimulatorConfigService = inject(LapSimulatorConfigService);
  lapSimulatorService = inject(LapSimulatorService);
  worker;
  virtualGapByRaceNumber = signal(/* @__PURE__ */ new Map());
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-Q2CZCHNE.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.virtualGapByRaceNumber.set(data.virtualGapByRaceNumber);
      };
    }
    combineLatest({
      lapSimulatorConfig: toObservable(this.lapSimulatorConfigService.lapSimulatorConfig),
      virtualLastCumulatedTimeByRaceNumber: toObservable(this.lapSimulatorService.virtualLastCumulatedTimeByRaceNumber)
    }).pipe(takeUntilDestroyed()).subscribe(({ lapSimulatorConfig, virtualLastCumulatedTimeByRaceNumber }) => {
      if (this.worker && lapSimulatorConfig) {
        this.worker.postMessage({
          lapSimulatorConfig,
          virtualLastCumulatedTimeByRaceNumber
        });
      }
    });
  }
  static \u0275fac = function GapSimulatorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GapSimulatorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GapSimulatorService, factory: _GapSimulatorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GapSimulatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/live-ranking/component/live-ranking/live-ranking.component.ts
var _c0 = (a0) => ({ "cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700": true, "bg-neutral-200 dark:bg-neutral-600": a0 });
var _c1 = (a0, a1) => ({ "bg-green-100 dark:bg-green-900 font-semibold": a0, "hover:bg-neutral-100 dark:hover:bg-neutral-700": a1 });
function LiveRankingComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 11);
    \u0275\u0275text(1, " Category ");
    \u0275\u0275elementEnd();
  }
}
function LiveRankingComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, " Virtual gap ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx_r0.tooltipPredictedData)("tooltipPosition", ctx_r0.tooltipPosition);
  }
}
function LiveRankingComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " RP ");
  }
}
function LiveRankingComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Remaining pit ");
  }
}
function LiveRankingComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, " Remaining pit time ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx_r0.tooltipPredictedData)("tooltipPosition", ctx_r0.tooltipPosition);
  }
}
function LiveRankingComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " VP ");
  }
}
function LiveRankingComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Virtual position ");
  }
}
function LiveRankingComponent_tr_34_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", team_r2.category, " ");
  }
}
function LiveRankingComponent_tr_34_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getVirtualGap(team_r2.raceNumber), " ");
  }
}
function LiveRankingComponent_tr_34_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRemainingPitTimeString(team_r2.raceNumber), " ");
  }
}
function LiveRankingComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 17)(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, LiveRankingComponent_tr_34_Conditional_7_Template, 2, 1, "td", 21);
    \u0275\u0275elementStart(8, "td", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, LiveRankingComponent_tr_34_Conditional_10_Template, 2, 1, "td", 22);
    \u0275\u0275elementStart(11, "td", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, LiveRankingComponent_tr_34_Conditional_15_Template, 2, 1, "td", 22);
    \u0275\u0275elementStart(16, "td", 19);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c1, team_r2.id === ctx_r0.activeTeamId(), team_r2.id !== ctx_r0.activeTeamId()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRacePosition(team_r2.raceNumber), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r2.raceNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.smallScreen ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLastLapNumber(team_r2.raceNumber), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.smallScreen ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPitDone(team_r2.raceNumber), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRemainingPit(team_r2.raceNumber), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.smallScreen ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getVirtualPosition(team_r2.raceNumber), " ");
  }
}
var LiveRankingComponent = class _LiveRankingComponent {
  titleService = inject(Title);
  teamDataService = inject(TeamDataService);
  teamService = inject(TeamService);
  racePositionService = inject(RacePositionService);
  pitSimulatorService = inject(PitSimulatorService);
  raceSimulatorService = inject(RaceSimulatorService);
  lapService = inject(LapService);
  gapSimulatorService = inject(GapSimulatorService);
  // Sorting state management
  sortState = signal({ column: "position", direction: "asc" });
  teams = computed(() => {
    const allTeams = this.teamDataService.teams();
    const racePositionByRaceNumber = this.racePositionService.racePositionByRaceNumber();
    const currentSort = this.sortState();
    return allTeams.slice().sort((a, b) => {
      let comparison = 0;
      switch (currentSort.column) {
        case "position":
          const positionA = racePositionByRaceNumber.get(a.raceNumber);
          const positionB = racePositionByRaceNumber.get(b.raceNumber);
          if (positionA === void 0 && positionB === void 0) {
            comparison = a.raceNumber - b.raceNumber;
          } else if (positionA === void 0) {
            comparison = 1;
          } else if (positionB === void 0) {
            comparison = -1;
          } else {
            comparison = positionA - positionB;
          }
          break;
        case "raceNumber":
          comparison = a.raceNumber - b.raceNumber;
          break;
        case "finalPosition":
          const finalPositionA = this.getVirtualPosition(a.raceNumber);
          const finalPositionB = this.getVirtualPosition(b.raceNumber);
          const numA = typeof finalPositionA === "number" ? finalPositionA : Number.MAX_SAFE_INTEGER;
          const numB = typeof finalPositionB === "number" ? finalPositionB : Number.MAX_SAFE_INTEGER;
          comparison = numA - numB;
          break;
      }
      return currentSort.direction === "asc" ? comparison : -comparison;
    });
  });
  activeTeamId = computed(() => {
    const activeTeam = this.teamService.activeTeam();
    return activeTeam?.id;
  });
  tooltipPositionData = {
    footer: "",
    paragraphs: ["Position"],
    title: ""
  };
  tooltipRaceNumberData = {
    footer: "",
    paragraphs: ["Race Number"],
    title: ""
  };
  tooltipCalculatedData = {
    footer: "",
    paragraphs: ["Calculated from extracted laps"],
    title: ""
  };
  tooltipPredictedData = {
    footer: "",
    paragraphs: ["Predicted"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  smallScreen = false;
  constructor() {
    this.titleService.setTitle("WBR - Live ranking");
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
  }
  onResize() {
    this.smallScreen = 850 > window.innerWidth;
  }
  getRacePosition(raceNumber) {
    const racePositionByRaceNumber = this.racePositionService.racePositionByRaceNumber();
    return racePositionByRaceNumber.get(raceNumber) ?? "";
  }
  getLastLapNumber(raceNumber) {
    const lastLapNumberByRaceNumber = this.lapService.lastLapNumberByRaceNumber();
    return lastLapNumberByRaceNumber.get(raceNumber) ?? 0;
  }
  getVirtualGap(raceNumber) {
    const virtualGapByRaceNumber = this.gapSimulatorService.virtualGapByRaceNumber();
    let gapMilliseconds = virtualGapByRaceNumber.get(raceNumber);
    if (gapMilliseconds) {
      const prefix = gapMilliseconds > 0 ? "+ " : "- ";
      gapMilliseconds = Math.abs(gapMilliseconds);
      if (gapMilliseconds >= 36e5) {
        return prefix + millisecondsToHourMinuteSecondMillisecondString(gapMilliseconds);
      } else {
        return prefix + millisecondsToMinuteSecondMillisecondsString(gapMilliseconds);
      }
    }
    return "--:--.---";
  }
  getPitDone(raceNumber) {
    const pitDoneByRaceNumber = this.pitSimulatorService.pitDoneByRaceNumber();
    return pitDoneByRaceNumber.get(raceNumber) ?? 0;
  }
  getRemainingPit(raceNumber) {
    const remainingPitByRaceNumber = this.pitSimulatorService.remainingPitByRaceNumber();
    return remainingPitByRaceNumber.get(raceNumber) ?? 0;
  }
  getRemainingPitTimeString(raceNumber) {
    const remainingPitTimeMillisecondsByRaceNumber = this.pitSimulatorService.remainingPitTimeMillisecondsByRaceNumber();
    const value = remainingPitTimeMillisecondsByRaceNumber.get(raceNumber);
    if (value) {
      if (value >= 36e5) {
        millisecondsToHourMinuteSecondMillisecondString(value);
      } else {
        return millisecondsToMinuteSecondMillisecondsString(value);
      }
    }
    return "--:--.---";
  }
  getVirtualPosition(raceNumber) {
    const virtualRacePositionByRaceNumber = this.raceSimulatorService.virtualRacePositionByRaceNumber();
    return virtualRacePositionByRaceNumber.get(raceNumber) || 0;
  }
  // Sorting methods
  sortBy(column) {
    const currentSort = this.sortState();
    if (currentSort.column === column) {
      this.sortState.set({
        column,
        direction: currentSort.direction === "asc" ? "desc" : "asc"
      });
    } else {
      this.sortState.set({
        column,
        direction: "asc"
      });
    }
  }
  getSortIcon(column) {
    const currentSort = this.sortState();
    if (currentSort.column !== column) {
      return "\u2195\uFE0F";
    }
    return currentSort.direction === "asc" ? "\u2B06\uFE0F" : "\u2B07\uFE0F";
  }
  isSortedBy(column) {
    return this.sortState().column === column;
  }
  static \u0275fac = function LiveRankingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveRankingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveRankingComponent, selectors: [["app-live-ranking"]], decls: 35, vars: 38, consts: [[1, "p-4", "flex", "flex-row", "justify-between"], [1, "text-xl", "md:text-3xl", "dark:text-neutral-100", "text-neutral-900", "font-semibold"], [1, "mx-2", "grid", "grid-cols-1", "gap-2"], [1, "flex", "flex-col", "md:h-fit", "gap-2"], ["title", "\u{1F4FA} Live ranking", 3, "initiallyOpen", "canOpen"], ["slot", "body-content", 1, "max-h-[900px]", "flex", "flex-col", "overflow-clip"], [1, "w-full", "bg-neutral-50", "dark:bg-neutral-800", "table-fixed"], [1, "sticky", "top-0"], ["tooltip", "", 1, "max-w-8", "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400", "select-none", 3, "click", "ngClass", "tooltipEnabled", "tooltipData", "tooltipPosition"], ["tooltip", "", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400", "select-none", 3, "click", "ngClass", "tooltipEnabled", "tooltipData", "tooltipPosition"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["tooltip", "", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400", 3, "tooltipEnabled", "tooltipData", "tooltipPosition"], ["tooltip", "", "colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-right", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400", 3, "tooltipEnabled", "tooltipData", "tooltipPosition"], [1, "flex-1", "overflow-y-auto"], [1, "w-full", "table-fixed"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-right", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"]], template: function LiveRankingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "\u{1F4FA} WBR - Live ranking \u{1F417}");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-navigator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "app-card", 4)(7, "div", 5)(8, "table", 6)(9, "thead", 7)(10, "tr")(11, "th", 8);
      \u0275\u0275listener("click", function LiveRankingComponent_Template_th_click_11_listener() {
        return ctx.sortBy("position");
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "th", 9);
      \u0275\u0275listener("click", function LiveRankingComponent_Template_th_click_13_listener() {
        return ctx.sortBy("raceNumber");
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "th", 10);
      \u0275\u0275text(16, " Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, LiveRankingComponent_Conditional_17_Template, 2, 0, "th", 11);
      \u0275\u0275elementStart(18, "th", 12);
      \u0275\u0275text(19, " Lap ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, LiveRankingComponent_Conditional_20_Template, 2, 3, "th", 13);
      \u0275\u0275elementStart(21, "th", 12);
      \u0275\u0275text(22, " Pit ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th", 12);
      \u0275\u0275template(24, LiveRankingComponent_Conditional_24_Template, 1, 0)(25, LiveRankingComponent_Conditional_25_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, LiveRankingComponent_Conditional_26_Template, 2, 3, "th", 13);
      \u0275\u0275elementStart(27, "th", 9);
      \u0275\u0275listener("click", function LiveRankingComponent_Template_th_click_27_listener() {
        return ctx.sortBy("finalPosition");
      });
      \u0275\u0275template(28, LiveRankingComponent_Conditional_28_Template, 1, 0)(29, LiveRankingComponent_Conditional_29_Template, 1, 0);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 14)(32, "table", 15)(33, "tbody");
      \u0275\u0275template(34, LiveRankingComponent_tr_34_Template, 18, 14, "tr", 16);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("initiallyOpen", true)("canOpen", false);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c0, ctx.isSortedBy("position")))("tooltipEnabled", true)("tooltipData", ctx.tooltipPositionData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" P ", ctx.getSortIcon("position"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c0, ctx.isSortedBy("raceNumber")))("tooltipEnabled", true)("tooltipData", ctx.tooltipRaceNumberData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" RN ", ctx.getSortIcon("raceNumber"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.smallScreen ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipCalculatedData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.smallScreen ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipCalculatedData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(2);
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipPredictedData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.smallScreen ? 24 : 25);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.smallScreen ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(36, _c0, ctx.isSortedBy("finalPosition")))("tooltipEnabled", true)("tooltipData", ctx.tooltipPredictedData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.smallScreen ? 28 : 29);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.getSortIcon("finalPosition"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.teams());
    }
  }, dependencies: [
    NavigatorComponent,
    CardComponent,
    NgForOf,
    TooltipDirective,
    NgClass
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveRankingComponent, [{
    type: Component,
    args: [{ selector: "app-live-ranking", imports: [
      NavigatorComponent,
      CardComponent,
      NgForOf,
      TooltipDirective,
      NgClass
    ], template: `<div class="p-4 flex flex-row justify-between">
  <div class="text-xl md:text-3xl dark:text-neutral-100 text-neutral-900 font-semibold">\u{1F4FA} WBR - Live ranking \u{1F417}</div>
  <app-navigator></app-navigator>
</div>

<div class="mx-2 grid grid-cols-1 gap-2">
  <div class="flex flex-col md:h-fit gap-2">
    <app-card
      title="\u{1F4FA} Live ranking"
      [initiallyOpen]="true"
      [canOpen]="false">

      <div slot="body-content" class="max-h-[900px] flex flex-col overflow-clip">
        <table class="w-full bg-neutral-50 dark:bg-neutral-800 table-fixed">
          <thead class="sticky top-0">
          <tr>
            <th (click)="sortBy('position')"
                [ngClass]="{'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700': true, 'bg-neutral-200 dark:bg-neutral-600': isSortedBy('position')}"
                tooltip [tooltipEnabled]="true" [tooltipData]="tooltipPositionData" [tooltipPosition]="tooltipPosition"
                class="max-w-8 py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400 select-none">
              P {{ getSortIcon('position') }}
            </th>
            <th (click)="sortBy('raceNumber')"
                [ngClass]="{'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700': true, 'bg-neutral-200 dark:bg-neutral-600': isSortedBy('raceNumber')}"
                tooltip [tooltipEnabled]="true" [tooltipData]="tooltipRaceNumberData" [tooltipPosition]="tooltipPosition"
                class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400 select-none">
              RN {{ getSortIcon('raceNumber') }}
            </th>
            <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
                colspan="2">
              Name
            </th>
            @if (!smallScreen) {
              <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
                Category
              </th>
            }
            <th tooltip [tooltipEnabled]="true" [tooltipData]="tooltipCalculatedData" [tooltipPosition]="tooltipPosition"
                class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
              Lap
            </th>
            @if (!smallScreen) {
            <th tooltip [tooltipEnabled]="true" [tooltipData]="tooltipPredictedData" [tooltipPosition]="tooltipPosition"
                class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-right text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
                colspan="2">
              Virtual gap
            </th>
            }
            <th tooltip [tooltipEnabled]="true" [tooltipData]="tooltipCalculatedData" [tooltipPosition]="tooltipPosition"
              class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
              Pit
            </th>
            <th tooltip [tooltipEnabled]="true" [tooltipData]="tooltipPredictedData" [tooltipPosition]="tooltipPosition"
                class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
              @if (smallScreen) {
                RP
              } @else {
                Remaining pit
              }
            </th>
            @if (!smallScreen) {
              <th tooltip [tooltipEnabled]="true" [tooltipData]="tooltipPredictedData" [tooltipPosition]="tooltipPosition"
                  class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-right text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
                  colspan="2">
                Remaining pit time
              </th>
            }
            <th (click)="sortBy('finalPosition')"
                [ngClass]="{'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700': true, 'bg-neutral-200 dark:bg-neutral-600': isSortedBy('finalPosition')}"
                tooltip [tooltipEnabled]="true" [tooltipData]="tooltipPredictedData" [tooltipPosition]="tooltipPosition"
                class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400 select-none">
              @if (smallScreen) {
                VP
              } @else {
                Virtual position
              } {{ getSortIcon('finalPosition') }}
            </th>
          </tr>
          </thead>
        </table>
        <div class="flex-1 overflow-y-auto">
          <table class="w-full table-fixed">
            <tbody>
            <tr *ngFor="let team of teams()"
                [ngClass]="{'bg-green-100 dark:bg-green-900 font-semibold': team.id === activeTeamId(), 'hover:bg-neutral-100 dark:hover:bg-neutral-700': team.id !== activeTeamId()}">
              <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
                {{ getRacePosition(team.raceNumber)}}
              </td>
              <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
                {{ team.raceNumber }}
              </td>
              <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100"
                  colspan="2">
                {{ team.name }}
              </td>
              @if (!smallScreen) {
                <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100">
                  {{ team.category }}
                </td>
              }
              <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
                {{ getLastLapNumber(team.raceNumber) }}
              </td>
              @if (!smallScreen) {
                <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-right text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
                    colspan="2">
                  {{ getVirtualGap(team.raceNumber) }}
                </td>
              }
              <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
                {{ getPitDone(team.raceNumber) }}
              </td>
              <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
                {{ getRemainingPit(team.raceNumber) }}
              </td>
              @if (!smallScreen) {
                <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-right text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
                    colspan="2">
                  {{ getRemainingPitTimeString(team.raceNumber) }}
                </td>
              }
              <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
                {{ getVirtualPosition(team.raceNumber) }}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </app-card>
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveRankingComponent, { className: "LiveRankingComponent", filePath: "src/app/live-ranking/component/live-ranking/live-ranking.component.ts", lineNumber: 42 });
})();
export {
  LiveRankingComponent
};
//# sourceMappingURL=chunk-BQJJNHOF.js.map
