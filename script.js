const choices = ["ROCK","PAPER","SCISSORS"];

let computerSelectionGlobal;
let playerSelectionGlobal;

let loopCount = 0;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    
    let random = Math.floor((Math.random() * choices.length))
    let randomName = choices[random];
    return (randomName);
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();

    playerSelectionGlobal = playerSelection;
    computerSelectionGlobal = computerSelection;

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
    
    function countLoop() {
        ++loopCount;
        if(loopCount == 5) showResult();
    }

    for(let i = 1; i <= 5; i++) {
        let result = playRound();
        
        if(result == "WIN") {
            console.log("You win! " + playerSelectionGlobal + " beats " + computerSelectionGlobal + ".");
            playerScore++;
            console.log("Your score: " + playerScore);
            console.log("Computer score: " + computerScore);

        } else if(result == "LOSE") {
            console.log("You Lose! " + computerSelectionGlobal + " beats " + playerSelectionGlobal + ".");
            computerScore++;
            console.log("Your score: " + playerScore);
            console.log("Computer score: " + computerScore);

        } else {
            console.log("It's a draw! The computer choosed " + computerSelectionGlobal + " just like you.");
        }

        countLoop();
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
  }


  

