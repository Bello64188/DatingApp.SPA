import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
user:any
  constructor(private route:ActivatedRoute, private userservice:UserService, private nroute:Router) { }

  ngOnInit(): void {
 this.route.data.subscribe(data=>{
   this.user=data['user']
 });

  }

}
