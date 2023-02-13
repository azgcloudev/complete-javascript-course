'use strict';

// Select elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Set Scores to 0 when the app starts
score0El.textContent = 0;
score1El.textContent = 0;

// data variables
const scores = [0, 0];
let isPlaying = true;
let currentScore = 0;
let activePlayer = 0;

const init = () => {
  scores[0] = 0;
  scores[1] = 0;
  isPlaying = true;
  currentScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// function to clear score based on player
const clearScore = (score, current) => {
  score.textContent = 0;
  current.textContent = 0;
};

// hide the dice at the beginning
diceImg.classList.add('hidden');

// Roll dice functionality
// 1. Generate random dice number
btnRoll.addEventListener('click', () => {
  if (isPlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceImg.src = `dice-${dice}.png`;
    diceImg.classList.remove('hidden');

    // 3. Is rolled 1?
    if (dice != 1) {
      // 4. add dice number to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

// hold score
btnHold.addEventListener('click', () => {
  if (isPlaying) {
    // 1. add currrent score to total player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. if score >= than 100
    if (scores[activePlayer] >= 100) {
      // player wins
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector('.dice').classList.toggle('hidden');
    } else {
      // switch player
      switchPlayer();
    }
  }
});

// reset the game
btnNew.addEventListener('click', () => {
  clearScore(score0El, current0El);
  clearScore(score1El, current1El);
  init();
});
