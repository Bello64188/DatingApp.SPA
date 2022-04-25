import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User={
Email:"",
Password:"",
FirstName:"",
LastName:"",
PhoneNumber:"",
Roles:""
  }

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
register(form:NgForm){
  return this.authservice.Register(this.User).subscribe()

}
cancel(){
console.log("Cancelled");

}
}
