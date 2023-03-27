// AuthGuard Service
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { AppService } from '../services/app.service';
//import { PreloadService } from './preload_service';

@Injectable()
export class AuthorizedStudentOnlyGuard implements CanActivate {
  constructor(
    private router: Router,
    public appService: AppService,
    private afs: AngularFirestore
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const loggedInUser = await this.appService.loggedInUser();
    if (loggedInUser === undefined || loggedInUser === null) {
      this.router.navigateByUrl(``);
      return false;
    } else {
      const user = await firstValueFrom(
        this.afs.doc('Users/' + loggedInUser.uid).get()
      );
      const data: any = user.data();
      if(data.role === 'student'){
        return true;
      }
      else{
        this.router.navigateByUrl(`/${data.role}/home`);
        return false;
      }
    }
  }
}
