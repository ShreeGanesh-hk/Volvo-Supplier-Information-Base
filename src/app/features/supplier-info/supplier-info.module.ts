import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupplierInfoRoutingModule} from './supplier-info-routing.module';
import {SupplierInfoComponent} from './supplier-info.component';
import {SharedModule} from '../../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SupplierInfoService} from './supplier-info.service';
import { AgGridModule } from 'ag-grid-angular';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
    NgbModule,
    SupplierInfoRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [SupplierInfoService],
  declarations: [SupplierInfoComponent]
})
export class SupplierInfoModule {
}
