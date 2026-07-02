import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface Annonce {
  id?: number;
  titre: string;
  description: string;
  categorie: { id: number };
  image?: string;
  etat: string;
  localisation: string;
  dateCreation?: string;
  userId?: number;
  user?: any;
}

export interface AnnonceResponse {
  id: number;
  titre: string;
  description: string;
  categorie: any;
  image: string;
  etat: string;
  localisation: string;
  dateCreation: string;
  userId: number;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  constructor(private apiService: ApiService) {}

  getAllAnnonces(): Observable<AnnonceResponse[]> {
    return this.apiService.get<AnnonceResponse[]>('/annonces');
  }

  getAnnonceById(id: number): Observable<AnnonceResponse> {
    return this.apiService.get<AnnonceResponse>(`/annonces/${id}`);
  }

  createAnnonce(annonce: Annonce): Observable<AnnonceResponse> {
    const payload = {
      ...annonce,
      categorie: { id: annonce.categorie.id }
    };
    return this.apiService.post<AnnonceResponse>('/annonces', payload);
  }

  updateAnnonce(id: number, annonce: Annonce): Observable<AnnonceResponse> {
    const payload = {
      ...annonce,
      categorie: { id: annonce.categorie.id }
    };
    return this.apiService.put<AnnonceResponse>(`/annonces/${id}`, payload);
  }

  deleteAnnonce(id: number): Observable<void> {
    return this.apiService.delete<void>(`/annonces/${id}`);
  }

  getAnnoncesByUser(userId: number): Observable<AnnonceResponse[]> {
    return this.apiService.get<AnnonceResponse[]>(`/annonces/user/${userId}`);
  }

  searchAnnonces(query: string): Observable<AnnonceResponse[]> {
    return this.apiService.get<AnnonceResponse[]>(`/annonces/search?q=${query}`);
  }

  getAnnoncesByCategory(categoryId: number): Observable<AnnonceResponse[]> {
    return this.apiService.get<AnnonceResponse[]>(`/annonces/category/${categoryId}`);
  }
}
