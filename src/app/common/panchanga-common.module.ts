import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueHeaderComponent } from './component/value-header/value-header.component';
import { TranslatorPipe } from './pipe/translator.pipe';

@NgModule({
  declarations: [
    ValueHeaderComponent,
    TranslatorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValueHeaderComponent,
    TranslatorPipe
  ]
})
export class PanchangaCommonModule { }
