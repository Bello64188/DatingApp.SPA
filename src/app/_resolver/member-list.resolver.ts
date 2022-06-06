import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../_model/User';
import { AlertifyService } from '../_service/alertify.service';
import { UserService } from '../_service/user.service';

@Injectable({
  providedIn: 'root'
})
export class MemberListResolver implements Resolve<any[]> {
  constructor(private userService:UserService, private route:Router,private alertify:AlertifyService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userService.getUsers().pipe(catchError(error=>{
      this.alertify.error('Unable to access this page. please try and login.');
      this.route.navigate(['/home']);
      return of(null);
    }))
  }
}
