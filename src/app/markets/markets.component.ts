import { Component, OnInit } from '@angular/core';
import { CoinGeckoService } from '../services/coin-gecko.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  markets = [];

  constructor( private coinGeckoService: CoinGeckoService ) { }

  ngOnInit(): void {
    this.getMarkets();
  }

  getMarkets() {
    this.coinGeckoService.getMarkets().subscribe(resp => {

      console.log(resp);
      this.markets = resp;

    })
  }

}
