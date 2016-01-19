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
      }

      for (var i = 0; i < reqObj.translations.length; i++) {
        var tmpObj = {};
        tmpObj.term = data.id;
        if (i === answerId) {
          tmpObj.isAnswer = true;
        }

        tmpObj.value = reqObj.translations[i];
        translations.push(tmpObj);
      }

      Translation.create(translations).exec(function (err, data) {
        //return res.ok(data, 'admin');
        return res.ok();
      });

    });

  },

  find: function (req, res) {
    Word.find().populate('translations').exec(function (err, data) {
      return res.ok(data);
    });
  }

};

