import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

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

  constructor(private actionSheetController : ActionSheetController, private alertController : AlertController) { }

  async gameEndConfirmationAlert() {
	  await this.alertController.create({
		header: "Test header"
		, subHeader: "Test subheader"
		, message: "Test message"
		, buttons: ['Yes', 'No']
	  }).then(alert => alert.present());
  }

  alertTester() {
	if (this.isGameOver) {
		this.gameEndConfirmationAlert();
	}
  }

  async forfeitActionSheet() {
	  await this.actionSheetController.create({
		header: "Who is forfeitting?"
		, mode: "md"
		, buttons: [{
			text: this.players[0]
			, handler: () => {
				this.forfeitGame(0);
			}
		}, {
			text: this.players[1]
			, handler: () => {
				this.forfeitGame(1);
			}
		}, {
			text: "Cancel"
			, icon: "close"
			, role: "cancel"
		}]
	  }).then(res => res.present());
  }

  forfeitGame(playerNumber) {
	this.isGameOver = true;
	this.winner = (playerNumber == 0 ? this.players[playerNumber + 1] : this.players[playerNumber - 1]);
	this.alertTester();
  }

  async presentActionSheet(scoreIndex) {
	
    await this.actionSheetController.create({
	  header: 'Type of Point Scored'
	  , mode: "md"
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
				// This creates a new array via filtering the existing one. 
				// It will filter out the entry where both condition expressions return false. (Why is behaving like &&???)
				//	Ex: Player "Trevor" requests to change his score from 2 to 1.
				//		  "Trevor" != "Trevor" returns false. 2 != 2 returns false. 
				//	    The request to delete Trevor's second point gets removed in the new scores array.
				this.scores = this.scores.filter(x => 
					x.scorer != (scoreIndex == 0 ? this.players[0] : this.players[1]) || x.scorerPointNumber != (scoreIndex == 0 ? this.playerOneScore : this.playerTwoScore)
				);
				console.log(this.scores);
		  } 
	  }, { 
          text: "Cancel"
          , icon: "close"
          , role: "cancel"
      }]
    }).then(res => res.present());
  } 

  addScoreAndUpdateGameData(index, pointType) {

	this.isGameOver = ((index == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1) == 6 ? true : false);
	let playerGetterForNow = document.querySelectorAll(".player-name");
	let playerNames = Array.from(playerGetterForNow).map(x => x.innerHTML.trim());

	this.scores = [...this.scores, {
		pointDateTime: Date.now().toString()
		, scorer: this.players[index]
		, opponent: index == 1 ? this.players[index - 1] : this.players[index + 1]
		, gamePointNumber: this.scores.length + 1
		, scorerPointNumber: index == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1 
		, pointType: pointType
	}];
  }

  doSwitch() {
    [this.players[0], this.players[1]] = [this.players[1], this.players[0]];
  }

  ngOnInit() {}

  scores: currentPointData[] = [];
  isGameOver = false;
  players = ["Trevor", "Valeria"]; // To be filled in from the game setup page
  winner = null;

  get playerOneScore() {
	  return this.scores.filter(x => x.scorer == this.players[0]).length;
  }

  get playerTwoScore() {
	  return this.scores.filter(x => x.scorer == this.players[1]).length;
  }


}

