import {Component, OnInit} from 'angular2/core';
import {WordService} from '../services/word.service';
import {GameService} from '../services/game.service';
import {Word} from '../models/word';
import {WordDisplayComponent} from '../word-display/word-display.component';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import 'rxjs/Rx';

@Component({
  selector: 'main-component',
  providers: [WordService, GameService],
  directives: [WordDisplayComponent, RouterOutlet],
  templateUrl: 'app/main/main.component.html'

})

@RouteConfig([
  {path: '/', name: 'WordDisplay', component: WordDisplayComponent, useAsDefault: true}
])

export class MainComponent implements OnInit {

  count:number;
  guessWord:Word;
  isStarted:boolean;
  points:number;

  constructor(private _wordService:WordService, private _gameService:GameService) {

***REMOVED***

  onClick() {

    this._gameService.startEnd()
      .subscribe((game) => {
        this.isStarted = game.isStarted;
        this.points = game.points;

        if (!this.isStarted) {
          //clear word on game over
          this.guessWord = null;
          return;
    ***REMOVED***


        /*GAME STARTED*/


        //get random word when game starts
        this._gameService.nextWord()
          .subscribe((guessWord:Word) => {
            this.guessWord = guessWord;
      ***REMOVED***);
  ***REMOVED***);

***REMOVED***

  ngOnInit() {
    this.count = 0;
    this._gameService.status()
      .subscribe(game => {
        this.isStarted = game.isStarted;
  ***REMOVED***);

    this._wordService.count()
      .subscribe(result => {
        this.count = result.count;
  ***REMOVED***);

***REMOVED***

  buttonState() {
    return this.count == 0;
***REMOVED***

  onGameOver(state: boolean) {
    this.isStarted = state;
    this.guessWord = null;
***REMOVED***

}
