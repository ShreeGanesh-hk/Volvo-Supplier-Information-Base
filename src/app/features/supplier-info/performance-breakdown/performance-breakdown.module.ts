import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceBreakdownRoutingModule } from './performance-breakdown-routing.module';
import { PerformanceBreakdownComponent } from './performance-breakdown.component';
import { TrendComponent } from './trend/trend.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    PerformanceBreakdownRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [PerformanceBreakdownComponent, TrendComponent, BreakdownComponent]
})
export class PerformanceBreakdownModule { }
