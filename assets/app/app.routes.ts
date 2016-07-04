import {provideRouter, RouterConfig} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {MainComponent} from './main/main.component';
import {StatsComponent} from './stats/stats.component';


export const routes:RouterConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'administration',
    component: AdminComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
