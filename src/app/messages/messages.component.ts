import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/_service/user.service';
import { Pagination, PaginatedResult } from './../_model/Pagination';
import { IMessage } from './../_model/Message';
import { Component, OnInit } from '@angular/core';
import { User } from '../_model/User';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
messages: IMessage[] = [];
pagination:Pagination;
messageContainer='unread'
live:boolean=false;
  constructor(private userService:UserService,
     private authService:AuthService,
     private alertify:AlertifyService,
     private route:ActivatedRoute ) { }

  ngOnInit() {
     this.route.data.subscribe(data=>{
      this.messages =data['messages'].result;
      this.pagination= data['messages'].pagination;
     })
  }
  loadMessages(){
this.userService.getMessage(this.authService.decodeToken.id,this.pagination.currentPage
  ,this.pagination.itemPerPage,this.messageContainer).subscribe((res:PaginatedResult<IMessage[]>)=>{
    this.messages= res.result;
    this.pagination=res.pagination;
  },err=>{
    this.alertify.error('Unable to load the messages');
  })

  }
  pageChanged(event: PageChangedEvent): void {
    this.pagination.currentPage= event.page;
    this.loadMessages();
     }
}
