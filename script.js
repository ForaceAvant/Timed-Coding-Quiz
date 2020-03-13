var highScoreButton = document.querySelector("#high-score-button");
var jumbotronElement = document.querySelector(".jumbotron");
var questionText = document.querySelector("#question");
var questionNumberText = document.querySelector("#question-number");
var answerButton1 = document.querySelector("#answer-1");
var answerButton2 = document.querySelector("#answer-2");
var answerButton3 = document.querySelector("#answer-3");
var answerButton4 = document.querySelector("#answer-4");
var beginButton = document.querySelector("#begin-button");

//Creates <div> elements to help format button layout
function addButtonDivs(button){
    var newDiv = document.createElement("div");
    newDiv.append(button);
    jumbotronElement.append(newDiv);
}

//Beginning Event Listener that starts on the click of Begin Button
beginButton.addEventListener("click", function(){
    answerButton1.style.display = "inline-block";
    answerButton1.textContent = "Filler Answer";
    addButtonDivs(answerButton1);

    
    answerButton2.style.display = "inline-block";
    answerButton2.textContent = "Filler Answer";
    addButtonDivs(answerButton2);

    answerButton3.style.display = "inline-block";
    answerButton3.textContent = "Filler Answer";
    addButtonDivs(answerButton3);

    answerButton4.style.display = "inline-block";
    answerButton4.textContent = "Filler Answer";
    addButtonDivs(answerButton4);

    beginButton.style.display = "none";
})