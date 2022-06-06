import { RegisterComponent } from './register/register.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberDetailsComponent } from './members/member-details/member-details.component';

import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ListComponent } from "./list/list.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from "./_guard/auth.guard";
import { PreventUnsavedChandesGuard } from './_guard/prevent-unsaved-chandes.guard';

export const appRoute : Routes=[
{path:'home',component: HomeComponent},
{
  path: '',
  runGuardsAndResolvers: 'always',
  canActivate:[AuthGuard],
  children:[
    {path:'messages',component: MessagesComponent},
    {path:'register',component: RegisterComponent},
    {path:'members',component: MemberListComponent,resolve:{users:MemberListResolver}},
    {path:'member/edit',component: MemberEditComponent,resolve:{user:MemberEditResolver},
          canDeactivate:[PreventUnsavedChandesGuard]},
    {path:'members/:id',component: MemberDetailsComponent,resolve:{users:MemberDetailResolver}},
    {path:'lists',component: ListComponent}
  ]
},
{path:'**', redirectTo: 'home',pathMatch:'full'}

];
