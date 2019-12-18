import { Component, Input } from '@angular/core';

@Component({
  selector: 'panchanga-value-header',
  styleUrls: ['./value-header.component.css'],
  templateUrl: './value-header.component.html'
})
export class ValueHeaderComponent {

  @Input() public data: Array<[string, string]>;
  private _columns: number;
  public helperArray: Array<number>;
  public cellClass: string;

  get columns(): number {
    return this._columns;
  }

  @Input() set columns(value: number) {
    this._columns = value;

    switch(this._columns)
    {
      case 1:
        this.cellClass = "col-sm-12"
        break;
      case 2:
        this.cellClass = "col-sm-6"
        break;
      case 3:
        this.cellClass = "col-sm-4"
        break;
      case 4:
        this.cellClass = "col-sm-3"
        break;
      case 5:
      case 6:
        this.cellClass = "col-sm-2"
        break;
      default:
        this.cellClass = "col-sm-1"
        break;
    }
    
    this.helperArray = Array(this._columns).fill(0);
  }

  constructor() { }
}
