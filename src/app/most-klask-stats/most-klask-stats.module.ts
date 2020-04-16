import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostKlaskStatsPageRoutingModule } from './most-klask-stats-routing.module';

import { MostKlaskStatsPage } from './most-klask-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostKlaskStatsPageRoutingModule
  ],
  declarations: [MostKlaskStatsPage]
})
export class MostKlaskStatsPageModule {}
