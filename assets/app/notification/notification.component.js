System.register(['@angular/core', './notification.service'], function(exports_1, context_1) {
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
    var core_1, notification_service_1;
    var NotificationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            }],
        execute: function() {
            let NotificationComponent = class NotificationComponent {
                constructor(_notificationService) {
                    this._notificationService = _notificationService;
                    this._notifications = new Set();
                    _notificationService.noteAdded.subscribe(note => {
                        this._notifications.add(note);
                        if (note.autoClose)
                            setTimeout(() => { this.hide.bind(this)(note); }, 5000);
                    });
                }
                hide(note) {
                    if (this._notifications.has(note))
                        this._notifications.delete(note);
                }
            };
            NotificationComponent = __decorate([
                core_1.Component({
                    selector: 'notification',
                    templateUrl: 'app/notification/notification.component.html'
                }), 
                __metadata('design:paramtypes', [notification_service_1.NotificationService])
            ], NotificationComponent);
            exports_1("NotificationComponent", NotificationComponent);
        }
    }
});
//# sourceMappingURL=notification.component.js.map