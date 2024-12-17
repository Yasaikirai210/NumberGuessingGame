let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const resultText = document.getElementById('resultText');
    if (userGuess === secretNumber) {
        resultText.textContent = 'Correct! Congratulations!';
    } else if (userGuess < secretNumber) {
        resultText.textContent = 'Higher! Try a larger number.';
    } else {
        resultText.textContent = 'Lower! Try a smaller number.';
    }
}
