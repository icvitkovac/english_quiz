System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Settings;
    return {
        setters:[],
        execute: function() {
            class Settings {
                constructor(questionsNumber, practiceMode, onlyHard, userId) {
                    this.questionsNumber = questionsNumber;
                    this.practiceMode = practiceMode;
                    this.onlyHard = onlyHard;
                    this.userId = userId;
                }
            }
            exports_1("Settings", Settings);
        }
    }
});
//# sourceMappingURL=settings.js.map