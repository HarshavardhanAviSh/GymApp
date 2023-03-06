import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymMemberComponent } from './add-gym-member.component';

describe('AddGymMemberComponent', () => {
  let component: AddGymMemberComponent;
  let fixture: ComponentFixture<AddGymMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGymMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGymMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
