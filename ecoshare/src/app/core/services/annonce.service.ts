import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface AnnonceResponse {
  id: number;
  titre: string;
  description: string;
  // Backend field names
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
  // Aliases for template compatibility
  image?: string;
  etat?: string;
  localisation?: string;
  categorie?: { id: number; nom: string };
  user?: { id: number; nom: string; prenom: string; email: string; telephone: string };
  userId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  constructor(private apiService: ApiService) {}

  private mapAnnonce(a: any): AnnonceResponse {
    return {
      ...a,
      image: a.imageBase64,
      etat: a.etatObjet,
      localisation: a.ville,
      categorie: { id: a.categorieId, nom: a.categorieNom },
      user: {
        id: a.utilisateurId,
        nom: a.utilisateurNom,
        prenom: '',
        email: '',
        telephone: ''
      },
      userId: a.utilisateurId
    };
  }

  getAllAnnonces(): Observable<AnnonceResponse[]> {
    return new Observable(observer => {
      this.apiService.get<any[]>('/annonces/all').subscribe({
        next: (data) => observer.next(data.map(a => this.mapAnnonce(a))),
        error: (e) => observer.error(e)
      });
    });
  }

  getAnnonceById(id: number): Observable<AnnonceResponse> {
    return new Observable(observer => {
      this.apiService.get<any>(`/annonces/${id}`).subscribe({
        next: (data) => observer.next(this.mapAnnonce(data)),
        error: (e) => observer.error(e)
      });
    });
  }

  createAnnonce(annonce: any): Observable<AnnonceResponse> {
    return new Observable(observer => {
      this.apiService.post<any>('/annonces', annonce).subscribe({
        next: (data) => observer.next(this.mapAnnonce(data)),
        error: (e) => observer.error(e)
      });
    });
  }

  updateAnnonce(id: number, annonce: any): Observable<AnnonceResponse> {
    return new Observable(observer => {
      this.apiService.put<any>(`/annonces/${id}`, annonce).subscribe({
        next: (data) => observer.next(this.mapAnnonce(data)),
        error: (e) => observer.error(e)
      });
    });
  }

  deleteAnnonce(id: number): Observable<void> {
    return this.apiService.delete<void>(`/annonces/${id}`);
  }

  getAnnoncesByUser(userId: number): Observable<AnnonceResponse[]> {
    return new Observable(observer => {
      this.apiService.get<any[]>(`/annonces/utilisateur/${userId}`).subscribe({
        next: (data) => observer.next(data.map(a => this.mapAnnonce(a))),
        error: (e) => observer.error(e)
      });
    });
  }

  searchAnnonces(titre: string): Observable<AnnonceResponse[]> {
    return new Observable(observer => {
      this.apiService.get<any[]>(`/annonces/search?titre=${titre}`).subscribe({
        next: (data) => observer.next(data.map(a => this.mapAnnonce(a))),
        error: (e) => observer.error(e)
      });
    });
  }

  getAnnoncesByCategory(categoryId: number): Observable<AnnonceResponse[]> {
    return new Observable(observer => {
      this.apiService.get<any[]>(`/annonces/categorie/${categoryId}`).subscribe({
        next: (data) => observer.next(data.map(a => this.mapAnnonce(a))),
        error: (e) => observer.error(e)
      });
    });
  }

  getAnnoncesByVille(ville: string): Observable<AnnonceResponse[]> {
    return new Observable(observer => {
      this.apiService.get<any[]>(`/annonces/ville/${ville}`).subscribe({
        next: (data) => observer.next(data.map(a => this.mapAnnonce(a))),
        error: (e) => observer.error(e)
      });
    });
  }
}
