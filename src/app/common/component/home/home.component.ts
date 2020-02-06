import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../service/share-data.service';
import { ChangeName } from '../../model/change-name.enum';

@Component({
  selector: 'panchanga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  defaultTitle = 'Pocket Panchanga';
  constructor(private _shareDataService: ShareDataService) {
  }

  ngOnInit() {
    this._shareDataService.emitChange(ChangeName.OnTitleChange, this.defaultTitle);
    this._shareDataService.emitChange(ChangeName.OnSubTitleChange, '');
  }

}
