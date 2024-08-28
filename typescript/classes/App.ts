import prompt from "../helpers/prompt.js";
import Board from "./Board.js";
import Player from "./Player.js";
import Computer from "./Computer.js";

export default class App {
  playerX!: Player;
  playerO!: Player;
  board: Board;
  computer: Computer;


  constructor() {
    this.createPlayers();
    this.board = new Board();
    this.board.render()
    this.startGameLoop();
    this.computer = new Computer('Computer', 'O');
  }


  createPlayers() {
    console.clear();
    console.log('Four-In-A-Row');
    this.playerX = new Player(prompt('Spelare X:s namn: '), 'X')
    this.playerO = new Player(prompt('Spelare O:s namn: '), 'O')
  }

  startGameLoop() {
    while (!this.board.gameOver) {
    console.clear();
    this.board.render();
    let player: Player = this.board.currentPlayerColor === 'X' ? this.playerX : this.playerO;
      let move = prompt(`Ange ditt drag ${player.name}(${player.color}) - skriv in kolumn: `);
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

