import {
  ApiService
} from "./chunk-F5BZ44D6.js";
import {
  __spreadProps,
  __spreadValues,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-H4L2EFRC.js";

// src/app/core/services/annonce.service.ts
var AnnonceService = class _AnnonceService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  getAllAnnonces() {
    return this.apiService.get("/annonces");
  }
  getAnnonceById(id) {
    return this.apiService.get(`/annonces/${id}`);
  }
  createAnnonce(annonce) {
    const payload = __spreadProps(__spreadValues({}, annonce), {
      categorie: { id: annonce.categorie.id }
    });
    return this.apiService.post("/annonces", payload);
  }
  updateAnnonce(id, annonce) {
    const payload = __spreadProps(__spreadValues({}, annonce), {
      categorie: { id: annonce.categorie.id }
    });
    return this.apiService.put(`/annonces/${id}`, payload);
  }
  deleteAnnonce(id) {
    return this.apiService.delete(`/annonces/${id}`);
  }
  getAnnoncesByUser(userId) {
    return this.apiService.get(`/annonces/user/${userId}`);
  }
  searchAnnonces(query) {
    return this.apiService.get(`/annonces/search?q=${query}`);
  }
  getAnnoncesByCategory(categoryId) {
    return this.apiService.get(`/annonces/category/${categoryId}`);
  }
  static {
    this.\u0275fac = function AnnonceService_Factory(t) {
      return new (t || _AnnonceService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnnonceService, factory: _AnnonceService.\u0275fac, providedIn: "root" });
  }
};

export {
  AnnonceService
};
//# sourceMappingURL=chunk-4SNZRIGC.js.map
