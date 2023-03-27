import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/services/app.service';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register-lecturer',
  templateUrl: './register-lecturer.component.html',
  styleUrls: ['./register-lecturer.component.scss']
})
export class RegisterLecturerComponent implements OnInit {
  firstName: any;
  middleName: any;
  lastName: any;
  emailAddress: any;
  password: any;
  confirm_password: any;
  birthDate: any;
  department:any;
  course:any;

  busy = false;

  ngOnInit() {}

  constructor(
    public router: Router,
    public toastr: ToastrService,
    public appService: AppService,
    private backendService: AngularFireFunctions
  ) {}

  async registerUserwithEmailPassword() {
    try {
      if (this.emailAddress === undefined) throw 'Please Enter Email Address';
      if (this.password === undefined) throw 'Please Enter Password';
      else if (this.password.length < 6)
        throw 'Password too short. Minimum is 6 characters.';
      else if (this.password !== this.confirm_password)
        throw "Passwords don't match.";
    } catch (msg: any) {
      this.toastr.warning(msg);
      return;
    }

    this.busy = true;
    try {
      const lecturer = {
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        birthDate: this.birthDate,
        emailAddress: this.emailAddress,
        department: this.department,
        course: this.course,
        password:this.password
      };

      const registerLecturer = this.backendService.httpsCallable('registerLecturer');
      const registerResult = await firstValueFrom(registerLecturer(lecturer));
  
      if (registerResult?.error) {
        throw new Error(registerResult.error);
      }
      this.toastr.success('Lecturer Registered');
      this.busy = false;
    } catch (err: any) {
      let errMsg = 'Incorrect Information Provided';
      if (err.code === 'auth/email-already-in-use')
        errMsg = 'You already have account, please Login';
      else if (err.code === 'auth/invalid-email')
        errMsg = 'Email Address is Invalid';
      else if (err.code === 'auth/user-not-found')
        errMsg = "You don't have account with us. Please Register!";

      this.toastr.warning(errMsg);

      this.busy = false;
    }
  }
}
