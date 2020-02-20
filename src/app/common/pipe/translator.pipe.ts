import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from '../service/translator.service';

@Pipe({
  name: 'translator'
})
export class TranslatorPipe implements PipeTransform {

  constructor(private _translator: TranslatorService) {

  }

  transform(id: string, type: string, language: string): string {
    return this._translator.Translate(type, language, id);
  }

}
