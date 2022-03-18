import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinGeckoService {

  private baseUrl = 'https://api.coingecko.com/api/v3/';
  private marketsUri = 'coins/markets';
  private currency = 'CLP';
  private coinsUri = 'coins/';

  constructor( private http: HttpClient ) { }

  getMarkets(): Observable<any> {
    return this.http.get(`${ this.baseUrl }${ this.marketsUri }?vs_currency=${ this.currency }`);
  }

  getCoin( id: string ): Observable<any> {
    return this.http.get(`${ this.baseUrl }${ this.coinsUri }${ id }`);
  }
}
