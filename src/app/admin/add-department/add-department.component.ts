import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss'],
})
export class AddDepartmentComponent implements OnInit {
  department: any = '';
  program: any = '';
  busy = false;
  allDepartments: any[] = [];
  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  async addDepartment() {
    await this.afs.collection('Departments').add({
      name: this.department,
      program: this.program,
    });
    this.toastr.success('Department Added!');
    this.department = '';
  }

  loadDepartments() {
    this.afs
      .collection('Departments')
      .valueChanges()
      .subscribe((r: any[]) => {
        this.allDepartments = [];
        for (const departmt of r) {
          console.log(departmt);
          this.allDepartments.push(departmt);
        }
      });
  }
}
