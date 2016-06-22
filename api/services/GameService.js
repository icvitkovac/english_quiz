***REMOVED***
module.exports = {

  on: function (gameData, errCb, successCb) {

    Game.create(gameData)
      .exec(function (err, gameData) {
        if (err) return errCb(err);
        return successCb(gameData);
  ***REMOVED***);
***REMOVED***,
  over: function (gameId, gamePoints, errCb, successCb) {

    Game.update(gameId, {active: false, gamePoints: gamePoints})
      .then((gameData) => successCb(gameData))
      .catch((err) => errCb(err));
***REMOVED***,

  findRandomWord: function (wordCount, authorQuery, gameData, errCb, successCb) {

    gameData = gameData || {***REMOVED***
    let randomQuestionId = Math.floor(Math.random() * (parseInt(wordCount) - 1) + 1);

    Word.find(authorQuery)
      .populate('translations')
      .exec(function (err, wordData) {
        if (err) return errCb(err);

        if (wordData.length) wordData = wordData[randomQuestionId - 1];
        _.extend(wordData, gameData);

        wordData.translations = _.shuffle(wordData.translations);
        return successCb(wordData);
  ***REMOVED***);


***REMOVED***,

  highScores: function (errCb, successCb) {

    Game.find({practiceMode: false})
      .sort('gamePoints DESC')
      .populate('contenderId')
      .limit(10)
      .exec(function (err, highScores) {
        if (err) return errCb(err);
        return successCb(highScores);
  ***REMOVED***);

***REMOVED***,

  history: function (contenderId, errCb, successCb) {

    Game.find({contenderId: contenderId})
      .sort('gamePoints DESC')
      .limit(10)
      .exec(function (err, history) {
        if (err) return errCb(err);
        return successCb(history);
  ***REMOVED***);

***REMOVED***,

  breakdown: function (gameId, errCb, successCb) {

    GameBreakdown.find({gameId: gameId})
      .populate('questionId')
      .exec(function (err, breakdown) {
        if (err) return errCb(err);
        return successCb(breakdown);
  ***REMOVED***);

***REMOVED***,

  checkAnswer: function (translationId, gameId, errCb, successCb) {

    Translation.findOne(translationId)
      .exec(function (err, data) {
        if (err) return errCb(err);


        Game.findOne(gameId)
          .exec(function (err, game) {
            if (err) return errCb(err);

            game.breakdown.add({
              questionId: data.term,
              correct: data.isAnswer
        ***REMOVED***);

            game.save(function (err) {
              if (err) console.log(err);
              return successCb(data);
        ***REMOVED***);

      ***REMOVED***);


  ***REMOVED***);

***REMOVED***
***REMOVED***
