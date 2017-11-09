import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';
import { GameService } from '../services/game.service';
import { Word } from '../models/word';


@Component({
  selector: 'main-component',
  providers: [WordService, GameService],
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {

  public wordCount = 0;
  public guessWord: Word;
  public isStarted = false;
  private points = 0;
  public correctAnswer = null;

  constructor(private _wordService: WordService, private _gameService: GameService) {

***REMOVED***

  startGame(type: string = 'quiz'): void {
    this._gameService.on(type)
      .subscribe(game => {

        /*GAME STARTED*/
        this.isStarted = true;
        sessionStorage.setItem('points', '0');
        sessionStorage.setItem('isStarted', 'true');

        // get random word when game starts
        this._gameService.nextWord()
          .subscribe((guessWord: Word) => {
            this.guessWord = guessWord;
            sessionStorage.setItem('guessWord', JSON.stringify(guessWord));
            sessionStorage.setItem('points', JSON.stringify(this.points));

      ***REMOVED***);
  ***REMOVED***, err => console.log(err));
***REMOVED***

  endGame(): void {
    this._gameService.over()
      .subscribe(gameData => {
        // clear word on game over
        this.onGameOver(gameData.correctAnswer);
  ***REMOVED***, err => console.log(err));
***REMOVED***

  ngOnInit(): void {


    this._gameService.status()
      .subscribe(game => {
        this.isStarted = game.isStarted;
        sessionStorage.setItem('isStarted', game.isStarted)

        if (this.isStarted) {
          this.guessWord = JSON.parse(sessionStorage.getItem('guessWord'));
          this.points = JSON.parse(sessionStorage.getItem('points'));
    ***REMOVED***

  ***REMOVED***);

    this._wordService.count()
      .subscribe(result => {
        this.wordCount = result.count;
  ***REMOVED***);

***REMOVED***

  buttonState(): boolean {
    return this.wordCount === 0;
***REMOVED***

  onGameOver(correctAnswer: string): void {
    this.isStarted = false;
    this.guessWord = null;
    this.correctAnswer = correctAnswer;
    sessionStorage.clear();
***REMOVED***

  reportTranslation() {
    this._gameService.report(this.correctAnswer)
      .subscribe(result => alert('Reported! Thank you.'),
      err => console.log(err));
***REMOVED***

}
