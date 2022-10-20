import { Component, Output } from '@angular/core';
import { DataService } from './core/services/data.service';
import { IYouTubeItem } from './models/IYouTubeItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  public response:IYouTubeItem[] = this.dataService.response;

  public filterValue = '';//move to data-service

  public sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = 'dateAsc';//move to data-service

  public getSearchEventFromHeader(response: IYouTubeItem[]): void {//keep 
    this.response = response;
  }




  // public getFilterValue(filterValue: string):void {
  //   this.filterValue = filterValue;
  // }

  // public getfilterDateViewsEvent(sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes'): void {
  //   this.sortType = sortType;
  // }

  constructor(public dataService: DataService) {
    this.response = this.dataService.response;
  }


  
} 
