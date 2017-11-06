import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WordService } from '../services/word.service';
import { Word } from '../models/word';
import { WordUpdateComponent } from './word-update/word-update.component';
import { WordAddComponent } from './word-add/word-add.component';
import { SettingsComponent } from './settings/settings.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { NotificationService } from '../notification/notification.service';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'admin-component',
  providers: [WordService, NotificationService, WordUpdateComponent, WordAddComponent, SettingsComponent, NotificationComponent],
  templateUrl: './admin.component.html'
})


export class AdminComponent {

  adminForm = new FormGroup ({
    searchField: new FormControl()
***REMOVED***);

  private words: Word[];
  private selectedWord: Word;

  constructor(private _wordService: WordService,
    private _notificationService: NotificationService
  ) {



    // this.adminForm.searchField.valueChanges
    //   .debounceTime(400)
    //   .flatMap((term: string) => this._wordService.search(term))
    //   .subscribe((result: Word[]) => {
    //     this.words = result;
    // ***REMOVED***);
***REMOVED***

  onSelect(word: Word): void {
    this.selectedWord = word;
***REMOVED***

  onDelete(word: Word, event: any): void {
    event.stopPropagation();

    this._wordService
      .destroy(word)
      .subscribe(() => {
        this._notificationService.show({ type: 'success', message: 'Word deleted.', hasCloseButton: true, autoClose: true });
  ***REMOVED***);
***REMOVED***

}

