System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Settings;
    return {
        setters:[],
        execute: function() {
            class Settings {
                constructor(questionsNumber, practiceMode, onlyHard, userId, id) {
                    this.practiceMode = practiceMode;
                    this.onlyHard = onlyHard;
                    this.userId = userId;
                    this.id = id;
                }
            }
            exports_1("Settings", Settings);
        }
    }
});
//# sourceMappingURL=settings.js.map