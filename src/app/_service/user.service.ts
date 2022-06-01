import { Observable, map } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

baseUrl=environment.ApiUrl;
constructor(private http: HttpClient) { }
getUsers(): Observable<any>{
      return this.http.get(this.baseUrl+'user');


}
getUser(id:any): Observable<any>{
  return this.http.get(this.baseUrl+'user/'+ id);


}
}
