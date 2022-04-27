import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../_service/alertify.service';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public jwtHelper:JwtHelperService=new JwtHelperService();
 decodeToken:any;
model={
  Email:'',
  Password:''
};


  constructor(private authservice:AuthService, private alertify:AlertifyService ) { }

  ngOnInit(): void {

  }
login(form:NgForm){

    return this.authservice.Login(form.value).subscribe((res:any)=>{
      localStorage.setItem("token",res.token);
      this.decodeToken= this.jwtHelper.decodeToken(res.token);
      console.log(this.decodeToken);

      this.alertify.success("login successfully");

    },
    (err:any)=>{
         this.alertify.error("Login Failed.");


    }

    );

}
logout(){
  localStorage.removeItem("token");
  this.alertify.message("Logged out Successfully");


}


isUserAuth(){
  const token :string |null = localStorage.getItem("token");
  if (token && !this.jwtHelper.isTokenExpired(token)) {
    return true
  } else {
return token;
  }
}
}
