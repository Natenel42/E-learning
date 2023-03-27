import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAssessmentsComponent } from './check-assessments.component';

describe('CheckAssessmentsComponent', () => {
  let component: CheckAssessmentsComponent;
  let fixture: ComponentFixture<CheckAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAssessmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
