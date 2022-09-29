import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './header/search/search.component';
import { LoginComponent } from './header/login/login.component';
import { SortingComponent } from './header/sorting/sorting.component';
import { CardVideoComponent } from './main/card-video/card-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SearchComponent,
    LoginComponent,
    SortingComponent,
    CardVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
