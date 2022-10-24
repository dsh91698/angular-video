import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultsBlockComponent } from './components/search-results-block/search-results-block.component';
import { SearchResultItemComponent } from './components/search-results-block/search-result-item/search-result-item.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';


@NgModule({
  declarations: [
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    VideoDetailsComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
  ],
  exports: [
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    VideoDetailsComponent,
  ],
})
export class YoutubeModule { }
