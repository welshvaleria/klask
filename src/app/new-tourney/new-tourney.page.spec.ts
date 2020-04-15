import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTourneyPage } from './new-tourney.page';

describe('NewTourneyPage', () => {
  let component: NewTourneyPage;
  let fixture: ComponentFixture<NewTourneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTourneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTourneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
