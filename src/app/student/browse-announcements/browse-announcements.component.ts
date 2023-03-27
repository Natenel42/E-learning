import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-browse-announcements',
  templateUrl: './browse-announcements.component.html',
  styleUrls: ['./browse-announcements.component.scss'],
})
export class BrowseAnnouncementsComponent implements OnInit {
  studentAnnouncements:any[] = [];

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements() {
    this.afs
      .collection('Announcements')
      .get()
      .subscribe((announcementDocuments) => {
        this.studentAnnouncements = [];
        for (const student of announcementDocuments.docs) {
          this.studentAnnouncements.push(student.data());
        }
      });
  }
}
