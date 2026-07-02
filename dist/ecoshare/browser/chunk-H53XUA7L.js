import {
  CategorieService
} from "./chunk-EBUR75BJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-K6A7TKN2.js";
import {
  DemandeService
} from "./chunk-JGM6EBOU.js";
import "./chunk-F5BZ44D6.js";
import {
  MainLayoutComponent
} from "./chunk-ZPWQT25Y.js";
import "./chunk-JRO4LHXI.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  Subject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H4L2EFRC.js";

// src/app/features/demandes/pages/demande-list/demande-list.component.ts
function DemandeListComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r1.nom, " ");
  }
}
function DemandeListComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "div", 21);
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4, "Chargement des demandes...");
    \u0275\u0275elementEnd()()();
  }
}
function DemandeListComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 25);
    \u0275\u0275text(4, " Aucune demande trouv\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 26);
    \u0275\u0275text(6, " Essayez de modifier vos crit\xE8res de recherche ");
    \u0275\u0275elementEnd()();
  }
}
function DemandeListComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "h3", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34)(9, "div", 35)(10, "span");
    \u0275\u0275text(11, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 35)(15, "span");
    \u0275\u0275text(16, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 35)(20, "span");
    \u0275\u0275text(21, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 36);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 37);
    \u0275\u0275text(28, " Contacter ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const demande_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", demande_r2.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatutBadgeClass(demande_r2.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", demande_r2.statut, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", demande_r2.description, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(demande_r2.categorie == null ? null : demande_r2.categorie.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(demande_r2.localisation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", demande_r2.user == null ? null : demande_r2.user.prenom, " ", demande_r2.user == null ? null : demande_r2.user.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Cr\xE9\xE9e le ", \u0275\u0275pipeBind2(26, 10, demande_r2.dateCreation, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + (demande_r2.user == null ? null : demande_r2.user.email), \u0275\u0275sanitizeUrl);
  }
}
function DemandeListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, DemandeListComponent_div_25_div_1_Template, 29, 13, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredDemandes);
  }
}
var DemandeListComponent = class _DemandeListComponent {
  constructor(demandeService, categorieService) {
    this.demandeService = demandeService;
    this.categorieService = categorieService;
    this.demandes = [];
    this.filteredDemandes = [];
    this.categories = [];
    this.searchQuery = "";
    this.selectedCategory = "";
    this.isLoading = true;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.loadCategories();
    this.loadDemandes();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCategories() {
    this.categorieService.categories$.pipe(takeUntil(this.destroy$)).subscribe((categories) => {
      this.categories = categories;
    });
  }
  loadDemandes() {
    this.isLoading = true;
    this.demandeService.getAllDemandes().pipe(takeUntil(this.destroy$)).subscribe({
      next: (demandes) => {
        this.demandes = demandes;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("[v0] Error loading demandes:", err);
        this.isLoading = false;
      }
    });
  }
  applyFilters() {
    let filtered = this.demandes;
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((d) => d.titre.toLowerCase().includes(query) || d.description.toLowerCase().includes(query));
    }
    if (this.selectedCategory) {
      filtered = filtered.filter((d) => d.categorie?.id === parseInt(this.selectedCategory));
    }
    this.filteredDemandes = filtered;
  }
  onSearchChange() {
    this.applyFilters();
  }
  onCategoryChange() {
    this.applyFilters();
  }
  getStatutBadgeClass(statut) {
    const statutLower = statut.toLowerCase();
    switch (statutLower) {
      case "actif":
      case "active":
        return "bg-primary-500/20 text-primary-400";
      case "ferm\xE9":
      case "closed":
        return "bg-red-500/20 text-red-400";
      case "en attente":
      case "pending":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-text-secondary/20 text-text-secondary";
    }
  }
  static {
    this.\u0275fac = function DemandeListComponent_Factory(t) {
      return new (t || _DemandeListComponent)(\u0275\u0275directiveInject(DemandeService), \u0275\u0275directiveInject(CategorieService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemandeListComponent, selectors: [["app-demande-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 7, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-dark-950", "via-dark-900", "to-dark-800"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-12"], [1, "mb-12"], [1, "text-4xl", "md:text-5xl", "font-bold", "bg-gradient-to-r", "from-secondary-500", "via-primary-500", "to-secondary-600", "bg-clip-text", "text-transparent", "mb-4"], [1, "text-text-secondary", "text-lg"], [1, "flex", "justify-between", "items-center", "mb-8"], [1, "text-sm", "text-text-secondary"], [1, "glass", "rounded-2xl", "p-6", "mb-8"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["for", "search", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "search", "type", "text", "placeholder", "Rechercher une demande...", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-secondary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50", 3, "ngModelChange", "input", "ngModel"], ["for", "category", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "category", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-secondary-500", "transition-smooth", "text-text-primary", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "flex justify-center items-center py-20", 4, "ngIf"], ["class", "text-center py-20", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", 4, "ngIf"], [3, "value"], [1, "flex", "justify-center", "items-center", "py-20"], [1, "text-center"], [1, "inline-block", "w-12", "h-12", "border-4", "border-secondary-500/20", "border-t-secondary-500", "rounded-full", "animate-spin"], [1, "text-text-secondary", "mt-4"], [1, "text-center", "py-20"], [1, "text-5xl", "mb-4"], [1, "text-2xl", "font-semibold", "text-text-primary", "mb-2"], [1, "text-text-secondary"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "glass rounded-xl overflow-hidden hover:border-secondary-500/50 hover:shadow-lg hover:shadow-secondary-500/20 transition-smooth group p-6", 4, "ngFor", "ngForOf"], [1, "glass", "rounded-xl", "overflow-hidden", "hover:border-secondary-500/50", "hover:shadow-lg", "hover:shadow-secondary-500/20", "transition-smooth", "group", "p-6"], [1, "flex", "justify-between", "items-start", "gap-4", "mb-3"], [1, "text-xl", "font-semibold", "text-text-primary", "group-hover:text-secondary-400", "transition-smooth", "flex-1"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-semibold", "whitespace-nowrap", 3, "ngClass"], [1, "text-text-secondary", "text-sm", "mb-4", "line-clamp-2"], [1, "space-y-2", "text-sm", "text-text-secondary", "mb-4"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "text-text-secondary/50", "border-t", "border-secondary/10", "pt-3"], [1, "mt-4", "w-full", "px-4", "py-2", "rounded-lg", "bg-secondary-500/20", "text-secondary-400", "hover:bg-secondary-500/30", "transition-smooth", "text-sm", "font-semibold", "text-center", 3, "href"]], template: function DemandeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, " Les Demandes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, " D\xE9couvrez ce que les autres recherchent et proposez votre aide ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div")(13, "label", 9);
        \u0275\u0275text(14, " Rechercher ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function DemandeListComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function DemandeListComponent_Template_input_input_15_listener() {
          return ctx.onSearchChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div")(17, "label", 11);
        \u0275\u0275text(18, " Cat\xE9gorie ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function DemandeListComponent_Template_select_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        \u0275\u0275listener("change", function DemandeListComponent_Template_select_change_19_listener() {
          return ctx.onCategoryChange();
        });
        \u0275\u0275elementStart(20, "option", 13);
        \u0275\u0275text(21, "Toutes les cat\xE9gories");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, DemandeListComponent_option_22_Template, 2, 2, "option", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(23, DemandeListComponent_div_23_Template, 5, 0, "div", 15)(24, DemandeListComponent_div_24_Template, 7, 0, "div", 16)(25, DemandeListComponent_div_25_Template, 2, 1, "div", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", ctx.filteredDemandes.length, " demande(s) trouv\xE9e(s) ");
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredDemandes.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredDemandes.length > 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.demande-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 1.5rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.demande-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: var(--primary);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);\n}\n.category-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--primary);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--primary);\n}\n.status-badge.closed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.contact-button[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.contact-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: var(--bg-card);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: var(--text-primary);\n}\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n/*# sourceMappingURL=demande-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemandeListComponent, { className: "DemandeListComponent", filePath: "src/app/features/demandes/pages/demande-list/demande-list.component.ts", lineNumber: 17 });
})();

// src/app/features/demandes/demandes.routes.ts
var DEMANDES_ROUTES = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: DemandeListComponent
      }
    ]
  }
];
export {
  DEMANDES_ROUTES
};
//# sourceMappingURL=chunk-H53XUA7L.js.map
