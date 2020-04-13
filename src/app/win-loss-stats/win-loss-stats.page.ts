import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import { access } from 'fs';

@Component({
  selector: 'app-win-loss-stats',
  templateUrl: './win-loss-stats.page.html',
  styleUrls: ['./win-loss-stats.page.scss'],
})
export class WinLossStatsPage implements OnInit {

  constructor(private klaskSvc: KlaskService) { }

  results: any[];

  ngOnInit() {
    this.results = this.klaskSvc.getTournamentGameResults("1073ed04-45ef-444e-8263-8cc77b5251e4");
    console.log(this.results);

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

    // Playing around with how to get data out of the Map that is returned.
    console.log(winsLosses);
    winsLosses.forEach(element => console.log(`Wins: ${element.wins} Losses: ${element.losses} Win%: ${element.wins / (element.wins + element.losses)}`));
  }
}
