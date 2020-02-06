import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PanchanagaModule } from './panchanga/panchanaga.module';
import { AppComponent } from './app.component';
import { SimpleAnimationModule } from 'angular-simple-animation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanchanagaModule,
    SimpleAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
