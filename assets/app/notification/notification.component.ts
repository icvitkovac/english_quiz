import { Component } from '@angular/core';

import { NotificationService } from './notification.service';
import { Notification } from './notification.model';

@Component({
    selector: 'notification',
     templateUrl: './notification.component.html'
})
export class NotificationComponent {
    public _notifications;

    constructor(private _notificationService: NotificationService) {
        this._notifications = new Set<Notification>();

        _notificationService.noteAdded.subscribe(note => {
            this._notifications.add(note);

            if (note.autoClose) {
              setTimeout(() => { this.hide.bind(this)(note); }, 5000);
        ***REMOVED***

    ***REMOVED***);
***REMOVED***

    private hide(note) {
        if(this._notifications.has(note)) {
          this._notifications.delete(note);
    ***REMOVED***
  ***REMOVED***
}
