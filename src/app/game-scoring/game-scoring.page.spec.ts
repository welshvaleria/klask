import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameScoringPage } from './game-scoring.page';

describe('GameScoringPage', () => {
  let component: GameScoringPage;
  let fixture: ComponentFixture<GameScoringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameScoringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameScoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
