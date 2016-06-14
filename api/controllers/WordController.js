/**
 * WordController
 *
 * @description :: Something

 */

'use strict';

module.exports = {


  create: function (req, res) {

    var reqObj = req.body, translations = [];

    Word.findOrCreate({value: reqObj.value}, {value: reqObj.value, author: req.session.user.id})
      .exec(function (err, wordData) {
        if (err) res.badRequest(err);

        for (let value of reqObj.translations) {
          translations.push({value: value})
        }

        translations[0].isAnswer = true;

        //populate child collection

        wordData.translations.add(translations);

        wordData.save(function (err) {
          if (err) res.badRequest(err);
          return res.json(wordData.value);

        });

      });

  },

  find: function (req, res) {


    Word.find(req.query).populate('translations').exec(function (err, data) {
      if (err) res.badRequest(err);
      return res.json(data);
    });
  },

  count: function (req, res) {

    Word.count({author: req.session.user.id}).exec(function (err, data) {
      if (err) res.badRequest(err);
      req.session.wordCount = parseInt(data);
      return res.json({count: data});
    });
  },

  search: function (req, res) {


    Word.find({
      value: {'startsWith': req.query.value},
      author: req.session.user.id
    })
      .populate('translations')
      .exec(function (err, data) {
        if (err) res.badRequest(err);
        return res.json(data);
      });
  },

  update: function (req, res) {
    var reqObj = req.body;
    var id = parseInt(reqObj.id);
    delete reqObj.id;

    Word.update(id, reqObj)
      .exec(function (err, data) {
        if (err) res.badRequest(err);
        return res.json(data);
      });
  }

};

