import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  private headers:HttpHeaders
  private accessPointUrl: string='https://localhost:5001/api/values';

  constructor(private http:HttpClient) { 
    this.headers= new HttpHeaders({'Content-type':'application/json; charset=utf-8'})
  }
   public GetValues(){
     return this.http.get(this.accessPointUrl,{headers:this.headers});
   }
}
