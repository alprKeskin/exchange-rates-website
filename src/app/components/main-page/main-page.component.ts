import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/Currency';
import { SpecificCurrency } from 'src/app/SpecificCurrency';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  currencies: SpecificCurrency[] = [];
  
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
    const currency: SpecificCurrency = {
      code: this.currencyCode,
      value: new Map(Object.entries(givenCurrency.rates)).get(this.currencyCode)
    };

    this.currencies.push(currency);

    console.log("EXIT ==> main-page.component.ts::getFields()");
  }

  test() {
    console.log("test()");
  }
  
}
