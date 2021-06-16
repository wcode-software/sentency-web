import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../../services/quote.service";
import {Quote} from "../../models/Quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  randomQuote?: Quote = undefined;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.getRandomQuote()
  }

  getRandomQuote(): void {
    this.quoteService.getDailyQuote().subscribe((quote) => {
        this.randomQuote = quote
      }
    )
  }

}
