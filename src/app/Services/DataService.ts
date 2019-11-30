import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HomeInfo} from '../Models/HomeInfo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private HomePageData = new BehaviorSubject({} as HomeInfo);
  CurrentHomePageData = this.HomePageData.asObservable();

  constructor() { }
  UpdateHomePageData(homePageData: HomeInfo) {
    this.HomePageData.next(homePageData);
  }
}
