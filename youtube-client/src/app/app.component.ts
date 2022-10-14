import { Component, Output } from '@angular/core';
import { IYouTubeItem } from './models/IYouTubeItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  public response:IYouTubeItem[] = [];

  public strForFiltering = '';

  public sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = 'dateAsc';

  public getSearchEventFromHeader(response: IYouTubeItem[]): void {
    this.response = response;
  }

  public getFilterValue(strForFiltering: string):void {
    this.strForFiltering = strForFiltering;
  }

  public getfilterDateViewsEvent(sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes'): void {
    this.sortType = sortType;
  }


  constructor() {}
}
