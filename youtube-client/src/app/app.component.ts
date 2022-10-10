import { Component } from '@angular/core';
// import { mockResponse } from './response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  response = 'response.ts';
  // console.log(response);
}
