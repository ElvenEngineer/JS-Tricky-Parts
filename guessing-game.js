function guessingGame() {
    const ANSWER = Math.floor(Math.random() * 100);
    let isOver = false;
    let numGuesses = 0;

    return function guess(num) {
        if (isOver) return "The game is over, you already won!";
        numGuesses++;
        if (num === ANSWER) {
            isOver = true;
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num}in ${numGuessses} ${guess}.`;
        }
        if (num < ANSWER) return `${num} is too low!`;
        if (num > ANSWER) return `${num} is too high!`;

    }
}

const guessFunction = guessingGame();

console.log(guessFunction(50)); // Example guess: 50
console.log(guessFunction(60)); // Another guess: 75

module.exports = { guessingGame };
