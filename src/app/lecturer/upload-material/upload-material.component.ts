import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-upload-material',
  templateUrl: './upload-material.component.html',
  styleUrls: ['./upload-material.component.scss'],
})
export class UploadMaterialComponent implements OnInit {

  selectedCourse:any;
  file: any;
  filePath: any;
  busy = false;

  constructor(
    public appService: AppService,
    private storage: AngularFireStorage,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  uploadFile(event: any) {
    this.file = event.target.files[0];
  }

  uploadMaterial() {
    if (this.selectedCourse === undefined){
      this.toastr.error('Please select course');
      return;
    }
    else if (this.file === undefined){
      this.toastr.error('Please choose file');
      return;
    }

    this.filePath = `courseMaterials/${this.selectedCourse}/${this.file.name}`;
    console.log(this.filePath)
    const task = this.storage.upload(this.filePath, this.file).then(r=>{
      this.toastr.success('Upload success');
    }).catch(err=>{
      this.toastr.error('Error occured');
    })
  }
}
