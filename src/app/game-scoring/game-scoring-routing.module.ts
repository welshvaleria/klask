import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameScoringPage } from './game-scoring.page';

const routes: Routes = [
  {
    path: '',
    component: GameScoringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameScoringPageRoutingModule {}
