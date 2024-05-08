let playerScore = 0;
let computerScore = 0;
const WINSCORE = 5;
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

function getComputerChoice() {
    let name;
    let choice = getRandomInt(1, 4);
    switch (choice) {
        case 1:
            name = "rock.png";
            break;
        case 2:
            name = "paper.png";
            break;
        case 3:
            name = "scissors.png";
            break;
    }
    document.querySelector('.computer').innerHTML = `<img src="${name}">`;
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice === computerChoice) {
        result = "Tie";
    } else if (
        (humanChoice === ROCK && computerChoice === SCISSORS) ||
        (humanChoice === PAPER && computerChoice === ROCK) ||
        (humanChoice === SCISSORS && computerChoice === PAPER)
     ) {
        result = "You won!";
        playerScore++;
    } else {
        result = "You lost!";
        computerScore++;
    }
    updateResults(result);
    checkWinner();
}

function updateResults(result) {
    document.querySelector(".result").textContent = result;
    document.querySelector(".computerScore").textContent = computerScore;
    document.querySelector(".playerScore").textContent = playerScore;
}

function checkWinner() {
    if (playerScore === WINSCORE) {
        document.querySelector(".finalResult").textContent = "You are the winner!";
        endGame();
    } else if (computerScore === WINSCORE) {
        document.querySelector(".finalResult").textContent = "Computer won!";
        endGame();
    }
}

function endGame() {
    document.querySelectorAll(".buttons").forEach(button => button.disabled = true);
    document.querySelectorAll(".buttons").forEach(button => button.style.cursor = "auto");
    document.getElementById("playAgain").style.display = "block";

}

function clickButton(button) {
    let humanChoice = parseInt(button.id);
    let imageSource = button.querySelector("img").src;
    document.querySelector('.choice').innerHTML = `<img src="${imageSource}">`;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    }

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    document.querySelectorAll(".buttons").forEach(button => button.disabled = false);
    document.querySelectorAll(".buttons").forEach(button => button.style.cursor = "pointer");
    document.querySelector(".playerScore").textContent = "0";
    document.querySelector(".computerScore").textContent = "0";
    document.querySelector(".choice").textContent = "";
    document.querySelector(".computer").textContent = "";
    document.querySelector(".result").textContent = "";
    document.querySelector(".finalResult").textContent = "";
    document.getElementById("playAgain").style.display = "none";
}

