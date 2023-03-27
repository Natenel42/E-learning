import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-shared-materials',
  templateUrl: './shared-materials.component.html',
  styleUrls: ['./shared-materials.component.scss'],
})
export class SharedMaterialsComponent implements OnInit {
  selectedCourse: any;
  sharedCourseMaterials: any = [];

  constructor(
    public appService: AppService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {}

  onCourseChange(course: any) {
    this.getFileList(course)
  }

  getFileList(course:any) {
    this.sharedCourseMaterials = [];
    const ref = this.storage.ref(`courseMaterials/${course}`);
    ref.listAll().subscribe((data) => {
      for (let i = 0; i < data.items.length; i++) {
        this.sharedCourseMaterials.push({path: data.items[i].fullPath, name: data.items[i].name})
      }
    });
  }
}
