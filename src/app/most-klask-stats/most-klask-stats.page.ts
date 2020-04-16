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
  klaskArray: any[];

  ngOnInit() {
    this.results = this.klaskSvc.getTournamentGameResults("1073ed04-45ef-444e-8263-8cc77b5251e4");
    // console.log(this.results);

    const allPointsScored = this.results.reduce((acc, x) => {
      return acc.concat(x.points);
    }, []);

    const klaskPoints = allPointsScored.filter(point => point.pointType === "klask");

    const playersWhoKlasked = klaskPoints.map(klasker => klasker.opponent);

    const timesKlasked = playersWhoKlasked.reduce((acc, x) => {

      acc.set(x, {
        klasks: acc.get(x) ? acc.get(x).klasks + 1 : 1
      });
      return acc;

    }, new Map());

    // console.log(timesKlasked);

    this.klaskArray = [...timesKlasked].map(x => ({
      name: x[0]
      , klaskOffenses: x[1].klasks
    }));
  }

}
