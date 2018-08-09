import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  serverUrl = environment.apiServer;

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.url.startsWith('/')) {
      return next.handle(req);
    }

    const serverReq = !this.serverUrl ? req : req.clone({
      url: `${this.serverUrl}${req.url}`
    });
    return next.handle(serverReq);
  }
}
