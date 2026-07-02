import { Routes } from '@angular/router';
import { AuthGuardService } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/annonces',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'annonces',
    loadChildren: () => import('./features/annonces/annonces.routes').then(m => m.ANNONCES_ROUTES),
    canActivate: [AuthGuardService]
  },
  {
    path: 'demandes',
    loadChildren: () => import('./features/demandes/demandes.routes').then(m => m.DEMANDES_ROUTES),
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.routes').then(m => m.PROFILE_ROUTES),
    canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.routes').then(m => m.ABOUT_ROUTES)
  },
  {
    path: '**',
    redirectTo: '/annonces'
  }
];
