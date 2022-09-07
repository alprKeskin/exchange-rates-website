import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.css']
})

export class WalletPageComponent implements OnInit {
  budget: number = 0;

  availableCurrencies: Map<string, number> = new Map([
    ["USD", 1000],
    ["TRY", 200],
    ["AUD", 300]
  ]);

  constructor() { }

  ngOnInit(): void {
    this.budget = this.sumValues(this.availableCurrencies);
  }

  sumValues(map: Map<string, number>): number {
    let result: number = 0;
    map.forEach(value => {
      result += value;
    })
    return result;
  }
  
}
