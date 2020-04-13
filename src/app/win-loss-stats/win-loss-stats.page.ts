import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';

@Component({
  selector: 'app-win-loss-stats',
  templateUrl: './win-loss-stats.page.html',
  styleUrls: ['./win-loss-stats.page.scss'],
})
export class WinLossStatsPage implements OnInit {

  constructor(private klaskSvc: KlaskService) { }

  results: any[];

  ngOnInit() {
    this.results = this.klaskSvc.getTournamentGameResults("1073ed04-45ef-444e-8263-8cc77b5251e4");
    console.log(this.results);

    // Practice filtering... reducing... ??? Here...
  }
}
