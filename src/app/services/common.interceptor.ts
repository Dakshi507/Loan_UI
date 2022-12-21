import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  token: string | null;

  constructor() {
    this.token=localStorage.getItem("token");
    //console.log(this.token);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(this.token){
      request = request.clone({
        setHeaders:{Authorization:`Bearer ${this.token}`}
      });
     console.log(request)
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
            // redirect user to the logout page
            localStorage.removeItem("jwt");
            console.log("No token");
         }
      }
      return throwError(err);
    })
     )
   }
  }

