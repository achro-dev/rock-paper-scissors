const choices = ["ROCK","PAPER","SCISSORS"];

function getComputerChoice(){
    
    let random = Math.floor((Math.random() * choices.length))
    let randomName = choices[random];
    return (randomName);
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();

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

        if(playRound() == "WIN") {
            console.log("Win");
            return;
        } else if(playRound() == "LOSE") {
            console.log("Lose");
            return;
        } else if(playRound() == "DRAW"){
            console.log("Draw");
            return;
        }
  }


