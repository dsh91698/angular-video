import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
// ------ new modules - 03 -------------------------------------------------------------------
import { CoreModule } from './core/core.module';
// import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
// import { YoutubeModule } from './youtube/youtube.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    
    CoreModule,
    SharedModule,
    // YoutubeModule,
    // AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppModule { }
 