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
}

console.log(getComputerChoice());