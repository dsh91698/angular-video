import { Component, Output } from '@angular/core';
import { IYouTubeItem } from './models/IYouTubeItem';
import { mockResponse } from './response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  // response = mockResponse.items;
  response = [] as IYouTubeItem[];

  receiveSearchEventFromHeader($event: IYouTubeItem[]) {
    this.response = $event;
  }

  constructor() {}
}
