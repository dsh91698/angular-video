import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchInputWithSubmitButtonComponent } from './header/search-input-with-submit-button/search-input-with-submit-button.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { LoginInformationBlockComponent } from './header/login-information-block/login-information-block.component';
import { FilteringCriteriaBlockComponent } from './filtering-criteria-block/filtering-criteria-block.component';
import { SearchResultsBlockComponent } from './search-results-block/search-results-block.component';
import { SearchResultItemComponent } from './search-results-block/search-result-item/search-result-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchInputWithSubmitButtonComponent,
    SettingsButtonComponent,
    LoginInformationBlockComponent,
    FilteringCriteriaBlockComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
 