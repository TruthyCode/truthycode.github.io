const randomNum = () => Math.round(Math.random() * 100) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (scr) {
  document.querySelector('.score').textContent = scr;
};

const setHighScore = function (scr) {
  document.querySelector('.highscore').textContent = scr;
};

let score = 20;
let highScore = 0;
let num = randomNum();
const msg = document.querySelector('.message');
const displayNum = document.querySelector('.display');
const numDisplay = function () {
  displayNum.textContent = num;
};
function correntNum() {
  msg.style.color = '#07FF51';
  msg.style.fontSize = '27px';
  setTimeout(function () {
    msg.style.fontSize = '25px';
  }, 100);
  numDisplay();
  displayNum.style.color = '#07FF51';
}

function wrongNum() {
  msg.style.color = 'red';
  msg.style.fontSize = '27px';
  setTimeout(function () {
    msg.style.fontSize = '25px';
  }, 100);
}
function invalidNum() {
  msg.style.color = '#FFD03D';
  msg.style.fontSize = '27px';
  setTimeout(function () {
    msg.style.fontSize = '25px';
  }, 100);
}
const check = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    invalidNum();
    if (!guess && guess !== 0) {
      displayMessage('Please enter a number');
    } else if (guess === 0) {
      displayMessage('Only a number between 1 and 100 is allowed!');
    }
  } else if (guess === num) {
    displayMessage('Correct Number!');

    correntNum();

    if (highScore < score) {
      highScore = score;
      setHighScore(highScore);
    }
  } else if (guess !== num) {
    wrongNum();
    displayMessage(guess > num ? 'That is Too High!' : 'That is Too Low!');
    if (score > 0) {
      score--;
      setScore(score);
    } else {
      displayMessage('You have lost the game!');
    }
  }
  document.querySelector('.guess').focus();
};

console.log(num);
document.querySelector('.check').addEventListener('click', check);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setScore(score);
  num = randomNum();
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  msg.style.color = 'white';
  displayNum.style.color = 'white';
  displayNum.textContent = '?';
});

document.querySelector('html').addEventListener('keydown', function (e) {
  guess = Number(document.querySelector('.guess').value);
  if (e.key === 'Enter') {
    check(guess);
  }
});
