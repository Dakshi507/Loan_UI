import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserDTO } from '../models/userDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  constructor(private http:HttpClient,private router:Router) { }
    
    signUp(userobj:User){
      return this.http.post<any>('https://localhost:7046/api/Account/register',userobj)
    }
    
    login(loginobj:UserDTO){
      console.log(loginobj);
      return this.http.post<any>('https://localhost:7046/api/Account/login',loginobj)
    }

    
    
}

