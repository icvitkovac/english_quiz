import {Component, Input} from 'angular2/core';
import {Word} from './word';
import {GameService} from './game.service';
@Component({
  selector: 'random-word',
  templateUrl: 'app/word-display.component.html'
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


