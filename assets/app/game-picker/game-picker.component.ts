import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({

    selector: 'selector',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/game-picker/game-picker.component.html'
})
export class GamePickerComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}