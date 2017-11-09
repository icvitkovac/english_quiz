import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Word } from '../models/word';
import { GameService } from '../services/game.service';

@Component({
  selector: 'random-word',
  templateUrl: './word-display.component.html',
  providers: [GameService]
})
export class WordDisplayComponent {
  @Input() word: Word;
  @Output() onGameOver = new EventEmitter<string>();

  public points: number;

  constructor(private _gameService: GameService) {

***REMOVED***

  onSelect(pickedWord: {}): void {
    this._gameService.checkAnswer(pickedWord)
      .subscribe(data => {

        this.points = data.points;
        sessionStorage.setItem('points', data.points);

        if (data.isAnswer) {
          this.word = data;
          sessionStorage.setItem('guessWord', JSON.stringify(data));
    ***REMOVED***

        if (data.isStarted === false) {
          this.onGameOver.emit(data.correctAnswer);
    ***REMOVED***

  ***REMOVED***);

***REMOVED***

}


