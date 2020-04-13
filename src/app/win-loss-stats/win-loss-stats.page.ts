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

  ngOnInit() {
    const foo = this.klaskSvc.getTournamentGameResults("1073ed04-45ef-444e-8263-8cc77b5251e4");

    // Practice filtering... reducing... ??? Here...
    const bar = foo.reduce(
      (acc, x) => {
        
        acc.set(x.winner, { 
          wins: acc.get(x.winner) ? acc.get(x.winner).wins + 1 : 1
          , losses: acc.get(x.winner) ? acc.get(x.winner).losses : 0
        });
        
        acc.set(x.loser, { 
          wins: acc.get(x.loser) ? acc.get(x.loser).wins : 0
          , losses: acc.get(x.loser) ? acc.get(x.loser).losses + 1 : 1
        });

        return acc;
      }
      , new Map()
    );

    // const bar = foo.reduce(
    //   (acc, x) => {
        
    //     // If this winner already in accumulator
    //     acc.get(x.winner) ? 
    //       acc.set(x.winner, {
            
    //         // Spread its current wins/losses in
    //         ...acc.get(x.winner)

    //         // Then update the wins by 1
    //         , wins: acc.get(x.winner).wins + 1
    //       })
    //       // Otherwise, 
    //       : acc.set(x.winner, {
    //         wins: 1
    //         , losses: 0 
    //       })
        
    //     acc.get(x.loser) ? 
    //       acc.set(x.loser, {
    //         ...acc.get(x.loser)
    //         , losses: acc.get(x.loser).losses + 1
    //       })
    //       : acc.set(x.loser, {
    //         wins: 0
    //         , losses: 1 
    //       })

    //     return acc;
    //   }
    //   , new Map()
    // );

    console.log(bar);

  }
}
