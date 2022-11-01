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
        // let re = this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBTeKuESi66BKPmR2XC8f6asXINeVSgeYU&type=video&part=snippet&maxResults=5&q=${val}`);        
        let re = this.http.get(
          `https://youtube-v31.p.rapidapi.com/search?&type=video&part=snippet&maxResults=5&q=${searchPhrase}`, {
            headers: { 'X-RapidAPI-Key': '0519fa2feamsh1b49deb43e0d50ep186198jsnc1907a46938d' },
          });        
        
        re.subscribe(
          r => {
            console.log('response youtube->', r);

            let ids: string[] = (r as IYouTubeResponse).items.map(el => el.id.videoId); // videoId's array 
            console.log('ids youtube->', ids);

            // let re2 = this.http.get(`https://youtube.googleapis.com/youtube/v3/videos?id=${ids.join('=')}&maxResults=5&key=AIzaSyBTeKuESi66BKPmR2XC8f6asXINeVSgeYU&&part=statistics`);
            let re2 = this.http.get(
              `https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${ids.join(',')}`, {
                headers: { 'X-RapidAPI-Key': '0519fa2feamsh1b49deb43e0d50ep186198jsnc1907a46938d' },
              });

            re2.subscribe(
              re22 => {
                console.log('re2->', re22);
              
                let resp = (r as IYouTubeResponse).items.map(rel => {
                  const match = (re22 as IRapidApiResponceWithStatistics).items.find(element => element.id === rel.id.videoId);
                  if (match) {
                    return { ...match, ...rel };
                  } else { return; }
                });

                console.log('resp->', resp);


                this.dataService.response = (resp as IYouTubeItem[]);
                this.response = (resp as IYouTubeItem[]);
    

              },
  
            );

            
            // this.dataService.response = (r as IYouTubeResponse).items;
            // this.response = (r as IYouTubeResponse).items;
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
