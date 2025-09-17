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
  Component,
  NgForOf,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AM7K5Y7Q.js";
import "./chunk-YFKO4TLY.js";

// src/app/interphone/component/interphone-pairing/interphone-pairing.component.ts
var InterphonePairingComponent = class _InterphonePairingComponent {
  static \u0275fac = function InterphonePairingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InterphonePairingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InterphonePairingComponent, selectors: [["app-interphone-pairing"]], decls: 15, vars: 2, consts: [["title", "\u{1F3A7} \u{1FA96} Interphone pairing procedure", 3, "initiallyOpen", "canOpen"], ["slot", "body-content", 1, "flex"], [1, "list-decimal", "list-inside", "text-neutral-900", "dark:text-neutral-100"], [1, "mb-2"]], template: function InterphonePairingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "ul", 2)(3, "li", 3);
      \u0275\u0275text(4, " \u{1F3A7} Spegnere interfono CUFFIE (premere tasto centrale e posteriore per 3 secondi) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "li", 3);
      \u0275\u0275text(6, " \u{1F3A7} Mettere interfono CUFFIE in Impostazioni (premere tasto centrale per 7 secondi - si accende il led rosso) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "li", 3);
      \u0275\u0275text(8, " \u{1F3A7} Mettere interfono CUFFIE in abbinamento (premere tasto centrale per 3 secondi - il led flasha) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "li", 3);
      \u0275\u0275text(10, " \u{1FA96} Accendere interfono CASCO (premere tasto davanti e basso per 3 secondi) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "li", 3);
      \u0275\u0275text(12, " \u{1FA96} Mettere interfono CASCO in abbinamento (premete tasto sopra per 3 secondi) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "li", 3);
      \u0275\u0275text(14, " \u{1FA96} Aspettare l'abbinamento (i led di entrambi i dispositivi smettono di flashare) ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true)("canOpen", false);
    }
  }, dependencies: [CardComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InterphonePairingComponent, [{
    type: Component,
    args: [{ selector: "app-interphone-pairing", imports: [
      CardComponent
    ], template: `<app-card
  title="\u{1F3A7} \u{1FA96} Interphone pairing procedure"
  [initiallyOpen]="true"
  [canOpen]="false">

  <div slot="body-content" class="flex">
    <ul class="list-decimal list-inside text-neutral-900 dark:text-neutral-100">
      <li class="mb-2">
        \u{1F3A7} Spegnere interfono CUFFIE (premere tasto centrale e posteriore per 3 secondi)
      </li>
      <li class="mb-2">
        \u{1F3A7} Mettere interfono CUFFIE in Impostazioni (premere tasto centrale per 7 secondi - si accende il led rosso)
      </li>
      <li class="mb-2">
        \u{1F3A7} Mettere interfono CUFFIE in abbinamento (premere tasto centrale per 3 secondi - il led flasha)
      </li>
      <li class="mb-2">
        \u{1FA96} Accendere interfono CASCO (premere tasto davanti e basso per 3 secondi)
      </li>
      <li class="mb-2">
        \u{1FA96} Mettere interfono CASCO in abbinamento (premete tasto sopra per 3 secondi)
      </li>
      <li class="mb-2">
        \u{1FA96} Aspettare l'abbinamento (i led di entrambi i dispositivi smettono di flashare)
      </li>
    </ul>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InterphonePairingComponent, { className: "InterphonePairingComponent", filePath: "src/app/interphone/component/interphone-pairing/interphone-pairing.component.ts", lineNumber: 12 });
})();

// src/app/document/component/document/document.component.ts
function DocumentComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275listener("click", function DocumentComponent_li_3_Template_li_click_0_listener() {
      const document_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDocument(document_r2.url));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const document_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", document_r2.name, " ");
  }
}
var DocumentComponent = class _DocumentComponent {
  circuitName = environment.circuitName;
  documents = [
    { name: "Regolamento", url: "assets/" + this.circuitName + "/documents/regolamento.pdf" },
    { name: "Interfono cuffie", url: "assets/documents/interfono-cuffie.pdf" }
    // { name: 'Briefing', url: 'assets/'+ this.circuitName + '/documents/briefing.pdf' },
    // { name: 'Entry list', url: 'assets/'+ this.circuitName + '/documents/entry-list.pdf' },
    // { name: 'Programma Venerdì', url: 'assets/'+ this.circuitName + '/documents/programma-venerdi.pdf' },
    // { name: 'Programma 24H', url: 'assets/'+ this.circuitName + '/documents/programma-24h.pdf' },
  ];
  openDocument(url) {
    window.open(url, "_blank");
  }
  static \u0275fac = function DocumentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentComponent, selectors: [["app-document"]], decls: 4, vars: 3, consts: [["title", "\u{1F5C2}\uFE0F Document", 3, "initiallyOpen", "canOpen"], ["slot", "body-content", 1, "flex"], [1, "list-disc", "list-inside"], ["class", "hover:underline cursor-pointer text-neutral-900 dark:text-neutral-100", 3, "click", 4, "ngFor", "ngForOf"], [1, "hover:underline", "cursor-pointer", "text-neutral-900", "dark:text-neutral-100", 3, "click"]], template: function DocumentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "ul", 2);
      \u0275\u0275template(3, DocumentComponent_li_3_Template, 2, 1, "li", 3);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true)("canOpen", false);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.documents);
    }
  }, dependencies: [
    NgForOf,
    CardComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentComponent, [{
    type: Component,
    args: [{ selector: "app-document", imports: [
      NgForOf,
      CardComponent
    ], template: '<app-card\n  title="\u{1F5C2}\uFE0F Document"\n  [initiallyOpen]="true"\n  [canOpen]="false">\n\n  <div slot="body-content" class="flex">\n    <ul class="list-disc list-inside">\n      <li *ngFor="let document of documents" (click)="openDocument(document.url)"\n          class="hover:underline cursor-pointer text-neutral-900 dark:text-neutral-100">\n        {{ document.name }}\n      </li>\n    </ul>\n  </div>\n\n</app-card>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentComponent, { className: "DocumentComponent", filePath: "src/app/document/component/document/document.component.ts", lineNumber: 15 });
})();

// src/app/archive/component/archive/archive.component.ts
var ArchiveComponent = class _ArchiveComponent {
  titleService = inject(Title);
  constructor() {
    this.titleService.setTitle("WBR - Archive");
  }
  static \u0275fac = function ArchiveComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArchiveComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArchiveComponent, selectors: [["app-archive"]], decls: 10, vars: 0, consts: [[1, "p-4", "flex", "flex-row", "justify-between"], [1, "text-xl", "md:text-3xl", "dark:text-neutral-100", "text-neutral-900", "font-semibold"], [1, "mx-2", "grid", "grid-cols-1", "lg:grid-cols-2", "xl:grid-cols-3", "gap-2"], [1, "flex", "flex-col", "md:h-fit", "gap-2"]], template: function ArchiveComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "\u{1F5C2}\uFE0F WBR - Archive \u{1F417}");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-navigator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
      \u0275\u0275element(6, "app-interphone-pairing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275element(8, "app-document");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "div", 3);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [
    NavigatorComponent,
    InterphonePairingComponent,
    DocumentComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArchiveComponent, [{
    type: Component,
    args: [{ selector: "app-archive", imports: [
      NavigatorComponent,
      InterphonePairingComponent,
      DocumentComponent
    ], template: '<div class="p-4 flex flex-row justify-between">\n  <div class="text-xl md:text-3xl dark:text-neutral-100 text-neutral-900 font-semibold">\u{1F5C2}\uFE0F WBR - Archive \u{1F417}</div>\n  <app-navigator></app-navigator>\n</div>\n\n<div class="mx-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">\n  <div class="flex flex-col md:h-fit gap-2">\n    <app-interphone-pairing></app-interphone-pairing>\n  </div>\n\n  <div class="flex flex-col md:h-fit gap-2">\n    <app-document></app-document>\n  </div>\n\n  <div class="flex flex-col md:h-fit gap-2">\n  </div>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArchiveComponent, { className: "ArchiveComponent", filePath: "src/app/archive/component/archive/archive.component.ts", lineNumber: 19 });
})();
export {
  ArchiveComponent
};
//# sourceMappingURL=chunk-6RZ6UFGB.js.map
