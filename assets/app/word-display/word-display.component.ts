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

  }

  onSelect(pickedWord:{}):void {
    this._gameService.checkAnswer(pickedWord)
      .subscribe(data => {

        this.points = data.points;
        sessionStorage.setItem('points', data.points);

        if (data.isAnswer) {
          this.word = data;
          sessionStorage.setItem('guessWord', JSON.stringify(data));
        }

        if (data.isStarted === false) {

          this.onGameOver.emit(false);
        }
      });

  }

}


