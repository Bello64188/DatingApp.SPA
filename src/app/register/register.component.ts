import { Router } from '@angular/router';
import { CustomValidationService } from './../_service/custom-validation.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { throwError } from 'rxjs';
import { AlertifyService } from '../_service/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { User } from '../_model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter();
user:any;
registerForm:FormGroup;
submitted:boolean=false;
Bsconfig: Partial<BsDatepickerConfig>
  constructor(private authservice: AuthService,
    private alertify:AlertifyService, private fb: FormBuilder,
     private customValidaor:CustomValidationService, private router:Router) {

  }

  ngOnInit() {
  this.createForm();
  this.Bsconfig={
    containerClass: 'theme-orange'
  };
  }
  createForm(){
    this.registerForm= this.fb.group({
      gender: ['male'],
      email: [ '',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(4), this.customValidaor.patternValidation()]],
      confirmPassword: ['',Validators.required],
      name: ['',Validators.required],
      knownAs:['',Validators.required],
      dateOfBirth:[null,Validators.required],
      city:['',Validators.required],
      country:['',Validators.required],
      phoneNumber: ['',Validators.required]

     },{validators: this.passwordMatchValidator});
  }
  passwordMatchValidator: ValidatorFn= (p:AbstractControl): ValidationErrors | null=>{
    return p.get('password')?.value == p.get('confirmPassword')?.value ? null:{'mismatch': true};
  }
  get registerFormControl(){
    return this.registerForm.controls;
  }
  register(){
  this.submitted=true;
  if(this.registerForm.valid){
    this.user = Object.assign({}, this.registerForm.value)
    this.authservice.Register(this.user).subscribe(()=>{
    this.alertify.success("Registered Successfully...");
    },
    (error:any)=>{
      this.alertify.error("Registration Failed.");

  },()=>{
    this.authservice.login(this.user).subscribe(()=>{
      this.router.navigate(['/members'])
      this.alertify.message('Welcome to memeber page');
    })
  }
    )

  }
  }
cancel(){
 this.submitted=false;
this.cancelRegister.emit(false);
this.alertify.message("Registration has been cancel.");
console.log("Cancelled");

}



}
