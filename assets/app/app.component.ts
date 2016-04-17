import {Component, OnInit} from 'angular2/core';
import {Word} from './word';
import {WordDetailComponent} from './word-detail.component';
import {WordService} from './word.service';


@Component({
  selector: 'english-quiz',
  directives: [WordDetailComponent],
  providers: [WordService],
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  title = 'All words';
  errorMessage = '';
  words:Word[];
  selectedWord:Word;

  constructor(private _wordService:WordService) {
***REMOVED***


  getWords() {
    this._wordService.getWords()
      .subscribe(
        words => this.words = words,
        error => this.errorMessage = <any>error);
***REMOVED***

  ngOnInit() {
    this.getWords();
***REMOVED***

  onSelect(word:Word) {
    this.selectedWord = word;
***REMOVED***
}




