import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quote} from "../models/Quote";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient, @Inject(LOCALE_ID) public locale: string) {
  }

  getDailyQuote(): Observable<Quote> {
    console.log(this.locale)
    const url = `/quote/random?language=${this.locale}`;
    return this.http.get<Quote>(url)
  }
}
