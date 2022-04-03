import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketsComponent } from './markets.component';
import { CoinComponent } from './components/coin/coin.component';

const routes: Routes = [
  { path: '', component: MarketsComponent },
  { path: 'coin', component: CoinComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketsRoutingModule { }
