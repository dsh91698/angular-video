import { Component, Input, OnInit } from '@angular/core';
import { IYouTubeItem } from '../models/IYouTubeItem';
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

  constructor() { }

  ngOnInit(): void {
  }

  showOrHideSearchBySection(event?:any) {
    console.log('event->',event,this.isShown_sorting_by__wrapper);
    this.isShown_sorting_by__wrapper = !this.isShown_sorting_by__wrapper;
  }

  search(){
    console.log('search pushed');
    // response = fr;
  }

}
