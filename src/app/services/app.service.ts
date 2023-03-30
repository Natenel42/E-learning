import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  signedUser: any;
  currentUser:any;
  Departments:any;

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    private afs: AngularFirestore,
    public auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe((auth: any) => {
      this.signedUser = auth;
    });

    this.afs
      .collection('Departments')
      .valueChanges()
      .subscribe((r:any[]) => {
        this.Departments = [];
        for (const departmt of r) {
          console.log(departmt)
          this.Departments.push(departmt);
        }
      });
  }

  async loggedInUser() {
    return await firstValueFrom(this.afAuth.authState.pipe());
  }

  signOut() {
    this.currentUser = undefined;
    this.auth.signOut();
    this.router.navigateByUrl(`/home`);
  }

  Programs = ['Degree','Diploma']
  Courses = ['Complexity', 'Intoduction to Computer Science', 'Object Oriented Programming', 'Operating Systems']
}
