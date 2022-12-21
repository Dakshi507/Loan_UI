import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './components/signup/signup.component';
import { CommonInterceptor } from './services/common.interceptor';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavComponent } from './components/nav/nav.component';
import { AddloanComponent } from './components/addloan/addloan.component';
import { SearchloanComponent } from './components/searchloan/searchloan.component';

import { UpdateloanComponent } from './components/updateloan/updateloan.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    AdminComponent,
    NavComponent,
    AddloanComponent,
    SearchloanComponent,
    UpdateloanComponent,

   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    Ng2SearchPipeModule
   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptor,
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
