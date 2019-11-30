import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './Services/DataService';
import { HomeInfo } from './Models/HomeInfo';

@NgModule({
  imports: [NgbModule]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'iTeleCenter';
  constructor(public router: Router, private dataService: DataService) {

  }
  HomeClick() {
    this.dataService.UpdateHomePageData({} as HomeInfo);
  }
}
