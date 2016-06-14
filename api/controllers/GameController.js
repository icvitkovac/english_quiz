/**
 * GameController
 *
 * @description :: Something

 */

'use strict';

/*
 *@private
 */


function _findRandomWord(req, res, gameData) {
  gameData = gameData || {};
  let randomQuestionId = Math.floor(Math.random() * (parseInt(req.session.wordCount) - 1) + 1);

  Word.findOne({id: randomQuestionId, author: req.session.user.id})
    .populate('translations')
    .exec(function (err, data) {
      if (err) res.badRequest(err);

      _.extend(data, gameData);
      return res.json(data);
    });
}


/*
 *@PUBLIC
 */

module.exports = {

  next: function (req, res) {
    _findRandomWord(req, res);
  },


  on: function (req, res) {

    if (!req.session.game || !req.session.game.id) {

      Game.create({contenderId: req.session.user.id})
        .exec(function (err, gameData) {
          if (err) res.badRequest(err);

          req.session.game = gameData;
          res.json({
            isStarted: gameData.active,
            points: gameData.gamePoints
          });
        });
    }

    else {

      Game.update(req.session.game.id, {active: false, gamePoints: req.session.game.gamePoints})
        .exec(function (err, gameData) {
          if (err) res.badRequest(err);

          req.session.game = {};

          res.json({
            isStarted: false,
            points: gameData[0].gamePoints
          });

        });
    }
  },

  history: function (req, res) {

    Game.find({contenderId: req.session.user.id})
      .sort('gamePoints DESC')
      .limit(10)
      .exec(function (err, history) {
        if (err) res.badRequest(err);

        res.json(history);

      });

  },

  breakdown: function (req, res) {

    GameBreakdown.find({gameId: req.query.gameId})
      .populate('questionId')
      .exec(function (err, breakdown) {
        if (err) res.badRequest(err);
        res.json(breakdown);

      });

  },

  status: function (req, res) {

    res.ok({isStarted: req.session.game && req.session.game.active});
  },

  checkAnswer: function (req, res) {
    let id = req.param('translationId');


    Translation.findOne(id).exec(function (err, data) {
      if (err) res.badRequest(err);
      _calculatePoints(data);
    });


    //success callback
    function _calculatePoints(data) {

      function _updateGameStats(correct) {

        Game.findOne(req.session.game.id).exec(function (err, game) {
          if (err) res.badRequest(err)

          game.breakdown.add({
            questionId: data.term,
            correct: correct
          });

          game.save(function (err) {
            if (err) console.log(err);
          });

        });

      }

      if (data.isAnswer) {

        _updateGameStats(true);

        req.session.game.gamePoints += 1;
        //sending new word
        _findRandomWord(req, res, {
          points: req.session.game.gamePoints,
          isAnswer: true
        });
      }

      else {

        _updateGameStats(false);

        req.session.game.gamePoints ? req.session.game.gamePoints -= 0.5 : 0;

        res.json({
          points: req.session.game.gamePoints,
          isAnswer: false
        });
      }

    }

  }

};

