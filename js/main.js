
let target;
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


let targetNumber = document.getElementById('target-number');

let roundNumber = document.getElementById('round-number');

let humanGuess = document.getElementById('human-guess');

let computerGuess = document.getElementById('computer-guess');

let humanDisplayScore = document.getElementById('human-score');

let computerDisplayScore = document.getElementById('computer-score');

let computerWinsDisplay = document.getElementById('computer-wins');

let subtractButton = document.getElementById('subtract');

let addButton = document.getElementById('add');

let guessButton = document.getElementById('guess');

let nextRoundButton = document.getElementById('next-round');

function winner(humanGuess, computerGuess) {
    
}

//Compare human guess and computer guess with target number
function compare(humanGuess, computerGuess, targetNumber) {
   let humanCompareTarget = Math.abs(humanGuess - targetNumber);
   let computerCompareTarget = Math.abs(computerGuess - targetNumber);

   return humanCompareTarget <= computerCompareTarget;
}

function generateTargetNumber() {
    return Math.floor(Math.random() * 10);
}

function updateScore(winner = '') {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function nextRound() {
    return currentRoundNumber++;
}

function handleValueChange(value) {
    if (value > 0 && value <= 9) {
        subtractButton.disabled = false;
    } else if (value > 9) {
        addButton.disabled = true;
    } else if (value <= 0 ) {
        subtractButton.disabled = true;
        addButton.disabled = false;
    } 
}

//Click on Guess Button
guessButton.onclick = function() {
    //update global variable
    target = generateTargetNumber();

    //Generate random computer guess number
    let currentComputerGuess = Math.floor(Math.random() * 10);

    // display computer guess and target number
    targetNumber.innerText = target;
    computerGuess.innerText = currentComputerGuess;
    //get human guess value
    let currentHumanGuess = humanGuess.value;

    //determine if the human or computer win
    let humanIsWinner = compare(currentHumanGuess, currentComputerGuess, target);
    let winner = humanIsWinner ? 'human' : 'computer'

    //update the correct score
    updateScore(winner);

    //Display the winner
    if (humanIsWinner) {
        guessButton.innerText = 'You Win!!!';
        guessButton.classList.toggle('winning-text');
    } else {
        computerWinsDisplay.innerText = 'Computer Win!!!';
    }

    //Display the current score
    humanDisplayScore.innerText = humanScore;
    computerDisplayScore.innerText = computerScore;

    //set the disable state for guess button
    guessButton.disabled = true;
    nextRoundButton.disabled = false;

}

nextRoundButton.onclick = function() {
    //update round number
    roundNumber.innerText = nextRound();

    //set the disable state for guess button
    guessButton.disabled = false;
    nextRoundButton.disabled = true;

    //reset the text in guess button
    guessButton.innerText = 'Make a Guess';
    computerWinsDisplay.innerText = '';

    //reset the text in target number and input box
    targetNumber.innerText = '';
    humanGuess.value = '';
    computerGuess.innerText = '?';
    guessButton.classList.remove('winning-text');
}

addButton.onclick = function() {
    humanGuess.value = +humanGuess.value + 1;

    handleValueChange(humanGuess.value);
}

subtractButton.onclick = function() {
    humanGuess.value = +humanGuess.value - 1;
    
    handleValueChange(humanGuess.value);
}






