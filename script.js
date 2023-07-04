const choices = ["ROCK","PAPER","SCISSORS"];

let computerSelectionGlobal;
let playerSelectionGlobal;

let loopCount = 0;

let playerScore = 0;
let computerScore = 0;

document.getElementById("replayBtn").style.visibility = "hidden";

const rockButton = document.getElementById("rock").addEventListener("click", () => {
    choiceRock();
    game();
});

const paperButton = document.getElementById("paper").addEventListener("click", () => {
    choicePaper();
    game();
});

const scissorsButton = document.getElementById("scissors").addEventListener("click", () => {
    choiceScissors();
    game();
});

const replayButton = document.getElementById("replayBtn").addEventListener("click", () => {
    replay();
});

const playerScoreHolder = document.getElementById("playerScore");
const computerScoreHolder = document.getElementById("computerScore");
const computerChoiceHolder = document.getElementById("computerChoice");


function getComputerChoice(){
    
    let random = Math.floor((Math.random() * choices.length))
    let randomName = choices[random];
    return (randomName);
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelectionGlobal;

    computerSelectionGlobal = computerSelection;

    computerChoiceHolder.innerHTML = "Computer choice: " + computerSelection;
    console.log("Computer choosed: " + computerSelection);
    console.log("Player choosed " + playerSelection);

    if(playerSelection == "ROCK" && computerSelection == "ROCK"){
        return "DRAW";
    } else if(playerSelection == "ROCK" && computerSelection == "PAPER") {
        return "LOSE";
    } else if(playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "WIN";
    } else if(playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "WIN";
    } else if(playerSelection == "PAPER" && computerSelection == "PAPER") {
        return "DRAW";
    } else if(playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return "LOSE";
    } else if(playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return "LOSE";
    } else if(playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return "WIN"
    } else if(playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        return "DRAW";
    } else {
        alert("Invalid input! Type Again");
        playRound();
    }
  }

  function game() {

        if(playerScore == 4) {
            playerScoreHolder.innerHTML = "";
            computerScoreHolder.innerHTML = "";
            computerChoiceHolder.innerHTML = "You WON! Want to play again?";
            document.getElementById("rock").style.visibility = "hidden";
            document.getElementById("paper").style.visibility = "hidden";
            document.getElementById("scissors").style.visibility = "hidden";
            document.getElementById("replayBtn").style.visibility = "visible";
            
        } else if(computerScore == 4) {
            playerScoreHolder.innerHTML = "";
            computerScoreHolder.innerHTML = "";
            computerChoiceHolder.innerHTML = "You lost :( Want to play again?";
            document.getElementById("rock").style.visibility = "hidden";
            document.getElementById("paper").style.visibility = "hidden";
            document.getElementById("scissors").style.visibility = "hidden";
            document.getElementById("replayBtn").style.visibility = "visible";
        } else {
            let result = playRound();
            
            if(result == "WIN") {
                console.log("You win! " + playerSelectionGlobal + " beats " + computerSelectionGlobal + ".");
                playerScore++;
                console.log("Your score: " + playerScore);
                console.log("Computer score: " + computerScore);
                showScore();

            } else if(result == "LOSE") {
                console.log("You Lose! " + computerSelectionGlobal + " beats " + playerSelectionGlobal + ".");
                computerScore++;
                console.log("Your score: " + playerScore);
                console.log("Computer score: " + computerScore);
                showScore();

            } else {
                console.log("It's a draw! The computer choosed " + computerSelectionGlobal + " just like you.");
                showScore();
            }
        }
  }

  function showResult() {
    if(playerScore > computerScore) {
        console.log("You won! Your score: " + playerScore + " | Computer score: " + computerScore);
    } else if(computerScore > playerScore) {
        console.log("You lost! Your score: " + playerScore + " | Computer score: " + computerScore);
    } else {
        console.log("It's a draw! Your score: " + playerScore + " | Computer score: " + computerScore);
    }
}

    function choiceRock(){
        playerSelectionGlobal = "ROCK";
    }

    function choicePaper(){
        playerSelectionGlobal = "PAPER";
    }

    function choiceScissors(){
        playerSelectionGlobal = "SCISSORS";
    }

    function showScore(){
        playerScoreHolder.innerHTML = "Your score: " + playerScore;
        computerScoreHolder.innerHTML = "Computer score: " + computerScore;
    }

    function replay(){
        playerScore = 0;
        computerScore = 0;

        playerScoreHolder.innerHTML = "Your score: 0";
        computerScoreHolder.innerHTML = "Computer score: 0";
        computerChoiceHolder.innerHTML = "Computer choice: ";

        document.getElementById("rock").style.visibility = "visible";
        document.getElementById("paper").style.visibility = "visible";
        document.getElementById("scissors").style.visibility = "visible";
        document.getElementById("replayBtn").style.visibility = "hidden";

    }

  

