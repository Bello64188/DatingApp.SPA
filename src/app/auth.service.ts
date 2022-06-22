import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, catchError, map, observable, Observable, retry, throwError, window, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './_model/User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

public jwtHelper:JwtHelperService=new JwtHelperService();
 decodeToken:any;
 currentUser:any;
 private baseUrl= environment.RegUrl;
private photoUrl = new BehaviorSubject<string>('../assets/user.png');
currentPhotoUrl = this.photoUrl.asObservable();
constructor( private http:HttpClient) {

   }
   changeMemberPhoto(photoUrl: string){
    this.photoUrl.next(photoUrl);
   }

   login(model: any){
       return this.http.post(this.baseUrl + 'login',model).pipe(
         map((response:any)=>{
           const user = response;
           if (user) {
             localStorage.setItem('token',user.token);
             localStorage.setItem('userfrom',JSON.stringify(user.userfrom));
             this.decodeToken=this.jwtHelper.decodeToken(user.token);
             this.currentUser=user.userfrom;
             this.changeMemberPhoto(this.currentUser.photoUrl);
            //  console.log(user.token);
            //  //the entire response
            //  console.log(user);


         }
         }),retry(1),catchError(this.handleError)
       )
   }


   Register(UserData:any){
     return this.http.post(this.baseUrl + 'register',UserData)
     .pipe(retry(1),catchError(this.handleError));
   }

    handleError(error:HttpErrorResponse){
    let errorMessage='';
    if (error.error instanceof ErrorEvent) {
  //client-side error
  errorMessage=`Error:
  ${error.error.message}`;
    }else{
      //server-side error
      errorMessage=`Error Code:
      ${error.status}\nMessage:
      ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(()=>{
      return errorMessage;
    });
  }
  getActiveUser(){
    return this.jwtHelper.decodeToken(this.jwtHelper.tokenGetter());
  }
getToken(){
  let token= localStorage.getItem('token');
  return  token;

}

}
