import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CoinGeckoService } from '../../services/coin-gecko.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingCoins = {
    coins: [
      {
        item: {
          id: '',
          name: '',
          small: ''
        }
      }
    ]
  };

  constructor( public auth: AuthService, private coinGeckoService: CoinGeckoService ) {
    console.log(auth);
    
   }

  ngOnInit(): void {
    this.getTrendingCoins();    
  }

  getTrendingCoins() {
    this.coinGeckoService.getTrendingCoins().subscribe({
      next: (resp) =>  this.trendingCoins = resp
    })
  }
  
}
