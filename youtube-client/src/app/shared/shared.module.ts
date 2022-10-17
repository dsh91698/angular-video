import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { TimeStyleDirective } from './directives/time-style.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipePipe } from './pipes/sort-pipe.pipe';


@NgModule({
  declarations: [
    TimeStyleDirective,
    FilterPipe,
    SortPipePipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    TimeStyleDirective,
    FilterPipe,
    SortPipePipe,
  ],
})
export class SharedModule { }
