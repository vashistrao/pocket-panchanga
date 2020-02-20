import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayComponent } from './panchanga/day/day.component';
import { HomeComponent } from './panchanga/home/home.component';


const routes: Routes = [
  { path: 'day', component: DayComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'day', pathMatch: 'full'},
  { path: '**', redirectTo: 'day', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
