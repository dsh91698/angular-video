import { Injectable } from '@angular/core';
import { IYouTubeItem } from 'src/app/models/IYouTubeItem';
import { mockResponse } from '../../response';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  //vars
  public response: IYouTubeItem[] = mockResponse.items;

  public filterValue = '';

  public sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = 'dateAsc';



  constructor() { }

  setResponse() {
    this.response = mockResponse.items;
  }

  //methods

  getFilterValue() {
    console.log('get filter val ->', this.filterValue);
    return this.filterValue;
  }

  setFilterValue(filterValue: string) {
    console.log('set filter val ->', this.filterValue, filterValue);
    return this.filterValue = filterValue;
  }

}
