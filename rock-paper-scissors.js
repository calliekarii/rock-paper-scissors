function getComputerChoice() {
    let n = Math.ceil(Math.random() * 3);

    if (n === 1) {
        return "rock";
    } else if (n === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("What will you play?");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const nHumanChoice = humanChoice.toLowerCase();
    
        if (nHumanChoice === computerChoice) {
            console.log(`It's a tie, you both played ${nHumanChoice}.`)
        } else if (((computerChoice === "rock") && (nHumanChoice === "paper")) || ((computerChoice === "paper") && (nHumanChoice === "scissors")) || ((computerChoice === "scissors") && (nHumanChoice === "rock"))) {
            console.log(`You win, ${nHumanChoice} beats ${computerChoice}!`)
            humanScore++
        } else {
            console.log(`You lose, ${computerChoice} beats ${nHumanChoice}!`)
            computerScore++
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`YOU WIN THE GAME WITH A FINAL SCORE OF ${humanScore}-${computerScore}!`)
    } else if (humanScore < computerScore) {
        console.log(`YOU WIN THE GAME WITH A FINAL SCORE OF ${humanScore}-${computerScore}!`)
    } else {
        console.log(`IT'S A TIE WITH A FINAL SCORE OF ${humanScore}-${computerScore}!`)
    }
}

playGame();