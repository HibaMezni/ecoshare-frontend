import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-K6A7TKN2.js";
import {
  AuthService,
  CommonModule,
  NgIf,
  Router,
  RouterLink,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-H4L2EFRC.js";

// src/app/features/auth/pages/login/login.component.ts
function LoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 24);
    \u0275\u0275text(2, "Email invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function LoginComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 24);
    \u0275\u0275text(2, "Le mot de passe doit contenir au moins 6 caract\xE8res");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.isLoading = false;
    this.errorMessage = "";
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    this.isLoading = true;
    this.errorMessage = "";
    const credentials = {
      email: this.form.get("email")?.value || "",
      password: this.form.get("password")?.value || ""
    };
    this.authService.login(credentials).subscribe({
      next: () => {
        this.router.navigate(["/annonces"]);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || "Erreur de connexion. Veuillez r\xE9essayer.";
        console.error("[v0] Login error:", err);
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 6, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "px-4", "py-12", "bg-gradient-to-br", "from-dark-950", "via-dark-900", "to-dark-800"], [1, "w-full", "max-w-md"], [1, "glass", "p-8", "rounded-2xl"], [1, "text-center", "mb-8"], [1, "text-5xl", "mb-4"], [1, "text-3xl", "font-bold", "bg-gradient-to-r", "from-primary-500", "to-secondary-500", "bg-clip-text", "text-transparent"], [1, "text-text-secondary", "mt-2"], ["class", "mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm", 4, "ngIf"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "votre.email@example.com", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], [4, "ngIf"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], ["type", "submit", 1, "w-full", "px-4", "py-3", "rounded-lg", "bg-gradient-to-r", "from-primary-500", "to-primary-600", "text-white", "font-semibold", "hover:shadow-lg", "hover:shadow-primary-500/50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-smooth", 3, "disabled"], [1, "relative", "my-6"], [1, "absolute", "inset-0", "flex", "items-center"], [1, "w-full", "border-t", "border-primary/20"], [1, "relative", "flex", "justify-center", "text-sm"], [1, "px-2", "bg-dark-900", "text-text-secondary"], [1, "text-center", "text-text-secondary"], ["routerLink", "/auth/register", 1, "text-primary-500", "hover:text-primary-400", "font-semibold", "transition-smooth"], [1, "text-center", "text-text-secondary", "text-sm", "mt-6"], [1, "mb-6", "p-4", "rounded-lg", "bg-red-500/10", "border", "border-red-500/30", "text-red-400", "text-sm"], [1, "mt-1", "text-sm", "text-red-400"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5, "\u{1F331}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 5);
        \u0275\u0275text(7, " EcoShare ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, "Connectez-vous \xE0 votre compte");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, LoginComponent_div_10_Template, 2, 1, "div", 7);
        \u0275\u0275elementStart(11, "form", 8);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(12, "div")(13, "label", 9);
        \u0275\u0275text(14, " Email ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 10);
        \u0275\u0275template(16, LoginComponent_ng_container_16_Template, 3, 0, "ng-container", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div")(18, "label", 12);
        \u0275\u0275text(19, " Mot de passe ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 13);
        \u0275\u0275template(21, LoginComponent_ng_container_21_Template, 3, 0, "ng-container", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 14);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 15)(25, "div", 16);
        \u0275\u0275element(26, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 18)(28, "span", 19);
        \u0275\u0275text(29, "Ou");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "p", 20);
        \u0275\u0275text(31, " Pas encore inscrit? ");
        \u0275\u0275elementStart(32, "a", 21);
        \u0275\u0275text(33, " S'inscrire ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "p", 22);
        \u0275\u0275text(35, " En vous connectant, vous acceptez nos conditions d'utilisation ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Connexion en cours..." : "Se connecter", " ");
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\ninput[_ngcontent-%COMP%] {\n  background-color: var(--bg-card);\n  color: var(--text-primary);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-secondary);\n  opacity: 0.5;\n}\ninput[_ngcontent-%COMP%]:focus {\n  background-color: var(--bg-card);\n  border-color: var(--primary);\n}\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/pages/login/login.component.ts", lineNumber: 14 });
})();

// src/app/features/auth/pages/register/register.component.ts
function RegisterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function RegisterComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 37);
    \u0275\u0275text(2, "Nom invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RegisterComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 37);
    \u0275\u0275text(2, "Pr\xE9nom invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RegisterComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 37);
    \u0275\u0275text(2, "Email invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RegisterComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 37);
    \u0275\u0275text(2, "Le mot de passe doit contenir au moins 6 caract\xE8res");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RegisterComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 37);
    \u0275\u0275text(2, "T\xE9l\xE9phone invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RegisterComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 37);
    \u0275\u0275text(2, "Code postal invalide (5 chiffres)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RegisterComponent_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 37);
    \u0275\u0275text(2, "Adresse requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RegisterComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 37);
    \u0275\u0275text(2, "Ville requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.form = this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(2)]],
      prenom: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      telephone: ["", [Validators.required, Validators.pattern(/^[0-9\s\-\+\(\)]+$/)]],
      adresse: ["", [Validators.required]],
      codepostal: ["", [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      ville: ["", [Validators.required]]
    });
    this.isLoading = false;
    this.errorMessage = "";
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    this.isLoading = true;
    this.errorMessage = "";
    const formData = this.form.getRawValue();
    this.authService.register(formData).subscribe({
      next: () => {
        this.router.navigate(["/annonces"]);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || "Erreur lors de l'inscription. Veuillez r\xE9essayer.";
        console.error("[v0] Register error:", err);
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 69, vars: 12, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "px-4", "py-12", "bg-gradient-to-br", "from-dark-950", "via-dark-900", "to-dark-800"], [1, "w-full", "max-w-2xl"], [1, "glass", "p-8", "rounded-2xl"], [1, "text-center", "mb-8"], [1, "text-5xl", "mb-4"], [1, "text-3xl", "font-bold", "bg-gradient-to-r", "from-primary-500", "to-secondary-500", "bg-clip-text", "text-transparent"], [1, "text-text-secondary", "mt-2"], ["class", "mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm", 4, "ngIf"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-5"], ["for", "nom", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "nom", "type", "text", "formControlName", "nom", "placeholder", "Votre nom", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], [4, "ngIf"], ["for", "prenom", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "prenom", "type", "text", "formControlName", "prenom", "placeholder", "Votre pr\xE9nom", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "votre.email@example.com", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], ["for", "telephone", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "telephone", "type", "tel", "formControlName", "telephone", "placeholder", "+33 612345678", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], ["for", "codepostal", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "codepostal", "type", "text", "formControlName", "codepostal", "placeholder", "75001", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], ["for", "adresse", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "adresse", "type", "text", "formControlName", "adresse", "placeholder", "123 Rue de la Paix", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], ["for", "ville", 1, "block", "text-sm", "font-medium", "text-text-primary", "mb-2"], ["id", "ville", "type", "text", "formControlName", "ville", "placeholder", "Paris", 1, "w-full", "px-4", "py-3", "rounded-lg", "glass", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "transition-smooth", "text-text-primary", "placeholder:text-text-secondary/50"], ["type", "submit", 1, "w-full", "px-4", "py-3", "rounded-lg", "bg-gradient-to-r", "from-primary-500", "to-primary-600", "text-white", "font-semibold", "hover:shadow-lg", "hover:shadow-primary-500/50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-smooth", 3, "disabled"], [1, "relative", "my-6"], [1, "absolute", "inset-0", "flex", "items-center"], [1, "w-full", "border-t", "border-primary/20"], [1, "relative", "flex", "justify-center", "text-sm"], [1, "px-2", "bg-dark-900", "text-text-secondary"], [1, "text-center", "text-text-secondary"], ["routerLink", "/auth/login", 1, "text-primary-500", "hover:text-primary-400", "font-semibold", "transition-smooth"], [1, "text-center", "text-text-secondary", "text-sm", "mt-6"], [1, "mb-6", "p-4", "rounded-lg", "bg-red-500/10", "border", "border-red-500/30", "text-red-400", "text-sm"], [1, "mt-1", "text-sm", "text-red-400"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5, "\u{1F331}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 5);
        \u0275\u0275text(7, " Rejoignez EcoShare ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, "Cr\xE9ez votre compte pour partager et donner");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, RegisterComponent_div_10_Template, 2, 1, "div", 7);
        \u0275\u0275elementStart(11, "form", 8);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(12, "div", 9)(13, "div")(14, "label", 10);
        \u0275\u0275text(15, " Nom ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 11);
        \u0275\u0275template(17, RegisterComponent_ng_container_17_Template, 3, 0, "ng-container", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div")(19, "label", 13);
        \u0275\u0275text(20, " Pr\xE9nom ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 14);
        \u0275\u0275template(22, RegisterComponent_ng_container_22_Template, 3, 0, "ng-container", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div")(24, "label", 15);
        \u0275\u0275text(25, " Email ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 16);
        \u0275\u0275template(27, RegisterComponent_ng_container_27_Template, 3, 0, "ng-container", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div")(29, "label", 17);
        \u0275\u0275text(30, " Mot de passe ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 18);
        \u0275\u0275template(32, RegisterComponent_ng_container_32_Template, 3, 0, "ng-container", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 9)(34, "div")(35, "label", 19);
        \u0275\u0275text(36, " T\xE9l\xE9phone ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "input", 20);
        \u0275\u0275template(38, RegisterComponent_ng_container_38_Template, 3, 0, "ng-container", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div")(40, "label", 21);
        \u0275\u0275text(41, " Code Postal ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 22);
        \u0275\u0275template(43, RegisterComponent_ng_container_43_Template, 3, 0, "ng-container", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 9)(45, "div")(46, "label", 23);
        \u0275\u0275text(47, " Adresse ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "input", 24);
        \u0275\u0275template(49, RegisterComponent_ng_container_49_Template, 3, 0, "ng-container", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div")(51, "label", 25);
        \u0275\u0275text(52, " Ville ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "input", 26);
        \u0275\u0275template(54, RegisterComponent_ng_container_54_Template, 3, 0, "ng-container", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "button", 27);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 28)(58, "div", 29);
        \u0275\u0275element(59, "div", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 31)(61, "span", 32);
        \u0275\u0275text(62, "Ou");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "p", 33);
        \u0275\u0275text(64, " D\xE9j\xE0 inscrit? ");
        \u0275\u0275elementStart(65, "a", 34);
        \u0275\u0275text(66, " Se connecter ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "p", 35);
        \u0275\u0275text(68, " En vous inscrivant, vous acceptez nos conditions d'utilisation ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("nom")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("nom")) == null ? null : tmp_2_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.form.get("prenom")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("prenom")) == null ? null : tmp_3_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.touched));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.form.get("telephone")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("telephone")) == null ? null : tmp_6_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.form.get("codepostal")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.form.get("codepostal")) == null ? null : tmp_7_0.touched));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.form.get("adresse")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.form.get("adresse")) == null ? null : tmp_8_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.form.get("ville")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.form.get("ville")) == null ? null : tmp_9_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Inscription en cours..." : "S'inscrire", " ");
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\ninput[_ngcontent-%COMP%] {\n  background-color: var(--bg-card);\n  color: var(--text-primary);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-secondary);\n  opacity: 0.5;\n}\ninput[_ngcontent-%COMP%]:focus {\n  background-color: var(--bg-card);\n  border-color: var(--primary);\n}\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/pages/register/register.component.ts", lineNumber: 14 });
})();

// src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
export {
  AUTH_ROUTES
};
//# sourceMappingURL=chunk-VIEAFKO7.js.map
