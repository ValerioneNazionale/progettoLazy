import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import {Routes} from "@angular/router";

//const subRoutes: Routes = [
 // { path: 'user', component:UserListComponent}
//]

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserUpsertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
