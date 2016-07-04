import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Word} from '../models/word';
import {GameService} from '../services/game.service';
import {HighlightDirective} from '../directives/highlight.directive';

@Component({
  selector: 'random-word',
  templateUrl: 'app/word-display/word-display.component.html',
  directives: [HighlightDirective],
  providers: [GameService]
})
export class WordDisplayComponent {
  @Input() word:Word;
  @Output() onGameOver = new EventEmitter<boolean>();

  private points:number;

  constructor(private _gameService:GameService) {

***REMOVED***

  onSelect(pickedWord:{}):void {
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


