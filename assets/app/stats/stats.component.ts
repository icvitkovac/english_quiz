import {Component, OnInit} from 'angular2/core';
import {GameService} from '../services/game.service'
import 'rxjs/Rx';

@Component({
  selector: 'stats-component',
  providers: [GameService],
  templateUrl: 'app/stats/stats.component.html'
})


export class StatsComponent implements OnInit {

  history = [];
  breakdown = [];
  gameSelected:boolean;

  constructor(private _gameService:GameService) {

***REMOVED***

  ngOnInit() {
    this._gameService
      .history()
      .subscribe((history:any) => {
        this.history = history;
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
