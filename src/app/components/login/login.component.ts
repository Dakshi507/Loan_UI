import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models/userDTO';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showErrorMessage(showErrorMessage: any) {
    throw new Error('Method not implemented.');
  }
  authenticateUser() {
    throw new Error('Method not implemented.');
  }

  userdto:UserDTO;
  username:any;
  userdto2:UserDTO;
  constructor(private account:AccountService,private router:Router) { 
  this.userdto=new UserDTO();
  this.userdto2=new UserDTO();
  
  }
  ngOnInit(): void {
  }
  login(){
    console.log(this.userdto);
    this.username=this.userdto.username;

    this.account.login(this.userdto).subscribe(data=>{
      this.userdto2 = data as UserDTO;
      console.log(data.role);
      console.log(this.userdto2.role);
      localStorage.setItem("token", this.userdto2.token?this.userdto2.token:"");
     alert("Login Successful!");
     if(this.userdto2.role=="user")
     {
      console.log(this.username);
      this.router.navigate(['../user']);
     }
     else
       this.router.navigate(['../admin']);
    },err=>{alert("Login Unsuccessful");
    this.userdto.username="";
    this.userdto.password="";
  } );

}
register(){
  this.router.navigate(['../signup']);
}


}