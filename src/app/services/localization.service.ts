import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Locales} from "../localization/Locales";
import {LocaleEN} from "../localization/en-US";
import {LocalePT} from "../localization/pt-BR";

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private languages: Map<string, Locales> = new Map([["en-US", LocaleEN], ["pt", LocalePT]])
  language: Locales

  constructor(@Inject(LOCALE_ID) public locale: string) {
    this.language = this.languages.get(this.locale) || LocaleEN
  }
}
