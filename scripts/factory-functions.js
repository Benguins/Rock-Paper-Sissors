const Game = (() => {
  function play(playerPick, playerImagePick){
    const computerChoice = Computer.computerImageChoice();
    const humanChoice = playerPick;
    let Score = JSON.parse(localStorage.getItem('Score'));
    if(!Score || Score === undefined){
      Score = {
      playerWins: 0,
      computerWins: 0,
      Ties: 0
      }
    }

    let result;
    if(humanChoice === 'Rock' && computerChoice === './images/rock-emoji.png'){
      result = 'tied';
      Score.Ties++;
      save(Score);
    } else if(humanChoice === 'Rock' && computerChoice === './images/paper-emoji.png'){
      result = 'lost';
      Score.computerWins++;
      save(Score);
    } else if(humanChoice === 'Rock' && computerChoice === './images/scissors-emoji.png'){
      result = 'win';
      Score.playerWins++;
      save(Score);
    } else if(humanChoice === 'Paper' && computerChoice === './images/rock-emoji.png'){
      result = 'win';
      Score.playerWins++;
      save(Score);
    } else if(humanChoice === 'Paper' && computerChoice === './images/paper-emoji.png'){
      result = 'tied';
      Score.Ties++;
      save(Score);
    } else if(humanChoice === 'Paper' && computerChoice === './images/scissors-emoji.png'){
      result = 'lost';
      Score.computerWins++;
      save(Score);
    } else if(humanChoice === 'Scissors' && computerChoice === './images/rock-emoji.png'){
      result = 'lost';
      Score.computerWins++;
      save(Score);
    } else if(humanChoice === 'Scissors' && computerChoice === './images/paper-emoji.png'){
      result = 'win';
      Score.playerWins++;
      save(Score);
    } else if(humanChoice === 'Scissors' && computerChoice === './images/scissors-emoji.png'){
      result = 'tied';
      Score.Ties++;
      save(Score);
    }
    document.querySelector('.js-result').innerHTML = `Your pick <img class="button-image" src="${playerImagePick}"> <img class="button-image" src="${computerChoice}"> computer pick`;
    document.querySelector('.js-score').innerHTML = `The score is player score: ${Score.playerWins} computer score: ${Score.computerWins} and ties: ${Score.Ties}`;

    const modalResultText = document.querySelector('.js-modal-result');
    const modal = document.querySelector('.js-modal');
    if(Score.playerWins === 5){
      clearLocalStorage();
      modal.style.display = "block";
      modalResultText.innerHTML = 'You beat the computer!';
    } else if(Score.computerWins === 5){
      clearLocalStorage();
      modal.style.display = "block";
      modalResultText.innerHTML = 'You lost to the computer!';
    } else if(Score.Ties === 5){
      clearLocalStorage();
      modal.style.display = "block";
      modalResultText.innerHTML = 'You drew with the computer';
    }
  };

  function save(Score){
    localStorage.setItem('Score', JSON.stringify(Score));
  }
  function clearLocalStorage(){
    localStorage.clear();
  }
  
  return {
    play,
    save,
    clearLocalStorage
  }

})();




const Computer = (() => {
  function computerMoveChoice(){
      let computerPick;
      const randomNumber = Math.round(Math.random() * (2 - 0) + 0);
      if(randomNumber === 0){
        computerPick = 'Rock';
      } else if(randomNumber === 1){
        computerPick = 'Paper';
      } else if (randomNumber === 2){
        computerPick = 'Scissors';
      } 
      return computerPick;
  }

  function computerImageChoice(){
    const computerMoveChoice = Computer.computerMoveChoice();
    if(computerMoveChoice === 'Rock'){
      computerPickImage = './images/rock-emoji.png';
    } else if(computerMoveChoice === 'Paper'){
      computerPickImage = './images/paper-emoji.png';
    } else if(computerMoveChoice === 'Scissors'){
      computerPickImage = './images/scissors-emoji.png';
    }
    return computerPickImage;
  }

  return {
    computerMoveChoice,
    computerImageChoice
  }
})();

const choices = [
  {
    id: 'id1',
    move: 'Rock',
    image: './images/rock-emoji.png'
  }, 
  {
    id: 'id2',
    move: 'Paper',
    image: './images/paper-emoji.png'
  },
  {
    id: 'id3',
    move: 'Scissors',
    image: './images/scissors-emoji.png'
  }
];

let html = '';
choices.forEach((element) => {
  html += `
  <button class="selection-button" data-button-id = "${element.id}"><img src="${element.image}" class="button-image"></button>
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
        const playerPick = matchingItem.move;
        const playerImagePick = matchingItem.image;
        Game.play(playerPick, playerImagePick);
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