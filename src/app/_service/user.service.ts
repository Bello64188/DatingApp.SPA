import { Observable, map, catchError } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest,HttpResponse} from '@angular/common/http';
import { PaginatedResult } from '../_model/Pagination';
import { User } from '../_model/User';
import { IMessage } from '../_model/Message';

@Injectable({
  providedIn: 'root'
})
export class UserService {

baseUrl=environment.ApiUrl;
constructor(private http: HttpClient) { }
getUsers(page?:number,itemPerPage?:number,userParams?:any, likeParams?:any): Observable<PaginatedResult<any[]>>{
  const paginatedResult:PaginatedResult<any> = new PaginatedResult<any>();
  let params = new HttpParams();
  if (page!= null&& itemPerPage!= null) {
  params=  params.append('pageNumber',page);
   params= params.append('pageSize',itemPerPage)
  }
  if (userParams!=null) {
  params =  params.append('minAge',userParams.minAge);
  params =   params.append('maxAge',userParams.maxAge);
  params =   params.append('gender',userParams.gender);
  params = params.append('orderBy',userParams.orderBy)
  }
  if (likeParams==='Likers') {
    params= params.append('Likers','true');
  }
  if(likeParams=== 'Likees'){
   params= params.append('Likees', 'true');
  }

      return this.http.get(this.baseUrl+'user',{observe:'response',params}).pipe(
        map(response=>{
          paginatedResult.result=response.body;
          if (response.headers.get('Pagination')!=null) {
            paginatedResult.pagination= JSON.parse(response.headers.get('Pagination')??'');
          }
          return paginatedResult;
        })
      );
}
getUser(id:any): Observable<any>{
  return this.http.get(this.baseUrl+'user/'+ id);
}
sendLike(userid:string,recipientid:string):Observable<any>{
  return this.http.post(this.baseUrl + 'user/' + userid + '/like/' + recipientid, {});
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
getMessage(id:number, page:number,itemPerPage:number,messageContainer:string){
const paginatedResult: PaginatedResult<any> = new PaginatedResult<any>();
let params = new HttpParams();
params= params.append('messageContainer',messageContainer);
if(page!=null && itemPerPage!=null){
  params= params.append('pageNumber',page);
  params = params.append('pageSize',itemPerPage);

}
return this.http.get(this.baseUrl + 'user/' + id + '/message',{observe: 'response',params:params})
.pipe(
  map(response =>{
    paginatedResult.result=response.body
    if (response.headers.get('Pagination')!= null) {
      paginatedResult.pagination= JSON.parse(response.headers.get('Pagination')?? '');
    }
    return paginatedResult;
  })
)
}
}
