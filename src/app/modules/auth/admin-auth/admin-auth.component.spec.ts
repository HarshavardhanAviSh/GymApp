import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/gym-admin-page/gym-admin-page.component.spec.ts
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
========
import { AdminAuthComponent } from './admin-auth.component';

describe('AdminAuthComponent', () => {
  let component: AdminAuthComponent;
  let fixture: ComponentFixture<AdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAuthComponent);
>>>>>>>> origin:src/app/modules/auth/admin-auth/admin-auth.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
