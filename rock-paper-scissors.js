function getComputerChoice() {
    let i = Math.ceil(Math.random() * 3);

    if (i === 1) {
        return "rock";
    } else if (i === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("What will you play?");
}

function playRound(humanChoice, computerChoice) {
    const nHumanChoice = humanChoice.toLowerCase();

    if (nHumanChoice === computerChoice) {
        console.log(`It's a tie, you both played ${nHumanChoice}.`)
    } else if (((computerChoice = "rock") && (nHumanChoice = "paper")) || ((computerChoice = "paper") && (nHumanChoice = "scissors")) || ((computerChoice = "scissors") && (nHumanChoice = "rock"))) {
        console.log(`You win, ${nHumanChoice} beats ${computerChoice}!`)
    } else {
        console.log(`You lose, ${computerChoice} beats ${nHumanChoice}!`)
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);