import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangesRoutingModule } from './exchanges-routing.module';
import { ExchangesComponent } from './exchanges.component';
import { ExchangeCardComponent } from './components/exchange-card/exchange-card.component';
import { ExchangeInfoComponent } from './components/exchange-info/exchange-info.component';


@NgModule({
  declarations: [
    ExchangesComponent,
    ExchangeCardComponent,
    ExchangeInfoComponent
  ],
  imports: [
    CommonModule,
    ExchangesRoutingModule
  ]
})
export class ExchangesModule { }
