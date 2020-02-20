import { Component, OnInit } from '@angular/core';
import { Day } from '../model/day';
import { ShareDataService } from '../../common/service/share-data.service';
import { ChangeName } from '../../common/model/change-name.enum';
import { DatePipe } from '@angular/common';
import { PanchangaDataService } from '../service/panchanga-data.service'
import { TranslatorService } from '../../common/service/translator.service';


@Component({
  selector: 'panchanga-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  providers: [DatePipe]
})
export class DayComponent implements OnInit {

  public thisDay: Day;
  public displayList: Array<[string, string]>;

  constructor(private _shareDataService: ShareDataService, private datePipe: DatePipe,
    private _panchangaData: PanchangaDataService, private _translator: TranslatorService) {
  }

  ngOnInit() {
    this.thisDay = this._panchangaData.getTodaysPanchanga();

    this.displayList = new Array(11);

    this.displayList[0] = [this._translator.Translate('Text','eng','Samvathsara'),
     this._translator.Translate('Samvathsara', 'eng', this.thisDay.samvathsara.toString())];
    this.displayList[1] = [this._translator.Translate('Text','eng','Ayana'),
     this._translator.Translate('Ayana', 'eng', this.thisDay.ayana.toString())];
    this.displayList[2] = [this._translator.Translate('Text','eng','Rutu'),
     this._translator.Translate('Rutu', 'eng', this.thisDay.rutu.toString())];
    this.displayList[3] = [this._translator.Translate('Text','eng','Maasa'),
     this._translator.Translate('Maasa', 'eng', this.thisDay.maasa.toString())];
    this.displayList[4] = [this._translator.Translate('Text','eng','Paksha'),
     this._translator.Translate('Paksha', 'eng', this.thisDay.paksha.toString())];

    let thithis: string = '';
    this.thisDay.thithi.forEach(element => {
      thithis += this._translator.Translate('Thithi', 'eng', element.toString());
    });
    this.displayList[5] = [this._translator.Translate('Text','eng','Thithi'), thithis];

    this.displayList[6] = [this._translator.Translate('Text','eng','Vaasara'),
     this._translator.Translate('Vaasara', 'eng', this.thisDay.vaasara.toString())];
    this.displayList[7] = [this._translator.Translate('Text','eng','Nakshathra'),
     this._translator.Translate('Nakshathra', 'eng', this.thisDay.nakshathra.toString())];
    this.displayList[8] = [this._translator.Translate('Text','eng','Yoga'),
     this._translator.Translate('Yoga', 'eng', this.thisDay.yoga.toString())];
    this.displayList[9] = [this._translator.Translate('Text','eng','Karana'),
     this._translator.Translate('Karana', 'eng', this.thisDay.karana.toString())];

    thithis = '';
    this.thisDay.shraddhaThithi.forEach(element => {
      thithis += this._translator.Translate('Thithi', 'eng', element.toString());
    });
    this.displayList[10] = [this._translator.Translate('Text','eng','ShraddhaThithi'), thithis];

    if (this.thisDay.isKshayaMaasa)
      (this.displayList.find(x => x[0]=='maasa'))[1] = 'Kshaya ' + (this.displayList.find(x => x[0]=='maasa'))[1];

    if (this.thisDay.isAdikaMaasa)
      (this.displayList.find(x => x[0]=='maasa'))[1] = 'Adika ' + (this.displayList.find(x => x[0]=='maasa'))[1];
    
    this._shareDataService.emitChange(ChangeName.OnTitleChange, this.datePipe.transform(this.thisDay.date, 'MMMM dd, yyyy'));    
    this._shareDataService.emitChange(ChangeName.OnSubTitleChange, this.datePipe.transform(this.thisDay.date, 'EEEE'));
  }
}
