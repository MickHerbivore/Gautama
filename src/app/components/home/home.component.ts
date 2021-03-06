import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CoinGeckoService } from '../../services/coin-gecko.service';
import { RespTrendingCoins } from '../../models/resp-trending-coins.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingCoins = {} as RespTrendingCoins;

  constructor( public auth: AuthService, private coinGeckoService: CoinGeckoService ) {}

  ngOnInit(): void {
    this.getTrendingCoins();    
  }

  getTrendingCoins() {
    this.coinGeckoService.getTrendingCoins().subscribe({
      next: (resp) =>  this.trendingCoins = resp
    })
  }
  
}
