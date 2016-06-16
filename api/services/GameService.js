module.exports = {

  on: function (contenderId, errCb, successCb) {

    Game.create({contenderId: contenderId})
      .exec(function (err, gameData) {
        if (err) errCb(err);
        successCb(gameData);
      });


  },
  over: function (gameId, gamePoints, errCb, successCb) {

    Game.update(gameId, {active: false, gamePoints: gamePoints})
      .exec(function (err, gameData) {
        if (err) errCb(err);
        successCb(gameData);
      });

  },

  findRandomWord: function () {


  },

  highScores: function () {

  },

  history: function () {

  },

  breakdown: function () {

  },

  status: function () {

  },

  checkAnswer: function () {

  }
};
