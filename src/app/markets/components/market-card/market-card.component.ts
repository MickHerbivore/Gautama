import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-card',
  templateUrl: './market-card.component.html',
  styleUrls: ['./market-card.component.css']
})
export class MarketCardComponent implements OnInit {

  @Input() market: any = {
    id: null,
    name: '',
    image: ''
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
