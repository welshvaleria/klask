import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinTourneyPageRoutingModule } from './join-tourney-routing.module';

import { JoinTourneyPage } from './join-tourney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinTourneyPageRoutingModule
  ],
  declarations: [JoinTourneyPage]
})
export class JoinTourneyPageModule {}
