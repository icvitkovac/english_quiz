import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'stats-component',
  providers: [GameService],
  templateUrl: './stats.component.html'
})


export class StatsComponent implements OnInit {

  private history = [];
  private breakdown = [];
  private highScores = [];
  private gameSelected: boolean;

  constructor(private _gameService: GameService) {

***REMOVED***

  ngOnInit(): void {
    this._gameService
      .history()
      .subscribe((history: any) => {
        this.history = history;
  ***REMOVED***);

    this._gameService
      .highScores()
      .subscribe((highScores: any) => {
        this.highScores = highScores;
  ***REMOVED***);
***REMOVED***

  onSelect(game): void {
    this._gameService
      .breakdown(game.id)
      .subscribe((breakdown: any) => {
        this.breakdown = breakdown;
        this.gameSelected = true;
  ***REMOVED***);

***REMOVED***

}
