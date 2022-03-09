import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinGeckoService {

  baseUrl = 'https://api.coingecko.com/api/v3/';
  marketsUri = 'coins/markets';
  currency = 'CLP';

  constructor( private http: HttpClient ) { }

  getMarkets(): Observable<any> {
    return this.http.get(`${ this.baseUrl }${ this.marketsUri }?vs_currency=${ this.currency }`);
  }
}
