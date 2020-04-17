import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-join-tourney',
  templateUrl: './join-tourney.page.html',
  styleUrls: ['./join-tourney.page.scss'],
})
export class JoinTourneyPage implements OnInit {

  constructor(private klaskSvc: KlaskService, private activatedRoute: ActivatedRoute) { }

  tournaments = [];
  tourneyName = null;
  username = "";

  ngOnInit() {
    this.tournaments = this.klaskSvc.getTournaments();
    this.tourneyName = this.activatedRoute.snapshot.paramMap.get("tourneyName");
    // this.klaskSvc[1][0].tourneyName;
    // alert(this.klaskSvc[1][0].tourneyName);
  }

  test() {
      alert(this.tourneyName);
      alert(this.username);
  }

}
