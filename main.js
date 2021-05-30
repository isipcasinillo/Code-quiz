var correctBtn = document.querySelector('.correct1');
var correctBtn2 = document.querySelector('.correct2');
var correctBtn3 = document.querySelector('.correct3');
var counterEl = document.getElementById('counter');
var correct1El = document.querySelector('.correct1');
var question1 = document.querySelector('#question1');
var question2 = document.querySelector('#question2');
var question3 = document.querySelector('#question3');

var startGame = document.querySelector('#start-btn');
var finalScore = document.querySelector('.finalscore');
var final = document.querySelector('#final');

// var scoreCnt = document.getElementById("counter")
// var correct1 = document.querySelector(".correct1")
// var correct2 = document.querySelector(".correct2")
// var question1 = document.getElementById("question1")
// var question2 = document.getElementById("question2")

var score = 0;

startGame.addEventListener('click', function () {
  question1.classList.remove('hidden');
  startGame.classList.add('hidden');
});

correctBtn.addEventListener('click', function () {
  score++;
  counterEl.textContent = score;
  question1.classList.add('hidden');
  question2.classList.remove('hidden');
  finalScore.classList.add('hidden');
});

correctBtn2.addEventListener('click', function () {
  score++;
  counterEl.textContent = score;
  question2.classList.add('hidden');
  question3.classList.remove('hidden');
  finalScore.classList.add('hidden');
});

correctBtn3.addEventListener('click', function () {
  score++;
  counterEl.textContent = score;
  question3.classList.add('hidden');
  finalScore.classList.remove('hidden');
  final.textContent = score;
});
