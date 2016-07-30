import {Component, Input} from '@angular/core';
import {Word} from '../../models/word';
import {WordService} from '../../services/word.service';
import {NotificationService} from '../../notification/notification.service';
import {NotificationComponent} from '../../notification/notification.component';


@Component({
  selector: 'my-word-detail',
  templateUrl: 'app/admin/word-detail/word-detail.component.html',
  providers: [WordService, NotificationService],
  directives: [NotificationComponent]
})
export class WordDetailComponent {
  @Input()
  private word: Word;

  constructor(private _wordService: WordService, private _notificationService: NotificationService) {

  }


  onSave(word: Word): void {
    this._wordService
      .update(word)
      .subscribe((updatedWord: Word) => {
        this.word = updatedWord;
        this._notificationService.show({ type: 'success', message: 'Word successfully added.', autoClose: true });
      });
  }
}


