/**
 * WordController
 *
 * @description :: Server-side logic for managing words
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res) {

    var reqObj = req.body,
      answerId = parseInt(reqObj.answerIndex), translations = [];

    Word.create({value: reqObj.word}).exec(function (err, data) {

      if (err) {
        res.badRequest();
  ***REMOVED***

      for (var i = 0; i < reqObj.translations.length; i++) {
        var tmpObj = {***REMOVED***
        tmpObj.term = data.id;
        if (i === answerId) {
          tmpObj.isAnswer = true;
    ***REMOVED***

        tmpObj.value = reqObj.translations[i];
        translations.push(tmpObj);
  ***REMOVED***

      Translation.create(translations).exec(function (err, data) {
        //return res.ok(data, 'admin');
        return res.ok();
  ***REMOVED***);

***REMOVED***);

***REMOVED***,

  find: function (req, res) {
    Word.find().populate('translations').exec(function (err, data) {
      return res.ok(data);
***REMOVED***);
***REMOVED***

***REMOVED***

