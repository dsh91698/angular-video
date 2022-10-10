import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IYouTubeItem } from '../models/IYouTubeItem';
import { mockResponse } from '../response';

// import  {  MatToolbarModule } from '@angular/material/toolbar';
// import { response, fr } from '../search-results-block/search-results-block.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isShown_sorting_by__wrapper = false;


  // @Input() title1: string;
  // [title1]=title;

  // @Input() 
  // @Input() response: IYouTubeItem[];

  response = mockResponse.items;

  isSortedByDate = false;

  isSortedByViews = false;

  @Output() searchEvent = new EventEmitter<IYouTubeItem[]>();

  @Output() sortEvent = new EventEmitter<IYouTubeItem[]>();

  constructor() { }

  ngOnInit(): void {
  }

  showOrHideSearchBySection(event?:any) {
    // console.log('event->', event, this.isShown_sorting_by__wrapper);
    this.isShown_sorting_by__wrapper = !this.isShown_sorting_by__wrapper;
  }

  search() {
    // console.log('search pushed');
    this.searchEvent.emit(this.response);
    // response = fr;
  }

  sortEventFun(sortType:string) {
    if (sortType == 'views' && this.isSortedByViews) {
      this.response.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)); // desc sort
      this.isSortedByViews = false;
      this.sortEvent.emit(this.response);
      return;
    }
  
    if (sortType == 'views' && !this.isSortedByViews) {
      this.response.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));//asc sort
      this.isSortedByViews = true;
      this.sortEvent.emit(this.response);
      return;
    }
    if (sortType == 'date') {
      console.log('date sorting ->');
    }
  }

}
