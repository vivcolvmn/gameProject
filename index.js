let secretNumber;
let guesses = [];
const incorrectGuesses = document.getElementById("incorrect");

document.getElementById('start-game').addEventListener('click', function() {
    const maxRange = document.getElementById('max-range').value;
    secretNumber = Math.floor(Math.random() * maxRange) + 1;

    document.getElementById('setup').style.display = 'none';
    document.getElementById('guess-section').style.display = 'block';
    document.getElementById('result-section').style.display = 'none';
});

document.getElementById('submit-guess').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess').value);
    guesses.push(guess);

    let message;
    const guessList = document.getElementById('guess-list');

    if (guess < secretNumber) {
        message = 'Higher';
        incorrectGuesses.innerText = `Incorrect Guesses: ${guesses.length}`;
    } else if (guess > secretNumber) {
        message = 'Lower';
        incorrectGuesses.innerText = `Incorrect Guesses: ${guesses.length}`;
    } else {
        message = 'You guessed the number!';
        // Clear all previous guesses and show only the correct guess
        guessList.innerHTML = '';
        guesses = [guess];

        // Display the reset button
        document.getElementById('reset-game').style.display = 'block';
    }

    document.getElementById('result-message').textContent = message;
    document.getElementById('result-section').style.display = 'block';

    if (message === 'You guessed the number!') {
        document.getElementById('guess-section').style.display = 'none';
    }

    // Update the guess list with the current guess
    const newGuess = document.createElement('li');
    newGuess.textContent = guess;
    guessList.appendChild(newGuess);
});

document.getElementById('reset-game').addEventListener('click', function() {
    // Reset the game state
    secretNumber = null;
    guesses = [];

    // Reset the HTML elements
    incorrectGuesses.innerText = `Incorrect Guesses: 0`;
    document.getElementById('max-range').value = '';
    document.getElementById('guess').value = '';
    document.getElementById('guess-list').innerHTML = '';
    document.getElementById('result-message').textContent = '';

    document.getElementById('setup').style.display = 'block';
    document.getElementById('guess-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'none';
    document.getElementById('reset-game').style.display = 'none';
});
