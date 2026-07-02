import {
  CategorieService
} from "./chunk-EBUR75BJ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-K6A7TKN2.js";
import {
  AnnonceService
} from "./chunk-4SNZRIGC.js";
import "./chunk-F5BZ44D6.js";
import {
  MainLayoutComponent
} from "./chunk-ZPWQT25Y.js";
import "./chunk-JRO4LHXI.js";
import {
  ActivatedRoute,
  AuthService,
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  Subject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/features/annonces/pages/annonce-list/annonce-list.component.ts
var _c0 = (a0) => ["/annonces", a0];
function AnnonceListComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
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
function AnnonceListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275element(2, "div", 22);
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4, "Chargement des annonces...");
    \u0275\u0275elementEnd()()();
  }
}
function AnnonceListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 26);
    \u0275\u0275text(4, " Aucune annonce trouv\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 27);
    \u0275\u0275text(6, " Essayez de modifier vos crit\xE8res de recherche ");
    \u0275\u0275elementEnd()();
  }
}
function AnnonceListComponent_div_27_a_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const annonce_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", annonce_r2.image, \u0275\u0275sanitizeUrl)("alt", annonce_r2.titre);
  }
}
function AnnonceListComponent_div_27_a_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, "\u{1F4E6}");
    \u0275\u0275elementEnd();
  }
}
function AnnonceListComponent_div_27_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30)(1, "div", 31);
    \u0275\u0275template(2, AnnonceListComponent_div_27_a_1_img_2_Template, 1, 2, "img", 32)(3, AnnonceListComponent_div_27_a_1_div_3_Template, 2, 0, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 35)(6, "h3", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 38);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 39)(13, "div", 40)(14, "span");
    \u0275\u0275text(15, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 40)(19, "span");
    \u0275\u0275text(20, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 40)(24, "span");
    \u0275\u0275text(25, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 41);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const annonce_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, annonce_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", annonce_r2.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !annonce_r2.image);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", annonce_r2.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getEtatBadgeClass(annonce_r2.etat));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", annonce_r2.etat, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", annonce_r2.description, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(annonce_r2.categorie == null ? null : annonce_r2.categorie.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(annonce_r2.localisation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", annonce_r2.user == null ? null : annonce_r2.user.prenom, " ", annonce_r2.user == null ? null : annonce_r2.user.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Cr\xE9\xE9e le ", \u0275\u0275pipeBind2(30, 12, annonce_r2.dateCreation, "dd/MM/yyyy"), " ");
  }
}
function AnnonceListComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnnonceListComponent_div_27_a_1_Template, 31, 17, "a", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredAnnonces);
  }
}
var AnnonceListComponent = class _AnnonceListComponent {
  constructor(annonceService, categorieService) {
    this.annonceService = annonceService;
    this.categorieService = categorieService;
    this.annonces = [];
    this.filteredAnnonces = [];
    this.categories = [];
    this.searchQuery = "";
    this.selectedCategory = "";
    this.isLoading = true;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.loadCategories();
    this.loadAnnonces();
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
  loadAnnonces() {
    this.isLoading = true;
    this.annonceService.getAllAnnonces().pipe(takeUntil(this.destroy$)).subscribe({
      next: (annonces) => {
        this.annonces = annonces;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("[v0] Error loading annonces:", err);
        this.isLoading = false;
      }
    });
  }
  applyFilters() {
    let filtered = this.annonces;
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((a) => a.titre.toLowerCase().includes(query) || a.description.toLowerCase().includes(query));
    }
    if (this.selectedCategory) {
      filtered = filtered.filter((a) => a.categorie?.id === parseInt(this.selectedCategory));
    }
    this.filteredAnnonces = filtered;
  }
  onSearchChange() {
    this.applyFilters();
  }
  onCategoryChange() {
    this.applyFilters();
  }
  getEtatBadgeClass(etat) {
    const etatLower = etat.toLowerCase();
    switch (etatLower) {
      case "neuf":
        return "bg-primary-500/20 text-primary-400";
      case "bon":
        return "bg-secondary-500/20 text-secondary-400";
      case "moyen":
        return "bg-yellow-500/20 text-yellow-400";
      case "mauvais":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-text-secondary/20 text-text-secondary";
    }
  }
  static {
    this.\u0275fac = function AnnonceListComponent_Factory(t) {
      return new (t || _AnnonceListComponent)(\u0275\u0275directiveInject(AnnonceService), \u0275\u0275directiveInject(CategorieService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnonceListComponent, selectors: [["app-annonce-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 7, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-dark-950", "via-dark-900", "to-dark-800"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-12"], [1, "mb-12"], [1, "text-4xl", "md:text-5xl", "font-bold", "bg-gradient-to-r", "from-primary-500", "via-secondary-500", "to-primary-600", "bg-clip-text", "text-transparent", "mb-4"], [1, "text-text-secondary", "text-lg"], [1, "flex", "justify-between", "items-center", "mb-8"], [1, "text-sm", "text-text-secondary"], ["routerLink", "/annonces/create", 1, "px-6", "py-3", "rounded-lg", "bg-gradient-to-r", "from-primary-500", "to-primary-600", "text-white", "font-semibold", "hover:shadow-lg", "hover:shadow-primary-500/50", "transition-smooth"], [1, "glass", "rounded-2xl", "p-6", "mb-8"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["for", "search", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "search", "type", "text", "placeholder", "Rechercher une annonce...", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50", 3, "ngModelChange", "input", "ngModel"], ["for", "category", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "category", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "flex justify-center items-center py-20", 4, "ngIf"], ["class", "text-center py-20", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", 4, "ngIf"], [3, "value"], [1, "flex", "justify-center", "items-center", "py-20"], [1, "text-center"], [1, "inline-block", "w-12", "h-12", "border-4", "border-primary-500/20", "border-t-primary-500", "rounded-full", "animate-spin"], [1, "text-text-secondary", "mt-4"], [1, "text-center", "py-20"], [1, "text-5xl", "mb-4"], [1, "text-2xl", "font-semibold", "text-text-primary", "mb-2"], [1, "text-text-secondary"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "glass rounded-xl overflow-hidden hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20 transition-smooth group", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "glass", "rounded-xl", "overflow-hidden", "hover:border-primary-500/50", "hover:shadow-lg", "hover:shadow-primary-500/20", "transition-smooth", "group", 3, "routerLink"], [1, "w-full", "h-48", "bg-gradient-to-br", "from-primary-500/20", "to-secondary-500/20", "flex", "items-center", "justify-center", "overflow-hidden"], ["class", "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300", 3, "src", "alt", 4, "ngIf"], ["class", "text-5xl", 4, "ngIf"], [1, "p-6"], [1, "flex", "justify-between", "items-start", "gap-4", "mb-3"], [1, "text-xl", "font-semibold", "text-text-primary", "group-hover:text-primary-400", "transition-smooth", "flex-1"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-semibold", "whitespace-nowrap", 3, "ngClass"], [1, "text-text-secondary", "text-sm", "mb-4", "line-clamp-2"], [1, "space-y-2", "text-sm", "text-text-secondary", "mb-4"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "text-text-secondary/50", "border-t", "border-primary/10", "pt-3"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-110", "transition-transform", "duration-300", 3, "src", "alt"], [1, "text-5xl"]], template: function AnnonceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, " D\xE9couvrez les Annonces ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, " Parcourez nos articles disponibles et trouvez ce qu'il vous faut ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 7);
        \u0275\u0275text(11, " + Cr\xE9er une annonce ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "div")(15, "label", 10);
        \u0275\u0275text(16, " Rechercher ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AnnonceListComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function AnnonceListComponent_Template_input_input_17_listener() {
          return ctx.onSearchChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div")(19, "label", 12);
        \u0275\u0275text(20, " Cat\xE9gorie ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function AnnonceListComponent_Template_select_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AnnonceListComponent_Template_select_change_21_listener() {
          return ctx.onCategoryChange();
        });
        \u0275\u0275elementStart(22, "option", 14);
        \u0275\u0275text(23, "Toutes les cat\xE9gories");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, AnnonceListComponent_option_24_Template, 2, 2, "option", 15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(25, AnnonceListComponent_div_25_Template, 5, 0, "div", 16)(26, AnnonceListComponent_div_26_Template, 7, 0, "div", 17)(27, AnnonceListComponent_div_27_Template, 2, 1, "div", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", ctx.filteredAnnonces.length, " annonce(s) trouv\xE9e(s) ");
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredAnnonces.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredAnnonces.length > 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.line-clamp-2[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background-color: var(--bg-card);\n  color: var(--text-primary);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\ninput[_ngcontent-%COMP%]::placeholder, select[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  opacity: 0.5;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  background-color: var(--bg-card);\n  border-color: var(--primary);\n}\n/*# sourceMappingURL=annonce-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnonceListComponent, { className: "AnnonceListComponent", filePath: "src/app/features/annonces/pages/annonce-list/annonce-list.component.ts", lineNumber: 17 });
})();

// src/app/features/annonces/pages/annonce-detail/annonce-detail.component.ts
var _c02 = (a0) => ["/annonces", a0, "edit"];
function AnnonceDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "div", 8);
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function AnnonceDetailComponent_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.annonce.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.annonce.titre);
  }
}
function AnnonceDetailComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd()();
  }
}
function AnnonceDetailComponent_div_7_div_12_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function AnnonceDetailComponent_div_7_div_12_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.isDeleteConfirming = true);
    });
    \u0275\u0275text(1, " \u{1F5D1}\uFE0F Supprimer ");
    \u0275\u0275elementEnd();
  }
}
function AnnonceDetailComponent_div_7_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275listener("click", function AnnonceDetailComponent_div_7_div_12_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteAnnonce());
    });
    \u0275\u0275text(2, " Confirmer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 47);
    \u0275\u0275listener("click", function AnnonceDetailComponent_div_7_div_12_div_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.isDeleteConfirming = false);
    });
    \u0275\u0275text(4, " Annuler ");
    \u0275\u0275elementEnd()();
  }
}
function AnnonceDetailComponent_div_7_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "a", 41);
    \u0275\u0275text(2, " \u270F\uFE0F \xC9diter ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AnnonceDetailComponent_div_7_div_12_button_3_Template, 2, 0, "button", 42)(4, AnnonceDetailComponent_div_7_div_12_div_4_Template, 5, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c02, ctx_r0.annonce.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isDeleteConfirming);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isDeleteConfirming);
  }
}
function AnnonceDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275template(2, AnnonceDetailComponent_div_7_img_2_Template, 1, 2, "img", 12)(3, AnnonceDetailComponent_div_7_div_3_Template, 3, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "div", 16)(7, "h1", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "span", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, AnnonceDetailComponent_div_7_div_12_Template, 5, 5, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 22)(16, "div", 23)(17, "h3", 24);
    \u0275\u0275text(18, " \u{1F4C1} Cat\xE9gorie ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 25);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 23)(22, "h3", 24);
    \u0275\u0275text(23, " \u{1F4CD} Localisation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 26);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 23)(27, "h3", 24);
    \u0275\u0275text(28, " \u{1F4C5} Date de cr\xE9ation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 27);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23)(33, "h3", 24);
    \u0275\u0275text(34, " \u{1F464} Propri\xE9taire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 27);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 28);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 14)(40, "h3", 29);
    \u0275\u0275text(41, " Contacter le propri\xE9taire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 30)(43, "div", 31)(44, "span", 32);
    \u0275\u0275text(45, "\u{1F4E7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 16)(47, "p", 33);
    \u0275\u0275text(48, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "a", 34);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 35)(52, "span", 32);
    \u0275\u0275text(53, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 16)(55, "p", 33);
    \u0275\u0275text(56, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "a", 36);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.annonce.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.annonce.image);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.annonce.titre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getEtatBadgeClass(ctx_r0.annonce.etat));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.annonce.etat, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isOwner);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.annonce.description, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.annonce.categorie == null ? null : ctx_r0.annonce.categorie.nom, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.annonce.localisation, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 17, ctx_r0.annonce.dateCreation, "dd/MM/yyyy \xE0 HH:mm"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r0.annonce.user == null ? null : ctx_r0.annonce.user.prenom, " ", ctx_r0.annonce.user == null ? null : ctx_r0.annonce.user.nom, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F4E7} ", ctx_r0.annonce.user == null ? null : ctx_r0.annonce.user.email, " ");
    \u0275\u0275advance(11);
    \u0275\u0275property("href", "mailto:" + (ctx_r0.annonce.user == null ? null : ctx_r0.annonce.user.email), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.annonce.user == null ? null : ctx_r0.annonce.user.email, " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("href", "tel:" + (ctx_r0.annonce.user == null ? null : ctx_r0.annonce.user.telephone), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.annonce.user == null ? null : ctx_r0.annonce.user.telephone, " ");
  }
}
function AnnonceDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275text(2, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 50);
    \u0275\u0275text(4, " Annonce non trouv\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 51);
    \u0275\u0275text(6, " L'annonce que vous recherchez n'existe pas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 52);
    \u0275\u0275text(8, " Retour aux annonces ");
    \u0275\u0275elementEnd()();
  }
}
var AnnonceDetailComponent = class _AnnonceDetailComponent {
  constructor(route, annonceService, authService, router) {
    this.route = route;
    this.annonceService = annonceService;
    this.authService = authService;
    this.router = router;
    this.annonce = null;
    this.isLoading = true;
    this.isOwner = false;
    this.currentUser = null;
    this.isDeleteConfirming = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const id = params["id"];
      if (id) {
        this.loadAnnonce(parseInt(id));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadAnnonce(id) {
    this.isLoading = true;
    this.annonceService.getAnnonceById(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (annonce) => {
        this.annonce = annonce;
        this.isOwner = this.currentUser?.id === annonce.userId;
        this.isLoading = false;
      },
      error: (err) => {
        console.error("[v0] Error loading annonce:", err);
        this.isLoading = false;
        this.router.navigate(["/annonces"]);
      }
    });
  }
  deleteAnnonce() {
    if (!this.annonce)
      return;
    this.annonceService.deleteAnnonce(this.annonce.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.router.navigate(["/annonces"]);
      },
      error: (err) => {
        console.error("[v0] Error deleting annonce:", err);
      }
    });
  }
  getEtatBadgeClass(etat) {
    const etatLower = etat.toLowerCase();
    switch (etatLower) {
      case "neuf":
        return "bg-primary-500/20 text-primary-400";
      case "bon":
        return "bg-secondary-500/20 text-secondary-400";
      case "moyen":
        return "bg-yellow-500/20 text-yellow-400";
      case "mauvais":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-text-secondary/20 text-text-secondary";
    }
  }
  static {
    this.\u0275fac = function AnnonceDetailComponent_Factory(t) {
      return new (t || _AnnonceDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AnnonceService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnonceDetailComponent, selectors: [["app-annonce-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-dark-950", "via-dark-900", "to-dark-800"], [1, "max-w-4xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-12"], ["routerLink", "/annonces", 1, "inline-flex", "items-center", "gap-2", "text-primary-400", "hover:text-primary-300", "transition-smooth", "mb-8"], ["class", "flex justify-center items-center py-20", 4, "ngIf"], ["class", "space-y-8", 4, "ngIf"], ["class", "text-center py-20", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "py-20"], [1, "text-center"], [1, "inline-block", "w-12", "h-12", "border-4", "border-primary-500/20", "border-t-primary-500", "rounded-full", "animate-spin"], [1, "text-text-secondary", "mt-4"], [1, "space-y-8"], [1, "glass", "rounded-2xl", "overflow-hidden", "h-96"], ["class", "w-full h-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-secondary-500/20", 4, "ngIf"], [1, "glass", "rounded-2xl", "p-8"], [1, "flex", "justify-between", "items-start", "gap-6", "mb-6"], [1, "flex-1"], [1, "text-4xl", "font-bold", "text-text-primary", "mb-3"], [1, "flex", "items-center", "gap-3"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-semibold", 3, "ngClass"], ["class", "flex gap-3", 4, "ngIf"], [1, "text-text-secondary", "text-lg", "leading-relaxed"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "glass", "rounded-2xl", "p-6"], [1, "text-sm", "font-semibold", "text-text-secondary", "uppercase", "tracking-wide", "mb-4"], [1, "text-2xl", "font-bold", "text-primary-400"], [1, "text-2xl", "font-bold", "text-secondary-400"], [1, "text-lg", "font-semibold", "text-text-primary"], [1, "text-sm", "text-text-secondary", "mt-2"], [1, "text-2xl", "font-bold", "text-text-primary", "mb-6"], [1, "space-y-4"], [1, "flex", "items-center", "gap-4", "p-4", "rounded-lg", "bg-primary-500/10", "border", "border-primary-500/20"], [1, "text-3xl"], [1, "text-sm", "text-text-secondary"], [1, "text-primary-400", "hover:text-primary-300", "font-semibold", "transition-smooth", 3, "href"], [1, "flex", "items-center", "gap-4", "p-4", "rounded-lg", "bg-secondary-500/10", "border", "border-secondary-500/20"], [1, "text-secondary-400", "hover:text-secondary-300", "font-semibold", "transition-smooth", 3, "href"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-primary-500/20", "to-secondary-500/20"], [1, "text-8xl"], [1, "flex", "gap-3"], [1, "px-4", "py-2", "rounded-lg", "bg-secondary-500/20", "text-secondary-400", "hover:bg-secondary-500/30", "transition-smooth", "font-medium", 3, "routerLink"], ["class", "px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-smooth font-medium", 3, "click", 4, "ngIf"], ["class", "flex gap-2", 4, "ngIf"], [1, "px-4", "py-2", "rounded-lg", "bg-red-500/20", "text-red-400", "hover:bg-red-500/30", "transition-smooth", "font-medium", 3, "click"], [1, "flex", "gap-2"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-smooth", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-text-secondary/20", "text-text-secondary", "hover:bg-text-secondary/30", "transition-smooth", "font-medium", 3, "click"], [1, "text-center", "py-20"], [1, "text-5xl", "mb-4"], [1, "text-2xl", "font-semibold", "text-text-primary", "mb-2"], [1, "text-text-secondary", "mb-6"], ["routerLink", "/annonces", 1, "px-6", "py-3", "rounded-lg", "bg-primary-500", "text-white", "font-semibold", "hover:bg-primary-600", "transition-smooth"]], template: function AnnonceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span");
        \u0275\u0275text(4, "\u2190");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Retour aux annonces ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, AnnonceDetailComponent_div_6_Template, 5, 0, "div", 3)(7, AnnonceDetailComponent_div_7_Template, 59, 20, "div", 4)(8, AnnonceDetailComponent_div_8_Template, 9, 0, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.annonce);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.annonce);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, DatePipe, RouterLink], styles: ["\n\n.detail-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.image-container[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 1;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.action-button[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.action-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=annonce-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnonceDetailComponent, { className: "AnnonceDetailComponent", filePath: "src/app/features/annonces/pages/annonce-detail/annonce-detail.component.ts", lineNumber: 16 });
})();

// src/app/features/annonces/pages/annonce-create/annonce-create.component.ts
function AnnonceCreateComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function AnnonceCreateComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 39);
    \u0275\u0275text(2, "Le titre doit contenir au moins 3 caract\xE8res");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AnnonceCreateComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 39);
    \u0275\u0275text(2, "La description doit contenir au moins 10 caract\xE8res");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AnnonceCreateComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275property("value", cat_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2.nom, " ");
  }
}
function AnnonceCreateComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 39);
    \u0275\u0275text(2, "S\xE9lectionnez une cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AnnonceCreateComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 39);
    \u0275\u0275text(2, "S\xE9lectionnez un \xE9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AnnonceCreateComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 39);
    \u0275\u0275text(2, "La localisation doit contenir au moins 3 caract\xE8res");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AnnonceCreateComponent_img_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 41);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function AnnonceCreateComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "\u{1F4F7}");
    \u0275\u0275elementEnd();
  }
}
var AnnonceCreateComponent = class _AnnonceCreateComponent {
  constructor(fb, annonceService, categorieService, router) {
    this.fb = fb;
    this.annonceService = annonceService;
    this.categorieService = categorieService;
    this.router = router;
    this.form = this.fb.group({
      titre: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      categorie: ["", Validators.required],
      image: [""],
      etat: ["", Validators.required],
      localisation: ["", [Validators.required, Validators.minLength(3)]]
    });
    this.categories = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.imagePreview = null;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.loadCategories();
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
  onImageSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target.result;
        this.form.patchValue({
          image: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    this.isLoading = true;
    this.errorMessage = "";
    const formData = this.form.getRawValue();
    const payload = {
      titre: formData.titre || "",
      description: formData.description || "",
      categorie: { id: parseInt(formData.categorie || "0") },
      image: formData.image,
      etat: formData.etat || "",
      localisation: formData.localisation || ""
    };
    this.annonceService.createAnnonce(payload).pipe(takeUntil(this.destroy$)).subscribe({
      next: (annonce) => {
        this.router.navigate(["/annonces", annonce.id]);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || "Erreur lors de la cr\xE9ation. Veuillez r\xE9essayer.";
        console.error("[v0] Error creating annonce:", err);
      }
    });
  }
  static {
    this.\u0275fac = function AnnonceCreateComponent_Factory(t) {
      return new (t || _AnnonceCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AnnonceService), \u0275\u0275directiveInject(CategorieService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnonceCreateComponent, selectors: [["app-annonce-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 70, vars: 12, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-dark-950", "via-dark-900", "to-dark-800"], [1, "max-w-4xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-12"], ["routerLink", "/annonces", 1, "inline-flex", "items-center", "gap-2", "text-primary-400", "hover:text-primary-300", "transition-smooth", "mb-8"], [1, "glass", "rounded-2xl", "p-8", "md:p-12"], [1, "mb-8"], [1, "text-4xl", "font-bold", "text-text-primary", "mb-2"], [1, "text-text-secondary"], ["class", "mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400", 4, "ngIf"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], ["for", "titre", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "titre", "type", "text", "formControlName", "titre", "placeholder", "ex: V\xE9lo VTT 26 pouces", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], [4, "ngIf"], ["for", "description", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "description", "formControlName", "description", "placeholder", "D\xE9crivez votre article en d\xE9tail...", "rows", "5", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50", "resize-none"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["for", "categorie", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "categorie", "formControlName", "categorie", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "etat", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "etat", "formControlName", "etat", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary"], ["value", "Neuf"], ["value", "Bon"], ["value", "Moyen"], ["value", "Mauvais"], ["for", "localisation", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "localisation", "type", "text", "formControlName", "localisation", "placeholder", "ex: Paris, 75001", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], ["for", "image", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], [1, "flex", "gap-4", "items-start"], [1, "w-24", "h-24", "rounded-lg", "glass", "flex", "items-center", "justify-center", "overflow-hidden"], ["alt", "Preview", "class", "w-full h-full object-cover", 3, "src", 4, "ngIf"], ["class", "text-3xl", 4, "ngIf"], [1, "flex-1"], ["id", "image", "type", "file", "accept", "image/*", 1, "block", "w-full", "text-sm", "text-text-secondary", "cursor-pointer", "file:mr-4", "file:px-4", "file:py-2", "file:rounded-lg", "file:bg-primary-500/20", "file:text-primary-400", "file:border-0", "file:cursor-pointer", "hover:file:bg-primary-500/30", "transition-smooth", 3, "change"], [1, "text-xs", "text-text-secondary", "mt-2"], [1, "flex", "gap-4", "pt-6"], ["type", "submit", 1, "flex-1", "px-6", "py-3", "rounded-lg", "bg-gradient-to-r", "from-primary-500", "to-primary-600", "text-white", "font-semibold", "hover:shadow-lg", "hover:shadow-primary-500/50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-smooth", 3, "disabled"], ["routerLink", "/annonces", 1, "px-6", "py-3", "rounded-lg", "glass", "text-text-secondary", "hover:text-text-primary", "transition-smooth", "font-medium"], [1, "mb-6", "p-4", "rounded-lg", "bg-red-500/10", "border", "border-red-500/30", "text-red-400"], [1, "mt-1", "text-sm", "text-red-400"], [3, "value"], ["alt", "Preview", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "text-3xl"]], template: function AnnonceCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span");
        \u0275\u0275text(4, "\u2190");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Retour ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "h1", 5);
        \u0275\u0275text(9, " Cr\xE9er une nouvelle annonce ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 6);
        \u0275\u0275text(11, " Partagez vos articles avec la communaut\xE9 EcoShare ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, AnnonceCreateComponent_div_12_Template, 2, 1, "div", 7);
        \u0275\u0275elementStart(13, "form", 8);
        \u0275\u0275listener("ngSubmit", function AnnonceCreateComponent_Template_form_ngSubmit_13_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(14, "div")(15, "label", 9);
        \u0275\u0275text(16, " Titre * ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 10);
        \u0275\u0275template(18, AnnonceCreateComponent_ng_container_18_Template, 3, 0, "ng-container", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div")(20, "label", 12);
        \u0275\u0275text(21, " Description * ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "textarea", 13);
        \u0275\u0275text(23, "          ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, AnnonceCreateComponent_ng_container_24_Template, 3, 0, "ng-container", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 14)(26, "div")(27, "label", 15);
        \u0275\u0275text(28, " Cat\xE9gorie * ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "select", 16)(30, "option", 17);
        \u0275\u0275text(31, "S\xE9lectionnez une cat\xE9gorie");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, AnnonceCreateComponent_option_32_Template, 2, 2, "option", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, AnnonceCreateComponent_ng_container_33_Template, 3, 0, "ng-container", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div")(35, "label", 19);
        \u0275\u0275text(36, " \xC9tat * ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "select", 20)(38, "option", 17);
        \u0275\u0275text(39, "S\xE9lectionnez un \xE9tat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option", 21);
        \u0275\u0275text(41, "Neuf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "option", 22);
        \u0275\u0275text(43, "Bon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "option", 23);
        \u0275\u0275text(45, "Moyen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "option", 24);
        \u0275\u0275text(47, "Mauvais");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(48, AnnonceCreateComponent_ng_container_48_Template, 3, 0, "ng-container", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div")(50, "label", 25);
        \u0275\u0275text(51, " Localisation * ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "input", 26);
        \u0275\u0275template(53, AnnonceCreateComponent_ng_container_53_Template, 3, 0, "ng-container", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div")(55, "label", 27);
        \u0275\u0275text(56, " Photo de l'article (optionnel) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 28)(58, "div", 29);
        \u0275\u0275template(59, AnnonceCreateComponent_img_59_Template, 1, 1, "img", 30)(60, AnnonceCreateComponent_span_60_Template, 2, 0, "span", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 32)(62, "input", 33);
        \u0275\u0275listener("change", function AnnonceCreateComponent_Template_input_change_62_listener($event) {
          return ctx.onImageSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p", 34);
        \u0275\u0275text(64, "JPG, PNG ou GIF (max 5MB)");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(65, "div", 35)(66, "button", 36);
        \u0275\u0275text(67);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "a", 37);
        \u0275\u0275text(69, " Annuler ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("titre")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("titre")) == null ? null : tmp_2_0.touched));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.form.get("description")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("description")) == null ? null : tmp_3_0.touched));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.form.get("categorie")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("categorie")) == null ? null : tmp_5_0.touched));
        \u0275\u0275advance(15);
        \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.form.get("etat")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("etat")) == null ? null : tmp_6_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.form.get("localisation")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.form.get("localisation")) == null ? null : tmp_7_0.touched));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.imagePreview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.imagePreview);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Cr\xE9ation en cours..." : "\u2713 Cr\xE9er l'annonce", " ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.form-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.image-preview[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 1;\n  border: 2px dashed var(--primary);\n}\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: var(--bg-card);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: var(--text-primary);\n  transition: all 0.3s ease;\n}\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n/*# sourceMappingURL=annonce-create.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnonceCreateComponent, { className: "AnnonceCreateComponent", filePath: "src/app/features/annonces/pages/annonce-create/annonce-create.component.ts", lineNumber: 17 });
})();

// src/app/features/annonces/annonces.routes.ts
var ANNONCES_ROUTES = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: AnnonceListComponent
      },
      {
        path: "create",
        component: AnnonceCreateComponent
      },
      {
        path: ":id",
        component: AnnonceDetailComponent
      }
    ]
  }
];
export {
  ANNONCES_ROUTES
};
//# sourceMappingURL=chunk-KU4HHYPC.js.map
