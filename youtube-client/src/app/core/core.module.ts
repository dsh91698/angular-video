import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './components/page404/page404.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    Page404Component,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    Page404Component,
    HeaderComponent,
    HttpClientModule,
  ],
})
export class CoreModule { }
