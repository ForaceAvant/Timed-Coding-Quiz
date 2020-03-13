var highScoreButton = document.querySelector("#high-score-button");
var jumbotronElement = document.querySelector(".jumbotron");
var questionText = document.querySelector("#question");
var questionNumberText = document.querySelector("#question-number");
var answerButton1 = document.querySelector("#answer-1");
var answerButton2 = document.querySelector("#answer-2");
var answerButton3 = document.querySelector("#answer-3");
var answerButton4 = document.querySelector("#answer-4");
var beginButton = document.querySelector("#begin-button");



beginButton.addEventListener("click", function(){
    answerButton1.style.display = "inline-block";
    answerButton2.style.display = "inline-block";
    answerButton3.style.display = "inline-block";
    answerButton4.style.display = "inline-block";
    beginButton.style.display = "none";
})