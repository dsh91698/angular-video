import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { Page404Component } from './components/page404/page404.component';


@NgModule({
  declarations: [
    Page404Component,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    Page404Component,
  ],
})
export class CoreModule { }
