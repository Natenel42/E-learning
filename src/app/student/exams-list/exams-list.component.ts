import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.scss'],
})
export class ExamsListComponent implements OnInit {
  studentExams: any[] = [];
  currentExam: any;
  constructor(private afs: AngularFirestore) {}
  ngOnInit(): void {
    this.loadExams();
  }

  loadExams() {
    this.afs
      .collection('Exams')
      .get()
      .subscribe((announcementDocuments) => {
        this.studentExams = [];
        for (const student of announcementDocuments.docs) {
          this.studentExams.push(student.data());
        }
      });
  }

  takeExam(exam: any) {
    this.currentExam = exam;
    console.log(exam)
  }

  submitExam(){
    
  }
}
