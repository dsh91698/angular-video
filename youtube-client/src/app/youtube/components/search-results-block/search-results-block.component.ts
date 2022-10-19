import { Component, Input } from '@angular/core';
import { IYouTubeItem } from '../../../models/IYouTubeItem';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export class SearchResultsBlockComponent  {
  
  @Input() 
  public response:IYouTubeItem[] = [];

  @Input() 
  public filterValue = '';

  @Input()
  public sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = 'dateAsc';

  constructor() { }

}
