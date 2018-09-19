import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScoreCardComponent} from './score-card.component';

const routes: Routes = [
  {path:'', component: ScoreCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreCardRoutingModule { }
