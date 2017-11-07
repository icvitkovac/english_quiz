import { Component, OnInit } from '@angular/core';
import { Settings } from '../../models/settings';
import { SettingsService } from '../../services/settings.service';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../notification/notification.service';


@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [NotificationService, UserService, SettingsService]

})

export class SettingsComponent implements OnInit {

  private settings: Settings;
  private languages = [];
  private isLanguageSet = false;



  constructor(
    private _settingsService: SettingsService,
    private _notificationService: NotificationService,
    private _userService: UserService) {
  }

  ngOnInit(): void {
    this.isLanguageSet = window['Globals'].locale !== 'null' && !window['Globals'].locale.startsWith('en');

    if (!this.isLanguageSet) {
      this._settingsService.languages()
        .subscribe((languages: Object[]) => {
          for (const key in languages) {

            if (languages.hasOwnProperty(key)) {
              this.languages.push({ name: languages[key], value: key });
            }

          }

        });
    }
    this._settingsService.get()
      .subscribe((settings: Settings) => {
        this.settings = settings;
      });
  }

  onSave(settings: Settings): void {
    this._settingsService
      .update(settings)
      .subscribe((serviceSettings: Settings) => {
        this.settings = serviceSettings;
        this._notificationService.show({ type: 'success', message: 'Settings saved.', hasCloseButton: true, autoClose: true });

      });
  }

  updateUser(languageSelection: string): void {
    this._userService
      .setLocale(languageSelection)
      .subscribe((userData) => {
        this.isLanguageSet = true;
        window['Globals'].locale = userData.locale;

        this._notificationService.show({
          type: 'success',
          message: 'Language set, thank you very much!',
          hasCloseButton: true,
          autoClose: true
        });
      });
  }
}

