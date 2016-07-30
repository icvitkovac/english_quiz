System.register(['@angular/core', '../../services/settings.service', '../../services/user.service', '../../notification/notification.service', '../../notification/notification.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***;
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***;
    var core_1, settings_service_1, user_service_1, notification_service_1, notification_component_1;
    var SettingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***,
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
        ***REMOVED***,
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
        ***REMOVED***,
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
        ***REMOVED***,
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
        ***REMOVED***],
        execute: function() {
            let SettingsComponent = class SettingsComponent {
                constructor(_settingsService, _notificationService, _userService) {
                    this._settingsService = _settingsService;
                    this._notificationService = _notificationService;
                    this._userService = _userService;
                    this.languages = [];
                    this.isLanguageSet = false;
            ***REMOVED***
                ngOnInit() {
                    this.isLanguageSet = window['Globals'].locale !== 'null' && !window['Globals'].locale.startsWith('en');
                    if (!this.isLanguageSet) {
                        this._settingsService.languages()
                            .subscribe((languages) => {
                            for (var key in languages) {
                                this.languages.push({ name: languages[key], value: key });
                        ***REMOVED***
                    ***REMOVED***);
                ***REMOVED***
                    this._settingsService.get()
                        .subscribe((settings) => {
                        this.settings = settings;
                ***REMOVED***);
            ***REMOVED***
                onSave(settings) {
                    this._settingsService
                        .update(settings)
                        .subscribe((settings) => {
                        this.settings = settings;
                        this._notificationService.show({ type: 'success', message: 'Settings saved.', hasCloseButton: true, autoClose: true });
                ***REMOVED***);
            ***REMOVED***
                updateUser(languageSelection) {
                    this._userService
                        .setLocale(languageSelection)
                        .subscribe((userData) => {
                        this.isLanguageSet = true;
                        window['Globals'].locale = userData.locale;
                        this._notificationService.show({ type: 'success', message: 'Language set, thank you very much!', hasCloseButton: true, autoClose: true });
                ***REMOVED***);
            ***REMOVED***
      ***REMOVED***
            SettingsComponent = __decorate([
                core_1.Component({
                    selector: 'settings',
                    templateUrl: 'app/admin/settings/settings.component.html',
                    directives: [notification_component_1.NotificationComponent],
                    providers: [settings_service_1.SettingsService, user_service_1.UserService, notification_service_1.NotificationService]
            ***REMOVED***), 
                __metadata('design:paramtypes', [settings_service_1.SettingsService, notification_service_1.NotificationService, user_service_1.UserService])
            ], SettingsComponent);
            exports_1("SettingsComponent", SettingsComponent);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=settings.component.js.map