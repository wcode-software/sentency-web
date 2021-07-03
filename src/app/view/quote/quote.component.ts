import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {QuoteService} from "../../services/quote.service";
import {Quote} from "../../models/Quote";
import {animate, style, transition, trigger} from "@angular/animations";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SuggestionModalComponent} from "../suggestion-modal/suggestion-modal.component";
import {QuoteLocalization} from "../../models/QuoteLocalization";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LocalizationService} from "../../services/localization.service";

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

  constructor(private quoteService: QuoteService,
              private localizationService: LocalizationService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              @Inject(LOCALE_ID) public locale: string) {
    this.messsage = this.localizationService.language.loading
  }

  ngOnInit(): void {
    this.getRandomQuote()
  }

  getRandomQuote(): void {
    this.quoteService.getDailyQuote().subscribe((quote) => {
        this.randomQuote = quote
        this.messsage = this.processMessage(quote.messages)
      }
    )
  }

  private processMessage(messages: QuoteLocalization[]): string {
    let message = messages.find(value => value.code.startsWith(this.locale))
    return message?.message || messages[0].message
  }

  openDialog(): void {
    let dialogConfig = new MatDialogConfig();

    dialogConfig = {
      ...dialogConfig,
      data: {
        quote: this.randomQuote
      },
      disableClose: true,
      autoFocus: true,
      width: "600px"
    }

    let dialogRef = this.dialog.open(SuggestionModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.suggestQuote(result.message)
      }
    })
  }

  private suggestQuote(message: string) {
    let localization = this.randomQuote?.messages.find(value => value.code.startsWith(this.locale))
    if (localization) {
      localization.message = message
      this.quoteService.suggestQuote(localization).subscribe((response) => {
        this.snackBar.open(this.localizationService.language.snackMessage, undefined, {
          duration: 1000
        })
      })
    }
  }

}
