var questionContainer = document.getElementById("question-container");
var scoreContainer = document.getElementById("scoreboard-container");
var btnContainer = document.getElementById("btn-container");

var startBtn = document.querySelector("#start");
var timeEl = document.querySelector(".countdown");
var nextBtn = document.querySelector("#next");

var saveBtn = document.querySelector("#save");
var initals = document.querySelector("#initals");


var questionTitle = document.getElementById('questionTitle');
var multipleChoice = document.getElementById('multipleChoice');

var quiz = [
    {
        question: "The longest River in Europe is? ",
        choices: ["The Rhine","The Ural", "The Don","The Volga"],
        correctAnswer: "The Volga"
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
    },
    {
        question: "How many langages are spoken in Africa? ",
        choices: ["1500-3000","500-1000", "5000-7000", "1000-1500"],
        correctAnswer: "1500-3000"
    },
    {
        question: "Which Contries have mulitple Capitals? ",
        choices: ["Philippines and Libya", "India and Malawi", "Eswatini and South Africa", "Laos and Serbia"],
        correctAnswer: "Eswatini and South Africa"
    },
    {
        question: "Which one of these countries does the USA not boarder? ",
        choices: ["Russia", "Bahamas", "Cuba", "Barbados" ],
        correctAnswer: "Barbados"
    },
    {
        question: "When did Haiti gain its independence? ",
        choices: ["July 1, 1809", "January 1, 1804", "October 15, 1784", "June 1, 1704"],
        correctAnswer: "January 1, 1804"
    },
    {
        question: "What are the Capitals of North America? ",
        choices: ["Toronto, Washington D.C, and Mexico City","Vancouver, Washington D.C, and Guadalajara", "Ottawa, Washington D.C, and Mexico City", "Quebec City, Washington D.C, and Mexico City"],
        correctAnswer: "Ottawa, Washington D.C, and Mexico City",
    },
    {
        question: "The top 3 Countries with the most languages are? ",
        choices: ["Papua New Guinea, Indonesia, and Nigeria", "USA, China, and Mexico", "Russia, USA, and India","Brazil, Pakistan, and Germany"],
        correctAnswer: "Papua New Guinea, Indonesia, and Nigeria"
    },
    {
        question: "What country has the highest rate of twin births?",
        choices: ["Benin", "France", "Sweden","Indonesia"],
        correctAnswer: "Benin"
    },
];

var points = 0;
var timeLeft = 90;
var i = 0;
var timerInterval

startBtn.addEventListener("click", function() {
    startBtn.style.display='none';
    multipleChoice.style.display='inline-block';
    nextBtn.style.display='inline-block';

    startCountdown();
    displayTest();
});

function startCountdown() {
    timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " Seconds ";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      scoreContainer.style.visibility="visible";
      multipleChoice.style.display="none";
      nextBtn.style.display='none';
      timeEl.style.color = "red";
    }
  }, 1000);
}

function displayTest() {
    var currentQuestion = quiz[i].question;
    var currentChoices = quiz[i].choices;

    questionTitle.innerText = currentQuestion;
    displayChoices(currentChoices);

    console.log(quiz[i].question)
}

function displayChoices(cc) {

    multipleChoice.innerHTML = "";

    for(var i = 0; i < cc.length; i++) {
        var opt = cc[i];
        multipleChoice.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
    }
}


nextBtn.onclick = function() {

    var choice = document.getElementById("multipleChoice").value;
    var currentAnswer = quiz[i].correctAnswer;

    if (choice == currentAnswer) {
        points = points +10;
    } else {
        timeLeft = timeLeft -10;
    }

    if (choice == "Benin") {
        console.log("done!")
        clearInterval(timerInterval);
        nextBtn.style.display='none';
        scoreContainer.style.visibility="visible";
    }

    i++;
    displayTest(i);
};
