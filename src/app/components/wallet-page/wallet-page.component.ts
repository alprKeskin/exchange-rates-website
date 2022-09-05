import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.css']
})
export class WalletPageComponent implements OnInit {
  budget: number = 0;

  availableCurrencyNames:string[] = ["USD", "TRY", "AUD"];
  availableCurrencyAmounts:number[] = [564.2, 10402, 25.4];

  constructor() { }

  ngOnInit(): void {
    this.budget = this.sum(this.availableCurrencyAmounts);
  }

  sum(array:number[]): number {
    let result: number = 0;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  }

}
