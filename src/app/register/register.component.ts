import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { throwError } from 'rxjs';
import { AlertifyService } from '../_service/alertify.service';

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
PhoneNumber:""


  }
@Output() cancelRegister = new EventEmitter();
  constructor(private authservice: AuthService, private alertify:AlertifyService) { }

  ngOnInit() {
  }
register(user:NgForm){
  return this.authservice.Register(this.User).subscribe(()=>{
    this.alertify.success("Registered Successfully...");

  },
  (error:any)=>{
    this.alertify.error("Registration Failed.");
    
  }
  )

}
cancel(){
this.cancelRegister.emit(false);
this.alertify.message("Registration has been cancel.");
console.log("Cancelled");

}



}
