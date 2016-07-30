import {Component, Input} from '@angular/core';
import {Word} from '../../models/word';
import {WordService} from '../../services/word.service';
import {NotificationService} from '../../notification/notification.service';
import {NotificationComponent} from '../../notification/notification.component';

@Component({
  selector: 'word-update',
  templateUrl: 'app/admin/word-update/word-update.component.html',
  providers: [WordService, NotificationService],
  directives: [NotificationComponent]
})
export class WordUpdateComponent {
  @Input()
  private word: Word;

  constructor(private _wordService: WordService, private _notificationService: NotificationService) {

  }

  onSave(word: Word): void {
    this._wordService
      .update(word)
      .subscribe((updatedWord: Word) => {
        this.word = updatedWord;
        this._notificationService.show({ type: 'success', message: 'Word successfully updated.', autoClose: true });
      });
  }
}