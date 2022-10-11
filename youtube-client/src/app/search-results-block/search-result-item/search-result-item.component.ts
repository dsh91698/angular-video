import { Component, Input } from '@angular/core';
import { IYouTubeItem } from 'src/app/models/IYouTubeItem';
import { IVideoStatistics } from 'src/app/models/IVideoStatistics';
import { IVideoSnippet } from 'src/app/models/IVideoSnippet';


@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent  {

  // @Input() public response: IYouTubeItem[] = [];

  @Input() public vcard!: IYouTubeItem;

  constructor() { }

}
