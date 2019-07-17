/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  NAME: Precious Chukwuemeka


let game;
let keyCodes = [];


//Function removes overlay.

const resetDisplay = () => {
  document.getElementById('overlay').style.display = 'none';
};



// Mark button function calls the handleInteraction method.

const markButton = (evt) => {
  game.handleInteraction(evt);
};




//Set up event handler on start button calls 'resetDisplay' and creates a new Game object.

document.getElementById('btn__reset').addEventListener('click', () => {
  resetDisplay();
  keyCodes = [];
  game = new Game();
  game.startGame();
});



//set up listener on keydown. Keys inbetween 65&90 are letters, if keyCode array includes the letter then it means has already been pressed/clicked
window.addEventListener('keydown', (event) => {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (!keyCodes.includes(event.key.toLowerCase())) {
      markButton(event.key.toLowerCase());
      keyCodes.push(event.key.toLowerCase());
    }
  }
});




//Event listener on each button, to disable that letter and handle interaction in game object, push the letter into keycode array.

const buttons = document.getElementById('qwerty');
buttons.addEventListener('click', (event) => {
  if (event.target.className === 'key') {
    markButton(event.target.textContent);
    keyCodes.push(event.target.textContent);
  }
});



//This event prevents the player from seeing the actual Text in the Game.
document.addEventListener('mousedown', (event) => {
  event.preventDefault();
})