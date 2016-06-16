'use strict';
module.exports = {

  on: function (contenderId, errCb, successCb) {

    Game.create({contenderId: contenderId})
      .exec(function (err, gameData) {
        if (err) return errCb(err);
        return successCb(gameData);
      });


  },
  over: function (gameId, gamePoints, errCb, successCb) {

    Game.update(gameId, {active: false, gamePoints: gamePoints})
      .then((gameData) => successCb(gameData))
      .catch((err) => errCb(err));
  },

  findRandomWord: function (wordCount, author, gameData, errCb, successCb) {

    gameData = gameData || {};
    let randomQuestionId = Math.floor(Math.random() * (parseInt(wordCount) - 1) + 1);

    Word.find({author: author})
      .populate('translations')
      .exec(function (err, data) {
        if (err) return errCb(err);

        if (data.length) data = data[randomQuestionId - 1];
        _.extend(data, gameData);
        return successCb(data);
      });


  },

  highScores: function (errCb, successCb) {

    Game.find()
      .sort('gamePoints DESC')
      .populate('contenderId')
      .limit(10)
      .exec(function (err, highScores) {
        if (err) return errCb(err);
        return successCb(highScores);
      });

  },

  history: function (contenderId, errCb, successCb) {

    Game.find({contenderId: contenderId})
      .sort('gamePoints DESC')
      .limit(10)
      .exec(function (err, history) {
        if (err) return errCb(err);
        return successCb(history);
      });

  },

  breakdown: function (gameId, errCb, successCb) {

    GameBreakdown.find({gameId: gameId})
      .populate('questionId')
      .exec(function (err, breakdown) {
        if (err) return errCb(err);
        return successCb(breakdown);
      });

  },

  checkAnswer: function () {

  }
};
