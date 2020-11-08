import { Component, OnInit } from '@angular/core';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userEmail='hii';
  constructor(public loginComponent: LoginComponent, public adminComponent: AdminloginComponent) {}
  ngOnInit(): void {
    this.userEmail=this.loginComponent.email;
  }
  onLogout() {
    this.loginComponent.logout();
  }
  adminlogout(){
    this.adminComponent.adminLogout();
  }
}
