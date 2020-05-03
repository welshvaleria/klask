import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourneyStatsPage } from './tourney-stats.page';

const routes: Routes = [
  {
    path: '',
    component: TourneyStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourneyStatsPageRoutingModule {}
