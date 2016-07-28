import {Component, OnInit} from '@angular/core';
import {Control, ControlGroup, FormBuilder} from '@angular/common';
import {WordService} from '../services/word.service';
import {SettingsService} from '../services/settings.service';
import {UserService} from '../services/user.service';
import {Word} from '../models/word';
import {Settings} from '../models/settings';
import {WordDetailComponent} from '../word-detail/word-detail.component';
import {WordAddComponent} from '../word-add/word-add.component';
import {HighlightDirective} from '../directives/highlight.directive';
import { NotificationService } from '../notification/notification.service';
import {NotificationComponent} from '../notification/notification.component';

@Component({
  selector: 'admin-form',
  providers: [WordService, SettingsService, UserService, NotificationService],
  directives: [WordDetailComponent, WordAddComponent, HighlightDirective, NotificationComponent],
  templateUrl: 'app/admin/admin.component.html'
})


export class AdminComponent implements OnInit {
  private searchField: Control;
  private coolForm: ControlGroup;
  private words: Word[];
  private settings: Settings;
  private selectedWord: Word;
  private languages = [];

  constructor(private _wordService: WordService, 
  private fb: FormBuilder, 
  private _settingsService: SettingsService, 
  private _userService: UserService,
  private _notificationService: NotificationService
  ) {
    this.searchField = new Control();
    this.coolForm = fb.group({ search: this.searchField });

    this.searchField.valueChanges
      .debounceTime(400)
      .flatMap((term: string) => this._wordService.search(term))
      .subscribe((result: Word[]) => {
        this.words = result;
  ***REMOVED***);
***REMOVED***

  onSelect(word: Word): void {
    this.selectedWord = word;
***REMOVED***

  onDelete(word: Word, event: any): void {
    event.stopPropagation();

    this._wordService
      .destroy(word)
      .subscribe(() => {
        this._notificationService.show({ type: 'success', message: 'Word deleted.', hasCloseButton: true, autoClose: true });
  ***REMOVED***);
***REMOVED***

  ngOnInit(): void {
    this._settingsService.get()
      .subscribe((settings: Settings) => {
        this.settings = settings;
  ***REMOVED***);

    if (JSON.parse(sessionStorage.getItem('changeLanguage')) === true) {
      this._settingsService.languages()
        .subscribe((languages) => {
          for (var key in languages) {
            this.languages.push({ name: languages[key], value: key })
      ***REMOVED***
    ***REMOVED***);
***REMOVED***
***REMOVED***

  onSave(settings: Settings): void {
    this._settingsService
      .update(settings)
      .subscribe((settings: Settings) => {
        this.settings = settings;
          this._notificationService.show({ type: 'success', message: 'Settings saved.', hasCloseButton: true, autoClose: true });

  ***REMOVED***);
***REMOVED***

  updateUser(languageSelection:string): void {
    this._userService
      .setLocale(languageSelection)
      .subscribe((settings: Settings) => {
        sessionStorage.removeItem('changeLanguage');
          this._notificationService.show({ type: 'success', message: 'Language set, thank you very much!', hasCloseButton: true, autoClose: true });
  ***REMOVED***);
***REMOVED***
}

