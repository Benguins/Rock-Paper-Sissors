const score = {
  playerWins: 0,
  computerWins: 0,
  Ties: 0
}

function getComputerChoice(){
  let computerChoice;
  const randomNumber = Math.round(Math.random() * (2 - 0) + 0);
  if(randomNumber === 0){
    computerChoice = 'Rock';
  } else if(randomNumber === 1){
    computerChoice = 'Paper';
  } else if (randomNumber === 2){
    computerChoice = 'Scissors';
  } 
  return computerChoice;
};

function playRound(value){
    const computerChoice = getComputerChoice();
    const humanChoice = value
  
    let result;
  
    if(humanChoice === 'Rock' && computerChoice === 'Rock'){
      result = 'tied';
      score.Ties++;
    } else if(humanChoice === 'Rock' && computerChoice === 'Paper'){
      result = 'lost';
      score.computerWins++;
    } else if(humanChoice === 'Rock' && computerChoice === 'Scissors'){
      result = 'win';
      score.playerWins++;
    } else if(humanChoice === 'Paper' && computerChoice === 'Rock'){
      result = 'win';
      score.playerWins++;
    } else if(humanChoice === 'Paper' && computerChoice === 'Paper'){
      result = 'tied';
      score.Ties++;
    } else if(humanChoice === 'Paper' && computerChoice === 'Scissors'){
      result = 'lost';
      score.computerWins++;
    } else if(humanChoice === 'Scissors' && computerChoice === 'Rock'){
      result = 'lost';
      score.computerWins++;
    } else if(humanChoice === 'Scissors' && computerChoice === 'Paper'){
      result = 'win';
      score.playerWins++;
    } else if(humanChoice === 'Scissors' && computerChoice === 'Scissors'){
      result = 'tied';
      score.Ties++;
    }
    document.querySelector('.js-result').innerHTML = `You picked ${humanChoice} the computer picked ${computerChoice} the result is, you ${result}`;
    document.querySelector('.js-score').innerHTML = `The score is player score: ${score.playerWins} computer score: ${score.computerWins} and ties: ${score.Ties}`;
};

function playGame(value){
  const humanChoice = value;
  for(i = 0; i < 5; i++){
    playRound(humanChoice);
  }
  if(score.playerWins > score.computerWins){
    alert('You beat the computer!');
  } else if(score.computerWins > score.playerWins){
    alert('You lost to the computer!');
  } else {
    alert('You Tied');
  }
}

const choices = [
  {
    id: 'id1',
    move: 'Rock'
  }, 
  {
    id: 'id2',
    move: 'Paper'
  },
  {
    id: 'id3',
    move: 'Scissors'
  }
];

let html = '';
choices.forEach((element) => {
  html += `
  <button class="selection-button" data-button-id = "${element.id}">${element.move}</button>
  `
  const container = document.querySelector('.flex-container').innerHTML = html;
});


document.querySelectorAll('.selection-button').forEach((button) => {
  button.addEventListener('click', () => {
    const elementId = button.dataset.buttonId;
    let i = 0;
    choices.forEach((element) => {
      let matchingItem;
      if(element.id === elementId){
        matchingItem = element;
      }
      if(matchingItem){
        const movePick = matchingItem.move;
        playRound(movePick);
        const modalResultText = document.querySelector('.js-modal-result');
        const modal = document.querySelector('.js-modal');
        if(score.playerWins === 5){
          modal.style.display = "block";
        modalResultText.innerHTML = 'You beat the computer!';
        } else if(score.computerWins === 5){
          modal.style.display = "block";
          modalResultText.innerHTML = 'You lost to the computer!';
        } else if(score.Ties === 5){
          modal.style.display = "block";
          modalResultText.innerHTML = 'You drew with the computer';
        }
      }
    });
  });
});

document.querySelectorAll('.js-modal-button').forEach((button) => {
  button.addEventListener('click', () => {
    if(button.innerText === 'Yes'){
      location.reload();
    } else if(button.innerText === 'No'){
      window.close();
    }
  });
});






