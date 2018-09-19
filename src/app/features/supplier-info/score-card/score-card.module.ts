import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreCardRoutingModule } from './score-card-routing.module';
import {ScoreCardComponent} from './score-card.component';
import { SupplierSalesComponent } from './supplier-sales/supplier-sales.component';
import { SupplierBusinessComponent } from './supplier-business/supplier-business.component';
import { SupplierAuditsComponent } from './supplier-audits/supplier-audits.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ScoreCardRoutingModule,
    ChartsModule
  ],
  declarations: [ScoreCardComponent, SupplierSalesComponent, SupplierBusinessComponent, SupplierAuditsComponent]
})
export class ScoreCardModule { }
