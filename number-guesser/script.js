let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    const secretNum = Math.floor(Math.random() * 10);
    return secretNum;
}

function compareGuesses(userGuess, compGuess, secretNum) {
    const userDif = Math.abs(secretNum - userGuess);
    const compDif = Math.abs(secretNum - compGuess);
    return (userDif <= compDif) ? true : false;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;

console.log(currentRoundNumber)