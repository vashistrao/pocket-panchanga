import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../model/day';
import { Router} from '@angular/router';

@Component({
  selector: 'panchanga-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrls: ['./day-summary.component.css']
})
export class DaySummaryComponent implements OnInit {

  @Input() public day: Day;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  bannerClicked(selectedDate: Date): void
  {
    this._router.navigate(['/day', selectedDate.toLocaleDateString()]);
  }

}
