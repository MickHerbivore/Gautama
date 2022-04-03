import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../models/coin.model';
import { Exchange } from '../models/exchange.model';
import { Market } from '../models/market.model';
import { RespTrendingCoins } from '../models/resp-trending-coins.model';

@Injectable({
  providedIn: 'root'
})
export class CoinGeckoService {

  private baseUrl = 'https://api.coingecko.com/api/v3/';
  private marketsUri = 'coins/markets';
  private currency = 'CLP';
  private coinsUri = 'coins/';
  private exchanges = 'exchanges/';
  private search = 'search/';
  private trending = 'trending/';


  constructor( private http: HttpClient ) { }

  /**
   * Obtiene lista de criptomonedas
   * @returns 
   */
  getMarkets(): Observable<Market[]> {
    return this.http.get<Market[]>(`${ this.baseUrl }${ this.marketsUri }?vs_currency=${ this.currency }`);
  }

  /**
   * Obtiene información de una criptomoneda
   * @param id 
   * @returns 
   */
  getCoin( id: string ): Observable<Coin> {
    return this.http.get<Coin>(`${ this.baseUrl }${ this.coinsUri }${ id }`);
  }

  /**
   * Obtiene lista de exchanges
   * @returns
   */
  getExchanges(): Observable<Exchange[]> {
    return this.http.get<Exchange[]>(`${ this.baseUrl }${ this.exchanges }`);
  }

  /**
   * Obtiene información de un exchange
   * @param id 
   * @returns 
   */
   getExchange( id: string ): Observable<Exchange> {
    return this.http.get<Exchange>(`${ this.baseUrl }${ this.exchanges }${ id }`);
  }

  /**
   * Obtiene monedas más buscadas las últimas 24 horas
   * @param id 
   * @returns 
   */
   getTrendingCoins(): Observable<RespTrendingCoins> {
    return this.http.get<RespTrendingCoins>(`${ this.baseUrl }${ this.search }${ this.trending }`);
  }
}
