import { Component } from '@angular/core';
import { KlaskService } from '../klask.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private klaskSvc: KlaskService) {}

  serviceExample() {
    console.log(this.klaskSvc);
    const foo = this.klaskSvc.getTournamentGameResults("some guid");
    console.log(foo);
  }

}
