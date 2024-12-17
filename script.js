let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const resultText = document.getElementById('resultText');
    if (userGuess === secretNumber) {
        resultText.textContent = '正解！おめでとうございます！';
    } else if (userGuess < secretNumber) {
        resultText.textContent = 'もっと大きい数字です！';
    } else {
        resultText.textContent = 'もっと小さい数字です！';
    }
}
