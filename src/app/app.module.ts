import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {QuoteComponent} from './view/quote/quote.component';
import {environment} from "../environments/environment";
import {NetworkInterceptor} from "./interceptors/NetworkInterceptor";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";
import {SuggestionModalComponent} from './view/suggestion-modal/suggestion-modal.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from "ng-recaptcha";

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    SuggestionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RecaptchaV3Module
  ],
  providers: [
    {provide: "BASE_URL", useValue: environment.baseUrl},
    {provide: "API_KEY", useValue: environment.apiKey},
    {provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true},
    {provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptchaKey}
  ],
  bootstrap: [AppComponent],
  entryComponents: [SuggestionModalComponent]
})
export class AppModule {
}
