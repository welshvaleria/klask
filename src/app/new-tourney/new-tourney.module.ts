import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTourneyPageRoutingModule } from './new-tourney-routing.module';

import { NewTourneyPage } from './new-tourney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTourneyPageRoutingModule
  ],
  declarations: [NewTourneyPage]
})
export class NewTourneyPageModule {}
