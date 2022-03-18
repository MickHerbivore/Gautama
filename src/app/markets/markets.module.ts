import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';
import { MarketCardComponent } from './components/market-card/market-card.component';
import { CoinComponent } from './components/coin/coin.component';


@NgModule({
  declarations: [
    MarketsComponent,
    MarketCardComponent,
    CoinComponent
  ],
  imports: [
    CommonModule,
    MarketsRoutingModule
  ]
})
export class MarketsModule { }
