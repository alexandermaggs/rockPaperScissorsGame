const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const actionMessage = document.getElementById("action-message");
let userChoice;
let computerChoice;
let computerTally = 0;
let userTally = 0;

function randomPick() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

rock.addEventListener("click", function () {
  userChoice = "rock";
  compareChoice(userChoice);
});

paper.addEventListener("click", function () {
  userChoice = "paper";
  compareChoice(userChoice);
});

scissors.addEventListener("click", function () {
  userChoice = "scissors";
  compareChoice(userChoice);
});

const compareChoice = () => {
  let computerChoice = randomPick();
  if (userChoice === "rock" && computerChoice === "scissors") {
    result.innerHTML = "<p>Rock beats scissors. You win!</p>";
    actionMessage.textContent = "Well done.";
    userTally++;
    userScore.textContent = userTally;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result.innerHTML = "<p>Paper beats rock. You win!";
    actionMessage.textContent = "Well done.";
    userTally++;
    userScore.textContent = userTally;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result.innerHTML = "<p>Scissors beats paper. You win!</p>";
    actionMessage.textContent = "Well done.";
    userTally++;
    userScore.textContent = userTally;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    result.innerHTML = "<p>Paper loses to scissors. You lose.</p>";
    actionMessage.textContent = "You lose.";
    computerTally++;
    computerScore.textContent = computerTally;
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    result.innerHTML = "<p>Scissors loses to rock. You lose. </p>";
    actionMessage.textContent = "You lose.";
    computerTally++;
    computerScore.textContent = computerTally;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result.innerHTML = "<p>Rock loses to paper. You lose.</p>";
    actionMessage.textContent = "You lose.";
    computerTally++;
    computerScore.textContent = computerTally;
  } else if (userChoice === "rock" && computerChoice === "rock") {
    result.innerHTML = "<p>Rock n roll. It's a draw. </p>";
    actionMessage.textContent = "Draw!";
  } else if (userChoice === "paper" && computerChoice === "paper") {
    result.innerHTML = "<p>Both have paper hands. It's a draw. </p>";
    actionMessage.textContent = "Draw!";
  } else if (userChoice === "scissors" && computerChoice === "scissors") {
    result.innerHTML = "<p>Too much sharpness. It's a draw. </p>";
    actionMessage.textContent = "Draw!";
  }
};
