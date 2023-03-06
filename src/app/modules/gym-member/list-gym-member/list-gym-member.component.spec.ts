import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGymMemberComponent } from './list-gym-member.component';

describe('ListGymMemberComponent', () => {
  let component: ListGymMemberComponent;
  let fixture: ComponentFixture<ListGymMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGymMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGymMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
