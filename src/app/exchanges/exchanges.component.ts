import { Component, OnInit } from '@angular/core';
import { CoinGeckoService } from '../services/coin-gecko.service';
import { Exchange } from '../models/exchange.model';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {

  exchanges: Exchange[] = [];
  exchangesResultado: Exchange[] = [];

  constructor( private coinGeckoService: CoinGeckoService ) { }

  ngOnInit(): void {
    this.getExchanges();
  }

  getExchanges() {
    this.coinGeckoService.getExchanges().subscribe({
      next: (resp) => {
        this.exchanges = resp;
        this.exchangesResultado = resp;
      }
    })
  }

  buscar( termino: string ) {
    this.exchangesResultado = this.exchanges.filter(exchange => {
      return exchange.name.toLowerCase().includes(termino.toLowerCase());
    })
  }

  limpiarBusqueda() {
    this.exchangesResultado = this.exchanges;
  }

}
