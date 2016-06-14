import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AdminComponent} from './admin/admin.component';
import {MainComponent} from './main/main.component';
import {StatsComponent} from './stats/stats.component';


@Component({
  selector: 'english-quiz',
  directives: [MainComponent, AdminComponent, ROUTER_DIRECTIVES],
  templateUrl: 'app/app.component.html'

})

@RouteConfig([
  {
    path: '/administration',
    name: 'Admin',
    component: AdminComponent
  },
  {
    path: '/stats',
    name: 'Stats',
    component: StatsComponent
  },
  {
    path: '/main/...',
    name: 'Main',
    component: MainComponent,
    useAsDefault: true
  },
])


export class AppComponent {


}
