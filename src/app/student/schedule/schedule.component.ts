import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  schedule: any;
  weekStartDate: any;
  constructor(private afs: AngularFirestore, public toastr: ToastrService) {}

  ngOnInit(): void {}

  async loadWeeklySchedule() {
    this.schedule = undefined;
    await this.afs
      .collection('Schedules', (ref) =>
        ref.where('weekStartDate', '==', this.weekStartDate)
      )
      .get()
      .subscribe((schedulesDoc) => {
        if(schedulesDoc.size > 0){
          this.schedule = schedulesDoc.docs[0].data();
        } else{
          this.schedule = null;
        }
      });
  }

  onDateChange(date: any) {
    if (new Date(date).getDay() !== 1) {
      this.toastr.error('Please select "Monday" as week start date.');
      return;
    }

    this.loadWeeklySchedule();
  }
}
