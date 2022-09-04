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

function playGame(player_choice) {
    let computer_choice = getComputerChoice()
    let result;
    let dict = {R: 'Rock', P: 'Paper', S: 'Scissors'};
    if (player_choice === computer_choice) {
        result = "It's a tie!"
    } else if ((player_choice === 'R' && computer_choice === 'P') || (player_choice === 'P' && computer_choice === 'S') || (player_choice === 'S' && computer_choice === 'R')) {
        result = 'You lost!'
    } else if ((player_choice === 'P' && computer_choice === 'R') || (player_choice === 'S' && computer_choice === 'P') || (player_choice === 'R' && computer_choice === 'S')) {
        result = 'You won!'
    }
    alert(`Your choice: ${dict[player_choice]}\nComputer choice: ${dict[computer_choice]}\n${result}`)
}

r_button = document.querySelector('.rock')
r_button.addEventListener('click', () => playGame('R'))
p_button = document.querySelector('.paper')
p_button.addEventListener('click', () => playGame('P'))
s_button = document.querySelector('.scissors')
s_button.addEventListener('click', () => playGame('S'))
