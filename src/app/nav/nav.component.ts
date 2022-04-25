import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model={
  Email:'',
  Password:''
};

  
  constructor(private authservice:AuthService ) { }

  ngOnInit(): void {
  }
login(form:NgForm){
 return this.authservice.Login(form.value).subscribe((res:any)=>{
   localStorage.setItem("token",res.token);
   console.log("login successfull");
   
   
 },
 );
 
}
}
