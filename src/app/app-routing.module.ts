import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { SignupComponent } from './components/signup/signup.component';

import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddloanComponent } from './components/addloan/addloan.component';
import { SearchloanComponent } from './components/searchloan/searchloan.component';
import { UpdateloanComponent } from './components/updateloan/updateloan.component';




const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  {path:'addloan',component:AddloanComponent},
  {path:'searchloan',component:SearchloanComponent},
  {path:'updateloan/:id',component:UpdateloanComponent}
  

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
