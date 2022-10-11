import { Component, Input } from '@angular/core';
import { IYouTubeItem } from 'src/app/models/IYouTubeItem';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent  {

  @Input() public vcard!: IYouTubeItem;

  constructor() { }

}
