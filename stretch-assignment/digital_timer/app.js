//setting hypotheticaly varriables
var intervalId= window.setInterval(cb,10);
var cumulatedSecondTens = 0;
var cumulatedSeconds = 0;
var cumulatedmsHundreads = 0;
var cumulatedmsTens = 0;

// 1- Create Element
const secondTens = document.getElementById("secondTens");
// 2- Add Content
secondTens.textContent = cumulatedSecondTens;

// 1- Create Element
const seconds = document.getElementById("secondOnes");
// 2- Add Content
seconds.textContent = cumulatedSeconds;

// 1- Create Element
const msHundreads = document.getElementById("msHundreads");
// 2- Add Content
msHundreads.textContent = cumulatedmsHundreads;

const timer = document.querySelectorAll(".digits");







