// player1 is computer
// player2 is user

const readline = require("readline-sync");

function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
    } else if ((player1 === "rock") && (player2 === "scissors")) {
    return "player1"
  } else if ((player1 === "paper") && (player2 === "rock")) {
    return "player1"
  } else if ((player1 === "scissors") && (player2 === "paper")) {
    return "player1"
  } else {
    return "player2"
  }
}

function randomChoice() {
  const randNum = Math.floor(Math.random()*3+1);
  if (randNum === 1) {
    return "rock";
  } else if (randNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

const userChoice = readline.question("What would you like to choose? rock, paper or scissors?\n");
const compChoice = randomChoice();
console.log(rockPaperScissors(compChoice, userChoice));

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}