import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {UserUpsertComponent} from "../user-upsert/user-upsert.component";
import {UserListComponent} from "./user-list.component";
import {ErrorComponent} from "../../error/error.component";
import {HomeComponent} from "../../home/home.component";

//const subRoutes: Routes = [
 // { path: '',component:UserListComponent },
 // { path:'/user-detail', component:UserDetailComponent},
  //{ path:'/user-upsert', component:UserUpsertComponent},
 // {path:'**',pathMatch:'full',component:ErrorComponent}
//]


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
   // RouterModule.forChild(subRoutes)
  ]
})
export class UserListModule { }
