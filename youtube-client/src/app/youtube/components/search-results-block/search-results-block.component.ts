import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';
import { IYouTubeResponse } from 'src/app/models/you-tube-response';
import { IYouTubeItem } from '../../../models/IYouTubeItem';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export class SearchResultsBlockComponent implements OnInit {
  
  public response:IYouTubeItem[] = this.dataService.response;

  public _filterValue = this.filterValue;

  public _sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = this.sortType;

  constructor(
    public dataService: DataService,
    private http: HttpClient,
  ) { 
  }

  ngOnInit(): void {
    this.dataService.searchInput.valueChanges.pipe(
      debounceTime(1500),
    ).subscribe(

      val => {
        console.log('res->', val);
        let re = this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBTeKuESi66BKPmR2XC8f6asXINeVSgeYU&type=video&part=snippet&maxResults=5&q=${val}`);
        re.subscribe(
          r => {
            console.log('response youtube->', r);
            this.dataService.response = (r as IYouTubeResponse).items;
            this.response = (r as IYouTubeResponse).items;
          },
          
        );
          
      },
      
    );
  }



  //methods
  public get filterValue() {
    return this.dataService.filterValue;
  }

  public get sortType() {
    return this.dataService.sortType;
  }

}
