import { Injectable, Input } from '@angular/core';
import { IYouTubeItem } from 'src/app/models/IYouTubeItem';
import { mockResponse } from '../../response';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  //vars
  public _response: IYouTubeItem[] = mockResponse.items;

  private _filterValue = '';

  public sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = 'dateAsc';


  setResponse() {
    this.response = mockResponse.items;
  }

  //methods
 
  public get filterValue(): string {
    console.log('get filter val ->', this._filterValue);
    return this._filterValue;
  }

  public set filterValue(filterValue: string) {
    console.log('set filter val ->', filterValue, this._filterValue);
    this._filterValue = filterValue;
  }

  public get response() {
    return this._response;
  }

  public set response(response: IYouTubeItem[]) {
    this._response = response;
  }

  constructor() { }


}
