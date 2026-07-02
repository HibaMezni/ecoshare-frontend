import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MockDataService } from './mock-data.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Demande {
  id?: number;
  titre: string;
  description: string;
  categorie: { id: number };
  localisation: string;
  statut?: string;
  dateCreation?: string;
  userId?: number;
  user?: any;
}

export interface DemandeResponse {
  id: number;
  titre: string;
  description: string;
  categorie: any;
  localisation: string;
  statut: string;
  dateCreation: string;
  userId: number;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  constructor(private apiService: ApiService, private mockDataService: MockDataService) {}

  getAllDemandes(): Observable<DemandeResponse[]> {
    return this.apiService.get<DemandeResponse[]>('/demandes')
      .pipe(
        catchError(() => of(this.mockDataService.getDemandes() as any))
      );
  }

  getDemandeById(id: number): Observable<DemandeResponse> {
    return this.apiService.get<DemandeResponse>(`/demandes/${id}`);
  }

  createDemande(demande: Demande): Observable<DemandeResponse> {
    const payload = {
      ...demande,
      categorie: { id: demande.categorie.id }
    };
    return this.apiService.post<DemandeResponse>('/demandes', payload);
  }

  updateDemande(id: number, demande: Demande): Observable<DemandeResponse> {
    const payload = {
      ...demande,
      categorie: { id: demande.categorie.id }
    };
    return this.apiService.put<DemandeResponse>(`/demandes/${id}`, payload);
  }

  deleteDemande(id: number): Observable<void> {
    return this.apiService.delete<void>(`/demandes/${id}`);
  }

  getDemandesByUser(userId: number): Observable<DemandeResponse[]> {
    return this.apiService.get<DemandeResponse[]>(`/demandes/user/${userId}`);
  }

  getDemandesByCategory(categoryId: number): Observable<DemandeResponse[]> {
    return this.apiService.get<DemandeResponse[]>(`/demandes/category/${categoryId}`);
  }

  updateDemandeStatus(id: number, status: string): Observable<DemandeResponse> {
    return this.apiService.patch<DemandeResponse>(`/demandes/${id}`, { statut: status });
  }
}
