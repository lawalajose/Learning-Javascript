'use strict';

let numberToBeGuessed = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.number').textContent = numberToBeGuessed;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When the guess is empty
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  //When the score is zero
  else if (score === 0) {
    document.querySelector('.message').textContent = 'Game over!!';
  }
  //When the guess is correct
  else if (guess === numberToBeGuessed) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = 'Blue';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When the guess is too  high
  else if (guess > numberToBeGuessed) {
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  }

  //When the guess is too low
  else if (guess < numberToBeGuessed) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
