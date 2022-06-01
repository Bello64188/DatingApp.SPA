import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_model/User';
import { AlertifyService } from '../../_service/alertify.service';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
 users:any[]=[];
  constructor(private userServ:UserService, private alertify:AlertifyService, private route:ActivatedRoute) { }

  ngOnInit() {
   this.route.data.subscribe(data=>{
     this.users=data['users']
   });


  }
// loadUser(){
//   return this.userServ.getUsers().subscribe((user:User[])=>{
//     this.users=(user);
//     this.alertify.message('wellcome to member list');
//   },
//   (err=>{
//     return this.alertify.error('please logout and relogin again.');
//   })
//   )
// }
}
