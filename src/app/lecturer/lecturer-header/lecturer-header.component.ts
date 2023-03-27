import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-lecturer-header',
  templateUrl: './lecturer-header.component.html',
  styleUrls: ['./lecturer-header.component.scss']
})
export class LecturerHeaderComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
