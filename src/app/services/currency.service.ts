import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../Currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url: string = 'http://localhost:8080/api/currency';

  constructor(private http: HttpClient) { }

  getCurrencyRates(): Observable<Currency> {
    console.log("ENTER-EXIT ==> currency.service.ts::getCurrencyRates()");
    return this.http.get<Currency>(this.url);
  }
}
