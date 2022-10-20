import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { IYouTubeItem } from '../../../models/IYouTubeItem';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export class SearchResultsBlockComponent  implements OnInit {
  
  // @Input() 
  public response:IYouTubeItem[] = this.dataService.response;

  // // @Input() 
  public filterValue = this.dataService.filterValue;

  // // @Input()
  public sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = this.dataService.sortType;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.response = this.dataService.response;

    // @Input() 
    this.filterValue = this.dataService.getFilterValue();
  
    // @Input()
    this.sortType = this.dataService.sortType;
  
  
  }



}
