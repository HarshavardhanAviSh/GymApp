import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymAdminPageComponent } from './gym-admin-page.component';

describe('GymAdminPageComponent', () => {
  let component: GymAdminPageComponent;
  let fixture: ComponentFixture<GymAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
