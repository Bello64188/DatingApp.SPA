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
  userToken:any;
 decodeToken:any;
model={
  Email:'',
  Password:''
};


  constructor(public authservice:AuthService, private alertify:AlertifyService, private router:Router ) { }

  ngOnInit(): void {

  }
  Login(){
    return this.authservice.login(this.model).subscribe(data=>{
      this.alertify.success("login successfully");

    },
    (err:any)=>{
      this.alertify.error("Login Failed.");
 },
 ()=>{
   this.router.navigate(['/members']);
 }
    )
  }
// login(form:NgForm){

//     return this.authservice.Login(form.value).subscribe((res:any)=>{
//       localStorage.setItem("token",res.token);
//      this.decodeToken=this.jwtHelper.decodeToken(res.token);
//      this.authservice.getActiveUser();
//       this.userToken=res.token;

//       this.alertify.success("login successfully");

//     },
//     (err:any)=>{
//          this.alertify.error("Login Failed.");
//     },
//     ()=>{
//       this.router.navigate(['/members']);
//     }

//     );

// }
logout(){
  localStorage.removeItem("token");
  this.alertify.message("Logged out Successfully");
  this.router.navigate(['/home']);


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
