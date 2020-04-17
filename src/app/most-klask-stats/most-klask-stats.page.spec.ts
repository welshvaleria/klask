import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostKlaskStatsPage } from './most-klask-stats.page';

describe('MostKlaskStatsPage', () => {
  let component: MostKlaskStatsPage;
  let fixture: ComponentFixture<MostKlaskStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostKlaskStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostKlaskStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
