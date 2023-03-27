import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAnnouncementsComponent } from './browse-announcements.component';

describe('BrowseAnnouncementsComponent', () => {
  let component: BrowseAnnouncementsComponent;
  let fixture: ComponentFixture<BrowseAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseAnnouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
