import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonInterceptor } from 'src/app/services/common.interceptor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private router:Router ) { 
    
  }
  ngOnInit(): void {}
  logout(){
    localStorage.removeItem('token');
    //this.router.navigate(['../login']);
    this.router.navigateByUrl('/');
  }

}
