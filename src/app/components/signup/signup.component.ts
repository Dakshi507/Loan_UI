import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserDTO } from 'src/app/models/userDTO';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User;
  userdto:UserDTO;
  constructor(private account:AccountService,private route:Router) {
    this.user=new User();
    this.userdto=new UserDTO();
   }
   userRegister(){
    console.log(this.user);
    this.account.signUp(this.user).subscribe(data=>{
      this.userdto = data as UserDTO;
      localStorage.setItem("token", this.userdto.token?this.userdto.token:"");
     console.log(this.userdto);
     alert("Register Successful!");
     this.route.navigate(['../login']);
    },
    err=>{alert("Register Unsuccessful.Password and Confirm password does not match!!");
    this.user.firstname="";
    this.user.lastname="";
    this.user.username="";
    this.user.password="";
    this.user.confirmpassword="";
    this.user.role="";
  } );
  }

  cancel(){
    this.user.username="";
    this.user.password="";
    this.user.confirmpassword="";
    this.user.role="";
  }
  back(){
    this.route.navigate(['../login']);
  }
  ngOnInit(): void {
  }

}
