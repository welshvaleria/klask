import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-most-klask-stats',
  templateUrl: './most-klask-stats.page.html',
  styleUrls: ['./most-klask-stats.page.scss'],
})
export class MostKlaskStatsPage implements OnInit {

  constructor(
    private klaskSvc: KlaskService
    , private activatedRoute: ActivatedRoute
    , private navCtrl : NavController) { }

  results: any[];
  statArray: any[];
  currentTourneyId = "";
  userStat: any;

  ngOnInit() {

    this.currentTourneyId = this.activatedRoute.snapshot.paramMap.get("tourneyId");

    this.results = this.klaskSvc.getTournamentGameResults(
      this.currentTourneyId
    );

    // const timesKlasked = this.results
    //   // Pulling points array out of the original object
    //   .reduce((acc, x) => [...acc, ...x.points], [])
    //   // Get just klask points
    //   .filter(point => point.pointType === "klask")
    //   // Get the person who klasked
    //   .map(klasker => klasker.opponent)
    //   .reduce((acc, x) => {
    //     acc.set(x, {
    //       klasks: acc.get(x) ? acc.get(x).klasks + 1 : 1
    //     });
    //     return acc;
    // }, new Map());

    // this.klaskArray = [...timesKlasked].map(x => ({
    //   name: x[0]
    //   , klaskOffenses: x[1].klasks
    // }));

    // this.klaskArray.sort((a, b) => b.klaskOffenses - a.klaskOffenses);
  }

  displayUserStat() {
	  console.log(this.userStat);

	  const stats = this.results
      // Pulling points array out of the original object
      .reduce((acc, x) => [...acc, ...x.points], [])
      // Get just user requested points
      .filter(point => point.pointType === this.userStat)
      // Get the opponent - they are the ones who committed what the user is requesting
      .map(opp => opp.opponent)
      .reduce((acc, x) => {
        acc.set(x, {
          points: acc.get(x) ? acc.get(x).points + 1 : 1
        });
        return acc;
	}, new Map());

	this.statArray = [...stats].map(x => ({
      name: x[0]
      , offenses: x[1].points
	}));

	this.statArray.sort((a, b) => b.offenses - a.offenses);
	
	console.log(this.statArray);
  }
}
