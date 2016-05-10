import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AdminComponent} from './admin.component';
import {MainComponent} from './main.component';


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
    path: '/main/...',
    name: 'Main',
    component: MainComponent,
    useAsDefault: true
  },
])


export class AppComponent {


}
