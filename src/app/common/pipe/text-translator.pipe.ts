import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from '../service/translator.service';

@Pipe({
  name: 'textTranslator'
})
export class TextTranslatorPipe implements PipeTransform {

  constructor(private _translator: TranslatorService) {

  }

  transform(id: string, language: string): string {
    return this._translator.Translate('Text', language, id);
  }

}
