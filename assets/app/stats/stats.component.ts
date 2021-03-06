import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'stats-component',
  providers: [GameService],
  templateUrl: './stats.component.html'
})


export class StatsComponent implements OnInit {

  public history = [];
  public breakdown = [];
  public highScores = [];
  public gameSelected: boolean;

  constructor(private _gameService: GameService) {

  }

  ngOnInit(): void {
    this._gameService
      .history()
      .subscribe((history: any) => {
        this.history = history;
      });

    this._gameService
      .highScores()
      .subscribe((highScores: any) => {
        this.highScores = highScores;
      });
  }

  onSelect(game): void {
    this._gameService
      .breakdown(game.id)
      .subscribe((breakdown: any) => {
        this.breakdown = breakdown;
        this.gameSelected = true;
      });

  }

}
