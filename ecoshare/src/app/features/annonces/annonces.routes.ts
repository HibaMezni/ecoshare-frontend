import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { AnnonceListComponent } from './pages/annonce-list/annonce-list.component';
import { AnnonceDetailComponent } from './pages/annonce-detail/annonce-detail.component';
import { AnnonceCreateComponent } from './pages/annonce-create/annonce-create.component';

export const ANNONCES_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: AnnonceListComponent
      },
      {
        path: 'create',
        component: AnnonceCreateComponent
      },
      {
        path: ':id',
        component: AnnonceDetailComponent
      }
    ]
  }
];
