import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quote} from "../models/Quote";
import {QuoteLocalization} from "../models/QuoteLocalization";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) {
  }

  getDailyQuote(): Observable<Quote> {
    const url = `/quote/random`;
    return this.http.get<Quote>(url)
  }

  suggestQuote(quoteLocalization: QuoteLocalization): Observable<Response> {
    const url = `/queue/language`
    return this.http.post<Response>(url, quoteLocalization)
  }
}
