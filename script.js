const choices = ["ROCK","PAPER","SCISSORS"];

let computerSelectionGlobal;
let playerSelectionGlobal;

let playerScore = 0;
let computerScore = 0;

// Get all text holders
const playerScoreHolder = document.getElementById("playerScore");
const computerScoreHolder = document.getElementById("computerScore");
const playerChoiceHolder = document.getElementById("yourChoice");
const computerChoiceHolder = document.getElementById("computerChoice");

// Disable the replay button on start
document.getElementById("replayBtn").style.visibility = "hidden";

// Add event listener on all player buttons
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



function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelectionGlobal;
    computerSelectionGlobal = computerSelection;

    if(playerSelection == "ROCK") {
        document.getElementById("rock").classList.add("choiceBtn");
    } else if(playerSelection == "PAPER"){
        document.getElementById("paper").classList.add("choiceBtn");
    } else {
        document.getElementById("scissors").classList.add("choiceBtn");
    }

    if(computerSelection == "ROCK") {
        document.getElementById("rockComputer").classList.add("choiceBtn");
    } else if(computerSelection == "PAPER"){
        document.getElementById("paperComputer").classList.add("choiceBtn");
    } else {
        document.getElementById("scissorsComputer").classList.add("choiceBtn");
    }


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

            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;

        if(playerScore == 4) {
            playerScoreHolder.innerHTML = "";
            computerScoreHolder.innerHTML = "";
            playerChoiceHolder.innerHTML = "";
            computerChoiceHolder.innerHTML = "";

            choiceTxt.innerHTML = "You WON! Want to play again?";
            document.getElementById("rock").style.visibility = "hidden";
            document.getElementById("paper").style.visibility = "hidden";
            document.getElementById("scissors").style.visibility = "hidden";
            
            document.getElementById("rockComputer").style.visibility = "hidden";
            document.getElementById("paperComputer").style.visibility = "hidden";
            document.getElementById("scissorsComputer").style.visibility = "hidden"

            document.getElementById("replayBtn").style.visibility = "visible";

            
        } else if(computerScore == 4) {
            playerScoreHolder.innerHTML = "";
            computerScoreHolder.innerHTML = "";
            playerChoiceHolder.innerHTML = "";
            computerChoiceHolder.innerHTML = "";
            
            choiceTxt.innerHTML = "You lost :( Want to play again?";
            document.getElementById("rock").style.visibility = "hidden";
            document.getElementById("paper").style.visibility = "hidden";
            document.getElementById("scissors").style.visibility = "hidden";

            document.getElementById("rockComputer").style.visibility = "hidden";
            document.getElementById("paperComputer").style.visibility = "hidden";
            document.getElementById("scissorsComputer").style.visibility = "hidden"

            document.getElementById("replayBtn").style.visibility = "visible";
        } else {
            let result = playRound();
            
            if(result == "WIN") {
                choiceTxt.innerHTML = "You win! " + playerSelectionGlobal + " beats " + computerSelectionGlobal + ".";
                playerScore++;
                showScore();

            } else if(result == "LOSE") {
                choiceTxt.innerHTML = "You Lose! " + computerSelectionGlobal + " beats " + playerSelectionGlobal + ".";
                computerScore++;
                showScore();

            } else {
                choiceTxt.innerHTML = "It's a draw! The computer choosed " + computerSelectionGlobal + " just like you.";
                showScore();
            }

            setTimeout(afterChoice, 1000);
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

    // Function to start replaying
    function replay(){
        playerScore = 0;
        computerScore = 0;

        playerScoreHolder.innerHTML = "Your score: 0";
        computerScoreHolder.innerHTML = "Computer score: 0";
        computerChoiceHolder.innerHTML = "Computer choice: ";
        playerChoiceHolder.innerHTML = "Player choice: "

        document.getElementById("rock").style.visibility = "visible";
        document.getElementById("paper").style.visibility = "visible";
        document.getElementById("scissors").style.visibility = "visible";

        document.getElementById("rockComputer").style.visibility = "visible";
        document.getElementById("paperComputer").style.visibility = "visible";
        document.getElementById("scissorsComputer").style.visibility = "visible"

        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;

        document.getElementById("replayBtn").style.visibility = "hidden";

    }

    // Function to reset values
    function afterChoice(){
            document.getElementById("rock").classList.remove("choiceBtn");
            document.getElementById("paper").classList.remove("choiceBtn");
            document.getElementById("scissors").classList.remove("choiceBtn");

            document.getElementById("rock").disabled = false;
            document.getElementById("paper").disabled = false;
            document.getElementById("scissors").disabled = false

            document.getElementById("rockComputer").classList.remove("choiceBtn");
            document.getElementById("paperComputer").classList.remove("choiceBtn");
            document.getElementById("scissorsComputer").classList.remove("choiceBtn");
    }
    
    

    // Function to get a random Computer choice
    function getComputerChoice(){
        
        let random = Math.floor((Math.random() * choices.length))
        let randomName = choices[random];
        return (randomName);
    }