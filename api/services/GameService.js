'use strict';
/* global Game, Word, GameBreakdown, Translation, _, ReportedTranslations */
module.exports = {

  on: function(gameData, errCb, successCb) {
    Game.create(gameData)
      .exec(function(err, gameData) {
        if (err) return errCb(err);
        return successCb(gameData);
      });
  },
  over: function(gameId, gamePoints, errCb, successCb) {
    Game.update(gameId, {active: false, gamePoints: gamePoints})
      .then(gameData => successCb(gameData))
      .catch(err => errCb(err));
  },

  findRandomWord: function(wordCount, authorQuery, gameData, errCb, successCb) {
    gameData = gameData || {};
    let randomQuestionId = Math.floor(Math.random() * (parseInt(wordCount, 10) - 1) + 1);

    Word.find(authorQuery)
      .populate('translations')
      .exec(function(err, wordData) {
        if (err) return errCb(err);

        if (wordData.length) wordData = wordData[randomQuestionId - 1];
        _.extend(wordData, gameData);

        wordData.translations = _.shuffle(wordData.translations);
        return successCb(wordData);
      });
  },

  highScores: function(errCb, successCb) {
    Game.find({practiceMode: false})
      .sort('gamePoints DESC')
      .populate('contenderId')
      .limit(10)
      .exec(function(err, highScores) {
        if (err) return errCb(err);
        return successCb(highScores);
      });
  },

  history: function(contenderId, errCb, successCb) {
    Game.find({contenderId: contenderId})
      .sort('gamePoints DESC')
      .limit(10)
      .exec(function(err, history) {
        if (err) return errCb(err);
        return successCb(history);
      });
  },

  breakdown: function(gameId, errCb, successCb) {
    GameBreakdown.find({gameId: gameId})
      .populate('questionId')
      .exec(function(err, breakdown) {
        if (err) return errCb(err);
        return successCb(breakdown);
      });
  },

  checkAnswer: function(translationId, gameId, errCb, successCb) {
    Translation.findOne(translationId)
      .exec(function(err, data) {
        if (err) return errCb(err);

        Game.findOne(gameId)
          .exec(function(err, game) {
            if (err) return errCb(err);

            game.breakdown.add({
              questionId: data.term,
              correct: data.isAnswer
            });

            game.save(function(err) {
              if (err) console.log(err);
              return successCb(data);
            });
          });
      });
  },

  report: function(translation, reporter, errCb, successCb) {
    Translation.findOneByValue(translation)
      .populate('term')
      .exec(function(err, translationData) {
        if (err) return errCb(err);

        if (translationData.term.author === reporter) {
          return errCb('You are the author!');
        }

        ReportedTranslations.create({reportedWord: translationData.term, reporter})
          .exec(function(err, updatedData) {
            if (err) return errCb(err);
            Notification.create({userId: translationData.term.author, code: 'reportedWord'})
              .exec(function(err, nData) {
                if (err) return errCb(err);
                return successCb(updatedData);
              });
          });
      });
  }
};
