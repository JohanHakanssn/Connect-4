export default class Board {
  matrix: string[][];
  currentPlayerColor: string;
  // winner: boolean;
  // isADraw: boolean;
   gameOver: boolean;

  constructor() {
    this.matrix = [...new Array(6)].map(() =>
            [...new Array(7)].map(() => ' ')
    );
    this.currentPlayerColor = 'X';
    // this.winner = false;
    // this.isADraw = false;
     this.gameOver = false;
  }

  render() {
    const columnNumbers = [' 1',' 2',' 3',' 4',' 5',' 6',' 7'].join(' ');
    let line = '\n' + '-'.repeat(22) + '\n';
    console.log( columnNumbers + line + this.matrix.map(row => row.map(column => `| ${column}`).join('') + '|').join(line) + line);
  }

  makeMove(color: string, column: number) {
    for (let row = this.matrix.length - 1; row >= 0; row--) {
      if (this.matrix[row][column] === ' ') {
        this.matrix[row][column] = color;
        this.currentPlayerColor = this.currentPlayerColor === 'X' ? 'O' : 'X';
        return true;
      }
    }
  }

  checkWinner() {
    for (let row = 0; row < this.matrix.length; row++) {
      for (let column = 0; column < this.matrix[row].length - 1; column++) {
        if (this.matrix[row][column] !== ' ' &&
          this.matrix[row][column] === this.matrix[row][column + 1] &&
          this.matrix[row][column] === this.matrix[row][column + 2] &&
          this.matrix[row][column] === this.matrix[row][column + 3]) {
           return this.matrix[row][column];
        }
      }
    }
  }
}



