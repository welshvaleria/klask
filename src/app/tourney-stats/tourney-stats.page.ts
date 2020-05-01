import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tourney-stats',
  templateUrl: './tourney-stats.page.html',
  styleUrls: ['./tourney-stats.page.scss'],
})
export class TourneyStatsPage implements OnInit {

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
  }

  displayUserStat() {

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
      , count: x[1].points
	}));

	this.statArray.sort((a, b) => b.count - a.count);
  }
}
