// then we turn the string again to an opject and reset the values
let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

updateScoreElement();

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  let computer = pickComputerMove();
  let result = "";
  if (playerMove === "Rock") {
    if (computer === "Rock") {
      result = "TIE";
    } else if (computer === "Paper") {
      result = "YOU LOSE";
    } else if (computer === "Scissors") {
      result = "YOU WIN";
    }
    // ------
  } else if (playerMove === "Paper") {
    if (computer === "Rock") {
      result = "YOU WIN";
    } else if (computer === "Paper") {
      result = "TIE";
    } else if (computer === "Scissors") {
      result = "YOU LOSE";
    }
    // ------
  } else if (playerMove === "Scissors") {
    if (computer === "Rock") {
      result = "YOU LOSE";
    } else if (computer === "Paper") {
      result = "YOU WIN";
    } else if (computer === "Scissors") {
      result = "TIE";
    }
  }
  // ------
  if (result === "YOU WIN") {
    score.win++;
  } else if (result === "YOU LOSE") {
    score.lose++;
  } else if (result === "TIE") {
    score.tie++;
  }
  // first we turn the score into string using JSON.stringify tnen put is inside local storage
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-move"
  ).innerHTML = `you picked [ ${playerMove} ] | Computer picked [ ${computer} ]`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `WINS : ${score.win} || LOSSES: ${score.lose} || TIES: ${score.tie}`;
}
