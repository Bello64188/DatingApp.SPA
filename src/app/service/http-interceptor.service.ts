import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import { AlertifyService } from '../_service/alertify.service';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor {
token:any;
  constructor(private alertify:AlertifyService,private authser:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.token=this.authser.getToken();
   if(this.token){
    const tokenizedReq= req.clone({
      headers:req.headers.set('Authorization','Bearer '+this.token)
      .append('Content-Type','application/json')
      .append('Accept','application/json')
      .append('Access-Control-Allow-Origin','*')
      .append('Access-Control-Allow-Headers','Content-Type')
      .append('Access-Control-Allow-Credentials', 'true')

    });
   return next.handle(tokenizedReq);
   }
   return next.handle(req);
  }

}
