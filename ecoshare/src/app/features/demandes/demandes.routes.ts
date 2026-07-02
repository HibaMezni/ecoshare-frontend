import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { DemandeListComponent } from './pages/demande-list/demande-list.component';

export const DEMANDES_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: DemandeListComponent
      }
    ]
  }
];
