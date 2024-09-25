function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  } else if ((player1 === "rock") && (player2 === "scissors")) {
    return "player1";
  } else if ((player1 === "rock") && (player2 === "lizard")) {
    return "player1";
  } else if ((player1 === "paper") && (player2 === "rock")) {
    return "player1";
  } else if ((player1 === "paper") && (player2 === "spock")) {
    return "player1";
  } else if ((player1 === "scissors") && (player2 === "paper")) {
    return "player1";
  } else if ((player1 === "scissors") && (player2 === "lizard")) {
    return "player1";
  } else if ((player1 === "lizard") && (player2 === "spock")) {
    return "player1";
  } else if ((player1 === "lizard") && (player2 === "paper")) {
    return "player1";
  } else if ((player1 === "spock") && (player2 === "scissors")) {
    return "player1";
  } else if ((player1 === "spock") && (player2 === "rock")) {
    return "player1";
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

const player1Choice = randomChoice();
const player2Choice = randomChoice();
console.log(rockPaperScissors(player1Choice, player2Choice));

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}