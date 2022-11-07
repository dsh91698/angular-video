import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeStyleDirective } from './directives/time-style.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipePipe } from './pipes/sort-pipe.pipe';
import { StatisticsComponent } from './components/statistics/statistics.component';


@NgModule({
  declarations: [
    TimeStyleDirective,
    FilterPipe,
    SortPipePipe,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    TimeStyleDirective,
    FilterPipe,
    SortPipePipe,
    StatisticsComponent,
  ],
})
export class SharedModule { }
