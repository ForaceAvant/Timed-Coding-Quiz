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
var correctAnswerArray = [1, 2, 0, 1, 2, 0, 3, 2];
var i = 0;
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
        }
        else {
            questionAnswerTextFill(questionList[i]);
        }
    }
    else if (event.getAttribute("id") == "answer-2" && correctAnswerArray[i] == 1) {
        if (i < 7) {
            questionAnswerTextFill(questionList[i + 1]);
            console.log("Correct answer")
        }
        else {
            questionAnswerTextFill(questionList[i]);
        }
    }
    else if (event.getAttribute("id") == "answer-3" && correctAnswerArray[i] == 2) {
        if (i < 7) {
            questionAnswerTextFill(questionList[i + 1]);
            console.log("Correct answer")
        }
        else {
            
            questionAnswerTextFill(questionList[i]);
        }
    }
    else if (event.getAttribute("id") == "answer-4" && correctAnswerArray[i] == 3) {
        if (i < 7) {
            questionAnswerTextFill(questionList[i + 1]);
            console.log("Correct answer")
        }
        else {
            questionAnswerTextFill(questionList[i]);
        }
    }
    else {
        if (i < 7) {
            questionAnswerTextFill(questionList[i + 1]);
            console.log("Wrong answer")
        }
        else {
            console.log("Wrong Answer")
            questionAnswerTextFill(questionList[i]);
        }
    }
    i++;
};

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
});


console.log(buttonClass);

for (var j = 0; j < buttonClass.length; j++) {
    buttonClass[j].addEventListener("click", function () {
        answerCheck(this);
    })
}




