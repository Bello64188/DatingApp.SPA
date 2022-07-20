import { UserService } from 'src/app/_service/user.service';
import { AlertifyService } from './../_service/alertify.service';
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
export class ListResolverResolver implements Resolve<boolean> {
  pageNumber=1;
  pageSize=5;
  likeParams='Likers'
  constructor(private route:Router,private alertify:AlertifyService,private userserv:UserService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userserv.getUsers(this.pageNumber,this.pageSize,null,this.likeParams).pipe(catchError(err=>{
      this.alertify.error("problem while retrieving data");
      this.route.navigate(['/members']);
      return of(null)

    }))
  }
}
