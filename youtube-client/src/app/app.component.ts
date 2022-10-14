import { Component, Output } from '@angular/core';
import { IYouTubeItem } from './models/IYouTubeItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  public response:IYouTubeItem[] = [];

  public filterValue = '';

  public sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = 'dateAsc';

  public getSearchEventFromHeader(response: IYouTubeItem[]): void {
    this.response = response;
  }

  public getFilterValue(filterValue: string):void {
    this.filterValue = filterValue;
  }

  public getfilterDateViewsEvent(sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes'): void {
    this.sortType = sortType;
  }

  constructor() {}
}
