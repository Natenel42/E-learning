import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  busy = false;

  emailAddress: any;
  password: any;

  ngOnInit() {}

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public toastr: ToastrService
  ) {}

  async loginUserwithEmailPassword() {
    this.busy = true;
    try {
      const signInResult = await this.afAuth.signInWithEmailAndPassword(
        this.emailAddress,
        this.password
      );

      const currentUser = await this.afAuth.currentUser;
      this.router.navigate(['/lecturer/home']);
    } catch (err: any) {
      let errMsg = 'Incorrect Login Information Provided';
      if (err.code === 'auth/wrong-password')
        errMsg = 'Wrong emaill address or password';
      else if (err.code === 'auth/invalid-email')
        errMsg = 'Email Address is Invalid';
      else if (err.code === 'auth/user-not-found')
        errMsg = "You don't have account with us. Please Register!";

      this.toastr.warning(errMsg);
      console.log('error');
      this.busy = false;
    }
  }
}
