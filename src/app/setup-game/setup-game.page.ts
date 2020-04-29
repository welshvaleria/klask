import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

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

    // Setup uniquePlayers by reducing the game results, blah, blah, blah...
  }


  startGame() {
    alert(`Game ${this.gameCode} started.\nPlayer 1 (${this.playerOne}) and Player 2 (${this.playerTwo}) ready? set, go!`);
  }

  uniquePlayers = [
    "Tom"
    , "Tommy"
    , "Trevor"
    , "Valeria"
    , "Valpraso"
  ];

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.uniquePlayers.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
