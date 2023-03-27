import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss'],
})
export class StudentRegisterComponent implements OnInit {
  firstName: any;
  middleName: any;
  lastName: any;
  emailAddress: any;
  password: any;
  confirm_password: any;
  birthDate: any;
  program: any;
  department: any;

  busy = false;

  ngOnInit() {}

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public toastr: ToastrService,
    private afs: AngularFirestore,
    public appService: AppService
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
      await this.afAuth.createUserWithEmailAndPassword(
        this.emailAddress,
        this.password
      );
      const loggedInUser = await this.appService.loggedInUser();

      if (!loggedInUser) {
        return;
      }

      const student = {
        userId: loggedInUser.uid,
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        birthDate: this.birthDate,
        emailAddress: this.emailAddress,
        year: 1,
        semester: 1,
        section: 1,
        department: this.department,
        program: this.program
      };

      await this.afs.collection('Students').doc(loggedInUser.uid).set(student);

      await this.afs
        .collection('Users')
        .doc(loggedInUser.uid)
        .set({
          role: 'student',
          ...student,
        });

      this.router.navigate(['/student/home']);
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
