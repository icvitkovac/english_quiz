import {Component} from '@angular/core';

import {AdminComponent} from './admin/admin.component';
import {MainComponent} from './main/main.component';
import {StatsComponent} from './stats/stats.component';
import {GamePickerComponent} from './game-picker/game-picker.component';
import {LongestWordComponent} from './word-longest/word-longest.component';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'english-quiz',
  directives: [MainComponent, AdminComponent, ROUTER_DIRECTIVES],
  precompile: [MainComponent, AdminComponent, StatsComponent, GamePickerComponent, LongestWordComponent],
  templateUrl: 'app/app.component.html'

})


export class AppComponent {


}
