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

  constructor(private _gameService:GameService) {

  }

  ngOnInit() {
    this._gameService
      .history()
      .subscribe((history:any) => {
        this.history = history;
      });
  }

  onSelect(game) {
    this._gameService
      .breakdown(game.id)
      .subscribe((breakdown:any) => {
        this.breakdown = breakdown;
      });

  }

}
