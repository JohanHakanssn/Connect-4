import prompt from "../helpers/prompt.js";
import Player from "./Player.js";

export default class App {
  playerX!: Player;
  playerO!: Player;

  constructor() {
    this.createPlayers();
  }


  createPlayers() {
    console.clear();
    console.log('Four-In-A-Row');
    this.playerX = new Player(prompt('Spelare X:s namn: '), 'X')
    this.playerO = new Player(prompt('Spelare O:s namn: '), 'O')
  }



}