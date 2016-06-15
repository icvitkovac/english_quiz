import {Component, OnInit} from 'angular2/core';
import {GameService} from '../services/game.service';
import { HighlightDirective } from '../directives/highlight.directive';
import 'rxjs/Rx';

@Component({
  selector: 'stats-component',
  providers: [GameService],
  directives: [HighlightDirective],
  templateUrl: 'app/stats/stats.component.html'
})


export class StatsComponent implements OnInit {

  history = [];
  breakdown = [];
  highScores = [];
  gameSelected:boolean;

  constructor(private _gameService:GameService) {

***REMOVED***

  ngOnInit() {
    this._gameService
      .history()
      .subscribe((history:any) => {
        this.history = history;
  ***REMOVED***);

    this._gameService
      .highScores()
      .subscribe((highScores:any) => {
        this.highScores = highScores;
  ***REMOVED***);
***REMOVED***

  onSelect(game) {
    this._gameService
      .breakdown(game.id)
      .subscribe((breakdown:any) => {
        this.breakdown = breakdown;
        this.gameSelected = true;
  ***REMOVED***);

***REMOVED***

}
