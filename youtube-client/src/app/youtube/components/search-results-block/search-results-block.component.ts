import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';
import { IYouTubeResponse } from 'src/app/models/you-tube-response';
import { IYouTubeItem } from '../../../models/IYouTubeItem';
import { IRapidApiResponceWithStatistics } from '../../../models/IRapidApiResponceWithStatistics';

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

      searchPhrase => {
        console.log('res->', searchPhrase);
        let re = this.http.get(
          `https://youtube-v31.p.rapidapi.com/search?&type=video&part=snippet&maxResults=5&q=${searchPhrase}`);

        re.subscribe(
          r => {
            let ids: string[] = (r as IYouTubeResponse).items.map(el => el.id.videoId); // videoId's array

            let re2 = this.http.get(
              `https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${ids.join(',')}`);

            re2.subscribe(
              re22 => {
                let resp = (r as IYouTubeResponse).items.map(rel => {
                  const match = (re22 as IRapidApiResponceWithStatistics).items.find(element => element.id === rel.id.videoId);
                  if (match) {
                    return { ...match, ...rel };
                  } else { return; }
                });

                this.dataService.response = (resp as IYouTubeItem[]);
                this.response = (resp as IYouTubeItem[]);
              },

            );
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
