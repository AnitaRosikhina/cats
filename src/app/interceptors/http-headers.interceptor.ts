import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  private API_KEY = 'live_LUjDetoEEKv3ChelF4eWQbpAgUWcFb8SHskXIRQnI2VCPPDDAlEUPrNb6WKbo0My';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      headers: request.headers.set('x-api-key', this.API_KEY)
    });

    return next.handle(req);
  }
}
