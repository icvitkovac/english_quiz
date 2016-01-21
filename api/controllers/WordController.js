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

    Word.find({value: reqObj.word}).exec(function (err, data) {
      if (err) res.badRequest(err);
      if (data.length) {
        res.status(302);
        res.send('Word already added');
  ***REMOVED***
      else {
        Word.create({value: reqObj.word}).exec(function (err, data) {

          if (err) {
            res.badRequest();
      ***REMOVED***

          var wordData = data;

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

            if (err) {
              res.badRequest();
        ***REMOVED***
            return res.ok(wordData.value);
      ***REMOVED***);

    ***REMOVED***);
  ***REMOVED***
***REMOVED***);

***REMOVED***,

  find: function (req, res) {

    Word.find(req.query).populate('translations').exec(function (err, data) {
      if (err) res.badRequest(err);
      return res.ok(data);
***REMOVED***);
***REMOVED***,

  update: function (req, res) {
    var reqObj = req.body;
    var id = parseInt(reqObj.id);
    delete reqObj.id;

    Word.update(id, reqObj)
      .exec(function (err, data) {
        if (err) res.badRequest(err);
        return res.ok(data);
  ***REMOVED***);
***REMOVED***

***REMOVED***

