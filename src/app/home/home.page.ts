import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private klaskSvc: KlaskService) {}

  ngOnInit() {
    const foo = this.klaskSvc.getTournaments();
    console.log(foo);
  }  
}
