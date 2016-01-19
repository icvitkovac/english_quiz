/**
 * WordController
 *
 * @description :: Server-side logic for managing words
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res) {

    var reqObj = JSON.parse(JSON.stringify(req.body)),
      answerId = parseInt(reqObj.isAnswer), translations = [];


    Word.create({value: reqObj.word}).exec(function (err, data) {


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
        return res.ok(data, 'admin');
  ***REMOVED***);

***REMOVED***);

***REMOVED***,

  find: function (req, res) {
    Word.find().populate('translations').exec(function (err, data) {
      return res.ok(data);
***REMOVED***);
***REMOVED***

***REMOVED***

