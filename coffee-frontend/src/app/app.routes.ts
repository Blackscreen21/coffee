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
      import('../v60/v60').then((m) => m.V60),
  },
];
