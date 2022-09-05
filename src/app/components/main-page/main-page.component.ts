import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/Currency';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  // fields of taken currency
  currencyId: string | undefined;
  currencyTimestamp: number | undefined;
  currencyBase: string | undefined;
  currencyValue: number | undefined;

  // temporary rates map
  currencyRates!: Map<string, number>;
  // currency code to be printed
  currencyCode!: string;

  // budget of the user
  budget: number = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("ENTER ==> main-page.component.ts::onSubmit()");
    if (!this.currencyCode) {
      alert("Please add a currency code");
      return;
    }
    this.getCurrency();
    console.log("EXIT ==> main-page.component.ts::onSubmit()");
  }

  getCurrency() {
    console.log("ENTER ==> main-page.component.ts::getCurrency()");
    this.currencyService.getCurrencyRates().subscribe( (takenCurrency) => {
      console.log(takenCurrency);
      this.getFields(takenCurrency);
      return takenCurrency;
    } )
    console.log("EXIT ==> main-page.component.ts::getCurrency()");
  }

  getFields(givenCurrency: Currency) {
    console.log("ENTER ==> main-page.component.ts::getFields()");
    // assign fields
    this.currencyId = givenCurrency.id;
    this.currencyTimestamp = givenCurrency.timestamp;
    this.currencyBase = givenCurrency.base;
    this.currencyRates = new Map(Object.entries(givenCurrency.rates));
    this.currencyValue = this.currencyRates.get(this.currencyCode);
    console.log("EXIT ==> main-page.component.ts::getFields()");
  }

  test() {
    console.log("test()");
  }
  
}
