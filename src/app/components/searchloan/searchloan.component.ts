import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoanList } from 'src/app/models/loanList';
import { ResponseApi } from 'src/app/models/ResponeApi';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchloan',
  templateUrl: './searchloan.component.html',
  styleUrls: ['./searchloan.component.css']
})
export class SearchloanComponent implements OnInit{

  constructor(private _userService: UserService,private route:Router){

  }
  responseApi!:ResponseApi[];
  loanlist:any;
  loanno!: number;
  bool:boolean = false;
  

  ngOnInit(): void {
    this.loadallLoan();
    
}
private loadallLoan():void{
    this._userService.getLoanList().subscribe(data=>{
      this.responseApi = data;
      this.loanlist = this.responseApi.values
      console.log(this.loanlist)
    
     
      
      
    })
  }
  onSubmit(loannofromUser: string) {
    for (var i in this.loanlist) {
      console.log(parseInt(loannofromUser))
      if ( parseInt(loannofromUser)==this.loanlist[i].loannumber){
        console.log("gateway")
        this.bool=true
        //this.route.navigate(['../updateloan',parseInt(loannofromUser)])
        break
      }
    }
    if(this.bool==true){
      this.route.navigate(['../updateloan',parseInt(loannofromUser)])
    }
     else alert("Please enter valid Loan number")
  }
  back(){
    this.route.navigate(['../admin']);
  }

}