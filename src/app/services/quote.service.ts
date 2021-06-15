import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quote} from "../models/Quote";

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
}
