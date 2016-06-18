System.register(['angular2/core', 'angular2/common', '../services/word.service', '../services/settings.service', '../word-detail/word-detail.component', '../word-add/word-add.component', '../directives/highlight.directive', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, common_1, word_service_1, settings_service_1, word_detail_component_1, word_add_component_1, highlight_directive_1;
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
            function (word_detail_component_1_1) {
                word_detail_component_1 = word_detail_component_1_1;
        ***REMOVED***,
            function (word_add_component_1_1) {
                word_add_component_1 = word_add_component_1_1;
        ***REMOVED***,
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
        ***REMOVED***,
            function (_1) {}],
        execute: function() {
            let AdminComponent = class AdminComponent {
                constructor(wordService, fb, _settingsService) {
                    this.wordService = wordService;
                    this.fb = fb;
                    this._settingsService = _settingsService;
                    this.searchField = new common_1.Control();
                    this.coolForm = fb.group({ search: this.searchField });
                    this.searchField.valueChanges
                        .debounceTime(400)
                        .flatMap((term) => this.wordService.search(term))
                        .subscribe((result) => {
                        this.words = result;
                ***REMOVED***);
            ***REMOVED***
                onSelect(word) {
                    this.selectedWord = word;
            ***REMOVED***
                onDelete(word, event) {
                    event.stopPropagation();
                    this.wordService
                        .destroy(word)
                        .subscribe(() => {
                        alert('Word deleted');
                ***REMOVED***);
            ***REMOVED***
                ngOnInit() {
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
                        alert('Settings updated');
                ***REMOVED***);
            ***REMOVED***
      ***REMOVED***
            AdminComponent = __decorate([
                core_1.Component({
                    selector: 'admin-form',
                    providers: [word_service_1.WordService, settings_service_1.SettingsService],
                    directives: [word_detail_component_1.WordDetailComponent, word_add_component_1.WordAddComponent, highlight_directive_1.HighlightDirective],
                    templateUrl: 'app/admin/admin.component.html'
            ***REMOVED***), 
                __metadata('design:paramtypes', [word_service_1.WordService, common_1.FormBuilder, settings_service_1.SettingsService])
            ], AdminComponent);
            exports_1("AdminComponent", AdminComponent);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=admin.component.js.map