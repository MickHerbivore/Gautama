import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinGeckoService } from '../../../services/coin-gecko.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  id: string = '';
  coin = {
    name: '',
    description: {
      en: ''
    },
    links: {
      homepage: [],
      official_forum_url: [],
      repos_url: {
        bitbucket: [],
        github: []
      }
    },
    image: {
      large: ''
    },
    market_data: {
      current_price: {
        clp: '',
        usd: '',
        eur: '',
        cad: ''
      }
    }
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
        this.getCoin();
      }
    })
  }

  getCoin() {
    this.coinGeckoService.getCoin(this.id).subscribe({
      next: (resp) => {
        this.coin = resp;
        console.log(this.coin);
        
      },
      error: () => this.router.navigate(['/markets'])
    })
  }

}
