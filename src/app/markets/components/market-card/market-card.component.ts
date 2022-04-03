import { Component, Input, OnInit } from '@angular/core';
import { Market } from 'src/app/models/market.model';

@Component({
  selector: 'app-market-card',
  templateUrl: './market-card.component.html',
  styleUrls: ['./market-card.component.css']
})
export class MarketCardComponent implements OnInit {

  @Input() market = {} as Market;

  constructor() {}

  ngOnInit(): void {}

  

}
