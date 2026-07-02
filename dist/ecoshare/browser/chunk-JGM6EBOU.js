import {
  ApiService
} from "./chunk-F5BZ44D6.js";
import {
  __spreadProps,
  __spreadValues,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-H4L2EFRC.js";

// src/app/core/services/demande.service.ts
var DemandeService = class _DemandeService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  getAllDemandes() {
    return this.apiService.get("/demandes");
  }
  getDemandeById(id) {
    return this.apiService.get(`/demandes/${id}`);
  }
  createDemande(demande) {
    const payload = __spreadProps(__spreadValues({}, demande), {
      categorie: { id: demande.categorie.id }
    });
    return this.apiService.post("/demandes", payload);
  }
  updateDemande(id, demande) {
    const payload = __spreadProps(__spreadValues({}, demande), {
      categorie: { id: demande.categorie.id }
    });
    return this.apiService.put(`/demandes/${id}`, payload);
  }
  deleteDemande(id) {
    return this.apiService.delete(`/demandes/${id}`);
  }
  getDemandesByUser(userId) {
    return this.apiService.get(`/demandes/user/${userId}`);
  }
  getDemandesByCategory(categoryId) {
    return this.apiService.get(`/demandes/category/${categoryId}`);
  }
  updateDemandeStatus(id, status) {
    return this.apiService.patch(`/demandes/${id}`, { statut: status });
  }
  static {
    this.\u0275fac = function DemandeService_Factory(t) {
      return new (t || _DemandeService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DemandeService, factory: _DemandeService.\u0275fac, providedIn: "root" });
  }
};

export {
  DemandeService
};
//# sourceMappingURL=chunk-JGM6EBOU.js.map
