import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksAndFeaturesComponent } from './how-it-works-and-features.component';

describe('HowItWorksAndFeaturesComponent', () => {
  let component: HowItWorksAndFeaturesComponent;
  let fixture: ComponentFixture<HowItWorksAndFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorksAndFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksAndFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
