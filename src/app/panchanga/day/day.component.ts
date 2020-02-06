import { Component, OnInit } from '@angular/core';
import { Day } from '../../common/model/day';
import { ShareDataService } from '../../common/service/share-data.service';
import { ChangeName } from '../../common/model/change-name.enum';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'panchanga-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  providers: [DatePipe]
})
export class DayComponent implements OnInit {

  public thisDay: Day;
  public displayList: Array<[string, string]>;

  constructor(private _shareDataService: ShareDataService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.thisDay = new Day();
    this.thisDay.date = new Date();
    this.thisDay.samvathsara = 'Vikari';
    this.thisDay.ayana = 'Dakshinayana';
    this.thisDay.rutu = 'Himantha';
    this.thisDay.maasa = 'Maargashira';
    this.thisDay.paksha = 'Shukla';
    this.thisDay.thithi = new Array(1);
    this.thisDay.thithi[0] = 'Prathama';
    this.thisDay.vaasara = 'Bhaanu';
    this.thisDay.nakshathra = 'Hastha';
    this.thisDay.yoga = 'Suka';
    this.thisDay.karana = 'Bava';
    this.thisDay.isAdikaMaasa = true;
    this.thisDay.isKshayaMaasa = false;
    this.thisDay.shraddhaThithi = new Array(2);
    this.thisDay.shraddhaThithi[0] = 'Prathama';
    this.thisDay.shraddhaThithi[1] = 'Dwithiya';

    this.displayList = Object.entries(this.thisDay);

    if (this.thisDay.isKshayaMaasa)
      (this.displayList.find(x => x[0]=='maasa'))[1] = 'Kshaya ' + (this.displayList.find(x => x[0]=='maasa'))[1];

    if (this.thisDay.isAdikaMaasa)
      (this.displayList.find(x => x[0]=='maasa'))[1] = 'Adika ' + (this.displayList.find(x => x[0]=='maasa'))[1];
    
    this.displayList.splice(this.displayList.findIndex(x=> x[0] == 'date'), 1);
    this.displayList.splice(this.displayList.findIndex(x=> x[0] == 'isAdikaMaasa'), 1);
    this.displayList.splice(this.displayList.findIndex(x=> x[0] == 'isKshayaMaasa'), 1);
    
    this._shareDataService.emitChange(ChangeName.OnTitleChange, this.datePipe.transform(this.thisDay.date, 'MMMM dd, yyyy'));    
    this._shareDataService.emitChange(ChangeName.OnSubTitleChange, this.datePipe.transform(this.thisDay.date, 'EEEE'));
  }
}
