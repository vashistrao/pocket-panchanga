import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { ChangeName } from '../model/change-name.enum';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private _changeSource: Array<[ChangeName, BehaviorSubject<any>]> = [];
  constructor() { }

  changeAsObservable(changeName: ChangeName, defaultValue: any): Observable<any> {

    if( (this._changeSource.find(x=>x[0] == changeName)) == undefined)
      this._changeSource.push([changeName, (new BehaviorSubject<any>(defaultValue))]);

    return this._changeSource.find(x=>x[0] == changeName)[1].asObservable();
  }

  emitChange(changeName: ChangeName, value: any) {
    if( (this._changeSource.find(x=>x[0] == changeName)) != undefined) {
      return this._changeSource.find(x=>x[0] == changeName)[1].next(value);
    }
  }
}
