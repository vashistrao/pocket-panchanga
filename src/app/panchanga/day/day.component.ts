import { Component, OnInit } from '@angular/core';
import { Day } from '../model/day';
import { ShareDataService } from '../../common/service/share-data.service';
import { ChangeName } from '../../common/model/change-name.enum';
import { DatePipe } from '@angular/common';
import { PanchangaDataService } from '../service/panchanga-data.service'
import { TranslatorService } from '../../common/service/translator.service';
import { switchMap, map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  providers: [DatePipe]
})
export class DayComponent implements OnInit {

  public thisDay: Day;
  public displayList: Array<[string, string]>;

  constructor(private _shareDataService: ShareDataService, private datePipe: DatePipe,
    private _panchangaData: PanchangaDataService, private _translator: TranslatorService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    let queryDate: Date = null;

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.getAll('date'))
    ).subscribe(
      x => { 
        if(x != undefined &&  x != null && x != '')
        {
          queryDate = new Date(x);
        } 
      }
    );

    if(queryDate == null)
      this.thisDay = this._panchangaData.getTodaysPanchanga();
    else
      this.thisDay = this._panchangaData.getPanchangaOfDay(queryDate);
    
    this.displayList = new Array(11);

    this.displayList[0] = [this._translator.Translate('Samvathsara'),
     this._translator.Translate(this.thisDay.samvathsara.toString(), 'Samvathsara')];
    this.displayList[1] = [this._translator.Translate('Ayana'),
     this._translator.Translate(this.thisDay.ayana.toString(), 'Ayana')];
    this.displayList[2] = [this._translator.Translate('Rutu'),
     this._translator.Translate(this.thisDay.rutu.toString(), 'Rutu')];
    this.displayList[3] = [this._translator.Translate('Maasa'),
     this._translator.Translate(this.thisDay.maasa.toString(), 'Maasa')];
    this.displayList[4] = [this._translator.Translate('Paksha'),
     this._translator.Translate(this.thisDay.paksha.toString(), 'Paksha')];

    let thithis: string = '';
    this.thisDay.thithi.forEach(element => {
      thithis += this._translator.Translate(element.toString(), 'Thithi');
    });
    this.displayList[5] = [this._translator.Translate('Thithi'), thithis];

    this.displayList[6] = [this._translator.Translate('Vaasara'),
     this._translator.Translate(this.thisDay.vaasara.toString(), 'Vaasara')];
    this.displayList[7] = [this._translator.Translate('Nakshathra'),
     this._translator.Translate(this.thisDay.nakshathra.toString(), 'Nakshathra')];
    this.displayList[8] = [this._translator.Translate('Yoga'),
     this._translator.Translate(this.thisDay.yoga.toString(), 'Yoga')];
    this.displayList[9] = [this._translator.Translate('Karana'),
     this._translator.Translate(this.thisDay.karana.toString(), 'Karana')];

    thithis = '';
    this.thisDay.shraddhaThithi.forEach(element => {
      thithis += this._translator.Translate(element.toString(), 'Thithi');
    });
    this.displayList[10] = [this._translator.Translate('ShraddhaThithi'), thithis];

    if (this.thisDay.isKshayaMaasa)
      (this.displayList.find(x => x[0]=='maasa'))[1] = 'Kshaya ' + (this.displayList.find(x => x[0]=='maasa'))[1];

    if (this.thisDay.isAdikaMaasa)
      (this.displayList.find(x => x[0]=='maasa'))[1] = 'Adika ' + (this.displayList.find(x => x[0]=='maasa'))[1];
    
    this._shareDataService.emitChange(ChangeName.OnTitleChange, this.datePipe.transform(this.thisDay.date, 'MMMM dd, yyyy'));    
    this._shareDataService.emitChange(ChangeName.OnSubTitleChange, this.datePipe.transform(this.thisDay.date, 'EEEE'));
  }
}
