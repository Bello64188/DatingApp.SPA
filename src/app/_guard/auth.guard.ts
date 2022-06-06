import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { NavComponent } from '../nav/nav.component';
import { AlertifyService } from '../_service/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:NavComponent, private router:Router,private alertify:AlertifyService){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authservice.isUserAuth()) {
      return true;
    }
    //this.alertify.error('you need to be login to access this area');
    this.router.navigate(['/home']);
    return false;
  }

}
