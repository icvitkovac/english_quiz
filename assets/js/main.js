var questionId = 0, // id of the current question
  answeredQuestions = [],
  dataSet = [],
  settings = {
    practiceMode: true,
    questionsNumber: 10,
    only_hard: false
***REMOVED***;

var elements = {
  answerReaction: null,
  resultField: null,
  startGame: null,
  gameOver: null,
  randomEnglishWord: null
***REMOVED***

function getRandomIndex() {

  if (dataSet.length) {
    questionId = Math.floor((Math.random() * dataSet.length));
***REMOVED***

  // returns number between 0 and length of the array, currently 0-7
  return questionId;

}

function getRandomEnglishTerm() {
//returns unanswered questions

  var index = getRandomIndex();

  for (var i = 0; i < answeredQuestions.length; i++) {
    if (index === answeredQuestions[i]) {
      return getRandomEnglishTerm();
***REMOVED***

***REMOVED***
  //example : englishTermsArray[7]; ---> discouraged

  return dataSet[index].value;

}

function writeWordAndAnswers() {
  elements.startGame.style.display = 'none';

  elements.randomEnglishWord.innerHTML = getRandomEnglishTerm();
  makeUL(_.shuffle(_.map(dataSet[questionId].translations, 'value')));

  var ul = document.getElementsByTagName('ul')[0];
  ul.onclick = function (event) {

    if (_.filter(dataSet[questionId].translations, {value: getEventTarget(event)})[0].isAnswer) {
      setColor(elements.answerReaction, 'green');
      localStorage.result++;

      elements.resultField.innerHTML = 'Number of points: ' + localStorage.result;
      answeredQuestions.push(questionId);
      if (answeredQuestions.length == settings.questionsNumber || answeredQuestions.length === dataSet.length) {
        gameOver();
        return;
        //all questions have been answered
  ***REMOVED***
      writeWordAndAnswers();
***REMOVED***
    else {
      if (!settings.practiceMode) {
        gameOver();
  ***REMOVED***

      else {
        update(dataSet[questionId].id);
        setColor(elements.answerReaction, 'red');
        localStorage.result -= 0.5;
        elements.resultField.innerHTML = 'Number of points: ' + localStorage.result;
  ***REMOVED***
***REMOVED***
***REMOVED***;
}

document.addEventListener("DOMContentLoaded", function (event) {

  httpGetAsync('/settings', function (data) {
    settings = JSON.parse(data)[0] || settings;
    if (window.location.pathname === '/admin') {
      $.each(settings, function (name, val) {
        var $el = $('[name="' + name + '"]'),
          type = $el.attr('type');

        switch (type) {
          case 'checkbox':
            $el.attr('checked', 'checked');
            break;
          case 'radio':
            $el.filter('[value="' + val + '"]').attr('checked', 'checked');
            break;
          default:
            $el.val(val);
    ***REMOVED***
  ***REMOVED***);
      return null;
***REMOVED***

    else {
      var term = '/word';
      if (settings.only_hard) {
        term += '?is_hard=true';
  ***REMOVED***
      httpGetAsync(term, function (data) {
        dataSet = JSON.parse(data);
        if (dataSet.length) {
          startGame();
    ***REMOVED***

  ***REMOVED***);
***REMOVED***

***REMOVED***);

});

function makeUL(array) {

  document.getElementById('possibleAnswers').innerHTML = "";
  // Create the list element:
  var list = document.createElement('ul');

  for (var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(array[i]));

    // Add it to the list:
    list.appendChild(item);
***REMOVED***

  // Finally, return the constructed list:
  document.getElementById('possibleAnswers').appendChild(list);
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target.innerHTML || e.srcElement;
}

function setColor(element, color) {
  element.style.backgroundColor = color;
}

function mapDOMElements() {
  elements.answerReaction = document.getElementById('answerReaction');
  elements.resultField = document.getElementById('result');
  elements.startGame = document.getElementById('startGame');
  elements.gameOver = document.getElementById('gameOver');
  elements.randomEnglishWord = document.getElementById('randomEnglishWord');
}

function gameOver() {
  alert("Game over! You've won: " + localStorage.result + " points");
  localStorage.result = 0;
  elements.startGame.style.display = 'block';
}

function startGame() {

  if (!localStorage.result) localStorage.result = 0;
  answeredQuestions = [];
  mapDOMElements();
  writeWordAndAnswers();

  $('#questionsNumber').append(settings.questionsNumber);
  $('#practiceMode').append(settings.practiceMode);
  $('#only_hard').append('' + settings.only_hard);
  $('#totalQuestions').append(dataSet.length);
  elements.resultField.innerHTML = 'Number of points: ' + localStorage.result;
}

function admin() {
  window.location.href = '/admin';

}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
***REMOVED***;
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

$('#settings').submit(function (event) {

  var formData = {}, data = $(this).serializeArray();

  formData.practiceMode = _.map(_.filter(data, {name: 'practiceMode'}), 'value')[0];
  formData.questionsNumber = _.map(_.filter(data, {name: 'questionsNumber'}), 'value')[0];
  formData.only_hard = _.map(_.filter(data, {name: 'only_hard'}), 'value')[0];

  $.ajax({
      type: 'PUT',
      url: '/settings',
      data: formData
***REMOVED***)
    .done(function () {
      alert('Settings stored');

***REMOVED***);
  event.preventDefault();
});

$('#addWord').submit(function (event) {

  var formData = {}, data = $(this).serializeArray();

  formData.translations = _.map(_.filter(data, {name: 'translations'}), 'value');
  formData.word = _.filter(data, {name: 'word'})[0].value;
  formData.answerIndex = _.filter(data, {name: 'isAnswer'}).length ? _.filter(data, {name: 'isAnswer'})[0].value : null;
  if (_.isEmpty(formData) || !formData.translations.length || !formData.word || !formData.answerIndex) {
    alert('Please fill out all fields!');

***REMOVED***
  else {
    $.ajax({
        type: 'POST',
        url: '/word/create',
        data: formData
  ***REMOVED***)
      .done(function (data) {
        $('#addWord')[0].reset();
        $('.info').html("Word added: " + data);
  ***REMOVED***)
      .complete(function(data){
        if(data.status === 302){
          alert('Word already exists in the DB!');
    ***REMOVED***
  ***REMOVED***)
    ;
***REMOVED***

  event.preventDefault();
});

function update(id) {

  $.ajax({
      type: 'PUT',
      url: '/word/update',
      data: {id: id, is_hard: true}
***REMOVED***)
    .done(function () {
      console.log('Word updated');
***REMOVED***);
  event.preventDefault();
}


