import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DemandeService, DemandeResponse } from '../../../../core/services/demande.service';
import { CategorieService, Categorie } from '../../../../core/services/categorie.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-demande-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit, OnDestroy {
  demandes: DemandeResponse[] = [];
  filteredDemandes: DemandeResponse[] = [];
  categories: Categorie[] = [];
  
  searchQuery = '';
  selectedCategory = '';
  isLoading = true;
  
  private destroy$ = new Subject<void>();

  constructor(
    private demandeService: DemandeService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadDemandes();
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

  private loadDemandes(): void {
    this.isLoading = true;
    this.demandeService.getAllDemandes()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (demandes) => {
          this.demandes = demandes;
          this.applyFilters();
          this.isLoading = false;
        },
        error: (err) => {
          console.error('[v0] Error loading demandes:', err);
          this.isLoading = false;
        }
      });
  }

  applyFilters(): void {
    let filtered = this.demandes;

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(d =>
        d.titre.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(d =>
        d.categorie?.id === parseInt(this.selectedCategory)
      );
    }

    this.filteredDemandes = filtered;
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  getStatutBadgeClass(statut: string): string {
    const statutLower = statut.toLowerCase();
    switch (statutLower) {
      case 'actif':
      case 'active':
        return 'bg-primary-500/20 text-primary-400';
      case 'fermé':
      case 'closed':
        return 'bg-red-500/20 text-red-400';
      case 'en attente':
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-text-secondary/20 text-text-secondary';
    }
  }
}
