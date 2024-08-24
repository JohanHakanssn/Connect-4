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
    let line = '\n' + '-'.repeat(22) + '\n';
    console.log(line + this.matrix.map(row => row.map(column => `| ${column}`).join('') + '|').join(line) + line);
  }

  makeMove(color: string, row: number, column: number) {


  this.matrix[row][column] = color;

  this.currentPlayerColor = this.currentPlayerColor === 'X' ? 'O' : 'X';

  return true;
  }
}


