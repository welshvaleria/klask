import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinLossStatsPage } from './win-loss-stats.page';

describe('WinLossStatsPage', () => {
  let component: WinLossStatsPage;
  let fixture: ComponentFixture<WinLossStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinLossStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinLossStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
