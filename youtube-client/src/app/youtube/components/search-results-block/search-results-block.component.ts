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
  public response: IYouTubeItem[] = this.dataService.response;

  public _filterValue = this.filterValue;

  public _sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' =
    this.sortType;

  constructor(public dataService: DataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.dataService.searchInput.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((searchPhrase) => {
        this.dataService
          .getBySearchPhrase(searchPhrase)
          .subscribe(youTubeResponse => {

            let ids: string[] = youTubeResponse.items.map(video => video.id.videoId); // videoId's array

            this.dataService
              .getByIdsArray(ids)
              .subscribe((youTubeResponseWithStatistics) => {
                let youTubeItemsArray = youTubeResponse.items.map(
                  videoItem => {
                    const match = youTubeResponseWithStatistics.items.find((element: { id: string; }) => element.id === videoItem.id.videoId);
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
          });
      });
  } //onInit

  //methods
  public get filterValue() {
    return this.dataService.filterValue;
  }

  public get sortType() {
    return this.dataService.sortType;
  }
}
