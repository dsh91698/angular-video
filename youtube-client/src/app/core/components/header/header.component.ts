import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IYouTubeItem } from '../../../models/IYouTubeItem';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataService } from '../../services/data.service';
// import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
//----------------keep-1----------------------------------
  public isSortingSectionShown = false;// keep
  //---------------------1----------------------------------

  // public response: IYouTubeItem[] = mockResponse.items;

  private isSortedByDate = true;

  private isSortedByViews = false;

  // @Output() searchEvent = new EventEmitter<IYouTubeItem[]>(); //keep



  // @Output() filterEvent = new EventEmitter<string>();

  // @Output() filterDateViewsEvent = new EventEmitter<'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes'>();

  constructor(
    private router: Router, 
    public authService: AuthService,
    public dataService: DataService) { }

  //--------------keep-1-----------------------------------------------------------
  public toggleSearchSection() {
    this.isSortingSectionShown = !this.isSortingSectionShown;
  }

  public search() {
    this.router.navigateByUrl('/');
    this.dataService.setResponse();
    // this.searchEvent.emit(this.dataService.response);
  }
  // --------------------1----------------------------------------------------------

  public onSortingClick(sortType:string) {
    if (sortType === 'views' && this.isSortedByViews) {
      this.isSortedByViews = false;
      this.dataService.sortType = 'viewsDes';
      return;
    }

    if (sortType === 'date' && this.isSortedByDate) {
      this.isSortedByDate = false;
      this.dataService.sortType = 'dateDes';
      return;
    }
    if (sortType === 'date' && !this.isSortedByDate) {
      this.isSortedByDate = true;
      this.dataService.sortType = 'dateAsc';
      return;
    }
  
    if (sortType === 'views' && !this.isSortedByViews) {
      this.isSortedByViews = true;
      this.dataService.sortType = 'viewsAsc';
      return;
    }
  }

  public onInput(event: Event) {
    let textInput = (event.target as HTMLInputElement).value;
    this.dataService.setFilterValue(textInput);
    return;
  }

}
