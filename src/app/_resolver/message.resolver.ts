import { AlertifyService } from 'src/app/_service/alertify.service';
import { UserService } from 'src/app/_service/user.service';
import { AuthService } from 'src/app/auth.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageResolver implements Resolve<boolean> {
  messageContainer='unread';
  pageNumber=1;
  pageSize=5;
  constructor(private authService:AuthService,private userservice:UserService, private route:Router
    ,private alertify:AlertifyService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userservice.getMessage(this.authService.decodeToken.id,
      this.pageNumber,this.pageSize,this.messageContainer)
      .pipe(
        catchError(error=>{
          this.alertify.error("There is a problem while retriving messsage");
          this.route.navigate(['/home']);
          return of(null);

        })
      )

  }
}
