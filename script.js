var highScoreButton = document.querySelector("#high-score-button");
var jumbotronElement = document.querySelector(".jumbotron");
var questionText = document.querySelector("#question");
var questionNumberText = document.querySelector("#question-number");
var answerButton1 = document.querySelector("#answer-1");
var answerButton2 = document.querySelector("#answer-2");
var answerButton3 = document.querySelector("#answer-3");
var answerButton4 = document.querySelector("#answer-4");
var beginButton = document.querySelector("#begin-button");
//Object containing all the questions and answers
var questionObject = {
    question1 : {
        question: "To declare a variable in Javascript you must use ____.",
        answers: ["create","var","int/string/array/double","dec"]
    },
    question2 : {
        question: "HTML stands for ____",
        answers: ["Hyperbolic Theme Machine Language", "Hanging Time Marking Leverage", "Hyper Text Markup Language"]
    },
    question3 : {
        question: "What is the Git command to see all files in the current directory?",
        answers: ["ls","see file -a","cd","show directory"]
    },
    question4 : {
        question: "What language is used to make the skin of all webpages?",
        answers: ["HTML", "CSS", "Javascript","C++"]
    },
    question5 : {
        question: "What language is used to make the muscle of all webpages?",
        answers: ["HTML", "CSS", "Javascript","C++"]
    },
    question6 : {
        question: "What language is used to make the bones of all webpages?",
        answers: ["HTML", "CSS", "Javascript","C++"]
    },
    question7 : {
        question: "What can a variable be described as?",
        answers: ["A hammer", "A waterfall", "A wedge", "A container"]
    },
    question8 : {
        question: "What does CSS stand for?",
        answers: ["Careful Step by Step", "Create Super Scripts", "Cascading Style Sheets", "Combinatory Style Stanzas"]
    }
}

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
});

