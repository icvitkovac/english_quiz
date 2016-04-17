/**
 * WordController
 *
 * @description :: Server-side logic for managing words

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
      }
      else {
        Word.create({value: reqObj.word}).exec(function (err, data) {

          if (err) {
            res.badRequest();
          }

          var wordData = data;

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

            if (err) {
              res.badRequest();
            }
            return res.ok(wordData.value);
          });

        });
      }
    });

  },

  find: function (req, res) {

    Word.find(req.query).populate('translations').exec(function (err, data) {
      if (err) res.badRequest(err);
      return res.ok(data);
    });
  },

  update: function (req, res) {
    var reqObj = req.body;
    var id = parseInt(reqObj.id);
    delete reqObj.id;

    Word.update(id, reqObj)
      .exec(function (err, data) {
        if (err) res.badRequest(err);
        return res.ok(data);
      });
  }

};

