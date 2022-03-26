import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-card',
  templateUrl: './exchange-card.component.html',
  styleUrls: ['./exchange-card.component.css']
})
export class ExchangeCardComponent implements OnInit {

  @Input() exchange: any = {
    id: null,
    name: '',
    url: '',
    image: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
