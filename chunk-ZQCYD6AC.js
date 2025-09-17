import {
  Component,
  Input,
  NgClass,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-AM7K5Y7Q.js";

// src/app/shared/component/card/card.component.ts
var _c0 = [[["", "slot", "header-right-content"]], [["", "slot", "body-content"]]];
var _c1 = ["[slot=header-right-content]", "[slot=body-content]"];
var _c2 = (a0, a1) => ({ "w-fit": a0, "w-auto": a1 });
var _c3 = (a0) => ({ "mb-2": a0 });
var _c4 = (a0) => ({ "hover:cursor-pointer": a0 });
function CardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function CardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function CardComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.canCompress ? ctx_r1.toggleCompression() : null);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 6);
    \u0275\u0275elementEnd()();
  }
}
function CardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
var CardComponent = class _CardComponent {
  title = "";
  initiallyOpen = false;
  initiallyCompressed = false;
  canOpen = true;
  canCompress = false;
  _isOpen = false;
  _isCompressed = false;
  ngOnInit() {
    this._isOpen = this.initiallyOpen;
    this._isCompressed = this.initiallyCompressed;
  }
  get isOpen() {
    return this._isOpen;
  }
  get isCompressed() {
    return this._isCompressed;
  }
  toggleOpen() {
    if (this.canOpen) {
      this._isOpen = !this._isOpen;
    }
  }
  toggleCompression() {
    if (this.canCompress) {
      this._isCompressed = !this._isCompressed;
      this._isOpen = !this._isCompressed;
    }
  }
  static \u0275fac = function CardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardComponent, selectors: [["app-card"]], inputs: { title: "title", initiallyOpen: "initiallyOpen", initiallyCompressed: "initiallyCompressed", canOpen: "canOpen", canCompress: "canCompress" }, ngContentSelectors: _c1, decls: 7, vars: 14, consts: [[1, "bg-neutral-50", "dark:bg-neutral-800", "shadow-md", "dark:shadow-white/20", "rounded-lg", "p-2", "md:p-3", "lg:p-4", "mx-auto", "border", "hover:shadow-xl", 3, "ngClass"], [1, "flex", "flex-row", "justify-between", "items-center", 3, "ngClass"], [1, "flex-1", "text-lg", "lg:text-xl", "font-bold", "text-neutral-900", "dark:text-neutral-100", 3, "click", "ngClass"], [1, "ml-2", "text-neutral-600", "dark:text-neutral-400", "hover:text-neutral-900", "dark:hover:text-neutral-100", "transition-colors", "hover:cursor-pointer"], [1, "ml-2", "text-neutral-600", "dark:text-neutral-400", "hover:text-neutral-900", "dark:hover:text-neutral-100", "transition-colors", "hover:cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 15l7-7 7 7"]], template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275listener("click", function CardComponent_Template_div_click_2_listener() {
        return ctx.canOpen ? ctx.toggleOpen() : null;
      });
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CardComponent_Conditional_4_Template, 1, 0)(5, CardComponent_Conditional_5_Template, 3, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, CardComponent_Conditional_6_Template, 1, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c2, ctx.isCompressed, !ctx.isCompressed));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c3, ctx.isOpen));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c4, ctx.canOpen));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCompressed ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canCompress ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isOpen ? 6 : -1);
    }
  }, dependencies: [NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{ selector: "app-card", standalone: true, imports: [
      NgClass
    ], template: `
<div
  [ngClass]="{'w-fit': isCompressed, 'w-auto': !isCompressed}"
  class="bg-neutral-50 dark:bg-neutral-800 shadow-md dark:shadow-white/20 rounded-lg p-2 md:p-3 lg:p-4 mx-auto border hover:shadow-xl">

  <!-- Header section with title and configurable content -->
  <div [ngClass]="{'mb-2':isOpen}"  class="flex flex-row justify-between items-center" >

    <!-- Configurable title -->
    <div
      (click)="canOpen ? toggleOpen() : null"
      [ngClass]="{'hover:cursor-pointer': canOpen}"
      class="flex-1 text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100">{{ title }}</div>

    @if (!isCompressed) {
      <ng-content select="[slot=header-right-content]"></ng-content>
    }

    <!-- Compress button -->
    @if (canCompress) {
      <button (click)="canCompress ? toggleCompression() : null"
              class="ml-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors hover:cursor-pointer">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    }

  </div>

  <!-- Body section - only shown when card is open and not compressed -->
  @if (isOpen) {
    <!-- Slot for body content -->
    <ng-content select="[slot=body-content]"></ng-content>
  }
</div>
` }]
  }], null, { title: [{
    type: Input
  }], initiallyOpen: [{
    type: Input
  }], initiallyCompressed: [{
    type: Input
  }], canOpen: [{
    type: Input
  }], canCompress: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src/app/shared/component/card/card.component.ts", lineNumber: 14 });
})();

export {
  CardComponent
};
//# sourceMappingURL=chunk-ZQCYD6AC.js.map
