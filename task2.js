class Shiritori {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = this.player1;
    this.words = [];
    this.gameOver = false;
  }

  play(word) {
    if (this.gameOver === false) {
      if (this.words.length === 0) {
        this.words.push(word);
        this.turn = this.player2;
        return `All is ok now is ${this.turn} turn || ${this.words}`;
      }
      let exists = false;
      this.words.forEach((item) => {
        if (item === word) {
          exists = true;
        }
      });
      if (exists === false) {
        this.words.push(word);
        let lastIndexOfWords = this.words.lastIndexOf(word);

        let firstLetterOfCurrent = this.words[lastIndexOfWords][0];
        let lastLetterOfBefore =
          this.words[lastIndexOfWords - 1][
            this.words[lastIndexOfWords - 1].length - 1
          ];

        if (firstLetterOfCurrent === lastLetterOfBefore) {
          if (this.turn === this.player1) {
            this.turn = this.player2;
            return `All is ok now is ${this.turn} turn || ${this.words}`;
          } else if (this.turn === this.player2) {
            this.turn = this.player1;
            return `All is ok now is ${this.turn} turn || ${this.words}`;
          }
        }

        this.gameOver = true;

        if (this.turn === this.player1) {
          this.turn = this.player2;
          return `Game is over Winner is ${this.turn}`;
        } else if (this.turn === this.player2) {
          this.turn = this.player1;
          return `Game is over Winner is ${this.turn}`;
        }
      }
      return `Word is exists try again`;
    }
    return `Game is over ! Want to start again ? press startNewGame`;
  }

  startNewGame() {
    this.turn = this.player1;
    this.words = [];
    this.gameOver = false;
  }
}

let shiritori = new Shiritori("Bob", "Kevin");

console.log(shiritori.play("vaspur"));
console.log(shiritori.play("ragv"));
console.log(shiritori.play("vaspur"));
console.log(shiritori.play("pipopatam"));
