import { Component } from '@angular/core';

import { NotificationService } from './notification.service';
import { Notification } from './notification.model';

@Component({
    selector: 'notification',
     templateUrl: 'app/notification/notification.component.html'
})
export class NotificationComponent {
    private _notes: Notification[];

    constructor(private _notifications: NotificationService) {
        this._notes = new Array<Notification>();

        _notifications.noteAdded.subscribe(note => {
            this._notes.push(note);

            setTimeout(() => { this.hide.bind(this)(note) }, 3000000);
        });
    }

    private hide(note) {
        let index = this._notes.indexOf(note);

        if (index >= 0) {
            this._notes.splice(index, 1);
        }
    }
}