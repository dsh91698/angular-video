import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginInformationBlockComponent } from './header/login-information-block/login-information-block.component';
import { FilteringCriteriaBlockComponent } from './filtering-criteria-block/filtering-criteria-block.component';
import { SearchResultsBlockComponent } from './search-results-block/search-results-block.component';
import { SearchResultItemComponent } from './search-results-block/search-result-item/search-result-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { SortPipePipe } from './pipes/sort-pipe.pipe';
// import { TimeStyleDirective } from './directives/time-style.directive';
// import { FilterPipe } from './pipes/filter.pipe';
// ------ new modules - 03 -------------------------------------------------------------------
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginInformationBlockComponent,
    FilteringCriteriaBlockComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    // SortPipePipe,
    // TimeStyleDirective,
    // FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    
    CoreModule,
    SharedModule,
    YoutubeModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
 