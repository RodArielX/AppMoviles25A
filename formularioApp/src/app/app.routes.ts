import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),  // Asegúrate de que el nombre sea "HomePage"
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

