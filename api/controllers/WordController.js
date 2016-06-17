/**
 * WordController
 *
 * @description :: Something

 */

'use strict';

module.exports = {


  create: function (req, res) {

    var reqObj = req.body, translations = [];

    for (let value of reqObj.translations) {
      translations.push({value: value})
    }
    translations[0].isAnswer = true;

    WordService.create(
      reqObj.value,
      req.session.user.id,
      translations,
      err => res.badRequest(err),
      wordData => {
        if (typeof wordData === 'number') {
          res.status(wordData);
          return res.send({message: 'Word already exists'});
        }
        return res.json(wordData)
      }
    );
  },

  count: function (req, res) {

    WordService.count(req.session, err => res.badRequest(err), count => res.json(count));

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

