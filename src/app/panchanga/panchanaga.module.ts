import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanchangaCommonModule } from '../common/panchanga-common.module';
import { DayComponent } from './day/day.component';
import { SimpleAnimationModule } from 'angular-simple-animation';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    DayComponent,
    HomeComponent
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
