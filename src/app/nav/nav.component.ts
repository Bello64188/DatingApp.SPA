import { User } from './../_model/User';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

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
  model: any = {};
  photoUrl:string;

  constructor(public authservice:AuthService, private alertify:AlertifyService, private router:Router ) { }

  ngOnInit(): void {
    this.authservice.currentPhotoUrl.subscribe(photoUrl=>this.photoUrl=photoUrl)
  }
  Login(){
    return this.authservice.login(this.model).subscribe(()=>{

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
  this.authservice.decodeToken=null;
  this.authservice.currentUser= null;
  localStorage.removeItem("token");
  localStorage.removeItem("userfrom");
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
