import {
  ThemeService
} from "./chunk-JRO4LHXI.js";
import {
  AuthService,
  CommonModule,
  NgIf,
  Router,
  RouterLink,
  RouterOutlet,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H4L2EFRC.js";

// src/app/shared/components/navbar/navbar.component.ts
function NavbarComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 16);
    \u0275\u0275text(2, " Connexion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 17);
    \u0275\u0275text(4, " S'inscrire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function NavbarComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function NavbarComponent_ng_container_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(5, " D\xE9connexion ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.prenom);
  }
}
function NavbarComponent_div_25_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 26);
    \u0275\u0275listener("click", function NavbarComponent_div_25_ng_container_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(2, " Connexion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 27);
    \u0275\u0275listener("click", function NavbarComponent_div_25_ng_container_8_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(4, " S'inscrire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function NavbarComponent_div_25_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function NavbarComponent_div_25_ng_container_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(4, " D\xE9connexion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Connect\xE9: ", ctx_r1.currentUser.prenom, " ");
  }
}
function NavbarComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "a", 22);
    \u0275\u0275listener("click", function NavbarComponent_div_25_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(2, " Annonces ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 23);
    \u0275\u0275listener("click", function NavbarComponent_div_25_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(4, " Demandes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 24);
    \u0275\u0275listener("click", function NavbarComponent_div_25_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(6, " \xC0 propos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275template(8, NavbarComponent_div_25_ng_container_8_Template, 5, 0, "ng-container", 13)(9, NavbarComponent_div_25_ng_container_9_Template, 5, 1, "ng-container", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.isAuthenticated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAuthenticated && ctx_r1.currentUser);
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor(authService, themeService, router) {
    this.authService = authService;
    this.themeService = themeService;
    this.router = router;
    this.isAuthenticated = false;
    this.currentUser = null;
    this.currentTheme = "dark";
    this.mobileMenuOpen = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.authService.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe((isAuth) => this.isAuthenticated = isAuth);
    this.authService.currentUser$.pipe(takeUntil(this.destroy$)).subscribe((user) => this.currentUser = user);
    this.themeService.theme$.pipe(takeUntil(this.destroy$)).subscribe((theme) => this.currentTheme = theme);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
    this.mobileMenuOpen = false;
  }
  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 5, consts: [[1, "glass", "sticky", "top-0", "z-50", "border-b", "border-primary/20"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "justify-between", "items-center", "h-16"], [1, "flex", "items-center", "gap-2"], ["routerLink", "/", 1, "flex", "items-center", "gap-2", "text-2xl", "font-bold", "bg-gradient-to-r", "from-primary-500", "to-secondary-500", "bg-clip-text", "text-transparent", "hover:opacity-80", "transition-smooth"], [1, "text-xl"], [1, "hidden", "md:flex", "items-center", "gap-8"], ["routerLink", "/annonces", 1, "text-text-secondary", "hover:text-primary-500", "transition-smooth", "font-medium"], ["routerLink", "/demandes", 1, "text-text-secondary", "hover:text-primary-500", "transition-smooth", "font-medium"], ["routerLink", "/about", 1, "text-text-secondary", "hover:text-primary-500", "transition-smooth", "font-medium"], [1, "flex", "items-center", "gap-4"], ["title", "Toggle theme", 1, "p-2", "rounded-lg", "glass", "hover:bg-primary/10", "transition-smooth", 3, "click"], [1, "hidden", "md:flex", "items-center", "gap-3"], [4, "ngIf"], [1, "md:hidden", "p-2", "rounded-lg", "glass", "hover:bg-primary/10", "transition-smooth", 3, "click"], ["class", "md:hidden pb-4 space-y-3 border-t border-primary/20 pt-4", 4, "ngIf"], ["routerLink", "/auth/login", 1, "px-4", "py-2", "text-text-primary", "hover:text-primary-500", "transition-smooth", "font-medium"], ["routerLink", "/auth/register", 1, "px-4", "py-2", "rounded-lg", "bg-gradient-to-r", "from-primary-500", "to-primary-600", "text-white", "hover:shadow-lg", "hover:shadow-primary-500/50", "transition-smooth", "font-medium"], [1, "flex", "items-center", "gap-3", "pl-3", "border-l", "border-primary/20"], [1, "text-sm", "text-text-secondary"], [1, "px-4", "py-2", "rounded-lg", "bg-red-500/20", "text-red-400", "hover:bg-red-500/30", "transition-smooth", "font-medium", 3, "click"], [1, "md:hidden", "pb-4", "space-y-3", "border-t", "border-primary/20", "pt-4"], ["routerLink", "/annonces", 1, "block", "px-4", "py-2", "text-text-secondary", "hover:text-primary-500", "transition-smooth", "font-medium", 3, "click"], ["routerLink", "/demandes", 1, "block", "px-4", "py-2", "text-text-secondary", "hover:text-primary-500", "transition-smooth", "font-medium", 3, "click"], ["routerLink", "/about", 1, "block", "px-4", "py-2", "text-text-secondary", "hover:text-primary-500", "transition-smooth", "font-medium", 3, "click"], [1, "pt-3", "border-t", "border-primary/20", "space-y-2"], ["routerLink", "/auth/login", 1, "block", "px-4", "py-2", "text-text-primary", "hover:text-primary-500", "transition-smooth", "font-medium", 3, "click"], ["routerLink", "/auth/register", 1, "block", "px-4", "py-2", "rounded-lg", "bg-gradient-to-r", "from-primary-500", "to-primary-600", "text-white", "text-center", "font-medium", 3, "click"], [1, "px-4", "py-2", "text-sm", "text-text-secondary"], [1, "w-full", "px-4", "py-2", "rounded-lg", "bg-red-500/20", "text-red-400", "hover:bg-red-500/30", "transition-smooth", "font-medium", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
        \u0275\u0275text(6, "\u{1F331}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " EcoShare ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
        \u0275\u0275text(10, " Annonces ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 8);
        \u0275\u0275text(12, " Demandes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 9);
        \u0275\u0275text(14, " \xC0 propos ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_16_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275elementStart(17, "span", 5);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 12);
        \u0275\u0275template(20, NavbarComponent_ng_container_20_Template, 5, 0, "ng-container", 13)(21, NavbarComponent_ng_container_21_Template, 6, 1, "ng-container", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 14);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_22_listener() {
          return ctx.toggleMobileMenu();
        });
        \u0275\u0275elementStart(23, "span", 5);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(25, NavbarComponent_div_25_Template, 10, 2, "div", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(ctx.currentTheme === "dark" ? "\u2600\uFE0F" : "\u{1F319}");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isAuthenticated);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isAuthenticated && ctx.currentUser);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.mobileMenuOpen ? "\u2715" : "\u2630");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mobileMenuOpen);
      }
    }, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\nnav[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/components/navbar/navbar.component.ts", lineNumber: 16 });
})();

// src/app/shared/layouts/main-layout/main-layout.component.ts
var MainLayoutComponent = class _MainLayoutComponent {
  static {
    this.\u0275fac = function MainLayoutComponent_Factory(t) {
      return new (t || _MainLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "min-h-[calc(100vh-4rem)]"]], template: function MainLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [CommonModule, RouterOutlet, NavbarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-dark) 0%,\n      var(--bg-dark) 100%);\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=main-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/shared/layouts/main-layout/main-layout.component.ts", lineNumber: 13 });
})();

export {
  MainLayoutComponent
};
//# sourceMappingURL=chunk-ZPWQT25Y.js.map
