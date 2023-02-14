import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCustomerAuthComponent } from './gym-customer-auth.component';

describe('GymCustomerAuthComponent', () => {
  let component: GymCustomerAuthComponent;
  let fixture: ComponentFixture<GymCustomerAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymCustomerAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymCustomerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
