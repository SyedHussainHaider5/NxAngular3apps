import { HomepageComponent } from './homepage/homepage.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'signup',
    loadChildren: () =>
      import('signup/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: HomepageComponent,
  },
];
