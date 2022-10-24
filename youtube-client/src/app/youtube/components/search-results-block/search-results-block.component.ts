import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { IYouTubeItem } from '../../../models/IYouTubeItem';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export class SearchResultsBlockComponent  implements OnInit {
  
  public response:IYouTubeItem[] = this.dataService.response;

  public _filterValue = this.filterValue;

  public _sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = this.sortType;

  constructor(public dataService: DataService) { 
  }

  ngOnInit(): void {
    // throw new Error('ngOnInit - Method not implemented.');
  }

  public get filterValue() {
    return this.dataService.filterValue;
  }

  public get sortType() {
    return this.dataService.sortType;
  }

}
