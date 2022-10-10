import { Component, OnInit } from '@angular/core';
// import  {  MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isShown_sorting_by__wrapper = false

  constructor() { }

  ngOnInit(): void {
  }

  showOrHideSearchBySection(event?:any) {
    console.log('event->',event,this.isShown_sorting_by__wrapper);
    this.isShown_sorting_by__wrapper = !this.isShown_sorting_by__wrapper;
  }

}
