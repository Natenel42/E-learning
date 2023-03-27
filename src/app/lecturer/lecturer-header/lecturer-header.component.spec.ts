import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerHeaderComponent } from './lecturer-header.component';

describe('LecturerHeaderComponent', () => {
  let component: LecturerHeaderComponent;
  let fixture: ComponentFixture<LecturerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
