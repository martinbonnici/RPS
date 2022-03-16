let playerScore = 0
let cpuScore = 0

while (playerScore < 5 && cpuScore < 5) {
    playRound()
}

if (playerScore === 5) {
    console.log(`You win! Final score: You: ${playerScore} CPU: ${cpuScore}.`)
} else if (cpuScore === 5) {
    console.log(`You lose! Final score: You: ${playerScore} CPU: ${cpuScore}.`)
}


function playRound() {

// Take user's input
let player = prompt("Enter R for rock, P for paper or S for scissors")

// r = Rock
// p = Paper
// s = Scissors
if (player.toLowerCase() === "r") {
    player = "rock"
} else if (player.toLowerCase() === "p") {
    player = "paper"
} else if (player.toLowerCase() === "s") {
    player = "scissors"
}

// Generate a random number between 1 - 3 
let cpu = Math.floor(Math.random() * 3) + 1 

// 1 = Rock
// 2 = Paper
// 3 = Scissors
if (cpu === 1) {
    cpu = "rock"
} else if (cpu === 2) {
    cpu = "paper"
} else if (cpu === 3) {
    cpu = "scissors"
}

// If user input and computer is equal then tie
if (player === cpu) {
    console.log("Tie")
    console.log(`You: ${playerScore} CPU: ${cpuScore}`)
// Else if player is rock and cpu is scissors then player wins
} else if (player === "rock" && cpu === "scissors") {
    console.log("You picked rock and your opponent picked scissors.")
    console.log("You win that round")
    playerScore++
    console.log(`You: ${playerScore} CPU: ${cpuScore}`)
// Else if player is paper and cpu is rock then player wins
} else if (player === "paper" && cpu === "rock") {
    console.log("You picked paper and your opponent picked rock.")
    console.log("You win that round")
    playerScore++
    console.log(`You: ${playerScore} CPU: ${cpuScore}`)
// Else if player is scissors and cpu is paper then player wins
} else if (player === "scissors" && cpu === "paper") {
    console.log("You picked scissors and your opponent picked paper.")
    console.log("You win that round")
    playerScore++
    console.log(`You: ${playerScore} CPU: ${cpuScore}`)
// Else if player is scissors and cpu is rock then cpu wins
} else if (player === "scissors" && cpu === "rock") {
    console.log("You picked scissors and your opponent picked rock.")
    console.log("You lost that round")
    cpuScore++
    console.log(`You: ${playerScore} CPU: ${cpuScore}`)
// Else if player is rock and cpu is paper then cpu wins
} else if (player === "rock" && cpu === "paper") {
    console.log("You picked rock and your opponent picked paper.")
    console.log("You lost that round")
    cpuScore++
    console.log(`You: ${playerScore} CPU: ${cpuScore}`)
// Else if player is paper and cpu is scissors then cpu wins
} else if (player === "paper" && cpu === "scissors") {
    console.log("You picked paper and your opponent picked scissors.")
    console.log("You lost that round")
    cpuScore++
    console.log(`You: ${playerScore} CPU: ${cpuScore}`)
}
}



