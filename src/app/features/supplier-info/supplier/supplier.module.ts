import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import {SupplierComponent} from './supplier.component';
import { SuppliestoComponent } from './suppliesto/suppliesto.component';
import { PurchasersComponent } from './purchasers/purchasers.component';
import { GeneralinfoComponent } from './generalinfo/generalinfo.component';
import { EdistatusComponent } from './edistatus/edistatus.component';
import { CertificatesComponent } from './certificates/certificates.component';

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule
  ],
  declarations: [CertificatesComponent,SupplierComponent, SuppliestoComponent, PurchasersComponent, GeneralinfoComponent, EdistatusComponent]
})
export class SupplierModule { }
