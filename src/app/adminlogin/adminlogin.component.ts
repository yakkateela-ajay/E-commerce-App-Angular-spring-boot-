import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../registration/user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  msg = '';
  user = new User();

  email: string = '';
  password: string = '';
  constructor(private router: Router) {
    this.loggedIn.next(false);
  }

  ngOnInit(): void {}
  adminlogin() {
    this.email = this.user.email;
    this.password = this.user.password;
    if (this.email === 'ajay@gmail.com' && this.password === 'ajay1234') {
      this.loggedIn.next(true);
      sessionStorage.setItem('adminEmail', this.email);
      this.router.navigate(['/products']);
    } else {
      this.router.navigate(['/admin-login']);
      this.msg = 'Bad credentials, Please enter valid credebtials';
    }
  }
  isadminloggedin(){
    let admin = sessionStorage.getItem("adminEmail")
    console.log(!(admin===null));
    return !(admin === null);
  }
  adminLogout() {
    sessionStorage.removeItem("adminEmail");
    this.router.navigate(['/admin-login']);
  }
}
