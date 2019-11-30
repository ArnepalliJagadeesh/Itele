import { Component, OnInit } from '@angular/core';
import { HomeInfo } from '../Models/HomeInfo';
import { DataService } from '../Services/DataService';

@Component({
  selector: 'app-number-search',
  templateUrl: './number-search.component.html',
  styleUrls: ['./number-search.component.css']
})
export class NumberSearchComponent implements OnInit {
  homeInfo: HomeInfo = {} as HomeInfo;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.CurrentHomePageData.subscribe(res => this.homeInfo = res);
  }

}
