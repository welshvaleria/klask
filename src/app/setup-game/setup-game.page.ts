import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.page.html',
  styleUrls: ['./setup-game.page.scss'],
})
export class SetupGamePage implements OnInit {

  constructor(private klaskSvc: KlaskService) { }

  gameCode = "";
  playerOne = "";
  playerTwo = "";

  results: any[];
  uniquePlayers: any[];

  ngOnInit() {
    // Setup uniquePlayers by reducing the game results, blah, blah, blah...

    this.results = this.klaskSvc.getTournamentGameResults("1073ed04-45ef-444e-8263-8cc77b5251e4");

    this.uniquePlayers = this.results
      .reduce((acc, x) => [...acc, x.winner, x.loser], [])
      .filter((item1, item2, array) => array.indexOf(item1) === item2);
  }


  startGame() {
    alert(`Game ${this.gameCode} started.\nPlayer 1 (${this.playerOne}) and Player 2 (${this.playerTwo}) ready? set, go!`);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.uniquePlayers.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
