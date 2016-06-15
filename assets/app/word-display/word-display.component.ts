import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Word} from '../models/word';
import {GameService} from '../services/game.service';
import {HighlightDirective} from '../directives/highlight.directive';

@Component({
  selector: 'random-word',
  templateUrl: 'app/word-display/word-display.component.html',
  directives: [HighlightDirective]
})
export class WordDisplayComponent {
  @Input() word:Word;
  @Output() onGameOver = new EventEmitter<boolean>();

  points:number;

  constructor(private _gameService:GameService) {

***REMOVED***

  onSelect(pickedWord:{}) {
    this._gameService.checkAnswer(pickedWord)
      .subscribe(data => {

        this.points = data.points;

        if (data.isAnswer) {
          this.word = data;
    ***REMOVED***

        if (data.isStarted === false) {

          this.onGameOver.emit(false);
    ***REMOVED***
  ***REMOVED***);

***REMOVED***

}


