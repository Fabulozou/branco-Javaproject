let playerScore = 0;
let computerScore = 0;

// Prompt for player name with input validation
let playerName = '';
while (playerName.trim() === '') {
  playerName = prompt('Enter Player name');
}
// computer(Branko) select function
function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * options.length);
  return options[random];
}
// player select function
function playerPlay() {
  let correctInput = true;
  // Loop will run until the user gives a correct input
  while (correctInput) {
    const input = prompt('Rock, Paper, Scissors?');
    const option = input.toLowerCase();

    if (option === 'rock' || option === 'paper' || option === 'scissors' || option === 'dictator') {
      return option;
    } else {
      alert('Incorrect input! Try again');
    }
  }
}
// play 1 single round with nested if statements
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It is a tie';
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      playerScore++;
      return `${playerName} wins with rock`;
    } else if (computerSelection === 'paper') {
      computerScore++;
      return 'Branko wins with paper';
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return `${playerName} wins with paper`;
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return 'Branko wins with scissors';
    }
  }

  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      playerScore++;
      return `${playerName} wins with scissors`;
    } else if (computerSelection === 'rock') {
      computerScore++;
      return 'Branko wins with rock';
    }
  }
}

// woza game functionality with no var 
function game() {
  let playCount = 0;
  let playAgain = true;

  while (playAgain) {
    // Ask the user if they want to quit when cancel is pressed
    let playerSelection = null;
    do {
      const input = prompt('Rock, Paper, Scissors? Type cancel to quit the game.');
      if (input === null) {
        if (confirm('Are you sure you want to quit the game?')) {
          playAgain = false;
          break;
        }
      } else if (input.trim().toLowerCase() === 'cancel') {
        if (confirm('Are you sure you want to quit the game?')) {
          playAgain = false;
          break;
        }
      } else if (input.trim().toLowerCase() === 'rock' || input.trim().toLowerCase() === 'paper' || input.trim().toLowerCase() === 'scissors') {
        playerSelection = input.trim().toLowerCase();
      } else {
        alert('Incorrect input! Try again');
      }
    } while (playerSelection === null);

    if (playAgain) {
      const computerSelection = computerPlay();
      alert(playRound(playerSelection, computerSelection));
      playCount++;
    }

    // Stop the game if the player has played 5 rounds or if they quit the game
    if (playCount === 5 || !playAgain) {
      alert(`The game has ended! ${playerName}: ${playerScore}, Branko: ${computerScore}`);
      break;
    }
  }

  if (playerScore > computerScore) {
    if (confirm(`Match result: ${playerName} Wins: ${playerScore} - ${computerScore}. Press OK to restart.`)) {
      window.location.reload('./');
    }
  } else if (playerScore < computerScore) {
    if (confirm(`Match result: Branko Wins: ${computerScore} - ${playerScore}. Press OK to restart.`)) {
      window.location.reload('./');
    }
  } else {
    if (confirm(`Match result: It is a tie! ${playerScore} - ${computerScore}. Press OK to restart.`)) {
      window.location.reload('./');
    }
  }
}
game();
