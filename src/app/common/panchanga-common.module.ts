import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueHeaderComponent } from './component/value-header/value-header.component';
import { TranslatorPipe } from './pipe/translator.pipe';
import { TextTranslatorPipe } from './pipe/text-translator.pipe';

@NgModule({
  declarations: [
    ValueHeaderComponent,
    TranslatorPipe,
    TextTranslatorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValueHeaderComponent,
    TranslatorPipe,
    TextTranslatorPipe
  ]
})
export class PanchangaCommonModule { }
