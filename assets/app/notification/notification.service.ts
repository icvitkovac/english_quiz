import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  private _notifications = new Subject<Notification>();

  public noteAdded = this._notifications.asObservable();

  public show(notification: Notification) {
    this._notifications.next(notification);
  }
}
