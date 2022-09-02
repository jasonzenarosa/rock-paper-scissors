function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 0:
            return 'R'
        case 1:
            return 'P'
        case 2:
            return 'S'
    }
}

function getPlayerChoice() {
    let player_choice = prompt('Rock, paper, or scissors?')
    switch (player_choice.toUpperCase()) {
        case 'ROCK':
        case 'R':
            return 'R'
        case 'PAPER':
        case 'P':
            return 'P'
        case 'SCISSORS':
        case 'S':
            return 'S'
        default:
            return false
    }
}

function playGame(player_choice, computer_choice) {
    let result

    if (player_choice === computer_choice) {
        result = "It's a tie!"
    } else if ((player_choice === 'R' && computer_choice === 'P') || (player_choice === 'P' && computer_choice === 'S') || (player_choice === 'S' && computer_choice === 'R')) {
        result = 'You lost!'
    } else if ((player_choice === 'P' && computer_choice === 'R') || (player_choice === 'S' && computer_choice === 'P') || (player_choice === 'R' && computer_choice === 'S')) {
        result = 'You won!'
    }
    return `Your choice: ${player_choice}\nComputer choice: ${computer_choice}\n${result}`
}

let player_choice
let computer_choice

while (true) {
    player_choice = getPlayerChoice()
    if (!player_choice) {
        alert('Invalid input! Try again.')
    } else {
        computer_choice = getComputerChoice()
        alert(playGame(player_choice, computer_choice))
    }
}