import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.scss']
})
export class ManageStudentsComponent implements OnInit {

  allStudents:any[] = []

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.loadAllStudents();
  }

  loadAllStudents(){
    this.afs.collection('Students').get().subscribe(r=>{
      this.allStudents = []
      for (const student of r.docs) {
        this.allStudents.push(student.data());
      }
    })
  }
}
