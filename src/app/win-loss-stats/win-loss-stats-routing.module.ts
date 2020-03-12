import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinLossStatsPage } from './win-loss-stats.page';

const routes: Routes = [
  {
    path: '',
    component: WinLossStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinLossStatsPageRoutingModule {}
