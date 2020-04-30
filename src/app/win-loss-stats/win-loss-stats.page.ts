import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-win-loss-stats',
  templateUrl: './win-loss-stats.page.html',
  styleUrls: ['./win-loss-stats.page.scss'],
})
export class WinLossStatsPage implements OnInit {

  constructor(
    private klaskSvc: KlaskService
    , private activatedRoute: ActivatedRoute
    , private router: Router
  ) { }

  results: any[];
  simplifiedWinsLosses: any[];
  possibleForSorting: any[];
  currentTourneyId = "";

  ngOnInit() {
    this.currentTourneyId = this.activatedRoute.snapshot.paramMap.get("tourneyId");
    this.results = this.klaskSvc.getTournamentGameResults(this.currentTourneyId);

    // Reducing data to get wins/losses per player
    const winsLosses = this.results.reduce(
      (acc, x) => {

        // Setting the wins for each player
        acc.set(x.winner, {
          // If the person has won before, add one. Else it's just 1
          wins: acc.get(x.winner) ? acc.get(x.winner).wins + 1 : 1
          //Losses will always stay at 0 here.
          , losses: acc.get(x.winner) ? acc.get(x.winner).losses : 0
        });

        // Setting the losses for each player.
        acc.set(x.loser, {
          //Wins will always stay at what was previously set here
          wins: acc.get(x.loser) ? acc.get(x.loser).wins : 0
          // If the person has lost before, add one. Else it's just 1
          , losses: acc.get(x.loser) ? acc.get(x.loser).losses + 1 : 1
        });

        return acc;
      }
      , new Map()
    );

    //Spread the Map into a new array that will be cleaned down to name, wins, losses, and winPercentage
    this.simplifiedWinsLosses = [...winsLosses].map(x => ({
      name: x[0]
      , wins: x[1].wins
      , losses: x[1].losses
      , winPercentage: (x[1].wins / (x[1].wins + x[1].losses)).toFixed(3)
    }));

    this.possibleForSorting = this.simplifiedWinsLosses.map(x => ({
      ...x
      , sort: x.winPercentage * 1000 + x.wins + x.losses
    }));

    this.possibleForSorting.sort((a, b) => b.sort - a.sort);
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }
}
