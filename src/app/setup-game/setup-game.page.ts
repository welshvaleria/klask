import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.page.html',
  styleUrls: ['./setup-game.page.scss'],
})
export class SetupGamePage implements OnInit {

  constructor(private klaskSvc: KlaskService, private activatedRoute: ActivatedRoute) { }

  // gameNumber = "";
  playerOne = "";
  playerTwo = "";

  currentTourneyId = "";

  results: any[];
  uniquePlayers: any[];

  ngOnInit() {
    // Setup uniquePlayers by reducing the game results, blah, blah, blah...
    this.currentTourneyId = this.activatedRoute.snapshot.paramMap.get("tourneyId");
    this.results = this.klaskSvc.getTournamentGameResults(this.currentTourneyId);

    this.uniquePlayers = this.results
      .reduce((acc, x) => [...acc, x.winner, x.loser], [])
      .filter((item1, item2, array) => array.indexOf(item1) === item2);
  }


  startGame(playerOne, playerTwo) {
    this.klaskSvc.savePlayerOne(playerOne);
    this.klaskSvc.savePlayerTwo(playerTwo);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.uniquePlayers.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
