import {
  SteeringWheelConfigService
} from "./chunk-IMNU3N6K.js";
import {
  GapService,
  SteeringWheelMessageUpdateService,
  getBackgroundColor,
  getContent,
  getInvertedBackgroundColor,
  getInvertedTextColor,
  getTextColor
} from "./chunk-KJF6X5UP.js";
import {
  RacePositionService,
  millisecondsToMinuteSecondMillisecondsString
} from "./chunk-JLOFOMRS.js";
import "./chunk-PQBZRJZN.js";
import "./chunk-2V5B626X.js";
import {
  Component,
  NgClass,
  computed,
  effect,
  inject,
  interval,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AM7K5Y7Q.js";
import "./chunk-YFKO4TLY.js";

// src/app/steering-wheel/component/steering-wheel/steering-wheel.component.ts
function SteeringWheelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.shouldShowMessage() ? ctx_r0.messageBackgroundColor() : "bg-neutral-900");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.messageTextColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.messageContent(), " ");
  }
}
function SteeringWheelComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " + ");
  }
}
function SteeringWheelComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.teamRacePosition(), " ");
  }
}
function SteeringWheelComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " -- ");
  }
}
function SteeringWheelComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function SteeringWheelComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "AHEAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275template(5, SteeringWheelComponent_Conditional_1_Conditional_5_Template, 1, 0);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275text(8, "P: ");
    \u0275\u0275template(9, SteeringWheelComponent_Conditional_1_Conditional_9_Template, 1, 1)(10, SteeringWheelComponent_Conditional_1_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "div", 4);
    \u0275\u0275text(13, "BEHIND");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 4);
    \u0275\u0275template(15, SteeringWheelComponent_Conditional_1_Conditional_15_Template, 1, 0);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.gapAheadMilliseconds() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.gapAheadMillisecondsString(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.teamRacePosition() !== void 0 ? 9 : 10);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.gapBehindMilliseconds() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.gapBehindMillisecondsString(), " ");
  }
}
var SteeringWheelComponent = class _SteeringWheelComponent {
  steeringWheelConfigService = inject(SteeringWheelConfigService);
  steeringWheelMessageUpdateService = inject(SteeringWheelMessageUpdateService);
  gapService = inject(GapService);
  racePositionService = inject(RacePositionService);
  messageDurationSeconds = computed(() => {
    const config = this.steeringWheelConfigService.steeringWheelConfig();
    return config?.messageDurationSeconds ?? 5;
  });
  messageInvertColorIntervalMilliseconds = computed(() => {
    const config = this.steeringWheelConfigService.steeringWheelConfig();
    return config?.messageInvertColorIntervalMilliseconds ?? 500;
  });
  // Reactive signals for message management
  currentMessage = signal(void 0);
  isInverted = signal(false);
  isDisplaying = signal(false);
  intervalSubscription;
  // Computed properties for template
  messageContent = computed(() => {
    const message = this.currentMessage();
    return message ? getContent(message) : "";
  });
  messageBackgroundColor = computed(() => {
    const message = this.currentMessage();
    if (!message)
      return "";
    return this.isInverted() ? getInvertedBackgroundColor(message) : getBackgroundColor(message);
  });
  messageTextColor = computed(() => {
    const message = this.currentMessage();
    if (!message)
      return "";
    return this.isInverted() ? getInvertedTextColor(message) : getTextColor(message);
  });
  shouldShowMessage = computed(() => {
    return this.isDisplaying() && this.currentMessage() !== void 0;
  });
  teamRacePosition = this.racePositionService.teamRacePosition;
  gapAheadMilliseconds = this.gapService.gapAheadMilliseconds;
  gapAheadMillisecondsString = computed(() => {
    const value = this.gapService.gapAheadMilliseconds();
    if (value) {
      return millisecondsToMinuteSecondMillisecondsString(value);
    }
    return "--:--.---";
  });
  gapBehindMilliseconds = this.gapService.gapBehindMilliseconds;
  gapBehindMillisecondsString = computed(() => {
    const value = this.gapService.gapBehindMilliseconds();
    if (value) {
      return millisecondsToMinuteSecondMillisecondsString(Math.abs(value));
    }
    return "--:--.---";
  });
  constructor() {
    effect(() => {
      const messageUpdate = this.steeringWheelMessageUpdateService.steeringWheelMessageUpdate();
      if (messageUpdate && messageUpdate.type) {
        const steeringWheelMessage = {
          type: messageUpdate.type
        };
        this.currentMessage.set(steeringWheelMessage);
        this.startMessageDisplay();
      }
    });
  }
  startMessageDisplay() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    this.isInverted.set(false);
    this.isDisplaying.set(true);
    const totalDurationMs = this.messageDurationSeconds() * 1e3;
    const intervalDuration = this.messageInvertColorIntervalMilliseconds();
    const halfDurationMs = totalDurationMs / 2;
    const totalIntervals = Math.ceil(halfDurationMs / intervalDuration);
    this.intervalSubscription = interval(intervalDuration).pipe(take(totalIntervals)).subscribe({
      next: () => {
        this.isInverted.update((inverted) => !inverted);
      },
      complete: () => {
        this.isInverted.set(false);
        setTimeout(() => {
          this.stopMessageDisplay();
        }, halfDurationMs);
      }
    });
  }
  stopMessageDisplay() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      this.intervalSubscription = void 0;
    }
    this.isInverted.set(false);
    this.isDisplaying.set(false);
  }
  static \u0275fac = function SteeringWheelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SteeringWheelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SteeringWheelComponent, selectors: [["app-steering-wheel"]], decls: 2, vars: 1, consts: [[1, "w-full", "h-full", "min-h-screen", "min-w-screen", "flex", "flex-col", "items-center", "justify-center", "transition-colors", "duration-500", 3, "ngClass"], [1, "w-full", "h-full", "min-h-screen", "min-w-screen", "flex", "flex-col", "gap-0.5", "items-center", "justify-center", "bg-neutral-900", "text-neutral-100"], [1, "text-6xl", "font-bold", "text-center", "transition-colors", "duration-500", 3, "ngClass"], [1, "mb-3", "text-center"], [1, "text-4xl", "font-bold"], [1, "text-6xl", "font-bold", "mb-3"], [1, "text-center"]], template: function SteeringWheelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SteeringWheelComponent_Conditional_0_Template, 3, 3, "div", 0)(1, SteeringWheelComponent_Conditional_1_Template, 17, 5, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.shouldShowMessage() ? 0 : 1);
    }
  }, dependencies: [NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SteeringWheelComponent, [{
    type: Component,
    args: [{ selector: "app-steering-wheel", imports: [NgClass], template: `@if (shouldShowMessage()) {
  <div class="w-full h-full min-h-screen min-w-screen flex flex-col items-center justify-center transition-colors duration-500"
       [ngClass]="shouldShowMessage() ? messageBackgroundColor() : 'bg-neutral-900'">
    <div class="text-6xl font-bold text-center transition-colors duration-500"
         [ngClass]="messageTextColor()">
      {{ messageContent() }}
    </div>
  </div>
} @else {
  <div class="w-full h-full min-h-screen min-w-screen flex flex-col gap-0.5 items-center justify-center bg-neutral-900 text-neutral-100">
    <div class="mb-3 text-center">
      <div class="text-4xl font-bold">AHEAD</div>
      <div class="text-4xl font-bold">
        @if (gapAheadMilliseconds()) {
          +
        }
        {{ gapAheadMillisecondsString() }}
      </div>
    </div>

    <div class="text-6xl font-bold mb-3">P:
      @if (teamRacePosition() !== undefined) {
        {{ teamRacePosition() }}
      } @else {
        --
      }
    </div>
    <div class="text-center">
      <div class="text-4xl font-bold">BEHIND</div>
      <div class="text-4xl font-bold">
        @if (gapBehindMilliseconds()) {
          -
        }
        {{ gapBehindMillisecondsString() }}
      </div>
    </div>

  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SteeringWheelComponent, { className: "SteeringWheelComponent", filePath: "src/app/steering-wheel/component/steering-wheel/steering-wheel.component.ts", lineNumber: 28 });
})();
export {
  SteeringWheelComponent
};
//# sourceMappingURL=chunk-QWJ7UJON.js.map
