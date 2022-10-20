import { Component, Output } from '@angular/core';
import { DataService } from './core/services/data.service';
import { IYouTubeItem } from './models/IYouTubeItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  

  constructor(public dataService: DataService) {
    //
  }


  
} 
