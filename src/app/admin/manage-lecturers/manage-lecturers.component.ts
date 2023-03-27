import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-manage-lecturers',
  templateUrl: './manage-lecturers.component.html',
  styleUrls: ['./manage-lecturers.component.scss']
})
export class ManageLecturersComponent implements OnInit {

  
  allLecturers:any[] = []

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.loadAllStudents();
  }

  loadAllStudents(){
    this.afs.collection('Lecturers').get().subscribe(r=>{
      this.allLecturers = []
      for (const student of r.docs) {
        this.allLecturers.push(student.data());
      }
    })
  }
}
