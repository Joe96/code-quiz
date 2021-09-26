var mainContainer = document.getElementById("main-container");
var questionContainer = document.getElementById("question-container");
var scoreContainer = document.getElementById("scoreboard-container");
var btnContainer = document.getElementById("btn-container");

var timeEl = document.querySelector(".countdown");
var startBtn = document.querySelector("#start");
var nextBtn = document.querySelector("#next");
var previousBtn = document.querySelector("#previous");

var questionTitle = document.getElementById('questionTitle');
var multipleChoice = document.getElementById('multipleChoice');

var quiz = [
    {
        question: "The longest River in Europe is? ",
        choices: ["The Rhine","The Ural", "The Don","The Volga"],
        correctAnswers: "The Volga"
    },
    {
        question: "90% of Earth's population lives where? ",
        choices: ["The Northern Hemisphere", "50 Miles from the coasts", "In Asia", "In the Tropics"],
        correctAnswer: "The Northern Hemisphere"
    },
    {
        question: "What developed country is the only one without Universal Healthcare? ",
        choices: ["Spain","USA","Australia","Russia"],
        correctAnswer: "USA"
    }
]

var points = 0;
var timeLeft = 10;
var i = 0;



startBtn.addEventListener("click", function() {
    startBtn.style.display='none';
    multipleChoice.style.display='inline-block';
    nextBtn.style.display='inline-block';
    previousBtn.style.display='inline-block';

    startCountdown();
    displayTest(i);
})

function startCountdown() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " Seconds ";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      scoreContainer.style.visibility="visible";
      multipleChoice.style.display="none";
      nextBtn.style.display='none';
      previousBtn.style.display='none';
      timeEl.style.color = "red";
    }
  }, 1000);
}

nextBtn.onclick = function() {

    displayTest(i);
    i++;
};

previousBtn.onclick = function() {

    displayTest(i);
    i--;
};

function displayTest() {
    var currentQuestion = quiz[i].question;
    var currentAnswers = quiz[i].choices;

    console.log(currentQuestion)

    questionTitle.innerText = currentQuestion;
    displayChoices(currentAnswers);
}

function displayChoices(ca) {

    multipleChoice.innerHTML = "";
    // Populate list with options:
    for(var i = 0; i < ca.length; i++) {
        var opt = ca[i];
        multipleChoice.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
    }

}