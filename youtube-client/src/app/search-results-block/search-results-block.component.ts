import { Component, Input, OnInit } from '@angular/core';
import { mockResponse } from '../response';
// import { response } from '../app.component';
import { IYouTubeItem } from '../models/IYouTubeItem';
import { IYouTubeResponse } from '../models/you-tube-response';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})
export class SearchResultsBlockComponent implements OnInit {
  
  @Input()
  response: IYouTubeItem[] = [];
  // response = mockResponse.items;
  //  fr = {};

  constructor() { }

  ngOnInit(): void {
  }

}
