import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  jwtHelper:JwtHelperService= new JwtHelperService()
  title = 'DatingApp.SPA';
  constructor(private nav:NavComponent, private authservice:AuthService){

  }
  ngOnInit() {
    const token = localStorage.getItem("token");
    if (token) {
      this.authservice.decodeToken=this.jwtHelper.decodeToken(token);
    }



  }

}
