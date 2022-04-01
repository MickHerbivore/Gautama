import { Component, OnInit } from '@angular/core';
import { Market } from '../models/market.model';
import { CoinGeckoService } from '../services/coin-gecko.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  markets: Market[] = [];
  marketsResultado: Market[] = [];

  constructor( private coinGeckoService: CoinGeckoService ) { }

  ngOnInit(): void {
    this.getMarkets();
  }

  getMarkets() {
    this.coinGeckoService.getMarkets().subscribe({
      next: (resp) => {
        this.markets = resp;
        this.marketsResultado = resp;
      }
    })
  }

  buscar( termino: string ) {
    this.marketsResultado = this.markets.filter(market => {
      return market.name.toLowerCase().includes(termino.toLowerCase());
    })
  }

  limpiarBusqueda() {
    this.marketsResultado = this.markets;
  }

}
