import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtonsOnlyExperimentPage } from './buttons-only-experiment.page';

describe('ButtonsOnlyExperimentPage', () => {
  let component: ButtonsOnlyExperimentPage;
  let fixture: ComponentFixture<ButtonsOnlyExperimentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsOnlyExperimentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsOnlyExperimentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
