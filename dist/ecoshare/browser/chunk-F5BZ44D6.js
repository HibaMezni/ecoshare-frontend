import {
  HttpClient,
  HttpHeaders,
  __spreadValues,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-H4L2EFRC.js";

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api";
  }
  getHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders(__spreadValues({
      "Content-Type": "application/json"
    }, token && { Authorization: `Bearer ${token}` }));
  }
  get(endpoint) {
    return this.http.get(`${this.apiUrl}${endpoint}`, {
      headers: this.getHeaders()
    });
  }
  post(endpoint, data) {
    return this.http.post(`${this.apiUrl}${endpoint}`, data, {
      headers: this.getHeaders()
    });
  }
  put(endpoint, data) {
    return this.http.put(`${this.apiUrl}${endpoint}`, data, {
      headers: this.getHeaders()
    });
  }
  delete(endpoint) {
    return this.http.delete(`${this.apiUrl}${endpoint}`, {
      headers: this.getHeaders()
    });
  }
  patch(endpoint, data) {
    return this.http.patch(`${this.apiUrl}${endpoint}`, data, {
      headers: this.getHeaders()
    });
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  ApiService
};
//# sourceMappingURL=chunk-F5BZ44D6.js.map
