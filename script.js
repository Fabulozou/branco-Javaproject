let playerScore = 0;
let computerScore = 0;

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

// play 1 single round
function playRound(playerSelection, computerSelection) {
     if(playerSelection === computerSelection) {
        return 'It is a tie';
    }


    if(playerSelection === 'rock') {
        if(computerSelection === 'scissors') {
            playerScore++;
            return `${playerName} wins with rock`;
        } else if(computerSelection === 'paper') {
            computerScore++;
            return 'Branko wins with paper'
        }
    }

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

       console.log(`${playerName}: ` + playerScore);
       console.log('Branko: ' + computerScore);
    }

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