System.register(['@angular/core', '../../models/word', '../../services/word.service', '../../notification/notification.service', '../../notification/notification.component'], function(exports_1, context_1) {
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
    var core_1, word_1, word_service_1, notification_service_1, notification_component_1;
    var WordUpdateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***,
            function (word_1_1) {
                word_1 = word_1_1;
        ***REMOVED***,
            function (word_service_1_1) {
                word_service_1 = word_service_1_1;
        ***REMOVED***,
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
        ***REMOVED***,
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
        ***REMOVED***],
        execute: function() {
            let WordUpdateComponent = class WordUpdateComponent {
                constructor(_wordService, _notificationService) {
                    this._wordService = _wordService;
                    this._notificationService = _notificationService;
            ***REMOVED***
                onSave(word) {
                    this._wordService
                        .update(word)
                        .subscribe((updatedWord) => {
                        this.word = updatedWord;
                        this._notificationService.show({ type: 'success', message: 'Word successfully updated.', autoClose: true });
                ***REMOVED***);
            ***REMOVED***
      ***REMOVED***
            __decorate([
                core_1.Input(), 
                __metadata('design:type', word_1.Word)
            ], WordUpdateComponent.prototype, "word", void 0);
            WordUpdateComponent = __decorate([
                core_1.Component({
                    selector: 'word-update',
                    templateUrl: 'app/admin/word-update/word-update.component.html',
                    providers: [word_service_1.WordService, notification_service_1.NotificationService],
                    directives: [notification_component_1.NotificationComponent]
            ***REMOVED***), 
                __metadata('design:paramtypes', [word_service_1.WordService, notification_service_1.NotificationService])
            ], WordUpdateComponent);
            exports_1("WordUpdateComponent", WordUpdateComponent);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=word-update.component.js.map