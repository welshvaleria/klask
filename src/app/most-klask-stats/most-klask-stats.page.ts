import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-most-klask-stats',
  templateUrl: './most-klask-stats.page.html',
  styleUrls: ['./most-klask-stats.page.scss'],
})
export class MostKlaskStatsPage implements OnInit {

  constructor(
    private klaskSvc: KlaskService
    , private activatedRoute: ActivatedRoute) { }

  results: any[];
  klaskArray: any[];

  ngOnInit() {

    console.log(this.activatedRoute.snapshot.paramMap.get("tourneyId"));

    this.results = this.klaskSvc.getTournamentGameResults(
      this.activatedRoute.snapshot.paramMap.get("tourneyId")
    );

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
