System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Notification;
    return {
        setters:[],
        execute: function() {
            class Notification {
                constructor(type = '', message = '') {
                    this.type = type;
                    this.message = message;
                }
            }
            exports_1("Notification", Notification);
        }
    }
});
//# sourceMappingURL=notification.model.js.map