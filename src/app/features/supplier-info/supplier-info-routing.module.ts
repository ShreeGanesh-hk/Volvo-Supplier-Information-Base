import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SupplierInfoComponent} from './supplier-info.component';
import {ScoreCardModule} from './score-card/score-card.module';

const routes: Routes = [
  {
    path: '', component: SupplierInfoComponent,
    children: [
      {path: '',redirectTo:'supplier',pathMatch:'full'},
      {path: 'supplier', loadChildren: './supplier/supplier.module#SupplierModule'},
      {path: 'scorecard', loadChildren: './score-card/score-card.module#ScoreCardModule'},
      {path: 'performance', loadChildren: './performance-breakdown/performance-breakdown.module#PerformanceBreakdownModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierInfoRoutingModule {
}
