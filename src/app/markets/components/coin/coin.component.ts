import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from 'src/app/models/coin.model';
import { CoinGeckoService } from '../../../services/coin-gecko.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  id: string = '';
  coin = {} as Coin;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coinGeckoService: CoinGeckoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe({
      next: (params) => {
        this.id = params['id'];
        this.getCoin();
      }
    })
  }

  getCoin() {
    this.coinGeckoService.getCoin(this.id).subscribe({
      next: (resp) => this.coin = resp,
      error: () => this.router.navigate(['/markets'])
    })
  }

}
