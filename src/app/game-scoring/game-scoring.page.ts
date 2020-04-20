import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-game-scoring',
  templateUrl: './game-scoring.page.html',
  styleUrls: ['./game-scoring.page.scss'],
})
export class GameScoringPage implements OnInit {

	animals: string[] = ["Tiger", "Lion", "Bear", "Elephant"];
  constructor(private actionSheetController : ActionSheetController, private picker : PickerController) { }

  async showPicker() {
	let options: PickerOptions = {
		buttons: [
			{
				text: "Cancel"
				, role: "cancel"
			} , {
				text: "Ok"
				, handler: (value:any) => {
					console.log(value.Animals.value);
				}
			}
		], columns: [{
			name: "Animals"
			, options: this.getColumnOptions()
		}]
	};

	let picker = await this.picker.create(options);
	picker.present();
  }

  getColumnOptions() {
	  let options = [];
	  this.animals.forEach(x => {
		  options.push({text: x, value: x});
	  });
	  return options;
  }

  async presentActionSheet() {
    await this.actionSheetController.create({
      header: 'Points'
      , buttons: [{
          text: "Klasked"
          , handler: () => {
              console.log("This person Klasked");
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
  }

}
