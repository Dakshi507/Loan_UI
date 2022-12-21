import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseApi } from '../models/ResponeApi';
import { LoanDto } from '../models/loanDto';
import { LoanList } from '../models/loanList';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  valueFromComponent:string = "";
   user;
  constructor(private http:HttpClient) {
    this.user = new User();
   }

  //loanlist:LoanList[]=[];
  getLoanList():Observable<ResponseApi[]>{
    
    return this.http.get<ResponseApi[]>("https://localhost:7289/api/Loan").pipe(map(response=>{return response}))

  }

  addLoan(loanDto:LoanDto){
    // console.log(loanDto);
     return this.http.post<any>("https://localhost:7289/api/Loan",loanDto);
  }
  
  getuserdata(id:number):Observable<ResponseApi[]>{
    
    return this.http.get<ResponseApi[]>('https://localhost:7289/api/User/GetUserbyUserId/'+id).pipe(map(response=>{return response}))
  }

  geLoandata(id:string):Observable<ResponseApi[]>{
    
    return this.http.get<ResponseApi[]>('https://localhost:7289/api/Loan/GetLoanbyLoanNo/'+id).pipe(map(response=>{return response}))
  }

  // updateLoandata(id:string, loanDto:any):Observable<ResponseApi[]>{
  //   return this.http.put<any>('https://localhost:7289/api/Loan/' + id, loanDto);
  // }
  updateLoandata(loanDto:any):Observable<ResponseApi[]>{
    return this.http.put<any>('https://localhost:7289/api/Loan/', loanDto);
  }
  getusersdetail():Observable<ResponseApi[]>{
    return this.http.get<ResponseApi[]>('https://localhost:7289/api/User').pipe(map(response=>{return response}))
  }
}

