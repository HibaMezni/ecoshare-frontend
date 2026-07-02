import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-H4L2EFRC.js";

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this.themeSubject = new BehaviorSubject(this.getInitialTheme());
    this.theme$ = this.themeSubject.asObservable();
    this.applyTheme(this.themeSubject.value);
  }
  getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }
  toggleTheme() {
    const currentTheme = this.themeSubject.value;
    const newTheme = currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }
  setTheme(theme) {
    localStorage.setItem("theme", theme);
    this.themeSubject.next(theme);
    this.applyTheme(theme);
  }
  applyTheme(theme) {
    const htmlElement = document.documentElement;
    if (theme === "light") {
      htmlElement.setAttribute("data-theme", "light");
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.setAttribute("data-theme", "dark");
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    }
  }
  getCurrentTheme() {
    return this.themeSubject.value;
  }
  static {
    this.\u0275fac = function ThemeService_Factory(t) {
      return new (t || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

export {
  ThemeService
};
//# sourceMappingURL=chunk-JRO4LHXI.js.map
