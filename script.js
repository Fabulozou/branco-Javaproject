let playerScore = 0;
let computerScore = 0;
let playerName = prompt('Enter Player name')
game();

//const playerSelection = playerPlay();
//const computerSelection = computerPlay();

// computer select function

function computerPlay() {
    
    const option = ['rock', 'paper', 'scissors'];

    let random = Math.floor(Math.random() * 3);
    
    return option[random];
}

//console.log('Branko: ' + computerSelection);

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

//console.log('Number Juan: ' + playerSelection);


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

// console.log(playRound(playerSelection, computerSelection));
//playRound(playerSelection, computerSelection);

//console.log('Number Juan: ' + playerScore);
//console.log('Branko: ' + computerScore);


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
        alert(`Match result: ${playerName} wins!`)
    }
    else if(playerScore<computerScore){
        alert('Match result: Branko wins!')
    }
    else{
        alert('Match result: It is a tie!')
    }

}
