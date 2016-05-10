import {Component, Input} from 'angular2/core';
import {WordService} from './word.service';
import {Word} from './word';
@Component({
  selector: 'word-add',
  templateUrl: 'app/add.word.html',
  providers: [WordService]
})
export class WordAddComponent {
  @Input()
  submitted = false;
  active = true;
  word = new Word(0, '', false, [], 0);

  onSubmit() {
    this.submitted = true;
    console.log(this.word);
    this._wordService
      .add(this.word)
      .subscribe((result:Word) => {
        console.log(result);
  ***REMOVED***);

***REMOVED***

  constructor(private _wordService:WordService) {

***REMOVED***


}










