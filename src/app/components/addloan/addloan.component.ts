import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoanDto } from 'src/app/models/loanDto';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ResponseApi } from 'src/app/models/ResponeApi';

@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css'],
  
})
export class AddloanComponent implements OnInit{
  loanDto: LoanDto;
  userdata: any;
  responseApi!:ResponseApi[];
  loanlist!: any;
 
  constructor(private userService:UserService,private router:Router) { 
    this.loanDto=new LoanDto();
}
  ngOnInit(): void {
    
      this.userService.getLoanList().subscribe(data=>{
        this.responseApi = data;
        this.loanlist = this.responseApi.values
        console.log(this.loanlist)
      })
  }
  AddLoan(){
    
    console.log(this.loanDto);
    this.userService.addLoan(this.loanDto).subscribe(data=>{
      data as LoanDto;
     console.log(data);
     alert("Added Successfully!");
     this.router.navigate(['../admin']);
    
    },
    
    err=>{alert("please fill all the feilds!!");
    this.loanDto.Userid=undefined;
    this.userdata.firstname=undefined;
    this.userdata.lastname=undefined;
    this.loanDto.Loannumber=undefined;
    this.loanDto.Propertyaddress=undefined;
    this.loanDto.Loanamount=undefined;
    this.loanDto.Loantype=undefined;
    this.loanDto.Loanterm=undefined;
  }
  
  );
    
     
    
  }
    cancel(){
      this.loanDto.Userid=undefined ;
      this.loanDto.Loanid=undefined;
      this.loanDto.Loannumber;
      this.loanDto.Propertyaddress="";
      this.loanDto.Loanamount=undefined;
      this.loanDto.Loantype="";
      this.loanDto.Loanterm="";
  }
  valuechange(event ){
    this.userService.getuserdata(event).subscribe(data=>{
      this.responseApi = data;  
    console.log(this.userdata)
    if(this.responseApi.values == null){
      alert("User Id is not Present")
    }
    else{
      this.userdata = this.responseApi.values
    }
    this.userdata = this.responseApi.values
    console.log(this.userdata)
  })
  
  }
  back(){
    this.router.navigate(['../admin']);
  }

}
