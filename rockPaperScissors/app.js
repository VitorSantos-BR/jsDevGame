/* Picking out the elements by their ID, using getElementById.
They are being stored in the const variable.
*/
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice // Variable to store the user's choice.
let computerChoice // Variable to store the computer's choice.
let result // Variable to store the result.
/* 
Adds an event listener to each button.
possibleChoice.addEventListener('click', (e) => {...}): Adds a click event listener to each button.
*/
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice // Updates the display of the user's choice
    computerGeneratedChoice();
    getResult()
}))

function computerGeneratedChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or possiblechoices.lenght
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a DRAW!!! :/"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You WIN!!! :)"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You LOSE!!! :("
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You LOSE!!! :("
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You WIN!!! :)"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You WIN!!! :)"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You LOSE!!! :("
    }
    resultDisplay.innerHTML = result
}