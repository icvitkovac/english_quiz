System.register(['@angular/core', '@angular/common', '../services/word.service', '../services/settings.service', '../services/user.service', '../word-detail/word-detail.component', '../word-add/word-add.component', '../directives/highlight.directive', '../notification/notification.service', '../notification/notification.component'], function(exports_1, context_1) {
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
    var core_1, common_1, word_service_1, settings_service_1, user_service_1, word_detail_component_1, word_add_component_1, highlight_directive_1, notification_service_1, notification_component_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***,
            function (common_1_1) {
                common_1 = common_1_1;
        ***REMOVED***,
            function (word_service_1_1) {
                word_service_1 = word_service_1_1;
        ***REMOVED***,
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
        ***REMOVED***,
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
        ***REMOVED***,
            function (word_detail_component_1_1) {
                word_detail_component_1 = word_detail_component_1_1;
        ***REMOVED***,
            function (word_add_component_1_1) {
                word_add_component_1 = word_add_component_1_1;
        ***REMOVED***,
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
        ***REMOVED***,
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
        ***REMOVED***,
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
        ***REMOVED***],
        execute: function() {
            let AdminComponent = class AdminComponent {
                constructor(_wordService, fb, _settingsService, _userService, _notificationService) {
                    this._wordService = _wordService;
                    this.fb = fb;
                    this._settingsService = _settingsService;
                    this._userService = _userService;
                    this._notificationService = _notificationService;
                    this.languages = [];
                    this.searchField = new common_1.Control();
                    this.coolForm = fb.group({ search: this.searchField });
                    this.searchField.valueChanges
                        .debounceTime(400)
                        .flatMap((term) => this._wordService.search(term))
                        .subscribe((result) => {
                        this.words = result;
                ***REMOVED***);
            ***REMOVED***
                onSelect(word) {
                    this.selectedWord = word;
            ***REMOVED***
                onDelete(word, event) {
                    event.stopPropagation();
                    this._wordService
                        .destroy(word)
                        .subscribe(() => {
                        this._notificationService.show({ type: 'success', message: 'Word deleted.', hasCloseButton: true, autoClose: true });
                ***REMOVED***);
            ***REMOVED***
                ngOnInit() {
                    this._settingsService.get()
                        .subscribe((settings) => {
                        this.settings = settings;
                ***REMOVED***);
                    if (JSON.parse(sessionStorage.getItem('changeLanguage')) === true) {
                        this._settingsService.languages()
                            .subscribe((languages) => {
                            for (var key in languages) {
                                this.languages.push({ name: languages[key], value: key });
                        ***REMOVED***
                    ***REMOVED***);
                ***REMOVED***
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
                        .subscribe((settings) => {
                        sessionStorage.removeItem('changeLanguage');
                        this._notificationService.show({ type: 'success', message: 'Language set, thank you very much!', hasCloseButton: true, autoClose: true });
                ***REMOVED***);
            ***REMOVED***
      ***REMOVED***
            AdminComponent = __decorate([
                core_1.Component({
                    selector: 'admin-form',
                    providers: [word_service_1.WordService, settings_service_1.SettingsService, user_service_1.UserService, notification_service_1.NotificationService],
                    directives: [word_detail_component_1.WordDetailComponent, word_add_component_1.WordAddComponent, highlight_directive_1.HighlightDirective, notification_component_1.NotificationComponent],
                    templateUrl: 'app/admin/admin.component.html'
            ***REMOVED***), 
                __metadata('design:paramtypes', [word_service_1.WordService, common_1.FormBuilder, settings_service_1.SettingsService, user_service_1.UserService, notification_service_1.NotificationService])
            ], AdminComponent);
            exports_1("AdminComponent", AdminComponent);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=admin.component.js.map