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
import  {  MatToolbarModule } from '@angular/material/toolbar';
import { SortPipePipe } from './pipes/sort-pipe.pipe';
import { TimeStyleDirective } from './directives/time-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginInformationBlockComponent,
    FilteringCriteriaBlockComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    SortPipePipe,
    TimeStyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
 