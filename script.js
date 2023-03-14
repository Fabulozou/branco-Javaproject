let playerScore = 0;
let computerScore = 0;
let playerName = prompt('Welcome ! Enter Player name')
game();

// computer select function

function computerPlay() {
    const option = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * option.length);
    return option[random];
}

// player select function
function playerPlay() {
    
    let correctInput =  true;
    // Loop will run until the user gives a correct input
    while(correctInput)
    {
        const input = prompt('Rock,Paper,Scissors?');
        const option = input.toLowerCase();

        if(option === 'rock' || option === 'paper' || option === 'scissors')
        {  
            return option;
        }
        else
        {
            alert('Incorrect input! Try again');
        }
    }
}

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


// game
function game() {

    for(var i = 1; i <= 5; i++) {
       const playerSelection = playerPlay();
       const computerSelection = computerPlay();
       alert(playRound(playerSelection, computerSelection));

       console.log(`${playerName}: ` + playerScore);
       console.log('Branko: ' + computerScore);
    }

    let reStart = false;

    if(playerScore>computerScore){
       reStart = confirm(`Match result: ${playerName} Wins: ${playerScore} - ${computerScore} . Press Ok to restart.`)
            
    }
    else if(playerScore<computerScore){
       reStart = confirm(`Match result: Branko Wins: ${computerScore} - ${playerScore} . Press Ok to restart`)
            
    }
    else{
       reStart = confirm(`Match result: It is a tie! ${playerScore} - ${computerScore} . Press Ok to restart`)
            
    }
    
    if(reStart)
     window.location.reload("./");

}

