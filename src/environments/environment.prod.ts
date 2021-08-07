export const environment = {
  production: true,
  baseUrl: (window as any)["env"]["baseUrl"] || "http://localhost:7000",
  apiKey: (window as any)["env"]["apiKey"] || "APIKEY",
  recaptchaKey: (window as any)["env"]["recaptchaKey"] || "<YOUR_SITE_KEY>",
  sentryDns: (window as any)["env"]["sentryDns"] || "<SENTRY_DNS>"
};
