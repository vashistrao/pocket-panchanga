import { Component, OnInit } from '@angular/core';
import { Day } from '../../common/model/day';

@Component({
  selector: 'panchanga-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  public today: Day;
  public displayList: Array<[string, string]>

  constructor() {
  }

  ngOnInit() {
    this.today = new Day();
    this.today.date = new Date();
    this.today.samvathsara = 'Vikari';
    this.today.ayana = 'Dakshinayana';
    this.today.rutu = 'Himantha';
    this.today.maasa = 'Maargashira';
    this.today.paksha = 'Shukla';
    this.today.thithi = new Array(1);
    this.today.thithi[0] = 'Prathama';
    this.today.vaasara = 'Bhaanu';
    this.today.nakshathra = 'Hastha';
    this.today.yoga = 'Suka';
    this.today.karana = 'Bava';
    this.today.isAdikaMaasa = true;
    this.today.isKshayaMaasa = false;
    this.today.shraddhaThithi = new Array(2);
    this.today.shraddhaThithi[0] = 'Prathama';
    this.today.shraddhaThithi[1] = 'Dwithiya';

    this.displayList = Object.entries(this.today);

    if (this.today.isKshayaMaasa)
      (this.displayList.find(x => x[0]=="maasa"))[1] = "Kshaya " + (this.displayList.find(x => x[0]=="maasa"))[1];

    if (this.today.isAdikaMaasa)
      (this.displayList.find(x => x[0]=="maasa"))[1] = "Adika " + (this.displayList.find(x => x[0]=="maasa"))[1];
    
    this.displayList.splice(this.displayList.findIndex(x=> x[0] == "date"), 1)
    this.displayList.splice(this.displayList.findIndex(x=> x[0] == "isAdikaMaasa"), 1)
    this.displayList.splice(this.displayList.findIndex(x=> x[0] == "isKshayaMaasa"), 1)
  }
}
