import { AuthService } from './../../auth.service';
import { UserService } from 'src/app/_service/user.service';
import { AlertifyService } from './../../_service/alertify.service';
import { Router } from '@angular/router';
import { User } from './../../_model/User';
import { Component, Input, OnInit } from '@angular/core';
import { NavComponent } from 'src/app/nav/nav.component';

@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.css']
})
export class MembersCardComponent implements OnInit {

@Input() user :User;
  constructor(private route :Router
     , private alertify:AlertifyService,
      private userserve: UserService,
       private authser:AuthService) { }

  ngOnInit(): void {

  }
  sendLike(id:string){
this.userserve.sendLike(this.authser.decodeToken.id,id).subscribe(()=>{
  this.alertify.success("You have Like: "+ this.user.knownAs);

},(error=>{
  this.alertify.error("Have You Add User before? Please Check.");
}))
  }

}
