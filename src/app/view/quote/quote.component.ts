import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../../services/quote.service";
import {Quote} from "../../models/Quote";
import {animate, style, transition, trigger} from "@angular/animations";

export const fadeInOutTimeout = 1000;
export const fadeInOut = trigger('fadeInOut', [
  transition('void => *', [style({opacity: '0'}), animate(fadeInOutTimeout)]),
  transition('* => void', [animate(fadeInOutTimeout, style({opacity: '0'}))]),
  transition('* => *', [
    style({opacity: '0'}),
    animate(fadeInOutTimeout, style({opacity: '1'})),
  ]),
]);

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  animations: [fadeInOut]
})
export class QuoteComponent implements OnInit {

  randomQuote?: Quote = undefined;
  messsage: string = "Loading ..."

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.getRandomQuote()
  }

  getRandomQuote(): void {
    this.quoteService.getDailyQuote().subscribe((quote) => {
        this.randomQuote = quote
        this.messsage = quote.messages[0].message
      }
    )
  }

}
