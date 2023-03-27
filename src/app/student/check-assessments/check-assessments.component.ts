import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-check-assessments',
  templateUrl: './check-assessments.component.html',
  styleUrls: ['./check-assessments.component.scss'],
})
export class CheckAssessmentsComponent implements OnInit {
  courses: any[] = [];
  constructor(private afs: AngularFirestore, private appService: AppService) {}

  ngOnInit(): void {
    this.loadAssessments();
  }

  async loadAssessments() {
    const loggedInUser = await this.appService.loggedInUser();

    await this.afs
      .collection('Students')
      .doc(loggedInUser?.uid)
      .get()
      .subscribe((studentDoc) => {
        const student: any = studentDoc.data();

        for (const course in student.courses) {
          //console.log(variable)
          this.courses.push({course: course, ...student.courses[course]})
        }
      });
  }
}
