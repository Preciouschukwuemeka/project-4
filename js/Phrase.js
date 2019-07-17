/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    let phraseArray = this.phrase.split('');
    const phraseUl = document.getElementsByTagName('ul');


    for (var i = 0; i < phraseArray.length; i++) {
      let li = document.createElement('li');
      if (phraseArray[i] !== ' ') {
        li.innerText = phraseArray[i];
        li.className = `hide letter ${phraseArray[i]}`;
        phraseUl[0].appendChild(li);
      } else {
        li.innerText = `${phraseArray[i]} `;
        li.className = `hide space`;
        phraseUl[0].appendChild(li);
      }
    }
  }


  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  showMatchedLetter(letter) {
    $(".letter." + letter).removeClass('hide').addClass('show');
  }

}