import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

interface point {
  pointDateTime: string;
  scorer: string;
  gamePointNumber: number;
  scorerPointNumber: number;
  pointType: string;
  opponent: string;
};

@Component({
  selector: 'app-game-scoring',
  templateUrl: './game-scoring.page.html',
  styleUrls: ['./game-scoring.page.scss'],
})

export class GameScoringPage implements OnInit {

  constructor(private actionSheetController : ActionSheetController) { }

  async presentActionSheet(scoreIndex) {

	let scoreTime = Date.now();
	
    await this.actionSheetController.create({
      //header: 'Point type...'
      //, subHeader: "Foo"
      buttons: [
      {
          text: "Score (me)"
          , handler: () => {
                console.log("Normal point scored");
          }
      }
      , { 
          text: "Klask (opponent)"
          , handler: () => {
            console.log("Klasked");
            this.scores = [...this.scores, {
              pointDateTime: "blah"
              , scorer: scoreIndex == 0 ? "Trevor" : "Valeria"
              , opponent: scoreIndex == 1 ? "Trevor" : "Valeria"
              , gamePointNumber: this.scores.length + 1
              , scorerPointNumber: scoreIndex == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1
              , pointType: "Klask"
            }];
            console.log(this.scores);
          }
      }
      , {
          text: "Loss of Control (opponent)"
          , handler: () => {
              	console.log("This person lost control");
          }
      }
      , {
          text: "Biscuit (opponent)"
          , handler: () => {
              	console.log("Biscuit point");
          }
      }
      , {
        text: "-1 (correction)"
        , handler: () => {
          console.log(this.scores);
          this.scores = this.scores
            .filter(x => 
              x.scorer != (scoreIndex == 0 ? "Trevor" : "Valeria")
              || x.scorerPointNumber != (scoreIndex == 0 ? this.playerOneScore : this.playerTwoScore)
            );
          console.log(this.scores);
        }
      }
      , {
          text: "Cancel"
          //, icon: "close"
          , role: "cancel"
          , handler: () => {
            	console.log("Cancelled");
          }
      }]
    }).then(res => res.present());
  } 

  ngOnInit() {
  }

  //scores = [0, 0];

  scores: point[] = [];
  
  get playerOneScore() {
    return this.scores.filter(x => x.scorer == "Trevor").length;
  }

  get playerTwoScore() {
    return this.scores.filter(x => x.scorer == "Valeria").length;
  }
}
