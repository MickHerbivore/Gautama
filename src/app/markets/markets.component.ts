import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoinGeckoService } from '../services/coin-gecko.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  markets = [
    {
      name: ''
    }
  ];

  marketsResultado = [
    {
      name: ''
    }
  ];

  searchForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private coinGeckoService: CoinGeckoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getMarkets();
  }

  getMarkets() {
    this.coinGeckoService.getMarkets().subscribe({
      next: (resp) => {
        console.log(resp);
        this.markets = resp;
        this.marketsResultado = resp;
      }
    })
  }

  buscar() {
    this.marketsResultado = this.markets.filter(market => {
      return market.name.toLowerCase().includes(this.searchForm.get('name')?.value.toLowerCase());
    })
  }

  limpiarBusqueda() {
    this.marketsResultado = this.markets;
    this.searchForm.controls['name'].setValue('');
  }

}
