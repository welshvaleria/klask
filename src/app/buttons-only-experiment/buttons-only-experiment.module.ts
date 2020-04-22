import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsOnlyExperimentPageRoutingModule } from './buttons-only-experiment-routing.module';

import { ButtonsOnlyExperimentPage } from './buttons-only-experiment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsOnlyExperimentPageRoutingModule
  ],
  declarations: [ButtonsOnlyExperimentPage]
})
export class ButtonsOnlyExperimentPageModule {}
