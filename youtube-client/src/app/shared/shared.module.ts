import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],
  exports: [
    CommonModule,
    TimeStyleDirective,
    FilterPipe,
    SortPipePipe,
  ],
})
export class SharedModule { }
