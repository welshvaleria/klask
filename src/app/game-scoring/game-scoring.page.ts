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
      header: 'Point type...'
      //, subHeader: "Foo"
      , buttons: [
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
            this.scores[scoreIndex] += 1
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
        , handler: () => this.scores[scoreIndex] -= 1
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

  scores = [0, 0]
}
