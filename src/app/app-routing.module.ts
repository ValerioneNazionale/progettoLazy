import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./features/home/home.component";
import {UserListComponent} from "./features/user/user-list/user-list.component";
import {ErrorComponent} from "./features/error/error.component";


const routes:Routes=[
  {path:'home',loadChildren:()=>import('./features/home/home.module').then(m=>m.HomeModule)},
 // {path:'user',loadChildren:()=>import('./features/user/user.module').then(u=>u.UserModule)},
  {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'**',redirectTo:'error',pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
