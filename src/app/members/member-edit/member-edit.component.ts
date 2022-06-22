import { NgForm } from '@angular/forms';
import { AlertifyService } from './../../_service/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
user:any
photoUrl : string;
@ViewChild('editForm') editForm : NgForm
  constructor(private route:ActivatedRoute, private alertify:AlertifyService, private nroute:Router,
    private userserve:UserService, private auth:AuthService) { }

  ngOnInit(): void {
 this.route.data.subscribe(data=>{
   this.user=data['user']
 });
 this.auth.currentPhotoUrl.subscribe(photoUrl=>this.photoUrl=photoUrl);
  }
updateUser(){
  this.userserve.updateUser(this.auth.decodeToken.id, this.user).subscribe(next=>{
    this.alertify.success(" User Profile Updated!");
  this.editForm.reset(this.user);
  },err=>{
    this.alertify.error('Failed to Update');
  });

}
updatePhotoUrl(photourl:any){
this.user.photoUrl=photourl;
}
}
