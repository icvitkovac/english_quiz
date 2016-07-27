import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { NotificationService } from '../notification/notification.service';
import {NotificationComponent} from '../notification/notification.component';
import {InitService} from '../services/init.service';

@Component({

    selector: 'selector',
    directives: [ROUTER_DIRECTIVES, NotificationComponent],
    providers: [NotificationService, InitService],
    templateUrl: 'app/game-picker/game-picker.component.html'
})
export class GamePickerComponent implements OnInit {
    constructor(private _notificationService: NotificationService, private _initService: InitService) {
    }

    ngOnInit() {
        this._initService.get()
            .subscribe(() => {
                this._notificationService.show({ type: 'warn', message: 'change language.', autoClose: true });
            }, err => {
                this._notificationService.show({ type: 'error', message: `There has been an error: ${err}.`, hasCloseButton: true });
            });
    }

}