import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanchangaCommonModule } from '../common/panchanga-common.module';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    DayComponent
  ],
  imports: [
    CommonModule,
    PanchangaCommonModule
  ],
  exports: [
    DayComponent
  ]
})
export class PanchanagaModule { }
