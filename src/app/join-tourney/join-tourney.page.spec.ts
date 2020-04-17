import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinTourneyPage } from './join-tourney.page';

describe('JoinTourneyPage', () => {
  let component: JoinTourneyPage;
  let fixture: ComponentFixture<JoinTourneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTourneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinTourneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
