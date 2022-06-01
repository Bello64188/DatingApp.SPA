import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';
import { NavComponent } from '../nav/nav.component';
import { User } from '../_model/User';
import { AlertifyService } from '../_service/alertify.service';
import { UserService } from '../_service/user.service';

@Injectable({
  providedIn: 'root'
})
export class MemberEditResolver implements Resolve<User> {
  user:any
  constructor(private userService:UserService,private route:Router,private alertify:AlertifyService, private jwthelper:AuthService){


     }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userService.getUser(this.jwthelper.decodeToken.id).pipe(catchError(error=>{
      this.alertify.error('please you dont have access to this area. try and login.');


      this.route.navigate(['/members']);
      return of(null)
    }))
  }


}
