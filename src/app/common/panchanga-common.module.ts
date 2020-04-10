import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueHeaderComponent } from './component/value-header/value-header.component';
import { TranslatorPipe } from './pipe/translator.pipe';
import { CarouselComponent, CarouselItemComponent, CarouselHeaderComponent } from './component/carousel/carousel.component';

@NgModule({
  declarations: [
    ValueHeaderComponent,
    TranslatorPipe,
    CarouselComponent,
    CarouselItemComponent,
    CarouselHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValueHeaderComponent,
    TranslatorPipe,
    CarouselComponent,
    CarouselItemComponent,
    CarouselHeaderComponent
  ]
})
export class PanchangaCommonModule { }
