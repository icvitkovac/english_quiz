System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Word;
    return {
        setters:[],
        execute: function() {
            class Word {
                constructor(id, value, isHard, translations) {
                    this.id = id;
                    this.value = value;
                    this.isHard = isHard;
                    this.translations = translations;
                }
            }
            exports_1("Word", Word);
        }
    }
});
//# sourceMappingURL=word.js.map