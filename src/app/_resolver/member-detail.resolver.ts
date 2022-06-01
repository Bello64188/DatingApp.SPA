import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
  Route
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { NavComponent } from '../nav/nav.component';
import { User } from '../_model/User';
import { AlertifyService } from '../_service/alertify.service';
import { UserService } from '../_service/user.service';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailResolver implements Resolve<User> {
  constructor(private userService:UserService, private route:Router,
     private alertify:AlertifyService, private auth:AuthService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.auth.getActiveUser();
    return this.userService.getUser(route.params['id']).pipe(catchError(error=>{
      this.alertify.error('Unable to fetch user details please try and  login.');
      this.route.navigate(['/members']);
      return  of (null);
    })
    );
  }
}
