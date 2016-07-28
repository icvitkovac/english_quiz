import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { NotificationService } from '../notification/notification.service';
import {NotificationComponent} from '../notification/notification.component';
import {InitService} from '../services/init.service';
// import * as notificationCodes from '../constants/constants';

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
            .subscribe((data) => {
                let skip = false;
                data.forEach(element => {
                    if (element.code === 'changeLanguage' && !skip) {
                        skip = true;
                        sessionStorage.setItem('changeLanguage', 'true');
                        this._notificationService.show({ type: 'warn', message: 'Please set desired language in order to play!', autoClose: true });
                    }
                    if (element.code === 'reportedWord') {
                        this._notificationService.show({ type: 'warn', message: `Word ${element.word} has
                         been reported as inaccurate by other users, please review its translations`, autoClose: true });
                    }
                });
            }, err => {
                this._notificationService.show({ type: 'error', message: `There has been an error: ${err}.`, hasCloseButton: true });
            });
    }

}