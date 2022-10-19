import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IYouTubeItem } from '../models/IYouTubeItem';
import { mockResponse } from '../response';
import { Router } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  public isSortingSectionShown = false;

  public response: IYouTubeItem[] = mockResponse.items;

  private isSortedByDate = true;

  private isSortedByViews = false;

  @Output() searchEvent = new EventEmitter<IYouTubeItem[]>();

  @Output() sortEvent = new EventEmitter<IYouTubeItem[]>();

  @Output() filterEvent = new EventEmitter<string>();

  @Output() filterDateViewsEvent = new EventEmitter<'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes'>();

  constructor(private router: Router, public authService: AuthService) { }

  public toggleSearchSection() {
    this.isSortingSectionShown = !this.isSortingSectionShown;
  }

  public search() {
    this.router.navigateByUrl('/');
    this.searchEvent.emit(this.response);
  }

  public onSortingClick(sortType:string) {
    if (sortType === 'views' && this.isSortedByViews) {
      this.isSortedByViews = false;
      this.filterDateViewsEvent.emit('viewsDes');
      return;
    }

    if (sortType === 'date' && this.isSortedByDate) {
      this.isSortedByDate = false;
      this.filterDateViewsEvent.emit('dateDes');
      return;
    }
    if (sortType === 'date' && !this.isSortedByDate) {
      this.isSortedByDate = true;
      this.filterDateViewsEvent.emit('dateAsc');
      return;
    }
  
    if (sortType === 'views' && !this.isSortedByViews) {
      this.isSortedByViews = true;
      this.filterDateViewsEvent.emit('viewsAsc');
      return;
    }
  }

  public onInput(event: Event) {
    let textInput = (event.target as HTMLInputElement).value;
    this.filterEvent.emit(textInput);
    return;
  }

}
