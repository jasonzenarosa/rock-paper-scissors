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

let player_choice = getPlayerChoice()
let computer_choice = getComputerChoice()

alert(`Player Choice: ${player_choice}\nComputer Choice: ${computer_choice}`)