import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseApi } from 'src/app/models/ResponeApi';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  searchValue!: number;
  constructor(private _userService:UserService,private router:Router){

  }
  responseApi!:ResponseApi[];
  searchdata!:any
  loanlist:any = [];
  userlist:any=[];
  allDetails:any=[]

  ngOnInit(): void {
  this.loanlist = this.getlon()
  this.userlist = this.getUSer();
  this.getalldetails();
  
}
getlon(){
  this._userService.getLoanList().subscribe(data=>{
    this.responseApi = data;
    
    this.loanlist = this.responseApi.values
  console.log(this.loanlist)
  
})
}
getUSer()
{
  this._userService.getusersdetail().subscribe(data=>{
    console.log(data.values)
    this.userlist=data.values
    console.log("ups")
    console.log(this.userlist)
    
    
  })
}

getalldetails(){
  for (var lon of this.loanlist)  {
    for(var user of this.userlist){
      if(lon.userid == user.userid){
        console.log("user.lastname")
        console.log(user.lastname)
      }
    }
  }
}
back(){
  this.router.navigate(['../admin']);
}


}
