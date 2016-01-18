var questionId = 0; // id of the current question
var answeredQuestions = [];
var practiceMode = true;

var elements = {
  answerReaction: null,
  resultField: null,
  startGame: null,
  gameOver: null,
  randomEnglishWord: null
***REMOVED***

var dataSet = [];
//array of english terms / words - SQL equivalent would be table with word and id columns
var englishTermsArray = ['requires', 'drowned', 'to bid', 'developing', 'development', 'beneficial', 'violate', 'discouraged'];

var answersArray = [];

answersArray[0] = ['zahteva', 'pripreme', 'odbija', 'dostavlja'];
answersArray[1] = ['izbedačen', 'oboren', 'udavljen', 'zajapuren'];
answersArray[2] = ['pasti', 'kladiti se', 'priviđati', 'pomaći'];
answersArray[3] = ['razvijati', 'farbati', 'spavati', 'kopati'];
answersArray[4] = ['kopanje', 'farbanje', 'razvoj', 'spavanje'];
answersArray[5] = ['loš', 'zao', 'dobar', 'koristan'];
answersArray[6] = ['spotaći', 'gurnuti', 'šutnuti', 'prekršiti'];
answersArray[7] = ['obeshrabren', 'pohvaljen', 'miran', 'spokojan'];

var solutionsArray = [];
solutionsArray[0] = answersArray[0][0];
solutionsArray[1] = answersArray[1][2];
solutionsArray[2] = answersArray[2][1];
solutionsArray[3] = answersArray[3][0];
solutionsArray[4] = answersArray[4][2];
solutionsArray[5] = answersArray[5][3];
solutionsArray[6] = answersArray[6][3];
solutionsArray[7] = answersArray[7][0];


function getRandomIndex() {

  if (englishTermsArray.length) {
    questionId = Math.floor((Math.random() * englishTermsArray.length));
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

  return englishTermsArray[index];

}


function writeWordAndAswers() {
  elements.startGame.style.display = 'none';

  elements.randomEnglishWord.innerHTML = getRandomEnglishTerm();
  makeUL(answersArray[questionId]);

  var ul = document.getElementsByTagName('ul')[0];
  ul.onclick = function (event) {

    if (getEventTarget(event) == solutionsArray[questionId]) {
      setColor(elements.answerReaction, 'green');
      localStorage.result++;

      elements.resultField.innerHTML = 'Number of points: ' + localStorage.result;
      answeredQuestions.push(questionId);
      if (answeredQuestions.length === englishTermsArray.length) {
        gameOver();
        return;
        //all questions have been answered
  ***REMOVED***
      writeWordAndAswers();
***REMOVED***
    else {
      if (!practiceMode) {
        gameOver();
  ***REMOVED***

      else {
        setColor(elements.answerReaction, 'red');
        localStorage.result -= 0.5;
        elements.resultField.innerHTML = 'Number of points: ' + localStorage.result;
  ***REMOVED***
***REMOVED***
***REMOVED***;
}


document.addEventListener("DOMContentLoaded", function (event) {
  if (window.location.pathname === '/admin') {
    return null;
***REMOVED***

  else {
    httpGetAsync('/word', function (data) {
      dataSet = JSON.parse(data);

      /*for (var i = 0; i < dataSet.length; i++) {

        englishTermsArray.push(dataSet[i].value);
  ***REMOVED****/
***REMOVED***);
    startGame()
***REMOVED***


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
  practiceMode = confirm("Press OK for practice mode, CANCEL for real game:");
  if (!localStorage.result) localStorage.result = 0;
  answeredQuestions = [];
  mapDOMElements();
  writeWordAndAswers();

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

/*function settings() {


 }*/


