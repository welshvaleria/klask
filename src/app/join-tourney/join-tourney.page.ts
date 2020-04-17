import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';

@Component({
  selector: 'app-join-tourney',
  templateUrl: './join-tourney.page.html',
  styleUrls: ['./join-tourney.page.scss'],
})
export class JoinTourneyPage implements OnInit {

  constructor(private klaskSvc: KlaskService) { }

  tournaments = [];

  ngOnInit() {
    this.tournaments = this.klaskSvc.getTournaments();
  }

  test() {
      alert("workin..");
  }

}
