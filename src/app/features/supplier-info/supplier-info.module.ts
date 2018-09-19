import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupplierInfoRoutingModule} from './supplier-info-routing.module';
import {SupplierInfoComponent} from './supplier-info.component';
import {SharedModule} from '../../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SupplierInfoService} from './supplier-info.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    SupplierInfoRoutingModule
  ],
  providers: [SupplierInfoService],
  declarations: [SupplierInfoComponent]
})
export class SupplierInfoModule {
}
