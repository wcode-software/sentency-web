export const environment = {
  production: true,
  baseUrl: (window as any)["env"]["baseUrl"] || "http://localhost:7000",
  apiKey: (window as any)["env"]["apiKey"] || "APIKEY"
};
