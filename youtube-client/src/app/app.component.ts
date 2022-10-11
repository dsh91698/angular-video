import { Component, Output } from '@angular/core';
import { IYouTubeItem } from './models/IYouTubeItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  public response:IYouTubeItem[] = [];

  public getSearchEventFromHeader($event: IYouTubeItem[]) {
    this.response = $event;
  }

  constructor() {}
}
