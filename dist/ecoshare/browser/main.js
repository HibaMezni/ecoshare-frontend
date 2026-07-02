import {
  ThemeService
} from "./chunk-JRO4LHXI.js";
import {
  AuthService,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵinject
} from "./chunk-H4L2EFRC.js";

// src/app/core/guards/auth.guard.ts
var AuthGuardService = class _AuthGuardService {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
  static {
    this.\u0275fac = function AuthGuardService_Factory(t) {
      return new (t || _AuthGuardService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuardService, factory: _AuthGuardService.\u0275fac, providedIn: "root" });
  }
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/annonces",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () => import("./chunk-VIEAFKO7.js").then((m) => m.AUTH_ROUTES)
  },
  {
    path: "annonces",
    loadChildren: () => import("./chunk-KU4HHYPC.js").then((m) => m.ANNONCES_ROUTES),
    canActivate: [AuthGuardService]
  },
  {
    path: "demandes",
    loadChildren: () => import("./chunk-H53XUA7L.js").then((m) => m.DEMANDES_ROUTES),
    canActivate: [AuthGuardService]
  },
  {
    path: "profile",
    loadChildren: () => import("./chunk-O7JEVAPY.js").then((m) => m.PROFILE_ROUTES),
    canActivate: [AuthGuardService]
  },
  {
    path: "about",
    loadChildren: () => import("./chunk-Y6VBFMWP.js").then((m) => m.ABOUT_ROUTES)
  },
  {
    path: "**",
    redirectTo: "/annonces"
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor(themeService) {
    this.themeService = themeService;
    this.title = "ecoshare";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
