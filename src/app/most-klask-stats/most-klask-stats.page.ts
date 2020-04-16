import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';

@Component({
  selector: 'app-most-klask-stats',
  templateUrl: './most-klask-stats.page.html',
  styleUrls: ['./most-klask-stats.page.scss'],
})
export class MostKlaskStatsPage implements OnInit {

  constructor(private klaskSvc: KlaskService) { }

  results: any[];

  ngOnInit() {
    this.results = this.klaskSvc.getTournamentGameResults("1073ed04-45ef-444e-8263-8cc77b5251e4");

    const pointPuller = this.results.reduce((acc, x) => {
        // const pointTypeDistribution = x.points.reduce(
        //   (acc2, x2) => {
        //     if (x2.pointType == "klask") {
        //       // console.log(`Klasker: ${x2.opponent} Game No: ${x.gameNumber} Game Point No: ${x2.gamePointNumber}`);
        //       acc.set(x2.opponent, {
        //         klasks: acc2.get(x2.opponent) ? acc2.get(x2.opponent).klasks + 1 : 1
        //       });
        //     }
        //     return pointTypeDistribution
        // })
    }, 0);
    console.log(pointPuller);
  }

}
