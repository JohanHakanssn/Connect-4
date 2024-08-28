import prompt from "../helpers/prompt.js";
import Board from "./Board.js";
import Player from "./Player.js";
import Computer from "./Computer.js";

export default class App {
  playerX!: Player;
  playerO!: Player | Computer;
  board: Board;
  computer!: Computer;


  constructor() {
    this.gameMode();
    this.board = new Board();
    this.board.render()
    this.startGameLoop();
  }

  gameMode() {
    console.clear();
    console.log('Välkommen till 4 i rad!');
    console.log('Välj spelläge: 1 för att spela mot datorn, 2 för att spela mot en annan spelare.');
    const choice = prompt('Ange ditt val: (1 - 2):');

    if (choice === '1') {
      this.createComputerOpponent();
    } else if (choice === '2') {
      this.createPlayers()
    } else {
      console.log('Ogilitit val, välj 1 eller 2.');
    }
  }

  createComputerOpponent() {
    console.clear()
    console.log('Fyra i rad');
    console.log('Spelare vs Dator');
    this.computer = new Computer('Computer', 'O')
    this.playerX = new Player(prompt('Spelare X:s namn: '), 'X');
    this.playerO = this.computer;
  }


  createPlayers() {
    console.clear();
    console.log('Fyra i rad');
    this.playerX = new Player(prompt('Spelare X:s namn: '), 'X')
    this.playerO = new Player(prompt('Spelare O:s namn: '), 'O')
  }

  delayComputerMove(time:number) {
    return new Promise(resolve => setTimeout(resolve, time))
  }


  async startGameLoop() {
    while (!this.board.gameOver) {
      console.clear();
      this.board.render();

      let player: Player | Computer = this.board.currentPlayerColor === 'X' ? this.playerX : this.playerO;
      let move;

       if (player instanceof Computer) {
         console.log(`${player.name}(${player.color}) väntar på datorns drag.`);
         await this.delayComputerMove(700)
         move = player.computerMove().toString();
       } else {
         move = prompt(`Ange ditt drag ${player.name}(${player.color}) - skriv in kolumn: `)
       }

      let column = +move.trim() - 1;

      if (this.board.makeMove(player.color, column)) {
        const winner = this.board.checkWinner();
        if (winner) {
          console.clear();
          this.board.render();
          console.log(`Vinnare: ${player.name}`);
          this.board.gameOver = true;
        } else {
          const draw = this.board.drawCheck()
          if (draw) {
            console.clear();
            this.board.render();
            console.log(draw);
          }
        }
      }
    }
  }
}

