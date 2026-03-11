let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    const result = document.querySelector("#result");
    const resultItem = document.createElement("div");
    
    if (humanChoice === computerChoice) {
        resultItem.textContent = `You both played ${humanChoice}, it's a tie.`;
    } else if (((computerChoice === "rock") && (humanChoice === "paper")) || ((computerChoice === "paper") && (humanChoice === "scissors")) || ((computerChoice === "scissors") && (humanChoice === "rock"))) {
        resultItem.textContent = `You played ${humanChoice} and the computer played ${computerChoice}, you win.`;
        humanScore ++;
        document.getElementById("humanScoreEl").textContent = humanScore;
    } else {
        resultItem.textContent = `You played ${humanChoice} and the computer played ${computerChoice}, you lose.`;
        computerScore ++;
        document.getElementById("computerScoreEl").textContent = computerScore;
    }

    result.appendChild(resultItem);

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            document.getElementById("winner").textContent = "Human wins!";
        } else {
            document.getElementById("winner").textContent = "Computer wins!";
        }
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock",getComputerChoice());
})

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper",getComputerChoice());
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors",getComputerChoice());
})