import { AuthService } from 'src/app/auth.service';
import { User } from './../../_model/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { UserService } from 'src/app/_service/user.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
users:any;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
photoUrl: string;
  constructor(private authserv:AuthService,private alertify:AlertifyService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.route.data.subscribe(data=>{
     this.users=data['users'];

   })
   this.galleryOptions = [
    {
        width: '500px',
        height: '500px',
        thumbnailsColumns: 4,
        imagePercent:100,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:false

    }
  ];
  this.galleryImages=this.getImage();
this.authserv.currentPhotoUrl.subscribe(photoUrl=>this.photoUrl=photoUrl);
}
getImage(){
  const imageUrls =[]
  for (let i = 0; i < this.users.photos.length; i++) {
   imageUrls.push({
      small: this.users.photos[i].url,
      medium: this.users.photos[i].url,
      big: this.users.photos[i].url,
      description: this.users.photos[i].description


   });

 }
   return imageUrls;
}

// loadUser(){
// return this.userserv.getUser(+this.route.snapshot.params['id']).subscribe((user:User)=>{
//  this.users=user;


//  this.alertify.success('welcome member detail page');
// },
// (err:any)=>{
//   this.alertify.error('you cannot access this area try and login please');
// });
// }
}
