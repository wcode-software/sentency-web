import {Inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    @Inject('API_KEY') private apiKey: string,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = request.clone(
      {
        url: `${this.baseUrl}${request.url}`,
        headers: request.headers.set("apiKey", this.apiKey)
      });
    return next.handle(apiReq);
  }
}
