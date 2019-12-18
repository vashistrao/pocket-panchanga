import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueHeaderComponent } from './value-header.component';

describe('ValueHeaderComponent', () => {
  let component: ValueHeaderComponent;
  let fixture: ComponentFixture<ValueHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
