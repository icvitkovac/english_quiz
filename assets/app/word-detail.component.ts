import {Component, Input} from 'angular2/core';
import {Word} from './word';
@Component({
  selector: 'my-word-detail',
  template: `
    <div *ngIf="word">
      <h2>{{word.value}} details!</h2>
      <div><label>id: </label>{{word.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="word.value" placeholder="name"/>
      </div>
    </div>
  `
})
export class WordDetailComponent {
  @Input()
  word: Word;
}
