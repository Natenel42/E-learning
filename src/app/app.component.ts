import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-learning';

  constructor(public appService:AppService){
    
  }

}
