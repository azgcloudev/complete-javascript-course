<<<<<<< HEAD
'use strict';

// generate secret number from 1 to 20
const secretNumber = Math.floor(Math.random() * 20 + 1);

// total score
let score = 20;
let highscore = 0;

// what to do when the check button is clicked
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '✅ Correct number!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when guess is to high
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too high!'
        score--;
        if (score > 0) {
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "😔 You lost the game"
        }
        // when guess is to low
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too low!'
        score--;
        if (score > 0) {
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "😔 You lost the game!"
        }
    }
});


// reset the game with the 'again' button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
});
=======
'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 21;

document.querySelector('.guess').value = 23;
*/

document.querySelector('.check').addEventListener('click', function () {
    let message = document.querySelector('.message');
	let guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		message.textContent = 'No Number added';
	}
});
>>>>>>> 135f394b7d5bf04a185a2c7644255d129fbc3fb3
