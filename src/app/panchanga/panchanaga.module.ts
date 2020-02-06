import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanchangaCommonModule } from '../common/panchanga-common.module';
import { DayComponent } from './day/day.component';
import { SimpleAnimationModule } from 'angular-simple-animation';

@NgModule({
  declarations: [
    DayComponent
  ],
  imports: [
    CommonModule,
    PanchangaCommonModule,
    SimpleAnimationModule
  ],
  exports: [
    DayComponent
  ]
})
export class PanchanagaModule { }
