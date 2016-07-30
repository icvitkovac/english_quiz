import {Component, Input} from '@angular/core';
import {WordService} from '../../services/word.service';
import {Word} from '../../models/word';
import {NotificationService} from '../../notification/notification.service';
import {NotificationComponent} from '../../notification/notification.component';

@Component({
  selector: 'word-add',
  templateUrl: 'app/admin/word-add/word-add.component.html',
  directives: [NotificationComponent],
  providers: [WordService, NotificationService]
})

export class WordAddComponent {
  @Input()
  private submitted = false;
  private word = new Word(0, '', false, []);

  constructor(private _wordService: WordService, private _notificationService: NotificationService) {
  }

  onSubmit(): void {
    this._wordService
      .add(this.word)
      .subscribe(() => {
        this.submitted = true;
        this._notificationService.show({ type: 'success', message: 'Word successfully added.', autoClose: true });
      }, err => {
        this._notificationService.show({ type: 'error', message: `There has been an error: ${err}.`, hasCloseButton: true });
      });

  }

}