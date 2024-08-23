export default class Board {
  matrix: string[][];

  constructor() {
    this.matrix = [...new Array(6)].map(row => [...new Array(6)].map(column => ' '));
  }


}