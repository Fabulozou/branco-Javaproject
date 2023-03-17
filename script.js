let playerScore = 0;
let computerScore = 0;

// computer select function
function computerPlay() {
    const option = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * option.length);
    return option[random];
}
// player select function
// Prompt for player name with input validation
let playerName = prompt('Welcome ! Enter Player name')
game();
while (playerName.trim() === '') {
  playerName = prompt('Enter Player name');
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
// play round with nested if statements
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It is a tie current score: ${playerName} ${playerScore} - Branko ${computerScore}`;
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      playerScore++;
      return `${playerName} Wins with Rock, score: ${playerName} ${playerScore} - Branko ${computerScore}`;
    } else if (computerSelection === 'paper') {
      computerScore++;
      return `Branko wins with Paper, score: Branko ${computerScore} - ${playerName} ${playerScore}`;
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return `${playerName} Wins with Paper, score ${playerScore} - Branko ${computerScore}`;
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return `Branko wins with Scissors, score: Branko ${computerScore} - ${playerName} ${playerScore}`;
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      playerScore++;
      return `${playerName} Wins with Scissors, score: ${playerName} ${playerScore} - Branko ${computerScore}`;
    } else if (computerSelection === 'rock') {
      computerScore++;
      return `Branko wins with Rock, score: Branko ${computerScore} - ${playerName} ${playerScore}`;
    }
  }
}

// woza game functionality with no var 
function game() {
    for(var i = 1; i <= 5; i++) {
       const playerSelection = playerPlay();
       const computerSelection = computerPlay();
       alert(playRound(playerSelection, computerSelection));
      // terminal feedback.
       console.log(`${playerName}: ` + playerScore);
       console.log('Branko: ' + computerScore);
    }

    if(playerScore>computerScore){
      confirm(`Match result: ${playerName} Wins: ${playerScore} - ${computerScore} . Press Ok to restart.`)
      window.location.reload(playRound());
    }
    if (playerScore < computerScore) {
      if (confirm(`Match result: Branko Wins: ${computerScore} - ${playerScore}. Press OK to restart.`)) {
        window.location.reload(playRound());
    }
  } else {
    if (confirm(`Match result: It is a tie! ${playerScore} - ${computerScore}. Press OK to restart.`)) {
      window.location.reload(playRound());
    }
  }
}