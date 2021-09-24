var mainContainer = document.getElementById("main-container");
var btnContainer = document.getElementById("question-container");
var scoreContainer = document.getElementById("scoreboard-container");
var btnContainer = document.getElementById("btn-container");

var timeEl = document.querySelector(".countdown");
var startBtn = document.querySelector("#start");

var points = 0;
var timeLeft = 3;
var currentQuestion = 0;

var questions = [
    {
        question: "The longest River in Europe is? ",
        multipleChoices: ["The Rhine","The Ural", "The Don","The Volga"],
        correctAnswers: "4"
    },
    {
        question: "90% of Earth's population lives where? ",
        multipleChoices: ["The Northern Hemisphere", "50 Miles from the coasts", "In Asia", "In the Tropics"],
        correctAnswer: "0"
    },
    {
        question: "What developed country is the only one without Universal Healthcare? ",
        multipleChoices: ["Spain","USA","Australia","Russia"],
        correctAnswer: "1"
    },
    {
        question: "How many langages are spoken in Africa? ",
        multipleChoices: ["1500-3000","500-1000", "5000-7000", "1000-1500"],
        correctAnswer: "0"
    },
    {
        question: "Which Contries have mulitple Capitals? ",
        multipleChoices: ["Philippines and Libya", "India and Malawi", "Eswatini and South Africa", "Laos and Serbia"],
        correctAnswer: "2"
    },
    {
        question: "Which one of these countries does the USA not boarder? ",
        multipleChoices: ["Russia", "Bahamas", "Cuba", "Barbados" ],
        correctAnswer: "3"
    },
    {
        question: "When did Haiti gain its independence? ",
        multipleChoices: ["July 1, 1809", "January 1, 1804", "October 15, 1784", "June 1, 1704"],
        correctAnswer: "1"
    },
    {
        question: "What are the Capitals of North America? ",
        multipleChoices: ["Toronto, Washington D.C, and Mexico City","Vancouver, Washington D.C, and Guadalajara", "Ottawa, Washington D.C, and Mexico City", "Quebec City, Washington D.C, and Mexico City"],
        correctAnswer: "2"
    },
    {
        question: "The top 3 Countries with the most languages are? ",
        multipleChoices: ["Papua New Guinea, Indonesia, and Nigeria", "USA, China, and Mexico", "Russia, USA, and India","Brazil, Pakistan, and Germany"],
        correctAnswer: "0"
    },
    {
        question: "What country has the highest rate of twin births?",
        multipleChoices: ["Benin", "France", "Sweden","Indonesia"],
        correctAnswer: "0"
    }
]

startBtn.addEventListener("click", function() {
    displayQuestion();
    startCountdown();
})

function displayQuestion() {

}

function startCountdown() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " Seconds ";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      timeEl.style.color = "red";
    }
  }, 1000);
}


