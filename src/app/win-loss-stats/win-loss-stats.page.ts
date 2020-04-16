import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';

@Component({
  selector: 'app-win-loss-stats',
  templateUrl: './win-loss-stats.page.html',
  styleUrls: ['./win-loss-stats.page.scss'],
})
export class WinLossStatsPage implements OnInit {

  constructor(private klaskSvc: KlaskService) { }

  results: any[];
  simplifiedWinsLosses: any[];
  possibleForSorting: any[];

  ngOnInit() {
    this.results = this.klaskSvc.getTournamentGameResults("1073ed04-45ef-444e-8263-8cc77b5251e4");

    const foo = this.results
      .reduce(
        (acc, x) => [...acc, ...x.points]
        , []
      )
      .filter(x => x.pointType == 'klask')
      .reduce(
        (acc, x) => {

          acc.set(x.opponent, {
            klasks: acc.get(x.opponent) ? acc.get(x.opponent).klasks + 1 : 1
          }); 
          return acc;
        }
        , new Map()
      )
      ;

    console.log([...foo].map(x => ({
      name: x[0]
      , klasks: x[1].klasks
    })));

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
}
