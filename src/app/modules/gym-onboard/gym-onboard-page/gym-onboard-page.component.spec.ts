import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymOnboardPageComponent } from './gym-onboard-page.component';

describe('GymOnboardPageComponent', () => {
  let component: GymOnboardPageComponent;
  let fixture: ComponentFixture<GymOnboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymOnboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymOnboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
