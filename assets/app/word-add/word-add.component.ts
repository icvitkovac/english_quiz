import {Component, Input} from 'angular2/core';
import {WordService} from '../services/word.service';
import {Word} from '../models/word';

@Component({
  selector: 'word-add',
  templateUrl: 'app/word-add/word-add.component.html',
  providers: [WordService]
})

export class WordAddComponent {
  @Input()
  private submitted = false;
  // private active = true;
  private errorMessage:string;
  private word = new Word(0, '', false, []);

  constructor(private _wordService:WordService) {
  }

  onSubmit():void {
    this.submitted = true;
    this._wordService
      .add(this.word)
      .subscribe(() => {
        alert('word added');
      }, err => {
        this.errorMessage = err
      });

  }

}










