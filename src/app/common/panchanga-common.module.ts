import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueHeaderComponent } from './component/value-header/value-header.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    ValueHeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValueHeaderComponent
  ]
})
export class PanchangaCommonModule { }
