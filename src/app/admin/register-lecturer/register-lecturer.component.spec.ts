import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLecturerComponent } from './register-lecturer.component';

describe('RegisterLecturerComponent', () => {
  let component: RegisterLecturerComponent;
  let fixture: ComponentFixture<RegisterLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLecturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
