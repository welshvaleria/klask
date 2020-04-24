import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { GameScoringPageRoutingModule } from './game-scoring-routing.module';

interface currentPointData {
	pointDateTime: string;
	scorer: string;
	gamePointNumber: number;
	scorerPointNumber: number;
	pointType: string;
	opponent: string;

}

@Component({
  selector: 'app-game-scoring',
  templateUrl: './game-scoring.page.html',
  styleUrls: ['./game-scoring.page.scss'],
})

export class GameScoringPage implements OnInit {

  constructor(private actionSheetController : ActionSheetController) { }

  async presentActionSheet(scoreIndex) {

	// let testArray = [{
	// 	tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
	// 	, tourneyName: "trevorTest"
    //     , gameNumber: 1 
    //     , winner: ""
	// 	, loser: "" 
	// 	, points: []
	// }];
	
    await this.actionSheetController.create({
      header: 'Type of Point Scored'
      , buttons: [{
          text: "Klasked"
          , handler: () => {
			this.addScoreAndUpdateGameData(scoreIndex, "klask");
			// console.log(this.scores[scoreIndex]["scorer"]);
			// this.checkForWinner();
          }
      }, {
          text: "Loss of Control"
          , handler: () => {
				this.addScoreAndUpdateGameData(scoreIndex, "loss of control");
				// this.checkForWinner();
          }
      }, {
          text: "Normal point"
          , handler: () => {
				this.addScoreAndUpdateGameData(scoreIndex, "score");
				// this.checkForWinner();
          }
      }, {
          text: "Biscuits"
          , handler: () => {
				this.addScoreAndUpdateGameData(scoreIndex, "biscuit");
				// this.checkForWinner();
          }
      }, {
		  text: "-1 (Correction)"
		  , handler: () => {
			  this.scores.splice(this.scores.indexOf(scoreIndex), 1);
			  console.log(this.scores);
		  } 
	  }, { 
          text: "Cancel"
          , icon: "close"
          , role: "cancel"
          , handler: () => {
            	console.log("Cancelled");
          }
      }]
    }).then(res => res.present());
  } 

  addScoreAndUpdateGameData(index, pointType) {

	this.scores = [...this.scores, {
		pointDateTime: Date.now().toString()
		, scorer: index == 0 ? "Trevor" : "Valeria"
		, opponent: index == 1 ? "Trevor" : "Valeria"
		, gamePointNumber: this.scores.length + 1
		, scorerPointNumber: index == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1 
		, pointType: pointType
	}];

    console.log(this.scores);
  }

//   checkForWinner() {
// 	  if (this.scores[0]["scorerPointNumber"] == 6) {
// 		console.log(`Game over. ${this.scores[0]["scorer"]} wins.`);
// 	  }
//   }

  ngOnInit() {
  }

  scores: currentPointData[] = [];

  get playerOneScore() {
	  return this.scores.filter(x => x.scorer == "Trevor").length;
  }

  get playerTwoScore() {
	return this.scores.filter(x => x.scorer == "Valeria").length;
  }

}

