'use strict';

// Select elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceImg = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// Set Scores to 0 when the app starts
score0El.textContent = 0;
score1El.textContent = 0;

// data variables
let currentScore = 0;
let activePlayer = 0;

// hide the dice at the beginning
diceImg.classList.add("hidden");


// Roll dice functionality
// 1. Generate random dice number
btnRoll.addEventListener("click", () => {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceImg.src = `dice-${dice}.png`;
    diceImg.classList.remove("hidden");

    // 3. Is rolled 1?
    if (dice != 1) {
        // 4. add dice number to current score
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        // switch player
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
    }
});


