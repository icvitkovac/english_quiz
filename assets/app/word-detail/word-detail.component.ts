import {Component, Input} from '@angular/core';
import {Word} from '../models/word';
import {WordService} from '../services/word.service';


@Component({
  selector: 'my-word-detail',
  templateUrl: 'app/word-detail/word-detail.component.html',
  providers: [WordService]
})
export class WordDetailComponent {
  @Input()
  private word:Word;

  constructor(private _wordService:WordService) {

***REMOVED***


  onSave(word:Word):void {
    this._wordService
      .update(word)
      .subscribe((updatedWord:Word) => {
        this.word = updatedWord;
        alert('word updated');
  ***REMOVED***);
***REMOVED***
}


