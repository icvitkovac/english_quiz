import {Component, OnInit} from '@angular/core';
import {WordService} from '../services/word.service';
import {GameService} from '../services/game.service';
import {Word} from '../models/word';
import {WordDisplayComponent} from '../word-display/word-display.component';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'main-component',
  providers: [WordService, GameService],
  directives: [WordDisplayComponent],
  templateUrl: 'app/main/main.component.html'
})

export class MainComponent implements OnInit {

  private wordCount: number = 0;
  private guessWord: Word;
  private isStarted: boolean = false;
  private points: number = 0;
  private countDown: number = 3;
  private correctAnswer:string = null;
  private timerSubscription: any = null;

  constructor(private _wordService: WordService, private _gameService: GameService) {

***REMOVED***

  startGame(type: string = 'quiz'): void {
    this._gameService.on(type)
      .subscribe(game => {

        /*GAME STARTED*/
        this.isStarted = true;
        this.points = 0;
        sessionStorage.setItem('points', '0');
        sessionStorage.setItem('isStarted', 'true');

        if(this.timerSubscription) {
          //stop countdown if exists
          this.timerSubscription.unsubscribe();
          this.countDown = null;
    ***REMOVED***

        //get random word when game starts
        this._gameService.nextWord()
          .subscribe((guessWord: Word) => {
            this.guessWord = guessWord;
            sessionStorage.setItem('guessWord', JSON.stringify(guessWord));
      ***REMOVED***);
  ***REMOVED***, err =>console.log(err));
***REMOVED***

  endGame(): void {
    this._gameService.over()
      .subscribe(gameData => {
        //clear word on game over
        this.onGameOver(gameData.isStarted)
  ***REMOVED***, err =>console.log(err));
***REMOVED***

  ngOnInit(): void {

    let isStarted = sessionStorage.getItem('isStarted');

    if (isStarted === 'undefined' || isStarted === null) {
      let timer = Observable.timer(1000, 1000).take(3);
      this.timerSubscription = timer.subscribe(t => this.tickerFunc(t));
***REMOVED***
    else {
      this.countDown = null;
      this.guessWord = JSON.parse(sessionStorage.getItem('guessWord'));
      this.points = JSON.parse(sessionStorage.getItem('points'));

***REMOVED***
    this._gameService.status()
      .subscribe(game => {
        this.isStarted = game.isStarted;
        sessionStorage.setItem('isStarted', game.isStarted)
  ***REMOVED***);

    this._wordService.count()
      .subscribe(result => {
        this.wordCount = result.count;
  ***REMOVED***);

***REMOVED***

  buttonState(): boolean {
    return this.wordCount === 0;
***REMOVED***

  onGameOver(correctAnswer:string): void {
    this.isStarted = false;
    this.guessWord = null;
    this.correctAnswer = correctAnswer;
    sessionStorage.clear();
***REMOVED***

  tickerFunc(tick): void {
    this.countDown--;
    if (this.countDown <= 0) this.startGame();

***REMOVED***

}
