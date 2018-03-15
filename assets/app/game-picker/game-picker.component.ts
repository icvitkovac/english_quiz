import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification/notification.service';
import { NotificationComponent } from '../notification/notification.component';
import { InitService } from '../services/init.service';
// import * as notificationCodes from '../constants/constants';

@Component({

  selector: 'selector',
  providers: [NotificationService, InitService],
  templateUrl: './game-picker.component.html'
})
export class GamePickerComponent implements OnInit {
  private locale: string = window['Globals'].locale;
  constructor(private _notificationService: NotificationService, private _initService: InitService) {
  }

  ngOnInit() {

    if (this.locale === 'null' || this.locale.startsWith('en')) {
      this._notificationService.show({ type: 'warn', message: 'Please set desired language in order to play!' });

    }

    this._initService.get()
      .subscribe((data) => {
        data.forEach(element => {
          if (element.reportedWord) {
            this._notificationService.show({
              type: 'warn', message: `Word ${element.reportedWord.value} has
                         been reported as inaccurate by other users, please review its translations`, autoClose: true
            });
          }
        });
      }, err => {
        this._notificationService.show({ type: 'error', message: `There has been an error: ${err}.`, hasCloseButton: true });
      });
  }

}
