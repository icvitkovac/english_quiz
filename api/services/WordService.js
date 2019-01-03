'use strict';
/* global Word, SettingsService */
module.exports = {

  create: function (value, user, translations, errCb, successCb) {
    let currentDate;
    let wordCreatedAt;

    if (user.locale === null || user.locale.startsWith('en')) return errCb('Translation language not set');

    Word.findOrCreate({
        value
      }, {
        value,
        author: user.id,
        languageCode: user.locale
      })
      .exec((err, wordData) => {
        if (err) return errCb(err);

        if (wordData.author !== user.id || Date.parse(wordData.updatedAt) !== Date.parse(wordData.createdAt)) {
          return successCb(409);
        }

        currentDate = new Date().getTime();
        wordCreatedAt = new Date(wordData.createdAt).getTime();

        // todo: not very scalable
        if ((currentDate - wordCreatedAt) > 3000) {
          return successCb(409);
        }

        // populate child collection
        wordData.translations.add(translations);

        wordData.save((err) => {
          if (err) return errCb(err);
          return successCb(wordData.value);
        });
      });
  },

  findOne: function (id, errCb, successCb) {
    Word.findOne(id)
      .populate('translations')
      .exec((err, WordData) => {
        if (err) return errCb(err);
        return successCb(WordData.translations.filter(value => value.isAnswer)[0].value);
      });
  },

  count: function (session, errCb, successCb) {
    let query;
    let userId = session.user.id;

    /** @function */
    function _countRequest() {
      query = session.settings.practiceMode ? {
        author: userId
      } : {
        languageCode: session.user.locale
      };
      Word.count(query)
        .exec((err, count) => {
          if (err) return errCb(err);
          session.wordCount = parseInt(count, 10);
          return successCb({
            count
          });
        });
    }

    if (!session.settings) {
      session.settings = {};
      SettingsService.init(userId,
        err => {
          return errCb(err);
        },
        settings => {
          session.settings = settings;
          if (session.settings.practiceMode) query = {
            author: userId
          };
          _countRequest();
        });
    } else {
      _countRequest();
    }
  },

  search: function (value, author, errCb, successCb) {
    Word.find({
        value: {
          startsWith: value
        },
        author: author
      })
      .limit(10)
      .sort('value ASC')
      .populate('translations')
      .exec((err, data) => {
        if (err) return errCb(err);
        return successCb(data[0]);
      });
  },

  update: function (reqObj, errCb, successCb) {
    var id = parseInt(reqObj.id, 10);
    delete reqObj.id;

    Word.update(id, reqObj)
      .exec((err, data) => {
        if (err) return errCb(err);
        return successCb(data[0]);
      });
  }
};