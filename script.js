var highScoreButton = document.querySelector("#high-score-button");
var jumbotronElement = document.querySelector(".jumbotron");
var questionText = document.querySelector("#question");
var questionNumberText = document.querySelector("#question-number");
var answerButton1 = document.querySelector("#answer-1");
var answerButton2 = document.querySelector("#answer-2");
var answerButton3 = document.querySelector("#answer-3");
var answerButton4 = document.querySelector("#answer-4");
var beginButton = document.querySelector("#begin-button");
var buttonClass = document.querySelectorAll(".button");
var timerText = document.querySelector("#timer");
var inputField = document.querySelector("#inputPassword6");
var inputButton = document.querySelector("#initials");
var playButton = document.querySelector("#play-button");
var playDiv = document.querySelector("#play-div");
var correctAnswerArray = [1, 2, 0, 1, 2, 0, 3, 2];
var i = 0;
var timer = 75;
var playerPoints = 0;
var interval;
var playerTopScores=[];
var quizStatus;


//Object containing all the questions and answers

var question1 = {
    question: "To declare a variable in Javascript you must use ____.",
    answers: ["create", "var", "int/string/array/double", "dec"]
};
var question2 = {
    question: "HTML stands for ____",
    answers: ["Hyperbolic Theme Machine Language", "Hanging Time Marking Leverage", "Hyper Text Markup Language", "Helping The Markdown Line"]
};
var question3 = {
    question: "What is the Git command to see all files in the current directory?",
    answers: ["ls", "see file -a", "cd", "show directory"]
};
var question4 = {
    question: "What language is used to make the skin of all webpages?",
    answers: ["HTML", "CSS", "Javascript", "C++"]
};
var question5 = {
    question: "What language is used to make the muscle of all webpages?",
    answers: ["HTML", "CSS", "Javascript", "C++"]
};
var question6 = {
    question: "What language is used to make the bones of all webpages?",
    answers: ["HTML", "CSS", "Javascript", "C++"]
};
var question7 = {
    question: "What can a variable be described as?",
    answers: ["A hammer", "A waterfall", "A wedge", "A container"]
};
var question8 = {
    question: "What does CSS stand for?",
    answers: ["Careful Step by Step", "Create Super Scripts", "Cascading Style Sheets", "Combinatory Style Stanzas"]
};

var questionList = [question1, question2, question3, question4, question5, question6, question7, question8];

//Creates <div> elements to help format button layout
function addButtonDivs(button) {
    var newDiv = document.createElement("div");
    newDiv.append(button);
    jumbotronElement.append(newDiv);
}

function resetJumbo(){
    i = 0;
    j = 0;
    playerPoints = 0;

    playDiv.style.display = "none";
    questionNumberText.textContent = "Timed Coding Quiz";
    questionText.textContent = "Press Start to Begin";
    jumbotronElement.querySelector(".highscore-list").style.display = "none";
    jumbotronElement.querySelector("#highscoreList").style.display = "none";
    jumbotronElement.querySelector("#begin-button").style.display = "inline-block";
}

function questionAnswerTextFill(questionNumber) {
    //answerButton1, answerButton2, answerButton3, answerButton4 = "";

    answerButton1.textContent = questionNumber.answers[0];
    answerButton2.textContent = questionNumber.answers[1];
    answerButton3.textContent = questionNumber.answers[2];
    answerButton4.textContent = questionNumber.answers[3];
    questionText.textContent = questionNumber.question;

}

function answerCheck(event) {
    if (event.getAttribute("id") == "answer-1" && correctAnswerArray[i] == 0) {
        if (i < 7) {
            questionAnswerTextFill(questionList[i + 1]);
            console.log("Correct answer")
            playerPoints += timer;
            countdownTimer();
        }
        else {
            playerPoints += timer;
            endOfQuizScreenMaker();
            
        }
    }
    else if (event.getAttribute("id") == "answer-2" && correctAnswerArray[i] == 1) {
        if (i < 7) {
            playerPoints += timer;
            questionAnswerTextFill(questionList[i + 1]);
            console.log("Correct answer")
            
        }
        else {
            playerPoints += timer;
            endOfQuizScreenMaker();
        }
    }
    else if (event.getAttribute("id") == "answer-3" && correctAnswerArray[i] == 2) {
        if (i < 7) {
            playerPoints += timer;
            questionAnswerTextFill(questionList[i + 1]);
            console.log("Correct answer")
            
        }
        else {
            playerPoints += timer;
            endOfQuizScreenMaker();
        }
    }
    else if (event.getAttribute("id") == "answer-4" && correctAnswerArray[i] == 3) {
        if (i < 7) {
            playerPoints += timer;
            questionAnswerTextFill(questionList[i + 1]);
            console.log("Correct answer")
        
        }
        else {
            playerPoints += timer;
            endOfQuizScreenMaker();
        }
    }
    else {
        if (i < 7) {
            questionAnswerTextFill(questionList[i + 1]);
            console.log("Wrong answer")
            timer = timer - 10;
            
        }
        else {
            console.log("Wrong Answer")
            timer = timer - 10;
            endOfQuizScreenMaker();
        }
    }
    i++;
};

function checkTime(){
    if(timer <= 0 && quizStatus == true){
        endOfQuizScreenMaker();
    }
}

function endOfQuizScreenMaker(){
    timer= undefined;
    timerText.style.display = "none";
    quizStatus = false;
    renderTime();
    clearInterval(interval);

    answerButton1.style.display = "none";
    answerButton2.style.display = "none";
    answerButton3.style.display = "none";
    answerButton4.style.display = "none";

    jumbotronElement.querySelector("#question-number").textContent = "Quiz Finished";
    jumbotronElement.querySelector("#question").textContent = "Your Score was: " + playerPoints;
    jumbotronElement.querySelector("#inputPassword6").style.display = "inline-block";
    jumbotronElement.querySelector("#initials-input").style.display = "inline-block";
    jumbotronElement.querySelector("#initials").style.display = "inline-flex";
    jumbotronElement.querySelector("#initials-button").style.display = "inline-flex";
}

function countdownTimer(){
    if(timer > 0){
        interval = setInterval(function(){
            checkTime();
            renderTime();
            timer--;
        }, 1000);
    }
    else{
        timer = 0;
        clearInterval(interval);
        renderTime();
    
    }
}

function renderTime(){
    timerText.style.display = "inline-flex";
    timerText.textContent = timer;
};

function highScoreMenuCreator(){

    timer= undefined;
    timerText.style.display = "none";
    quizStatus = false;
    renderTime();
    clearInterval(interval);
    timerText.style.display = "none";
    jumbotronElement.querySelector("#question-number").textContent = "High Scores";
    jumbotronElement.querySelector("#question").textContent = "Top 10"
    jumbotronElement.querySelector("#initials-input").style.display = "none";
    jumbotronElement.querySelector("#begin-button").style.display = "none";
    jumbotronElement.querySelector("#answer-1").style.display = "none";
    jumbotronElement.querySelector("#answer-2").style.display = "none";
    jumbotronElement.querySelector("#answer-3").style.display = "none";
    jumbotronElement.querySelector("#answer-4").style.display = "none";
    jumbotronElement.querySelector("#inputPassword6").style.display = "none";
    jumbotronElement.querySelector("#initials-button").style.display = "none";
    jumbotronElement.querySelector("#highscoreList").style.display = "initial";
    playDiv.style.display = "inline-flex";

    for(var k = 1; k <= playerTopScores.length; k++){
        jumbotronElement.querySelector("#highscore" + k).style.display = "list-item";
        console.log(jumbotronElement.querySelector("#highscore" + k));

        jumbotronElement.querySelector("#highscore" + k).textContent = playerTopScores[k-1].initials + "  -  " + playerTopScores[k-1].score;
        }


    
    /*
        
    



    jumbotronElement.querySelector("#question-number").textContent = "High Scores";
    jumbotronElement.querySelector("#question").style.display = "none";
    jumbotronElement.querySelector("#initials-input").style.display = "none";
    jumbotronElement.querySelector("#initials-button").style.display = "none";
    jumbotronElement.querySelector("#highscore1").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscore2").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscore3").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscore4").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscore5").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscore6").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscore7").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscore8").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscore9").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscore10").style.display = "inline-flex";
    jumbotronElement.querySelector("#highscoreList").style.display = "inline-block";
    playDiv.style.display = "inline-flex";

    for(var k = 0; k < 10; k++){
        console.log(playerTopScores[k]);
        if(playerTopScores[k] == undefined){

            playerTopScores.push({initials: " " , score: " "});
        }
        console.log(playerTopScores[k]);
    }

    jumbotronElement.querySelector("#highscore1").textContent = "1. " + playerTopScores[0].initials + "      " + playerTopScores[0].score;
    jumbotronElement.querySelector("#highscore2").textContent = "2. " + playerTopScores[1].initials + "      " + playerTopScores[1].score;
    jumbotronElement.querySelector("#highscore3").textContent = "3. " + playerTopScores[2].initials + "      " + playerTopScores[2].score;
    jumbotronElement.querySelector("#highscore4").textContent = "4. " + playerTopScores[3].initials + "      " + playerTopScores[3].score;
    jumbotronElement.querySelector("#highscore5").textContent = "5. " + playerTopScores[4].initials + "      " + playerTopScores[4].score;
    jumbotronElement.querySelector("#highscore6").textContent = "6. " + playerTopScores[5].initials + "      " + playerTopScores[5].score;
    jumbotronElement.querySelector("#highscore7").textContent = "7. " + playerTopScores[6].initials + "      " + playerTopScores[6].score;
    jumbotronElement.querySelector("#highscore8").textContent = "8. " + playerTopScores[7].initials + "      " + playerTopScores[7].score;
    jumbotronElement.querySelector("#highscore9").textContent = "9. " + playerTopScores[8].initials + "      " + playerTopScores[8].score;
    jumbotronElement.querySelector("#highscore10").textContent = "10. " + playerTopScores[9].initials + "      " + playerTopScores[9].score;
    */
}

//Beginning Event Listener that starts on the click of Begin Button
beginButton.addEventListener("click", function () {
    answerButton1.style.display = "inline-block";
    addButtonDivs(answerButton1);


    answerButton2.style.display = "inline-block";
    addButtonDivs(answerButton2);

    answerButton3.style.display = "inline-block";
    addButtonDivs(answerButton3);

    answerButton4.style.display = "inline-block";
    addButtonDivs(answerButton4);

    beginButton.style.display = "none";

    questionAnswerTextFill(questionList[0]);
    countdownTimer();
    timer = 75;
    quizStatus = true;
});

console.log(buttonClass);

for (var j = 0; j < buttonClass.length; j++) {
    buttonClass[j].addEventListener("click", function () {
        answerCheck(this);
    })
}

inputButton.addEventListener("click", function(event){
    

    var currentPlayerName = inputField.value;
    console.log(currentPlayerName);
    var playerInfo = {
        initials: currentPlayerName,
        score: playerPoints
    }
    console.log(playerInfo);
    console.log(playerTopScores.length);

    playerTopScores.push(playerInfo);

    playerTopScores.sort(function(a,b){return a.score - b.score});
    playerTopScores.reverse();

    if(playerTopScores.length == 11){
        playerTopScores[10] = "";
    }
    
    console.log(playerTopScores);
    inputField.value = " ";
    console.log(highScoreMenuCreator());
    
})

highScoreButton.addEventListener("click", function(){
    highScoreMenuCreator();
})

playButton.addEventListener("click", function(){
    resetJumbo();
})







