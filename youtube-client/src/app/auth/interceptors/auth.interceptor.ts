import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private apiKey = '0519fa2feamsh1b49deb43e0d50ep186198jsnc1907a46938d';
  // headers: { 'X-RapidAPI-Key': '0519fa2feamsh1b49deb43e0d50ep186198jsnc1907a46938d' },


  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const headers: HttpHeaders = new HttpHeaders({ 'X-RapidAPI-Key': this.apiKey });
    const authReq = request.clone( { headers } );

    return next.handle(authReq);
  }
}
