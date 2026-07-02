import {
  ApiService
} from "./chunk-F5BZ44D6.js";
import {
  BehaviorSubject,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-H4L2EFRC.js";

// src/app/core/services/categorie.service.ts
var CategorieService = class _CategorieService {
  constructor(apiService) {
    this.apiService = apiService;
    this.categoriesSubject = new BehaviorSubject([]);
    this.categories$ = this.categoriesSubject.asObservable();
    this.loadCategories();
  }
  loadCategories() {
    this.getAllCategories().subscribe((categories) => {
      this.categoriesSubject.next(categories);
    });
  }
  getAllCategories() {
    return this.apiService.get("/categories").pipe(tap((categories) => this.categoriesSubject.next(categories)));
  }
  getCategorieById(id) {
    return this.apiService.get(`/categories/${id}`);
  }
  getCategorieByNom(nom) {
    return this.apiService.get(`/categories/nom/${nom}`);
  }
  getCategories() {
    return this.categoriesSubject.value;
  }
  static {
    this.\u0275fac = function CategorieService_Factory(t) {
      return new (t || _CategorieService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategorieService, factory: _CategorieService.\u0275fac, providedIn: "root" });
  }
};

export {
  CategorieService
};
//# sourceMappingURL=chunk-EBUR75BJ.js.map
