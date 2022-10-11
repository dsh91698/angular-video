import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IYouTubeItem } from '../models/IYouTubeItem';
import { mockResponse } from '../response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  public isSortingSectionShown:boolean = false;

  public response: IYouTubeItem[] = mockResponse.items;

  private isSortedByDate: boolean = true;

  private isSortedByViews: boolean = false;

  @Output() searchEvent = new EventEmitter<IYouTubeItem[]>();

  @Output() sortEvent = new EventEmitter<IYouTubeItem[]>();

  constructor() { }

  public toggleSearchSection() {
    this.isSortingSectionShown = !this.isSortingSectionShown;
  }

  public search() {
    this.searchEvent.emit(this.response);
  }

  public onSortingClick(sortType:string) {
    if (sortType === 'views' && this.isSortedByViews) {
      this.response.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)); // desc sort
      this.isSortedByViews = false;
      this.sortEvent.emit(this.response);
      return;
    }

    if (sortType === 'date' && this.isSortedByDate) {
      this.response.sort((a, b) => (new Date(a.snippet.publishedAt).getTime()) - (new Date(b.snippet.publishedAt).getTime())); // desc sort
      this.isSortedByDate = false;
      this.sortEvent.emit(this.response);
      return;
    }
    if (sortType === 'date' && !this.isSortedByDate) {
      this.response.sort((a, b) => (new Date(b.snippet.publishedAt).getTime()) - (new Date(a.snippet.publishedAt).getTime())); // desc sort
      this.isSortedByDate = true;
      this.sortEvent.emit(this.response);
      return;
    }
  
    if (sortType === 'views' && !this.isSortedByViews) {
      this.response.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));//asc sort
      this.isSortedByViews = true;
      this.sortEvent.emit(this.response);
      return;
    }

  }

  public onInput(event: Event) {
    let textInput = (event.target as HTMLInputElement).value;
    console.log('textinput->', textInput);
    const rez = this.response.filter(a => a.snippet.description.includes(textInput) || a.snippet.tags.includes(textInput));
    this.sortEvent.emit(rez);
    return;
  }

}
