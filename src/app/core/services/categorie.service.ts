import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Categorie {
  id: number;
  nom: string;
  description?: string;
  icone?: string;
  couleur?: string;
  actif?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private categoriesSubject = new BehaviorSubject<Categorie[]>([]);
  public categories$ = this.categoriesSubject.asObservable();

  constructor(private apiService: ApiService) {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.getAllCategories().subscribe(categories => {
      this.categoriesSubject.next(categories);
    });
  }

  getAllCategories(): Observable<Categorie[]> {
    return this.apiService.get<Categorie[]>('/categories')
      .pipe(tap(categories => this.categoriesSubject.next(categories)));
  }

  getCategorieById(id: number): Observable<Categorie> {
    return this.apiService.get<Categorie>(`/categories/${id}`);
  }

  getCategories(): Categorie[] {
    return this.categoriesSubject.value;
  }
}