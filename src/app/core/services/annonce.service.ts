import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface Annonce {
  id?: number;
  titre: string;
  description: string;
  categorieId: number;
  imageBase64?: string;
  etatObjet: string;
  typeDon: string;
  ville: string;
  utilisateurId?: number;
}

export interface AnnonceResponse {
  id: number;
  titre: string;
  description: string;
  categorieId: number;
  categorieNom: string;
  imageBase64: string;
  etatObjet: string;
  typeDon: string;
  ville: string;
  statut: string;
  nombreVues: number;
  dateCreation: string;
  utilisateurId: number;
  utilisateurNom: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  constructor(private apiService: ApiService) {}

  getAllAnnonces(): Observable<AnnonceResponse[]> {
    return this.apiService.get<AnnonceResponse[]>('/annonces/all');
  }

  getAnnonceById(id: number): Observable<AnnonceResponse> {
    return this.apiService.get<AnnonceResponse>(`/annonces/${id}`);
  }

  createAnnonce(annonce: Annonce): Observable<AnnonceResponse> {
    return this.apiService.post<AnnonceResponse>('/annonces', annonce);
  }

  updateAnnonce(id: number, annonce: Annonce): Observable<AnnonceResponse> {
    return this.apiService.put<AnnonceResponse>(`/annonces/${id}`, annonce);
  }

  deleteAnnonce(id: number): Observable<void> {
    return this.apiService.delete<void>(`/annonces/${id}`);
  }

  getAnnoncesByUser(userId: number): Observable<AnnonceResponse[]> {
    return this.apiService.get<AnnonceResponse[]>(`/annonces/utilisateur/${userId}`);
  }

  searchAnnonces(titre: string): Observable<AnnonceResponse[]> {
    return this.apiService.get<AnnonceResponse[]>(`/annonces/search?titre=${titre}`);
  }

  getAnnoncesByCategory(categoryId: number): Observable<AnnonceResponse[]> {
    return this.apiService.get<AnnonceResponse[]>(`/annonces/categorie/${categoryId}`);
  }

  getAnnoncesByVille(ville: string): Observable<AnnonceResponse[]> {
    return this.apiService.get<AnnonceResponse[]>(`/annonces/ville/${ville}`);
  }
}