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
  {
    path: 'pick',
    component: GamePickerComponent
  },
  {
    path: 'longest-word',
    component: LongestWordComponent
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
