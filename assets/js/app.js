/**
 * Created by c on 1/25/16.
 */

var EnglishQuiz = new Marionette.Application({

  channelName: 'english_quiz',

  initialize: function (options) {

    options = options || {***REMOVED***


    this.module('englishModule');

***REMOVED***,

  stop: function () {

    if (this.isStarted) {
      this.isStarted = false;

      _.each(this.submodules, function (module) {
        module.stop();
  ***REMOVED***);

      this.getRegionManager().removeRegions();
      this.vent.trigger('before:destroy');

***REMOVED***

***REMOVED***,

  onBeforeStart: function (options) {

    this.addRegions({
      notesRegion: '#words'
***REMOVED***);


***REMOVED***,

  onStart: function () {
    this.isStarted = true;
***REMOVED***
});
