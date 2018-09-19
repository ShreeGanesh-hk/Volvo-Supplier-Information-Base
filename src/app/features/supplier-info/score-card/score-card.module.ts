import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreCardRoutingModule } from './score-card-routing.module';
import {ScoreCardComponent} from './score-card.component';

@NgModule({
  imports: [
    CommonModule,
    ScoreCardRoutingModule
  ],
  declarations: [ScoreCardComponent]
})
export class ScoreCardModule { }
