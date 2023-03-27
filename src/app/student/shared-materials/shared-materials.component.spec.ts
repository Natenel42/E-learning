import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMaterialsComponent } from './shared-materials.component';

describe('SharedMaterialsComponent', () => {
  let component: SharedMaterialsComponent;
  let fixture: ComponentFixture<SharedMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
