import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular";

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {Integrations} from "@sentry/tracing";

const env = () => {
  if (environment.production)
    return "production"
  else
    return "debug"
}

Sentry.init({
  dsn: environment.sentryDns,
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ["localhost", "https://yourserver.io/api"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  environment: env(),

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.1,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

