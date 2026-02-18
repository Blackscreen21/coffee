import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('../home-screen-component/home-screen-component').then(
        (m) => m.HomeScreenComponent
      ),
  },
  {
    path: 'v60',
    loadComponent: () =>
      import('../brewing-method-components/v60/v60').then((m) => m.V60),
  },
  {
    path: 'kalita',
    loadComponent: () =>
      import('../brewing-method-components/kalita/kalita').then((m) => m.Kalita),
  },
  {
    path: 'aeropress',
    loadComponent: () =>
      import('../brewing-method-components/aeropress/aeropress').then((m) => m.Aeropress),
  },
  {
    path: 'frenchpress',
    loadComponent: () =>
      import('../brewing-method-components/frenchpress/frenchpress').then((m) => m.Frenchpress),
  },

];
