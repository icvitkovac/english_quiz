import {Component} from '@angular/core';

import {AdminComponent} from './admin/admin.component';
import {MainComponent} from './main/main.component';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'english-quiz',
  directives: [MainComponent, AdminComponent, ROUTER_DIRECTIVES],
  templateUrl: 'app/app.component.html'

})


export class AppComponent {


}
