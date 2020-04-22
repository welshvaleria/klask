import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-game-scoring',
  templateUrl: './game-scoring.page.html',
  styleUrls: ['./game-scoring.page.scss'],
})

export class GameScoringPage implements OnInit {

  constructor(private actionSheetController : ActionSheetController) { }

  async presentActionSheet(test) {

	let player1 = document.querySelector("#player1");
	let player2 = document.querySelector("#player1");
	let scoreTime = Date.now();
	
    await this.actionSheetController.create({
      header: 'Points'
      , buttons: [{
          text: "Klasked"
          , handler: () => {
				  console.log(test);
				  // TODO: How to get which button was clicked?
				player1.innerHTML = (parseInt(document.querySelector("#player1").innerHTML, 10) + 1).toString();
          }
      }, {
          text: "Loss of Control"
          , handler: () => {
              	console.log("This person lost control");
          }
      }, {
          text: "Normal point"
          , handler: () => {
              	console.log("Normal point scored");
          }
      }, {
          text: "Biscuits"
          , handler: () => {
              	console.log("Biscuit point");
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

  ngOnInit() {
	  document.querySelector("#player1").innerHTML = "0";
	  document.querySelector("#player2").innerHTML = "0";
  }

}
