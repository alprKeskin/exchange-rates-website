import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/Currency';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  currency!: Currency;
  currencyCode!: string;
  budget: number = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("main-page.component.ts::onSubmit()");
    if (!this.currencyCode) {
      alert("Please add a currency code");
      return;
    }
    this.getCurrency();
  }

  getCurrency() {
    console.log("main-page.component.ts::onSubmitHelper()");
    this.currencyService.getCurrencyRates().subscribe( (takenCurrency) => {
      console.log(takenCurrency);
      return (this.currency = takenCurrency);
    } )
  }
}
