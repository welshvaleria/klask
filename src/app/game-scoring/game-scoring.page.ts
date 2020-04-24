import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

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
	
    await this.actionSheetController.create({
      header: 'Type of Point Scored'
      , buttons: [{
          text: "Klasked"
          , handler: () => {
			this.addScoreAndUpdateGameData(scoreIndex, "klask");
          }
      }, {
          text: "Loss of Control"
          , handler: () => {
				this.addScoreAndUpdateGameData(scoreIndex, "loss of control");
          }
      }, {
          text: "Normal point"
          , handler: () => {
				this.addScoreAndUpdateGameData(scoreIndex, "score");
          }
      }, {
          text: "Biscuits"
          , handler: () => {
				this.addScoreAndUpdateGameData(scoreIndex, "biscuit");
          }
      }, {
		  text: "-1 (Correction)"
		  , handler: () => {
			  console.log(this.scores);
			  this.scores.forEach(x => {
				console.log(x.scorerPointNumber != (scoreIndex == 0 ? this.playerOneScore : this.playerTwoScore));
			  })
			  this.scores = this.scores.filter(x => 
				x.scorer != (scoreIndex == 0 ? "Trevor" : "Valeria") || x.scorerPointNumber != (scoreIndex == 0 ? this.playerOneScore : this.playerTwoScore)
			  );
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

	this.isGameOver = ((index == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1) == 6 ? true : false);

	this.scores = [...this.scores, {
		pointDateTime: Date.now().toString()
		, scorer: index == 0 ? "Trevor" : "Valeria"
		, opponent: index == 1 ? "Trevor" : "Valeria"
		, gamePointNumber: this.scores.length + 1
		, scorerPointNumber: index == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1 
		, pointType: pointType
	}];

  }

  ngOnInit() {
  }

  scores: currentPointData[] = [];

  get playerOneScore() {
	  return this.scores.filter(x => x.scorer == "Trevor").length;
  }

  get playerTwoScore() {
	return this.scores.filter(x => x.scorer == "Valeria").length;
  }

  isGameOver = false;

}

