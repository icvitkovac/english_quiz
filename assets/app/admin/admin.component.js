System.register(['@angular/core', '@angular/common', '../services/word.service', './word-update/word-update.component', './word-add/word-add.component', './settings/settings.component', '../directives/highlight.directive', '../notification/notification.service', '../notification/notification.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, word_service_1, word_update_component_1, word_add_component_1, settings_component_1, highlight_directive_1, notification_service_1, notification_component_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (word_service_1_1) {
                word_service_1 = word_service_1_1;
            },
            function (word_update_component_1_1) {
                word_update_component_1 = word_update_component_1_1;
            },
            function (word_add_component_1_1) {
                word_add_component_1 = word_add_component_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
            }],
        execute: function() {
            let AdminComponent = class AdminComponent {
                constructor(_wordService, fb, _notificationService) {
                    this._wordService = _wordService;
                    this.fb = fb;
                    this._notificationService = _notificationService;
                    this.searchField = new common_1.Control();
                    this.coolForm = fb.group({ search: this.searchField });
                    this.searchField.valueChanges
                        .debounceTime(400)
                        .flatMap((term) => this._wordService.search(term))
                        .subscribe((result) => {
                        this.words = result;
                    });
                }
                onSelect(word) {
                    this.selectedWord = word;
                }
                onDelete(word, event) {
                    event.stopPropagation();
                    this._wordService
                        .destroy(word)
                        .subscribe(() => {
                        this._notificationService.show({ type: 'success', message: 'Word deleted.', hasCloseButton: true, autoClose: true });
                    });
                }
            };
            AdminComponent = __decorate([
                core_1.Component({
                    selector: 'admin-component',
                    providers: [word_service_1.WordService, notification_service_1.NotificationService],
                    directives: [word_update_component_1.WordUpdateComponent, word_add_component_1.WordAddComponent, settings_component_1.SettingsComponent, highlight_directive_1.HighlightDirective, notification_component_1.NotificationComponent],
                    templateUrl: 'app/admin/admin.component.html'
                }), 
                __metadata('design:paramtypes', [word_service_1.WordService, common_1.FormBuilder, notification_service_1.NotificationService])
            ], AdminComponent);
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin.component.js.map