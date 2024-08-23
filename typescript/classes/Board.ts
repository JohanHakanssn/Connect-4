export default class Board {
  matrix: string[][];

  constructor() {
    this.matrix = [...new Array(6)].map(() =>
            [...new Array(7)].map(() => ' ')
        );
  }

  render() {
    let line = '\n' + '-'.repeat(22) + '\n';
    console.log(line + this.matrix.map(row => row.map(column => `| ${column}`).join('') + '|').join(line) + line);
}
}