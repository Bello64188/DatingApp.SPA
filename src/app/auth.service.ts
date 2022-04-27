import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError, map, observable, Observable, retry, throwError, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public jwtHelper:JwtHelperService=new JwtHelperService();


 private loginUrl : string = "https://localhost:5001/api/account/login"
 private registerUrl : string = "https://localhost:5001/api/account/register"


  constructor( private http:HttpClient) {

   }
  Login(formData:any){
  return this.http.post(this.loginUrl,formData,{'headers':this.header})
  .pipe(retry(1),catchError(this.handleError));
  };
   Register(UserData:any){
     return this.http.post(this.registerUrl,UserData,{'headers':this.header})
     .pipe(retry(1),catchError(this.handleError));
   }

   header= new HttpHeaders()
  .set('Content-type','application/json')
  .set('Access-Control-Allow-Origin','*')
  .set('Access-Control-Allow-Headers','Content-Type')

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
 
}
