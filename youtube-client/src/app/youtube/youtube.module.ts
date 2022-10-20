import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultsBlockComponent } from './components/search-results-block/search-results-block.component';
import { SearchResultItemComponent } from './components/search-results-block/search-result-item/search-result-item.component';


@NgModule({
  declarations: [
    SearchResultsBlockComponent,
    SearchResultItemComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
  ],
  exports: [
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    SharedModule,
  ],
})
export class YoutubeModule { }
