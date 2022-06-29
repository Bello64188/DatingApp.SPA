import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }
  patternValidation(): ValidatorFn{
    return (control:AbstractControl):{[key:string]:any}=>{
      if(!control.value){
         return null as any;
      }
       const regex = new RegExp('^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=.*?[#?!@$%^&*-]).{4,10}$')
     const valid = regex.test(control.value);
     return valid ? null as any : {invalidPassword:true};
    };
  }
}
