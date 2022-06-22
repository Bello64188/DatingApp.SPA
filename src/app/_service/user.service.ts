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
updateUser(id:any, user:any):Observable<any>{
  return this.http.put(this.baseUrl+'user/'+id,user);
}
setMainPhoto(userid:any,id:any):Observable<any>{
  return this.http.post(this.baseUrl +'user/'+ userid +'/photo/' + id +'/setMain',{});
}
deletePhoto(userid:any,id:any):Observable<any>{
  return this.http.delete(this.baseUrl + 'user/' + userid + '/photo/' + id);
}
}
