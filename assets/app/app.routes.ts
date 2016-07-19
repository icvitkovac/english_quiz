import {provideRouter, RouterConfig} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {MainComponent} from './main/main.component';
import {StatsComponent} from './stats/stats.component';
import {GamePickerComponent} from './game-picker/game-picker.component';
import {LongestWordComponent} from './word-longest/word-longest.component';


export const routes: RouterConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pick'
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
  {
    path: 'pick',
    component: GamePickerComponent
***REMOVED***,
  {
    path: 'longest-word',
    component: LongestWordComponent
***REMOVED***,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
