import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.page.html',
  styleUrls: ['./setup-game.page.scss'],
})
export class SetupGamePage implements OnInit {

  constructor() { }

  gameCode = "";
  playerOne = "";
  playerTwo = "";

  ngOnInit() {
  }

  startGame() {
    alert(`Game ${this.gameCode} started.\nPlayer 1 (${this.playerOne}) and Player 2 (${this.playerTwo}) ready? set, go!`);
  }

}
