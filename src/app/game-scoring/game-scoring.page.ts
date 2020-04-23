import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-game-scoring',
  templateUrl: './game-scoring.page.html',
  styleUrls: ['./game-scoring.page.scss'],
})

export class GameScoringPage implements OnInit {

  constructor(private actionSheetController : ActionSheetController) { }

  async presentActionSheet(scoreIndex) {
	
    await this.actionSheetController.create({
      header: 'Points'
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

    this.scores[index] += 1;

    let currGameData = {
      pointDateTime: Date.now()
      , scorer: "Trevor"
      , gamePointNumber: this.scores.reduce((acc, x) => acc + x, 0)
      , scorerPointNumber: function() {
          this.scores[index]
		}
	  , pointType: pointType
      , opponent: "Valeria"
    };

    console.log(currGameData);
  }

  ngOnInit() {
  }

  scores = [0, 0]

}

