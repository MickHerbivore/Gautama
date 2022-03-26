import { Component, OnInit } from '@angular/core';
import { CoinGeckoService } from '../services/coin-gecko.service';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {

  exchanges = [];

  constructor( private coinGeckoService: CoinGeckoService ) { }

  ngOnInit(): void {
    this.getExchanges();
  }

  getExchanges() {
    this.coinGeckoService.getExchanges().subscribe({
      next: (resp) => {
        console.log(resp);
        this.exchanges = resp;
      }
    })
  }

}
