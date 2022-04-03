import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangesComponent } from './exchanges.component';
import { ExchangeInfoComponent } from './components/exchange-info/exchange-info.component';

const routes: Routes = [
  { path: '', component: ExchangesComponent },
  { path: 'info', component: ExchangeInfoComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangesRoutingModule { }
