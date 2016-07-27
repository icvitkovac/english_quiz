import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { NotificationService } from '../notification/notification.service';
import {NotificationComponent} from '../notification/notification.component'


@Component({

    selector: 'selector',
    directives: [ROUTER_DIRECTIVES, NotificationComponent],
    providers: [NotificationService],
    templateUrl: 'app/game-picker/game-picker.component.html'
})
export class GamePickerComponent implements OnInit {
    constructor(private _notificationService: NotificationService) {
***REMOVED***

    ngOnInit() {
        this._notificationService.show({ type: 'warn', message: 'Hey there', hasCloseButton: true });
***REMOVED***

}