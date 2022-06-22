import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_service/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './route';
import { AuthGuard } from './_guard/auth.guard';
import { UserService } from './_service/user.service';
import { MembersCardComponent } from './members/members-card/members-card.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PhotoEditComponent } from './members/photo-edit/photo-edit.component';
import { FileDropDirective, FileSelectDirective, FileUploader, FileUploadModule } from 'ng2-file-upload';
import { HttpInterceptorService } from './service/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListComponent,
      MessagesComponent,
      MembersCardComponent,
      MemberDetailsComponent,
      MemberEditComponent,
      PhotoEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoute),
    TabsModule.forRoot(),
    FileUploadModule

  ],
  providers: [
    AlertifyService,
    AuthGuard,
    NavComponent,
    UserService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
