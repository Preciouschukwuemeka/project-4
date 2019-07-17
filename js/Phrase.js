// /* Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * Phrase.js */


//  NAME: Precious Chukwuemeka


//Creating Phrase class //

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  //Generating random phrase to the display.// 

  addPhraseToDisplay() {

    const ul = document.getElementById('phrase').firstElementChild;

    for (let i = 0; i < this.phrase.length; i++) {

      let li = document.createElement('li');
      li.textContent = this.phrase[i];

      if (li.textContent === ' ') {
        li.classList.add('hide', 'space');
      } else {
        li.classList.add('hide', 'letter');
      }

      ul.appendChild(li);
    }
  }


  /**  Method check the letter vs phrase[i], returns true/false.  **/

  checkLetter(letterToCheck) {

    let checkForMatch = 0;

    for (let i = 0; i < this.phrase.length; i++) {
      if (letterToCheck === this.phrase[i].toLowerCase()) {
        checkForMatch++
      }
    }
    if (checkForMatch > 0) {
      return true;
    } else {
      return false;
    }
  }

  /** Show matched letter method: Adds show class and removes hide class **/

  showMatchedLetter(letter) {

    const lis = document.getElementById('phrase').firstElementChild.children;
    for (let i = 0; i < lis.length; i++) {
      if (lis[i].textContent.toLowerCase() === letter) {
        lis[i].classList.add('show');
        lis[i].classList.remove('hide');
      }
    }
  }
}