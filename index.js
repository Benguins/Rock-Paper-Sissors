const score = {
  playerWins: 0,
  computerWins: 0,
  Ties: 0
}

function getComputerChoice(){
  let computerChoice;
  const randomNumber = Math.round(Math.random() * (2 - 0) + 0);
  if(randomNumber === 0){
    computerChoice = 'rock';
  } else if(randomNumber === 1){
    computerChoice = 'paper';
  } else if (randomNumber === 2){
    computerChoice = 'scissors';
  } 
  return computerChoice;
};

function getHumanChoice(){
  const humanChoice = prompt('Pick a move, rock, paper or scissors').toLowerCase();
  if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
    return humanChoice;
  } else {
    alert('Please pick a valid move');
    location.reload();
  }
};

function playRound(){
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  let result;

  if(humanChoice === 'rock' && computerChoice === 'rock'){
    result = 'tied';
    score.Ties++;
  } else if(humanChoice === 'rock' && computerChoice === 'paper'){
    result = 'lost';
    score.computerWins++;
  } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
    result = 'win';
    score.playerWins++;
  } else if(humanChoice === 'paper' && computerChoice === 'rock'){
    result = 'win';
    score.playerWins++;
  } else if(humanChoice === 'paper' && computerChoice === 'paper'){
    result = 'tied';
    score.Ties++;
  } else if(humanChoice === 'paper' && computerChoice === 'scissors'){
    result = 'lost';
    score.computerWins++;
  } else if(humanChoice === 'scissors' && computerChoice === 'rock'){
    result = 'lost';
    score.computerWins++;
  } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
    result = 'win';
    score.playerWins++;
  } else if(humanChoice === 'scissors' && computerChoice === 'scissors'){
    result = 'tied';
    score.Ties++;
  }
  console.log(`You picked ${humanChoice} the computer picked ${computerChoice} the result is, you ${result}`);
  console.log(`The score is player score: ${score.playerWins} computer score: ${score.computerWins} and ties: ${score.Ties}`);
};

playRound();




