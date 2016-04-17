/**
 * Created by c on 1/25/16.
 */

var EnglishQuiz = new Marionette.Application({

  channelName: 'english_quiz',

  initialize: function (options) {

    options = options || {};


    this.module('englishModule');

  },

  stop: function () {

    if (this.isStarted) {
      this.isStarted = false;

      _.each(this.submodules, function (module) {
        module.stop();
      });

      this.getRegionManager().removeRegions();
      this.vent.trigger('before:destroy');

    }

  },

  onBeforeStart: function (options) {

    this.addRegions({
      notesRegion: '#words'
    });


  },

  onStart: function () {
    this.isStarted = true;
  }
});
