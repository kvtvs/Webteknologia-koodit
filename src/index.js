/** THE ALGORITHM:
 * The player decides a number between 0-10. Then the player starts the game and computer starts taking guesses on
 * the number. The player has to tell the computer after every guess if the guess was too low, too high or correct one.
 * When computer guesses the correct answer, it shows how many tries it took to get it.
 */

/**
 * OTHER ANSWERS:
 * average guess count:
 * minimum guess count: 1
 * maximum guess count:
 */

// setting up global variables, defining buttons, disabling some buttons before starting the game
let computerGuess = 0;
let numberOfGuesses = 0;
let currentGuess = -1;
let min = 0;
let max = 10;
const tries = [];

const startButton = document.getElementById('buttonStart');
const lowerButton = document.getElementById('buttonLower');
const higherButton = document.getElementById('buttonHigher');
const correctButton = document.getElementById('buttonCorrect');

lowerButton.disabled = true;
higherButton.disabled = true;
correctButton.disabled = true;

//reset everything
startButton.addEventListener('click', newGame);

function newGame() {
  computerGuess = 0;
  numberOfGuesses = 1;
  min = 0;
  max = 10;

  startButton.disabled = true;
  lowerButton.disabled = false;
  higherButton.disabled = false;
  correctButton.disabled = false;
  
  document.getElementById("historyList").innerHTML = '';
// the computer automaticly gives first guess
  guess();
}

function guess() {
  // generate the guess between min and max
  min = Math.ceil(min);
  max = Math.floor(max);
  currentGuess = Math.floor(Math.random() * (max - min)) + min;

  // tell user the guess
  document.getElementById("historyList").innerHTML = "<li>" + currentGuess + "</li>";
  console.log(currentGuess);
  // save the guess to the array
  tries.push(currentGuess);
  console.log(tries);
}


// the guess was too high
lowerButton.addEventListener('click', lower);

function lower() {
  // take a new guess that is lower than the previous one
  max = currentGuess - 1;

  // record the next guess
  document.getElementById("historyList").innerHTML += "<li>" + currentGuess + "</li>";
  guess();
}


// the guess was too low
higherButton.addEventListener('click', higher);

function higher() {
  // take a new guess that is higher that the previous one
  min = currentGuess + 1;

  // record the next guess
  document.getElementById("historyList").innerHTML += "<li>" + currentGuess + "</li>";
  guess();
}


// wohoo, the guess was correct
correctButton.addEventListener('click', correct);

function correct() {
  // display the correct answer 
  document.getElementById("historyList").innerHTML += "<li>" + currentGuess + " was correct answer!</li>";
  // disable some buttons and give out option to start again
  startButton.disabled = false;
  lowerButton.disabled = true;
  higherButton.disabled = true;
  correctButton.disabled = true;
  // show how many tries it took to get the correct answer
  document.getElementById("final").innerHTML = "It took " + tries.length + " tries to get the correct answer";
}