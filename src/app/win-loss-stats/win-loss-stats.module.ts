import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinLossStatsPageRoutingModule } from './win-loss-stats-routing.module';

import { WinLossStatsPage } from './win-loss-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinLossStatsPageRoutingModule
  ],
  declarations: [WinLossStatsPage]
})
export class WinLossStatsPageModule {}
