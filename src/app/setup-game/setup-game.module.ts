import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupGamePageRoutingModule } from './setup-game-routing.module';

import { SetupGamePage } from './setup-game.page';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupGamePageRoutingModule,
    NgbTypeaheadModule
  ],
  declarations: [SetupGamePage]
})
export class SetupGamePageModule {}
