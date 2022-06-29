import { Pagination } from './../../_model/Pagination';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_model/User';
import { AlertifyService } from '../../_service/alertify.service';
import { UserService } from '../../_service/user.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
 users:User[]=[];
 user: User= JSON.parse(localStorage.getItem('userfrom')?? '');
 pagination:any;
 genderList =[
  {value:'male', display:'Males'},
  {value :'female', display:'Females'}
 ];
userParams: any={};
page:number;
  constructor(private userServ:UserService, private alertify:AlertifyService, private route:ActivatedRoute) { }

  ngOnInit() {
   this.route.data.subscribe(data=>{
     this.users=data['users'].result;
     this.pagination=data['users'].pagination;

   });
  this.userParams.gender= this.user.gender==='female'? 'male':'female';
  this.userParams.minAge = 18;
  this.userParams.maxAge = 99;
  this.userParams.orderBy ='lastActive';

  }


loadUser(){
  this.userServ
  .getUsers(this.pagination.currentPage,this.pagination.itemPerPage,this.userParams)
  .subscribe((response:any)=>{
    this.users=response.result;
    this.pagination=response.pagination;
  },(er:any)=>{
    this.alertify.error("unable to fetch the user, login please");
  });
}
resetFilter(){
  this.userParams.gender= this.user.gender ==='female'? 'male':'female';
  this.userParams.minAge = 18;
  this.userParams.maxAge = 99;
  this.userParams.orderBy ='lastActive';
  this.loadUser();


}
pageChanged(event: PageChangedEvent): void {
  this.pagination.currentPage= event.page;
  this.loadUser();
   }

}
