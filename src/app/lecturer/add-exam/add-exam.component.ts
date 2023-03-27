import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss'],
})
export class AddExamComponent implements OnInit {
  examName: any;
  busy: any = false;
  exam: any;
  numQs: number = 0;
  constructor(private afs: AngularFirestore, private toastr: ToastrService) {}

  ngOnInit(): void {}

  numQsChanged() {
    this.exam = { questions: [] };

    for (let index = 0; index < this.numQs; index++) {
      this.exam.questions.push({ question: '', A: '', B: '', C: '', D: '' });
    }
  }

  async postExam() {
    if (!this.examName) {
      this.toastr.error('Please enter exam name.');
      return;
    }
    await this.afs.collection('Exams').add({
      examName: this.examName,
      exam: this.exam,
      createdOn: new Date().toDateString(),
    });

    this.toastr.success('Exam Posted');
  }

  updateQuestion(i: any, prop: any, $event: any) {
    console.log(i);
    this.exam.questions[i][prop] = $event;
  }
}
