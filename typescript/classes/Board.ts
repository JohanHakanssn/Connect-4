export default class Board {
  matrix: string[][];
  currentPlayerColor: string;
   gameOver: boolean;

  constructor() {
    this.matrix = [...new Array(6)].map(() =>
            [...new Array(7)].map(() => ' ')
    );
    this.currentPlayerColor = 'X';
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
    return false;
  }

  checkWinner() {
    // Horizontally
    for (let row = 0; row < this.matrix.length; row++) {
      for (let column = 0; column < this.matrix[row].length - 3; column++) {
        if (this.matrix[row][column] !== ' ' &&
          this.matrix[row][column] === this.matrix[row][column + 1] &&
          this.matrix[row][column] === this.matrix[row][column + 2] &&
          this.matrix[row][column] === this.matrix[row][column + 3]) {
           return this.matrix[row][column];
        }
      }
    }

    // Vertically
    for (let column = 0; column < this.matrix[0].length; column++) {
      for (let row = 0; row < this.matrix.length - 3; row++) {
        if (this.matrix[row][column] !== ' ' &&
          this.matrix[row][column] === this.matrix[row + 1][column] &&
          this.matrix[row][column] === this.matrix[row + 2][column] &&
          this.matrix[row][column] === this.matrix[row + 3][column]) {
           return this.matrix[row][column];
        }
      }
    }

    //  Diagonally DOWN from left to right.
     for (let row = 0; row < this.matrix.length - 3; row++) {
       for (let column = 0; column < this.matrix[row].length - 3; column++) {
         if (this.matrix[row][column] !== ' ' &&
           this.matrix[row][column] === this.matrix[row + 1][column + 1] &&
           this.matrix[row][column] === this.matrix[row + 2][column + 2] &&
           this.matrix[row][column] === this.matrix[row + 3][column + 3]) {
            return this.matrix[row][column];
         }
       }
     }

     // Diagonally UP from left to right.
     for (let row = 3; row < this.matrix.length; row++) {
       for (let column = 0; column <= this.matrix[row].length - 3; column++) {
         if (this.matrix[row][column] !== ' ' &&
           this.matrix[row][column] === this.matrix[row - 1][column + 1] &&
           this.matrix[row][column] === this.matrix[row - 2][column + 2] &&
           this.matrix[row][column] === this.matrix[row - 3][column + 3]) {
            return this.matrix[row][column];
         }
       }
     }
  }

  drawCheck() {
    if (!this.matrix.flat().includes(' ')) {
      this.gameOver = true;
      return 'Det blev oavgjort';
    }
    return null;
  }
}



