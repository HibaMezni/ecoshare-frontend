import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AnnonceService } from '../../../../core/services/annonce.service';
import { CategorieService, Categorie } from '../../../../core/services/categorie.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-annonce-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './annonce-create.component.html',
  styleUrls: ['./annonce-create.component.css']
})
export class AnnonceCreateComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    titre: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    categorie: ['', Validators.required],
    image: [''],
    etat: ['', Validators.required],
    localisation: ['', [Validators.required, Validators.minLength(3)]]
  });

  categories: Categorie[] = [];
  isLoading = false;
  errorMessage = '';
  imagePreview: string | null = null;
  
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private annonceService: AnnonceService,
    private categorieService: CategorieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
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

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
        this.form.patchValue({
          image: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';

    const formData = this.form.getRawValue();
    const payload = {
      titre: formData.titre || '',
      description: formData.description || '',
      categorie: { id: parseInt(formData.categorie || '0') },
      image: formData.image,
      etat: formData.etat || '',
      localisation: formData.localisation || ''
    };

    this.annonceService.createAnnonce(payload as any)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (annonce) => {
          this.router.navigate(['/annonces', annonce.id]);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.error?.message || 'Erreur lors de la création. Veuillez réessayer.';
          console.error('[v0] Error creating annonce:', err);
        }
      });
  }
}
