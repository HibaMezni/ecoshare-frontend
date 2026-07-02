import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AnnonceService, AnnonceResponse } from '../../../../core/services/annonce.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-annonce-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit, OnDestroy {
  annonce: AnnonceResponse | null = null;
  isLoading = true;
  isOwner = false;
  currentUser: any = null;
  isDeleteConfirming = false;
  
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.loadAnnonce(parseInt(id));
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadAnnonce(id: number): void {
    this.isLoading = true;
    this.annonceService.getAnnonceById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (annonce) => {
          this.annonce = annonce;
          this.isOwner = this.currentUser?.id === annonce.userId;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('[v0] Error loading annonce:', err);
          this.isLoading = false;
          this.router.navigate(['/annonces']);
        }
      });
  }

  deleteAnnonce(): void {
    if (!this.annonce) return;

    this.annonceService.deleteAnnonce(this.annonce.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.router.navigate(['/annonces']);
        },
        error: (err) => {
          console.error('[v0] Error deleting annonce:', err);
        }
      });
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
