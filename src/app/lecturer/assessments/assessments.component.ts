import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'],
})
export class AssessmentsComponent implements OnInit {
  allStudents: any[] = [];
  course: string = 'abs';
  busy = false;
  constructor(
    private afs: AngularFirestore,
    private appService: AppService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.course = this.appService.currentUser.course;
    this.loadStudents();
  }

  loadStudents() {
    this.afs
      .collection('Students')
      .get()
      .subscribe((r) => {
        this.allStudents = [];
        for (const student of r.docs) {
          const studentData: any = student.data();
          studentData.id = student.id;

          if (!studentData.courses) studentData.courses = {};
          if (!studentData.courses[this.course])
            studentData.courses[this.course] = {
              exam: 0,
              quiz: 0,
              assignment: 0,
            };
          this.allStudents.push(studentData);
        }
      });
  }

  async saveAssessment() {
    const batch = this.afs.firestore.batch();
    for (const student of this.allStudents) {
      const update: any = {};
      update[`courses.${this.course}`] = {
        exam: student.courses[this.course].exam,
        quiz: student.courses[this.course].quiz,
        assignment: student.courses[this.course].assignment,
      };
      batch.update(this.afs.doc(`Students/${student.id}`).ref, update);
    }

    await batch.commit();
    this.toastr.success('Assessment saved');
  }
}
