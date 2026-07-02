import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnnonceService, AnnonceResponse } from '../../../../core/services/annonce.service';
import { CategorieService, Categorie } from '../../../../core/services/categorie.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-annonce-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit, OnDestroy {
  annonces: AnnonceResponse[] = [];
  filteredAnnonces: AnnonceResponse[] = [];
  categories: Categorie[] = [];
  
  searchQuery = '';
  selectedCategory = '';
  isLoading = true;
  
  private destroy$ = new Subject<void>();

  constructor(
    private annonceService: AnnonceService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadAnnonces();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadCategories(): void {
    this.categorieService.categories$
      .pipe(takeUntil(this.destroy$))
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  private loadAnnonces(): void {
    this.isLoading = true;
    this.annonceService.getAllAnnonces()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (annonces) => {
          this.annonces = annonces;
          this.applyFilters();
          this.isLoading = false;
        },
        error: (err) => {
          console.error('[v0] Error loading annonces:', err);
          this.isLoading = false;
        }
      });
  }

  applyFilters(): void {
    let filtered = this.annonces;

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(a =>
        a.titre.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query)
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(a =>
        a.categorie?.id === parseInt(this.selectedCategory)
      );
    }

    this.filteredAnnonces = filtered;
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  getEtatBadgeClass(etat: string): string {
    const etatLower = etat.toLowerCase();
    switch (etatLower) {
      case 'neuf':
        return 'bg-primary-500/20 text-primary-400';
      case 'bon':
        return 'bg-secondary-500/20 text-secondary-400';
      case 'moyen':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'mauvais':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-text-secondary/20 text-text-secondary';
    }
  }
}
