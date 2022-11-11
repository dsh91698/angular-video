import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IYouTubeItem } from 'src/app/models/IYouTubeItem';
import { mockResponse } from '../../response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IYouTubeResponse } from 'src/app/models/you-tube-response';



@Injectable({
  providedIn: 'root',
})
export class DataService {
  //vars
  public searchInput = new FormControl();

  public response: IYouTubeItem[] = mockResponse.items;

  public filterValue = '';

  public sortType: 'dateAsc' | 'viewsAsc' | 'dateDes' | 'viewsDes' = 'dateAsc';

  constructor(
    private http: HttpClient,
  ) {}


  public setResponse(): void {
    this.response = mockResponse.items;
  }

  getBySearchPhrase(searchPhrase: string): Observable<IYouTubeResponse> {
    return (this.http.get(
      `https://youtube-v31.p.rapidapi.com/search?&type=video&part=snippet&maxResults=5&q=${searchPhrase}`) as Observable<IYouTubeResponse>);
  }

  getByIdsArray(ids: string[]): Observable<any> {
    return this.http.get(
      `https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${ids.join(',')}`) as Observable<IYouTubeResponse>;
  }

}
