import { Injectable } from '@angular/core';
import { Panchanga2020 } from '../data/panchanga2020';
import { Day } from '../model/day';

@Injectable({
  providedIn: 'root'
})
export class PanchangaDataService {

  constructor() { }

  getTodaysPanchanga() : Day {
    return Panchanga2020.Dates[0];
  }

  getDays(count: number): Array<Day> {
    let datesToReturn: Array<Day> = new Array(count);
    for(var i=0; i< count; i++)
      datesToReturn[i] = Panchanga2020.Dates[i];

    return datesToReturn;
  }
}
