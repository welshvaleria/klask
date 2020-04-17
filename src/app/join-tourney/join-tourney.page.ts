import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-join-tourney',
  templateUrl: './join-tourney.page.html',
  styleUrls: ['./join-tourney.page.scss'],
})
export class JoinTourneyPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  tourneyName = null;
  username = "";

  ngOnInit() {
    this.tourneyName = this.activatedRoute.snapshot.paramMap.get("tourneyName");
  }

  test() {
      alert(this.username);
  }

}
