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

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    {provide: "BASE_URL", useValue: environment.baseUrl},
    {provide: "API_KEY", useValue: environment.apiKey},
    {provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
