/**
 * WordController
 *
 * @description :: Server-side logic for managing words
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res) {
    console.log(req.body);
    Word.create({value: req.body.word}).exec(function (err, data) {

      var translations = [];

      req.body.translations[parseInt(req.body.isAnswer)].isAnswer = true;

      for (var i = 0; i < req.body.translations.length; i++) {
        req.body.translations[i].term = data.id;
  ***REMOVED***

      Translation.create(req.body.translations).exec(function (err, data) {

        res.ok(data);
  ***REMOVED***);

***REMOVED***);

***REMOVED***

***REMOVED***

