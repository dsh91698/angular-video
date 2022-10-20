import { Injectable } from '@angular/core';
import { IYouTubeItem } from 'src/app/models/IYouTubeItem';
import { mockResponse } from '../../response';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  //vars
  public response: IYouTubeItem[] = mockResponse.items;


  constructor() { }

  //methods
}
