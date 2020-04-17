import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinTourneyPage } from './join-tourney.page';

const routes: Routes = [
  {
    path: '',
    component: JoinTourneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinTourneyPageRoutingModule {}
