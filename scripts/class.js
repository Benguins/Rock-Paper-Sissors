class Computer {
  constructor(){
    this.computerChoice = '';
    this.computerImage = '';
  }
  get computerChoice(){
    return this._computerChoice;
  }
  get computerImage(){
    return this._computerImage;
  }
  set computerChoice(value){
    const randomNumber = Math.round(Math.random() * (2 - 0) + 0);
    if(randomNumber === 0){
      value = 'Rock';
    } else if(randomNumber === 1){
      value = 'Paper';
    } else if (randomNumber === 2){
      value = 'Scissors';
    } 
    this._computerChoice = value;
  }
  set computerImage(value){
    if(this.computerChoice === 'Rock'){
      value = './images/rock-emoji.png';
    } else if(this.computerChoice === 'Paper'){
      value = './images/paper-emoji.png';
    } else if(this.computerChoice === 'Scissors'){
      value = './images/scissors-emoji.png';
    }
    this._computerImage = value;
  }
}

class Player {
  constructor(playerMove, playerImage){
    this.playerMove = playerMove;
    this.playerImage = playerImage;
  }
}

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
    choices.forEach((element) => {
      let matchingItem;
      if(element.id === elementId){
        matchingItem = element;
      }
      if(matchingItem){
        const movePick = matchingItem.move;
        const movePickImage = matchingItem.image;
        let computer = new Computer('');
        let player = new Player(movePick, movePickImage);
        game.playRound(player, computer);
        const modalResultText = document.querySelector('.js-modal-result');
        const modal = document.querySelector('.js-modal');
        if(game.score.playerWins === 5){
          modal.style.display = "block";
          modalResultText.innerHTML = 'You beat the computer!';
        } else if(game.score.computerWins === 5){
          modal.style.display = "block";
          modalResultText.innerHTML = 'You lost to the computer!';
        } else if(game.score.Ties === 5){
          modal.style.display = "block";
          modalResultText.innerHTML = 'You tied with the computer!';
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

class Game{
  constructor(){
    this.score = {
      playerWins: 0,
      computerWins: 0,
      Ties: 0
    }
  }
  playRound(player,computer){
    let result;
  
    if(player.playerMove === 'Rock' && computer.computerChoice === 'Rock'){
      result = 'tied';
      this.score.Ties++;
    } else if(player.playerMove === 'Rock' && computer.computerChoice === 'Paper'){
      result = 'lost';
      this.score.computerWins++;
    } else if(player.playerMove === 'Rock' && computer.computerChoice === 'Scissors'){
      result = 'win';
      this.score.playerWins++;
    } else if(player.playerMove === 'Paper' && computer.computerChoice === 'Rock'){
      result = 'win';
      this.score.playerWins++;
    } else if(player.playerMove === 'Paper' && computer.computerChoice === 'Paper'){
      result = 'tied';
      this.score.Ties++;
    } else if(player.playerMove === 'Paper' && computer.computerChoice === 'Scissors'){
      result = 'lost';
      this.score.computerWins++;
    } else if(player.playerMove === 'Scissors' && computer.computerChoice === 'Rock'){
      result = 'lost';
      this.score.computerWins++;
    } else if(player.playerMove === 'Scissors' && computer.computerChoice === 'Paper'){
      result = 'win';
      this.score.playerWins++;
    } else if(player.playerMove === 'Scissors' && computer.computerChoice === 'Scissors'){
      result = 'tied';
      this.score.Ties++;
    }
    document.querySelector('.js-result').innerHTML = `Your pick <img class="button-image" src="${player.playerImage}"> <img class="button-image" src="${computer.computerImage}"> computer pick`;
    document.querySelector('.js-score').innerHTML = `The score is player score: ${this.score.playerWins} computer score: ${this.score.computerWins} and ties: ${this.score.Ties}`;
  }
}

let game = new Game();





