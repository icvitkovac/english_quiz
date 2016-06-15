import {Component, Input} from 'angular2/core';
import {Word} from '../models/word';
import {GameService} from '../services/game.service';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'random-word',
  templateUrl: 'app/word-display/word-display.component.html',
  directives: [HighlightDirective]
})
export class WordDisplayComponent {
  @Input()
  word:Word;
  points:number;

  onSelect(pickedWord:{}) {
    this._gameService.checkAnswer(pickedWord)
      .subscribe(data => {

        this.points = data.points;

        if (data.isAnswer) {
          this.word = data;
    ***REMOVED***
  ***REMOVED***);

***REMOVED***

  constructor(private _gameService:GameService) {

***REMOVED***
}


