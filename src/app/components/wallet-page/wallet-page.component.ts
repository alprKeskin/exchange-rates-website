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
  }

}
