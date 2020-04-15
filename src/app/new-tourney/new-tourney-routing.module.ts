import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTourneyPage } from './new-tourney.page';

const routes: Routes = [
  {
    path: '',
    component: NewTourneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTourneyPageRoutingModule {}
