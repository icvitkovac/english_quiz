import {Component, OnInit} from 'angular2/core';
import {Control, ControlGroup, FormBuilder} from 'angular2/common';
import {WordService} from '../services/word.service';
import {SettingsService} from '../services/settings.service';
import {Word} from '../models/word';
import {Settings} from '../models/settings';
import {WordDetailComponent} from '../word-detail/word-detail.component';
import {WordAddComponent} from '../word-add/word-add.component';
import {HighlightDirective} from '../directives/highlight.directive';
import 'rxjs/Rx';

@Component({
  selector: 'admin-form',
  providers: [WordService, SettingsService],
  directives: [WordDetailComponent, WordAddComponent, HighlightDirective],
  templateUrl: 'app/admin/admin.component.html'
})


export class AdminComponent implements OnInit {
  private searchField:Control;
  private coolForm:ControlGroup;
  private words:Word[];
  private settings:Settings;
  private selectedWord:Word;

  constructor(private _wordService:WordService, private fb:FormBuilder, private _settingsService:SettingsService) {
    this.searchField = new Control();
    this.coolForm = fb.group({search: this.searchField});

    this.searchField.valueChanges
      .debounceTime(400)
      .flatMap((term:string) => this._wordService.search(term))
      .subscribe((result:Word[]) => {
        this.words = result;
  ***REMOVED***);
***REMOVED***

  onSelect(word:Word):void {
    this.selectedWord = word;
***REMOVED***

  onDelete(word:Word, event:any):void {
    event.stopPropagation();

    this._wordService
      .destroy(word)
      .subscribe(() => {
        alert('Word deleted');
  ***REMOVED***);
***REMOVED***

  ngOnInit():void {
    this._settingsService.get()
      .subscribe((settings:Settings) => {
        this.settings = settings;
  ***REMOVED***);
***REMOVED***

  onSave(settings:Settings):void {
    this._settingsService
      .update(settings)
      .subscribe((settings:Settings) => {
        this.settings = settings;
        alert('Settings updated');
  ***REMOVED***);
***REMOVED***

}
