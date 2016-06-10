import {Component, Input} from 'angular2/core';
import {Word} from '../models/word';
import {WordService} from '../services/word.service';

@Component({
  selector: 'my-word-detail',
  templateUrl: 'app/word-detail/word-detail.component.html',
  providers: [WordService]
})
export class WordDetailComponent {
  @Input()
  word:Word;

  constructor(private _wordService:WordService) {

***REMOVED***


  onSave(word:Word) {
    this._wordService.update(word).subscribe((result:any) => {
      this.word = result;
***REMOVED***);
***REMOVED***
}


