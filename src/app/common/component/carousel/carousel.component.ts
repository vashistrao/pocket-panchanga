import { Component, TemplateRef, ContentChildren, QueryList, ViewChild, ContentChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'panchanga-carousel-header',
  template: '<ng-template #header><ng-content></ng-content></ng-template>'
})
export class CarouselHeaderComponent {
  @ViewChild('header', null) public template: TemplateRef<any>;
  constructor() { }
}

@Component({
  selector: 'panchanga-carousel-item',
  template: '<ng-template #item><ng-content></ng-content></ng-template>'
})
export class CarouselItemComponent {
  @ViewChild('item', null) public template: TemplateRef<any>;
  @Input() selectionValue: any;

  constructor() { }
}

@Component({
  selector: 'panchanga-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @ContentChildren(CarouselItemComponent) listItems !: QueryList<CarouselItemComponent>;
  @ContentChild(CarouselHeaderComponent, null) header !: CarouselHeaderComponent;
  @Output() selected = new EventEmitter<any>();
  public currentSelection: any = null;

  constructor() { }

  OnSelection(value: any): void {
    this.currentSelection = value;
    this.selected.emit(value);
  }
}