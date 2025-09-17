import {
  BoardConfigService,
  ChipComponent,
  DriverService,
  KartConfigService,
  LapMissingDataService,
  LapMissingService,
  LiveTimingConfigService,
  PitDataService,
  PitLaneConfigService,
  StintDataService,
  TimelineConfigService,
  TyreConfigService
} from "./chunk-3KS63GZX.js";
import {
  DriverConfigService,
  PitConfigService
} from "./chunk-GDICOAUJ.js";
import {
  LapSimulatorConfigService
} from "./chunk-5N6ZE7MA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BFFHFKXW.js";
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
  SteeringWheelConfigService
} from "./chunk-IMNU3N6K.js";
import {
  FirestoreService,
  LapConfigService,
  LapDataService,
  LapLoadingConfigService,
  LapRefreshUpdateService,
  LapService,
  RaceConfigService,
  RaceService,
  TeamDataService
} from "./chunk-PQBZRJZN.js";
import {
  NotificationService,
  collection,
  collectionData,
  takeUntilDestroyed,
  toObservable
} from "./chunk-2V5B626X.js";
import {
  Component,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  combineLatest,
  computed,
  effect,
  environment,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-AM7K5Y7Q.js";
import "./chunk-YFKO4TLY.js";

// src/app/lap/component/lap-config/lap-config.component.ts
var LapConfigComponent = class _LapConfigComponent {
  lapConfigService = inject(LapConfigService);
  lapDataService = inject(LapDataService);
  lapRefreshUpdateService = inject(LapRefreshUpdateService);
  referenceLapTime = 0;
  paceLapTimeThreshold = 0;
  paceLapNumber = 0;
  tooltipData = {
    footer: "",
    paragraphs: ["Refresh laps data"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  constructor() {
    effect(() => {
      const lapConfig = this.lapConfigService.lapConfig();
      if (lapConfig) {
        this.referenceLapTime = lapConfig.referenceLapTimeMillisecond;
        this.paceLapTimeThreshold = lapConfig.paceLapThresholdMilliseconds;
        this.paceLapNumber = lapConfig.paceLapNumber;
      }
    });
  }
  // REFERENCE LAP TIME
  onSubmitReferenceLapTime() {
    this.lapConfigService.updateReferenceLapTime(this.referenceLapTime);
  }
  // PACE LAP TIME THRESHOLD
  onSubmitPaceLapTimeThreshold() {
    this.lapConfigService.updatePaceLapThreshold(this.paceLapTimeThreshold);
  }
  // PACE LAP NUMBER
  onSubmitPaceLapNumber() {
    this.lapConfigService.updatePaceLapNumber(this.paceLapNumber);
  }
  increasePaceLapNumber() {
    this.lapConfigService.updatePaceLapNumber(this.paceLapNumber + 1);
  }
  decreasePaceLapNumber() {
    this.lapConfigService.updatePaceLapNumber(this.paceLapNumber - 1);
  }
  refreshLaps() {
    this.lapRefreshUpdateService.updateRefresh();
    this.lapDataService.refreshLaps();
  }
  static \u0275fac = function LapConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LapConfigComponent, selectors: [["app-lap-config"]], decls: 29, vars: 7, consts: [["title", "\u23F1\uFE0F Lap", 3, "initiallyOpen"], ["slot", "header-right-content"], ["type", "button", "tooltip", "", "aria-label", "Refresh data", 1, "text-neutral-500", "dark:text-neutral-400", "hover:ring-2", "rounded-full", "p-1", "transition-colors", "duration-200", "hover:cursor-pointer", 3, "click", "tooltipEnabled", "tooltipData", "tooltipPosition"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", "clip-rule", "evenodd"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-center"], [1, "text-left", 3, "ngSubmit"], ["type", "number", "id", "referenceLapTime", "name", "referenceLapTime", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-30", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "items-end"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flew-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-black", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [3, "ngSubmit"], ["type", "number", "id", "paceLapNumber", "name", "paceLapNumber", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "paceLapTimeThreshold", "name", "paceLapTimeThreshold", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-30", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"]], template: function LapConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function LapConfigComponent_Template_button_click_2_listener() {
        return ctx.refreshLaps();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div")(8, "div", 7);
      \u0275\u0275text(9, "Reference time (mills)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function LapConfigComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmitReferenceLapTime();
      });
      \u0275\u0275elementStart(11, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LapConfigComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.referenceLapTime, $event) || (ctx.referenceLapTime = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(12, "hr");
      \u0275\u0275elementStart(13, "div", 10)(14, "div")(15, "div", 11);
      \u0275\u0275text(16, "Considered pace laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "button", 13);
      \u0275\u0275listener("click", function LapConfigComponent_Template_button_click_18_listener() {
        return ctx.increasePaceLapNumber();
      });
      \u0275\u0275text(19, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "form", 14);
      \u0275\u0275listener("ngSubmit", function LapConfigComponent_Template_form_ngSubmit_20_listener() {
        return ctx.onSubmitPaceLapNumber();
      });
      \u0275\u0275elementStart(21, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function LapConfigComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.paceLapNumber, $event) || (ctx.paceLapNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "button", 13);
      \u0275\u0275listener("click", function LapConfigComponent_Template_button_click_22_listener() {
        return ctx.decreasePaceLapNumber();
      });
      \u0275\u0275text(23, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div")(25, "div", 16);
      \u0275\u0275text(26, "Pace time threshold (mills)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "form", 17);
      \u0275\u0275listener("ngSubmit", function LapConfigComponent_Template_form_ngSubmit_27_listener() {
        return ctx.onSubmitPaceLapTimeThreshold();
      });
      \u0275\u0275elementStart(28, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function LapConfigComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.paceLapTimeThreshold, $event) || (ctx.paceLapTimeThreshold = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.referenceLapTime);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.paceLapNumber);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.paceLapTimeThreshold);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    ReactiveFormsModule,
    CardComponent,
    TooltipDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapConfigComponent, [{
    type: Component,
    args: [{ selector: "app-lap-config", imports: [
      FormsModule,
      ReactiveFormsModule,
      CardComponent,
      TooltipDirective
    ], template: '<app-card\n  title="\u23F1\uFE0F Lap"\n  [initiallyOpen]="false">\n\n  <div slot="header-right-content">\n    <button type="button"\n            tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition"\n            class="text-neutral-500 dark:text-neutral-400 hover:ring-2 rounded-full p-1 transition-colors duration-200 hover:cursor-pointer"\n            (click)="refreshLaps()"\n            aria-label="Refresh data">\n      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">\n        <path fill-rule="evenodd"\n              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"\n              clip-rule="evenodd"></path>\n      </svg>\n    </button>\n  </div>\n\n  <div slot="body-content" class="flex flex-col gap-2">\n    <div class="flex justify-between">\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-center">Reference time (mills)</div>\n        <form (ngSubmit)="onSubmitReferenceLapTime()" class="text-left">\n          <input\n            type="number"\n            id="referenceLapTime"\n            [(ngModel)]="referenceLapTime"\n            name="referenceLapTime"\n            class="border rounded-lg px-2 py-1 max-w-30 text-right text-neutral-900 dark:text-neutral-100"\n            required\n            min="1"\n          />\n        </form>\n      </div>\n    </div>\n\n    <hr>\n\n    <div class="flex justify-between items-end">\n\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-left">Considered pace laps</div>\n        <div class="flex justify-start flew-row gap-1">\n          <button (click)="increasePaceLapNumber()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            +\n          </button>\n          <form (ngSubmit)="onSubmitPaceLapNumber()">\n            <input\n              type="number"\n              id="paceLapNumber"\n              [(ngModel)]="paceLapNumber"\n              name="paceLapNumber"\n              class="border rounded-lg px-2 py-1 max-w-20 text-right text-neutral-900 dark:text-neutral-100"\n              required\n              min="1"\n            />\n          </form>\n          <button (click)="decreasePaceLapNumber()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            -\n          </button>\n        </div>\n      </div>\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-right">Pace time threshold (mills)</div>\n        <form (ngSubmit)="onSubmitPaceLapTimeThreshold()" class="text-right">\n          <input\n            type="number"\n            id="paceLapTimeThreshold"\n            [(ngModel)]="paceLapTimeThreshold"\n            name="paceLapTimeThreshold"\n            class="border rounded-lg px-2 py-1 max-w-30 text-right text-neutral-900 dark:text-neutral-100"\n            required\n            min="1"\n          />\n        </form>\n      </div>\n    </div>\n  </div>\n\n</app-card>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LapConfigComponent, { className: "LapConfigComponent", filePath: "src/app/lap/component/lap-config/lap-config.component.ts", lineNumber: 22 });
})();

// src/app/live-timing/service/live-timing.service.ts
var LiveTimingService = class _LiveTimingService {
  path = "/live-timing-extraction-management";
  httpClient = inject(HttpClient);
  sources = signal([]);
  constructor() {
    this.getSources().pipe(takeUntilDestroyed()).subscribe((sources) => {
      this.sources.set(sources);
    });
  }
  getSources() {
    return this.httpClient.get(`${environment.baseUrl}${this.path}/sources`);
  }
  static \u0275fac = function LiveTimingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveTimingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LiveTimingService, factory: _LiveTimingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveTimingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/live-timing/service/live-timing-extraction-update.service.ts
var LiveTimingExtractionUpdateService = class _LiveTimingExtractionUpdateService extends FirestoreService {
  collectionPath = "/live-timing-extraction-update";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceService = inject(RaceService);
  liveTimingExtractionUpdate = signal(void 0);
  constructor() {
    super();
    combineLatest({
      liveTimingExtractionUpdate: this.getLiveTimingExtractionUpdate()
    }).pipe(takeUntilDestroyed()).subscribe(({ liveTimingExtractionUpdate }) => {
      if (liveTimingExtractionUpdate) {
        const actual = this.liveTimingExtractionUpdate();
        if (!actual || actual.updatedAt < liveTimingExtractionUpdate.updatedAt) {
          this.liveTimingExtractionUpdate.set(liveTimingExtractionUpdate);
        }
      }
    });
  }
  getLiveTimingExtractionUpdate() {
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
  static \u0275fac = function LiveTimingExtractionUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveTimingExtractionUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LiveTimingExtractionUpdateService, factory: _LiveTimingExtractionUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveTimingExtractionUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/live-timing/service/live-timing-extraction-data.service.ts
var LiveTimingExtractionDataService = class _LiveTimingExtractionDataService {
  path = "/live-timing-extraction-management";
  httpClient = inject(HttpClient);
  liveTimingExtractionUpdateService = inject(LiveTimingExtractionUpdateService);
  raceService = inject(RaceService);
  notificationService = inject(NotificationService);
  liveTimingConfigService = inject(LiveTimingConfigService);
  liveTimingExtraction = signal(void 0);
  constructor() {
    combineLatest({
      activeRace: toObservable(this.raceService.activeRace)
    }).pipe(takeUntilDestroyed(), switchMap(({ activeRace }) => {
      if (activeRace) {
        return this.getActiveLiveTimingExtraction(activeRace.id);
      }
      return of(void 0);
    })).subscribe((fetchedLiveTimingExtraction) => {
      this.liveTimingExtraction.set(fetchedLiveTimingExtraction);
    });
    toObservable(this.liveTimingExtractionUpdateService.liveTimingExtractionUpdate).pipe(takeUntilDestroyed(), switchMap((liveTimingExtractionUpdate) => {
      if (!liveTimingExtractionUpdate) {
        return of({
          fetchedLiveTimingExtraction: void 0,
          deletedId: void 0
        });
      }
      if (liveTimingExtractionUpdate.updatedId) {
        return this.getActiveLiveTimingExtraction(liveTimingExtractionUpdate.raceId).pipe(map((fetchedLiveTimingExtraction) => ({
          fetchedLiveTimingExtraction,
          deletedId: liveTimingExtractionUpdate.deletedId
        })));
      }
      return [{
        fetchedLiveTimingExtraction: void 0,
        deletedId: liveTimingExtractionUpdate.deletedId
      }];
    })).subscribe((result) => {
      const currentLiveTimingExtraction = this.liveTimingExtraction();
      if (result.fetchedLiveTimingExtraction) {
        this.liveTimingExtraction.set(result.fetchedLiveTimingExtraction);
      } else if (result.deletedId && currentLiveTimingExtraction?.id === result.deletedId) {
        this.liveTimingExtraction.set(void 0);
      }
    });
  }
  refreshActiveLiveTimingExtraction() {
    const activeRace = this.raceService.activeRace();
    if (activeRace === void 0) {
      this.notificationService.info("No active race");
      return;
    }
    this.getActiveLiveTimingExtraction(activeRace.id).subscribe((fetchedLiveTimingExtraction) => {
      this.liveTimingExtraction.set(fetchedLiveTimingExtraction);
      this.notificationService.success("Live timing extraction refreshed");
    });
  }
  startExtraction() {
    const activeRace = this.raceService.activeRace();
    const config = this.liveTimingConfigService.liveTimingConfig();
    if (activeRace === void 0) {
      this.notificationService.info("No active race");
      return;
    }
    if (config) {
      this.startLiveTimingExtraction(activeRace.id, config.source, config.url).subscribe(() => {
        this.notificationService.success("Live timing extraction started");
      });
    }
  }
  stopExtraction() {
    const activeLiveTimingExtraction = this.liveTimingExtraction();
    if (activeLiveTimingExtraction === void 0) {
      this.notificationService.info("No live timing extraction is running");
      return;
    }
    this.stopLiveTimingExtraction(activeLiveTimingExtraction.id).subscribe(() => {
      this.notificationService.success("Live timing extraction stopped");
    });
  }
  forceExtraction() {
    const activeLiveTimingExtraction = this.liveTimingExtraction();
    if (activeLiveTimingExtraction === void 0) {
      this.notificationService.info("No live timing extraction is running");
      return;
    }
    this.forceLiveTimingExtraction(activeLiveTimingExtraction.id).subscribe(() => {
      this.notificationService.success("Live timing extraction forced");
    });
  }
  testCloudTaskQueue() {
    this.httpClient.get(`${environment.baseUrl}${this.path}/test-cloud-task-queue`).subscribe((result) => {
      this.notificationService.success("Cloud task queue test successful");
    });
  }
  getActiveLiveTimingExtraction(raceId) {
    return this.httpClient.get(`${environment.baseUrl}${this.path}/active-live-timing-extraction/${raceId}`).pipe(map((result) => result ? result : void 0));
  }
  startLiveTimingExtraction(raceId, source, url) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/start`, {
      raceId,
      source,
      webSiteUrl: url
    }).pipe(map((result) => result ? result : void 0));
  }
  stopLiveTimingExtraction(id) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/stop/${id}`, {});
  }
  forceLiveTimingExtraction(id) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/force-extraction/${id}`, {});
  }
  static \u0275fac = function LiveTimingExtractionDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveTimingExtractionDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LiveTimingExtractionDataService, factory: _LiveTimingExtractionDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveTimingExtractionDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/live-timing/component/live-timing-config/live-timing-config.component.ts
var _c0 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function LiveTimingConfigComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const source_r1 = ctx.$implicit;
    \u0275\u0275property("value", source_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", source_r1, " ");
  }
}
function LiveTimingConfigComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function LiveTimingConfigComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var LiveTimingConfigComponent = class _LiveTimingConfigComponent {
  boardConfigService = inject(BoardConfigService);
  liveTimingConfigService = inject(LiveTimingConfigService);
  liveTimingService = inject(LiveTimingService);
  raceService = inject(RaceService);
  liveTimingExtractionDataService = inject(LiveTimingExtractionDataService);
  sources = this.liveTimingService.sources;
  isActiveRace = computed(() => {
    return this.raceService.activeRace() !== void 0;
  });
  isActiveLiveTimingExtraction = computed(() => {
    return this.liveTimingExtractionDataService.liveTimingExtraction() !== void 0;
  });
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.liveTimingVisible;
    }
    return false;
  });
  selectedSource = "";
  url = "";
  tooltipData = {
    footer: "",
    paragraphs: ["Refresh active live timing extraction data"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  constructor() {
    effect(() => {
      const config = this.liveTimingConfigService.liveTimingConfig();
      if (config) {
        this.selectedSource = config.source;
        this.url = config.url;
      }
    });
  }
  updateLiveTimingVisibility() {
    this.boardConfigService.updateLiveTimingVisibility(!this.visible());
  }
  onSubmitUrl() {
    this.liveTimingConfigService.updateUrl(this.url.trim());
  }
  onSubmitSource() {
    this.liveTimingConfigService.updateSource(this.selectedSource.trim());
  }
  refreshActiveLiveTimingExtraction() {
    this.liveTimingExtractionDataService.refreshActiveLiveTimingExtraction();
  }
  startLiveTimingExtraction() {
    this.liveTimingExtractionDataService.startExtraction();
  }
  stopLiveTimingExtraction() {
    this.liveTimingExtractionDataService.stopExtraction();
  }
  forceLiveTimingExtraction() {
    this.liveTimingExtractionDataService.forceExtraction();
  }
  testCloudTaskQueue() {
    this.liveTimingExtractionDataService.testCloudTaskQueue();
  }
  static \u0275fac = function LiveTimingConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveTimingConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveTimingConfigComponent, selectors: [["app-live-timing-config"]], decls: 35, vars: 19, consts: [["title", "\u{1F417}\u{1F4A8} Live timing", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor"], ["type", "button", "tooltip", "", "aria-label", "Refresh data", 1, "text-neutral-500", "dark:text-neutral-400", "hover:ring-2", "rounded-full", "p-1", "transition-colors", "duration-200", "hover:cursor-pointer", 3, "click", "tooltipEnabled", "tooltipData", "tooltipPosition"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", "clip-rule", "evenodd"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "text-left", 3, "ngSubmit"], ["id", "url", "name", "url", "required", "", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-80", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], ["id", "source", "name", "source", 1, "border", "border-neutral-400", "dark:border-neutral-100", "rounded-sm", "p-1", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bg-green-500", "hover:bg-green-700", "disabled:bg-green-200", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "disabled"], [1, "bg-red-500", "hover:bg-red-700", "disabled:bg-red-200", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "disabled"], [1, "bg-yellow-500", "hover:bg-yellow-700", "disabled:bg-yellow-200", "text-neutral-100", "disabled:text-neutral-400", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "disabled"], [1, "bg-blue-500", "hover:bg-blue-700", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"], [3, "value"]], template: function LiveTimingConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2)(3, "app-chip", 2);
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function LiveTimingConfigComponent_Template_button_click_4_listener() {
        return ctx.refreshActiveLiveTimingExtraction();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 4);
      \u0275\u0275element(6, "path", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div")(10, "div", 8);
      \u0275\u0275text(11, "URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "form", 9);
      \u0275\u0275listener("ngSubmit", function LiveTimingConfigComponent_Template_form_ngSubmit_12_listener() {
        return ctx.onSubmitUrl();
      });
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function LiveTimingConfigComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.url, $event) || (ctx.url = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div")(15, "div", 11);
      \u0275\u0275text(16, "Source");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "form")(18, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function LiveTimingConfigComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedSource, $event) || (ctx.selectedSource = $event);
        return $event;
      });
      \u0275\u0275listener("change", function LiveTimingConfigComponent_Template_select_change_18_listener() {
        return ctx.onSubmitSource();
      });
      \u0275\u0275template(19, LiveTimingConfigComponent_option_19_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "div", 7)(21, "button", 14);
      \u0275\u0275listener("click", function LiveTimingConfigComponent_Template_button_click_21_listener() {
        return ctx.startLiveTimingExtraction();
      });
      \u0275\u0275text(22, " Start extraction ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 15);
      \u0275\u0275listener("click", function LiveTimingConfigComponent_Template_button_click_23_listener() {
        return ctx.stopLiveTimingExtraction();
      });
      \u0275\u0275text(24, " Stop extraction ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 7)(26, "button", 16);
      \u0275\u0275listener("click", function LiveTimingConfigComponent_Template_button_click_26_listener() {
        return ctx.forceLiveTimingExtraction();
      });
      \u0275\u0275text(27, " Force lap extraction ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 17);
      \u0275\u0275listener("click", function LiveTimingConfigComponent_Template_button_click_28_listener() {
        return ctx.testCloudTaskQueue();
      });
      \u0275\u0275text(29, " Test cloud task queue ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "button", 19);
      \u0275\u0275listener("click", function LiveTimingConfigComponent_Template_button_click_31_listener() {
        return ctx.updateLiveTimingVisibility();
      });
      \u0275\u0275template(32, LiveTimingConfigComponent_Conditional_32_Template, 1, 0)(33, LiveTimingConfigComponent_Conditional_33_Template, 1, 0);
      \u0275\u0275text(34, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", "Extraction " + (ctx.isActiveLiveTimingExtraction() ? "running" : "stopped"))("backgroundColor", ctx.isActiveLiveTimingExtraction() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance();
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance();
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.url);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedSource);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.sources());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isActiveLiveTimingExtraction() && !ctx.isActiveRace());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.isActiveLiveTimingExtraction());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.isActiveLiveTimingExtraction());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c0, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 32 : 33);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    NgModel,
    NgForm,
    NgForOf,
    CardComponent,
    NgClass,
    TooltipDirective,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveTimingConfigComponent, [{
    type: Component,
    args: [{ selector: "app-live-timing-config", imports: [
      FormsModule,
      NgForOf,
      CardComponent,
      NgClass,
      TooltipDirective,
      ChipComponent
    ], template: `<app-card
  title="\u{1F417}\u{1F4A8} Live timing"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="'Extraction ' + (isActiveLiveTimingExtraction() ? 'running' : 'stopped')"
      [backgroundColor]="isActiveLiveTimingExtraction() ? 'bg-green-500' : 'bg-yellow-500'"
    />

    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />

    <button type="button"
            tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition"
            class="text-neutral-500 dark:text-neutral-400 hover:ring-2 rounded-full p-1 transition-colors duration-200 hover:cursor-pointer"
            (click)="refreshActiveLiveTimingExtraction()"
            aria-label="Refresh data">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">URL</div>
        <form (ngSubmit)="onSubmitUrl()" class="text-left">
          <input
            id="url"
            [(ngModel)]="url"
            name="url"
            class="border rounded-lg px-2 py-1 max-w-80 text-right text-neutral-900 dark:text-neutral-100"
            required
          />
        </form>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Source</div>
        <form>
          <select
            id="source"
            [(ngModel)]="selectedSource"
            (change)="onSubmitSource()"
            name="source"
            class="border border-neutral-400 dark:border-neutral-100 rounded-sm p-1 text-neutral-900 dark:text-neutral-100">
            <option *ngFor="let source of sources()" [value]=source>
              {{ source }}
            </option>
          </select>
        </form>
      </div>
    </div>

    <div class="flex justify-between">
      <button
        (click)="startLiveTimingExtraction()"
        [disabled]="isActiveLiveTimingExtraction() && !isActiveRace()"
        class="bg-green-500 hover:bg-green-700 disabled:bg-green-200 text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
        Start extraction
      </button>

      <button
        (click)="stopLiveTimingExtraction()"
        [disabled]="!isActiveLiveTimingExtraction()"
        class="bg-red-500 hover:bg-red-700 disabled:bg-red-200 text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
        Stop extraction
      </button>
    </div>

    <div class="flex justify-between">
      <button
        (click)="forceLiveTimingExtraction()"
        [disabled]="!isActiveLiveTimingExtraction()"
        class="bg-yellow-500 hover:bg-yellow-700 disabled:bg-yellow-200 text-neutral-100 disabled:text-neutral-400 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
        Force lap extraction
      </button>

      <button
        (click)="testCloudTaskQueue()"
        class="bg-blue-500 hover:bg-blue-700 text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
        Test cloud task queue
      </button>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateLiveTimingVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveTimingConfigComponent, { className: "LiveTimingConfigComponent", filePath: "src/app/live-timing/component/live-timing-config/live-timing-config.component.ts", lineNumber: 28 });
})();

// src/app/driver/component/driver-config/driver-config.component.ts
var _c02 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function DriverConfigComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function DriverConfigComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var DriverConfigComponent = class _DriverConfigComponent {
  boardConfigService = inject(BoardConfigService);
  driverConfigService = inject(DriverConfigService);
  driverService = inject(DriverService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.driverVisible;
    }
    return false;
  });
  minDriverOnTrackMinute = 0;
  maxDriverOnTrackMinute = 0;
  warningDriverOnTrackThresholdMinute = 0;
  tooltipData = {
    footer: "",
    paragraphs: ["Refresh driver data"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  constructor() {
    effect(() => {
      const config = this.driverConfigService.driverConfig();
      if (config) {
        this.minDriverOnTrackMinute = config.minDriverOnTrackMinute;
        this.maxDriverOnTrackMinute = config.maxDriverOnTrackMinute;
        this.warningDriverOnTrackThresholdMinute = config.warningDriverOnTrackThresholdMinute;
      }
    });
  }
  refreshDrivers() {
    this.driverService.refreshDrivers();
  }
  updateDriverVisibility() {
    this.boardConfigService.updateDriverVisibility(!this.visible());
  }
  // MIN DRIVER ON TRACK MINUTE
  onSubmitMinDriverOnTrackMinute() {
    this.driverConfigService.updateMinDriverOnTrackMinute(this.minDriverOnTrackMinute);
  }
  decreaseMinDriverOnTrackMinute() {
    this.driverConfigService.updateMinDriverOnTrackMinute(this.minDriverOnTrackMinute - 1);
  }
  increaseMinDriverOnTrackMinute() {
    this.driverConfigService.updateMinDriverOnTrackMinute(this.minDriverOnTrackMinute + 1);
  }
  // MAX DRIVER ON TRACK MINUTE
  onSubmitMaxDriverOnTrackMinute() {
    this.driverConfigService.updateMaxDriverOnTrackMinute(this.maxDriverOnTrackMinute);
  }
  decreaseMaxDriverOnTrackMinute() {
    this.driverConfigService.updateMaxDriverOnTrackMinute(this.maxDriverOnTrackMinute - 1);
  }
  increaseMaxDriverOnTrackMinute() {
    this.driverConfigService.updateMaxDriverOnTrackMinute(this.maxDriverOnTrackMinute + 1);
  }
  // WARNING DRIVER ON TRACK THRESHOLD MINUTE
  onSubmitWarningDriverOnTrackThresholdMinute() {
    this.driverConfigService.updateWarningDriverOnTrackThresholdMinute(this.warningDriverOnTrackThresholdMinute);
  }
  decreaseWarningDriverOnTrackThresholdMinute() {
    this.driverConfigService.updateWarningDriverOnTrackThresholdMinute(this.warningDriverOnTrackThresholdMinute - 1);
  }
  increaseWarningDriverOnTrackThresholdMinute() {
    this.driverConfigService.updateWarningDriverOnTrackThresholdMinute(this.warningDriverOnTrackThresholdMinute + 1);
  }
  static \u0275fac = function DriverConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverConfigComponent, selectors: [["app-driver-config"]], decls: 45, vars: 14, consts: [["title", "\u{1F417} Driver", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor"], ["type", "button", "tooltip", "", "aria-label", "Refresh data", 1, "text-neutral-500", "dark:text-neutral-400", "hover:ring-2", "rounded-full", "p-1", "transition-colors", "duration-200", "hover:cursor-pointer", 3, "click", "tooltipEnabled", "tooltipData", "tooltipPosition"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", "clip-rule", "evenodd"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-end"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-black", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [3, "ngSubmit"], ["type", "number", "id", "minDriverOnTrackMinute", "name", "minDriverOnTrackMinute", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-18", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "flex", "justify-end", "flex-row", "gap-1"], ["type", "number", "id", "maxDriverOnTrackMinute", "name", "maxDriverOnTrackMinute", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-18", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], ["type", "number", "id", "warningDriverOnTrackThresholdMinute", "name", "warningDriverOnTrackThresholdMinute", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-18", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function DriverConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function DriverConfigComponent_Template_button_click_3_listener() {
        return ctx.refreshDrivers();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div")(9, "div", 8);
      \u0275\u0275text(10, "Min driver on track (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
      \u0275\u0275listener("click", function DriverConfigComponent_Template_button_click_12_listener() {
        return ctx.increaseMinDriverOnTrackMinute();
      });
      \u0275\u0275text(13, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "form", 11);
      \u0275\u0275listener("ngSubmit", function DriverConfigComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmitMinDriverOnTrackMinute();
      });
      \u0275\u0275elementStart(15, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function DriverConfigComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minDriverOnTrackMinute, $event) || (ctx.minDriverOnTrackMinute = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function DriverConfigComponent_Template_button_click_16_listener() {
        return ctx.decreaseMinDriverOnTrackMinute();
      });
      \u0275\u0275text(17, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div")(19, "div", 13);
      \u0275\u0275text(20, "Max driver on track (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "button", 10);
      \u0275\u0275listener("click", function DriverConfigComponent_Template_button_click_22_listener() {
        return ctx.increaseMaxDriverOnTrackMinute();
      });
      \u0275\u0275text(23, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "form", 11);
      \u0275\u0275listener("ngSubmit", function DriverConfigComponent_Template_form_ngSubmit_24_listener() {
        return ctx.onSubmitMaxDriverOnTrackMinute();
      });
      \u0275\u0275elementStart(25, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function DriverConfigComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.maxDriverOnTrackMinute, $event) || (ctx.maxDriverOnTrackMinute = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 10);
      \u0275\u0275listener("click", function DriverConfigComponent_Template_button_click_26_listener() {
        return ctx.decreaseMaxDriverOnTrackMinute();
      });
      \u0275\u0275text(27, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(28, "hr");
      \u0275\u0275elementStart(29, "div", 7)(30, "div")(31, "div", 8);
      \u0275\u0275text(32, "Warning drive on track threshold (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9)(34, "button", 10);
      \u0275\u0275listener("click", function DriverConfigComponent_Template_button_click_34_listener() {
        return ctx.increaseWarningDriverOnTrackThresholdMinute();
      });
      \u0275\u0275text(35, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "form", 11);
      \u0275\u0275listener("ngSubmit", function DriverConfigComponent_Template_form_ngSubmit_36_listener() {
        return ctx.onSubmitWarningDriverOnTrackThresholdMinute();
      });
      \u0275\u0275elementStart(37, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function DriverConfigComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.warningDriverOnTrackThresholdMinute, $event) || (ctx.warningDriverOnTrackThresholdMinute = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "button", 10);
      \u0275\u0275listener("click", function DriverConfigComponent_Template_button_click_38_listener() {
        return ctx.decreaseWarningDriverOnTrackThresholdMinute();
      });
      \u0275\u0275text(39, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 17)(41, "button", 18);
      \u0275\u0275listener("click", function DriverConfigComponent_Template_button_click_41_listener() {
        return ctx.updateDriverVisibility();
      });
      \u0275\u0275template(42, DriverConfigComponent_Conditional_42_Template, 1, 0)(43, DriverConfigComponent_Conditional_43_Template, 1, 0);
      \u0275\u0275text(44, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance();
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.minDriverOnTrackMinute);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.maxDriverOnTrackMinute);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.warningDriverOnTrackThresholdMinute);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c02, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 42 : 43);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    NgClass,
    CardComponent,
    TooltipDirective,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverConfigComponent, [{
    type: Component,
    args: [{ selector: "app-driver-config", imports: [
      FormsModule,
      NgClass,
      CardComponent,
      TooltipDirective,
      ChipComponent
    ], template: `<app-card
  title="\u{1F417} Driver"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />

    <button type="button"
            tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition"
            class="text-neutral-500 dark:text-neutral-400 hover:ring-2 rounded-full p-1 transition-colors duration-200 hover:cursor-pointer"
            (click)="refreshDrivers()"
            aria-label="Refresh data">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between items-end">

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Min driver on track (min)</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseMinDriverOnTrackMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMinDriverOnTrackMinute()">
            <input
              type="number"
              id="minDriverOnTrackMinute"
              [(ngModel)]="minDriverOnTrackMinute"
              name="minDriverOnTrackMinute"
              class="border rounded-lg px-2 py-1 max-w-18 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMinDriverOnTrackMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Max driver on track (min)</div>
        <div class="flex justify-end flex-row gap-1">
          <button (click)="increaseMaxDriverOnTrackMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMaxDriverOnTrackMinute()">
            <input
              type="number"
              id="maxDriverOnTrackMinute"
              [(ngModel)]="maxDriverOnTrackMinute"
              name="maxDriverOnTrackMinute"
              class="border rounded-lg px-2 py-1 max-w-18 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMaxDriverOnTrackMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between items-end">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Warning drive on track threshold (min)</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseWarningDriverOnTrackThresholdMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitWarningDriverOnTrackThresholdMinute()">
            <input
              type="number"
              id="warningDriverOnTrackThresholdMinute"
              [(ngModel)]="warningDriverOnTrackThresholdMinute"
              name="warningDriverOnTrackThresholdMinute"
              class="border rounded-lg px-2 py-1 max-w-18 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseWarningDriverOnTrackThresholdMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateDriverVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>
</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverConfigComponent, { className: "DriverConfigComponent", filePath: "src/app/driver/component/driver-config/driver-config.component.ts", lineNumber: 25 });
})();

// src/app/driver/component/driver-change-config/driver-change-config.component.ts
var _c03 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function DriverChangeConfigComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function DriverChangeConfigComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var DriverChangeConfigComponent = class _DriverChangeConfigComponent {
  boardConfigService = inject(BoardConfigService);
  driverConfigService = inject(DriverConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.driverChangeVisible;
    }
    return false;
  });
  minDriverChange = 0;
  constructor() {
    effect(() => {
      const config = this.driverConfigService.driverConfig();
      if (config) {
        this.minDriverChange = config.minDriverChange;
      }
    });
  }
  // DRIVER CHANGE
  onSubmitMinDriverChange() {
    this.driverConfigService.updateMinDriverChange(this.minDriverChange);
  }
  decreaseMinDriverChange() {
    this.driverConfigService.updateMinDriverChange(this.minDriverChange - 1);
  }
  increaseMinDriverChange() {
    this.driverConfigService.updateMinDriverChange(this.minDriverChange + 1);
  }
  updateDriverChangeVisibility() {
    this.boardConfigService.updateDriverChangeVisibility(!this.visible());
  }
  static \u0275fac = function DriverChangeConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverChangeConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverChangeConfigComponent, selectors: [["app-driver-change-config"]], decls: 20, vars: 9, consts: [["title", "\u{1F417} \u{1F504} Driver change", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-black", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [3, "ngSubmit"], ["type", "number", "id", "minDriverChange", "name", "minDriverChange", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function DriverChangeConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Min driver change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function DriverChangeConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseMinDriverChange();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function DriverChangeConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitMinDriverChange();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function DriverChangeConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minDriverChange, $event) || (ctx.minDriverChange = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function DriverChangeConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseMinDriverChange();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function DriverChangeConfigComponent_Template_button_click_16_listener() {
        return ctx.updateDriverChangeVisibility();
      });
      \u0275\u0275template(17, DriverChangeConfigComponent_Conditional_17_Template, 1, 0)(18, DriverChangeConfigComponent_Conditional_18_Template, 1, 0);
      \u0275\u0275text(19, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.minDriverChange);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c03, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 17 : 18);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    NgClass,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverChangeConfigComponent, [{
    type: Component,
    args: [{ selector: "app-driver-change-config", imports: [
      FormsModule,
      NgClass,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F417} \u{1F504} Driver change"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Min driver change</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseMinDriverChange()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMinDriverChange()">
            <input
              type="number"
              id="minDriverChange"
              [(ngModel)]="minDriverChange"
              name="minDriverChange"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMinDriverChange()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateDriverChangeVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>
</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverChangeConfigComponent, { className: "DriverChangeConfigComponent", filePath: "src/app/driver/component/driver-change-config/driver-change-config.component.ts", lineNumber: 20 });
})();

// src/app/interphone/component/interphone-config/interphone-config.component.ts
var _c04 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function InterphoneConfigComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function InterphoneConfigComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var InterphoneConfigComponent = class _InterphoneConfigComponent {
  boardConfigService = inject(BoardConfigService);
  raceConfigService = inject(RaceConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.interphoneVisible;
    }
    return false;
  });
  batteryDurationMinute = 0;
  constructor() {
    effect(() => {
      const raceConfig = this.raceConfigService.raceConfig();
      if (raceConfig) {
        this.batteryDurationMinute = raceConfig.interphoneBatteryDurationMinute;
      }
    });
  }
  updateInterphoneVisibility() {
    this.boardConfigService.updateInterphoneVisibility(!this.visible());
  }
  onSubmitBatteryDuration() {
    this.raceConfigService.updateInterphoneBatteryDurationMinute(this.batteryDurationMinute);
  }
  increaseBatteryDuration() {
    this.raceConfigService.updateInterphoneBatteryDurationMinute(this.batteryDurationMinute + 1);
  }
  decreaseBatteryDuration() {
    this.raceConfigService.updateInterphoneBatteryDurationMinute(this.batteryDurationMinute - 1);
  }
  static \u0275fac = function InterphoneConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InterphoneConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InterphoneConfigComponent, selectors: [["app-interphone-config"]], decls: 20, vars: 9, consts: [["title", "\u{1F50A} Interphone", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-end", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "batteryDurationMinute", "name", "batteryDurationMinute", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function InterphoneConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Battery duration (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function InterphoneConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseBatteryDuration();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function InterphoneConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitBatteryDuration();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function InterphoneConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.batteryDurationMinute, $event) || (ctx.batteryDurationMinute = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function InterphoneConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseBatteryDuration();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function InterphoneConfigComponent_Template_button_click_16_listener() {
        return ctx.updateInterphoneVisibility();
      });
      \u0275\u0275template(17, InterphoneConfigComponent_Conditional_17_Template, 1, 0)(18, InterphoneConfigComponent_Conditional_18_Template, 1, 0);
      \u0275\u0275text(19, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.batteryDurationMinute);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c04, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 17 : 18);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    NgClass,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InterphoneConfigComponent, [{
    type: Component,
    args: [{ selector: "app-interphone-config", imports: [
      FormsModule,
      NgClass,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F50A} Interphone"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Battery duration (min)</div>
        <div class="flex justify-end flex-row gap-1">
          <button (click)="increaseBatteryDuration()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitBatteryDuration()" class="text-right">
            <input
              type="number"
              id="batteryDurationMinute"
              [(ngModel)]="batteryDurationMinute"
              name="batteryDurationMinute"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseBatteryDuration()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateInterphoneVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InterphoneConfigComponent, { className: "InterphoneConfigComponent", filePath: "src/app/interphone/component/interphone-config/interphone-config.component.ts", lineNumber: 20 });
})();

// src/app/fuel/component/fuel-config/fuel-config.component.ts
var _c05 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function FuelConfigComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function FuelConfigComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var FuelConfigComponent = class _FuelConfigComponent {
  boardConfigService = inject(BoardConfigService);
  raceConfigService = inject(RaceConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.fuelVisible;
    }
    return false;
  });
  fuelDurationMinute = 0;
  constructor() {
    effect(() => {
      const raceConfig = this.raceConfigService.raceConfig();
      if (raceConfig) {
        this.fuelDurationMinute = raceConfig.fuelDurationMinute;
      }
    });
  }
  updateFuelVisibility() {
    this.boardConfigService.updateFuelVisibility(!this.visible());
  }
  onSubmitFuelDuration() {
    this.raceConfigService.updateFuelDurationMinute(this.fuelDurationMinute);
  }
  increaseFuelDuration() {
    this.raceConfigService.updateFuelDurationMinute(this.fuelDurationMinute + 1);
  }
  decreaseFuelDuration() {
    this.raceConfigService.updateFuelDurationMinute(this.fuelDurationMinute - 1);
  }
  static \u0275fac = function FuelConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FuelConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuelConfigComponent, selectors: [["app-fuel-config"]], decls: 20, vars: 9, consts: [["title", "\u26FD\uFE0F Fuel", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-end", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "fuelDurationMinute", "name", "fuelDurationMinute", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function FuelConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Fuel duration (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function FuelConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseFuelDuration();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function FuelConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitFuelDuration();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function FuelConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fuelDurationMinute, $event) || (ctx.fuelDurationMinute = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function FuelConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseFuelDuration();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function FuelConfigComponent_Template_button_click_16_listener() {
        return ctx.updateFuelVisibility();
      });
      \u0275\u0275template(17, FuelConfigComponent_Conditional_17_Template, 1, 0)(18, FuelConfigComponent_Conditional_18_Template, 1, 0);
      \u0275\u0275text(19, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.fuelDurationMinute);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c05, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 17 : 18);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    NgClass,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuelConfigComponent, [{
    type: Component,
    args: [{ selector: "app-fuel-config", imports: [
      FormsModule,
      NgClass,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u26FD\uFE0F Fuel"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Fuel duration (min)</div>
        <div class="flex justify-end flex-row gap-1">
          <button (click)="increaseFuelDuration()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitFuelDuration()" class="text-right">
            <input
              type="number"
              id="fuelDurationMinute"
              [(ngModel)]="fuelDurationMinute"
              name="fuelDurationMinute"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseFuelDuration()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateFuelVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>

` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuelConfigComponent, { className: "FuelConfigComponent", filePath: "src/app/fuel/component/fuel-config/fuel-config.component.ts", lineNumber: 20 });
})();

// src/app/kart/component/kart-config/kart-config.component.ts
var _c06 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function KartConfigComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function KartConfigComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var KartConfigComponent = class _KartConfigComponent {
  boardConfigService = inject(BoardConfigService);
  kartConfigService = inject(KartConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.kartVisible;
    }
    return false;
  });
  maxKartMinute = 0;
  constructor() {
    effect(() => {
      const config = this.kartConfigService.kartConfig();
      if (config) {
        this.maxKartMinute = config.maxKartMinute;
      }
    });
  }
  updateKartVisibility() {
    this.boardConfigService.updateKartVisibility(!this.visible());
  }
  onSubmitKartMinute() {
    this.kartConfigService.updateMaxKartMinute(this.maxKartMinute);
  }
  increaseKartMinute() {
    this.kartConfigService.updateMaxKartMinute(this.maxKartMinute + 1);
  }
  decreaseKartMinute() {
    this.kartConfigService.updateMaxKartMinute(this.maxKartMinute - 1);
  }
  static \u0275fac = function KartConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KartConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KartConfigComponent, selectors: [["app-kart-config"]], decls: 20, vars: 9, consts: [["title", "\u{1F3CE}\uFE0F Kart", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "maxKartMinute", "name", "maxKartMinute", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function KartConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Max kart (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function KartConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseKartMinute();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function KartConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitKartMinute();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function KartConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.maxKartMinute, $event) || (ctx.maxKartMinute = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function KartConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseKartMinute();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function KartConfigComponent_Template_button_click_16_listener() {
        return ctx.updateKartVisibility();
      });
      \u0275\u0275template(17, KartConfigComponent_Conditional_17_Template, 1, 0)(18, KartConfigComponent_Conditional_18_Template, 1, 0);
      \u0275\u0275text(19, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.maxKartMinute);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c06, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 17 : 18);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    NgClass,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KartConfigComponent, [{
    type: Component,
    args: [{ selector: "app-kart-config", imports: [
      FormsModule,
      NgClass,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F3CE}\uFE0F Kart"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Max kart (min)</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseKartMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitKartMinute()" class="text-right">
            <input
              type="number"
              id="maxKartMinute"
              [(ngModel)]="maxKartMinute"
              name="maxKartMinute"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseKartMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateKartVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>

` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KartConfigComponent, { className: "KartConfigComponent", filePath: "src/app/kart/component/kart-config/kart-config.component.ts", lineNumber: 20 });
})();

// src/app/pit-lane/component/pit-lane-config/pit-lane-config.component.ts
var _c07 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function PitLaneConfigComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function PitLaneConfigComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var PitLaneConfigComponent = class _PitLaneConfigComponent {
  boardConfigService = inject(BoardConfigService);
  pitLaneConfigService = inject(PitLaneConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.pitLaneVisible;
    }
    return false;
  });
  closeBeforeEndRaceMinute = 0;
  constructor() {
    effect(() => {
      const config = this.pitLaneConfigService.pitLaneConfig();
      if (config) {
        this.closeBeforeEndRaceMinute = config.closeBeforeEndRaceMinute;
      }
    });
  }
  updatePitLaneVisibility() {
    this.boardConfigService.updatePitLaneVisibility(!this.visible());
  }
  onSubmitCloseBeforeEndRaceMinute() {
    this.pitLaneConfigService.updateCloseBeforeEndRaceMinute(this.closeBeforeEndRaceMinute);
  }
  increaseCloseBeforeEndRaceMinute() {
    this.pitLaneConfigService.updateCloseBeforeEndRaceMinute(this.closeBeforeEndRaceMinute + 1);
  }
  decreaseCloseBeforeEndRaceMinute() {
    this.pitLaneConfigService.updateCloseBeforeEndRaceMinute(this.closeBeforeEndRaceMinute - 1);
  }
  static \u0275fac = function PitLaneConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitLaneConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PitLaneConfigComponent, selectors: [["app-pit-lane-config"]], decls: 20, vars: 9, consts: [["title", "\u{1F17F}\uFE0F Pit Lane", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "closeBeforeEndRaceMinute", "name", "closeBeforeEndRaceMinute", "required", "", "min", "0", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function PitLaneConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Close before end race (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function PitLaneConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseCloseBeforeEndRaceMinute();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function PitLaneConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitCloseBeforeEndRaceMinute();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function PitLaneConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.closeBeforeEndRaceMinute, $event) || (ctx.closeBeforeEndRaceMinute = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function PitLaneConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseCloseBeforeEndRaceMinute();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function PitLaneConfigComponent_Template_button_click_16_listener() {
        return ctx.updatePitLaneVisibility();
      });
      \u0275\u0275template(17, PitLaneConfigComponent_Conditional_17_Template, 1, 0)(18, PitLaneConfigComponent_Conditional_18_Template, 1, 0);
      \u0275\u0275text(19, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.closeBeforeEndRaceMinute);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c07, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 17 : 18);
    }
  }, dependencies: [
    CardComponent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    NgClass,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitLaneConfigComponent, [{
    type: Component,
    args: [{ selector: "app-pit-lane-config", imports: [
      CardComponent,
      FormsModule,
      NgClass,
      ChipComponent
    ], template: `<app-card
  title="\u{1F17F}\uFE0F Pit Lane"
  [initiallyOpen]="false">

  <div slot="header-right-content">

    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />

  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
      <div class="text-neutral-500 dark:text-neutral-400 text-left">Close before end race (min)</div>
      <div class="flex justify-start flex-row gap-1">
        <button (click)="increaseCloseBeforeEndRaceMinute()"
                class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
          +
        </button>
        <form (ngSubmit)="onSubmitCloseBeforeEndRaceMinute()" class="text-right">
          <input
            type="number"
            id="closeBeforeEndRaceMinute"
            [(ngModel)]="closeBeforeEndRaceMinute"
            name="closeBeforeEndRaceMinute"
            class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
            required
            min="0"
          />
        </form>
        <button (click)="decreaseCloseBeforeEndRaceMinute()"
                class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
          -
        </button>
      </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updatePitLaneVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PitLaneConfigComponent, { className: "PitLaneConfigComponent", filePath: "src/app/pit-lane/component/pit-lane-config/pit-lane-config.component.ts", lineNumber: 20 });
})();

// src/app/tyre/component/tyre-pressure-config/tyre-pressure-config.component.ts
var _c08 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function TyrePressureConfigComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function TyrePressureConfigComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var TyrePressureConfigComponent = class _TyrePressureConfigComponent {
  boardConfigService = inject(BoardConfigService);
  tyreConfigService = inject(TyreConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.tyrePressureVisible;
    }
    return false;
  });
  minTyrePressurePsi = 0;
  maxTyrePressurePsi = 0;
  constructor() {
    effect(() => {
      const config = this.tyreConfigService.tyreConfig();
      if (config) {
        this.minTyrePressurePsi = config.minTyrePressurePsi;
        this.maxTyrePressurePsi = config.maxTyrePressurePsi;
      }
    });
  }
  updateTyrePressureVisibility() {
    this.boardConfigService.updateTyrePressureVisibility(!this.visible());
  }
  // MIN TYRE PRESSURE PSI
  onSubmitMinTyrePressurePsi() {
    this.tyreConfigService.updateMinTyrePressurePsi(this.minTyrePressurePsi);
  }
  increaseMinTyrePressurePsi() {
    this.tyreConfigService.updateMinTyrePressurePsi(this.minTyrePressurePsi + 1);
  }
  decreaseMinTyrePressurePsi() {
    this.tyreConfigService.updateMinTyrePressurePsi(this.minTyrePressurePsi - 1);
  }
  // MAX TYRE PRESSURE PSI
  onSubmitMaxTyrePressurePsi() {
    this.tyreConfigService.updateMaxTyrePressurePsi(this.maxTyrePressurePsi);
  }
  increaseMaxTyrePressurePsi() {
    this.tyreConfigService.updateMaxTyrePressurePsi(this.maxTyrePressurePsi + 1);
  }
  decreaseMaxTyrePressurePsi() {
    this.tyreConfigService.updateMaxTyrePressurePsi(this.maxTyrePressurePsi - 1);
  }
  static \u0275fac = function TyrePressureConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TyrePressureConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TyrePressureConfigComponent, selectors: [["app-tyre-pressure-config"]], decls: 30, vars: 10, consts: [["title", "\u{1F6DE}\u{1F4A8} Tyre pressure", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-end"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "minTyrePressurePsi", "name", "minTyrePressurePsi", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "flex", "justify-end", "flex-row", "gap-1"], ["type", "number", "id", "maxTyrePressurePsi", "name", "maxTyrePressurePsi", "required", "", "min", "2", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function TyrePressureConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Min tyre pressure (PSI)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function TyrePressureConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseMinTyrePressurePsi();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function TyrePressureConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitMinTyrePressurePsi();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function TyrePressureConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minTyrePressurePsi, $event) || (ctx.minTyrePressurePsi = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function TyrePressureConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseMinTyrePressurePsi();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div")(16, "div", 10);
      \u0275\u0275text(17, "Max tyre pressure (PSI)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "button", 7);
      \u0275\u0275listener("click", function TyrePressureConfigComponent_Template_button_click_19_listener() {
        return ctx.increaseMaxTyrePressurePsi();
      });
      \u0275\u0275text(20, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "form", 8);
      \u0275\u0275listener("ngSubmit", function TyrePressureConfigComponent_Template_form_ngSubmit_21_listener() {
        return ctx.onSubmitMaxTyrePressurePsi();
      });
      \u0275\u0275elementStart(22, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function TyrePressureConfigComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.maxTyrePressurePsi, $event) || (ctx.maxTyrePressurePsi = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 7);
      \u0275\u0275listener("click", function TyrePressureConfigComponent_Template_button_click_23_listener() {
        return ctx.decreaseMaxTyrePressurePsi();
      });
      \u0275\u0275text(24, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 13)(26, "button", 14);
      \u0275\u0275listener("click", function TyrePressureConfigComponent_Template_button_click_26_listener() {
        return ctx.updateTyrePressureVisibility();
      });
      \u0275\u0275template(27, TyrePressureConfigComponent_Conditional_27_Template, 1, 0)(28, TyrePressureConfigComponent_Conditional_28_Template, 1, 0);
      \u0275\u0275text(29, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.minTyrePressurePsi);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.maxTyrePressurePsi);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c08, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 27 : 28);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TyrePressureConfigComponent, [{
    type: Component,
    args: [{ selector: "app-tyre-pressure-config", imports: [
      CardComponent,
      NgClass,
      FormsModule,
      ChipComponent
    ], template: `<app-card
  title="\u{1F6DE}\u{1F4A8} Tyre pressure"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">

    <div class="flex justify-between items-end">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Min tyre pressure (PSI)</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseMinTyrePressurePsi()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMinTyrePressurePsi()" class="text-right">
            <input
              type="number"
              id="minTyrePressurePsi"
              [(ngModel)]="minTyrePressurePsi"
              name="minTyrePressurePsi"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMinTyrePressurePsi()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Max tyre pressure (PSI)</div>
        <div class="flex justify-end flex-row gap-1">
          <button (click)="increaseMaxTyrePressurePsi()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMaxTyrePressurePsi()" class="text-right">
            <input
              type="number"
              id="maxTyrePressurePsi"
              [(ngModel)]="maxTyrePressurePsi"
              name="maxTyrePressurePsi"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="2"
            />
          </form>
          <button (click)="decreaseMaxTyrePressurePsi()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateTyrePressureVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TyrePressureConfigComponent, { className: "TyrePressureConfigComponent", filePath: "src/app/tyre/component/tyre-pressure-config/tyre-pressure-config.component.ts", lineNumber: 20 });
})();

// src/app/tyre/component/tyre-change-config/tyre-change-config.component.ts
var _c09 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function TyreChangeConfigComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function TyreChangeConfigComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var TyreChangeConfigComponent = class _TyreChangeConfigComponent {
  boardConfigService = inject(BoardConfigService);
  tyreConfigService = inject(TyreConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.tyreChangeVisible;
    }
    return false;
  });
  endTyreChangeWindowHour = 0;
  startTyreChangeWindowHour = 0;
  minTyreChange = 0;
  constructor() {
    effect(() => {
      const config = this.tyreConfigService.tyreConfig();
      if (config) {
        this.endTyreChangeWindowHour = config.endTyreChangeWindowHour;
        this.startTyreChangeWindowHour = config.startTyreChangeWindowHour;
        this.minTyreChange = config.minTyreChange;
      }
    });
  }
  updateTyreChangeVisibility() {
    this.boardConfigService.updateTyreChangeVisibility(!this.visible());
  }
  // START TYRE CHANGE WINDOW HOUR
  onSubmitStartTyreChangeWindowHour() {
    this.tyreConfigService.updateStartTyreChangeWindowHour(this.startTyreChangeWindowHour);
  }
  increaseStartTyreChangeWindowHour() {
    this.tyreConfigService.updateStartTyreChangeWindowHour(this.startTyreChangeWindowHour + 1);
  }
  decreaseStartTyreChangeWindowHour() {
    this.tyreConfigService.updateStartTyreChangeWindowHour(this.startTyreChangeWindowHour - 1);
  }
  // END TYRE CHANGE WINDOW HOUR
  onSubmitEndTyreChangeWindowHour() {
    this.tyreConfigService.updateEndTyreChangeWindowHour(this.endTyreChangeWindowHour);
  }
  increaseEndTyreChangeWindowHour() {
    this.tyreConfigService.updateEndTyreChangeWindowHour(this.endTyreChangeWindowHour + 1);
  }
  decreaseEndTyreChangeWindowHour() {
    this.tyreConfigService.updateEndTyreChangeWindowHour(this.endTyreChangeWindowHour - 1);
  }
  // MIN TYRE CHANGE
  onSubmitMinTyreChange() {
    this.tyreConfigService.updateMinTyreChange(this.minTyreChange);
  }
  increaseMinTyreChange() {
    this.tyreConfigService.updateMinTyreChange(this.minTyreChange + 1);
  }
  decreaseMinTyreChange() {
    this.tyreConfigService.updateMinTyreChange(this.minTyreChange - 1);
  }
  static \u0275fac = function TyreChangeConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TyreChangeConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TyreChangeConfigComponent, selectors: [["app-tyre-change-config"]], decls: 42, vars: 11, consts: [["title", "\u{1F6DE} \u{1F504} Tyre change", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "startTyreChangeWindowHour", "name", "startTyreChangeWindowHour", "required", "", "min", "0", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "flex", "justify-end", "flex-row", "gap-1"], ["type", "number", "id", "endTyreChangeWindowHour", "name", "endTyreChangeWindowHour", "required", "", "min", "0", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-start"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "mr-1", "rounded-sm", "hover:cursor-pointer", 3, "click"], ["type", "number", "id", "minTyreChange", "name", "minTyreChange", "required", "", "min", "0", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "ml-1", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function TyreChangeConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Start tyre change window (hour)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function TyreChangeConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseStartTyreChangeWindowHour();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function TyreChangeConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitStartTyreChangeWindowHour();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function TyreChangeConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.startTyreChangeWindowHour, $event) || (ctx.startTyreChangeWindowHour = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function TyreChangeConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseStartTyreChangeWindowHour();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div")(16, "div", 10);
      \u0275\u0275text(17, "End tyre change window (hour)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "button", 7);
      \u0275\u0275listener("click", function TyreChangeConfigComponent_Template_button_click_19_listener() {
        return ctx.increaseEndTyreChangeWindowHour();
      });
      \u0275\u0275text(20, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "form", 8);
      \u0275\u0275listener("ngSubmit", function TyreChangeConfigComponent_Template_form_ngSubmit_21_listener() {
        return ctx.onSubmitEndTyreChangeWindowHour();
      });
      \u0275\u0275elementStart(22, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function TyreChangeConfigComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endTyreChangeWindowHour, $event) || (ctx.endTyreChangeWindowHour = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 7);
      \u0275\u0275listener("click", function TyreChangeConfigComponent_Template_button_click_23_listener() {
        return ctx.decreaseEndTyreChangeWindowHour();
      });
      \u0275\u0275text(24, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(25, "hr");
      \u0275\u0275elementStart(26, "div", 4)(27, "div")(28, "div", 5);
      \u0275\u0275text(29, "Min tyre change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 13)(31, "button", 14);
      \u0275\u0275listener("click", function TyreChangeConfigComponent_Template_button_click_31_listener() {
        return ctx.increaseMinTyreChange();
      });
      \u0275\u0275text(32, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "form", 8);
      \u0275\u0275listener("ngSubmit", function TyreChangeConfigComponent_Template_form_ngSubmit_33_listener() {
        return ctx.onSubmitMinTyreChange();
      });
      \u0275\u0275elementStart(34, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function TyreChangeConfigComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minTyreChange, $event) || (ctx.minTyreChange = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "button", 16);
      \u0275\u0275listener("click", function TyreChangeConfigComponent_Template_button_click_35_listener() {
        return ctx.decreaseMinTyreChange();
      });
      \u0275\u0275text(36, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 17)(38, "button", 18);
      \u0275\u0275listener("click", function TyreChangeConfigComponent_Template_button_click_38_listener() {
        return ctx.updateTyreChangeVisibility();
      });
      \u0275\u0275template(39, TyreChangeConfigComponent_Conditional_39_Template, 1, 0)(40, TyreChangeConfigComponent_Conditional_40_Template, 1, 0);
      \u0275\u0275text(41, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.startTyreChangeWindowHour);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.endTyreChangeWindowHour);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.minTyreChange);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c09, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 39 : 40);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TyreChangeConfigComponent, [{
    type: Component,
    args: [{ selector: "app-tyre-change-config", imports: [
      CardComponent,
      NgClass,
      FormsModule,
      ChipComponent
    ], template: `<app-card
  title="\u{1F6DE} \u{1F504} Tyre change"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Start tyre change window (hour)</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseStartTyreChangeWindowHour()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitStartTyreChangeWindowHour()" class="text-right">
            <input
              type="number"
              id="startTyreChangeWindowHour"
              [(ngModel)]="startTyreChangeWindowHour"
              name="startTyreChangeWindowHour"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="0"
            />
          </form>
          <button (click)="decreaseStartTyreChangeWindowHour()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">End tyre change window (hour)</div>
        <div class="flex justify-end flex-row gap-1">
          <button (click)="increaseEndTyreChangeWindowHour()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitEndTyreChangeWindowHour()" class="text-right">
            <input
              type="number"
              id="endTyreChangeWindowHour"
              [(ngModel)]="endTyreChangeWindowHour"
              name="endTyreChangeWindowHour"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="0"
            />
          </form>
          <button (click)="decreaseEndTyreChangeWindowHour()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Min tyre change</div>
        <div class="flex justify-start">
          <button (click)="increaseMinTyreChange()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 mr-1 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMinTyreChange()" class="text-right">
            <input
              type="number"
              id="minTyreChange"
              [(ngModel)]="minTyreChange"
              name="minTyreChange"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="0"
            />
          </form>
          <button (click)="decreaseMinTyreChange()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 ml-1 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>

    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateTyreChangeVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TyreChangeConfigComponent, { className: "TyreChangeConfigComponent", filePath: "src/app/tyre/component/tyre-change-config/tyre-change-config.component.ts", lineNumber: 20 });
})();

// src/app/stint/component/active-stint-config/active-stint-config.component.ts
var _c010 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function ActiveStintConfigComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function ActiveStintConfigComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var ActiveStintConfigComponent = class _ActiveStintConfigComponent {
  boardConfigService = inject(BoardConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.activeStintVisible;
    }
    return false;
  });
  updateActiveStintVisibility() {
    this.boardConfigService.updateActiveStintVisibility(!this.visible());
  }
  static \u0275fac = function ActiveStintConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActiveStintConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActiveStintConfigComponent, selectors: [["app-active-stint-config"]], decls: 9, vars: 8, consts: [["title", "\u{1F3CE}\uFE0F \u{1F4A8} Active stint", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function ActiveStintConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "button", 5);
      \u0275\u0275listener("click", function ActiveStintConfigComponent_Template_button_click_5_listener() {
        return ctx.updateActiveStintVisibility();
      });
      \u0275\u0275template(6, ActiveStintConfigComponent_Conditional_6_Template, 1, 0)(7, ActiveStintConfigComponent_Conditional_7_Template, 1, 0);
      \u0275\u0275text(8, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c010, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 6 : 7);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveStintConfigComponent, [{
    type: Component,
    args: [{ selector: "app-active-stint-config", imports: [
      CardComponent,
      NgClass,
      ChipComponent
    ], template: `<app-card
  title="\u{1F3CE}\uFE0F \u{1F4A8} Active stint"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content">
    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateActiveStintVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActiveStintConfigComponent, { className: "ActiveStintConfigComponent", filePath: "src/app/stint/component/active-stint-config/active-stint-config.component.ts", lineNumber: 17 });
})();

// src/app/stint/component/stint-optimizer-config/stint-optimizer-config.component.ts
var _c011 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function StintOptimizerConfigComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function StintOptimizerConfigComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var StintOptimizerConfigComponent = class _StintOptimizerConfigComponent {
  boardConfigService = inject(BoardConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.stintOptimizerVisible;
    }
    return false;
  });
  updateStintOptimizerVisibility() {
    this.boardConfigService.updateStintOptimizerVisibility(!this.visible());
  }
  static \u0275fac = function StintOptimizerConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StintOptimizerConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StintOptimizerConfigComponent, selectors: [["app-stint-optimizer-config"]], decls: 9, vars: 8, consts: [["title", "\u{1F9E0} Stint optimizer", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function StintOptimizerConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "button", 5);
      \u0275\u0275listener("click", function StintOptimizerConfigComponent_Template_button_click_5_listener() {
        return ctx.updateStintOptimizerVisibility();
      });
      \u0275\u0275template(6, StintOptimizerConfigComponent_Conditional_6_Template, 1, 0)(7, StintOptimizerConfigComponent_Conditional_7_Template, 1, 0);
      \u0275\u0275text(8, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c011, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 6 : 7);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StintOptimizerConfigComponent, [{
    type: Component,
    args: [{ selector: "app-stint-optimizer-config", imports: [
      CardComponent,
      NgClass,
      ChipComponent
    ], template: `<app-card
  title="\u{1F9E0} Stint optimizer"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content">
    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateStintOptimizerVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StintOptimizerConfigComponent, { className: "StintOptimizerConfigComponent", filePath: "src/app/stint/component/stint-optimizer-config/stint-optimizer-config.component.ts", lineNumber: 17 });
})();

// src/app/stint/component/delta-stint-config/delta-stint-config.component.ts
var _c012 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function DeltaStintConfigComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function DeltaStintConfigComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var DeltaStintConfigComponent = class _DeltaStintConfigComponent {
  boardConfigService = inject(BoardConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.deltaStintVisible;
    }
    return false;
  });
  updateDeltaStintVisibility() {
    this.boardConfigService.updateDeltaStintVisibility(!this.visible());
  }
  static \u0275fac = function DeltaStintConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeltaStintConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeltaStintConfigComponent, selectors: [["app-delta-stint-config"]], decls: 9, vars: 8, consts: [["title", "\u03B4 Delta stint", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function DeltaStintConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "button", 5);
      \u0275\u0275listener("click", function DeltaStintConfigComponent_Template_button_click_5_listener() {
        return ctx.updateDeltaStintVisibility();
      });
      \u0275\u0275template(6, DeltaStintConfigComponent_Conditional_6_Template, 1, 0)(7, DeltaStintConfigComponent_Conditional_7_Template, 1, 0);
      \u0275\u0275text(8, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c012, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 6 : 7);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeltaStintConfigComponent, [{
    type: Component,
    args: [{ selector: "app-delta-stint-config", imports: [
      CardComponent,
      NgClass,
      ChipComponent
    ], template: `<app-card
  title="\u03B4 Delta stint"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content">
    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateDeltaStintVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeltaStintConfigComponent, { className: "DeltaStintConfigComponent", filePath: "src/app/stint/component/delta-stint-config/delta-stint-config.component.ts", lineNumber: 17 });
})();

// src/app/stint/component/stint-config/stint-config.component.ts
var _c013 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function StintConfigComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function StintConfigComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var StintConfigComponent = class _StintConfigComponent {
  boardConfigService = inject(BoardConfigService);
  raceConfigService = inject(RaceConfigService);
  stintDataService = inject(StintDataService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.stintVisible;
    }
    return false;
  });
  minStintMinute = 0;
  tooltipData = {
    footer: "",
    paragraphs: ["Refresh stint data"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  constructor() {
    effect(() => {
      const config = this.raceConfigService.raceConfig();
      if (config) {
        this.minStintMinute = config.minStintMinute;
      }
    });
  }
  refreshStints() {
    this.stintDataService.refreshStints();
  }
  updateStintVisibility() {
    this.boardConfigService.updateStintVisibility(!this.visible());
  }
  onSubmitMinStintMinute() {
    this.raceConfigService.updateMinStintMinute(this.minStintMinute);
  }
  increaseMinStintMinute() {
    this.raceConfigService.updateMinStintMinute(this.minStintMinute + 1);
  }
  decreaseMinStintMinute() {
    this.raceConfigService.updateMinStintMinute(this.minStintMinute - 1);
  }
  static \u0275fac = function StintConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StintConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StintConfigComponent, selectors: [["app-stint-config"]], decls: 23, vars: 12, consts: [["title", "\u23F3 Stint", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor"], ["type", "button", "tooltip", "", "aria-label", "Refresh data", 1, "text-neutral-500", "dark:text-neutral-400", "hover:ring-2", "rounded-full", "p-1", "transition-colors", "duration-200", "hover:cursor-pointer", 3, "click", "tooltipEnabled", "tooltipData", "tooltipPosition"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", "clip-rule", "evenodd"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-black", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [3, "ngSubmit"], ["type", "number", "id", "minStintMinute", "name", "minStintMinute", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function StintConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function StintConfigComponent_Template_button_click_3_listener() {
        return ctx.refreshStints();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div")(9, "div", 8);
      \u0275\u0275text(10, "Min stint (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
      \u0275\u0275listener("click", function StintConfigComponent_Template_button_click_12_listener() {
        return ctx.increaseMinStintMinute();
      });
      \u0275\u0275text(13, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "form", 11);
      \u0275\u0275listener("ngSubmit", function StintConfigComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmitMinStintMinute();
      });
      \u0275\u0275elementStart(15, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function StintConfigComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minStintMinute, $event) || (ctx.minStintMinute = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function StintConfigComponent_Template_button_click_16_listener() {
        return ctx.decreaseMinStintMinute();
      });
      \u0275\u0275text(17, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 13)(19, "button", 14);
      \u0275\u0275listener("click", function StintConfigComponent_Template_button_click_19_listener() {
        return ctx.updateStintVisibility();
      });
      \u0275\u0275template(20, StintConfigComponent_Conditional_20_Template, 1, 0)(21, StintConfigComponent_Conditional_21_Template, 1, 0);
      \u0275\u0275text(22, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance();
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.minStintMinute);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c013, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 20 : 21);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    TooltipDirective,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StintConfigComponent, [{
    type: Component,
    args: [{ selector: "app-stint-config", imports: [
      CardComponent,
      NgClass,
      FormsModule,
      TooltipDirective,
      ChipComponent
    ], template: `<app-card
  title="\u23F3 Stint"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />

    <button type="button"
            tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition"
            class="text-neutral-500 dark:text-neutral-400 hover:ring-2 rounded-full p-1 transition-colors duration-200 hover:cursor-pointer"
            (click)="refreshStints()"
            aria-label="Refresh data">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>

  <div slot="body-content" class="flex flex-col gap-2">

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Min stint (min)</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseMinStintMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMinStintMinute()">
            <input
              type="number"
              id="minStintMinute"
              [(ngModel)]="minStintMinute"
              name="minStintMinute"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMinStintMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateStintVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StintConfigComponent, { className: "StintConfigComponent", filePath: "src/app/stint/component/stint-config/stint-config.component.ts", lineNumber: 25 });
})();

// src/app/lap-simulator/component/lap-simulator-config/lap-simulator-config.component.ts
var LapSimulatorConfigComponent = class _LapSimulatorConfigComponent {
  lapSimulatorConfigService = inject(LapSimulatorConfigService);
  beOvertakenLostTime = 0;
  toOvertakeLostTime = 0;
  overtakeTimeThreshold = 0;
  tooltipData = {
    footer: "",
    paragraphs: ["Actually not used for race logic"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  constructor() {
    effect(() => {
      const lapSimulatorConfig = this.lapSimulatorConfigService.lapSimulatorConfig();
      if (lapSimulatorConfig) {
        this.beOvertakenLostTime = lapSimulatorConfig.beOvertakenLostTimeMilliseconds;
        this.toOvertakeLostTime = lapSimulatorConfig.toOvertakeLostTimeMilliseconds;
        this.overtakeTimeThreshold = lapSimulatorConfig.overtakeThresholdMilliseconds;
      }
    });
  }
  // TO OVERTAKE LOST TIME
  onSubmitToOvertakeLostTime() {
    this.lapSimulatorConfigService.updateToOvertakeLostTime(this.toOvertakeLostTime);
  }
  // BE OVERTAKEN LOST TIME
  onSubmitBeOvertakenLostTime() {
    this.lapSimulatorConfigService.updateBeOvertakenLostTime(this.beOvertakenLostTime);
  }
  // OVERTAKE TIME THRESHOLD
  onSubmitOvertakeTimeThreshold() {
    this.lapSimulatorConfigService.updateOvertakeTimeThreshold(this.overtakeTimeThreshold);
  }
  static \u0275fac = function LapSimulatorConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapSimulatorConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LapSimulatorConfigComponent, selectors: [["app-lap-simulator-config"]], decls: 20, vars: 13, consts: [["title", "\u23F1\uFE0F\u{1F9E0} Lap simulator", 3, "initiallyOpen"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-end"], ["tooltip", "", 3, "tooltipEnabled", "tooltipData", "tooltipPosition"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "text-left", 3, "ngSubmit"], ["type", "number", "id", "toOvertakenLostTime", "name", "toOvertakeLostTime", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "beOvertakenLostTime", "name", "beOvertakenLostTime", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], ["type", "number", "id", "overtakeTimeThreshold", "name", "overtakeTimeThreshold", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"]], template: function LapSimulatorConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "To overtake lost time (mills)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 5);
      \u0275\u0275listener("ngSubmit", function LapSimulatorConfigComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSubmitToOvertakeLostTime();
      });
      \u0275\u0275elementStart(7, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function LapSimulatorConfigComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.toOvertakeLostTime, $event) || (ctx.toOvertakeLostTime = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 3)(9, "div", 7);
      \u0275\u0275text(10, "Be overtaken lost time (mills)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function LapSimulatorConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitBeOvertakenLostTime();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LapSimulatorConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.beOvertakenLostTime, $event) || (ctx.beOvertakenLostTime = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(13, "hr");
      \u0275\u0275elementStart(14, "div", 2)(15, "div", 3)(16, "div", 4);
      \u0275\u0275text(17, "Overtake time threshold (mills)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "form", 5);
      \u0275\u0275listener("ngSubmit", function LapSimulatorConfigComponent_Template_form_ngSubmit_18_listener() {
        return ctx.onSubmitOvertakeTimeThreshold();
      });
      \u0275\u0275elementStart(19, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function LapSimulatorConfigComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.overtakeTimeThreshold, $event) || (ctx.overtakeTimeThreshold = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(3);
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.toOvertakeLostTime);
      \u0275\u0275advance();
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.beOvertakenLostTime);
      \u0275\u0275advance(3);
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.overtakeTimeThreshold);
    }
  }, dependencies: [
    CardComponent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    TooltipDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapSimulatorConfigComponent, [{
    type: Component,
    args: [{ selector: "app-lap-simulator-config", imports: [
      CardComponent,
      FormsModule,
      TooltipDirective
    ], template: '<app-card\n  title="\u23F1\uFE0F\u{1F9E0} Lap simulator"\n  [initiallyOpen]="false">\n\n  <div slot="body-content" class="flex flex-col gap-2">\n    <div class="flex justify-between items-end">\n\n      <div tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition">\n        <div class="text-neutral-500 dark:text-neutral-400 text-left">To overtake lost time (mills)</div>\n        <form (ngSubmit)="onSubmitToOvertakeLostTime()" class="text-left">\n          <input\n            type="number"\n            id="toOvertakenLostTime"\n            [(ngModel)]="toOvertakeLostTime"\n            name="toOvertakeLostTime"\n            class="border rounded-lg px-2 py-1 max-w-20 text-right text-neutral-900 dark:text-neutral-100"\n            required\n            min="1"\n          />\n        </form>\n      </div>\n\n      <div tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition">\n        <div class="text-neutral-500 dark:text-neutral-400 text-right">Be overtaken lost time (mills)</div>\n        <form (ngSubmit)="onSubmitBeOvertakenLostTime()" class="text-right">\n          <input\n            type="number"\n            id="beOvertakenLostTime"\n            [(ngModel)]="beOvertakenLostTime"\n            name="beOvertakenLostTime"\n            class="border rounded-lg px-2 py-1 max-w-20 text-right text-neutral-900 dark:text-neutral-100"\n            required\n            min="1"\n          />\n        </form>\n      </div>\n    </div>\n\n    <hr>\n\n    <div class="flex justify-between items-end">\n\n      <div tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition">\n        <div class="text-neutral-500 dark:text-neutral-400 text-left">Overtake time threshold (mills)</div>\n        <form (ngSubmit)="onSubmitOvertakeTimeThreshold()" class="text-left">\n          <input\n            type="number"\n            id="overtakeTimeThreshold"\n            [(ngModel)]="overtakeTimeThreshold"\n            name="overtakeTimeThreshold"\n            class="border rounded-lg px-2 py-1 max-w-20 text-right text-neutral-900 dark:text-neutral-100"\n            required\n            min="1"\n          />\n        </form>\n      </div>\n    </div>\n  </div>\n\n</app-card>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LapSimulatorConfigComponent, { className: "LapSimulatorConfigComponent", filePath: "src/app/lap-simulator/component/lap-simulator-config/lap-simulator-config.component.ts", lineNumber: 19 });
})();

// src/app/kart/component/kart-change-config/kart-change-config.component.ts
var _c014 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function KartChangeConfigComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function KartChangeConfigComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var KartChangeConfigComponent = class _KartChangeConfigComponent {
  boardConfigService = inject(BoardConfigService);
  kartConfigService = inject(KartConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.kartChangeVisible;
    }
    return false;
  });
  minKartChange = 0;
  maxKartChange = 0;
  constructor() {
    effect(() => {
      const config = this.kartConfigService.kartConfig();
      if (config) {
        this.minKartChange = config.minKartChange;
        this.maxKartChange = config.maxKartChange;
      }
    });
  }
  updateKartChangeVisibility() {
    this.boardConfigService.updateKartChangeVisibility(!this.visible());
  }
  // MIN KART CHANGE
  onSubmitMinKartChange() {
    this.kartConfigService.updateMinKartChange(this.minKartChange);
  }
  increaseMinKartChange() {
    this.kartConfigService.updateMinKartChange(this.minKartChange + 1);
  }
  decreaseMinKartChange() {
    this.kartConfigService.updateMinKartChange(this.minKartChange - 1);
  }
  // MAX KART CHANGE
  onSubmitMaxKartChange() {
    this.kartConfigService.updateMaxKartChange(this.maxKartChange - 1);
  }
  increaseMaxKartChange() {
    this.kartConfigService.updateMaxKartChange(this.maxKartChange + 1);
  }
  decreaseMaxKartChange() {
    this.kartConfigService.updateMaxKartChange(this.maxKartChange - 1);
  }
  static \u0275fac = function KartChangeConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KartChangeConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KartChangeConfigComponent, selectors: [["app-kart-change-config"]], decls: 30, vars: 10, consts: [["title", "\u{1F3CE}\uFE0F \u{1F504} Kart change", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "minKartChange", "name", "minKartChange", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "flex", "justify-end", "flex-row", "gap-1"], ["type", "number", "id", "maxKartChange", "name", "maxKartChange", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function KartChangeConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Min kart change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function KartChangeConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseMinKartChange();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function KartChangeConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitMinKartChange();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function KartChangeConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minKartChange, $event) || (ctx.minKartChange = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function KartChangeConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseMinKartChange();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div")(16, "div", 10);
      \u0275\u0275text(17, "Max kart change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "button", 7);
      \u0275\u0275listener("click", function KartChangeConfigComponent_Template_button_click_19_listener() {
        return ctx.increaseMaxKartChange();
      });
      \u0275\u0275text(20, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "form", 8);
      \u0275\u0275listener("ngSubmit", function KartChangeConfigComponent_Template_form_ngSubmit_21_listener() {
        return ctx.onSubmitMaxKartChange();
      });
      \u0275\u0275elementStart(22, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function KartChangeConfigComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.maxKartChange, $event) || (ctx.maxKartChange = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 7);
      \u0275\u0275listener("click", function KartChangeConfigComponent_Template_button_click_23_listener() {
        return ctx.decreaseMaxKartChange();
      });
      \u0275\u0275text(24, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 13)(26, "button", 14);
      \u0275\u0275listener("click", function KartChangeConfigComponent_Template_button_click_26_listener() {
        return ctx.updateKartChangeVisibility();
      });
      \u0275\u0275template(27, KartChangeConfigComponent_Conditional_27_Template, 1, 0)(28, KartChangeConfigComponent_Conditional_28_Template, 1, 0);
      \u0275\u0275text(29, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.minKartChange);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.maxKartChange);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c014, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 27 : 28);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KartChangeConfigComponent, [{
    type: Component,
    args: [{ selector: "app-kart-change-config", imports: [
      CardComponent,
      NgClass,
      FormsModule,
      ChipComponent
    ], template: `<app-card
  title="\u{1F3CE}\uFE0F \u{1F504} Kart change"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Min kart change</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseMinKartChange()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMinKartChange()" class="text-right">
            <input
              type="number"
              id="minKartChange"
              [(ngModel)]="minKartChange"
              name="minKartChange"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMinKartChange()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Max kart change</div>
        <div class="flex justify-end flex-row gap-1">
          <button (click)="increaseMaxKartChange()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMaxKartChange()" class="text-right">
            <input
              type="number"
              id="maxKartChange"
              [(ngModel)]="maxKartChange"
              name="maxKartChange"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMaxKartChange()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateKartChangeVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KartChangeConfigComponent, { className: "KartChangeConfigComponent", filePath: "src/app/kart/component/kart-change-config/kart-change-config.component.ts", lineNumber: 20 });
})();

// src/app/driver/component/driver-performance-config/driver-performance-config.component.ts
var _c015 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function DriverPerformanceConfigComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function DriverPerformanceConfigComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var DriverPerformanceConfigComponent = class _DriverPerformanceConfigComponent {
  boardConfigService = inject(BoardConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.driverPerformanceVisible;
    }
    return false;
  });
  updateDriverPerformanceVisibility() {
    this.boardConfigService.updateDriverPerformanceVisibility(!this.visible());
  }
  static \u0275fac = function DriverPerformanceConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverPerformanceConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverPerformanceConfigComponent, selectors: [["app-driver-performance-config"]], decls: 9, vars: 8, consts: [["title", "\u{1F417}\u{1F4AA}\u{1F3FC} Driver performance", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function DriverPerformanceConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "button", 5);
      \u0275\u0275listener("click", function DriverPerformanceConfigComponent_Template_button_click_5_listener() {
        return ctx.updateDriverPerformanceVisibility();
      });
      \u0275\u0275template(6, DriverPerformanceConfigComponent_Conditional_6_Template, 1, 0)(7, DriverPerformanceConfigComponent_Conditional_7_Template, 1, 0);
      \u0275\u0275text(8, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c015, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 6 : 7);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverPerformanceConfigComponent, [{
    type: Component,
    args: [{ selector: "app-driver-performance-config", imports: [
      CardComponent,
      NgClass,
      ChipComponent
    ], template: `<app-card
  title="\u{1F417}\u{1F4AA}\u{1F3FC} Driver performance"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content">
    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateDriverPerformanceVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverPerformanceConfigComponent, { className: "DriverPerformanceConfigComponent", filePath: "src/app/driver/component/driver-performance-config/driver-performance-config.component.ts", lineNumber: 17 });
})();

// src/app/pit/component/pit-config/pit-config.component.ts
var _c016 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function PitConfigComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function PitConfigComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var PitConfigComponent = class _PitConfigComponent {
  boardConfigService = inject(BoardConfigService);
  pitConfigService = inject(PitConfigService);
  pitDataService = inject(PitDataService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.pitVisible;
    }
    return false;
  });
  minPitSeconds = 0;
  minPitWithTyreChangeSeconds = 0;
  minTotalPitMinute = 0;
  maxPitSeconds = 0;
  tooltipData = {
    footer: "",
    paragraphs: ["Refresh pit data"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  constructor() {
    effect(() => {
      const config = this.pitConfigService.pitConfig();
      if (config) {
        this.minPitSeconds = config.minPitSeconds;
        this.minPitWithTyreChangeSeconds = config.minPitWithTyreChangeSeconds;
        this.minTotalPitMinute = config.minTotalPitMinute;
        this.maxPitSeconds = config.maxPitSeconds;
      }
    });
  }
  refreshPits() {
    this.pitDataService.refreshPits();
  }
  updatePitVisibility() {
    this.boardConfigService.updatePitVisibility(!this.visible());
  }
  // MIN PIT SECONDS
  onSubmitMinPitSeconds() {
    this.pitConfigService.updateMinPitSeconds(this.minPitSeconds);
  }
  increaseMinPitSeconds() {
    this.pitConfigService.updateMinPitSeconds(this.minPitSeconds + 1);
  }
  decreaseMinPitSeconds() {
    this.pitConfigService.updateMinPitSeconds(this.minPitSeconds - 1);
  }
  // MIN PIT WITH TYRE CHANGE SECONDS
  onSubmitMinPitWithTyreChangeSeconds() {
    this.pitConfigService.updateMinPitWithTyreChangeSeconds(this.minPitWithTyreChangeSeconds);
  }
  increaseMinPitWithTyreChangeSeconds() {
    this.pitConfigService.updateMinPitWithTyreChangeSeconds(this.minPitWithTyreChangeSeconds + 1);
  }
  decreaseMinPitWithTyreChangeSeconds() {
    this.pitConfigService.updateMinPitWithTyreChangeSeconds(this.minPitWithTyreChangeSeconds - 1);
  }
  // MIN TOTAL PIT MINUTE
  onSubmitMinTotalPitMinute() {
    this.pitConfigService.updateMinTotalPitMinute(this.minTotalPitMinute);
  }
  increaseMinTotalPitMinute() {
    this.pitConfigService.updateMinTotalPitMinute(this.minTotalPitMinute + 1);
  }
  decreaseMinTotalPitMinute() {
    this.pitConfigService.updateMinTotalPitMinute(this.minTotalPitMinute - 1);
  }
  // MAX PIT SECONDS
  onSubmitMaxPitSeconds() {
    this.pitConfigService.updateMaxPitSeconds(this.maxPitSeconds);
  }
  increaseMaxPitSeconds() {
    this.pitConfigService.updateMaxPitSeconds(this.maxPitSeconds + 1);
  }
  decreaseMaxPitSeconds() {
    this.pitConfigService.updateMaxPitSeconds(this.maxPitSeconds - 1);
  }
  static \u0275fac = function PitConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PitConfigComponent, selectors: [["app-pit-config"]], decls: 55, vars: 15, consts: [["title", "\u{1F468}\u{1F3FB}\u200D\u{1F527} Pit", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor"], ["type", "button", "tooltip", "", "aria-label", "Refresh data", 1, "text-neutral-500", "dark:text-neutral-400", "hover:ring-2", "rounded-full", "p-1", "transition-colors", "duration-200", "hover:cursor-pointer", 3, "click", "tooltipEnabled", "tooltipData", "tooltipPosition"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", "clip-rule", "evenodd"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-end"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-black", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [3, "ngSubmit"], ["type", "number", "id", "minPitSeconds", "name", "minPitSeconds", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-18", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "flex", "justify-end", "flex-row", "gap-1"], ["type", "number", "id", "minPitWithTyreChangeSeconds", "name", "minPitWithTyreChangeSeconds", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-18", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], ["type", "number", "id", "minTotalPitMinute", "name", "minTotalPitMinute", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-18", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], ["type", "number", "id", "maxPitSeconds", "name", "maxPitSeconds", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-18", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function PitConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_3_listener() {
        return ctx.refreshPits();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div")(9, "div", 8);
      \u0275\u0275text(10, "Min pit (sec)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_12_listener() {
        return ctx.increaseMinPitSeconds();
      });
      \u0275\u0275text(13, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "form", 11);
      \u0275\u0275listener("ngSubmit", function PitConfigComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmitMinPitSeconds();
      });
      \u0275\u0275elementStart(15, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function PitConfigComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minPitSeconds, $event) || (ctx.minPitSeconds = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_16_listener() {
        return ctx.decreaseMinPitSeconds();
      });
      \u0275\u0275text(17, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div")(19, "div", 13);
      \u0275\u0275text(20, "Min pit with tyre change (sec)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "button", 10);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_22_listener() {
        return ctx.increaseMinPitWithTyreChangeSeconds();
      });
      \u0275\u0275text(23, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "form", 11);
      \u0275\u0275listener("ngSubmit", function PitConfigComponent_Template_form_ngSubmit_24_listener() {
        return ctx.onSubmitMinPitWithTyreChangeSeconds();
      });
      \u0275\u0275elementStart(25, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function PitConfigComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minPitWithTyreChangeSeconds, $event) || (ctx.minPitWithTyreChangeSeconds = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 10);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_26_listener() {
        return ctx.decreaseMinPitWithTyreChangeSeconds();
      });
      \u0275\u0275text(27, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(28, "hr");
      \u0275\u0275elementStart(29, "div", 7)(30, "div")(31, "div", 8);
      \u0275\u0275text(32, "Min total pit (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9)(34, "button", 10);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_34_listener() {
        return ctx.increaseMinTotalPitMinute();
      });
      \u0275\u0275text(35, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "form", 11);
      \u0275\u0275listener("ngSubmit", function PitConfigComponent_Template_form_ngSubmit_36_listener() {
        return ctx.onSubmitMinTotalPitMinute();
      });
      \u0275\u0275elementStart(37, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function PitConfigComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minTotalPitMinute, $event) || (ctx.minTotalPitMinute = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "button", 10);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_38_listener() {
        return ctx.decreaseMinTotalPitMinute();
      });
      \u0275\u0275text(39, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div")(41, "div", 13);
      \u0275\u0275text(42, "Max pit (sec)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 14)(44, "button", 10);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_44_listener() {
        return ctx.increaseMaxPitSeconds();
      });
      \u0275\u0275text(45, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "form", 11);
      \u0275\u0275listener("ngSubmit", function PitConfigComponent_Template_form_ngSubmit_46_listener() {
        return ctx.onSubmitMaxPitSeconds();
      });
      \u0275\u0275elementStart(47, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function PitConfigComponent_Template_input_ngModelChange_47_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.maxPitSeconds, $event) || (ctx.maxPitSeconds = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "button", 10);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_48_listener() {
        return ctx.decreaseMaxPitSeconds();
      });
      \u0275\u0275text(49, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 18)(51, "button", 19);
      \u0275\u0275listener("click", function PitConfigComponent_Template_button_click_51_listener() {
        return ctx.updatePitVisibility();
      });
      \u0275\u0275template(52, PitConfigComponent_Conditional_52_Template, 1, 0)(53, PitConfigComponent_Conditional_53_Template, 1, 0);
      \u0275\u0275text(54, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance();
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.minPitSeconds);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.minPitWithTyreChangeSeconds);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.minTotalPitMinute);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.maxPitSeconds);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c016, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 52 : 53);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    TooltipDirective,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitConfigComponent, [{
    type: Component,
    args: [{ selector: "app-pit-config", imports: [
      CardComponent,
      NgClass,
      FormsModule,
      TooltipDirective,
      ChipComponent
    ], template: `<app-card
  title="\u{1F468}\u{1F3FB}\u200D\u{1F527} Pit"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />

    <button type="button"
            tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition"
            class="text-neutral-500 dark:text-neutral-400 hover:ring-2 rounded-full p-1 transition-colors duration-200 hover:cursor-pointer"
            (click)="refreshPits()"
            aria-label="Refresh data">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>

  <div slot="body-content" class="flex flex-col gap-2">

    <div class="flex justify-between items-end">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Min pit (sec)</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseMinPitSeconds()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMinPitSeconds()">
            <input
              type="number"
              id="minPitSeconds"
              [(ngModel)]="minPitSeconds"
              name="minPitSeconds"
              class="border rounded-lg px-2 py-1 max-w-18 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMinPitSeconds()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Min pit with tyre change (sec)</div>
        <div class="flex justify-end flex-row gap-1">
          <button (click)="increaseMinPitWithTyreChangeSeconds()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMinPitWithTyreChangeSeconds()">
            <input
              type="number"
              id="minPitWithTyreChangeSeconds"
              [(ngModel)]="minPitWithTyreChangeSeconds"
              name="minPitWithTyreChangeSeconds"
              class="border rounded-lg px-2 py-1 max-w-18 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMinPitWithTyreChangeSeconds()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>

    </div>

    <hr>

    <div class="flex justify-between items-end">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Min total pit (min)</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseMinTotalPitMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMinTotalPitMinute()">
            <input
              type="number"
              id="minTotalPitMinute"
              [(ngModel)]="minTotalPitMinute"
              name="minTotalPitMinute"
              class="border rounded-lg px-2 py-1 max-w-18 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMinTotalPitMinute()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Max pit (sec)</div>
        <div class="flex justify-end flex-row gap-1">
          <button (click)="increaseMaxPitSeconds()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMaxPitSeconds()">
            <input
              type="number"
              id="maxPitSeconds"
              [(ngModel)]="maxPitSeconds"
              name="maxPitSeconds"
              class="border rounded-lg px-2 py-1 max-w-18 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMaxPitSeconds()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>

    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updatePitVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PitConfigComponent, { className: "PitConfigComponent", filePath: "src/app/pit/component/pit-config/pit-config.component.ts", lineNumber: 25 });
})();

// src/app/race/component/race-config/race-config.component.ts
var RaceConfigComponent = class _RaceConfigComponent {
  raceConfigService = inject(RaceConfigService);
  durationHour = 0;
  endRaceButtonThresholdSeconds = 0;
  constructor() {
    effect(() => {
      const config = this.raceConfigService.raceConfig();
      if (config) {
        this.durationHour = config.durationHour;
        this.endRaceButtonThresholdSeconds = config.endRaceButtonThresholdSeconds;
      }
    });
  }
  // DURATION HOUR
  onSubmitDurationHour() {
    this.raceConfigService.updateDurationHour(this.durationHour);
  }
  increaseDurationHour() {
    this.raceConfigService.updateDurationHour(this.durationHour + 1);
  }
  decreaseDurationHour() {
    this.raceConfigService.updateDurationHour(this.durationHour - 1);
  }
  // END RACE BUTTON THRESHOLD SECONDS
  onSubmitEndRaceButtonThresholdSeconds() {
    this.raceConfigService.updateEndRaceButtonThresholdSeconds(this.endRaceButtonThresholdSeconds);
  }
  increaseEndRaceButtonThresholdSeconds() {
    this.raceConfigService.updateEndRaceButtonThresholdSeconds(this.endRaceButtonThresholdSeconds + 1);
  }
  decreaseEndRaceButtonThresholdSeconds() {
    this.raceConfigService.updateEndRaceButtonThresholdSeconds(this.endRaceButtonThresholdSeconds - 1);
  }
  static \u0275fac = function RaceConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RaceConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RaceConfigComponent, selectors: [["app-race-config"]], decls: 23, vars: 3, consts: [["title", "\u{1F3C1} Race", 3, "initiallyOpen"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-end"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-black", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [3, "ngSubmit"], ["type", "number", "id", "durationHour", "name", "durationHour", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "flex", "justify-end", "flex-row", "gap-1"], ["type", "number", "id", "endRaceButtonThresholdSeconds", "name", "endRaceButtonThresholdSeconds", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"]], template: function RaceConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3);
      \u0275\u0275text(5, "Duration hour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
      \u0275\u0275listener("click", function RaceConfigComponent_Template_button_click_7_listener() {
        return ctx.increaseDurationHour();
      });
      \u0275\u0275text(8, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "form", 6);
      \u0275\u0275listener("ngSubmit", function RaceConfigComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmitDurationHour();
      });
      \u0275\u0275elementStart(10, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function RaceConfigComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.durationHour, $event) || (ctx.durationHour = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function RaceConfigComponent_Template_button_click_11_listener() {
        return ctx.decreaseDurationHour();
      });
      \u0275\u0275text(12, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div")(14, "div", 8);
      \u0275\u0275text(15, "End race button threshold (sec)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "button", 5);
      \u0275\u0275listener("click", function RaceConfigComponent_Template_button_click_17_listener() {
        return ctx.increaseEndRaceButtonThresholdSeconds();
      });
      \u0275\u0275text(18, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "form", 6);
      \u0275\u0275listener("ngSubmit", function RaceConfigComponent_Template_form_ngSubmit_19_listener() {
        return ctx.onSubmitEndRaceButtonThresholdSeconds();
      });
      \u0275\u0275elementStart(20, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RaceConfigComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endRaceButtonThresholdSeconds, $event) || (ctx.endRaceButtonThresholdSeconds = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 5);
      \u0275\u0275listener("click", function RaceConfigComponent_Template_button_click_21_listener() {
        return ctx.decreaseEndRaceButtonThresholdSeconds();
      });
      \u0275\u0275text(22, " - ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.durationHour);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.endRaceButtonThresholdSeconds);
    }
  }, dependencies: [
    CardComponent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RaceConfigComponent, [{
    type: Component,
    args: [{ selector: "app-race-config", imports: [
      CardComponent,
      FormsModule
    ], template: '<app-card\n  title="\u{1F3C1} Race"\n  [initiallyOpen]="false">\n\n  <div slot="body-content" class="flex flex-col gap-2">\n    <div class="flex justify-between items-end">\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-left">Duration hour</div>\n        <div class="flex justify-start flex-row gap-1">\n          <button (click)="increaseDurationHour()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            +\n          </button>\n          <form (ngSubmit)="onSubmitDurationHour()">\n            <input\n              type="number"\n              id="durationHour"\n              [(ngModel)]="durationHour"\n              name="durationHour"\n              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"\n              required\n              min="1"\n            />\n          </form>\n          <button (click)="decreaseDurationHour()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            -\n          </button>\n        </div>\n      </div>\n\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-right">End race button threshold (sec)</div>\n        <div class="flex justify-end flex-row gap-1">\n          <button (click)="increaseEndRaceButtonThresholdSeconds()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            +\n          </button>\n          <form (ngSubmit)="onSubmitEndRaceButtonThresholdSeconds()">\n            <input\n              type="number"\n              id="endRaceButtonThresholdSeconds"\n              [(ngModel)]="endRaceButtonThresholdSeconds"\n              name="endRaceButtonThresholdSeconds"\n              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"\n              required\n              min="1"\n            />\n          </form>\n          <button (click)="decreaseEndRaceButtonThresholdSeconds()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            -\n          </button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</app-card>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RaceConfigComponent, { className: "RaceConfigComponent", filePath: "src/app/race/component/race-config/race-config.component.ts", lineNumber: 15 });
})();

// src/app/lap-missing/component/lap-missing-config/lap-missing-config.component.ts
var _c017 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function LapMissingConfigComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function LapMissingConfigComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var LapMissingConfigComponent = class _LapMissingConfigComponent {
  boardConfigService = inject(BoardConfigService);
  lapMissingDataService = inject(LapMissingDataService);
  lapMissingService = inject(LapMissingService);
  lapMissingCount = this.lapMissingService.lapMissingCount;
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.lapMissingVisible;
    }
    return false;
  });
  tooltipData = {
    footer: "",
    paragraphs: ["Refresh lap missing data"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  updateMissingLapVisibility() {
    this.boardConfigService.updateLapMissingVisibility(!this.visible());
  }
  forceCheckLapMissing() {
    this.lapMissingDataService.forceCheckLapMissing();
  }
  refreshLapMissing() {
    this.lapMissingDataService.refreshLapMissing();
  }
  testCloudTaskQueue() {
    this.lapMissingDataService.testCloudTaskQueue();
  }
  static \u0275fac = function LapMissingConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapMissingConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LapMissingConfigComponent, selectors: [["app-lap-missing-config"]], decls: 18, vars: 14, consts: [["title", "\u23F1\uFE0F\u274C Lap missing", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor", "bounceCondition"], [3, "text", "backgroundColor"], ["type", "button", "tooltip", "", "aria-label", "Refresh data", 1, "text-neutral-500", "dark:text-neutral-400", "hover:ring-2", "rounded-full", "p-1", "transition-colors", "duration-200", "hover:cursor-pointer", 3, "click", "tooltipEnabled", "tooltipData", "tooltipPosition"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", "clip-rule", "evenodd"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "bg-yellow-500", "hover:bg-yellow-700", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "bg-blue-500", "hover:bg-blue-700", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function LapMissingConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2)(3, "app-chip", 3);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function LapMissingConfigComponent_Template_button_click_4_listener() {
        return ctx.refreshLapMissing();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "button", 9);
      \u0275\u0275listener("click", function LapMissingConfigComponent_Template_button_click_9_listener() {
        return ctx.forceCheckLapMissing();
      });
      \u0275\u0275text(10, " Force check lap missing ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 10);
      \u0275\u0275listener("click", function LapMissingConfigComponent_Template_button_click_11_listener() {
        return ctx.testCloudTaskQueue();
      });
      \u0275\u0275text(12, " Test cloud task queue ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
      \u0275\u0275listener("click", function LapMissingConfigComponent_Template_button_click_14_listener() {
        return ctx.updateMissingLapVisibility();
      });
      \u0275\u0275template(15, LapMissingConfigComponent_Conditional_15_Template, 1, 0)(16, LapMissingConfigComponent_Conditional_16_Template, 1, 0);
      \u0275\u0275text(17, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.lapMissingCount() > 0 ? "Lap Missing: " + ctx.lapMissingCount() : "No lap missing!")("backgroundColor", ctx.lapMissingCount() > 0 ? "bg-yellow-500" : "bg-green-500")("bounceCondition", ctx.lapMissingCount() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance();
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c017, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 15 : 16);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    TooltipDirective,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapMissingConfigComponent, [{
    type: Component,
    args: [{ selector: "app-lap-missing-config", imports: [
      CardComponent,
      NgClass,
      TooltipDirective,
      ChipComponent
    ], template: `<app-card
  title="\u23F1\uFE0F\u274C Lap missing"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="lapMissingCount() > 0 ? 'Lap Missing: ' + lapMissingCount() : 'No lap missing!'"
      [backgroundColor]="lapMissingCount() > 0 ? 'bg-yellow-500' : 'bg-green-500'"
      [bounceCondition]="lapMissingCount() > 0"
    />

    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />

    <button type="button"
            tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition"
            class="text-neutral-500 dark:text-neutral-400 hover:ring-2 rounded-full p-1 transition-colors duration-200 hover:cursor-pointer"
            (click)="refreshLapMissing()"
            aria-label="Refresh data">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <button
        (click)="forceCheckLapMissing()"
        class="bg-yellow-500 hover:bg-yellow-700 text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
        Force check lap missing
      </button>

      <button
        (click)="testCloudTaskQueue()"
        class="bg-blue-500 hover:bg-blue-700 text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
        Test cloud task queue
      </button>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateMissingLapVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>

` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LapMissingConfigComponent, { className: "LapMissingConfigComponent", filePath: "src/app/lap-missing/component/lap-missing-config/lap-missing-config.component.ts", lineNumber: 23 });
})();

// src/app/lap/component/lap-loading-config/lap-loading-config.component.ts
var LapLoadingConfigComponent = class _LapLoadingConfigComponent {
  lapLoadingConfigService = inject(LapLoadingConfigService);
  lapDataService = inject(LapDataService);
  lapService = inject(LapService);
  loadedLaps = computed(() => {
    return this.lapDataService.laps().length;
  });
  pittedLaps = computed(() => {
    return this.lapService.pitLaps().length;
  });
  pageSize = 0;
  constructor() {
    effect(() => {
      const lapLoadingConfig = this.lapLoadingConfigService.lapLoadingConfig();
      if (lapLoadingConfig) {
        this.pageSize = lapLoadingConfig.pageSize;
      }
    });
  }
  // PAGE SIZE DATA LOADING
  onSubmitPageSize() {
    this.lapLoadingConfigService.updatePageSize(this.pageSize);
  }
  reloadAllLaps() {
    this.lapDataService.reloadAllLaps();
  }
  static \u0275fac = function LapLoadingConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapLoadingConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LapLoadingConfigComponent, selectors: [["app-lap-loading-config"]], decls: 24, vars: 6, consts: [["title", "\u23F1\uFE0F\u2194\uFE0F Lap loading", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"], [1, "text-left", 3, "ngSubmit"], ["type", "number", "id", "pageSize", "name", "pageSize", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-40", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "bg-yellow-500", "hover:bg-yellow-700", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"]], template: function LapLoadingConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2)(3, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div")(7, "div", 5);
      \u0275\u0275text(8, "Loaded laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div")(12, "div", 7);
      \u0275\u0275text(13, "Pitted laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 4)(17, "div")(18, "div", 7);
      \u0275\u0275text(19, "Loading data page size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "form", 9);
      \u0275\u0275listener("ngSubmit", function LapLoadingConfigComponent_Template_form_ngSubmit_20_listener() {
        return ctx.onSubmitPageSize();
      });
      \u0275\u0275elementStart(21, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function LapLoadingConfigComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "button", 11);
      \u0275\u0275listener("click", function LapLoadingConfigComponent_Template_button_click_22_listener() {
        return ctx.reloadAllLaps();
      });
      \u0275\u0275text(23, " Reload all laps ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", "Loaded: " + ctx.loadedLaps());
      \u0275\u0275advance();
      \u0275\u0275property("text", "Pitted: " + ctx.pittedLaps());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.loadedLaps(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.pittedLaps(), " ");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
    }
  }, dependencies: [
    CardComponent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapLoadingConfigComponent, [{
    type: Component,
    args: [{ selector: "app-lap-loading-config", imports: [
      CardComponent,
      FormsModule,
      ChipComponent
    ], template: `<app-card
  title="\u23F1\uFE0F\u2194\uFE0F Lap loading"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">
    <app-chip
      [text]="'Loaded: ' + loadedLaps()"
    />
    <app-chip
      [text]="'Pitted: ' + pittedLaps()"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">

      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Loaded laps</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          {{ loadedLaps() }}
        </div>
    </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Pitted laps</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ pittedLaps() }}
        </div>
      </div>

    </div>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Loading data page size</div>
        <form (ngSubmit)="onSubmitPageSize()" class="text-left">
          <input
            type="number"
            id="pageSize"
            [(ngModel)]="pageSize"
            name="pageSize"
            class="border rounded-lg px-2 py-1 max-w-40 text-right text-neutral-900 dark:text-neutral-100"
            required
            min="1"
          />
        </form>
      </div>

      <button
        (click)="reloadAllLaps()"
        class="bg-yellow-500 hover:bg-yellow-700 text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
        Reload all laps
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LapLoadingConfigComponent, { className: "LapLoadingConfigComponent", filePath: "src/app/lap/component/lap-loading-config/lap-loading-config.component.ts", lineNumber: 19 });
})();

// src/app/steering-wheel/component/steering-wheel-message-button-config/steering-wheel-message-button-config.component.ts
var _c018 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function SteeringWheelMessageButtonConfigComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function SteeringWheelMessageButtonConfigComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var SteeringWheelMessageButtonConfigComponent = class _SteeringWheelMessageButtonConfigComponent {
  boardConfigService = inject(BoardConfigService);
  steeringWheelConfigService = inject(SteeringWheelConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.steeringWheelMessageButtonVisible;
    }
    return false;
  });
  messageDurationSeconds = 0;
  messageInvertColorIntervalMilliseconds = 0;
  constructor() {
    effect(() => {
      const config = this.steeringWheelConfigService.steeringWheelConfig();
      if (config) {
        this.messageDurationSeconds = config.messageDurationSeconds;
        this.messageInvertColorIntervalMilliseconds = config.messageInvertColorIntervalMilliseconds;
      }
    });
  }
  updateSteeringWheelMessageButtonVisibility() {
    this.boardConfigService.updateSteeringWheelMessageButtonVisibility(!this.visible());
  }
  // MESSAGE DURATION SECONDS
  onSubmitMessageDurationSeconds() {
    this.steeringWheelConfigService.updateMessageDurationSeconds(this.messageDurationSeconds);
  }
  increaseMessageDurationSeconds() {
    this.steeringWheelConfigService.updateMessageDurationSeconds(this.messageDurationSeconds + 1);
  }
  decreaseMessageDurationSeconds() {
    this.steeringWheelConfigService.updateMessageDurationSeconds(this.messageDurationSeconds - 1);
  }
  // MESSAGE INVERT COLOR INTERVAL MILLIS
  onSubmitMessageInvertColorIntervalMilliseconds() {
    this.steeringWheelConfigService.updateMessageInvertColorIntervalMilliseconds(this.messageInvertColorIntervalMilliseconds);
  }
  static \u0275fac = function SteeringWheelMessageButtonConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SteeringWheelMessageButtonConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SteeringWheelMessageButtonConfigComponent, selectors: [["app-steering-wheel-message-button-config"]], decls: 26, vars: 10, consts: [["title", "\u{1F94F}\u{1F4AC} Steering wheel message", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-end"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-black", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [3, "ngSubmit"], ["type", "number", "id", "messageDurationSeconds", "name", "messageDurationSeconds", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-16", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "flex", "justify-end", "flex-row", "gap-1"], ["type", "number", "id", "messageInvertColorIntervalMilliseconds", "name", "messageInvertColorIntervalMilliseconds", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function SteeringWheelMessageButtonConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Message duration (sec)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function SteeringWheelMessageButtonConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseMessageDurationSeconds();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function SteeringWheelMessageButtonConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitMessageDurationSeconds();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function SteeringWheelMessageButtonConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.messageDurationSeconds, $event) || (ctx.messageDurationSeconds = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function SteeringWheelMessageButtonConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseMessageDurationSeconds();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div")(16, "div", 10);
      \u0275\u0275text(17, "Message invert color interval (mills)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "form", 8);
      \u0275\u0275listener("ngSubmit", function SteeringWheelMessageButtonConfigComponent_Template_form_ngSubmit_19_listener() {
        return ctx.onSubmitMessageInvertColorIntervalMilliseconds();
      });
      \u0275\u0275elementStart(20, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function SteeringWheelMessageButtonConfigComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.messageInvertColorIntervalMilliseconds, $event) || (ctx.messageInvertColorIntervalMilliseconds = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
      \u0275\u0275listener("click", function SteeringWheelMessageButtonConfigComponent_Template_button_click_22_listener() {
        return ctx.updateSteeringWheelMessageButtonVisibility();
      });
      \u0275\u0275template(23, SteeringWheelMessageButtonConfigComponent_Conditional_23_Template, 1, 0)(24, SteeringWheelMessageButtonConfigComponent_Conditional_24_Template, 1, 0);
      \u0275\u0275text(25, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.messageDurationSeconds);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.messageInvertColorIntervalMilliseconds);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c018, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 23 : 24);
    }
  }, dependencies: [
    CardComponent,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    ReactiveFormsModule,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SteeringWheelMessageButtonConfigComponent, [{
    type: Component,
    args: [{ selector: "app-steering-wheel-message-button-config", imports: [
      CardComponent,
      NgClass,
      FormsModule,
      ReactiveFormsModule,
      ChipComponent
    ], template: `<app-card
  title="\u{1F94F}\u{1F4AC} Steering wheel message"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">

    <div class="flex justify-between items-end">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Message duration (sec)</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseMessageDurationSeconds()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitMessageDurationSeconds()">
            <input
              type="number"
              id="messageDurationSeconds"
              [(ngModel)]="messageDurationSeconds"
              name="messageDurationSeconds"
              class="border rounded-lg px-2 py-1 max-w-16 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseMessageDurationSeconds()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Message invert color interval (mills)</div>
        <div class="flex justify-end flex-row gap-1">
          <form (ngSubmit)="onSubmitMessageInvertColorIntervalMilliseconds()">
            <input
              type="number"
              id="messageInvertColorIntervalMilliseconds"
              [(ngModel)]="messageInvertColorIntervalMilliseconds"
              name="messageInvertColorIntervalMilliseconds"
              class="border rounded-lg px-2 py-1 max-w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateSteeringWheelMessageButtonVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SteeringWheelMessageButtonConfigComponent, { className: "SteeringWheelMessageButtonConfigComponent", filePath: "src/app/steering-wheel/component/steering-wheel-message-button-config/steering-wheel-message-button-config.component.ts", lineNumber: 21 });
})();

// src/app/timeline/component/timeline-config/timeline-config.component.ts
var _c019 = (a0, a1) => ({ "bg-red-500 hover:bg-red-700 disabled:bg-red-200": a0, "bg-green-500 hover:bg-green-700": a1 });
function TimelineConfigComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hide from ");
  }
}
function TimelineConfigComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Show on ");
  }
}
var TimelineConfigComponent = class _TimelineConfigComponent {
  boardConfigService = inject(BoardConfigService);
  timelineConfigService = inject(TimelineConfigService);
  visible = computed(() => {
    const config = this.boardConfigService.boardConfig();
    if (config) {
      return config.timelineVisible;
    }
    return false;
  });
  visibleAfterMinWidthPixel = 0;
  constructor() {
    effect(() => {
      const config = this.timelineConfigService.timelineConfig();
      if (config) {
        this.visibleAfterMinWidthPixel = config.visibleAfterMinWidthPixel;
      }
    });
  }
  updateTimelineVisibility() {
    this.boardConfigService.updateTimelineVisibility(!this.visible());
  }
  onSubmitVisibleAfterMinWidthPixel() {
    this.timelineConfigService.updateVisibleAfterMinWidthPixel(this.visibleAfterMinWidthPixel);
  }
  increaseVisibleAfterMinWidthPixel() {
    this.timelineConfigService.updateVisibleAfterMinWidthPixel(this.visibleAfterMinWidthPixel + 1);
  }
  decreaseVisibleAfterMinWidthPixel() {
    this.timelineConfigService.updateVisibleAfterMinWidthPixel(this.visibleAfterMinWidthPixel - 1);
  }
  static \u0275fac = function TimelineConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineConfigComponent, selectors: [["app-timeline-config"]], decls: 20, vars: 9, consts: [["title", "\u23F1\uFE0F\u27A1\uFE0F Timeline", 3, "initiallyOpen"], ["slot", "header-right-content"], [3, "text", "backgroundColor"], ["slot", "body-content"], [1, "flex", "justify-between", "mb-2"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-neutral-900", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "visibleAfterMinWidthPixel", "name", "visibleAfterMinWidthPixel", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "items-center"], [1, "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "ngClass"]], template: function TimelineConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275text(7, "Visible after min width pixel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function TimelineConfigComponent_Template_button_click_9_listener() {
        return ctx.increaseVisibleAfterMinWidthPixel();
      });
      \u0275\u0275text(10, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function TimelineConfigComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmitVisibleAfterMinWidthPixel();
      });
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function TimelineConfigComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.visibleAfterMinWidthPixel, $event) || (ctx.visibleAfterMinWidthPixel = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function TimelineConfigComponent_Template_button_click_13_listener() {
        return ctx.decreaseVisibleAfterMinWidthPixel();
      });
      \u0275\u0275text(14, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function TimelineConfigComponent_Template_button_click_16_listener() {
        return ctx.updateTimelineVisibility();
      });
      \u0275\u0275template(17, TimelineConfigComponent_Conditional_17_Template, 1, 0)(18, TimelineConfigComponent_Conditional_18_Template, 1, 0);
      \u0275\u0275text(19, " dashboard ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.visible() ? "Visible" : "Hidden")("backgroundColor", ctx.visible() ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.visibleAfterMinWidthPixel);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c019, ctx.visible(), !ctx.visible()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visible() ? 17 : 18);
    }
  }, dependencies: [
    CardComponent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    NgClass,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineConfigComponent, [{
    type: Component,
    args: [{ selector: "app-timeline-config", imports: [
      CardComponent,
      FormsModule,
      NgClass,
      ChipComponent
    ], template: `<app-card
  title="\u23F1\uFE0F\u27A1\uFE0F Timeline"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    <app-chip
      [text]="visible() ? 'Visible' : 'Hidden'"
      [backgroundColor]="visible() ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content">
    <div class="flex justify-between mb-2">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-left">Visible after min width pixel</div>
        <div class="flex justify-start flex-row gap-1">
          <button (click)="increaseVisibleAfterMinWidthPixel()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            +
          </button>
          <form (ngSubmit)="onSubmitVisibleAfterMinWidthPixel()" class="text-right">
            <input
              type="number"
              id="visibleAfterMinWidthPixel"
              [(ngModel)]="visibleAfterMinWidthPixel"
              name="visibleAfterMinWidthPixel"
              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"
              required
              min="1"
            />
          </form>
          <button (click)="decreaseVisibleAfterMinWidthPixel()"
                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button
        [ngClass]="{'bg-red-500 hover:bg-red-700 disabled:bg-red-200': visible(), 'bg-green-500 hover:bg-green-700': !visible()}"
        class="text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer"
        (click)="updateTimelineVisibility()">
        @if (visible()) {
          Hide from
        } @else {
          Show on
        }
        dashboard
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineConfigComponent, { className: "TimelineConfigComponent", filePath: "src/app/timeline/component/timeline-config/timeline-config.component.ts", lineNumber: 20 });
})();

// src/app/team/component/team-config/team-config.component.ts
var TeamConfigComponent = class _TeamConfigComponent {
  teamDataService = inject(TeamDataService);
  tooltipData = {
    footer: "",
    paragraphs: ["Refresh team data"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  refreshTeams() {
    this.teamDataService.refreshTeams();
  }
  static \u0275fac = function TeamConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamConfigComponent, selectors: [["app-team-config"]], decls: 5, vars: 5, consts: [["title", "\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2} Team", 3, "initiallyOpen", "canOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], ["type", "button", "tooltip", "", "aria-label", "Refresh data", 1, "text-neutral-500", "dark:text-neutral-400", "hover:ring-2", "rounded-full", "p-1", "transition-colors", "duration-200", "hover:cursor-pointer", 3, "click", "tooltipEnabled", "tooltipData", "tooltipPosition"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", "clip-rule", "evenodd"]], template: function TeamConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function TeamConfigComponent_Template_button_click_2_listener() {
        return ctx.refreshTeams();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false)("canOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
    }
  }, dependencies: [
    CardComponent,
    FormsModule,
    ReactiveFormsModule,
    TooltipDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamConfigComponent, [{
    type: Component,
    args: [{ selector: "app-team-config", imports: [
      CardComponent,
      FormsModule,
      ReactiveFormsModule,
      TooltipDirective
    ], template: '<app-card\n  title="\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2} Team"\n  [initiallyOpen]="false"\n  [canOpen]="false">\n\n  <div slot="header-right-content" class="flex items-center gap-1">\n    <button type="button"\n            tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition"\n            class="text-neutral-500 dark:text-neutral-400 hover:ring-2 rounded-full p-1 transition-colors duration-200 hover:cursor-pointer"\n            (click)="refreshTeams()"\n            aria-label="Refresh data">\n      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">\n        <path fill-rule="evenodd"\n              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"\n              clip-rule="evenodd"></path>\n      </svg>\n    </button>\n  </div>\n\n</app-card>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamConfigComponent, { className: "TeamConfigComponent", filePath: "src/app/team/component/team-config/team-config.component.ts", lineNumber: 20 });
})();

// src/app/configuration/component/configuration/configuration.component.ts
var ConfigurationComponent = class _ConfigurationComponent {
  titleService = inject(Title);
  constructor() {
    this.titleService.setTitle("WBR - Configuration");
  }
  static \u0275fac = function ConfigurationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigurationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigurationComponent, selectors: [["app-configuration"]], decls: 32, vars: 0, consts: [[1, "p-4", "flex", "flex-row", "justify-between"], [1, "text-xl", "md:text-3xl", "dark:text-neutral-100", "text-neutral-900", "font-semibold"], [1, "mx-2", "grid", "grid-cols-1", "lg:grid-cols-2", "xl:grid-cols-3", "gap-2"], [1, "flex", "flex-col", "md:h-fit", "gap-2"]], template: function ConfigurationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "\u2699\uFE0F WBR - Configuration \u{1F417}");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-navigator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
      \u0275\u0275element(6, "app-pit-lane-config")(7, "app-tyre-pressure-config")(8, "app-fuel-config")(9, "app-kart-config")(10, "app-interphone-config")(11, "app-race-config")(12, "app-timeline-config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 3);
      \u0275\u0275element(14, "app-steering-wheel-message-button-config")(15, "app-live-timing-config")(16, "app-active-stint-config")(17, "app-stint-optimizer-config")(18, "app-delta-stint-config")(19, "app-lap-config")(20, "app-lap-missing-config")(21, "app-lap-simulator-config")(22, "app-lap-loading-config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 3);
      \u0275\u0275element(24, "app-driver-change-config")(25, "app-kart-change-config")(26, "app-tyre-change-config")(27, "app-driver-config")(28, "app-driver-performance-config")(29, "app-pit-config")(30, "app-stint-config")(31, "app-team-config");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [
    LapConfigComponent,
    LiveTimingConfigComponent,
    DriverConfigComponent,
    DriverChangeConfigComponent,
    InterphoneConfigComponent,
    NavigatorComponent,
    FuelConfigComponent,
    KartConfigComponent,
    PitLaneConfigComponent,
    TyrePressureConfigComponent,
    TyreChangeConfigComponent,
    ActiveStintConfigComponent,
    StintOptimizerConfigComponent,
    DeltaStintConfigComponent,
    StintConfigComponent,
    LapSimulatorConfigComponent,
    KartChangeConfigComponent,
    DriverPerformanceConfigComponent,
    PitConfigComponent,
    RaceConfigComponent,
    LapMissingConfigComponent,
    LapLoadingConfigComponent,
    SteeringWheelMessageButtonConfigComponent,
    TimelineConfigComponent,
    TeamConfigComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurationComponent, [{
    type: Component,
    args: [{ selector: "app-configuration", imports: [
      LapConfigComponent,
      LiveTimingConfigComponent,
      DriverConfigComponent,
      DriverChangeConfigComponent,
      InterphoneConfigComponent,
      NavigatorComponent,
      FuelConfigComponent,
      KartConfigComponent,
      PitLaneConfigComponent,
      TyrePressureConfigComponent,
      TyreChangeConfigComponent,
      ActiveStintConfigComponent,
      StintOptimizerConfigComponent,
      DeltaStintConfigComponent,
      StintConfigComponent,
      LapSimulatorConfigComponent,
      KartChangeConfigComponent,
      DriverPerformanceConfigComponent,
      PitConfigComponent,
      RaceConfigComponent,
      LapMissingConfigComponent,
      LapLoadingConfigComponent,
      SteeringWheelMessageButtonConfigComponent,
      TimelineConfigComponent,
      TeamConfigComponent
    ], template: '<div class="p-4 flex flex-row justify-between">\n  <div class="text-xl md:text-3xl dark:text-neutral-100 text-neutral-900 font-semibold">\u2699\uFE0F WBR - Configuration \u{1F417}</div>\n  <app-navigator></app-navigator>\n</div>\n\n<div class="mx-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">\n  <div class="flex flex-col md:h-fit gap-2">\n\n    <app-pit-lane-config></app-pit-lane-config>\n\n    <app-tyre-pressure-config></app-tyre-pressure-config>\n\n    <app-fuel-config></app-fuel-config>\n\n    <app-kart-config></app-kart-config>\n\n    <app-interphone-config></app-interphone-config>\n\n    <app-race-config></app-race-config>\n\n    <app-timeline-config></app-timeline-config>\n\n  </div>\n\n  <div class="flex flex-col md:h-fit gap-2">\n\n    <app-steering-wheel-message-button-config></app-steering-wheel-message-button-config>\n\n    <app-live-timing-config></app-live-timing-config>\n\n    <app-active-stint-config></app-active-stint-config>\n\n    <app-stint-optimizer-config></app-stint-optimizer-config>\n\n    <app-delta-stint-config></app-delta-stint-config>\n\n    <app-lap-config></app-lap-config>\n\n    <app-lap-missing-config></app-lap-missing-config>\n\n    <app-lap-simulator-config></app-lap-simulator-config>\n\n    <app-lap-loading-config></app-lap-loading-config>\n\n  </div>\n\n  <div class="flex flex-col md:h-fit gap-2">\n\n    <app-driver-change-config></app-driver-change-config>\n\n    <app-kart-change-config></app-kart-change-config>\n\n    <app-tyre-change-config></app-tyre-change-config>\n\n    <app-driver-config></app-driver-config>\n\n    <app-driver-performance-config></app-driver-performance-config>\n\n    <app-pit-config></app-pit-config>\n\n    <app-stint-config></app-stint-config>\n\n    <app-team-config></app-team-config>\n\n  </div>\n\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigurationComponent, { className: "ConfigurationComponent", filePath: "src/app/configuration/component/configuration/configuration.component.ts", lineNumber: 95 });
})();
export {
  ConfigurationComponent
};
//# sourceMappingURL=chunk-RS52RPB3.js.map
