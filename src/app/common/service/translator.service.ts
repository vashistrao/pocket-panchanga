import { Injectable } from '@angular/core';
import { Translations } from '../data/translations';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private _userService: UserService) { }

  Translate(id: string, type: string = null, language: string = null): string {

    if(type == null)
    {
      type = 'Text';
    }

    if(language == null)
    {
      language = this._userService.user.language;
    }

    let translation = Translations.Data.find(x=> x.Type == type && x.Language == language && x.Id == id);
    if (translation !== undefined)
      return translation.Value;
    else
      return id;
  }
}
