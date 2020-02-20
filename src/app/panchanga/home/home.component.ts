import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../common/service/share-data.service';
import { ChangeName } from '../../common/model/change-name.enum';
import { Day } from '../model/day';
import { TranslatorService } from 'src/app/common/service/translator.service';
import { PanchangaDataService } from '../service/panchanga-data.service';

@Component({
  selector: 'panchanga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  defaultTitle = 'Pocket Panchanga';
  days: Array<Day>;
  today: Day;
  constructor(private _shareDataService: ShareDataService, private _translator: TranslatorService,
     private _panchanga: PanchangaDataService) {
  }

  ngOnInit() {
    this._shareDataService.emitChange(ChangeName.OnTitleChange, this.defaultTitle);
    this._shareDataService.emitChange(ChangeName.OnSubTitleChange, '');
    this.days = this._panchanga.getDays(5);
    this.today = this.days.shift();
  }

}
