const choices = ["rock", "paper", "scissors"];
const playerDislplay = document.getElementById("playerDisplay");
const computerDislplay = document.getElementById("computerDisplay");
const resultDislplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("PlayerScoreDisplay");
const computerScoreDisplay = document.getElementById("ComputerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]; //JavaScript Math random chatgpt
    let result = "";
    
    //console.log(computerChoice);

    if (playerChoice === computerChoice){ //rockpaper scissors questions
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN! ws in the chaaaat" : "YOU LOSE!, better luck next time";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN! ws in the chaaaat" : "YOU LOSE!, better luck next time";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN! ws in the chaaaat" : "YOU LOSE!, better luck next time";
                break;
        }
    }

    playerDislplay.textContent = `Player: ${playerChoice}`;
    computerDislplay.textContent = `computer: ${computerChoice}`;
    resultDislplay.textContent = result;

    resultDislplay.classList.remove("greentext","redtext") // see Fix JavaScript Text Color chatgpt

    switch(result){
        case "YOU WIN! ws in the chaaaat":
            resultDislplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case "YOU LOSE!, better luck next time":
            resultDislplay.classList.add("redtext");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        
    }
}