import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';
import { MarketCardComponent } from './components/market-card/market-card.component';
import { CoinComponent } from './components/coin/coin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MarketsComponent,
    MarketCardComponent,
    CoinComponent,
  ],
  imports: [
    CommonModule,
    MarketsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MarketsModule { }
