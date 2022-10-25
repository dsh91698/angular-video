import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  public isSortingSectionShown = false;

  private isSortedByDate = true;

  private isSortedByViews = false;

  constructor(
    private router: Router, 
    public authService: AuthService,
    public dataService: DataService) { }

  public toggleSearchSection() {
    this.isSortingSectionShown = !this.isSortingSectionShown;
  }

  public search() {
    this.router.navigateByUrl('/');
    this.dataService.setResponse();
  }

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
    this.dataService.filterValue = textInput;
    return;
  }

}
