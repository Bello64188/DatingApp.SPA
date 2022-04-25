import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map, Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers:HttpHeaders


 private loginUrl : string = "https://localhost:5001/api/account/login"
 private registerUrl : string = "https://localhost:5001/api/account/register"


  constructor( private http:HttpClient) {
    this.headers= new HttpHeaders({'content-type':'application/json; charset=utf-8'})

   }
  Login(formData:any){
  return this.http.post(this.loginUrl,formData);
  };
  Register(UserData:any){
    return this.http.post(this.registerUrl,UserData);
  }
}
