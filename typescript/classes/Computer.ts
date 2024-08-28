export default class Computer {
  name: string;
  color: string;


  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  computerMove() {
    const maxRndNumber = 7;
    return Math.floor(Math.random() * maxRndNumber) + 1;
  }
}