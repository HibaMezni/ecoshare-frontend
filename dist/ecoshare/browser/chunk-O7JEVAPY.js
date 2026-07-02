import {
  AnnonceService
} from "./chunk-4SNZRIGC.js";
import {
  DemandeService
} from "./chunk-JGM6EBOU.js";
import "./chunk-F5BZ44D6.js";
import {
  MainLayoutComponent
} from "./chunk-ZPWQT25Y.js";
import "./chunk-JRO4LHXI.js";
import {
  AuthService,
  CommonModule,
  NgForOf,
  NgIf,
  RouterLink,
  Subject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-H4L2EFRC.js";

// src/app/features/profile/pages/profile/profile.component.ts
var _c0 = (a0) => ["/annonces", a0];
function ProfileComponent_ng_container_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Vous n'avez pas encore cr\xE9\xE9 d'annonces ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_2_div_35_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24)(1, "h3", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const annonce_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, annonce_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", annonce_r1.titre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", annonce_r1.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", annonce_r1.etat, " ");
  }
}
function ProfileComponent_ng_container_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, ProfileComponent_ng_container_2_div_35_a_1_Template, 7, 6, "a", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.userAnnonces);
  }
}
function ProfileComponent_ng_container_2_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Vous n'avez pas encore cr\xE9\xE9 de demandes ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_2_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h3", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const demande_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", demande_r3.titre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", demande_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", demande_r3.statut, " ");
  }
}
function ProfileComponent_ng_container_2_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, ProfileComponent_ng_container_2_div_41_div_1_Template, 7, 3, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.userDemandes);
  }
}
function ProfileComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275text(4, " \u{1F464} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "h1", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 8);
    \u0275\u0275text(9, " Membre actif de la communaut\xE9 EcoShare ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "h3", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 13);
    \u0275\u0275text(22, "Annonces cr\xE9\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 11)(24, "h3", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 13);
    \u0275\u0275text(27, "Demandes cr\xE9\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 15)(29, "div", 16)(30, "h2", 17);
    \u0275\u0275text(31, "Mes annonces");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "a", 18);
    \u0275\u0275text(33, " + Nouvelle ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ProfileComponent_ng_container_2_div_34_Template, 2, 0, "div", 19)(35, ProfileComponent_ng_container_2_div_35_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "div", 16)(38, "h2", 17);
    \u0275\u0275text(39, "Mes demandes");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, ProfileComponent_ng_container_2_div_40_Template, 2, 0, "div", 19)(41, ProfileComponent_ng_container_2_div_41_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r1.currentUser.prenom, " ", ctx_r1.currentUser.nom, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u{1F4E7} ", ctx_r1.currentUser.email, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4F1} ", ctx_r1.currentUser.telephone, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("\u{1F4CD} ", ctx_r1.currentUser.adresse, ", ", ctx_r1.currentUser.codepostal, " ", ctx_r1.currentUser.ville, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.userAnnonces.length, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.userDemandes.length, " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.userAnnonces.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userAnnonces.length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.userDemandes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userDemandes.length > 0);
  }
}
var ProfileComponent = class _ProfileComponent {
  constructor(authService, annonceService, demandeService) {
    this.authService = authService;
    this.annonceService = annonceService;
    this.demandeService = demandeService;
    this.currentUser = null;
    this.userAnnonces = [];
    this.userDemandes = [];
    this.isLoading = true;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.loadUserContent();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadUserContent() {
    if (!this.currentUser)
      return;
    this.annonceService.getAnnoncesByUser(this.currentUser.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (annonces) => {
        this.userAnnonces = annonces;
      },
      error: (err) => console.error("[v0] Error loading user annonces:", err)
    });
    this.demandeService.getDemandesByUser(this.currentUser.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (demandes) => {
        this.userDemandes = demandes;
        this.isLoading = false;
      },
      error: (err) => console.error("[v0] Error loading user demandes:", err)
    });
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(t) {
      return new (t || _ProfileComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AnnonceService), \u0275\u0275directiveInject(DemandeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-dark-950", "via-dark-900", "to-dark-800"], [1, "max-w-4xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-12"], [4, "ngIf"], [1, "glass", "rounded-2xl", "p-8", "mb-8"], [1, "flex", "items-center", "gap-6"], [1, "w-24", "h-24", "rounded-full", "bg-gradient-to-br", "from-primary-500", "to-secondary-500", "flex", "items-center", "justify-center", "text-4xl"], [1, "flex-1"], [1, "text-4xl", "font-bold", "text-text-primary", "mb-2"], [1, "text-text-secondary", "mb-4"], [1, "space-y-2", "text-sm", "text-text-secondary"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "mb-8"], [1, "glass", "rounded-2xl", "p-6", "text-center"], [1, "text-5xl", "font-bold", "text-primary-400", "mb-2"], [1, "text-text-secondary"], [1, "text-5xl", "font-bold", "text-secondary-400", "mb-2"], [1, "mb-8"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-3xl", "font-bold", "text-text-primary"], ["routerLink", "/annonces/create", 1, "px-4", "py-2", "rounded-lg", "bg-primary-500", "text-white", "font-semibold", "hover:bg-primary-600", "transition-smooth"], ["class", "glass rounded-2xl p-8 text-center text-text-secondary", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 gap-6", 4, "ngIf"], [1, "glass", "rounded-2xl", "p-8", "text-center", "text-text-secondary"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["class", "glass rounded-xl p-6 hover:border-primary-500/50 transition-smooth group", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "glass", "rounded-xl", "p-6", "hover:border-primary-500/50", "transition-smooth", "group", 3, "routerLink"], [1, "text-lg", "font-semibold", "text-text-primary", "group-hover:text-primary-400", "transition-smooth", "mb-2"], [1, "text-text-secondary", "text-sm", "mb-4", "line-clamp-2"], [1, "px-3", "py-1", "rounded-full", "bg-primary-500/20", "text-primary-400", "text-xs", "font-semibold"], ["class", "glass rounded-xl p-6 hover:border-secondary-500/50 transition-smooth group", 4, "ngFor", "ngForOf"], [1, "glass", "rounded-xl", "p-6", "hover:border-secondary-500/50", "transition-smooth", "group"], [1, "text-lg", "font-semibold", "text-text-primary", "group-hover:text-secondary-400", "transition-smooth", "mb-2"], [1, "px-3", "py-1", "rounded-full", "bg-secondary-500/20", "text-secondary-400", "text-xs", "font-semibold"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ProfileComponent_ng_container_2_Template, 42, 13, "ng-container", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.currentUser);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ["\n\n.profile-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  padding: 2rem;\n  border-radius: 12px;\n  color: white;\n  margin-bottom: 2rem;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 1.5rem;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n  color: var(--primary);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin-top: 0.5rem;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.content-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.content-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);\n}\n.edit-button[_ngcontent-%COMP%], .delete-button[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.edit-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.delete-button[_ngcontent-%COMP%]:hover {\n  background-color: #ef4444;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/pages/profile/profile.component.ts", lineNumber: 17 });
})();

// src/app/features/profile/profile.routes.ts
var PROFILE_ROUTES = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: ProfileComponent
      }
    ]
  }
];
export {
  PROFILE_ROUTES
};
//# sourceMappingURL=chunk-O7JEVAPY.js.map
