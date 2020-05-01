import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourneyStatsPageRoutingModule } from './tourney-stats-routing.module';

import { TourneyStatsPage } from './tourney-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourneyStatsPageRoutingModule
  ],
  declarations: [TourneyStatsPage]
})
export class TourneyStatsPageModule {}
