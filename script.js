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

// computer(Branko) select function


// Prompt for player name with input validation
let playerName = '';
while (playerName.length===0) {
  playerName = prompt('Enter Player name');
}

// computer select function
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


// player select function with input validation
function playerPlay() {
  const maxAttempts = 5;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const input = prompt('Rock, Paper, Scissors?');
    const option = input.toLowerCase();
    
   
    if (option === 'rock' || option === 'paper' || option === 'scissors') {
      return option;
    } else {
      alert('Incorrect input! Try again');
      attempts++;
    }
  }

  // Maximum number of attempts exceeded
  alert(`You have exceeded the maximum number of attempts (${maxAttempts}). The game will now exit.`);
  throw new Error('Maximum number of attempts exceeded');

}

// play 1 single round
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
      return 'Branko wins with paper';


// player select function with input validation
function playerPlay() {
  const maxAttempts = 5;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const input = prompt('Rock, Paper, Scissors?');
    const option = input.toLowerCase();
    
   
    if (option === 'rock' || option === 'paper' || option === 'scissors') {
      return option;
    } else {
      alert('Incorrect input! Try again');
      attempts++;
    }
  }

  // Maximum number of attempts exceeded
  alert(`You have exceeded the maximum number of attempts (${maxAttempts}). The game will now exit.`);
  throw new Error('Maximum number of attempts exceeded');
}

// automatic play function
//function autoPlay() {
  //  const playerSelection = playerPlay();
    //const computerSelection = computerPlay();
   // alert(playRound(playerSelection, computerSelection));
//}    

//cheat function
//function cheat() {
  //  playerScore++;
    //alert(`${playerName} of the PeakyBlinders is Inevitable!!`);   
//}

// automatic play function
//function autoPlay() {
  //  const playerSelection = playerPlay();
    //const computerSelection = computerPlay();
   // alert(playRound(playerSelection, computerSelection));
//}    

//cheat function
//function cheat() {
  //  playerScore++;
    //alert(`${playerName} of the PeakyBlinders is Inevitable!!`);   
//}

// play 1 single round
function playRound(playerSelection, computerSelection) {
     if(playerSelection === computerSelection) {
        return 'It is a tie';


      return `Branko wins with Paper, score: Branko ${computerScore} - ${playerName} ${playerScore}`;

    }
  }


  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return `${playerName} Wins with Paper, score ${playerScore} - Branko ${computerScore}`;
    } else if (computerSelection === 'scissors') {
      computerScore++;

      return 'Branko wins with scissors';


    if(playerSelection === 'rock') {
        if(computerSelection === 'scissors') {
            playerScore++;
            return `${playerName} wins with rock`;
        } else if(computerSelection === 'paper') {
            computerScore++;
            return 'Branko wins with paper'
        }

    }
  }



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
    if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            playerScore++;
            return `${playerName} wins with paper`;
        } else if(computerSelection === 'scissors') {
            computerScore++;
            return 'Branko wins with scissors';
        }
    }

    if(playerSelection === 'scissors') {
         if(computerSelection === "paper") {
            playerScore++;
            return `${playerName} wins with scissors`;
        } else if(computerSelection === 'rock') {
            computerScore++;
            return 'Branko wins with rock';
        }
    }
}

// reset function
function reset() {
    playerScore = 0;
    computerScore = 0;
}    

// game
function game() {
     for(var i = 1; i <= 5; i++) {
       const playerSelection = playerPlay();
       const computerSelection = computerPlay();
       alert(playRound(playerSelection, computerSelection));

    if (playAgain) {
      const computerSelection = computerPlay();
      alert(playRound(playerSelection, computerSelection));
      playCount++;
    }

    // Stop the game if the player has played 5 rounds or if they quit the game
    if (playCount === 5 || !playAgain) {
      alert(`The game has ended! ${playerName}: ${playerScore}, Computer: ${computerScore}`);
      break;
    }
  }
  if (playerScore > computerScore) {
    if (confirm(`Matchresult: ${playerName} Wins: ${playerScore} - ${computerScore}. Press Ok to restart.)) { window.location.reload('./'); } } else if (playerScore < computerScore) { if (confirm(Match result: Branko Wins: ${computerScore} - ${playerScore}. Press Ok to restart)) { window.location.reload('./'); } } else { if (confirm(Match result: It is a tie! ${playerScore} - ${computerScore}. Press Ok to restart`)) {
      window.location.reload('./');
      }
      }
      }
      game();


    if(playerScore>computerScore){
        confirm(`Match result: ${playerName} Wins: ${playerScore} - ${computerScore} . Press Ok to restart.`)
        reset();
        game();
    }
    else if(playerScore<computerScore){
        confirm(`Match result: Branko Wins: ${computerScore} - ${playerScore} . Press Ok to restart`)
        reset();
        game();
    }
    else{
        confirm(`Match result: It is a tie! ${playerScore} - ${computerScore} . Press Ok to restart`)
        reset();
        game();
    }
}
// start the game

game();

game();

    for(let i = 1; i <= 5; i++) {
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

