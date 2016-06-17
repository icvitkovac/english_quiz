module.exports = {

  create: function (value, author, translations, errCb, successCb) {
    let currentDate, wordCreatedAt;

    Word.findOrCreate({value: value}, {value: value, author: author})
      .exec(function (err, wordData) {
        if (err) return errCb(err);

        if (wordData.author !== author || Date.parse(wordData.updatedAt) !== Date.parse(wordData.createdAt)) {
          return successCb(409);
        }

        currentDate = new Date().getTime();
        wordCreatedAt = new Date(wordData.createdAt).getTime();
        
        //todo: not very scalable
        if ((currentDate - wordCreatedAt) > 3000) {
          return successCb(409);
        }

        //populate child collection
        wordData.translations.add(translations);

        wordData.save(function (err) {
          if (err) return errCb(err);
          return successCb(wordData.value)
        });
      });
  },

  count: function (session, errCb, successCb) {

    var query, userId = session.user.id;

    function _countRequest() {
      session.settings.practiceMode ? query = {author: userId} : {};
      Word.count(query)
        .exec(function (err, count) {
          if (err)  return errCb(err);
          session.wordCount = parseInt(count);
          return successCb({count: count});
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
          if (session.settings.practiceMode) query = {author: userId};
          _countRequest();
        });
    }

    else {
      _countRequest();
    }
  },

  search: function () {

  },

  update: function () {

  }
};
