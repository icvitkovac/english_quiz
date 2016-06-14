/**
 * GameController
 *
 * @description :: Something

 */

***REMOVED***

/*
 *@private
 */


function _findRandomWord(req, res, gameData) {
  gameData = gameData || {***REMOVED***
  let randomQuestionId = Math.floor(Math.random() * (parseInt(req.session.wordCount) - 1) + 1);

  Word.findOne({id: randomQuestionId, author: req.session.user.id})
    .populate('translations')
    .exec(function (err, data) {
      if (err) res.badRequest(err);

      _.extend(data, gameData);
      return res.json(data);
***REMOVED***);
}


/*
 *@PUBLIC
 */

module.exports = {

  next: function (req, res) {
    _findRandomWord(req, res);
***REMOVED***,


  on: function (req, res) {

    if (!req.session.game || !req.session.game.id) {

      Game.create({contenderId: req.session.user.id})
        .exec(function (err, gameData) {
          if (err) res.badRequest(err);

          req.session.game = gameData;
          res.json({
            isStarted: gameData.active,
            points: gameData.gamePoints
      ***REMOVED***);
    ***REMOVED***);
***REMOVED***

    else {

      Game.update(req.session.game.id, {active: false, gamePoints: req.session.game.gamePoints})
        .exec(function (err, gameData) {
          if (err) res.badRequest(err);

          req.session.game = {***REMOVED***

          res.json({
            isStarted: false,
            points: gameData[0].gamePoints
      ***REMOVED***);

    ***REMOVED***);
***REMOVED***
***REMOVED***,

  history: function (req, res) {

    Game.find({contenderId: req.session.user.id})
      .sort('gamePoints DESC')
      .limit(10)
      .exec(function (err, history) {
        if (err) res.badRequest(err);

        res.json(history);

  ***REMOVED***);

***REMOVED***,

  breakdown: function (req, res) {

    GameBreakdown.find({gameId: req.query.gameId})
      .populate('questionId')
      .exec(function (err, breakdown) {
        if (err) res.badRequest(err);
        res.json(breakdown);

  ***REMOVED***);

***REMOVED***,

  status: function (req, res) {

    res.ok({isStarted: req.session.game && req.session.game.active});
***REMOVED***,

  checkAnswer: function (req, res) {
    let id = req.param('translationId');


    Translation.findOne(id).exec(function (err, data) {
      if (err) res.badRequest(err);
      _calculatePoints(data);
***REMOVED***);


    //success callback
    function _calculatePoints(data) {

      function _updateGameStats(correct) {

        Game.findOne(req.session.game.id).exec(function (err, game) {
          if (err) res.badRequest(err)

          game.breakdown.add({
            questionId: data.term,
            correct: correct
      ***REMOVED***);

          game.save(function (err) {
            if (err) console.log(err);
      ***REMOVED***);

    ***REMOVED***);

  ***REMOVED***

      if (data.isAnswer) {

        _updateGameStats(true);

        req.session.game.gamePoints += 1;
        //sending new word
        _findRandomWord(req, res, {
          points: req.session.game.gamePoints,
          isAnswer: true
    ***REMOVED***);
  ***REMOVED***

      else {

        _updateGameStats(false);

        req.session.game.gamePoints ? req.session.game.gamePoints -= 0.5 : 0;

        res.json({
          points: req.session.game.gamePoints,
          isAnswer: false
    ***REMOVED***);
  ***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***

