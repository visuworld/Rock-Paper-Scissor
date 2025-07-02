function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissor"];
    const computer_choice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    if (playerChoice === computer_choice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computer_choice === "scissor") ||
        (playerChoice === "paper" && computer_choice === "rock") ||
        (playerChoice === "scissor" && computer_choice === "paper")
    ) {
        result = "You Win!";
    } else {
        result = "Computer Wins!";
    }

    document.getElementById("result").innerText = `Computer chose ${computer_choice}. ${result}`;
}