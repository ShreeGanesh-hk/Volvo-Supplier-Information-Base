import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeaturesComponent} from './features.component';
import {LoginModule} from './login/login.module';
import {SupplierInfoModule} from './supplier-info/supplier-info.module';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'prefix'},
      {path: 'login', loadChildren: './login/login.module#LoginModule'},
      {path: 'home', loadChildren: './home/home.module#HomeModule'},
      {path: 'supplierinfo', loadChildren: './supplier-info/supplier-info.module#SupplierInfoModule'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
