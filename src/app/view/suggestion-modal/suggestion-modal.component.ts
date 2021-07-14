import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Quote} from "../../models/Quote";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {QuoteService} from "../../services/quote.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LocalizationService} from "../../services/localization.service";

interface DialogResults {
  message: string
}

@Component({
  selector: 'app-suggestion-modal',
  templateUrl: './suggestion-modal.component.html',
  styleUrls: ['./suggestion-modal.component.scss']
})
export class SuggestionModalComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;
  quote: Quote;
  originalMessage: string;
  localeMessage: string;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<SuggestionModalComponent>,
              private recaptchaV3Service: ReCaptchaV3Service,
              private quoteService: QuoteService,
              private localizationService: LocalizationService,
              private snackBar: MatSnackBar,
              @Inject(LOCALE_ID) public locale: string,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.quote = data.quote;
    this.originalMessage = this.getLocale("en")
    this.localeMessage = this.getLocale(locale)
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      message: this.localeMessage,
    });
  }


  private getLocale(code: string): string {
    let message = this.quote.messages.find(value => value.code.startsWith(code))
    return message?.message || this.quote.messages[0].message
  }

  submit(form: FormGroup) {
    const action = "suggestChange"
    this.recaptchaV3Service.execute(action).subscribe((token) => {
      this.quoteService.checkRecaptcha(token, action).subscribe((response) => {
        if (response.success) {
          const result = {message: form.value.message} as DialogResults
          this.dialogRef.close(result);
        } else {
          this.showErrorSnackbar()
        }
      })
    })
  }

  private showErrorSnackbar() {
    this.snackBar.open(this.localizationService.language.errorReCaptchaMessage, undefined, {
      duration: 1000
    })
  }

  close() {
    this.dialogRef.close();
  }

}
