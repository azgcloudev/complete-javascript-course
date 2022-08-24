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
