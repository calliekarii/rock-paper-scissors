function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);

    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}