import {provideRouter, RouterConfig} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {MainComponent} from './main/main.component';
import {StatsComponent} from './stats/stats.component';


export const routes:RouterConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
***REMOVED***,
  {
    path: 'administration',
    component: AdminComponent
***REMOVED***,
  {
    path: 'stats',
    component: StatsComponent
***REMOVED***,
  {
    path: 'main',
    component: MainComponent
***REMOVED***,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
