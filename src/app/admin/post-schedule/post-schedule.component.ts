import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-post-schedule',
  templateUrl: './post-schedule.component.html',
  styleUrls: ['./post-schedule.component.scss'],
})
export class PostScheduleComponent implements OnInit {
  schedule: any = {};
  weekStartDate: any;
  department: any;
  busy: any;

  constructor(
    private afs: AngularFirestore,
    public appService: AppService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  async postSchedule() {
    if (
      this.weekStartDate === undefined ||
      new Date(this.weekStartDate).getDay() !== 1
    ) {
      this.toastr.error('Please select "Monday" as week start date.');
      return;
    }
    if (this.department === undefined) {
      this.toastr.error('Please select "Department"');
      return;
    }

    await this.afs
      .collection('Schedules')
      .add({
        ...this.schedule,
        department: this.department,
        weekStartDate: this.weekStartDate,
      });

    this.toastr.success('Schedule posted succesfully');
  }
}
