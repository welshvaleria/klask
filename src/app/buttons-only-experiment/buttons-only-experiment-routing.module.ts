import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsOnlyExperimentPage } from './buttons-only-experiment.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonsOnlyExperimentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsOnlyExperimentPageRoutingModule {}
