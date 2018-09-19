import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SupplierInfoComponent} from './supplier-info.component';
import {ScoreCardModule} from './score-card/score-card.module';

const routes: Routes = [
  {
    path: '', component: SupplierInfoComponent,
    children: [
      {path: '', loadChildren: './supplier/supplier.module#SupplierModule'},
      {path: 'scorecard', loadChildren: './score-card/score-card.module#ScoreCardModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierInfoRoutingModule {
}
