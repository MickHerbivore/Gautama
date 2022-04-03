import { Component, Input, OnInit } from '@angular/core';
import { Exchange } from 'src/app/models/exchange.model';

@Component({
  selector: 'app-exchange-card',
  templateUrl: './exchange-card.component.html',
  styleUrls: ['./exchange-card.component.css']
})
export class ExchangeCardComponent implements OnInit {

  @Input() exchange = {} as Exchange;

  constructor() { }

  ngOnInit(): void {
  }

}
