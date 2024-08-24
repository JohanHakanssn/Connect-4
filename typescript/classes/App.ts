import prompt from "../helpers/prompt.js";
import Board from "./Board.js";
import Player from "./Player.js";

export default class App {
  playerX!: Player;
  playerO!: Player;
  board: Board;

  constructor() {
    this.createPlayers();
    this.board = new Board();
    this.board.render()
    this.startGameLoop();
  }


  createPlayers() {
    console.clear();
    console.log('Four-In-A-Row');
    this.playerX = new Player(prompt('Spelare X:s namn: '), 'X')
    this.playerO = new Player(prompt('Spelare O:s namn: '), 'O')
  }

  startGameLoop() {
    while (true) {
    console.clear();
    this.board.render();
    let player: Player = this.board.currentPlayerColor === 'X' ? this.playerX : this.playerO;
      let move = prompt(`Ange ditt drag ${player.color} ${player.name} - skriv in kolumn: `);
      let column = +move.trim() - 1;

      if (this.board.makeMove(player.color, column)) {
          continue;
      }
    }
  }
}