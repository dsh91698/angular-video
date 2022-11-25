import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';
import { IYouTubeItem } from '../../../models/IYouTubeItem';
import { IVideoId, IVideoIdString } from 'src/app/models/IVideoId';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export class SearchResultsBlockComponent implements OnInit {
  public response: IYouTubeItem[] = this.dataService.response;

  public _filterValue = this.filterValue;

  public _sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' =
    this.sortType;

  constructor(
    public dataService: DataService,
    private http: HttpClient) {}

  ngOnInit(): void {
    this.dataService.searchInput.valueChanges
      .pipe(debounceTime(1500))
      .pipe(
        switchMap(searchPhrase => this.dataService.getBySearchPhrase(searchPhrase)),
        switchMap(youTubeResponse => this.dataService.getByIdsArray(youTubeResponse.items.map((video: IVideoId) => video.id.videoId))
          .pipe(map( youTubeResponseWithStat => [youTubeResponse, youTubeResponseWithStat]))))

      .subscribe((youTubeResponse: any) => {
        let youTubeItemsArray = youTubeResponse[0].items.map(
          (videoItem: IVideoId) => {
            const match = youTubeResponse[1].items.find((element: IVideoIdString) => element.id === videoItem.id.videoId);
            if (match) {
              return { ...match, ...videoItem };
            } else {
              return;
            }
          },
        );

        this.dataService.response = youTubeItemsArray as IYouTubeItem[];
        this.response = youTubeItemsArray as IYouTubeItem[];

      });
  }








  //methods
  public get filterValue() {
    return this.dataService.filterValue;
  }

  public get sortType() {
    return this.dataService.sortType;
  }
}

