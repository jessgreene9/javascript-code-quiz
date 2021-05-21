var startEl = document.getElementById("start");
var questionContainerEl = document.getElementById("question-card");
var questionsEl = document.getElementById("questions");
var answerButtonsEl = document.querySelectorAll(".ans-button");
var timeCountEl = document.querySelector(".timer-count");
var scoreEl = document.querySelector("#score");


var count = 0;
var timer = 60;
var questionIndex = 0;




startEl.addEventListener("click", startGame);

timeCountEl.textContent = timer;

function startTimer() {
    var timerCount = setInterval(function () {
        timeCountEl.textContent
        timer--;
        if (timer >= 0) {
            timeCountEl.textContent = timer;
        } else {

            clearInterval(timerCount);
            endGame()
        }
    }, 1000);

}


for (var i = 0; i < answerButtonsEl.length; i++) {
    answerButtonsEl[i].addEventListener("click", selectAnswer);
}

function startGame() {
    startEl.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    startTimer();
    showQuestion();


}




function showQuestion() {
    questionsEl.textContent = questionBank[questionIndex].question;

    for (var i = 0; i < answerButtonsEl.length; i++) {
        answerButtonsEl[i].textContent = questionBank[questionIndex].answers[i].option;
    }

}


function selectAnswer(event) {
    //check to see if right or wrong
    var selectedAnswer = event.target;
    var index = selectedAnswer.


        timer -= 10;


    //check if any questions are left
    questionIndex++;

    if (questionBank.length >= questionIndex) {
        showQuestion();
    } else {
        endGame();
    }


}

function endGame() {

    answerButtonsEl.classList.add('hide');
    questionsEl.classList.add('hide');

}







var questionBank = [
    {
        question: "What is an Event Listener?",
        answers: [
            { option: "a device used for recording an event", correct: false },
            { option: "a procedure in javaScript that wait for an event to occur", correct: true },
            { option: "a secret spy used for major political events", correct: false },
            { option: "a variable two possible values called 'true' and 'false'", correct: false },

        ]
    },

    {
        question: "String values must be enclosed within _________",
        answers: [
            { option: "curly brackets", correct: false },
            { option: "square brackets", correct: false },
            { option: "parentheses", correct: false },
            { option: "single quotes", correct: true },

        ]
    },
    {
        question: "What is a boolean?",
        answers: [
            { option: "a collection of elements", correct: false },
            { option: "a function", correct: false },
            { option: "a variable two possible values called 'true' and 'false", correct: true },
            { option: "a part of  an html document", correct: false },

        ]
    },
    {
        question: "What is an array?",
        answers: [
            { option: "a function that is a property of an object", correct: false },
            { option: "an ordered list of values", correct: true },
            { option: "a summer dress", correct: false },
            { option: " a comparison operator", correct: false },

        ]
    },
    {
        question: "How do you call a function?",
        answers: [
            { option: "add parentheses after the function's name", correct: true },
            { option: "shout it as loud as you can", correct: false },
            { option: "put at asterisk after the function's name", correct: false },
            { option: "put the function's name in brackets", correct: false },

        ]
    },
    {
        question: "What does an alert do in javaScript?",
        answers: [
            { option: "shuts down the webpage", correct: false },
            { option: "displays a pop up at the top of the screen with a message", correct: true },
            { option: "logs the message to the console", correct: false },
            { option: "opens another webpage", correct: false },

        ]
    },

]