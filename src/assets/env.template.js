(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["baseUrl"] = "${ENV_BASE_URL}";
  window["env"]["apiKey"] = "${ENV_API_KEY}";
  window["env"]["recaptchaKey"] = "${ENV_SITE_KEY}"
})(this);
