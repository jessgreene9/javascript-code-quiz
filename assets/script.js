// sets variables to grab items from html document
var startEl = document.getElementById("start");
var questionContainerEl = document.getElementById("question-card");
var questionsEl = document.getElementById("questions");
var answerButtonsEl = document.querySelectorAll(".ans-button");
var timeCountEl = document.querySelector(".timer-count");
var scoreEl = document.querySelector("#scores");
var resultEl = document.querySelector("#result");
var formEl = document.querySelector("#high-scores");
var highScoresEl = document.querySelector("#hall0fFame");
var endgameEl = document.querySelector("#endgame");
var inputEl = document.querySelector("input[type=text]");
var topScoresEl = document.querySelector("#topscores");
var submitBtnEl = document.querySelector("#submit");

//creates variables needed for application
var count = 0;
var timer = 60;
var questionIndex = 0;
var score = [];
var timerInterval;

// grabs stored information from local storage
var scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];

//questions for the quiz
var questionBank = [
  {
    question: "What is an Event Listener?",
    answers: [
      { option: "a device used for recording an event", correct: false },
      {
        option: "a procedure in javaScript that wait for an event to occur",
        correct: true,
      },
      {
        option: "a secret spy used for major political events",
        correct: false,
      },
      {
        option: "a variable two possible values called 'true' and 'false'",
        correct: false,
      },
    ],
  },

  {
    question: "String values must be enclosed within _________",
    answers: [
      { option: "curly brackets", correct: false },
      { option: "square brackets", correct: false },
      { option: "parentheses", correct: false },
      { option: "single quotes", correct: true },
    ],
  },
  {
    question: "What is a boolean?",
    answers: [
      { option: "a collection of elements", correct: false },
      { option: "a function", correct: false },
      {
        option: "a variable two possible values called 'true' and 'false",
        correct: true,
      },
      { option: "a part of  an html document", correct: false },
    ],
  },
  {
    question: "What is an array?",
    answers: [
      { option: "a function that is a property of an object", correct: false },
      { option: "an ordered list of values", correct: true },
      { option: "a summer dress", correct: false },
      { option: " a comparison operator", correct: false },
    ],
  },
  {
    question: "How do you call a function?",
    answers: [
      { option: "add parentheses after the function's name", correct: true },
      { option: "shout it as loud as you can", correct: false },
      { option: "put at asterisk after the function's name", correct: false },
      { option: "put the function's name in brackets", correct: false },
    ],
  },
  {
    question: "What does an alert do in javaScript?",
    answers: [
      { option: "shuts down the webpage", correct: false },
      {
        option: "displays a pop up at the top of the screen with a message",
        correct: true,
      },
      { option: "logs the message to the console", correct: false },
      { option: "opens another webpage", correct: false },
    ],
  },
];

// function to begin timer
function startTimer() {
  timeCountEl.textContent = timer;
  timerInterval = setInterval(function () {
    timer--;
    if (timer > 0) {
      timeCountEl.textContent = timer;
    } else {
      timeCountEl.textContent = timer;
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

//upon the click event, the start game function begins
function startGame() {
  startEl.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  startTimer();
  showQuestion();
}

//cycles through the bank of questions
function showQuestion() {
  questionsEl.textContent = questionBank[questionIndex].question;

  for (var i = 0; i < answerButtonsEl.length; i++) {
    answerButtonsEl[i].textContent =
      questionBank[questionIndex].answers[i].option;
  }
}

function selectAnswer(event) {
  //check to see if right or wrong
  var element = event.target;
  if (element.matches(".ans-button")) {
    var index = parseInt(element.dataset.index);
    console.log(questionBank[questionIndex]);
    console.log(index);
    var isCorrect = questionBank[questionIndex].answers[index].correct;
    if (isCorrect) {
      resultEl.textContent = "Correct!";
    } else {
      resultEl.textContent = "Wrong!";
      timer -= 10;
    }
    questionIndex++;
    //check if any questions are left
    if (questionBank.length <= questionIndex) {
      endGame();
      clearInterval(timerInterval);
    } else {
      showQuestion();
    }
  }
}

//appends items to the high score page
function renderTopScores() {
  for (var item of scoreboard) {
    var liEl = document.createElement("li");
    liEl.textContent = item.initials + ":" + item.score;
    topScoresEl.appendChild(liEl);
  }
}

//signals the end of game and prompts input
function endGame() {
  console.log("End of Game");
  endgameEl.textContent = "End of Game";
  formEl.classList.remove("hide");
  questionContainerEl.classList.add("hide");
  timeCountEl.classList.add("hide");
  highScoresEl.classList.remove("hide");
  resultEl.classList.add("hide");
}

if (formEl) {
  //starts game upon click
  startEl.addEventListener("click", startGame);

  //stores into local storage upon hitting submit
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    var initials = inputEl.value;
    var data = { initials: initials, score: timer };
    scoreboard = scoreboard.concat(data);
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
    inputEl.value='';
    location.replace("./high-scores.html");
  });
  //takes user to next question
  document.addEventListener("click", selectAnswer);


}
