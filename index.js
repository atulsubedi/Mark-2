var readlinesync = require("readline-sync");
var userName = readlinesync.question("What is your name? ");
console.log("Welcome " + userName + " to this quiz let's see how well do you about the famous show Breaking Bad! ");
console.log("-----------------")






var readlinesync = require("readline-sync");
var userQuestion = readlinesync.question("Who does walter watches choke to vomit and die? ");
var userAnswer = ("jane");
var score = 0;
if (userQuestion === userAnswer) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------")



var userTwo = readlinesync.question("Who did jesse kill on walter command? ");
var userAnswerTwo = ("gale");
var score = 0;
if (userTwo === userAnswerTwo) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------");


var userQuestionThree = readlinesync.question("What was the name of company that walter started  ? ");
var userAnswerThree = ("Gray matter");
var score = 0;
if (userQuestionThree === userAnswerThree) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------")





var userQuestionFour = readlinesync.question("what was skyler and walter son name? ");
var userAnswerFour = ("flynn");
var score = 0;
if (userQuestionFour === userAnswerFour) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------")





var userQuestionFive = readlinesync.question("How did Gustavo fring die? ");
var userAnswerFive = ("blasted off");
var score = 0;
if (userQuestionFive === userAnswerFive) {
  console.log("you are right");


} else {
  console.log("you are wrong");

}


console.log("-----------------")
console.log("---Quiz Ended---")