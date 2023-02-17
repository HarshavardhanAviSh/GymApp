import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymMemberHomeComponent } from './gym-member-home.component';

describe('GymMemberHomeComponent', () => {
  let component: GymMemberHomeComponent;
  let fixture: ComponentFixture<GymMemberHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymMemberHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymMemberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
