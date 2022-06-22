import { AlertifyService } from './../../_service/alertify.service';
import { UserService } from './../../_service/user.service';
import { AuthService } from './../../auth.service';
import { environment } from './../../../environments/environment';
import { Photo } from './../../_model/Photo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
@Input() photos: Photo[];
uploader :FileUploader ;
hasBaseDropZoneOver:false;
hasAnotherDropZoneOver: false;
BaseUrl= environment.ApiUrl;
currentPhoto:Photo;
@Output() getMemberPhoto = new EventEmitter<string>();

  constructor(private authservice: AuthService , private userService:UserService,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.initialUploader();
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

initialUploader(){
this.uploader= new FileUploader({
  url:this.BaseUrl+'user/'+ this.authservice.decodeToken.id + '/photo',
  authToken:'Bearer '+ localStorage.getItem('token'),
  isHTML5:true,
  autoUpload:false,
  allowedFileType:['image'],
  removeAfterUpload:true,
  maxFileSize: 7*1024*1024,
  headers:[
    {
      name:'X-Requested-with',
      value:'XMLHttpRequest'

    }
  ]
});
this.uploader.onSuccessItem =(item,response,status,headers)=>{
  if(response){
     const res: Photo= JSON.parse(response)
     const photo = {
      id:res.id,
      url:res.url,
      dateAdd:res.dateAdd,
      description:res.description,
      isMain:res.isMain
     }
     this.photos.push(photo);
  };
}

}
setMainPhoto(photo:Photo){
return this.userService.setMainPhoto(this.authservice.decodeToken.id, photo.id).subscribe(()=>{
  this.currentPhoto=this.photos.filter(p=>p.isMain==true)[0];
  this.currentPhoto.isMain=false;
  photo.isMain=true;
 this.authservice.changeMemberPhoto(photo.url);
 this.authservice.currentUser.photoUrl= photo.url;
 localStorage.setItem('userfrom', JSON.stringify(this.authservice.currentUser));

},(error=>{
  this.alertify.error("Unable to set the photo main");
})
)
};
deletePhoto(id:number){
  this.alertify.comfirm("About to delete this particular photo are you sure?",()=>{
     return this.userService.deletePhoto(this.authservice.decodeToken.id,id).subscribe(()=>{
      this.photos.slice(this.photos.findIndex(p=>p.id==id),1)
      this.alertify.success("Photo has been deleted.");

  },(error=>{
    this.alertify.error("Failed to delete the photo");
  })
  )
  })

}
}
