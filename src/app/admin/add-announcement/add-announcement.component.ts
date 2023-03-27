import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss'],
})
export class AddAnnouncementComponent implements OnInit {
  constructor(private afs: AngularFirestore, private toastr: ToastrService) {}
  busy = false;
  announceUntil: any;
  message: any;
  addressedTo:any;
  addressedFrom:any;

  ngOnInit(): void {}

  async postAnnouncement() {
    if (this.message === undefined) {
      this.toastr.error('Please enter message to post');
      return;
    }
    if (this.addressedTo === undefined) {
      this.toastr.error('Please enter "Addressed To"');
      return;
    }
    if (this.announceUntil === undefined) {
      this.toastr.error('Please enter date');
      return;
    }

    //Adds the announcement to Announcements collection in our firebase database-equivalent to insert statement in SQL
    await this.afs.collection('Announcements').add({
      message: this.message,
      announceUntil: this.announceUntil,
      announcedOn: new Date().toDateString(),
      addressedTo : this.addressedTo,
      addressedFrom: this.addressedFrom
    });

    this.toastr.success('Announcement posted succesfully');
  }
}
