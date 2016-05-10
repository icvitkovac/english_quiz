import {Component, Input} from 'angular2/core';
import {Word} from './word';
@Component({
  selector: 'my-word-detail',
  templateUrl: 'app/word-detail.component.html'
})
export class WordDetailComponent {
  @Input()
  word:Word;
}
