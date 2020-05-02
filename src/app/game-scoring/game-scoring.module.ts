import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameScoringPageRoutingModule } from './game-scoring-routing.module';

import { GameScoringPage } from './game-scoring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameScoringPageRoutingModule
  ],
  declarations: [GameScoringPage]
})
export class GameScoringPageModule {}
