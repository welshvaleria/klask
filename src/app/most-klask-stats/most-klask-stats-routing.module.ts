import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostKlaskStatsPage } from './most-klask-stats.page';

const routes: Routes = [
  {
    path: '',
    component: MostKlaskStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostKlaskStatsPageRoutingModule {}
