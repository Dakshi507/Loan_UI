import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[ { provide: AccountService, useClass: AccountService },
        { provide: Router, useClass: Router },
        { provide:HttpClient , useClass: HttpClient }],
      imports:[
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        HttpClient
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create an instance', inject([Router, AccountService], (router:Router,accountService: AccountService) => {
    let component = new LoginComponent( router,accountService);
    expect(component).toBeTruthy();
  }));
  describe('when the login page loads', () => {
    it('then the login name should be defaulted', inject([Router, AccountService], (router: Router, accountService: AccountService) => {
      let component = new LoginComponent(router, accountService);
      expect(component.login.username).toEqual('admin');
    }));
    it('then the error message should not be displayed', inject([Router, AccountService], (router: Router, userService: AccountService) => {
      let component = new LoginComponent(router, userService);
      expect(component.showErrorMessage).toBe(false);
    }));
    describe('when a valid username and password are entered', () => {
      it('then the home route should be displayed', inject([Router, AccountService], (router: Router, userService: AccountService) => {
        spyOn(userService, 'login').and.returnValue(Observable.of(true));
        spyOn(router, 'navigateByUrl').and.returnValue('');
        let component = new LoginComponent(router, userService);
        component.authenticateUser();
        expect(router.navigateByUrl).toHaveBeenCalled();
      }));
    });
        describe('when an invalid username and password are entered', () => {
      it('then Login Failed should be displayed', inject([Router, AccountService], (router: Router, userService: AccountService) => {
        spyOn(userService, 'login').and.returnValue(Observable.of(false));
        spyOn(router, 'navigateByUrl').and.returnValue('');
        let component = new LoginComponent(router, userService);
        component.authenticateUser();
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        expect(component.showErrorMessage).toBe(true);
      }));
    });
  });
});
class RouterStub {
  navigateByUrl(url: string) { return url; }
}