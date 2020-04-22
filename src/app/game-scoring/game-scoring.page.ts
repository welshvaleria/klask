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

	let scoreTime = Date.now();
	
    await this.actionSheetController.create({
      header: 'What happened...'
      //, subHeader: "Foo"
      , buttons: [{
          text: "Klask (opponent Klasked)"
          , handler: () => {
            console.log("Klasked");
            this.scores[scoreIndex] += 1
          }
      }, {
          text: "Loss of Control (by opponent)"
          , handler: () => {
              	console.log("This person lost control");
          }
      }, {
          text: "Score (I scored)"
          , handler: () => {
              	console.log("Normal point scored");
          }
      }, {
          text: "Biscuit (opponent collected 3 biscuits)"
          , handler: () => {
              	console.log("Biscuit point");
          }
      }
      , {
        text: "-1 (Oops, correcting a mistake)"
        , handler: () => this.scores[scoreIndex] -= 1
      }
      , {
          text: "Cancel"
          , icon: "close"
          , role: "cancel"
          , handler: () => {
            	console.log("Cancelled");
          }
      }]
    }).then(res => res.present());
  } 

  ngOnInit() {
  }

  scores = [0, 0]
}
