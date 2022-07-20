import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from '../_model/Pagination';
import { User } from '../_model/User';
import { AlertifyService } from '../_service/alertify.service';
import { UserService } from '../_service/user.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
users:User[]=[];
pagination:any;
likeParams:string;

  constructor(private userServ:UserService,
     private alertify:AlertifyService,
      private route:ActivatedRoute,
      private auth:AuthService) { }

  ngOnInit() {
this.route.data.subscribe(next=>{
  this.users = next['users'].result;
  this.pagination = next['users'].pagination;
})
// this.likeParams='Likers';
  }

  loadUser(){
    this.userServ
    .getUsers(this.pagination.currentPage,this.pagination.itemPerPage,null, this.likeParams)
    .subscribe((response:any)=>{
      this.users=response.result;
      this.pagination=response.pagination;
    },(er:any)=>{
      this.alertify.error("unable to fetch the user, login please");
    });
  }
  pageChanged(event: PageChangedEvent): void {
    this.pagination.currentPage= event.page;
    this.loadUser();
     }
}
