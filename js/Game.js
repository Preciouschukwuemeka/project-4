  /* Treehouse FSJS Techdegree
   * Project 4 - OOP Game App
   * Game.js 
   * 
   * */







  class Game {
    constructor() {
      this.missed = 0;
      this.phrases = [

        new Phrase("courage"),
        new Phrase("Family"),
        new Phrase("Live life"),
        new Phrase("Just do it"),
        new Phrase("Confidence")

      ];

      this.activePhrase = null;

    }


    getRandomPhrase() {
      const random = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[random];
    }


    startGame() {

      $("#overlay").hide();
      const random = this.getRandomPhrase();
      random.addPhraseToDisplay();
      this.activePhrase = random;

    }



    handleInteraction(letter) {
      if (this.activePhrase.checkLetter(letter)) {
        this.activePhrase.showMatchedLetter(letter);

        if (this.checkForWin()) {
          this.gameOver(true);
        }

      } else {
        this.removeLife();


      }
    }




    checkForWin() {
     if ($('.letter.hide').length == 0) {
      
     return true;
    } else {
      return false;
   }
  }

  
    removeLife() {
      $('.tries [src="images/liveHeart.png"]:first').attr("src", "images/lostHeart.png");
      this.missed++;
      if (this.missed === 5) {
        this.gameOver(false);
      } 
    }


    gameOver(status) {
      if (status) {  
        $("#overlay").addClass('win').show();
        $("#game-over-message").text('Great Job!!');
      } else {
        $("#overlay").addClass('lose').show();
        $("#game-over-message").text('You Lost, Please Try Again!!');

      }
    }

  

              
      reset(){
        
      }


    }
  



    