import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { AnnonceService } from '../../../../core/services/annonce.service';
import { DemandeService } from '../../../../core/services/demande.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  currentUser: any = null;
  userAnnonces: any[] = [];
  userDemandes: any[] = [];
  isLoading = true;
  
  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private annonceService: AnnonceService,
    private demandeService: DemandeService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.loadUserContent();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadUserContent(): void {
    if (!this.currentUser) return;

    this.annonceService.getAnnoncesByUser(this.currentUser.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (annonces) => {
          this.userAnnonces = annonces;
        },
        error: (err) => console.error('[v0] Error loading user annonces:', err)
      });

    this.demandeService.getDemandesByUser(this.currentUser.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (demandes) => {
          this.userDemandes = demandes;
          this.isLoading = false;
        },
        error: (err) => console.error('[v0] Error loading user demandes:', err)
      });
  }
}
