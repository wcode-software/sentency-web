<div align="center">
    <h1 align="center">Sentency Web</h1>
    <h5>Project Sentency</h5>
    <img  width="80" height="80" src="./icon.svg">
</div>

Web client of the Sentency Project created using Angular and Typescript. This project was generated
with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Third-Party frameworks

The list of all the third party frameworks used in this project:

* [Angular Material](https://material.angular.io/): Material Design components for Angular
* [Sentry](https://sentry.io/welcome/): From error tracking to performance monitoring, developers can see what actually matters,

## Docker image

To deploy the project first is necessary to build the Docker image. Use the command:

```bash
docker build -t sentency-web .
```

## Environment variables

The project load environment variables to fill some important parameters on the server. They can be defined when running
the docker image, on the docker-compose or in the environment itself.

* ENV_BASE_URL: If it is production or development. Production flavor will try to use Postgre
* ENV_API_KEY: Value that will be used to wrap all calls.
* ENV_SITE_KEY: ReCaptcha site key used when getting the token
