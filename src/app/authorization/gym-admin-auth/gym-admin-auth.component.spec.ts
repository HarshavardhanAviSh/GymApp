import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymAdminAuthComponent } from './gym-admin-auth.component';

describe('GymAdminAuthComponent', () => {
  let component: GymAdminAuthComponent;
  let fixture: ComponentFixture<GymAdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymAdminAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymAdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
