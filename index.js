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

