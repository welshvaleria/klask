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
					x.scorer != (scoreIndex == 0 ? this.playerOne : this.playerTwo) || x.scorerPointNumber != (scoreIndex == 0 ? this.playerOneScore : this.playerTwoScore)
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
	let playerGetterForNow = document.querySelectorAll(".player-name");
	let playerNames = Array.from(playerGetterForNow).map(x => x.innerHTML.trim());

	this.scores = [...this.scores, {
		pointDateTime: Date.now().toString()
		, scorer: playerNames[index]
		, opponent: index == 1 ? playerNames[index - 1] : playerNames[index + 1]
		, gamePointNumber: this.scores.length + 1
		, scorerPointNumber: index == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1 
		, pointType: pointType
	}];
  }

  doSwitch() {
    [this.playerOne, this.playerTwo] = [this.playerTwo, this.playerOne];
  }

  forfeitGame() {

	// TODO: When this button is clicked I want it to create a 6 item array, all with point types "forfeit" for the forfeitting player.
	  console.log("Game forfeitted by ADD FUNCTIONALITY HERE");
  }

  ngOnInit() {}

  scores: currentPointData[] = [];
  isGameOver = false;
  playerOne = "Trevor"; // Here is where we will store the player names from the game setup screen
  playerTwo = "Valeria";// This line too

  get playerOneScore() {
	  return this.scores.filter(x => x.scorer == this.playerOne).length;
  }

  get playerTwoScore() {
	  return this.scores.filter(x => x.scorer == this.playerTwo).length;
  }


}

