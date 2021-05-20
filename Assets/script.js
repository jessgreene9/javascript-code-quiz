var startEl = document.getElementById("#start");
var questionEl = document.getElementById("#question"); 

var questionBank = [
{
    question: "What is an Event Listener?",
    answers: [
        {text: "a device used for recording an event", correct: false },
        {text: "a procedure in javaScript that wait for an event to occur", correct: true},
        {text: "a secret spy used for major political events", correct: false},
        {text: "a variable two possible values called 'true' and 'false'", correct:false},

    ] 
    
}


]


startButton.addEventListener("click", startGame)



function startGame() {
    startEl.classList.add('hide');
    questionEl.classList.remove ('hide');
    nextQuestion()


}


function nextQuestion() {

}


function selectAnswer()