import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'studio',
    loadComponent: () => import('./pages/studio/studio.page').then(m => m.StudioPage)
  },
  {
    path: 'servizi/:slug',
    loadComponent: () => import('./pages/service-detail/service-detail.page').then(m => m.ServiceDetailPage)
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.page').then(m => m.ContattiPage)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
