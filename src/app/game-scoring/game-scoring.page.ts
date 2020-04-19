import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-game-scoring',
  templateUrl: './game-scoring.page.html',
  styleUrls: ['./game-scoring.page.scss'],
})
export class GameScoringPage implements OnInit {

  constructor() { }

  ngOnInit() {
    window.PickerController = PickerController;
  }

}
