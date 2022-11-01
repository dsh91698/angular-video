import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IYouTubeItem } from 'src/app/models/IYouTubeItem';
import { mockResponse } from '../../response';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  //vars
  public searchInput = new FormControl(); 

  public response: IYouTubeItem[] = mockResponse.items;

  public filterValue = '';

  public sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = 'dateAsc';


  public setResponse(): void {
    this.response = mockResponse.items;
  }

}
