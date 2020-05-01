import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TourneyStatsPage } from './tourney-stats.page';

describe('TourneyStatsPage', () => {
  let component: TourneyStatsPage;
  let fixture: ComponentFixture<TourneyStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourneyStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TourneyStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
