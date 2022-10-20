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
    return this.filterValue;
  }

  setFilterValue(filterValue: string) {
    return this.filterValue = filterValue;
  }

}
