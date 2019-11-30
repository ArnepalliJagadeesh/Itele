import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HomeInfo } from '../Models/HomeInfo';
import { DataService } from '../Services/DataService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeInfo: HomeInfo = {} as HomeInfo;
  constructor(private router: Router, private dataService: DataService) { }
  @ViewChild('search', { static: false }) searchField: ElementRef;
  ngOnInit() {
    this.dataService.CurrentHomePageData.subscribe(res => this.homeInfo = res);
    if (!this.homeInfo.NumberType || this.homeInfo.NumberType === ''
      || this.homeInfo.NumberType === '800' || this.homeInfo.NumberType === 'Standard') {
      this.homeInfo.NumberType = '8**';
    }
  }
  ddlSelected(val: string) {
    this.homeInfo.NumberType = val;
    this.homeInfo.isVanitySearch = false;
    this.homeInfo.isLocalSearch = false;
    if (val === '800' || val === 'Standard') {
      this.dataService.UpdateHomePageData(this.homeInfo);
      this.router.navigate(['/Number-Search']);
    }
    this.searchField.nativeElement.focus();
  }
  btnSearchClick(val: string) {
    this.homeInfo.isVanitySearch = false;
    this.homeInfo.isLocalSearch = false;
    if (val === 'Local') {
      this.homeInfo.isLocalSearch = true;
    } else if (val === 'Vanity') {
      this.homeInfo.isVanitySearch = true;
    }

    this.dataService.UpdateHomePageData(this.homeInfo);
    this.router.navigate(['/Number-Search']);
  }
}
