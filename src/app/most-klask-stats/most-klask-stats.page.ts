import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-most-klask-stats',
  templateUrl: './most-klask-stats.page.html',
  styleUrls: ['./most-klask-stats.page.scss'],
})
export class MostKlaskStatsPage implements OnInit {

  constructor(private klaskSvc: KlaskService, private router: Router) { }

  results: any[];
  klaskArray: any[];

  ngOnInit() {
    this.results = this.klaskSvc.getTournamentGameResults("1073ed04-45ef-444e-8263-8cc77b5251e4");

    const timesKlasked = this.results
      // Pulling points array out of the original object
      .reduce((acc, x) => [...acc, ...x.points], [])
      // Get just klask points
      .filter(point => point.pointType === "klask")
      // Get the person who klasked
      .map(klasker => klasker.opponent)
      .reduce((acc, x) => {
        acc.set(x, {
          klasks: acc.get(x) ? acc.get(x).klasks + 1 : 1
        });
        return acc;
    }, new Map());

    this.klaskArray = [...timesKlasked].map(x => ({
      name: x[0]
      , klaskOffenses: x[1].klasks
    }));
  }

}
