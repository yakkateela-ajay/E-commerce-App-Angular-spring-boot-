import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from '../registration/user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { Cart } from '../user-cart/cart';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  user = new User();
  user1=new User();
  cart = new Cart();
  userId:number=0;
  email='';
  msg = '';
  mobile='';
  id='';
  constructor(private service: LoginService, private router: Router) {
    this.loggedIn.next(true);
  }

  ngOnInit(): void {}

  loginUser() {
    this.service.loginUser(this.user).subscribe(
      (data) => {
        this.email=this.user.email;
        sessionStorage.setItem("email",this.email);
        this.router.navigate(['/user-interface']);
        
      },
      (error) => {
        alert('exception occured   ' + this.user.email);
        this.msg = 'Bad Credentials, please enter valid Credentials';
      }
    );
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem("email");
    console.log(!(user===null));
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem("email")
    this.router.navigate(['/login']);
  }
  
  getuserId(){
    
    this.service.getuserid(this.email).subscribe( data => {
        this.userId=data.userId;
        this.user1=data;
        console.log(this.userId)
        this.mobile=data.mobile;
        this.id=''+data.userId;
        alert(this.id);
        sessionStorage.setItem("userid",this.id);
        console.log(data);
        alert(this.mobile);
        alert(data.userId)
        alert(data);
        return this.userId;
        
    });
    let loginid= sessionStorage.getItem("userid")
    
    let uid=this.user1.userId;
    alert("hello"+uid)
    return uid;
  }
}
