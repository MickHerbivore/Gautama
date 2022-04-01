import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinGeckoService } from 'src/app/services/coin-gecko.service';

@Component({
  selector: 'app-exchange-info',
  templateUrl: './exchange-info.component.html',
  styleUrls: ['./exchange-info.component.css']
})
export class ExchangeInfoComponent implements OnInit {

  id: string = '';

  exchange = {
    name: '',
    description: '',
    image: '',
    url: '',
    twitter_handle: '',
    reddit_url: '',
    tickers: [
      {
        coin_id: '',
        base: '',
        target: '',
        last: ''
      }
    ]
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private coinGeckoService: CoinGeckoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        this.getExchange();
      }
    })
  }

  getExchange() {
    this.coinGeckoService.getExchange(this.id).subscribe({
      next: (resp) => this.exchange = resp,
      error: () => this.router.navigate(['/exchanges'])
    })
  }

}
