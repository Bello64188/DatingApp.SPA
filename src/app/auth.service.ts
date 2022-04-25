import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map, Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers:HttpHeaders


 private accessUrl : string = "https://localhost:5001/api/account/login"


  constructor( private http:HttpClient) {  
    this.headers= new HttpHeaders({'Content-type':'application/json; charset=utf-8'})
    
   }
  Login(formData:any){
  return this.http.post(this.accessUrl,formData);
  };
  
}
