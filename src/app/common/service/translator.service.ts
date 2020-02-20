import { Injectable } from '@angular/core';
import { Translations } from '../data/translations';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor() { }

  Translate(type: string, language: string, id: string): string {
    let translation = Translations.Data.find(x=> x.Type == type && x.Language == language && x.Id == id);
    if (translation !== null)
      return translation.Value;
    else
      return "";
  }
}
