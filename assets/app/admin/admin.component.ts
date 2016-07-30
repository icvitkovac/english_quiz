import {Component} from '@angular/core';
import {Control, ControlGroup, FormBuilder} from '@angular/common';
import {WordService} from '../services/word.service';
import {Word} from '../models/word';
import {WordDetailComponent} from './word-detail/word-detail.component';
import {WordAddComponent} from './word-add/word-add.component';
import {SettingsComponent} from './settings/settings.component';
import {HighlightDirective} from '../directives/highlight.directive';
import {NotificationService} from '../notification/notification.service';
import {NotificationComponent} from '../notification/notification.component';

@Component({
  selector: 'admin-component',
  providers: [WordService, NotificationService],
  directives: [WordDetailComponent, WordAddComponent, SettingsComponent, HighlightDirective, NotificationComponent],
  templateUrl: 'app/admin/admin.component.html'
})


export class AdminComponent {
  private searchField: Control;
  private coolForm: ControlGroup;
  private words: Word[];
  private selectedWord: Word;

  constructor(private _wordService: WordService,
    private fb: FormBuilder,
    private _notificationService: NotificationService
  ) {
    this.searchField = new Control();
    this.coolForm = fb.group({ search: this.searchField });

    this.searchField.valueChanges
      .debounceTime(400)
      .flatMap((term: string) => this._wordService.search(term))
      .subscribe((result: Word[]) => {
        this.words = result;
      });
  }

  onSelect(word: Word): void {
    this.selectedWord = word;
  }

  onDelete(word: Word, event: any): void {
    event.stopPropagation();

    this._wordService
      .destroy(word)
      .subscribe(() => {
        this._notificationService.show({ type: 'success', message: 'Word deleted.', hasCloseButton: true, autoClose: true });
      });
  }

}

