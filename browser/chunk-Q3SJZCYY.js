import {
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgClass,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AM7K5Y7Q.js";

// src/app/shared/component/tooltip/tooltip.enums.ts
var TooltipPosition;
(function(TooltipPosition2) {
  TooltipPosition2["ABOVE"] = "above";
  TooltipPosition2["BELOW"] = "below";
  TooltipPosition2["LEFT"] = "left";
  TooltipPosition2["RIGHT"] = "right";
})(TooltipPosition || (TooltipPosition = {}));

// src/app/shared/component/tooltip/tooltip.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "tooltip--above": a0, "tooltip--below": a1, "tooltip--left": a2, "tooltip--right": a3 });
function TooltipComponent_For_4_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 2);
  }
}
function TooltipComponent_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, TooltipComponent_For_4_Conditional_0_Conditional_2_Template, 1, 0, "hr", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const paragraph_r2 = ctx_r0.$implicit;
    const \u0275$index_6_r3 = ctx_r0.$index;
    const \u0275$count_6_r4 = ctx_r0.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", paragraph_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_6_r3 === \u0275$count_6_r4 - 1) ? 2 : -1);
  }
}
function TooltipComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TooltipComponent_For_4_Conditional_0_Template, 3, 2);
  }
  if (rf & 2) {
    const paragraph_r2 = ctx.$implicit;
    \u0275\u0275conditional(paragraph_r2 !== "" ? 0 : -1);
  }
}
function TooltipComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 2);
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.data == null ? null : ctx_r4.data.footer, " ");
  }
}
var TooltipComponent = class _TooltipComponent {
  left = 0;
  top = 0;
  data;
  position = TooltipPosition.BELOW;
  TooltipPosition = TooltipPosition;
  static \u0275fac = function TooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TooltipComponent, selectors: [["tooltip"]], inputs: { left: "left", top: "top", data: "data", position: "position" }, decls: 6, vars: 12, consts: [[1, "whitespace-pre-line", "fixed", "bg-neutral-900", "rounded-lg", "shadow-md", "p-4", "text-neutral-100", 3, "ngClass"], [1, "font-bold", "text-lg", "mb-2"], [1, "mb-1"], [1, "text-lg"]], template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(3, TooltipComponent_For_4_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275template(5, TooltipComponent_Conditional_5_Template, 3, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("left", ctx.left + "px")("top", ctx.top + "px");
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(7, _c0, ctx.position === ctx.TooltipPosition.ABOVE, ctx.position === ctx.TooltipPosition.BELOW, ctx.position === ctx.TooltipPosition.LEFT, ctx.position === ctx.TooltipPosition.RIGHT));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data == null ? null : ctx.data.title, " ");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.data == null ? null : ctx.data.paragraphs);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((ctx.data == null ? null : ctx.data.footer) !== "" ? 5 : -1);
    }
  }, dependencies: [NgClass], styles: ["\n\n.tooltip--below[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n  margin-top: 7px;\n}\n.tooltip--below[_ngcontent-%COMP%]::before {\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-top: none;\n  left: calc(50% - 5px);\n  top: -5px;\n}\n.tooltip--above[_ngcontent-%COMP%] {\n  transform: translate(-50%, -100%);\n  margin-bottom: 7px;\n}\n.tooltip--above[_ngcontent-%COMP%]::before {\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-bottom: none;\n  left: calc(50% - 5px);\n  bottom: -5px;\n}\n.tooltip--left[_ngcontent-%COMP%] {\n  transform: translate(calc(-100% - 7px), -50%);\n}\n.tooltip--left[_ngcontent-%COMP%]::before {\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  border-right: none;\n  right: -5px;\n  top: calc(50% - 5px);\n}\n.tooltip--right[_ngcontent-%COMP%] {\n  transform: translateY(-50%);\n  margin-left: 7px;\n}\n.tooltip--right[_ngcontent-%COMP%]::before {\n  left: -5px;\n  top: calc(50% - 5px);\n}\n/*# sourceMappingURL=tooltip.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{ selector: "tooltip", imports: [
      NgClass
    ], template: `<div class="whitespace-pre-line fixed bg-neutral-900 rounded-lg shadow-md p-4 text-neutral-100"
     [ngClass]="{
       'tooltip--above': position === TooltipPosition.ABOVE,
       'tooltip--below': position === TooltipPosition.BELOW,
       'tooltip--left': position === TooltipPosition.LEFT,
       'tooltip--right': position === TooltipPosition.RIGHT
     }"
     [style.left]="left + 'px'"
     [style.top]="top + 'px'">
  <div class="font-bold text-lg mb-2">
    {{ data?.title }}
  </div>
  @for (paragraph of data?.paragraphs; track paragraph; let last = $last) {
    @if (paragraph !== '') {
      <div class="mb-1">
        {{ paragraph }}
      </div>
      @if (!last) {
        <hr class="mb-1">
      }
    }
  }
  @if (data?.footer !== '') {
    <hr class="mb-1">
    <div class="text-lg">
      {{ data?.footer }}
    </div>
  }
</div>
`, styles: ["/* src/app/shared/component/tooltip/tooltip.component.css */\n.tooltip--below {\n  transform: translateX(-50%);\n  margin-top: 7px;\n}\n.tooltip--below::before {\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-top: none;\n  left: calc(50% - 5px);\n  top: -5px;\n}\n.tooltip--above {\n  transform: translate(-50%, -100%);\n  margin-bottom: 7px;\n}\n.tooltip--above::before {\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-bottom: none;\n  left: calc(50% - 5px);\n  bottom: -5px;\n}\n.tooltip--left {\n  transform: translate(calc(-100% - 7px), -50%);\n}\n.tooltip--left::before {\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  border-right: none;\n  right: -5px;\n  top: calc(50% - 5px);\n}\n.tooltip--right {\n  transform: translateY(-50%);\n  margin-left: 7px;\n}\n.tooltip--right::before {\n  left: -5px;\n  top: calc(50% - 5px);\n}\n/*# sourceMappingURL=tooltip.component.css.map */\n"] }]
  }], null, { left: [{
    type: Input
  }], top: [{
    type: Input
  }], data: [{
    type: Input
  }], position: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TooltipComponent, { className: "TooltipComponent", filePath: "src/app/shared/component/tooltip/tooltip.component.ts", lineNumber: 14 });
})();

// src/app/shared/component/tooltip/tooltip.directive.ts
var TooltipDirective = class _TooltipDirective {
  elementRef = inject(ElementRef);
  viewContainerRef = inject(ViewContainerRef);
  document = inject(DOCUMENT);
  tooltipData;
  tooltipPosition = TooltipPosition.BELOW;
  tooltipEnabled = true;
  tooltipComponent;
  hideTooltipTimeout;
  onMouseEnter() {
    if (!this.tooltipEnabled || this.tooltipComponent) {
      return;
    }
    this.tooltipComponent = this.viewContainerRef.createComponent(TooltipComponent);
    this.document.body.appendChild(this.tooltipComponent.location.nativeElement);
    this.setTooltipComponentProperties();
    this.tooltipComponent.hostView.detectChanges();
    this.hideTooltipTimeout = setTimeout(() => {
      this.removeTooltip();
    }, 4e3);
  }
  onMouseLeave() {
    this.removeTooltip();
  }
  removeTooltip() {
    if (!this.tooltipComponent) {
      return;
    }
    this.tooltipComponent.destroy();
    this.tooltipComponent = void 0;
    if (this.hideTooltipTimeout) {
      clearTimeout(this.hideTooltipTimeout);
      this.hideTooltipTimeout = void 0;
    }
  }
  setTooltipComponentProperties() {
    if (!this.tooltipComponent) {
      return;
    }
    this.tooltipComponent.instance.data = this.tooltipData;
    this.tooltipComponent.instance.position = this.tooltipPosition;
    const { left, right, top, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
    switch (this.tooltipPosition) {
      case TooltipPosition.BELOW: {
        this.tooltipComponent.instance.left = Math.round((right - left) / 2 + left);
        this.tooltipComponent.instance.top = Math.round(bottom);
        break;
      }
      case TooltipPosition.ABOVE: {
        this.tooltipComponent.instance.left = Math.round((right - left) / 2 + left);
        this.tooltipComponent.instance.top = Math.round(top);
        break;
      }
      case TooltipPosition.RIGHT: {
        this.tooltipComponent.instance.left = Math.round(right);
        this.tooltipComponent.instance.top = Math.round(top + (bottom - top) / 2);
        break;
      }
      case TooltipPosition.LEFT: {
        this.tooltipComponent.instance.left = Math.round(left);
        this.tooltipComponent.instance.top = Math.round(top + (bottom - top) / 2);
        break;
      }
      default: {
        break;
      }
    }
  }
  static \u0275fac = function TooltipDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TooltipDirective, selectors: [["", "tooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  }, inputs: { tooltipData: "tooltipData", tooltipPosition: "tooltipPosition", tooltipEnabled: "tooltipEnabled" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[tooltip]",
      standalone: true
    }]
  }], null, { tooltipData: [{
    type: Input
  }], tooltipPosition: [{
    type: Input
  }], tooltipEnabled: [{
    type: Input
  }], onMouseEnter: [{
    type: HostListener,
    args: ["mouseenter"]
  }], onMouseLeave: [{
    type: HostListener,
    args: ["mouseleave"]
  }] });
})();

export {
  TooltipPosition,
  TooltipDirective
};
//# sourceMappingURL=chunk-Q3SJZCYY.js.map
