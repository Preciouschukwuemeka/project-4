// /* Treehouse FSJS Techdegree
//   * Project 4 - OOP Game App
//   * Game.js 
//   * 
//   * */

//  NAME: Precious Chukwuemeka


 //Creating game Class.

class Game {
  constructor() {
    this.missed = 5;
    this.phrases = ['courage',
      'family',
      'live life',
      'just do it',
      'confidence'
    ]

    this.currentPhrase = null;
    this.gameWon = 0;
  }





  // Randomly generating phrases//

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }




  // Start game methdod, callc get random display,adds phrase to display from Phrase class // 

  startGame() {
    this.reset();
    this.currentPhrase = new Phrase(this.getRandomPhrase());
    this.currentPhrase.addPhraseToDisplay();
  }





  // Handle interaction method: checks for matched letters in the phrase.*/


  handleInteraction(letter) {
    const keys = document.querySelectorAll('.key');
    if (this.currentPhrase.checkLetter(letter)) {
      //loop and add class
      for (let i = 0; i < keys.length; i++) {
        if (letter === keys[i].textContent) {
          keys[i].disabled = true;
          keys[i].classList.add('chosen');
        }
      }
      this.currentPhrase.showMatchedLetter(letter);
      this.checkForWin();
    } else {
      for (let i = 0; i < keys.length; i++) {
        if (letter === keys[i].textContent) {
          keys[i].disabled = true;
          keys[i].classList.add('wrong');
        }
      }
      this.removeLife();

    }
  }




  // Remove life method: Removes and ends game if all lives lost//


  removeLife() {
    this.missed--;
    document.getElementsByTagName('img')[this.missed].src = 'images/lostHeart.png';
    if (this.missed === 0) {
      this.gameOver('lose', 'You Lose, Play Again!!!');

    }

  }





  // Method will Check if all letters are matched --- Check if all letter classes show //

  checkForWin() {
    //loop through all li's, check txt content & class
    const lis = document.getElementById('phrase').firstElementChild.children;
    for (let i = 0; i < lis.length; i++) {
      if (lis[i].textContent === ' ' || lis[i].className === 'letter show') {
        this.gameWon++;
      }
    }
    if (this.gameWon === this.currentPhrase.phrase.length) {
      this.gameOver('win', 'Congratulations! You Win!');
    } else {
      this.gameWon = 0;
    }

  }




  // Method will set overlay display, add message to screen and change button text //

  gameOver(result, message) {
    document.getElementById('overlay').className = result;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('game-over-message').textContent = message;
    document.getElementById('btn__reset').textContent = 'Play Again?';

  }

  


  // Reset method: Resets game //

  reset() {
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i++) {
      keys[i].disabled = false;
      keys[i].classList.remove('chosen', 'wrong');
    }
    const lives = document.querySelectorAll('img');
    for (let i = 0; i < lives.length; i++) {
      lives[i].src = 'images/liveHeart.png';
    }
    const ul = document.querySelector('#phrase').firstElementChild;
    while (ul.lastChild) {
      ul.removeChild(ul.lastChild);
    }

  }
}