import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError, map, observable, Observable, retry, throwError, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './_model/User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public jwtHelper:JwtHelperService=new JwtHelperService();
 decodeToken:any;
currentUser:User;
 private baseUrl= environment.RegUrl;

  constructor( private http:HttpClient) {

   }
   login(model:any){
       return this.http.post(this.baseUrl + 'login',model).pipe(
         map((response:any)=>{
           const user=response;
           if (user) {
             localStorage.setItem('token',user.token);
             localStorage.setItem('user',JSON.stringify(user.user));
             this.decodeToken=this.jwtHelper.decodeToken(user.token);
             this.currentUser=user.user;

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
