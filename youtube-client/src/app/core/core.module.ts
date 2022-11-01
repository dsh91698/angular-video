import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './components/page404/page404.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Page404Component,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    Page404Component,
    HeaderComponent,
    HttpClientModule,
  ],
})
export class CoreModule { }
