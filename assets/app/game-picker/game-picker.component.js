System.register(['@angular/core', '@angular/router', '../notification/notification.service', '../notification/notification.component'], function(exports_1, context_1) {
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
    var core_1, router_1, notification_service_1, notification_component_1;
    var GamePickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
            }],
        execute: function() {
            let GamePickerComponent = class GamePickerComponent {
                constructor(_notificationService) {
                    this._notificationService = _notificationService;
                }
                ngOnInit() {
                    this._notificationService.show({ type: 'warn', message: 'Hey there', hasCloseButton: true });
                }
            };
            GamePickerComponent = __decorate([
                core_1.Component({
                    selector: 'selector',
                    directives: [router_1.ROUTER_DIRECTIVES, notification_component_1.NotificationComponent],
                    providers: [notification_service_1.NotificationService],
                    templateUrl: 'app/game-picker/game-picker.component.html'
                }), 
                __metadata('design:paramtypes', [notification_service_1.NotificationService])
            ], GamePickerComponent);
            exports_1("GamePickerComponent", GamePickerComponent);
        }
    }
});
//# sourceMappingURL=game-picker.component.js.map