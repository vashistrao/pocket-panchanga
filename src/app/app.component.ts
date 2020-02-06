import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareDataService } from './common/service/share-data.service';
import { ChangeName } from './common/model/change-name.enum';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'panchanga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  defaultTitle = 'Pocket Panchanga';
  title = this.defaultTitle;
  displayTitle = true;
  subTitle = '';
  displaySubTitle = false;

  titleObservalbe$: Observable<any>
  titleSubscription: Subscription;
  subTitleObservalbe$: Observable<any>
  subTitleSubscription: Subscription;

  constructor(private _shareDataService: ShareDataService) {
  }

  ngOnInit() {
    this.titleObservalbe$ = this._shareDataService.changeAsObservable(ChangeName.OnTitleChange, this.defaultTitle);
    this.titleSubscription = this.titleObservalbe$.subscribe(
      x => { this.setNewTitle(x); });

    this.subTitleObservalbe$ = this._shareDataService.changeAsObservable(ChangeName.OnSubTitleChange, '');
    this.subTitleSubscription = this.subTitleObservalbe$.subscribe(
      x => { this.setNewSubTitle(x); });
  }

  ngOnDestroy(): void {
    if(this.titleSubscription != null)
      this.titleSubscription.unsubscribe();
  }

  setNewTitle(title: any): void {
    setTimeout(()=> {
      this.displayTitle = false;
    }, 500);
    setTimeout(()=> {
      this.title = title;
      this.displayTitle = true;
    }, 1000);
  }
  
  setNewSubTitle(subTitle: any): void {
    setTimeout(()=> {
      this.displaySubTitle = false;
    }, 500);
    setTimeout(()=> {
      this.subTitle = subTitle;
      this.displaySubTitle = true;
    }, 1000);
  }
}
