import {
  NavigatorComponent
} from "./chunk-LS565PEX.js";
import {
  Title
} from "./chunk-MCTF3ADD.js";
import {
  Component,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpropertyInterpolate1,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-AM7K5Y7Q.js";
import "./chunk-YFKO4TLY.js";

// src/app/circuit/component/circuit/circuit.component.ts
var CircuitComponent = class _CircuitComponent {
  titleService = inject(Title);
  circuitName = environment.circuitName;
  constructor() {
    this.titleService.setTitle("WBR - Circuit");
  }
  static \u0275fac = function CircuitComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CircuitComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircuitComponent, selectors: [["app-circuit"]], decls: 9, vars: 6, consts: [[1, "p-4", "flex", "flex-row", "justify-between"], [1, "text-xl", "md:text-3xl", "dark:text-neutral-100", "text-neutral-900", "font-semibold"], [1, "flex", "flex-col", "justify-center", "items-center", "p-4"], ["alt", "Circuito", 1, "max-w-48", "md:max-w-xs", "m-4", 3, "src"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-1"], ["alt", "Mappa 1", 1, "max-w-xs", "md:max-w-xl", "2xl:max-w-3xl", 3, "src"], ["alt", "Mappa 2", 1, "max-w-xs", "md:max-w-xl", "2xl:max-w-3xl", 3, "src"]], template: function CircuitComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "\u{1F5FA}\uFE0F WBR - Circuit \u{1F417}");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-navigator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275element(5, "img", 3);
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275element(7, "img", 5)(8, "img", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275propertyInterpolate1("src", "assets/", ctx.circuitName, "/logo.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate1("src", "assets/", ctx.circuitName, "/mappa1.jpg", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275propertyInterpolate1("src", "assets/", ctx.circuitName, "/mappa2.jpg", \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [NavigatorComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircuitComponent, [{
    type: Component,
    args: [{ selector: "app-circuit", imports: [
      NavigatorComponent
    ], template: '<div class="p-4 flex flex-row justify-between">\n  <div class="text-xl md:text-3xl dark:text-neutral-100 text-neutral-900 font-semibold">\u{1F5FA}\uFE0F WBR - Circuit \u{1F417}</div>\n  <app-navigator></app-navigator>\n</div>\n\n<div class="flex flex-col justify-center items-center p-4">\n  <img src="assets/{{circuitName}}/logo.png" alt="Circuito" class="max-w-48 md:max-w-xs m-4">\n  <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">\n    <img src="assets/{{circuitName}}/mappa1.jpg" alt="Mappa 1" class="max-w-xs md:max-w-xl 2xl:max-w-3xl">\n    <img src="assets/{{circuitName}}/mappa2.jpg" alt="Mappa 2" class="max-w-xs md:max-w-xl 2xl:max-w-3xl">\n  </div>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircuitComponent, { className: "CircuitComponent", filePath: "src/app/circuit/component/circuit/circuit.component.ts", lineNumber: 14 });
})();
export {
  CircuitComponent
};
//# sourceMappingURL=chunk-GMKMI3J6.js.map
