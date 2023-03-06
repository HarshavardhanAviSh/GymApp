import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymAddComponent } from './gym-add.component';

describe('GymAddComponent', () => {
  let component: GymAddComponent;
  let fixture: ComponentFixture<GymAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
