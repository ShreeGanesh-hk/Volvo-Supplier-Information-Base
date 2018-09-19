import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformanceBreakdownComponent } from './performance-breakdown.component';

const routes: Routes = [
  {
    path:'',component:PerformanceBreakdownComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceBreakdownRoutingModule { }
