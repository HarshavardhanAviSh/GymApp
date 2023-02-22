import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGymMemberComponent } from './update-gym-member.component';

describe('UpdateGymMemberComponent', () => {
  let component: UpdateGymMemberComponent;
  let fixture: ComponentFixture<UpdateGymMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGymMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGymMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
