import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseApi } from 'src/app/models/ResponeApi';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updateloan',
  templateUrl: './updateloan.component.html',
  styleUrls: ['./updateloan.component.css']
})
export class UpdateloanComponent implements OnInit{
  responseApi!:ResponseApi[];
  loanValue:any;
  loanno!:number;
  id!:string
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router ) { 
    
}
  ngOnInit(): void {
    this.getLoanlist();
  }

  private getLoanlist(){
    this.route.paramMap.subscribe({
      next: (params) => {
        // this.id = params.get('id') as string;
        // this.loanno = parseInt(this.id)
        // console.log(this.loanno)
       
        this.id = params.get('id') as string
        this.loanno = parseInt(this.id)
        if(this.id){
          this.userService.geLoandata(this.id)
          .subscribe({
            next:(data)=>{
              this.responseApi = data;
              this.loanValue = this.responseApi.values;
              console.log(this.loanValue)
              console.log(this.loanValue.loanamount);
            }
          })
        }
      }
    })
  }

  updateLoan(){
    //this.userService.updateLoandata(this.id,this.loanValue)
    this.userService.updateLoandata(this.loanValue)
    .subscribe({
      next:(data)=>{
        console.log("well"+data)
        alert("Updated Successfully!");
        this.router.navigate(['../searchloan']);
      }
    })
  }
  back(){
    this.router.navigate(['../searchloan']);
  }



}
